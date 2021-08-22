#!/usr/bin/env bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

#=================================================
#   System Required: CentOS 6/7,Debian 8/9,Ubuntu 16+
#   Description: 学习 www.94ish.me 后重写的脚本
#   Version: 0.0.7
#   Author: openstar
#   项目：releases-openstar-Enterprise
#=================================================

#set -x
sh_ver="0.0.8"
github="raw.githubusercontent.com/op-sec-team/releases-openstar-Enterprise/tengine"

Green_font_prefix="\033[32m" && Red_font_prefix="\033[31m" && Green_background_prefix="\033[42;37m" && Red_background_prefix="\033[41;37m" && Font_color_suffix="\033[0m"
Info="${Green_font_prefix}[信息]${Font_color_suffix}"
Error="${Red_font_prefix}[错误]${Font_color_suffix}"
Tip="${Green_font_prefix}[注意]${Font_color_suffix}"

data_str=`date +%Y%m%d`

# 下载目录
build_path=/opt/down
mkdir -p ${build_path}

# 安装目录 不能修改 ！！！
install_path=/opt/tengine
mkdir -p ${install_path}
old_path="${install_path}/openstar.bak/"
resty="${install_path}/bin/resty -I ${install_path}/openstar/lib/ ${install_path}/openstar/bash/openstar.lua ${old_path}"

# 没有用到 这个下载的链接
jit_version=2.1.0-beta3
luajit_uri=http://luajit.org/download/LuaJIT-${jit_version}.tar.gz
luajit_md5=eae40bc29d06ee5e3078f9444fcea39b
# 2.1.0-beta3 版本的 md5
jit_git_install(){
    if [[ -f /usr/local/lib/libluajit-5.1.so ]]; then
        echo "luajit(github) install!" && sleep 1s && return
    fi
    cd ${build_path} && rm -rf luajit2
    git clone --depth=1 https://github.com/openresty/luajit2 || (echo "git clone luajit error" && exit 1)
    cd luajit2 && make && make install
    echo "/usr/local/lib" > /etc/ld.so.conf.d/usr_local_lib.conf
    ldconfig
}

or_version=1.15.8.3
openresty_uri=https://openresty.org/download/openresty-${or_version}.tar.gz
openresty_md5=819a31fa6e9cc8c5aa4838384a9717a7
# 1.15.8.3 版本的 md5
openresty_down(){
    cd ${build_path}
    if [ ! -f "openresty-${or_version}.tar.gz" ]; then
        echo "openresty-${or_version}.tar.gz 文件不存在  需要下载！"
        wget ${openresty_uri} || (echo "${Error}wget openresty Error!!" && exit 1)
    else
        # 文件存在检查 md5
        or_now=`md5sum openresty-${or_version}.tar.gz|awk '{print $1}'`
        if [ "${or_now}" = "${openresty_md5}" ]; then
            echo "openresty-${or_version}.tar.gz md5 ok!"
        else
            echo "openresty-${or_version}.tar.gz 文件 md5 不正确"
            rm -rf openresty-${or_version}.tar.gz
            wget ${openresty_uri} || (echo "${Error}wget openresty Error!!" && exit 1)
        fi
    fi
}

luarocks_version=3.2.1
luarocks_uri=https://luarocks.org/releases/luarocks-${luarocks_version}.tar.gz
luarocks_md5=236ea48b78ddb96ecbd33654a573bdb2
# 3.2.1 版本的 md5
down_luarocks(){
    cd ${build_path}
    if [ ! -f "luarocks-${luarocks_version}.tar.gz" ]; then
        echo "luarocks-${luarocks_version}.tar.gz 文件不存在  需要下载！"
        wget ${luarocks_uri} || (echo "wget luarocks Error" && exit 1)
    else
        # 文件存在检查 md5
        luarocks_now=`md5sum luarocks-${luarocks_version}.tar.gz|awk '{print $1}'`
        if [ "${luarocks_now}" = "${luarocks_md5}" ]; then
            echo "luarocks-${luarocks_version}.tar.gz md5 ok!"
        else
            echo "luarocks-${luarocks_version}.tar.gz 文件 md5 不正确"
            rm -rf luarocks-${luarocks_version}.tar.gz && wget ${luarocks_uri} || (echo "wget luarocks Error" && exit 1)
        fi
    fi
}

