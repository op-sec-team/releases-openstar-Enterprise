# 说明
  该接口API是对所有token_dict的操作(uri、参数大小写敏感)

# 接口操作
  **url:http://$ip:$port/api/token_dict?action=[参数1]&token=[参数2]**

	action(string) = api动作控制  [get|set]

	token(string) =  对应dict的key名称 [count_token|all_token|key_name|(默认--1024个keys)]
		> count_token：token_dict中的key个数
		> all_token：token_dict中所有key和value
		> key_name : 指定token名称的值
		> 默认：token_dict中1024个key和value

 - 返回信息
----------
	{"code":"ok","token":"QSlyv7ppeh-Ga1jam3lVY"}	---- 正常
    {"code":"error",msg:"错误原因"}	 				 ---- 错误等

 - 查 action=get
---------- 
	action=get [设置接口动作：查询]
	token : 需要获取的token名称
		> token = 空 -- 表示显示1024个key和value
		> token = count_token -- 显示token_dict中key的个数
		> token = all_token -- 显示所有token_dict中的key和value
		> token = [其他] -- 显示对应key的值
	EG:
	/api/token_dict?action=get
	&token=all_token

 - 增 action=set
----------
	action=set [设置接口动作：设置]
	token : 设置的vlaue的值
		> token = 空 -- 表示有系统生成token
		> token = [其他]	-- 自行设置token(已经存在就由系统生成)后面可能去掉
	EG:
	/api/token_dict?action=set
	&token