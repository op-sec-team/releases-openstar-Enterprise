LJd  -  '  &   X�- 9 D X�- 9 D K  � �DoshellsupCmdsbin/nginx -td  -  '  &   X�- 9 D X�- 9 D K  � �DoshellsupCmdsbin/nginx -Tk  -  '  &   X�- 9 D X�- 9 D K  � �DoshellsupCmdsbin/nginx -s reloadi  -  '  &   X�- 9 D X�- 9 D K  � �DoshellsupCmdsbin/nginx -s stop� h6  9  ' ' B  6  9  ' ' B  -  9  ' B4   )   X�+ ' J 6  BXB�-  9	 '
	 B:	
	  X	�:		
 X	�+	 '
 J	 X	 �-	  9		:
' B	:
	

  X
	�6
 :	B
 
 X
�+
 ' J
 X
�-
  9

:	B
 
 X
	�-
  9

:	B
 
 X
�+
 ' J
 	  X		�6	 9		
 '  ' &B	X	�6	 9		
 '  ' &B	ER�6 9 ' D  �concat    server ;server insert
tableips ip/domain errorisHost	isIpips port errortonumber:ips backup errorbackup ipairsips error,
split
	gsubstring�  �-  9  B  X�+  J - 99 5 B  X�+ ' J 6 9 B X�+ ' J 9 6
 9 9	B  X�)P =	- 99 9	- B  X�+ ' - 9- B&J 9 9 9  X�+ =6 9 9B X�9 - 99 9B=9   XW�6 9 B X�+ ' J 9 6
 9 9	B  X�)�=	- 99 9	- B  X�+ ' - 9- B&J 9 6 9 9B=9 98  X�+ ' J 9 9 9  X�+ =6 9 9B X�9 - 99 9B=9 9 9  X�+ =6 9 9B X�9 - 99 9B=+ L � �	�
�ssl_verify_clientisHttp2%https.certs_key not in certs_Modtostringcerts_keyhttps.port not in :
"_dict_host.https is not table
httpsisOpenHttpsstrToBooleanbooleanisRewrite_httpstableTojsonStrhttp.port not in :
tonumber	port!_dict_host.http is not table
table	http	type#proxy_protocol need http/https  	http
httpsproxy_protocolisInArrayTbipsW  -   9   B 96 9 B C �decode_base64ngxdecryptnew�  J6  99-  99999- 9 '	 &B9
  X7�- 99
9' B6  9:' &B: X(�6  99
9B' &-  :	B X�+ L - 9- 	 :
B A   X�4  6 	 BX	�- 9   B  X�+ L ER�K  � ��stringEndsipairsstringTojson*sn openstar NBermd5|
state
splitregregsn.jsonloadjsonbaseDir	base
cacheconfig	keysconfig_dictsharedngx� 5 �6   B X�+ ' J 9 9 X�-  9B  X�+ ' J - 99	 '
 &B  X�+ ' J 6 99 ' ' B 6 99 ' 99  X�)P B 6 99 ' 9B 6 99 ' ' 9&B - 9B6 99 '  B 6 99 ' 9B ' 99  X�' 6 9 '  B 9 X1�6 99 '  ' B 6 99 '! ' B 6 99 '" ' B 6 99 '# ' B 6 99 '$ ' B 6 99 '% ' B XZ�'& 9'9(  X�') 6 99 '* 9	'9		 	 X
�)	�B 6 99 '% 	 B '+ 6 99 '	$ 
 B 6 99 '	  '
, - 9'9-'. &

B 6 99 '	! '
/ - 9'9-'0 &

B ' ' 9	'9	1	 	 X
�'2 '	3 -
 9'94'0 &	6	 9		9		
 '"  B		 6	 9		9		
 '#  B		 L � ���client_certs_keyssl_client_certificate ssl_verify_client on;ssl_verify_client
.key;ssl_certificate_key 
.crt;certs_keyssl_certificate �# ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    # ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4:!DH:!DHE;
    # ssl_prefer_server_ciphers on;
    # ssl_session_cache shared:SSL:10m; # 自定义需要修改 SSL 这么名称
    # ssl_session_timeout 30m;
        @port@#listen       @port@ ssl http2;isHttp2
