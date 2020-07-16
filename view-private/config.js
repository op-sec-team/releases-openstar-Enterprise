var URL = '';
var IP_URL =  "http://ip-api.com/json/"; // CC攻击防护api
var branch  = "private"
var version = "2.1.1"


var navleft = `<nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
            <ul class="nav" id="side-menu">
                <li class="nav-header">
                    <div class="dropdown profile-element">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <h3>OPENSTAR WAF</h3>
                        </a>
                    </div>
                </li>
                <li>
					<a href="#" target=''>
					<i style="font-size: 16px" class="iconfont icon-peizhi"></i>
					    <span class="nav-label">dashboard</span>
					    <span class="fa arrow" style="margin-top: 5px;"></span>
					</a>
					<ul id="report" class="nav nav-second-level collapse" aria-expanded="false" style="height: 0px;">
					    <li class="">
					        <a href="/report/index.html">安全报表</a>
					    </li>
					    <li class="">
					        <a href="/report/businessReport.html">业务报表</a>
					    </li>
					    <li class="">
					        <a href="/report/attackLog.html">攻击日志</a>
					    </li>
					</ul>
                </li>
                <li>
                    <a href="#" target=''>
                    <i style="font-size: 16px" class="iconfont icon-peizhi"></i>
                        <span class="nav-label">扩展配置</span>
                        <span class="fa arrow" style="margin-top: 5px;"></span>
                    </a>
                    <ul id="extend" class="nav nav-second-level collapse" aria-expanded="false" style="height: 0px;">
                        <li class="">
                            <a href="/extend/pluginManagement.html">插件管理</a>
                        </li>
                        <li class="">
                            <a href="/extend/certificateManagement.html">证书管理</a>
                        </li>
                        <li class="">
                            <a href="/extend/moduleConfig.html">配置文件管理</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/domain.html" target=''>
                        <i style="font-size: 16px" class="iconfont icon-yuming"></i>
                        <span class="nav-label">域名管理</span>
                        <span class="label label-info pull-right"></span>
                    </a>
                </li>
                <li>
                    <a href="/basic.html" target=''>
                    <i style="font-size: 16px" class="iconfont icon-jichu"></i>
                        <span class="nav-label">基础管理</span>
                        <span class="label label-info pull-right"></span>
                    </a>
                </li>
                <li >
                    <a href="#" target=''>
                    <i style="font-size: 16px" class="iconfont icon-CDN"></i>
                        <span class="nav-label">CDN规则</span>
                        <span class="fa arrow" style="margin-top: 5px;"></span>
                    </a>
                    <ul id="cdnRule" class="nav nav-second-level collapse" aria-expanded="false" style="height: 0px;">
                        <li class="">
                            <a href="/cdnRule/headerConfig.html">添加header头配置</a>
                        </li>
                        <li class="">
                            <a href="/cdnRule/limitConfig.html">限速limit配置</a>
                        </li>
                        <li class="">
                            <a href="/cdnRule/proxyConfig.html">缓存proxy_cache配置</a>
                        </li>
                        <li class="">
                            <a href="/cdnRule/clearCache.html">清除缓存</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/rule.html" target=''>
                    <i style="font-size: 16px" class="iconfont icon-wangzhan"></i>
                        <span class="nav-label">网站规则</span>
                        <span class="label label-info pull-right"></span>
                    </a>
                </li>
                <li >
                    <a href="/global/index.html" target=''>
                    <i style="font-size: 16px" class="iconfont icon-quanju"></i>
                        <span id="goglobal" class="nav-label">全局规则</span>
                        <span class="fa arrow" style="margin-top: 5px;"></span>
                    </a>
                    <ul id="global" class="nav nav-second-level collapse" aria-expanded="false" style="height: 0px;">
                        <li class="">
                            <a href="/global/realIP.html">获取用户真实IP配置</a>
                        </li>
                        <li class="">
                            <a href="/global/ruleIP.html">IP规则配置</a>
                        </li>
                        <li class="">
                            <a href="/global/domainFilter.html">域名方法配置</a>
                        </li>
                        <li class="">
                            <a href="/global/rewrite.html">跳转规则配置</a>
                        </li>
                        <li class="">
                            <a href="/global/advanced.html">高级规则配置</a>
                        </li>
                        <li class="">
                            <a href="/global/general.html">普通规则配置</a>
                        </li>
                        <li class="">
                            <a href="/global/cc.html">频率规则配置</a>
                        </li>
                        <li class="">
                            <a href="/global/replace.html">内容替换配置</a>
                        </li>
                        <li class="">
                            <a href="/global/dengMsg.html">拦截信息配置</a>
                        </li>
						
                    </ul>
                </li>
                 <li>
                    <a href="/global/auth.html" target=''>
                    <i style="font-size: 16px" class="iconfont icon-wangzhan"></i>
                        <span class="nav-label">授权认证配置</span>
                        <span class="label label-info pull-right"></span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>`;
