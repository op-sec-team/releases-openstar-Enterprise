
-- pre 阶段 udp test

local stool = require "stool"
local server = require 'resty.dns.server'
local ngx_req = ngx.req
local logtag = false

local _M = { _VERSION = "0.01" }

local function ngx_log(_msg)
    if logtag then
        ngx.log(ngx.ERR, _msg)
    end
end

--[[
{
    "logtag":false,
    "debug":true,
    "answer_ips":["1.1.1.1","2.2.2.2"]
}
--]]

local function udpdnshook(_base_msg , _tb_args)
    local sock, err = ngx_req.socket()
    local _debug = (_tb_args and _tb_args.debug) or false
    logtag = (_tb_args and _tb_args.logtag) or false
    if not sock then
       local msg = "failed to get the request socket: "..tostring(err)
       ngx_log(msg)
       return "break"
    end
    local req, err = sock:receive()
    if not req then
       local msg = "failed to receive: "..tostring(err)
       ngx_log(msg)
       return "break"
    end
    local dns = server:new()
    local request, err = dns:decode_request(req)
    if not request then
       local msg = "failed to decode request: "..tostring(err)
       ngx_log(msg)
       local resp = dns:encode_response()
       local ok, err = sock:send(resp)
       if not ok then
           local msg = "failed to send: "..tostring(err)
           ngx_log(msg)
       end
       return "break"
    end
    if _debug then
        ngx.log(ngx.DEBUG, stool.tableTojsonStr(request))
    end
    local query = request.questions[1]
    if query.qtype == server.TYPE_CNAME or
        query.qtype == server.TYPE_AAAA or
        query.qtype == server.TYPE_A then
        -- hook all
        local answer_ips = (_tb_args and _tb_args.answer_ips) or {"127.0.0.1"}
        local err_type = false
        local err
        for _,v in ipairs(answer_ips) do
            err = dns:create_a_answer(query.qname, 600, v)
            if err then
                err_type = true
            end
        end
        if err_type then
            local msg = "failed to create A answer: "..tostring(err)
            ngx_log(msg)
            return "break"
        end
    else
        dns:create_soa_answer("test.com", 600, "a.root-test.com",
            "vislee.test.com", 1515161223, 1800, 900, 604800, 86400)
    end
    local resp = dns:encode_response()
    local ok, err = sock:send(resp)
    if not ok then
        local msg = "failed to send: "..tostring(err)
        ngx_log(msg)
    end
    return "break"
end
_M.udpdnshook = udpdnshook

return _M