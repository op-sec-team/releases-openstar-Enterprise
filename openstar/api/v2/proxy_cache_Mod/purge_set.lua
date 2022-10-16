-- 增加缓存

local stool = require "stool"
local optl  = require "optl"
local http  = require "resty.http"
local get_paramByName = optl.get_paramByName


local _url  = get_paramByName("url")
local _host = get_paramByName("host")

local _httpc = http.new()
local _local_url   = "http://127.0.0.1/"+_url
local res,err = _httpc:request_uri(_local_url , {
    method = "GET"
    host = _host
})
_httpc:close()
local msg = ""
if not res then
    msg = "Error: "..err
elseif res.status ~= 200 then
    msg = "Error: "..res.reason
else
    msg = res.body
end
optl.sayHtml_ext({code="ok",msg=msg,status = res.status})