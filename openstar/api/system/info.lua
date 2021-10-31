
local optl   = require("optl")
local stool  = require("stool")
local get_paramByName = optl.get_paramByName

local config_dict = ngx.shared.config_dict
local config      = stool.stringTojson(config_dict:get("config"))
if type(config) ~= "table" then
    optl.sayHtml_ext({ code = "error", msg = "config_dict:config error" })
end
local config_base = config.base

-- cpu 内存 硬盘 网络等信息统计 依赖 （sysstat）
-- centos : yum -y install sysstat
--          systemctl start sysstat
--          systemctl enable systat

-- 使用 vmstat 统计

local _shell_ty = get_paramByName("shell_ty")
local _cmd   = get_paramByName("cmd")
local getDay = os.date("%d")
local _day   = tonumber(get_paramByName("day")) or getDay

-- 默认执行shell命令的方法 supCmd
local do_shell = stool.supCmd

if _shell_ty == "supCmd" then
    do_shell = stool.supCmd
elseif _shell_ty == "OsExe" then
    do_shell = stool.supCmd
elseif _shell_ty == "Doshell" then
    do_shell = stool.supCmd
end

local map_cmd = {}
map_cmd["lsb_release -a"] = "lsb_release -a"
map_cmd["uname -a"] = "uname -a"
map_cmd["df -h"] = "df -h"
map_cmd["free -m"] = "free -m"
map_cmd["sar -A"] = "/usr/bin/sar -A"
map_cmd["sar -r"] = "/usr/bin/sar -r"
map_cmd["sar -b"] = "/usr/bin/sar -b"
map_cmd["sar -n"] = "/usr/bin/sar -n DEV"
map_cmd["sar -u"] = "/usr/bin/sar -u"
map_cmd["sar -f"] = "/usr/bin/sar -A -f /var/log/sa/sa".._day

local re,msg = do_shell(map_cmd[_cmd] or "uname -a")
optl.sayHtml_ext({ code="ok", msg = re })