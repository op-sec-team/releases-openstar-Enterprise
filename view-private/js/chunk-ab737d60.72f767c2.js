(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab737d60"],{"0ccb":function(t,e,a){var n=a("50c4"),i=a("1148"),r=a("1d80"),o=Math.ceil,s=function(t){return function(e,a,s){var l,c,u=String(r(e)),d=u.length,h=void 0===s?" ":String(s),f=n(a);return f<=d||""==h?u:(l=f-d,c=i.call(h,o(l/h.length)),c.length>l&&(c=c.slice(0,l)),t?u+c:c+u)}};t.exports={start:s(!1),end:s(!0)}},1148:function(t,e,a){"use strict";var n=a("a691"),i=a("1d80");t.exports="".repeat||function(t){var e=String(i(this)),a="",r=n(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(a+=e);return a}},1276:function(t,e,a){"use strict";var n=a("d784"),i=a("44e7"),r=a("825a"),o=a("1d80"),s=a("4840"),l=a("8aa5"),c=a("50c4"),u=a("14c3"),d=a("9263"),h=a("d039"),f=[].push,p=Math.min,m=4294967295,g=!h((function(){return!RegExp(m,"y")}));n("split",2,(function(t,e,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=String(o(this)),r=void 0===a?m:a>>>0;if(0===r)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,r);var s,l,c,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,h+"g");while(s=d.call(g,n)){if(l=g.lastIndex,l>p&&(u.push(n.slice(p,s.index)),s.length>1&&s.index<n.length&&f.apply(u,s.slice(1)),c=s[0].length,p=l,u.length>=r))break;g.lastIndex===s.index&&g.lastIndex++}return p===n.length?!c&&g.test("")||u.push(""):u.push(n.slice(p)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var i=o(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,i,a):n.call(String(i),e,a)},function(t,i){var o=a(n,t,this,i,n!==e);if(o.done)return o.value;var d=r(t),h=String(this),f=s(d,RegExp),w=d.unicode,y=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),v=new f(g?d:"^(?:"+d.source+")",y),_=void 0===i?m:i>>>0;if(0===_)return[];if(0===h.length)return null===u(v,h)?[h]:[];var b=0,x=0,S=[];while(x<h.length){v.lastIndex=g?x:0;var D,V=u(v,g?h:h.slice(x));if(null===V||(D=p(c(v.lastIndex+(g?0:x)),h.length))===b)x=l(h,x,w);else{if(S.push(h.slice(b,x)),S.length===_)return S;for(var F=1;F<=V.length-1;F++)if(S.push(V[F]),S.length===_)return S;x=b=D}}return S.push(h.slice(b)),S}]}),!g)},"1c31":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return s})),a.d(e,"b",(function(){return l}));var n=a("b775"),i=(a("4328"),a("365c"));function r(t){return Object(n["a"])({url:"".concat(i["a"].report.secGlobal),method:"get"})}function o(t){return Object(n["a"])({url:"".concat(i["a"].report.secTrendx),method:"get",params:t})}function s(t){return Object(n["a"])({url:"".concat(i["a"].report.secWafLog),method:"get",params:t})}function l(){return Object(n["a"])({url:"".concat(i["a"].report.secOwasp),method:"get"})}},"3ca3":function(t,e,a){"use strict";var n=a("6547").charAt,i=a("69f3"),r=a("7dd0"),o="String Iterator",s=i.set,l=i.getterFor(o);r(String,"String",(function(t){s(this,{type:o,string:String(t),index:0})}),(function(){var t,e=l(this),a=e.string,i=e.index;return i>=a.length?{value:void 0,done:!0}:(t=n(a,i),e.index+=t.length,{value:t,done:!1})}))},"408a":function(t,e,a){var n=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"4d90":function(t,e,a){"use strict";var n=a("23e7"),i=a("0ccb").start,r=a("9a0c");n({target:"String",proto:!0,forced:r},{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"843c":function(t,e,a){"use strict";var n=a("23e7"),i=a("0ccb").end,r=a("9a0c");n({target:"String",proto:!0,forced:r},{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},8698:function(t,e,a){},9406:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",{staticClass:"dashboard",attrs:{gutter:20}},[a("wafCard",{attrs:{card:t.f1}}),a("wafCard",{attrs:{card:t.f2}}),a("wafCard",{attrs:{card:t.f3}}),a("wafCard",{attrs:{card:t.f4}})],1),a("el-row",{staticClass:"custom-col",attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-card",{staticStyle:{height:"350px, padding:0px"},attrs:{shadow:"never"}},[a("el-col",{attrs:{span:12}},[a("div",{staticStyle:{width:"470px",height:"350px"},attrs:{id:"draw1"}})]),a("el-col",{attrs:{span:12}},[a("div",{staticStyle:{width:"470px",height:"350px"},attrs:{id:"draw2"}})])],1)],1)],1),a("el-row",{staticClass:"custom-col",attrs:{gutter:20}},[a("el-col",{staticStyle:{"min-height":"190px"},attrs:{span:12}},[a("h3",[t._v("自定义拦截规则")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.customRule}},[a("el-table-column",{staticStyle:{width:"50%"},attrs:{prop:"site",label:"拦截域名"}}),a("el-table-column",{staticStyle:{width:"50%"},attrs:{prop:"total",label:"拦截次数"}})],1)],1),a("el-col",{attrs:{span:12}},[a("h3",[t._v("CC攻击防护")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.customRule2}},[a("el-table-column",{staticStyle:{width:"25%"},attrs:{prop:"host",label:"域名"}}),a("el-table-column",{staticStyle:{width:"25%"},attrs:{prop:"site",label:"拦截IP"}}),a("el-table-column",{staticStyle:{width:"25%"},attrs:{prop:"total",label:"拦截次数"}}),a("el-table-column",{staticStyle:{width:"25%"},attrs:{prop:"address",label:"地理位置"}})],1)],1)],1),a("el-row",[a("el-col",{staticClass:"custom-col",attrs:{span:24}},[a("el-card",{staticStyle:{"padding-top":"0"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"line-height":"40px",height:"40px"},attrs:{slot:"header"},slot:"header"},[a("div",{staticStyle:{float:"left"}},[a("label",{staticStyle:{cursor:"pointer",color:"rgb(24, 144, 255) !important"},on:{click:function(e){return t.initData(7,7)}}},[t._v("7天")]),t._v(" "),a("label",{staticStyle:{cursor:"pointer",color:"rgb(24, 144, 255) !important"},on:{click:function(e){return t.initData(30,30)}}},[t._v("30天")])]),a("div",{staticStyle:{float:"left","margin-left":"20px"}},[a("div",[a("label",[t._v("开始时间：")]),a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"选择日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:t.sh.date1,callback:function(e){t.$set(t.sh,"date1",e)},expression:"sh.date1"}}),t._v(" - "),a("label",[t._v("结束时间：")]),a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"结束日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:t.sh.date2,callback:function(e){t.$set(t.sh,"date2",e)},expression:"sh.date2"}}),t._v(" "),a("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:function(e){return t.initData(8,8)}}})],1)]),a("div",{staticStyle:{float:"right"}},[t._v(" 最小刻度："),a("label",{staticStyle:{cursor:"pointer",color:"rgb(24, 144, 255) !important"},on:{click:function(e){return t.draw3("10m")}}},[t._v("10min")]),t._v(" "),a("label",{staticStyle:{cursor:"pointer",color:"rgb(24, 144, 255) !important"},on:{click:function(e){return t.draw3("1h")}}},[t._v("1h")]),t._v(" "),a("label",{staticStyle:{cursor:"pointer",color:"rgb(24, 144, 255) !important"},on:{click:function(e){return t.draw3("1d")}}},[t._v("1d")])])]),a("div",{staticStyle:{width:"100%",height:"480px"},attrs:{id:"wafTrend"}})])],1)],1)],1)},i=[],r=(a("4160"),a("c975"),a("d81d"),a("b0c0"),a("b680"),a("d3b7"),a("4d63"),a("ac1f"),a("25f0"),a("3ca3"),a("843c"),a("4d90"),a("1276"),a("159b"),a("ddb0"),a("96cf"),a("1da1")),o=a("164e"),s=a.n(o),l=a("bc3a"),c=a.n(l),u=a("ec1b"),d=a.n(u),h=a("1c31"),f=function(){return a.e("chunk-3095c0ef").then(a.bind(null,"8af7"))},p={dataItem:{display:"flex",flexBasis:"50%",alignItems:"center",marginTop:"20px"},dataItemImg:{color:"#1890ff",marginTop:"auto",marginBottom:"auto",fontSize:"60px",marginRight:"30px"},dataItemUnit:{height:"60px",display:"flex",flexBasis:"50%",flexDirection:"column",justifyContent:"space-between"},dataTitle:{color:"#666",fontSize:"12px"},dataAmount:{color:"#333",fontSize:"24px"}},m=function(t,e){return{color:["rgba(60, 144, 247, 1)","rgba(244, 205, 73, 1)","rgba(85, 191, 192, 1)","rgba(94, 190, 103, 1)","rgba(224, 86, 103, 1)","rgba(124, 75, 216, 1)"],tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"right",y:"center",itemGap:5,icon:"circle",textStyle:{fontSize:12,fontFamily:"Monaco"},data:[],formatter:function(t){var a,n=0;return e.forEach((function(e){n+=e.value,e.name==t&&(a=e.value)})),t.padEnd(18," ")+((100*a/n).toFixed(2)+"% ").padStart(8)+a.toString().padStart(5)}},series:[{name:t,type:"pie",radius:"44%",center:["20%","50%"],label:{show:!1},labelLine:{normal:{show:!1},show:!1},data:[]}]}},g={data:function(){return{styles:p,mod_arr:[],f1:{img:"fa fa-user-o",header:"访问统计",content:0,contentTag:"已访问",todayCount:-1,todayCountTag:"今日"},f2:{img:"fa fa-free-code-camp",header:"拦截总数",content:0,contentTag:"已拦截",todayCount:-1,todayCountTag:"LOG"},f3:{img:"fa fa-bolt",header:"CC统计",content:0,contentTag:"攻击次数",todayCount:-1,todayCountTag:"今日"},f4:{img:"fa fa-hourglass-o",header:"自定义拦截",content:0,contentTag:"攻击次数",todayCount:-1,todayCountTag:"今日"},chartData:{chartPie_inlineTitle_data:[],chartPie_outlineTitle_data:[],chartPie_inline_data:[],chartPie_outline_data:[]},customRule:[],customRule2:[],sh:{date1:"",date2:""},waf_start_day:0,waf_end_day:0,waf_log:[],waf_deny:[],option6:{title:{text:""},tooltip:{trigger:"axis"},toolbox:{x:"80%",y:"top",show:!0,feature:{mark:{show:!0},saveAsImage:{show:!0},dataView:{show:!0}}},legend:{data:["waf_log","waf_deny","waf_req"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:[{type:"value"}],series:[{name:"waf_log",type:"line",data:[]},{name:"waf_deny",type:"line",data:[]},{name:"waf_req",type:"line",data:[]}]}}},mounted:function(){this.draw1(),this.draw3("init"),this.draw2()},methods:{draw1:function(){var t=this;Object(h["a"])().then((function(e){if(e.hasOwnProperty("code")&&"ok"===e.code){console.log(e),t.customIn(e.msg);var a=e.msg.ip_mod,n=0,i=new Array;for(var r in a){var o,l,c=r.split(" ")[0].split("_");c.length>=2?(l=c[1],o=c[0]):(l=c[0],o="*"),n+=parseInt(a[r]),i.push({host:o,site:l,total:parseInt(a[r])})}t.f3.content=n,t.customCC(i);var u=e.msg.waf;for(var d in u){var h=parseInt(u[d]),f=String(d);0!=h&&t.chartData.chartPie_outline_data.push({value:h,name:f})}for(var p in u){var g=String(p);t.chartData.chartPie_outlineTitle_data.push(g)}console.log(t.chartData.chartPie_outlineTitle_data),t.f1.content=parseInt(e.msg["request count"]),t.f2.content=parseInt(e.msg["gl_waf"]["deny"]),t.f2.todayCount=parseInt(e.msg["gl_waf"]["log"]);var w=document.getElementById("draw1"),y=s.a.init(w),v=m("记录请求",t.chartData.chartPie_outline_data);v.legend.data=t.chartData.chartPie_outlineTitle_data,v.series[0].data=t.chartData.chartPie_outline_data;var _=[];for(var b in t.chartData.chartPie_outline_data){var x={},S=t.chartData.chartPie_outline_data[b]["name"],D=t.chartData.chartPie_outline_data[b]["value"];x[S]=D,_.push(x)}t.mod_arr=_,console.log(v),y.setOption(v),console.log(t.f1,t.f2)}else t.$notify({type:"warning",title:"提示",message:e.msg,duration:1500,position:"bottom-right"})}))},draw2:function(){var t=this;Object(h["b"])().then((function(e){if(e.hasOwnProperty("code")&&"ok"===e.code){console.log(e);var a=e.msg;for(var n in a){var i=parseInt(a[n]),r=String(n);0!=i&&t.chartData.chartPie_inline_data.push({value:i,name:r})}for(var o in a){var l=String(o);t.chartData.chartPie_inlineTitle_data.push(l)}var c=document.getElementById("draw2"),u=s.a.init(c),d=m("waf拦截",t.chartData.chartPie_inline_data);d.legend.data=t.chartData.chartPie_inlineTitle_data,d.series[0].data=t.chartData.chartPie_inline_data;var h=[];for(var f in t.chartData.chartPie_inline_data){var p={},g=t.chartData.chartPie_inline_data[f]["name"],w=t.chartData.chartPie_inline_data[f]["value"];p[g]=w,h.push(p)}t.mod_arr=h,u.setOption(d)}else t.$notify({type:"warning",title:"提示",message:e.msg,duration:1500,position:"bottom-right"})}))},draw3:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,i,r,o,l,c,u,d,f,p,m,g,w,y,v,_,b,x,S;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(0==e.waf_start_day?(n=new Date((new Date).getTime()-6048e5),i=new Date):(n=new Date(e.waf_start_day),i=new Date(e.waf_end_day)),r=e.DateFormt(n,"yyyy-MM-dd"),o=e.DateFormt(i,"yyyy-MM-dd"),"init"!=String(t)){a.next=14;break}return u={key:"waf_log",stime:r,etime:o},d={key:"waf_deny",stime:r,etime:o},a.next=8,Object(h["c"])(u);case 8:return l=a.sent,a.next=11,Object(h["c"])(d);case 11:c=a.sent,e.waf_log=l.msg,e.waf_deny=c.msg;case 14:f={xData:[],waf_log:[],waf_deny:[],waf_req:[]},a.t0=String(t),a.next="1d"===a.t0?18:"1h"===a.t0?21:"10m"===a.t0?24:27;break;case 18:for(m in p=e.X_list(n,i,"1d"),p){for(v in g=0,w=0,y=p[m],y)_=y[v],g+=e.waf_log[_]||0,w+=e.waf_deny[_]||0;b=g+w,f["xData"].push(m),f["waf_log"].push(g),f["waf_deny"].push(w),f["waf_req"].push(b)}return a.abrupt("break",30);case 21:for(m in p=e.X_list(n,i,"1h"),p){for(v in g=0,w=0,y=p[m],y)_=y[v],g+=e.waf_log[_]||0,w+=e.waf_deny[_]||0;b=g+w,f["xData"].push(m),f["waf_log"].push(g),f["waf_deny"].push(w),f["waf_req"].push(b)}return a.abrupt("break",30);case 24:for(m in p=e.X_list(n,i,"10m"),p)_=p[m],g=e.waf_log[_]||0,w=e.waf_deny[_]||0,b=g+w,f["xData"].push(_),f["waf_log"].push(g),f["waf_deny"].push(w),f["waf_req"].push(b);return a.abrupt("break",30);case 27:for(m in p=e.X_list(n,i,"10m"),p)_=p[m],g=e.waf_log[_],w=e.waf_deny[_],b=g+w,f["xData"].push(_),f["waf_log"].push(g),f["waf_deny"].push(w),f["waf_req"].push(b);return a.abrupt("break",30);case 30:x=document.getElementById("wafTrend"),S=s.a.init(x),e.option6.xAxis.data=f["xData"],e.option6.series[0].data=f["waf_log"],e.option6.series[1].data=f["waf_deny"],e.option6.series[2].data=f["waf_req"],S.setOption(e.option6);case 37:case"end":return a.stop()}}),a)})))()},initData:function(t,e){if(7==t)this.waf_start_day=new Date((new Date).getTime()-6048e5),this.waf_end_day=new Date,this.draw3("init");else if(30==t)this.waf_start_day=new Date((new Date).getTime()-2592e6),this.waf_end_day=new Date,this.draw3("init");else{var a,n,i=/^(\d{4})-(\d{2})-(\d{2})$/,r=this.sh.date1,o=this.sh.date2,s=(i.exec(r),!1);i.test(r)&&RegExp.$2<=12&&RegExp.$3<=31&&(a=new Date(r+" 00:00:00"),s=!0),i.test(r)&&RegExp.$2<=12&&RegExp.$3<=31&&(n=new Date(o+" 00:00:00"),s=!0),s||this.$notify({type:"warning",title:"提示",message:"请输入正确的时间格式",duration:1500,position:"bottom-right"}),n>a?(this.waf_start_day=a,this.waf_end_day=n,this.draw3("init")):this.$notify({type:"warning",title:"提示",message:"结束时间小于开始时间",duration:1500,position:"bottom-right"})}},customIn:function(t){var e=t.host_mod,a=0,n=new Array,i=new Array,r=new Array;for(var o in e){a+=parseInt(e[o]);var s=o.split(" ")[0],l=e[o];if(-1===i.indexOf(s))i.push(s),r.push(l);else{var c=i.indexOf(s);r[c]=r[c]+l}}for(var o in i)n.push({site:i[o],total:r[o]});this.customRule=n,this.f4.content=a},customCC:function(t){var e=this,a=new Array,n=t.map((function(t){t["host"];var e=t["site"],a=(t["total"],"http://ip-api.com/json/"+String(e)+"?lang=zh-CN");return c.a.get(a)}));Promise.all(n).then((function(n){var i=new Array;for(var r in n){var o=n[r],s="火星",l="";200===o["status"]&&(s=o["data"]["country"]+(o["data"]["city"]||""),l=o["data"]["query"]);var c={address:s,ip:l};i.push(c)}for(var r in t){var u=t[r]["host"],d=t[r]["site"],h=t[r]["total"];c={host:u,site:d,total:h,address:i[r]["address"]};a.push(c)}e.customRule2=a}))}},components:{wafCard:f,CountTo:d.a}},w=g,y=(a("c018"),a("2877")),v=Object(y["a"])(w,n,i,!1,null,"7a5e75a8",null);e["default"]=v.exports},"9a0c":function(t,e,a){var n=a("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},b680:function(t,e,a){"use strict";var n=a("23e7"),i=a("a691"),r=a("408a"),o=a("1148"),s=a("d039"),l=1..toFixed,c=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},d=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},h=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));n({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,a,n,s,l=r(this),h=i(t),f=[0,0,0,0,0,0],p="",m="0",g=function(t,e){var a=-1,n=e;while(++a<6)n+=t*f[a],f[a]=n%1e7,n=c(n/1e7)},w=function(t){var e=6,a=0;while(--e>=0)a+=f[e],f[e]=c(a/t),a=a%t*1e7},y=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var a=String(f[t]);e=""===e?a:e+o.call("0",7-a.length)+a}return e};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(p="-",l=-l),l>1e-21)if(e=d(l*u(2,69,1))-69,a=e<0?l*u(2,-e,1):l/u(2,e,1),a*=4503599627370496,e=52-e,e>0){g(0,a),n=h;while(n>=7)g(1e7,0),n-=7;g(u(10,n,1),0),n=e-1;while(n>=23)w(1<<23),n-=23;w(1<<n),g(1,1),w(2),m=y()}else g(0,a),g(1<<-e,0),m=y()+o.call("0",h);return h>0?(s=m.length,m=p+(s<=h?"0."+o.call("0",h-s)+m:m.slice(0,s-h)+"."+m.slice(s-h))):m=p+m,m}})},c018:function(t,e,a){"use strict";a("8698")},ec1b:function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var n=a(4)(a(1),a(5),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],n=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,i="webkit moz ms o".split(" "),r=void 0,o=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=o=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var s=void 0,l=0;l<i.length&&(!r||!o);l++)s=i[l],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=o=o||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&o||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),i=window.setTimeout((function(){t(e+a)}),a);return n=e+a,i},e.cancelAnimationFrame=o=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=o},function(t,e){t.exports=function(t,e,a,n){var i,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),a&&(s._scopeId=a),n){var l=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];l[t]=function(){return e}})),s.computed=l}return{esModule:i,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))}}]);