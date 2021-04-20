
local ngx_say = ngx.say
local stool   = require "stool"
local optl   = require "optl"

local _M     = { _VERSION = "0.01" }
-- _tb_args
--[[
{
    "origin":"*",
    "rule":[["nihao.com","openstar.com"],"rein_list"],
    "add_headers":[
        ["Access-Control-Allow-Headers","X-ABC-TraceId,x-ABC-deviceid"],
        ["Access-Control-Allow-Methods","GET,POST,OPTIONS,HEAD,PUT"],
        ["Access-Control-Allow-Credentials","true"],
        ["P3P","CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""],
        ["Access-Control-Expose-Headers","date"]
    ],
   "ret":"返回的值"
}
--]]

local function Cross_op(_base_msg , _tb_args)
    local Origin = stool.get_base_msg_by_key(_base_msg,"$headers@Origin")
    local og = _tb_args.origin or Origin
    --- 允许跨域条件
    if Origin and not optl.remath_Invert(Origin,_tb_args.rule[1],_tb_args.rule[2],_tb_args.rule[3]) then
        return "deny"
    end
    -- 默认添加 Access-Control-Allow-Origin
    ngx.header["Access-Control-Allow-Origin"] = og
    for i,v in ipairs(_tb_args.add_headers) do
        ngx.header[v[1]] = v[2]
    end
    if _base_msg.method == "OPTIONS" then
        return "break"
    else
        return _tb_args.ret
    end
end
_M.options = Cross_op
return _M