#安装jemalloc最新版本
jemalloc_md5=3d41fbf006e6ebffd489bdb304d009ae
jemalloc_url=https://github.com/jemalloc/jemalloc/releases/download/5.2.1/jemalloc-5.2.1.tar.bz2
jemalloc_install(){
    if [[ -f /usr/local/lib/libjemalloc.so ]]; then
        echo "jemalloc install" && return
    fi
    cd ${build_path}
    if [ ! -f "jemalloc-5.2.1.tar.bz2" ]; then
        echo "jemalloc-5.2.1.tar.bz2 文件不存在 需要下载！"
        wget ${jemalloc_url} || (echo "${Error}wget jemalloc Error" && exit 1)
    else
        # 文件存在检查 md5
        jemalloc_now=`md5sum jemalloc-5.2.1.tar.bz2|awk '{print $1}'`
        if [ "${jemalloc_now}" = "${jemalloc_md5}" ]; then
            echo "jemalloc-5.2.1.tar.bz2 md5 ok!"
        else
            echo "jemalloc-5.2.1.tar.bz2 文件 md5 不正确"
            rm -rf jemalloc-5.2.1.tar.bz2
            wget ${jemalloc_url} || (echo "${Error}wget jemalloc Error" && exit 1)
        fi
    fi
    rm -rf jemalloc-5.2.1
    tar -xvf jemalloc-5.2.1.tar.bz2 || (echo "${Error}tar -xvf jemalloc-xxx.tar.bz2 Error" && exit 1)
    cd jemalloc-5.2.1
    ./configure || (echo "${Error}configure jemalloc Error" && exit 1)
    make && make install
    echo '/usr/local/lib' > /etc/ld.so.conf.d/local.conf
    ldconfig
}

tengine_version=2.3.2
tengine_uri=http://tengine.taobao.org/download/tengine-${tengine_version}.tar.gz
tengine_md5=d854a6ecb3f0e140d94d9e0c45044d1e
tengine_down(){
    cd ${build_path}
    if [ ! -f "tengine-${tengine_version}.tar.gz" ]; then
        echo "tengine-${tengine_version}.tar.gz 文件不存在  需要下载！"
        wget ${tengine_uri} || (echo "wget tengine Error" && exit 1)
    else
        # 文件存在检查 md5
        tengine_now=`md5sum tengine-${tengine_version}.tar.gz|awk '{print $1}'`
        if [ "${tengine_now}" = "${tengine_md5}" ]; then
            echo "tengine-${tengine_version}.tar.gz md5 ok!"
        else
            echo "tengine-${tengine_version}.tar.gz 文件 md5 不正确"
            rm -rf tengine-${tengine_version}.tar.gz && wget ${tengine_uri} || (echo "wget tengine Error" && exit 1)
        fi
    fi
}

purge_version=2.3
purge_uri=http://labs.frickle.com/files/ngx_cache_purge-${purge_version}.tar.gz
purge_md5=3d4ec04bbc16c3b555fa20392c1119d1
# 2.3 版本的 md5
down_purge(){
    cd ${build_path}
    if [ ! -f "ngx_cache_purge-${purge_version}.tar.gz" ]; then
        echo "ngx_cache_purge-${purge_version}.tar.gz 文件不存在  需要下载！"
        wget ${purge_uri} || (echo "wget purge Error" && exit 1)
    else
        # 文件存在检查 md5
        purge_now=`md5sum ngx_cache_purge-${purge_version}.tar.gz|awk '{print $1}'`
        if [ "${purge_now}" = "${purge_md5}" ]; then
            echo "ngx_cache_purge-${purge_version}.tar.gz md5 ok!"
        else
            echo "ngx_cache_purge-${purge_version}.tar.gz 文件 md5 不正确"
            rm -rf ngx_cache_purge-${purge_version}.tar.gz && wget ${purge_uri} || (echo "wget purge Error" && exit 1)
        fi
    fi
}
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

