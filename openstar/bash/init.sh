#!/bin/bash
# 该脚本在WAF启动时执行
# 脚本版本号
version=0.2
install_path=/opt/openresty


if [ "$1" = "start" ];then

    mkdir -p ${install_path}/nginx/conf/conf.d
    chown nobody:nobody -R ${install_path}
    chown root:nobody ${install_path}/nginx/sbin/nginx
    chmod 751 ${install_path}/nginx/sbin/nginx
    chmod u+s ${install_path}/nginx/sbin/nginx
    chown nobody:nobody ${install_path}/nginx/logs/*
    ln -sf ${install_path}/openstar/conf/nginx.conf ${install_path}/nginx/conf/nginx.conf
    ln -sf ${install_path}/openstar/conf/waf.conf ${install_path}/nginx/conf/waf.conf
    cat /etc/profile |grep 'openresty' ||(echo "PATH=${install_path}/nginx/sbin:\$PATH" >> /etc/profile && source /etc/profile)

else
    #pass
    echo "./init.sh start"
fi