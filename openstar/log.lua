

local optl         = require("optl")
local stool        = require("stool")
local modcache     = require "modcache"
local logger       = require "resty.logger.socket"

local ngx_var      = ngx.var
local ngx_ctx      = ngx.ctx
local io_open      = io.open
local ngx_log      = ngx.log
local ngx_ERR      = ngx.ERR
local ipairs       = ipairs
local pairs        = pairs
local tostring     = tostring
local type         = type
local table_insert = table.insert
local table_concat = table.concat
local string_lower = string.lower
local string_sub   = string.sub


local next_tb  = ngx_ctx.next_tb or {}
local base_msg = next_tb.base_msg
local waf_log  = next_tb.waf_log

local config        = modcache.keys["config"].cache
local config_base   = config.base
local _log_onLocal  = config_base.log_onLocal
local _log_onRemote = config_base.log_onRemote
local pub_plugin    = Pub_plugin

local fd_waflog = G_filehandler
local fd_Debug  = G_filehandlerDebug
local set_x_dict_cnt = optl.set_x_dict_cnt

-- 拦截日志 对 post body 长度进行控制；对response body 长度进行控制
-- posts_all 10240
-- rep_body  10240
local function logformat(_basemsg , _log_conf)
    local log_map = {}
    for k , v in pairs(_basemsg) do
        if k == "posts_all" then
            log_map["$" .. k] = ngx.encode_base64(string_sub(v, 1, 10240))
        elseif k == "rep_body" then
            log_map["$" .. k] = ngx.encode_base64(string_sub(v, 1, 10240))
        else
            log_map["$" .. k] = v
        end
    end
    local re_log_tb = {}
    for _ , v in ipairs(_log_conf.format_tb) do
        -- 替换 \t
        local tmp_t = log_map[v] or v
        tmp_t = string.gsub(tmp_t,"\t","    ")
        table_insert(re_log_tb , tmp_t)
    end
    return re_log_tb
end

local function writefile_handler(_fd , _msg)
    if _fd then
        _fd:write(tostring(_msg))
        _fd:flush()
    end
end

local function ngx_sts()
    -- 全局访问计数
    local gl_request_count = "request count"
    set_x_dict_cnt("count_dict",gl_request_count)

    local gl_request_method = (ngx_var.request_method or "unknown method") .. " global_request"
    set_x_dict_cnt("count_dict",gl_request_method)

    -- host count 计数
    set_x_dict_cnt("count_dict",ngx_var.server_name .. " global_host")

    -- host - uri 计数
    -- local host_uri = ngx_var.server_name..(ngx_var.uri or "@NULL@")
    -- set_x_dict_cnt("count_dict",host_uri)

    -- host - body_bytes 换成 bytes_sent 计数
    -- 2021-4-18
    -- set_x_dict_cnt("sent_byte_dict",ngx_var.server_name,tonumber(ngx_var.body_bytes_sent))
    set_x_dict_cnt("sent_byte_dict",ngx_var.server_name,tonumber(ngx_var.bytes_sent))

    -- HIT cache 记录
    if ngx_var.p_cache == "0" and ngx_var.request_uri and ngx_var.waf_x_cache == "HIT" then
        set_x_dict_cnt("hit_url_dict",ngx_var.host..ngx_var.request_uri)
    end
end

if config_base.ngx_status == "on" and ngx_var.remote_addr ~= "127.0.0.1" then
    ngx_sts()
end

-- 先进行 base_msg 的写入操作
-- 可能会出现数据丢失问题
if next_tb.debug then
    writefile_handler(fd_Debug,ngx.localtime().."\t"..stool.tableTojsonStr(base_msg).."\n\n")
end

local log_Mod = config["log_Mod"] or {}
if config_base["log_Mod"] and config_base["log_Mod"]["state"] ~= "off" then
    for i , v in ipairs(log_Mod) do
        if v.state == "on" and optl.re_app_ext(v.app_ext , base_msg) then
            if type(pub_plugin[v.func[1]]) == "function" then
                local func = pub_plugin[v.func[1]]
                func(base_msg , v.func[2])
            end
            break
        end
    end
end