#检查 openstar 安装情况 ngx_status / openstar_status / nginx_path
check_openstar(){
    ngx_status="no"
    openstar_status="no"
    nginx_path="no"
    luarocks_statue="no"
    if [[ -f ${install_path}/nginx/sbin/nginx ]]; then
        ngx_status=`nohup ${install_path}/nginx/sbin/nginx -v >/tmp/1 2>&1 && grep -oE "\w*/[0-9.]+" /tmp/1|head -n 1`
        rm -rf /tmp/1
        echo -e " ngx  版本: ${Green_font_prefix}${ngx_status}${Font_color_suffix}"
    else
        echo -e " ngx  状态: ${Red_font_prefix}未安装${Font_color_suffix}${Red_font_prefix}请先安装 tengine ${Font_color_suffix}"
    fi

    if cat /etc/profile |grep -q -E -i "tengine"; then
        nginx_path="yes"
        echo -e " nginx path 状态: ${Green_font_prefix}已配置${Font_color_suffix}"
    else
        echo -e " nginx path 状态: ${Red_font_prefix}未配置${Font_color_suffix}"
    fi

    if [[ -f /opt/tengine/openstar/dist.ini ]]; then
        openstar_status=`grep "version" /opt/tengine/openstar/dist.ini | grep -oE "[0-9.]+"`
        echo -e " openstar   版本: ${Green_font_prefix}${openstar_status}${Font_color_suffix}"
    else
        echo -e " openstar   状态: ${Red_font_prefix}未安装${Font_color_suffix} openstar"
    fi

    if [[ -f ${install_path}/luarocks/bin/luarocks ]]; then
        luarocks_statue=`${install_path}/luarocks/bin/luarocks --version |grep -oE  "[0-9.]+"`
        echo -e " luarocks   版本: ${Green_font_prefix}${luarocks_statue}${Font_color_suffix}"
        if [[ ! -f /usr/bin/luarocks ]]; then
            ln -sf ${install_path}/luarocks/bin/luarocks /usr/bin/luarocks
            echo -e " luarocks  软连接建立:${Green_font_prefix}/usr/bin/luarocks${Font_color_suffix}"
        else
            echo -e " luarocks  软连接建立:${Green_font_prefix}/usr/bin/luarocks${Font_color_suffix}"
        fi
    else
        echo -e " luarocks   状态: ${Red_font_prefix}未安装${Font_color_suffix} luarocks"
    fi
}

#更新脚本
Update_Shell(){
    echo -e "当前版本为 [ ${sh_ver} ]，开始检测最新版本..."
    sh_new_ver=$(wget --no-check-certificate -qO- "http://${github}/openstar/bash/tengine.sh"|grep 'sh_ver="'|awk -F "=" '{print $NF}'|sed 's/\"//g'|head -1)
    [[ -z ${sh_new_ver} ]] && echo -e "${Error} 检测最新版本失败 !" && sleep 2s && start_menu
    if [[ ${sh_new_ver} != ${sh_ver} ]]; then
        echo -e "发现新版本[ ${sh_new_ver} ]，是否更新？[Y/n]"
        read -p "(默认: y):" yn
        [[ -z "${yn}" ]] && yn="y"
        if [[ ${yn} == [Yy] ]]; then
            wget -N --no-check-certificate http://${github}/openstar/bash/tengine.sh && chmod +x tengine.sh
            echo -e "脚本已更新为最新版本[ ${sh_new_ver} ] !"
        else
            echo && echo "  已取消..." && echo
        fi
    else
        echo -e "当前已是最新版本[ ${sh_new_ver} ] !"
        sleep 5s
    fi
}


