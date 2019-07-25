# 说明
  该接口API是对config_dict进行文件json操作的(uri、参数大小写敏感)

# 接口操作
  **url:http://$ip:$port/api/config_json?action=[参数1]&mod=[参数2]&host=[参数3]&debug=[参数4]**
	
	action(string) = [save|reload]：api动作控制

	mod(string) = [all_mod|host_Mod|$base.key]：指定操作的模块名称（支持config_dict/host_dict,ip_dict暂不支持）
		> all_mod : 表示所有内容（confing_dict所有keys,host_dict所有keys）
		> host_Mod : 表示host_dict中的keys
		> 其他：表示config_dict中的keyss

	host(string) = [$host|空 -- 默认所有host]：需要保存的host名称
	
	debug(string) = [no|yes -- 默认]：是否启用调试模式（不覆盖原json文件，新建一个*_bak.json的文件）

 - 返回信息
----------
	{"code":"ok",......}  			---- 正常
    {"code":"error",msg:"错误原因"}	 ---- 错误等

 - 保存配置规则 action=save
----------
	action=save [保存规则]
	mod : 需要保存的模块名称
	host : 需要保存的host名称（当mod=host_Mod时）

	EG:
	/api/config_json?action=save
	&mod=host_Mod
	&host=www.test.com
	&debug=no

	/api/config_json?action=save
	&mod=all_mod

	/api/config_json?action=save
	&mod=base
	

 - 重载配置规则 action=reload
----------
	action=reload [删除一个host_Mod规则]

	EG:
	/api/config_json?action=reload