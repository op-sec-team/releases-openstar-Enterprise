# 说明
  该接口API是对host_dict进行操作的(uri、参数大小写敏感)

# 接口操作
  **url:http://$ip:$port/api/host_dict?action=[参数1]&host=[参数2]&id=[参数3]&value=[参数4]**
	
	action(string) = [add|del|set|get]：api动作控制

	host(string) = [$host|all|all_host]

	id(number) = [count_id|1|2|...]：设置的id
	
	value(string) = [json(规则组)]：设置host_Mod内容或者host.id的内容
		>id = status，value默认是:off

 - 返回信息
----------
	{"code":"ok",......}  			---- 正常
    {"code":"error",msg:"错误原因"}	 ---- 错误等

 - 增 action=add
----------
	action=add [增加一个host_Mod规则]
	host : 需要规则的host的名称
	id : 需要增加的类型（state：增加host规则开关）
	value ： 二阶匹配的JSON

	EG:
	/api/host_dict?action=add
	&host=www.test.com
	&id=state
	&value=off

	/api/host_dict?action=add
	&host=www.test.com
	&value={"state":"on","action":["allow","url"],"url":["\\.(css|js|flv|swf|woff|txt)$","jio"],"id":1}

 - 删 action=del
----------
	action=del [删除一个host_Mod规则]
	host : 需要操作host名称
	id : 需要删除的规则ID

	EG:
	/api/host_dict?action=del
	&host=www.test.com
	&id=1

 - 改 action=set
----------
	action=set [修改一个host规则组的规则]
	host : 需要操作的host名称
	id : 需要修改的host规则ID号
	value : 需要修改的值/JSON

	EG:
	/api/host_dict?action=set
	&mod=www.test.com
	&id=state
	&value=on

	/api/host_dict?action=set
	&host=www.test.com
	&id=1
	&value={"state":"off","action":["allow","url"],"url":["\\.(css|js|flv|swf|woff|txt)$","jio"],"id":1}
	

 - 查 action=get
----------
	mod=base [查询base模块的相关配置]
	id : 需要查询的key名称（没有表示所有）

	EG:
	/api/config_dict?action=get&mod=base