# 说明
  该接口API是对config_dict进行操作的(uri、参数大小写敏感)

# 接口操作
  **url:http://$ip:$port/api/config_dict?action=[参数1]&mod=[参数2]&id=[参数3]&value=[参数4]&value_type=[参数5]**
	
	action(string) = [add|del|set|get]：执行动作

	mod(string) = [base|realIpFrom_Mod|denyMsg|url_Mod|header_Mod|useragent_Mod|cookie_Mod|args_Mod|post_Mod|network_Mod|replace_Mod|host_method_Mod|rewrite_Mod|app_Mod|referer_Mod|all_mod|count_mod|空（默认）]：操作模块名称

	id(number/string) = [1|2|空（默认）]：操作的id
		> mod = base|realIpFrom_Mod|denyMsg时 id值就是对应mod的key名称
		> mod = 其他，id值就是对应mod规则的序号id
	
	value(string) = [json(规则组)|string(配置开关等)]：设置mod内容或者mod.id的内容

	value_type(string) = [json|string(默认)]：标识value类型

 - 返回信息
----------
	{"code":"ok",......}  			---- 正常
    {"code":"error",msg:"错误原因"}	 ---- 错误等

 - 增 action=add
----------
	mod=realIpFrom_Mod [增加一个realIpFrom_Mod规则]
	id : 需要设置realIpFrom的域名
	value ： 二阶匹配的JSON

	EG:
	/api/config_dict?action=add&mod=realIpFrom_Mod
	&id=www.test.com
	&value={"ips":[["101.254.241.149","106.37.236.170"],"table"],"realipfrom":"x_for_f"}

	mod=denyMsg [增加一个基于host的设置拒绝信息的规则]
	id ： 需要设置的host(域名nginx配置的server_name)
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=add&mod=denyMsg
	&id=www.test.com
	&value={"deny_msg":403}

	mod=host_method_Mod [增加一条白名单允许的host和method]
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=add&mod=host_method_Mod
	&value={"state":"on","method":[{"POST":true,"GET":true},"list"],"hostname":[{"101.200.122.200:5460":true,"101.200.122.200":true,"www.g.com":true},"list"],"id":1}

	mod=rewrite_Mod [增加一条跳转规则]
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=add&mod=rewrite_Mod
	&value={"id":1,"state":"on","action":["set-cookie","asjldisdafpopliu8909jk34jk"],"hostname":["101.200.122.200",""],"url":["^\/rewrite$","jio"]}

	mod=app_Mod [增加一条自定义规则]
	value :　二阶匹配的JSON

	EG:
	/api/config_dict?action=add&mod=app_Mod
	&value={"id":1,"state":"on","action":["deny"],"hostname":["101.200.122.200",""],"url":["^\/([\\w]{4}\\.html|deny\\.do|你好\\.html)$","jio"]}

	mod=referer_Mod [增加一条referer过滤规则]
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=add&mod=referer_Mod
	&value={"url":["^\/abc.do$","jio"],"id":1,"state":"on","action":"next","hostname":["pass.game.com",""],"referer":["^.*\/(www\\.hao123\\.com|www3\\.hao123\\.com)$","jio"]}

	mod=url_Mod [增加一条url过滤规则]
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=add&mod=url_Mod
	&value={"id":1,"state":"on","action":"allow","hostname":["*",""],"url":["\\.(css|js|flv|swf|woff|txt)$","jio"]}

	mod=header_Mod [增加一条header头过滤规则]
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=add&mod=header_Mod
	&value={"id":1,"state":"on","header":["*","","Acunetix_Aspect"],"hostname":["*",""],"url":["*",""]}

	mod=useragent_Mod [增加一条useragent过滤规则]
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=add&mod=useragent_Mod
	&value={"state":"on","useragent":["HTTrack|harvest|audit|dirbuster|pangolin|nmap|sqln|-scan|hydra|Parser|libwww|BBBike|sqlmap|w3af|owasp|Nikto|fimap|havij|PycURL|zmeu|BabyKrokodil|netsparker|httperf|bench","jio"],"hostname":["*",""],"id":1}

	mod=cookie_Mod [增加一条cookie过滤规则]
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=add&mod=cookie_Mod
	&value={"cookie":["\\.\\.\/","jio"],"id":1,"state":"on","action":"deny","hostname":["*",""]}

	mod=args_Mod [增加一条query_string参数的过滤规则]
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=add&mod=args_Mod
	&value={"args":["\\.\\.\/","jio"],"state":"on","action":"deny","hostname":["*",""],"id":1}

	mod=post_Mod [增加一条post_string参数的过滤规则]
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=add&mod=post_Mod
	&value={"post":["\\.\\.\/","jio"],"id":1,"state":"on","action":"deny","hostname":["*",""]}

	mod=network_Mod [增加一条网络频率限制规则]
	value : 二阶匹配规则

	EG:
	/api/config_dict?action=add&mod=network_Mod
	&value={"id":1,"state":"on","url":["\/api\/time",""],"hostname":[["101.200.122.200","127.0.0.1"],"table"],"network":{"blackTime":600,"maxReqs":30,"pTime":10}}

	mod=replace_Mod [增加一条内容替换规则]
	value : 二阶匹配规则

	EG:
	/api/config_dict?action=add&mod=replace_Mod
	&value={"id":1,"state":"on","url":["^\/api\/ip_dict$","jio"],"hostname":["101.200.122.200",""],"replace_list":[["deny","","denyFUCK"],["allow","","allowPASS"],["lzcaptcha\\?key='\\s*\\+ key","jio","lzcaptcha?keY='+key+'%26keytoken=@token@'"]]}

 - 删 action=del
