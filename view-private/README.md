http://172.21.196.10:5460/api/v2/data_Mod/global 			host-自定义
http://172.21.196.10:5460/api/v2/data_Mod/realtime
http://172.21.196.10:5460/api/v2/data_Mod/trend
http://172.21.196.10:5460/api/v2/data_Mod/trendx

  -- request
http://172.21.196.10:5460/api/v2/data_Mod/trendx?key=waf_log&stime=2018-10-10&etime=2018-10-11   #当前时间和前7天的数据
  -- waf_log
http://172.21.196.10:5460/api/v2/data_Mod/trendx?key=waf_deny&stime=2018-10-10&etime=2018-10-11
  -- waf_deny

http://172.21.196.10:5460/api/v2/data_Mod/trend?key=host_Mod_name --接入的域名
http://172.21.196.10:5460/api/v2/data_Mod/trend?key=wiki.it.chehejia.com%20global_host

-- 10 min
2018-10-08 0740
2018-10-08 0750
2018-10-08 0800
2018-10-08 0810
2018-10-08 0820

- 30 min
2018-10-08 0000
2018-10-08 0030
2018-10-09 0000
2018-10-09 0030

-- 1 hour
2018-10-09 0000
2018-10-09 0100
2018-10-09 0200


-- 1 day
2018-10-09 0000
2018-10-10 0000
2018-10-11 0000



时间选定在1个月的数据；
1.要访问的所有请求
2.定义一个时间统一格式化，排序和时间段分割函数(可以传参数), 并更具时间返回键和值  ---初始化的时候操作，用函数包装统一返回数据 

默认一个时间，为10-00之间的数据