if type(waf_log) == "table" and type(base_msg) == "table" then
    base_msg.request_id = ngx_var.request_id
    -- 进行 waf log 计数操作 + 日志操作
    -- 一些代码没有进行合并，后续不同mod处理可能有差异
    base_msg.waf_action      = waf_log.action
    base_msg.waf_mod         = waf_log.mod
    base_msg.waf_id          = waf_log.id
    base_msg.waf_owasp       = waf_log.waf
    local logTag = true
    if waf_log.mod == "ip_Mod" then
        -- set_x_dict_cnt("count_dict",ip .. " log/deny")
        set_x_dict_cnt("count_dict",base_msg.ip .. " "..waf_log.action)
        if waf_log.waf then
            set_x_dict_cnt("owasp_dict",string_lower(waf_log.waf))
        end
    elseif waf_log.mod == "host_Mod.ip_Mod" then
        -- set_x_dict_cnt("count_dict",host_ip .. " log/deny")
        set_x_dict_cnt("count_dict",base_msg.host.."_"..base_msg.ip .. " "..waf_log.action)
        if waf_log.waf then
            set_x_dict_cnt("owasp_dict",string_lower(waf_log.waf))
        end
    elseif waf_log.mod == "host_method_Mod" then
        -- set_x_dict_cnt("count_dict","host_method_Mod deny")
        set_x_dict_cnt("count_dict","host_method_Mod deny")
        set_x_dict_cnt("owasp_dict","host_method_Mod")
        -- "host_method_Mod deny [-1]"
    elseif waf_log.mod == "app_Mod" or waf_log.mod == "host_Mod.app_Mod" then
        -- set_x_dict_cnt("count_dict",Mod.." deny")
        if waf_log.action == "deny" or waf_log.action == "func.break" or waf_log.action == "func.deny" then
            set_x_dict_cnt("count_dict",waf_log.mod.." deny")
            if waf_log.waf then
                set_x_dict_cnt("owasp_dict",string_lower(waf_log.waf))
            end
        end
    elseif waf_log.mod == "referer_Mod" or waf_log.mod == "uri_Mod" or waf_log.mod == "header_Mod" or
      waf_log.mod == "useragent_Mod" or waf_log.mod == "cookie_Mod" or waf_log.mod == "args_Mod" or
      waf_log.mod == "post_Mod" then
        set_x_dict_cnt("count_dict",waf_log.mod.." "..waf_log.action)
        if waf_log.waf then
            set_x_dict_cnt("owasp_dict",string_lower(waf_log.waf))
        end
    elseif waf_log.mod == "network_Mod" then
        set_x_dict_cnt("count_dict","network_Mod deny "..base_msg.ip)
        if waf_log.waf then
            set_x_dict_cnt("owasp_dict",string_lower(waf_log.waf))
        end
    end
    if not logTag then
        -- logTag 用于标识是否记录日志
        -- 有时候 cc 和 ip 黑名单量太大，可以从代码这里关闭这些请求的 waf 拦截日志记录
        -- 懒得写配置文件进行控制了
        return
    end

    base_msg.server_protocol = ngx_var.server_protocol
    -- number 类型参数

    -- 常数time
    base_msg.ngx_now         = ngx.now()
    base_msg.ngx_localtime   = ngx.localtime()

    --
    base_msg.status          = ngx.status
    base_msg.bytes_sent      = ngx_var.bytes_sent or 0
    base_msg.request_time    = ngx.now() - ngx.req.start_time()
    --base_msg.request_time = ngx_var.request_time

    if _log_onLocal.state == "on" then
        -- 写文件相关操作
        local _log_tb  = logformat(base_msg , _log_onLocal)
        local _log_str = table_concat(_log_tb , (_log_onLocal.tb_concat or " "))
        --stool.writefile(_log_onLocal.path, _log_str, "a+")
        writefile_handler(fd_waflog , _log_str)
    end
    if _log_onRemote.state == "on" then
        -- 判断 format_tb 是否为空 ！！！ 特别处理（使用WAF拦截日志）
        local _log_remote_str
        if #format_tb == 0 then
            local _log_tb  = logformat(base_msg , _log_onLocal)
            _log_remote_str = table_concat(_log_tb , (_log_onLocal.tb_concat or " "))
        else
            local _log_tb  = logformat(base_msg , _log_onRemote)
            _log_remote_str = table_concat(_log_tb , (_log_onRemote.tb_concat or " "))
        end
        if not logger.initted() then
            local ok, err = logger.init{
                host = _log_onRemote.host,
                port = _log_onRemote.port,
                sock_type = _log_onRemote.sock_type or "udp",
                pool_size = _log_onRemote.pool_size or 20,
                retry_interval = _log_onRemote.retry_interval or 200,
                max_retry_times = _log_onRemote.max_retry_times or 10,
                flush_limit = _log_onRemote.flush_limit,
                drop_limit = _log_onRemote.drop_limit,
            }
            if not ok then
                ngx_log(ngx_ERR, "failed to initialize the logger: ",
                        err)
                return
            end
        end
        -- construct the custom access log message in
        -- the Lua variable "msg"
        local bytes, err = logger.log(_log_remote_str)
        if err then
            ngx_log(ngx_ERR, "failed to log message: ", err)
            return
        end
    end
end