luarocks_install(){
    if [[ -f ${install_path}/luarocks/bin/luarocks ]]; then
        echo "luarocks install" && return
    fi
    down_luarocks
    rm -rf luarocks-${luarocks_version} && tar xvzf luarocks-${luarocks_version}.tar.gz
    cd luarocks-${luarocks_version}
    ./configure --prefix=${install_path}/luarocks \
                --with-lua=/usr/local/ \
                --with-lua-include=/usr/local/include/luajit-2.1 \
                --lua-suffix='jit' || (echo "configure luarocks Error" && exit 1)
    make
    make install
    # ln -sf ${install_path}/luarocks/bin/luarocks /usr/bin/luarocks
    ${install_path}/luarocks/bin/luarocks install lua-cjson
}


#tengine安装
function tengine_install(){
    if [[ "${release}" == "centos" ]]; then
        yum install -y epel-release
        mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
        wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-${version}.repo
        # yum install -y http://rpms.famillecollet.com/enterprise/remi-release-${version}.rpm
        yum clean all
        yum makecache
        yum install -y wget make gcc readline-devel perl pcre-devel openssl-devel git unzip zip htop dos2unix bzip2
        yum install -y sysstat goaccess libmaxminddb-devel
        # yum install -y wget make gcc readline-devel perl pcre-devel openssl-devel git unzip zip htop goaccess dos2unix bzip2 libmaxminddb-devel
    elif [[ "${release}" == "debian" ]]; then
        # Debian10  Debian9   Debian8  Debian7
        # buster    stretch   jessie   wheezy
        if [[ "${version}" == "10" ]]; then
            debapt=buster
        elif [[ "${version}" == "9" ]]; then
            debapt=stretch
        elif [[ "${version}" == "8" ]]; then
            debapt=jessie
        else
            debapt=wheezy
        fi
        mv /etc/apt/sources.list /etc/apt/sources.list.bak
        echo -e "deb http://mirrors.aliyun.com/debian ${debapt} main contrib non-free" >/etc/apt/sources.list
        echo -e "deb-src http://mirrors.aliyun.com/debian ${debapt} main contrib non-free" >>/etc/apt/sources.list
        echo -e "deb http://mirrors.aliyun.com/debian ${debapt}-updates main contrib non-free" >>/etc/apt/sources.list
        echo -e "deb-src http://mirrors.aliyun.com/debian ${debapt}-updates main contrib non-free" >>/etc/apt/sources.list
        echo -e "deb http://mirrors.aliyun.com/debian-security ${debapt}/updates main contrib non-free" >>/etc/apt/sources.list
        echo -e "deb-src http://mirrors.aliyun.com/debian-security ${debapt}/updates main contrib non-free" >>/etc/apt/sources.list
        apt-get install -y libpcre3-dev libssl-dev perl make build-essential curl git unzip zip htop dos2unix bzip2
        apt-get install -y sysstat goaccess libmaxminddb-devel
    elif [[ "${release}" == "ubuntu" ]]; then
        mv /etc/apt/sources.list /etc/apt/sources.list.bak
        echo -e "deb http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse" >/etc/apt/sources.list
        echo -e "deb http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse" >>/etc/apt/sources.list
        echo -e "deb http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse" >>/etc/apt/sources.list
        echo -e "deb http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse" >>/etc/apt/sources.list
        echo -e "deb http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse" >>/etc/apt/sources.list
        echo -e "deb-src http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse" >>/etc/apt/sources.list
        echo -e "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse" >>/etc/apt/sources.list
        echo -e "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse" >>/etc/apt/sources.list
        echo -e "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse" >>/etc/apt/sources.list
        echo -e "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse" >>/etc/apt/sources.list
        apt-get install -y libpcre3-dev libssl-dev perl make build-essential curl git unzip zip htop dos2unix bzip2
        apt-get install -y sysstat goaccess libmaxminddb-devel
    else
        echo -e "${Error} openstar脚本不支持当前系统 ${release} ${version} ${bit} !" && exit 1
    fi
    # jemalloc_install 关闭 jemalloc 内存优化
    jit_git_install
    openresty_down
    cd ${build_path} && rm -rf openresty-${or_version} && tar -xzf openresty-${or_version}.tar.gz
    cd ${build_path}/openresty-${or_version}/bundle
    git clone --depth=1 https://github.com/leev/ngx_http_geoip2_module.git || (echo "git clone ngx_http_geoip2_module Error" && exit 1)
    git clone --depth=1 https://github.com/api7/lua-var-nginx-module.git || (echo "git clone lua-var-nginx-module Error" && exit 1)
    git clone --depth=1 https://github.com/vozlt/nginx-module-vts.git || (echo "git clone nginx-module-vts Error" && exit 1)
    ## ngx_cache_purge 下载
    down_purge
    cp -f ${build_path}/ngx_cache_purge-${purge_version}.tar.gz ${build_path}/openresty-${or_version}/bundle/
    cd ${build_path}/openresty-${or_version}/bundle && rm -rf ngx_cache_purge-${purge_version} && tar zxf ngx_cache_purge-${purge_version}.tar.gz
    ## tengine 下载
    tengine_down
    cp -f ${build_path}/tengine-${tengine_version}.tar.gz ${build_path}/openresty-${or_version}/bundle/
    cd ${build_path}/openresty-${or_version}/bundle && rm -rf tengine-${tengine_version} && tar -xzf tengine-${tengine_version}.tar.gz

    cd ${build_path}/openresty-${or_version}/bundle/tengine-${tengine_version}
    ## --add-module=../lua-var-nginx-module \
    ./configure --prefix=${install_path}/nginx \
        --with-cc-opt=-O2 \
        --add-module=../nginx-module-vts \
        --add-module=../ngx_devel_kit-0.3.1rc1 \
        --add-module=../headers-more-nginx-module-0.33 \
        --add-module=../ngx_cache_purge-${purge_version} \
        --add-module=../ngx_http_geoip2_module \
        --with-http_lua_module \
        --with-http_realip_module \
        --with-http_v2_module \
        --with-stream \
        --with-stream_ssl_module \
        --with-stream_ssl_preread_module \
        --with-http_ssl_module \
        --with-luajit-lib=/usr/local/lib/ \
        --with-luajit-inc=/usr/local/include/luajit-2.1/ \
        --with-ld-opt=-Wl,-rpath,/usr/local/lib ||(echo "configure tengine error" && exit 1)
    ## --with-ld-opt='-ljemalloc'
    make && make install
    chown nobody:nobody -R ${install_path}
    cd ${install_path}
    chown root:nobody nginx/sbin/nginx
    chmod 751 nginx/sbin/nginx
    chmod u+s nginx/sbin/nginx
    cat /etc/profile |grep "tengine" ||(echo "PATH=${install_path}/nginx/sbin:\$PATH" >> /etc/profile && source /etc/profile)
}