----------
	mod=realIpFrom_Mod [删除一个realIpFrom_Mod规则]
	id : 需要删除的规则ID

	EG:
	/api/config_dict?action=del&mod=realIpFrom_Mod
	&id=1

	mod=denyMsg [删除一个基于host的设置拒绝信息的规则]
	id ： 需要删除的host(域名nginx配置的server_name)

	EG:
	/api/config_dict?action=del&mod=denyMsg
	&id=www.test.com

	mod=host_method_Mod [删除一条白名单允许的host和method]
	id : 需要删除的规则ID

	EG:
	/api/config_dict?action=add&mod=host_method_Mod
	&id=1

	mod=rewrite_Mod [删除一条跳转规则]
	id : 需要删除的规则ID

	EG:
	/api/config_dict?action=add&mod=rewrite_Mod
	&id=1

	mod=app_Mod [删除一条自定义规则]
	id :　需要删除的规则ID

	EG:
	/api/config_dict?action=add&mod=app_Mod
	&id=1

	mod=referer_Mod [删除一条referer过滤规则]
	id : 需要删除的规则ID

	EG:
	/api/config_dict?action=add&mod=referer_Mod
	&id=1

	mod=url_Mod [删除一条url过滤规则]
	id : 需要删除的规则ID

	EG:
	/api/config_dict?action=add&mod=url_Mod
	&id=1

	mod=header_Mod [删除一条header头过滤规则]
	id : 需要删除的规则ID

	EG:
	/api/config_dict?action=add&mod=header_Mod
	&id=1

	mod=useragent_Mod [删除一条useragent过滤规则]
	id : 需要删除的规则ID

	EG:
	/api/config_dict?action=add&mod=useragent_Mod
	&id=1

	mod=cookie_Mod [删除一条cookie过滤规则]
	id : 需要删除的规则ID

	EG:
	/api/config_dict?action=add&mod=cookie_Mod
	&id=1

	mod=args_Mod [删除一条query_string参数的过滤规则]
	id : 需要删除的规则ID

	EG:
	/api/config_dict?action=add&mod=args_Mod
	&id=1

	mod=post_Mod [删除一条post_string参数的过滤规则]
	id : 需要删除的规则ID

	EG:
	/api/config_dict?action=add&mod=post_Mod
	&id=1

	mod=network_Mod [删除一条网络频率限制规则]
	id : 需要删除的规则ID

	EG:
	/api/config_dict?action=add&mod=network_Mod
	&id=1

	mod=replace_Mod [删除一条内容替换规则]
	id : 需要删除的规则ID

	EG:
	/api/config_dict?action=add&mod=replace_Mod
	&id=1

 - 改 action=set
