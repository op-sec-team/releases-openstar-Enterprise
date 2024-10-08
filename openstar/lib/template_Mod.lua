LJ�  ~-  9   B  X�+ ' J 6   BXm�6 9' 	 B9  X	�+	 
 ' &

J	 -	  9		
 '	 B	-
  9


:	B
 
 X
�+
  ' &J
   X

�6
 :	B

  X
�+
  ' &J
 9
 
 X
�6
 9B

  X
�+
  ' &J
 9
 
 X
�6
 9B

  X
�+
  ' &J
 9
 
 X
�6
 9B

 X
�+
  ' &J
 9
 
 X
�6
 9B

 X
�+
  ' &J
 9
 
 X�-
 9

9' ' B
 
 X
�+
  ' &J
 ER�+ L ��' ips.fail_timeout need '(number)s'jio\dsremathfail_timeout ips.backup need booleanbackup ips.down need booleanboolean	type	down ips.max_fails need numbermax_fails ips.weight need numberweight! ips.server:port need numbertonumber ips.server is not ip	isIp:
splitips.server is nilserver	[%s]formatstringipairsips need array_tableisArrayTable� 	 -    X
�- 9  B 
  X� X�-  - 9 B   B6 99 ' ' B L �� �	gsubrengxcompilereadfiles  -    X
�- 9  B 
  X� X�-  - 9 B   BL �� �compilereadfile�&   ,6   ' B 6  ' B6  ' B' ' 5 5 4 5 >5	 >5
 >=5 4 5	 >	5	 >	5	 >	5	 >	=5 =5 =3 =3	 =	3
 =
2  �L ngx_template stream_template check_tbips 
https ssl_verify_clientclient_certs_keyabc.comcerts_keywww.abc.comisHttp2	port�	http 	portPisRewrite_https fail_timeout10smax_failsbackupserver192.168.28.28 fail_timeout10smax_fails	downserver192.168.28.26 fail_timeout10smax_failsserver192.168.28.27:88 fail_timeout10sweightserver192.168.28.26 isOpenHttpsproxy_protocol	httpmirror	hostwww.abc.comips fail_timeout10smax_failsserver192.168.28.28 fail_timeout10smax_failsserver192.168.28.27:88 fail_timeout10sweightserver192.168.28.26 	namestream_nameproxy_timeout30sproxy_connect_timeout5s	port�C version����	�����####################     passport waf_cc by zhouj     #################
## 2016年6月9日 11:26:36 up
## 后续 增加 http / https 网站使用一份配置文件，不再区分 http.conf 和 https.conf

upstream all_{{host}} {
    #server 13.7.42.92 max_fails=1 fail_timeout=10s;
    #server 192.168.1.158 backup;
    {% if balancing == "ip_hash" then%}
    ip_hash;
    {% end %}
    {% for _, v in ipairs(ips) do %}
    server {{v.server}}{%if v.weight then%} weight={{v.weight}}{%end%} max_fails={{v.max_fails or 1}} fail_timeout={{v.fail_timeout or "10s"}}{% if v.backup then%} backup {% end %}{% if v.down then%} down {% end %};
    {% end %}
    keepalive 10240;
    }

server {
    listen       {{http.port}};
    {% if isOpenHttps then%}
    listen       {{https.port or 443}} ssl {% if https.isHttp2 then %} http2 {% end %};
    {% end %}

    server_name  {{host}};
    # access_log  off;
    # access_log logs/{{host}}.log main buffer=32768 flush=3;
    # error_log   /dev/null crit;
    # proxy_next_upstream http_502 http_504 http_500 error timeout invalid_header non_idempotent;

    {% if isOpenHttps then %}
    ssl_certificate /opt/openresty/nginx/certs/{{https.certs_key}}.crt;
    ssl_certificate_key /opt/openresty/nginx/certs/{{https.certs_key}}.key;
    {% if https.ssl_verify_client then %}
    ssl_verify_client on;
    ssl_client_certificate /opt/openresty/nginx/certs/{{https.client_certs_key}}.key;
    {% end %}
    # ######## other ssl conf
    #ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    #ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4:!DH:!DHE;
    #ssl_prefer_server_ciphers on;
    #ssl_session_cache shared:SSL:10m;
    #ssl_session_timeout 30m;
    {% end %}

    {% if http.isRewrite_https then%}
    if ($scheme = 'http'){
        return 301 https://$server_name$request_uri ;
    }
    {%end%}

    proxy_set_header   Host             $host;
    proxy_set_header   X-Real-IP        $remote_addr;
    proxy_set_header   X-Forwarded-For  $remote_addr;
    proxy_set_header   X-Forwarded-Proto $scheme;
    #proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
    proxy_http_version 1.1;
    proxy_set_header Upgrade    $http_upgrade;
    #proxy_set_header Connection "upgrade";
    proxy_set_header Connection $connection_upgrade;

    location / {
        proxy_pass {{proxy_protocol}}://all_{{host}};
        # proxy cache 配置
        set $p_cache "1";
        # p_cache = "1" 不缓存
        proxy_cache my_cache;
        proxy_cache_valid 200 206 5m;
        proxy_cache_valid 301 302 304 1h;
        proxy_cache_valid 403 404 444 1h;
        # proxy_cache_valid 500 502 1h;
        # proxy_cache_use_stale error timeout http_500 http_502 http_503 http_504;
        proxy_cache_lock      on;
        proxy_cache_lock_timeout  5s;
        proxy_cache_key $host$uri$is_args$args;
        proxy_cache_bypass $cookie_nocache $p_cache;
        add_header WAF-X-Cache "$upstream_cache_status";
        proxy_ignore_headers Cache-Control Set-Cookie;
        # 限速配置
        limit_rate_after 5m;
        # 断点续传配置
        # proxy_set_header Range $http_range;
        # if ( $http_range = ''){
        #         expires 259200s;
        #     }
        {% if mirror then %}
        mirror /mirror;
        {% end %}
        }

    location /mirror {
        internal;
        proxy_pass http://http_mirror$request_uri;
    }
}
�upstream {{stream_name}} {
    #server 13.7.42.92 weight=5 max_fails=1 fail_timeout=10s;
    #server 13.7.42.91 weight=5 max_fails=1 fail_timeout=10s;
    {% for _, v in ipairs(ips) do %}
    server {{v.server}}{%if v.weight then%} weight={{v.weight}}{%end%} max_fails={{v.max_fails or 1}} fail_timeout={{v.fail_timeout or "10s"}};
    {% end %}
    }

server {
    listen       {{port}}{{l_type}};
    proxy_connect_timeout {{proxy_connect_timeout}};
    proxy_timeout {{proxy_timeout}};
    proxy_pass {{stream_name}};

}
	optl
stoolresty.templaterequire 