var header = `<div id="navbar" class="row border-bottom">
                    <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
                        <div class="navbar-header">
                            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#">
                                <i class="fa fa-bars"></i>
                            </a>
                        </div>
                        <ul class="nav navbar-top-links navbar-right">
                            <li>
                                <span class="m-r-sm text-muted welcome-message">欢迎您，admin</span>
                            </li>
                            <li>
                                <span   style="margin-right:10px"  id="cluster" class="cluster" ></span>
                                <button id="loadRule" type="button" class="btn btn-primary" >载入规则</button>
                                <button id="restartServer" type=" button" class="btn btn-primary" >重启服务</button>
                            </li>
                            <li>
                                <i  id="showCluster" class="el-icon-menu" style="font-size: 15px;padding: 9px 10px 11px;cursor: pointer;" ></i>
                                <button class="btn btn-primary hide" id="restartClusterServer" style="background-color: #f8ac59;border-color:#f8ac59;" type="button" class="btn btn-primary">集群重启服务</button>
                            </li>
                            <li>
                                <a id="logout">
                                    <i class="fa fa-sign-out"></i> 退出
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
`;
var checkbox_divide = `<div class="row  hardly" style="padding: 0px 15px">
    <span class="form-control-static red-fonts">
        不常用：
    </span>
</div>
`;

String.prototype.format = function () {
    var values = arguments;
    return this.replace(/\{(\d+)\}/g, function (match, index) {
        if (values.length > index) {
            return values[index];
        } else {
            return "";
        }
    });
};

