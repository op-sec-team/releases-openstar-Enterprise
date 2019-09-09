FROM centos:latest

#将当前目录下的所有文件复制到指定位置
ADD openstar /tmp/
RUN bash /tmp/bash/install.sh install 
RUN ln -s /opt/openresty/nginx/sbin/nginx /usr/sbin/nginx
EXPOSE 80

