
-- pre 阶段 tcp test
local _M = { _VERSION = "0.01" }
local stool = require("stool")

local function tcpfunc(_base_msg , _tb_args)
     ngx.say(stool.tableTojsonStr(_tb_args)) 
     return 'break' 
end
_M.tcpfunc = tcpfunc

return _M