----------
	mod=base [修改base相关配置]
	id : 需要修改的key名称（没有表示修改整个base的配置）
	value : 需要修改的值/JSON
	value_type : 值类型

	EG:
	/api/config_dict?action=set&mod=base
	&id=autoSync
	&value_type=json
	&value={"state":"Master/Slave/off","timeAt":10}

	/api/config_dict?action=set&mod=base
	&id=Mod_state
	&value=on

	mod=realIpFrom_Mod [修改一个realIpFrom_Mod规则]
	id : 需要设置realIpFrom的域名(id没有表示设置整个realIpFrom_Mod)
	value ： 二阶匹配的JSON
	value_type : 标记value类型（默认string）

	EG:
	/api/config_dict?action=set&mod=realIpFrom_Mod
	&id=www.test.com
	&value_type=json
	&value={"ips":[["101.254.241.149","106.37.236.170"],"table"],"realipfrom":"x_for_f"}

	mod=denyMsg [修改一个基于host的设置拒绝信息的规则]
	id ： 需要设置的host(域名nginx配置的server_name)
	value_type : 标记value类型（默认string）
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=set&mod=denyMsg
	&id=www.test.com
	&value_type=json
	&value={"deny_msg":403}

	mod=host_method_Mod [修改一条白名单允许的host和method]
	id : 需要修改的id号
	value_type : 标记value类型（默认string）
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=set&mod=host_method_Mod
	&id=1
	&value_type=json
	&value={"state":"on","method":[{"POST":true,"GET":true},"list"],"hostname":[{"101.200.122.200:5460":true,"101.200.122.200":true,"www.g.com":true},"list"],"id":1}

	mod=rewrite_Mod [修改一条跳转规则]
	id ： 需要修改的id号
	value_type : 标记value类型（默认string）
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=set&mod=rewrite_Mod
	&id=1
	&value_type=json
	&value={"id":1,"state":"on","action":["set-cookie","asjldisdafpopliu8909jk34jk"],"hostname":["101.200.122.200",""],"url":["^\/rewrite$","jio"]}

	mod=app_Mod [修改一条自定义规则]
	id ： 需要修改的id号
	value_type : 标记value类型（默认string）
	value :　二阶匹配的JSON

	EG:
	/api/config_dict?action=set&mod=app_Mod
	&id=1
	&value_type=json
	&value={"id":1,"state":"on","action":["deny"],"hostname":["101.200.122.200",""],"url":["^\/([\\w]{4}\\.html|deny\\.do|你好\\.html)$","jio"]}

	mod=referer_Mod [修改一条referer过滤规则]
	id ： 需要修改的id号
	value_type : 标记value类型（默认string）
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=set&mod=referer_Mod
	&id=1
	&value_type=json
	&value={"url":["^\/abc.do$","jio"],"id":1,"state":"on","action":"next","hostname":["pass.game.com",""],"referer":["^.*\/(www\\.hao123\\.com|www3\\.hao123\\.com)$","jio"]}

	mod=url_Mod [修改一条url过滤规则]
	id ： 需要修改的id号
	value_type : 标记value类型（默认string）
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=set&mod=url_Mod
	&id=1
	&value_type=json
	&value={"id":1,"state":"on","action":"allow","hostname":["*",""],"url":["\\.(css|js|flv|swf|woff|txt)$","jio"]}

	mod=header_Mod [修改一条header头过滤规则]
	id ： 需要修改的id号
	value_type : 标记value类型（默认string）
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=set&mod=header_Mod
	&id=1
	&value_type=json
	&value={"id":1,"state":"on","header":["*","","Acunetix_Aspect"],"hostname":["*",""],"url":["*",""]}

	mod=useragent_Mod [修改一条useragent过滤规则]
	id ： 需要修改的id号
	value_type : 标记value类型（默认string）
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=set&mod=useragent_Mod
	&id=1
	&value_type=json
	&value={"state":"on","useragent":["HTTrack|harvest|audit|dirbuster|pangolin|nmap|sqln|-scan|hydra|Parser|libwww|BBBike|sqlmap|w3af|owasp|Nikto|fimap|havij|PycURL|zmeu|BabyKrokodil|netsparker|httperf|bench","jio"],"hostname":["*",""],"id":1}

	mod=cookie_Mod [修改一条cookie过滤规则]
	id ： 需要修改的id号
	value_type : 标记value类型（默认string）
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=set&mod=cookie_Mod
	&value={"cookie":["\\.\\.\/","jio"],"id":1,"state":"on","action":"deny","hostname":["*",""]}

	mod=args_Mod [修改一条query_string参数的过滤规则]
	id ： 需要修改的id号
	value_type : 标记value类型（默认string）
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=set&mod=args_Mod
	&id=1
	&value_type=json
	&value={"args":["\\.\\.\/","jio"],"state":"on","action":"deny","hostname":["*",""],"id":1}

	mod=post_Mod [修改一条post_string参数的过滤规则]
	id ： 需要修改的id号
	value_type : 标记value类型（默认string）
	value : 二阶匹配的JSON

	EG:
	/api/config_dict?action=set&mod=post_Mod
	&id=1
	&value_type=json
	&value={"post":["\\.\\.\/","jio"],"id":1,"state":"on","action":"deny","hostname":["*",""]}

	mod=network_Mod [增加一条网络频率限制规则]
	id ： 需要修改的id号
	value_type : 标记value类型（默认string）
	value : 二阶匹配规则

	EG:
	/api/config_dict?action=set&mod=network_Mod
	&id=1
	&value_type=json
	&value={"id":1,"state":"on","url":["\/api\/time",""],"hostname":[["101.200.122.200","127.0.0.1"],"table"],"network":{"blackTime":600,"maxReqs":30,"pTime":10}}

	mod=replace_Mod [修改一条内容替换规则]
	id ： 需要修改的id号
	value_type : 标记value类型（默认string）
	value : 二阶匹配规则

	EG:
	/api/config_dict?action=add&mod=replace_Mod
	&id=1
	&value_type=json
	&value={"id":1,"state":"on","url":["^\/api\/ip_dict$","jio"],"hostname":["101.200.122.200",""],"replace_list":[["deny","","denyFUCK"],["allow","","allowPASS"],["lzcaptcha\\?key='\\s*\\+ key","jio","lzcaptcha?keY='+key+'%26keytoken=@token@'"]]}

 - 查 action=get
