#!/usr/bin/env bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

#=================================================
#   System Required: CentOS 6/7,Debian 8/9,Ubuntu 16+
#   Description: 学习 www.94ish.me 后重写的脚本
#   Version: 1.4.1
#   Author: openstar
#   项目：releases-openstar-Enterprise
#=================================================

#set -x
sh_ver="1.4.1"
github="raw.githubusercontent.com/op-sec-team/releases-openstar-Enterprise/master"

Green_font_prefix="\033[32m" && Red_font_prefix="\033[31m" && Green_background_prefix="\033[42;37m" && Red_background_prefix="\033[41;37m" && Font_color_suffix="\033[0m"
Info="${Green_font_prefix}[信息]${Font_color_suffix}"
Error="${Red_font_prefix}[错误]${Font_color_suffix}"
Tip="${Green_font_prefix}[注意]${Font_color_suffix}"

# 下载目录
build_path=/opt/down
# 安装目录 不能修改 ！！！
install_path=/opt/openresty

# openresty 安装的版本
install_or_version=1.15.8.2
# openresty 对应 nginx 版本说明
#1.11.2.2 nginx 1.11.2 , 1.11.2.1 nginx 1.11.2 , 1.9.15.1 nginx 1.9.15
# openresty 下载路径
openresty_uri=https://openresty.org/download/openresty-${install_or_version}.tar.gz

# centos 6 = remi-release-6.rpm ; centos 7 = remi-release-7.rpm
# rpm_uri=http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
# ali_repo=http://mirrors.aliyun.com/repo/Centos-7.repo

#检查系统 release 变量名称
check_sys(){
    if [[ -f /etc/redhat-release ]]; then
        release="centos"
    elif cat /etc/issue | grep -q -E -i "debian"; then
        release="debian"
    elif cat /etc/issue | grep -q -E -i "ubuntu"; then
        release="ubuntu"
    elif cat /etc/issue | grep -q -E -i "centos|red hat|redhat"; then
        release="centos"
    elif cat /proc/version | grep -q -E -i "debian"; then
        release="debian"
    elif cat /proc/version | grep -q -E -i "ubuntu"; then
        release="ubuntu"
    elif cat /proc/version | grep -q -E -i "centos|red hat|redhat"; then
        release="centos"
    fi
}

#检查Linux版本  version / bit 变量名称
check_version(){
    if [[ -s /etc/redhat-release ]]; then
        version=`grep -oE  "[0-9.]+" /etc/redhat-release | cut -d . -f 1`
    else
        version=`grep -oE  "[0-9.]+" /etc/issue | cut -d . -f 1`
    fi
    bit=`uname -m`
    if [[ ${bit} = "x86_64" ]]; then
        bit="x64"
    else
        bit="x32"
    fi
}

#检查 openstar 安装情况
check_openstar(){
    ngx_status="no"
    openstar_status="no"
    nginx_path="no"
    if [[ -f ${install_path}/nginx/sbin/nginx ]]; then
        ngx_status=`nohup ${install_path}/nginx/sbin/nginx -v >/tmp/1 2>&1 && grep -oE "\w*/[0-9.]+" /tmp/1|head -n 1`
        rm -rf /tmp/1
        echo -e " ngx  版本: ${Green_font_prefix}${ngx_status}${Font_color_suffix}"
    else
        echo -e " ngx  状态: ${Red_font_prefix}未安装${Font_color_suffix}${Red_font_prefix}请先安装 openresty ${Font_color_suffix}"
    fi

    if cat /etc/profile |grep -q -E -i "openresty"; then
        nginx_path="yes"
        echo -e " nginx path 状态: ${Green_font_prefix}已配置${Font_color_suffix}"
    else
        echo -e " nginx path 状态: ${Red_font_prefix}未配置${Font_color_suffix}"
    fi

    if [[ -f /opt/openresty/openstar/dist.ini ]]; then
        openstar_status=`grep "version" /opt/openresty/openstar/dist.ini | grep -oE "[0-9.]+"`
        echo -e " openstar   版本: ${Green_font_prefix}${openstar_status}${Font_color_suffix}"
    else
        echo -e " openstar   状态: ${Red_font_prefix}未安装${Font_color_suffix} openstar"
    fi
}

