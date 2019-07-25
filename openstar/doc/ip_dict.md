# 说明
  该接口API是对ip黑白名单的操作(uri、参数大小写敏感)

# 接口操作
  **url:http://$ip:$port/api/ip_dict?action=[参数1]&ip=[参数2]&value=[参数3]&time=[参数4]**

	action(string) = api动作控制  [add|del|set|get]

	ip(string) = 设置的ip [www.abc.com-213.34.1.34|29.89.3.45]
		> 域名-ip：表示仅对该域名生效；ip：表示对所有域名都生效

	time(float) = ip在黑/白名单的时效，单位：秒  [0.1|10|0(默认--永久)]

	value(string) = 设置对应ip执行动作  [allow|log|deny(默认)]

 - 返回信息
----------
	{"code":"ok",......}  			---- 正常
    {"code":"error",msg:"错误原因"}	 ---- 错误等

  
 - 增 action=add
----------
	action=add
	ip : 需要操作的ip
	value : 对应ip的动作（默认deny --拦截）
	time : 增加ip名单的生命周期（默认0 --永久）

	EG：
	/api/ip_dict?action=add
	&ip=101.200.122.200
	&value=deny
	&time=10

	/api/ip_dict?action=add
	&ip=www.baidu.com-101.200.122.200
	&value=allow
	&time=0.1
	
	返回：	
	{"code":"ok","ip":$ip,"value":$value} -- 正常
	{"code"="error","msg"="错误原因"}      -- 错误等


 - 删 action=del
----------
	action=del
	ip : 需要删除的IP

	EG:
	/api/ip_dict?action=del
	&ip=114.111.166.9
	
	返回：	 
	{"code":"ok",ip:$ip} -- 正常
	{"code"="error","msg"="错误原因"}      -- 错误等

 - 改 action=set
----------
	action=set
	ip : 需要编辑的IP
	value ： 需要修改后的内容
	
	EG:
	/api/ip_dict?action=set
	&ip=127.0.0.1

	/api/ip_dict?action=set
	&ip=127.0.0.1
	&value=allow
	&time=10
	
	返回：
	{"ip":$ip,"code":"ok","value":value}  -- 正常
	{code="error",msg="错误原因"}  		-- 错误等

 - 查 action=get
---------- 
	action=get
	ip : 需要查询的ip
		> ip=all_ip -- 表示显示所有内容
		> ip=count_ip -- 显示ip个数
		> p=空  -- 显示1024个ip名称
		> ip=[其他] -- 显示对应ip的值
	
	EG:
	/api/ip_dict?action=get
	&ip=all_ip
	
	/api/ip_dict?action=get
	&ip=count_ip