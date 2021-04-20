
local clear_header = ngx.req.clear_header

local _M = { _VERSION = "0.01" }

local function disabled_gzip(_base_msg , _tb_args)
     -- 关闭 gzip 操作，通过 控制 请求头配置
     -- _tb_args 参数没有使用
     clear_header("Accept-Encoding")
end
_M.disabled_gzip = disabled_gzip
return _M