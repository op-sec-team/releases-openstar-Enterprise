
-- 非线上 master 版本使用
local ngx_say = ngx.say
local ngx_md5 = ngx.md5
local http    = require "resty.http"
local stool   = require "stool"

local _M      = { _VERSION = "0.01" }
-- _tb_args
-- {
--     "AppID":"xxx",
--     "AppSecret":"xxxxx",
--     "form_name":"verify_token"
-- }
local function cap(_base_msg , _tb_args)
     local AppID = _tb_args.AppID
     local AppSecret = _tb_args.AppSecret
     if _base_msg.method ~= "POST" then
        local msg = [=[{"code":"error","msg":"method error"}]=]
        ngx_say(msg)
        return "break"
     end
     local form_name = _tb_args.form_name or "verify_token"
     local token = _base_msg.posts[form_name]
     if not token then
        local msg = [=[{"code":"error","msg":"token error"}]=]
        ngx_say(msg)
        return "break"
     end
     if type(token) == "table" then
        token = token[1]
     end
     local arr = stool.split(token,":")
     local constId = ""
     if #arr == 2 then
        constId = arr[2]
     end
     local _str    = AppSecret..arr[1]..AppSecret
     local sign = ngx_md5(_str)
     local _httpc = http.new()
     local _url   = "http://cap.dingxiang-inc.com/api/tokenVerify"
     local re,err =  _httpc:request_uri(_url , {
            method = "GET",
            query = {
                     appKey=AppID,
                     token=arr[1],
                     constId=constId,
                     sign=sign
                    }
        })
     if not re then
        -- 请求超时 err
        return
     elseif re.status ~= 200 then
        -- ngx_say(re.status,re.reason)
        -- 远程服务器异常
        return
     else
        -- 解析返回内容
        -- 1 简单字符串判断； 2 解析为 json对象
        if stool.stringIn(re.body,"\"success\":true") then
            return
        else
            local msg = [=[{"code":"error","msg":"cap token error"}]=]
            ngx_say(msg)
            return "break"
        end
     end
end
_M.cap = cap
return _M