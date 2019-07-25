# 说明
  该接口API是对所有DICT的只读操作(uri、参数大小写敏感)

# 接口操作
  **url:http://$ip:$port/api/read_dict?action=[参数1]&dict=[参数2]&id=[参数3]**

	action(string) = api动作控制  [get(锁定)]

	dict(string) = 设置dict名称 [token_dict|config_dict|ip_dict|host_dict|count_dict|limit_ip_dict|lock_dict|log_msg_dict]
		> token_dict：该内存一般存放waf生成的token数据
		> config_dict：该内存存放全局规则开关，规则列表
		> ip_dict：该内存存放ip规则列表
		> host_dict：该内存存放基于host的规则组
		> count_dict：该内存存放WAF拦截，访问计数
		> limit_ip_dict：该内存存放network_Mod中匹配成功的规则计数
		> lock_dict：该内存存放调用api是加锁标记
		> log_msg_dict：该内存存放日志记录数据

	id(string) =  对应dict的key名称 [count_id|key_name|(默认--所有keys)]
		> count_id：对应dict中的key个数

 - 查 action=get
---------- 
	 /api/count_dict?action=get&dict=count_dict&id=[参数1]
	 id=空 -- 表示显示所有内容
	 id=count_id -- 显示对应dict中key的个数
	 id=[其他] -- 显示对应ip的值