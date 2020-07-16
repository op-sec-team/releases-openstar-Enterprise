
local type = type
local ipairs = ipairs
local pairs = pairs
local tonumber = tonumber
local math_abs = math.abs
local string_sub = string.sub
local stool = require("stool")

local ngx_unescape_uri = ngx.unescape_uri
local ngx_say          = ngx.say
local ngx_md5          = ngx.md5
local table_insert     = table.insert
local table_concat     = table.concat

local t_dict    = ngx.shared.token_dict
local get_value = stool.get_base_msg_by_key

local _M        = { _VERSION = "0.01" }

--- 算法计算
-- _tb_args
--[[
{
    "sign":{
        "state":"on",
        "name":"$headers@x_app_sign",
        "tb_formart":[
            "$headers@x_app_timestamp",
            "$request_uri",
            "$headers@x_app_nonce",
            ""
        ]},
    "timestamp":{
        "name":"$headers@x_app_timestamp",
        "abs_time":120
        },
    "nonce":{
        "state":"on",
        "name":"$headers@x_app_nonce",
        "time":60
    }
}
--]]
local function sign_check(_base_msg , _tb_args)
    local _lc_time = ngx.time()
    local client_time  = tonumber(get_value(_base_msg,_tb_args.timestamp.name)) or 0
    -- 时间检查
    local abs_time = _tb_args.timestamp.abs_time or 300
    if abs_time > 0 then
        local diff_time = math_abs(_lc_time - client_time)
        if diff_time > abs_time then
            -- local de_msg = "client_time: "..tostring(client_time).."\n abs_time :"..tostring(abs_time)\
            -- .." \n lc_time: "..tostring(_lc_time)
            local msg = [=[{"code":"error","msg":"timestamp error"}]=]
            ngx_say(msg)
            return "break"
        end
    end
    -- nonce 检查
    local client_nonce = get_value(_base_msg,_tb_args.nonce.name) or ""
    if _tb_args.nonce.state == "on" then
        if client_nonce == "" then
            local msg = [=[{"code":"error","msg":"nonce empty"}]=]
            ngx_say(msg)
            return "break"
        end
        local dict_nonce = t_dict:get(client_nonce)
        if dict_nonce == "y" then
            -- local de_msg = "client_nonce: "..client_nonce.." value: "..tostring(dict_nonce)
            local msg = [=[{"code":"error","msg":"nonce error"}]=]
            ngx_say(msg)
            return "break"
        else
            t_dict:set(client_nonce,"y",(_tb_args.nonce.time or 60))
        end
    end
    -- sign 检查
    local client_sign  = get_value(_base_msg,_tb_args.sign.name) or ""
    if _tb_args.sign.state == "on" then
        if client_sign == "" then
            local msg = [=[{"code":"error","msg":"sign empty"}]=]
            ngx_say(msg)
            return "break"
        end
        local re_log_tb = {}
        for i,v in ipairs(_tb_args.sign.tb_formart) do
            table_insert(re_log_tb,get_value(_base_msg,v))
        end
        local _str = table_concat(re_log_tb, "")
        local str_md5 = ngx_md5(_str)
        if str_md5 ~= client_sign then
            -- local de_msg = "_str: ".._str .. "\n str_md5: "..str_md5.."\n client_sign: "..client_sign
            local msg = [=[{"code":"error","msg":"sign error"}]=]
            ngx_say(msg)
            return "break"
        end
    end
end

_M.sign_check = sign_check

return _M