#waf对应ngx配置文件覆盖
function waf_ngx_conf(){
    ln -sf ${install_path}/openstar/conf/firewall.conf ${install_path}/nginx/conf/firewall.conf
    ln -sf ${install_path}/openstar/conf/nginx.conf ${install_path}/nginx/conf/nginx.conf
    ln -sf ${install_path}/openstar/conf/waf.conf ${install_path}/nginx/conf/waf.conf
    ln -sf ${install_path}/openstar/conf/gzip.conf ${install_path}/nginx/conf/gzip.conf
    ln -sf ${install_path}/openstar/conf/realip.conf ${install_path}/nginx/conf/realip.conf
    ln -sf ${install_path}/openstar/conf/geoip2.conf ${install_path}/nginx/conf/geoip2.conf
}

#openstar安装
function openstar_install(){
    cd ${install_path}
    git clone --depth=1 -b tengine https://github.com/op-sec-team/releases-openstar-Enterprise || (echo "git clone openstar Error" && exit 1)
    cp -Rf ./releases-openstar-Enterprise/openstar ${install_path}/
    cp -Rf ./releases-openstar-Enterprise/view-private ${install_path}/nginx/html/
    mkdir -p ${install_path}/nginx/conf/conf.d
    mkdir -p ${install_path}/nginx/conf/stream
    mkdir -p ${install_path}/nginx/certs
    mkdir -p ${install_path}/nginx/root_certs
    chown nobody:nobody -R ${install_path}/openstar
    chown nobody:nobody -R ${install_path}/nginx/html/view-private
}

