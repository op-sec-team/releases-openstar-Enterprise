
-- log 阶段 ngx.say 等函数都不能使用
local _M = { _VERSION = "0.01" }
local stool = require("stool")
local webhook = require("webhook")
local limit_ip_dict = ngx.shared.limit_ip_dict
local ip_dict = ngx.shared.ip_dict

--[[
{
    "isDeny":"off",
    "webhook":{
        "state":"off",
        "uri":"钉钉/飞书高级 webhook uri"
    },
    "log_Mod":{
        "path":"/tmp/log_Mod.scan",
        "state":"on"
    },
    "network":{"maxReqs":100,"pTime":10,"blackTime":120},
    "ngx_status":[404,403,405]   
}
--]]


--- 访问频率检查 并且计数
-- _tb_network 频率规则  _uid 唯一标识
-- true:触发 频率限制  false:未触发 计数++
local function network_ck(_tb_network , _uid)
    if type(_tb_network) ~= "table" then
        return
    end
    local pTime    = _tb_network.pTime or 10
    local maxReqs  = _tb_network.maxReqs or 50
    local ip_count = limit_ip_dict:get(_uid)
    if ip_count == nil then
        limit_ip_dict:set(_uid , 1 , pTime)
        return
    else
        if ip_count >= maxReqs then
            limit_ip_dict:delete(_uid)
            return true
        else
            limit_ip_dict:incr(_uid , 1)
            return
        end
    end
end

local function ckscan(_base_msg, _tb_args)
    local ngx_status =  _tb_args.ngx_status or {404,403}
    local rep_http_status = ngx.status
    local network = _tb_args.network or {}
    if stool.isInArrayTb(rep_http_status,ngx_status) then
        local mod_ip = _base_msg.ip .. " log_Mod func scan"
        -- new 频率判断
        if network_ck(network , mod_ip) then
            local waf_log
            if _tb_args.isDeny == "on" then
                local blacktime = network.blackTime or 10 * 60                
                ip_dict:safe_set(ip , "log_Mod.scan" , blacktime)
                waf_log = " deny "..mod_ip
            else
                waf_log = " log "..mod_ip
            end
            -- 执行 告警
            local _msg = ngx.localtime()..waf_log.." [host] ".._base_msg.host
            if _tb_args.webhook and _tb_args.webhook.state == "on" then                
                webhook.Send_text(_tb_args.webhook.uri,_msg)
            end
            if _tb_args.log_Mod and  _tb_args.log_Mod.state == "on" then
                stool.writefile(_tb_args.log_Mod["path"] or "/tmp/log_Mod.scan",_msg.."\n\n")
            end
        end
    end
end
_M.ckscan = ckscan
return _M