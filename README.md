# 关于openstar-Enterprise

该版本是基于开源版 [openstar ](https://github.com/starjun/openstar) 开发的企业版。

openstar-Enterprise 是一个 **收费产品**

 如果您暂时不考虑收费的产品，可以参考： **免费开源** 的版本 -----》  [openstar ](https://github.com/starjun/openstar)


*****
国内开源极其不易，请大家支持

github地址：https://github.com/op-sec-team/releases-openstar-Enterprise

看云文档：https://www.kancloud.cn/openstar/install/1136671

## 待办
1：nginx 普通配置，支持更多的配置参数（争取尽量少的直接修改配置文件...）

## WAF标记(owasp 统计标识)
Cc : cc 攻击

Sql : sql 注入攻击

Xss : xss 攻击

Brute_force ： 暴力破解攻击

Webshell ： 网站后门攻击

Danger_path : 危险路径攻击

Danger_keyword : 危险关键字攻击

Scan : 扫描攻击

Struts2 : struts2命令执行攻击

Csrf : csrf 跨站请求攻击

Stealing_link : 防盗链攻击

Black_ip : ip黑名单

Anti_reply : 重放攻击

Back_door : 后门攻击


## base.msg 字段说明
base_msg.uri                    请求的uri（不包括请求的参数）

base_msg.remoteIp               直连IP（4层获取到的IP）

base_msg.ip                     通过nginx的realip模块获取的用户IP

base_msg.serverIp               服务器的IP

base_msg.http_host              请求头中的host

base_msg.server_name            配置文件中对应 vhost 的 server_name（当有多个时，这里仅取第一个）

base_msg.host                   nginx真实匹配的 vhost 的域名（不能取到端口）

base_msg.method                 请求的方法

base_msg.referer                请求来源 referer

base_msg.useragent              请求的用户头

base_msg.cookie                 请求的cookie

base_msg.request_uri            请求的完整地址（uri+[?]+请求的参数信息 query_string）

base_msg.query_string           请求的参数信息（不包括uri后面的 ？）

base_msg.http_content_type      请求头中的类型

base_msg.headers                table类型   请求的header信息

base_msg.headers_data           请求完整请求头（不包括 协议等）

base_msg.args                   table类型   GET请求的参数（key -- value ... ）

base_msg.args_data              GET请求参数（args）值的连接（连接符 ,）

base_msg.posts                  table类型   POST请求的参数（key -- value ...） http_content_type 为 x-www-form-urlencoded

base_msg.posts_data             POST请求的参（posts）数值的连接（连接符 ,）

base_msg.posts_all              POST请求的完整内容体

base_msg.post_form              table类型   POST请求的表单解析（[key1 -- value],[key2 -- value]...）

base_msg.request_id             请求的唯一ID ngx.var.request_id

base_msg.waf_action             WAF标记  WAF执行动作（deny/log...）

base_msg.waf_mod                WAF标记  WAF命中的模块名称（uri_Mod/useragent_Mod...）

base_msg.waf_id                 WAF标记  WAF命中的规则ID（配置在规则中的ID,没有则使用规则的数组序号）

base_msg.waf_owasp              WAF标记  WAF命中的 owasp（类似 xss/sql/...）

base_msg.server_protocol        请求的协议版本 （如HTTP/1.0）

base_msg.ngx_now                请求的时间 ngx.now()

base_msg.ngx_localtime          请求的时间--格式化 ngx.localtime()

base_msg.status                 请求返回的状态 （200/403...）

base_msg.bytes_sent             请求返回内容大小

base_msg.request_time           请求的执行时间 （ngx.now() - ngx.req.start_time()）



## 费用
目前公测阶段免费使用3个月（企业）；

基础使用：个人免费   企业收费

技术服务：另议

未经授权不可用于商业用途（为他人提供云/私有云防护等商业形式）

## 其他
关于功能、界面有好的建议可以反馈给我们，谢谢~

QQ号：2194788831

QQ群：331447905
入群领取 web 管理后台的包

