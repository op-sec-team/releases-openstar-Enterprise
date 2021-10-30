
local ngx_say = ngx.say
local stool   = require "stool"
local optl    = require "optl"
local string_find = string.find

local _M     = { _VERSION = "0.01" }
-- _tb_args
--[[
{
    "ck_lv":"预留参数，配置检查的严格程度",
    "name":["*",""],
    "ret":"返回的值"
}
--]]

local function name_ck(_file_name,_lv)
    -- 已解析文件结尾的
    local _ends = { ".php",".php2",".php3",".php4",".php5",".phps",".pht",".phtm",".phtml",
                    ".asp",".aspx",".asa",".cdx",".cer",
                    ".jsp"
                }
    local _ins = {";","..","/","%"}
    if optl.remath_Invert(_file_name,_ends,"uend_list") then
        return "deny"
    elseif optl.remath_Invert(_file_name,_ins,"uin_list") then
        return "deny"
    end
end

-- return break allow deny nil ...
local function form_name_ck(_base_msg , _tb_args)
    -- 判断是否是一个合法的post form (普通规则处进行检查) post_form 获取也在 普通规则处操作
    -- if _base_msg.method ~= "POST" then
    --     return
    -- end
    -- local from , to = string_find(_base_msg.http_content_type , "multipart/form-data;" , 1 , true)
    -- if not from then
    --     return
    -- end
    -- 获取表单的所有文件文件
    if _base_msg.post_form then
        -- [
        --     ["login_username",null,null,"openstar"],
        --     ["login_pswd",null,null,"passpasshaha"],
        --     ["file","快递.txt","text\/plain","file msg is this!!! h"],
        --     ["submit",null,null,"Submit"],
        --     [位置1,位置2,位置3,位置4]
        -- ]
        -- post_form 的样式
        -- (白名单+黑名单检查)
        for _,v in ipairs(_base_msg.post_form) do
            -- 检查指定（参数 / 所有文件名）
            if optl.remath_Invert(v[1],_tb_args.name[1],_tb_args.name[2],_tb_args.name[3]) then
                -- v[2] 为文件名称
                if type(v[2]) == "string" then
                    local remsg = name_ck(v[2],_tb_args.ck_lv)
                    if remsg == "deny" or remsg == "break" then
                        -- 触发拦截操作
                        return remsg
                    end
                end
            end
        end
    end
end
_M.form_name_ck = form_name_ck
return _M