function openstar_conf_json(){
    #执行 resty 进行 base.json 和 admin_Mod.json 的赋值
    echo `${resty}`
}

#openstar 更新选项
openstar_menu(){
    clear
    echo && echo -e " openstar 更新
    ${Green_font_prefix}0.${Font_color_suffix} 保留 nginx.conf waf.conf waf规则(conf_json/.*)
    ${Green_font_prefix}1.${Font_color_suffix} 保留 waf规则(conf_json/.*)
    ${Green_font_prefix}2.${Font_color_suffix} 保留 nginx.conf waf.conf
    ${Green_font_prefix}3.${Font_color_suffix} 保留 base.json admin_Mod.json nginx_Mod.json certs_Mod plugin_Mod
    ${Green_font_prefix}4.${Font_color_suffix} 返回主界面
    ————————————————————————————————" && echo
    read -p " 请输入数字 [0-4]:" num
    case "$num" in
        0) # 保留 nginx.conf waf.conf waf规则(conf_json/.*)
            cp -Rf ${install_path}/openstar.bak/regsn.json ${install_path}/openstar/
            cp -Rf ${install_path}/openstar.bak/conf/* ${install_path}/openstar/conf/
            cp -Rf ${install_path}/openstar.bak/conf_json/* ${install_path}/openstar/conf_json/
            # 使用 resty 进行json 赋值
            openstar_conf_json
            return
        ;;
        1) # 保留 waf规则(conf_json/.*)
            cp -Rf ${install_path}/openstar.bak/regsn.json ${install_path}/openstar/
            cp -Rf ${install_path}/openstar.bak/conf_json/* ${install_path}/openstar/conf_json/
            # 使用 resty 进行json 赋值
            openstar_conf_json
            return
        ;;
        2) # 保留 nginx.conf waf.conf
            cp -Rf ${install_path}/openstar.bak/regsn.json ${install_path}/openstar/
            cp -Rf ${install_path}/openstar.bak/conf/* ${install_path}/openstar/conf/
            return
        ;;
        3) # 保留 base.json admin_Mod.json nginx_Mod.json certs_Mod plugin_Mod
            cp -Rf ${install_path}/openstar.bak/regsn.json ${install_path}/openstar/
            # 使用 resty 进行json 赋值
            openstar_conf_json
            #cp -Rf ${install_path}/openstar.bak/conf_json/admin_Mod.json ${install_path}/openstar/conf_json/
            #cp -Rf ${install_path}/openstar.bak/conf_json/base.json ${install_path}/openstar/conf_json/
            cp -Rf ${install_path}/openstar.bak/conf_json/nginx_Mod.json ${install_path}/openstar/conf_json/
            cp -Rf ${install_path}/openstar.bak/conf_json/certs_Mod.json ${install_path}/openstar/conf_json/
            cp -Rf ${install_path}/openstar.bak/conf_json/root_certs_Mod.json ${install_path}/openstar/conf_json/
            cp -Rf ${install_path}/openstar.bak/conf_json/plugin_Mod.json ${install_path}/openstar/conf_json/
            cp -Rf ${install_path}/openstar.bak/lib/plugin/* ${install_path}/openstar/lib/plugin/
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
    mv -f ${install_path}/openstar.bak ${install_path}/openstar.a
    rm -rf ${install_path}/releases-openstar-Enterprise
    mv -f ${install_path}/openstar ${install_path}/openstar.bak
    cd ${install_path}
    git clone --depth=1 -b tengine https://github.com/op-sec-team/releases-openstar-Enterprise ||(mv -f ${install_path}/openstar.bak ${install_path}/openstar && echo "git clone openstar Error!" && exit 1)
    cp -Rf ./releases-openstar-Enterprise/openstar ${install_path}/
    cp -f ${install_path}/openstar.bak/regsn.json ${install_path}/openstar/
    chown nobody:nobody -R ${install_path}/openstar
    openstar_menu
}

#up openstar
function up_view(){
    mv -f ${install_path}/nginx/html/view-private.bak ${install_path}/nginx/html/view-private${data_str}
    rm -rf ${install_path}/releases-openstar-Enterprise
    mv -f ${install_path}/nginx/html/view-private ${install_path}/nginx/html/view-private.bak
    cd ${install_path}
    git clone --depth=1 https://github.com/op-sec-team/releases-openstar-Enterprise ||(mv -f ${install_path}/nginx/html/view-private.bak ${install_path}/nginx/html/view-private && echo "git clone openstar Error" && exit)
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
    mkdir -p ${install_path}/nginx/conf/stream
    mkdir -p ${install_path}/nginx/certs
    mkdir -p ${install_path}/nginx/root_certs
    chown nobody:nobody -R ${install_path}
    chown root:nobody ${install_path}/nginx/sbin/nginx
    chmod 751 ${install_path}/nginx/sbin/nginx
    chmod u+s ${install_path}/nginx/sbin/nginx
    chown nobody:nobody ${install_path}/nginx/logs/*
    mv -f ${install_path}/nginx/conf/nginx.conf ${install_path}/nginx/conf/nginx.conf.bak
    ln -sf ${install_path}/openstar/conf/firewall.conf ${install_path}/nginx/conf/firewall.conf
    ln -sf ${install_path}/openstar/conf/nginx.conf ${install_path}/nginx/conf/nginx.conf
    ln -sf ${install_path}/openstar/conf/waf.conf ${install_path}/nginx/conf/waf.conf
    ln -sf ${install_path}/openstar/conf/gzip.conf ${install_path}/nginx/conf/gzip.conf
    ln -sf ${install_path}/openstar/conf/realip.conf ${install_path}/nginx/conf/realip.conf
    ln -sf ${install_path}/openstar/conf/geoip2.conf ${install_path}/nginx/conf/geoip2.conf
    # ln -sf ${install_path}/luarocks/lib/lua/5.1/cjson.so ${install_path}/openstar/lib/cjson.so
    cd ${install_path}/nginx/html && (ls |grep "favicon.ico" || wget https://www.nginx.org/favicon.ico)
    cp -rf ${install_path}/nginx/html/favicon.ico ${install_path}/nginx/html/view-private/
    cp -rf ${install_path}/nginx/html/favicon.ico ${install_path}/nginx/html/view-master/
    dos2unix ${install_path}/openstar/conf/*.conf
    dos2unix ${install_path}/openstar/bash/*.sh
}


#开始菜单
start_menu(){
    clear
    echo && echo -e "   openstar 一键安装管理脚本 ${Red_font_prefix}[v${sh_ver}]${Font_color_suffix}
    -- openstar 18801180400 --

     ${Green_font_prefix}0.${Font_color_suffix} 升级脚本
    —————————— tengine    ——————————
     ${Green_font_prefix}1.${Font_color_suffix} 安装 tengine
     ${Green_font_prefix}2.${Font_color_suffix} 更新 tengine
    —————————— openstar WAF ——————————
     ${Green_font_prefix}3.${Font_color_suffix} 安装 openstar
     ${Green_font_prefix}4.${Font_color_suffix} 更新 openstar
     ${Green_font_prefix}5.${Font_color_suffix} 查看云端 openstar 版本
     ${Green_font_prefix}6.${Font_color_suffix} 更新 openstar 界面 view
    —————————— 杂项管理     ——————————
     ${Green_font_prefix}7.${Font_color_suffix} 安装 luajit
     ${Green_font_prefix}8.${Font_color_suffix} 安装 luarocks
     ${Green_font_prefix}9.${Font_color_suffix}  openstar运行检查
     ${Green_font_prefix}10.${Font_color_suffix}  查看系统信息
     ${Green_font_prefix}11.${Font_color_suffix} 退出脚本
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
            tengine_install # 安装 tengine
            start_menu
        ;;
        2)
            tengine_install # 更新 tengine
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
            jit_git_install
            start_menu # 待定
        ;;
        8)
            luarocks_install
            start_menu # 待定
        ;;
        9)
            check # 运行之前检查
            start_menu
        ;;
        10)
            os_msg # 查看系统信息
            exit 1
        ;;
        11)
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
