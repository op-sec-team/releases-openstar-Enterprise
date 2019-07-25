# 说明
  该接口API是对所有规则和redis的推送配置，拉取配置，推送计数(uri、参数大小写敏感)
	> redis DB 0 存放 config_dict、host_dict
	> redis DB 1 存放 ip_dict
	> redis DB 2 存放 count_dict

# 接口操作
  **url:http://$ip:$port/api/dict_redis?action=[参数1]&db=[参数2]&key=[参数3]&value=[参数4]**
	
	action(string) = [get|set|pull|push]：api动作控制

	db(number) = [1|2|0(默认)]：设置访问的redis的db,默认是DB:0
	
	key(string) = [config_dict|count_dict|host_dict|ip_dict|all_dict]：对应dict的名称
		> config_dict：规则配置
		> count_dict：拦截计数、访问计数
		> host_dict :基于host的规则
		> ip_dict：ip名单（黑、白、log）
		> all_dict：拉取（config_dict/host_dict/ip_dict）,推送（config_dict/host_dict/ip_dict/count_dict）
	
	value(string) = 需要设置key的内容(redis:set)

 - 返回信息
----------
	{"code":"ok",......}  			---- 正常
    {"code":"error",msg:"错误原因"}	 ---- 错误等


 - 查 action=set
---------- 
	action=set	[设置动作：设置]
	key : 需要设置的key名称（在指定DB中增加key/value)
	value : 需要设置的值

	EG:
	/api/dict_redis?action=set
	&key=denyMsg
	&value={"101.200.122.200:5460":{"deny_msg":403},"101.200.122.200":{"deny_msg":"101.200.122.200 request error!"}}

 - 增 action=get
----------
	action=set	[设置动作：查询]
	key : 需要查询的key名称

	EG:
	/api/dict_redis?action=get
	&key=base

 - 增 action=push
----------
	action=push	[设置动作：推送]
	key : 需要推送的dict名称

	EG:
	/api/dict_redis?action=push
	&key=all_dict

	/api/dict_redist?action=push
	&key=config_dict

 - 增 action=pull
----------
	action=pull	[设置动作：拉取]
	key : 需要拉取的dict名称

	EG:
	/api/dict_redis?action=pull
	&key=all_dict

	/api/dict_redist?action=pull
	&key=config_dict