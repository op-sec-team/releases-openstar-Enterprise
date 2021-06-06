#!/bin/bash
# 该脚本在 WAF 启动时执行
# 脚本版本号
version=0.3
install_path=/opt/openresty


if [ "$1" = "start" ];then

    mkdir -p ${install_path}/nginx/conf/conf.d
    mkdir -p ${install_path}/nginx/conf/stream
    mkdir -p ${install_path}/nginx/certs
    mkdir -p ${install_path}/nginx/root_certs
    mkdir -p /tmp/ngx_cache
    chown nobody:nobody -R ${install_path}
    chown root:nobody ${install_path}/nginx/sbin/nginx
    chmod 751 ${install_path}/nginx/sbin/nginx
    chmod u+s ${install_path}/nginx/sbin/nginx
    chown nobody:nobody ${install_path}/nginx/logs/*
    #mv -f ${install_path}/nginx/conf/nginx.conf ${install_path}/nginx/conf/nginx.conf.bak
    ln -sf ${install_path}/openstar/conf/nginx.conf ${install_path}/nginx/conf/nginx.conf
    ln -sf ${install_path}/openstar/conf/waf.conf ${install_path}/nginx/conf/waf.conf
    ln -sf ${install_path}/openstar/conf/gzip.conf ${install_path}/nginx/conf/gzip.conf
    ln -sf ${install_path}/openstar/conf/realip.conf ${install_path}/nginx/conf/realip.conf
    ln -sf ${install_path}/openstar/conf/geoip2.conf ${install_path}/nginx/conf/geoip2.conf
    cat /etc/profile |grep 'openresty' ||(echo "PATH=${install_path}/nginx/sbin:\$PATH" >> /etc/profile && source /etc/profile)
else
    #pass
    echo "./init.sh start"
fi