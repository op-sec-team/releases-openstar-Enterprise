

local _M = { _VERSION = "0.01" }
local function replace_hello(str_all , _tb_args)
    -- 这里可以使用函数完成你想要的替换结果
    return ngx.re.gsub(str_all, "hello", "HELLO")
end
_M.replace_hello = replace_hello
return _M