#更新脚本
Update_Shell(){
    echo -e "当前版本为 [ ${sh_ver} ]，开始检测最新版本..."
    sh_new_ver=$(wget --no-check-certificate -qO- "http://${github}/openstar/bash/openstar.sh"|grep 'sh_ver="'|awk -F "=" '{print $NF}'|sed 's/\"//g'|head -1)
    [[ -z ${sh_new_ver} ]] && echo -e "${Error} 检测最新版本失败 !" && sleep 2s && start_menu
    if [[ ${sh_new_ver} != ${sh_ver} ]]; then
        echo -e "发现新版本[ ${sh_new_ver} ]，是否更新？[Y/n]"
        read -p "(默认: y):" yn
        [[ -z "${yn}" ]] && yn="y"
        if [[ ${yn} == [Yy] ]]; then
            wget -N --no-check-certificate http://${github}/openstar/bash/openstar.sh && chmod +x openstar.sh
            echo -e "脚本已更新为最新版本[ ${sh_new_ver} ] !"
        else
            echo && echo "  已取消..." && echo
        fi
    else
        echo -e "当前已是最新版本[ ${sh_new_ver} ] !"
        sleep 5s
    fi
}

#openresty安装
function openresty_install(){
    if [[ "${release}" == "centos" ]]; then
        yum install -y wget make gcc readline-devel perl pcre-devel openssl-devel git unzip zip htop goaccess dos2unix jemalloc
    elif [[ "${release}" == "debian" ]]; then
        apt-get install -y libpcre3-dev libssl-dev perl make build-essential curl git unzip zip htop goaccess dos2unix jemalloc
    elif [[ "${release}" == "ubuntu" ]]; then
        apt-get install -y libpcre3-dev libssl-dev perl make build-essential curl git unzip zip htop goaccess dos2unix jemalloc
    else
        echo -e "${Error} openstar脚本不支持当前系统 ${release} ${version} ${bit} !" && exit 1
    fi
    mkdir -p ${build_path}
    cd ${build_path}
    rm -rf openresty-${install_or_version}.tar.gz
    wget ${openresty_uri} || (echo "wget openresty Error!!" && exit 1)
    rm -rf openresty-${install_or_version} && tar zxvf openresty-${install_or_version}.tar.gz
    cd openresty-${install_or_version}
    ###############################
    #./configure --prefix=${install_path} --with-http_realip_module --with-http_v2_module --with-http_geoip_module
    ./configure --prefix=${install_path} \
                --with-ld-opt='-ljemalloc' \
                --without-luajit-gc64 \
                --with-http_realip_module \
                --with-http_v2_module
    gmake
    gmake install
    ##############################
    chown nobody:nobody -R ${install_path}
    cd ${install_path}
    chown root:nobody nginx/sbin/nginx
    chmod 751 nginx/sbin/nginx
    chmod u+s nginx/sbin/nginx
    cat /etc/profile |grep "openresty" ||(echo "PATH=${install_path}/nginx/sbin:\$PATH" >> /etc/profile && source /etc/profile)
}

#waf对应ngx配置文件覆盖
function waf_ngx_conf(){
    ln -sf ${install_path}/openstar/conf/nginx.conf ${install_path}/nginx/conf/nginx.conf
    ln -sf ${install_path}/openstar/conf/waf.conf ${install_path}/nginx/conf/waf.conf
    ln -sf ${install_path}/openstar/conf/gzip.conf ${install_path}/nginx/conf/gzip.conf
    ln -sf ${install_path}/openstar/conf/realip.conf ${install_path}/nginx/conf/realip.conf
}

#openstar安装
function openstar_install(){
    mkdir -p ${install_path} && cd ${install_path}
    git clone https://github.com/op-sec-team/releases-openstar-Enterprise || (echo "git clone openstar Error" && exit 1)
    cp -Rf ./releases-openstar-Enterprise/openstar /opt/openresty/
    cp -Rf ./releases-openstar-Enterprise/view-private /opt/openresty/nginx/html/
    mkdir -p ${install_path}/nginx/conf/conf.d
    chown nobody:nobody -R ${install_path}/openstar
    chown nobody:nobody -R ${install_path}/nginx/html/view-private
}

