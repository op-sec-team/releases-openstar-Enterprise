

local sub    = string.sub
local gsub   = ngx.re.gsub
local gmatch = ngx.re.gmatch
local re     = "(13[0-9]|14[5,7]|15[0-3,5-9]|17[0,3,5-8]|18[0-9]|166|198|199|147)\\d{8}"

local TB  = {}
local tag = false

local function Teltoasterisk(_tel)
    -- 中间 4 位
    return sub(_tel,1,4).."****"..sub(_tel,9)
end

local function insert_Tb(Stel)
    if not TB[Stel] then
        TB[Stel] = Teltoasterisk(Stel)
    end
end

local function Telgmatch(tel_str)
    local it, err = gmatch(tel_str, re, "jo")
    if not it then
        return
    end
    while true do
        local m,err = it()
        if err then
            return
        end
        if not m then
            return
        end
        tag = true
        insert_Tb(m[0])
    end
end

local _M = { _VERSION = "0.01" }
local function tel_ast(str_all , _tb_args)
    Telgmatch(str_all)
    if tag then
        for k,v in pairs(TB) do
            str_all = gsub(str_all,k,v)
        end
    end
    return str_all
end
_M.tel_ast = tel_ast
return _M