httpslisten       @port@ ssl;@https_port@@is_ssl@@ssl_client_certificate@@ssl_verify_client@@ssl_certificate_key@@ssl_certificate@isOpenHttps@rewrite_https@string`if ($scheme = 'http'){
        return 301 https://$server_name$request_uri ;
    }
        isRewrite_httpsproxy_protocol@p_protocol@@servers@ips	all_@upstream@@host@	port	http@http_port@	gsubrengx&http_all_demo.conf readfile errorconf/http_all_demo.confbaseDirreadfile+SN绑定域名错误，请联系作者	hostMaster
stateautoSync_DictTb not a table
table	type� 
 1-     B  X�+  J - '  9&- 9'  &B- 9 '	 &		 '
 B  X�+ '	 J - B  X

�-
 9

'  ' &B
+
 	 J
 =	+
 L
 �� ��ngx_filerm -rf "writefile host_all.conf errorw+/host_all.confwritefilemkdir -p Doshell	hostconf/conf.d/� 
 B4  6   BH:�-  9	 '
 B  X	3�-  9	 '
 B  X	�X+�- 	 '
 &
4	  -
  9

 B
 
 X
�+
  ' &	
 <	X
�-
  9

 B
-    B  X�+  	 <	
 X�+ ' 	 <	X�+ '	 	 <	FR�L  ���完全一致;字典生成配置文件和现有配置文件不一致readfile+ 配置文件(host_all.conf)不存在 fileOrdirExist/host_all.conf_https
_httpstringEnds
pairs0   -   9   ' - &D   ��
tree supCmd�  ;4  + 6    BH0� X	�
  X	� X	*�-	  '
  &		-
 9

' 	 &B
8 9  X�+ ' <X�- 9	 ' &B X�'	 <X�- 9
	 ' & ' B  X�+ ' <FR�  J � �ngx_file writefile errw+writefilengx_file no change/host_all.confreadfilengx_file is nilngx_filemkdir -p Doshellconf/conf.d/
pairs� 
 2-  '  9 &- 9'  &B9   X�+ 9 ' &J X�- 9 ' &B X�+ ' J X�- 9	 ' & '	
 B  X�+ 9 '	 &	J X�+ L K      ngx_file writefile errw+writefilengx_file no change/host_all.confreadfile ngx_file is nilngx_filemkdir -p Doshell	hostconf/conf.d/U 
 4  6    BX�4  -  	 B>	>9<ER�L �	hostipairs� Y4  + 3  8   X� 8 B <XI�
  X� XB�3 4  6   BH
�-   BF
R
� )� X#�- 9 )	�B4  -	 9		
  B	6
 	 B
X�9  X�6 9BH�:  X�+ :<FR�X�+ ER�X�6  BX
�  B  X�+ 9	<E
R
�X�+ '
 <  2  �J � ���域名不存在	hostresokipairsthread_dosplit_list
pairs  �  + 96   ' B 6  ' B6  ' B6  ' B6 96 99	B9
  ' B ' &5 5	 5
 3 =3 =3 =3 =3 =3 =3 3 =3 = 3! ="3# =$3% =&3' =(3) =*2  �L ngx_file_saveNew ngx_file_save fileDiffdict dictDifffile save_fileByDictNewValue Dict2fileNewValue check_sn_domain  check_dict_host check_ips nginx_S nginx_s nginx_T nginx_t   ��"�*�2�:�A�I�B�C�J�Ko  PQRSTX����'�(�.�4�6�6�6�6�6�6�6�6�6�6�6�6�6�6�6�6�6�6�6�6�6�6�6�6�7�7�7�7�7�7�<�>�>�>�>�>�>�>�>�>�>�?�?�?�?�?�?�?�?�?�?�?�?�?�D�E�E�F�F�F�F�F�G�N�N�N�N�bV�F�F�F�F�F�F�G�G�G�G�G�G�G�G�G��Wa�:�C�G�M�M�M�M�M�M�� _VERSION��̙����conf/conf.d/certs/pathJoinprefixconfigngxinsert
tableresty.aesmodcache	optl
stoolrequire 