#openstar 更新选项
openstar_menu(){
    clear
    echo && echo -e " openstar 更新
    ${Green_font_prefix}0.${Font_color_suffix} 保留 nginx.conf waf.conf waf规则(conf_json/.*)
    ${Green_font_prefix}1.${Font_color_suffix} 保留 waf规则(conf_json/.*)
    ${Green_font_prefix}2.${Font_color_suffix} 保留 nginx.conf waf.conf
    ${Green_font_prefix}3.${Font_color_suffix} 不保留 nginx.conf waf.conf waf规则(conf_json/.*)
    ${Green_font_prefix}4.${Font_color_suffix} 返回主界面
    ————————————————————————————————" && echo
    read -p " 请输入数字 [0-4]:" num
    case "$num" in
        0) # 保留 nginx.conf waf.conf waf规则(conf_json/.*)
            cp -Rf ${install_path}/openstar.bak/conf/* ${install_path}/openstar/conf/
            cp -Rf ${install_path}/openstar.bak/conf_json/* ${install_path}/openstar/conf_json/
            return
        ;;
        1) # 保留 waf规则(conf_json/.*)
            cp -Rf ${install_path}/openstar.bak/conf_json/* ${install_path}/openstar/conf_json/
            return
        ;;
        2) # 保留 nginx.conf waf.conf
            cp -Rf ${install_path}/openstar.bak/conf/* ${install_path}/openstar/conf/
            return
        ;;
        3) # 不保留 nginx.conf waf.conf waf规则(conf_json/.*)
            return
        ;;
        4)
            start_menu
        ;;
        *)
        echo -e "${Error}:请输入正确数字 [0-4]"
        sleep 5s
        openstar_menu
    esac
}

#up openstar
function up_openstar(){
    rm -rf ${install_path}/openstar.bak
    rm -rf ${install_path}/releases-openstar-Enterprise
    mv -f ${install_path}/openstar ${install_path}/openstar.bak
    cd ${install_path}
    git clone https://github.com/op-sec-team/releases-openstar-Enterprise ||(echo "git clone openstar Error! [pls mv openstar.bak openstar]" && exit 1)
    cp -Rf ./releases-openstar-Enterprise/openstar ${install_path}/
    cp -f ${install_path}/openstar.bak/regsn.json ${install_path}/openstar/
    chown nobody:nobody -R ${install_path}/openstar
    openstar_menu
}

#up openstar
function up_view(){
    rm -rf ${install_path}/nginx/html/view-private.bak
    rm -rf ${install_path}/releases-openstar-Enterprise
    mv -f ${install_path}/nginx/html/view-private ${install_path}/nginx/html/view-private.bak
    cd ${install_path}
    git clone https://github.com/op-sec-team/releases-openstar-Enterprise ||(echo "git clone openstar Error [pls mv view-private.bak view-private]" && exit)
    cp -Rf ./releases-openstar-Enterprise/view-private ${install_path}/nginx/html/
    chown nobody:nobody -R ${install_path}/nginx/html/view-private
}


#查看系统信息
os_msg(){
    #### 查看服务器信息 版本、内存、CPU 等等 ####
    echo "uname －a"
    uname -a
    echo "##########################"
    echo "cat /proc/version"
    cat /proc/version
    echo "##########################"
    echo "cat /proc/cpuinfo"
    cat /proc/cpuinfo
    echo "##########################"
    echo " cat /etc/issue  或cat /etc/redhat-release"
    cat /etc/redhat-release 2>/dev/null || cat /etc/issue
    echo "##########################"
    echo "getconf LONG_BIT  （Linux查看版本说明当前CPU运行在32bit模式下， 但不代表CPU不支持64bit）"
    getconf LONG_BIT
}

#openstar 工作检查
function check(){
    mkdir -p ${install_path}/nginx/conf/conf.d
    mkdir -p ${install_path}/nginx/certs
    chown nobody:nobody -R ${install_path}
    chown root:nobody ${install_path}/nginx/sbin/nginx
    chmod 751 ${install_path}/nginx/sbin/nginx
    chmod u+s ${install_path}/nginx/sbin/nginx
    chown nobody:nobody ${install_path}/nginx/logs/*
    mv -f ${install_path}/nginx/conf/nginx.conf ${install_path}/nginx/conf/nginx.conf.bak
    ln -sf ${install_path}/openstar/conf/nginx.conf ${install_path}/nginx/conf/nginx.conf
    ln -sf ${install_path}/openstar/conf/waf.conf ${install_path}/nginx/conf/waf.conf
    ln -sf ${install_path}/openstar/conf/gzip.conf ${install_path}/nginx/conf/gzip.conf
    ln -sf ${install_path}/openstar/conf/realip.conf ${install_path}/nginx/conf/realip.conf
    cd ${install_path}/nginx/html && (ls |grep "favicon.ico" || wget https://www.nginx.org/favicon.ico)
}


#开始菜单
start_menu(){
    clear
    echo && echo -e "   openstar 一键安装管理脚本 ${Red_font_prefix}[v${sh_ver}]${Font_color_suffix}
    -- openstar 18801180400 --

     ${Green_font_prefix}0.${Font_color_suffix} 升级脚本
    —————————— openresty    ——————————
     ${Green_font_prefix}1.${Font_color_suffix} 安装 openresty
     ${Green_font_prefix}2.${Font_color_suffix} 更新 openresty
    —————————— openstar WAF ——————————
     ${Green_font_prefix}3.${Font_color_suffix} 安装 openstar
     ${Green_font_prefix}4.${Font_color_suffix} 更新 openstar
     ${Green_font_prefix}5.${Font_color_suffix} 查看云端 openstar 版本
     ${Green_font_prefix}6.${Font_color_suffix} 更新 openstar 界面 view
     ${Green_font_prefix}7.${Font_color_suffix} 待定...
    —————————— 杂项管理     ——————————
     ${Green_font_prefix}8.${Font_color_suffix}  openstar运行检查
     ${Green_font_prefix}9.${Font_color_suffix}  查看系统信息
     ${Green_font_prefix}10.${Font_color_suffix} 退出脚本
    ———————————————————————————" && echo
    check_openstar
    echo -e " 当前操作系统：${Green_font_prefix}[${release}]${Font_color_suffix}"
    echo -e " 版本号：${Green_font_prefix}[${version}]${Font_color_suffix} 位数：${Green_font_prefix}[${bit}]${Font_color_suffix}"
    echo
    read -p " 请输入数字 [0-10]:" num
    case "$num" in
        0)
            Update_Shell # 升级脚本
        ;;
        1)
            openresty_install # 安装 openresty
            start_menu
        ;;
        2)
            openresty_install # 更新 openresty
            waf_ngx_conf # 创建 waf ngx 配置文件 软连接
            start_menu
        ;;
        3)
            openstar_install # 安装 openstar
            start_menu
        ;;
        4)
            up_openstar # 更新 openstar + view
            start_menu
        ;;
        5)
            op_new_ver="[]"
            op_new_ver=$(wget --no-check-certificate -qO- "http://${github}/openstar/dist.ini"|grep 'version'|grep -oE "[0-9.]+")
            echo -e "云端 openstar 版本：${Green_font_prefix}${op_new_ver}${Font_color_suffix}"
            sleep 5s
            start_menu # 查看云端 openstar 版本
        ;;
        6)
            up_view # 更新 waf 后台界面
            start_menu
        ;;
        7)
            start_menu # 待定
        ;;
        8)
            check # 运行之前检查
            start_menu
        ;;
        9)
            os_msg # 查看系统信息
            exit 1
        ;;
        10)
            exit 1
        ;;
        *)
        clear
        echo -e "${Error}:请输入正确数字 [0-10]"
        sleep 5s
        start_menu
        ;;
    esac
}

#############系统检测组件#############
check_sys
check_version
[[ ${release} != "debian" ]] && [[ ${release} != "ubuntu" ]] && [[ ${release} != "centos" ]] && echo -e "${Error} 本脚本不支持当前系统 ${release} !" && exit 1
start_menu