----------
	mod=base [查询base模块的相关配置]
	id : 需要查询的key名称（没有表示所有）

	EG:查询模块为base的所有内容
	/api/config_dict?action=get&mod=base
	
	mod=realIpFrom_Mod [查询一个realIpFrom_Mod规则]
	id : 需要查询的规则ID（没有表示所有）

	EG:查询模块为realIpFrom_Mod所有规则
	/api/config_dict?action=get&mod=realIpFrom_Mod

	mod=denyMsg [查询一个基于host的设置拒绝信息的规则]
	id ： 需要查询的host(域名nginx配置的server_name)（没有表示所有）

	EG:
	/api/config_dict?action=get&mod=denyMsg
	&id=www.test.com

	mod=host_method_Mod [查询一条白名单允许的host和method]
	id : 需要查询的规则ID（没有表示所有）
	EG:
	/api/config_dict?action=get&mod=host_method_Mod
	&id=1

	mod=rewrite_Mod [查询一条跳转规则]
	id : 需要查询的规则ID（没有表示所有）
	EG:
	/api/config_dict?action=get&mod=rewrite_Mod
	&id=1

	mod=app_Mod [查询一条自定义规则]
	id :　需要查询的规则ID（没有表示所有）
	EG:
	/api/config_dict?action=get&mod=app_Mod
	&id=1

	mod=referer_Mod [查询一条referer过滤规则]
	id : 需要查询的规则ID（没有表示所有）
	EG:
	/api/config_dict?action=get&mod=referer_Mod
	&id=1

	mod=url_Mod [查询一条url过滤规则]
	id : 需要查询的规则ID（没有表示所有）
	EG:
	/api/config_dict?action=get&mod=url_Mod
	&id=1

	mod=header_Mod [查询一条header头过滤规则]
	id : 需要查询的规则ID（没有表示所有）
	EG:
	/api/config_dict?action=get&mod=header_Mod
	&id=1

	mod=useragent_Mod [查询一条useragent过滤规则]
	id : 需要查询的规则ID（没有表示所有）
	EG:
	/api/config_dict?action=get&mod=useragent_Mod
	&id=1

	mod=cookie_Mod [查询一条cookie过滤规则]
	id : 需要查询的规则ID（没有表示所有）
	EG:
	/api/config_dict?action=get&mod=cookie_Mod
	&id=1

	mod=args_Mod [查询一条query_string参数的过滤规则]
	id : 需要查询的规则ID（没有表示所有）
	EG:
	/api/config_dict?action=get&mod=args_Mod
	&id=1

	mod=post_Mod [查询一条post_string参数的过滤规则]
	id : 需要查询的规则ID（没有表示所有）
	EG:
	/api/config_dict?action=get&mod=post_Mod
	&id=1

	mod=network_Mod [查询一条网络频率限制规则]
	id : 需要查询的规则ID（没有表示所有）
	EG:
	/api/config_dict?action=get&mod=network_Mod
	&id=1

	mod=replace_Mod [查询一条内容替换规则]
	id : 需要查询的规则ID（没有表示所有）
	EG:
	/api/config_dict?action=get&mod=replace_Mod
	&id=1