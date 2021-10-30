
-- log 阶段 ngx.say 等函数都不能使用
local _M = { _VERSION = "0.01" }
local stool = require("stool")

--[[
{
    "path":"/tmp/logfunc.log" 
}
--]]

local function diylogfunc(_base_msg , _tb_args)
     local b_str = stool.tableTojsonStr(_base_msg)
     stool.writefile(_tb_args["path"],b_str.."\n\n")
end
_M.diylogfunc = diylogfunc
return _M