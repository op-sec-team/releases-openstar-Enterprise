

local _M = { _VERSION = "0.01" }
local stool = require("stool")

local function timer_test(premature,_argstb)
    -- premature 第一个参数暂时没有用，但是写法必须有
    -- 后面的参数才是自定义的
    stool.writefile(_argstb.path or "/tmp/timer.log",ngx.localtime().." : "..stool.tableTojsonStr(_argstb).."\n")
end


_M.timer_test = timer_test

return _M