function DateFormt(date,fmt) {
    if(date instanceof Date){}else{
        date = new Date()
    }
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

// 请求方式
function wafReq(url, method, data){
        var result;
        jQuery.ajax({
            url:  url,
            type: method,
            dataType: "json",
            async: false,
            data: data,
            success: function(data){
                    result = data.msg;
            }
        });
        return result;
}

// 请求方式2
function wafReq2(url, method, data){
        var result;
        jQuery.ajax({
            url:  url,
            type: method,
            dataType: "json",
            async: false,
            data: data,
            success: function(data){
                    result = data;
            }
        });
        return result;
}

// var tmp_etime = new Date()
// var tmp_dtime = new Date(tmp_etime)
// tmp_dtime.setDate(tmp_dtime.getDate()-7)
//
// console.log( tmp_etime, tmp_dtime );
// console.log( X_list(tmp_dtime ,tmp_etime, '1h') );

function X_list( etime,dtime,T){
        T = T || "10m"
        // 10m 1h 1d
        var relist = []
        if(T=="10m"){
            while(true){
                if(etime>dtime){
                    break
                }
                var str_date = DateFormt(etime,"yyyy-MM-dd")
                //relist = []
                for(var i=0;i<24;i++){
                        for(var ii=0;ii<=5;ii++){
                            var hh = ""
                            var mm = ""
                            hh = (i.toString().length == 1) ? ("0"+i.toString()) : (i.toString())
                            mm = ii.toString()+"0"
                            relist.push(str_date+' '+hh+mm)                        
                        }
                }
                etime.setDate(etime.getDate()+1)
            }
        }
        else if(T=="1h"){
            var tmp_etime = new Date(etime)
            var tmp_dtime = new Date(dtime)
            tmp_dtime.setDate(tmp_dtime.getDate()+1)
            var all_list = X_list(tmp_etime,tmp_dtime)
            var j = 1
            while(true){
                if(etime>dtime){
                    break
                }
                var str_date = DateFormt(etime,"yyyy-MM-dd")
                for(var i=0;i<24;i++){
                    var hh = ""
                    hh = (i.toString().length == 1) ? ("0"+i.toString()) : (i.toString())
                    var tmp10m = []
                    for(var ii = 0;ii<6;ii++){
                        tmp10m.push(all_list[j])
                        j++
                    }
                    relist[str_date+' '+hh] = tmp10m
                }
                etime.setDate(etime.getDate()+1)
            }
        }
        else{
            var tmp_etime = new Date(etime)
            var tmp_dtime = new Date(dtime)
            tmp_dtime.setDate(tmp_dtime.getDate()+1)
            var all_list = X_list(tmp_etime,tmp_dtime)
            var j = 1
            while(true){
                if(etime>dtime){
                    break
                }
                var str_date = DateFormt(etime,"yyyy-MM-dd")
                var tmp10m = []
                for(var ii=0;ii<144;ii++){
                    tmp10m.push(all_list[j])
                    j++
                }
                relist[str_date] = tmp10m
                etime.setDate(etime.getDate()+1)
            }
        }
        return relist
}


function deleteCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

$(document).ready(function () {
    $('#wrapper').prepend(navleft);
    // $('#page-wrapper').prepend(header);
    $('#page-wrapper').prepend(header)
        // var cluster = document.getElementById('#cluster');
        // setTimeout(()=>{
        //     var cluster = document.getElementById('#cluster');
        //     // console.log(cluster);
        // },200)
    // $('#goglobal').click(function(){
    //     window.location  = '/global/index.html';
    // });
    var href = window.location.toString();
    if(href.includes('global')){
        $('#global').addClass('in');
    }
    if(href.includes('report')){
        $('#report').addClass('in');
    }
    if(href.includes('extend')){
        $('#extend').addClass('in');
    }
    if(href.includes('cdnRule')){
        $('#cdnRule').addClass('in');
    }
    $('#showCluster').click(function(){
        $("#restartClusterServer").toggleClass("hide")
    });
    // 载入规则
    $('#loadRule').click(function(){
        vueData.loadingRules();
    });
    // 重启服务
    $('#restartServer').click(function(){
        vueData.restartServer();
    });
     // 重启集群服务
     $('#restartClusterServer').click(function(){
        vueData.restartClusterServer();
    });
     $('#logout').click(function(){
        vueData.logout();
    });

    $.get(URL+'/api/v2/config_dict',{
        action:'get',
        mod:'base',
        id:'autoSync@state',
    }, function (data) {
        if(data.code == 'ok'){
            var cluster = $('#cluster');
            if (cluster) {
                cluster.html(`集群状态:<font color="#f8ac59"> ${data.msg} </font>`);
            }
        }
    })
});

var vueData = new Vue({
    el: '#navbar',
    data: function () {
        return {
        }
    },
    methods: {
        loadingRules() {
            var that = this;
            $.post(URL + '/api/v2/dict_json', {
                action: 'reload',
            }, function (data) {
                if (data.code == 'ok') {
                     that.$notify({                                     type: 'success',                                     title: '提示',                                     message: '载入成功',                                     duration: 4000                             });
                } else {
                    if( data.msg == "sign error" ) {
                        that.checkSign = "sign error";
                    }
                    that.$notify({                                 type: 'warning',                                 title: '提示',                                 message: data.msg,                                 duration: 4000                             });
                }
            })
        },
        restartServer() {
            var that = this;
            $.post(URL + '/api/v2/nginx_Mod/reload', {
                action: 'reload',
            }, function (data) {
                if (data.code == 'ok') {
                     that.$notify({                                     type: 'success',                                     title: '提示',                                     message: '重启成功',                                     duration: 4000                             });
                } else {
                    if( data.msg == "sign error" ) {
                        that.checkSign = "sign error";
                    }
                    that.$notify({                                 type: 'warning',                                 title: '提示',                                 message: data.msg,                                 duration: 4000                             });
                }
            })
        },
        restartClusterServer() {
            var that = this;
            $.post(URL + '/cluster/v2/nginx_Mod/reload', {
                action: 'reload',
            }, function (data) {
                if (data.code == 'ok') {
                     that.$notify({                                     type: 'success',                                     title: '提示',                                     message: '重启成功',                                     duration: 4000                             });                           
                } else {
                    if(data.msg == "sign error") {
                        that.checkSign = "sign error";
                    }
                    that.$notify({                                 type: 'warning',                                 title: '提示',                                 message: data.msg,                                 duration: 4000                             });
                }
            })
        },
        logout() {
            var that = this;
            deleteCookie('openstar', null);
            $.get(URL + '/api/v2/admin_Mod/logout', {}, function (data) {
                if (data.code == 'ok') {
                    window.location = '/login.html'
                } else {
                    if( data.msg == "sign error" ) {
                        that.checkSign = "sign error";
                    }
                    that.$notify({                                 type: 'warning',                                 title: '提示',                                 message: data.msg,                                 duration: 4000                             });
                }
            })
        },
    },
});