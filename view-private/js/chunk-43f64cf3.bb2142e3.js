(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43f64cf3"],{1276:function(t,e,n){"use strict";var a=n("d784"),s=n("44e7"),i=n("825a"),o=n("1d80"),r=n("4840"),l=n("8aa5"),c=n("50c4"),d=n("14c3"),u=n("9263"),p=n("d039"),h=[].push,f=Math.min,m=4294967295,g=!p((function(){return!RegExp(m,"y")}));a("split",2,(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=String(o(this)),i=void 0===n?m:n>>>0;if(0===i)return[];if(void 0===t)return[a];if(!s(t))return e.call(a,t,i);var r,l,c,d=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,g=new RegExp(t.source,p+"g");while(r=u.call(g,a)){if(l=g.lastIndex,l>f&&(d.push(a.slice(f,r.index)),r.length>1&&r.index<a.length&&h.apply(d,r.slice(1)),c=r[0].length,f=l,d.length>=i))break;g.lastIndex===r.index&&g.lastIndex++}return f===a.length?!c&&g.test("")||d.push(""):d.push(a.slice(f)),d.length>i?d.slice(0,i):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var s=o(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,s,n):a.call(String(s),e,n)},function(t,s){var o=n(a,t,this,s,a!==e);if(o.done)return o.value;var u=i(t),p=String(this),h=r(u,RegExp),b=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),_=new h(g?u:"^(?:"+u.source+")",v),y=void 0===s?m:s>>>0;if(0===y)return[];if(0===p.length)return null===d(_,p)?[p]:[];var w=0,k=0,x=[];while(k<p.length){_.lastIndex=g?k:0;var S,$=d(_,g?p:p.slice(k));if(null===$||(S=f(c(_.lastIndex+(g?0:k)),p.length))===w)k=l(p,k,b);else{if(x.push(p.slice(w,k)),x.length===y)return x;for(var L=1;L<=$.length-1;L++)if(x.push($[L]),x.length===y)return x;k=w=S}}return x.push(p.slice(w)),x}]}),!g)},"34a1":function(t,e,n){"use strict";n("d473")},"3ca3":function(t,e,n){"use strict";var a=n("6547").charAt,s=n("69f3"),i=n("7dd0"),o="String Iterator",r=s.set,l=s.getterFor(o);i(String,"String",(function(t){r(this,{type:o,string:String(t),index:0})}),(function(){var t,e=l(this),n=e.string,s=e.index;return s>=n.length?{value:void 0,done:!0}:(t=a(n,s),e.index+=t.length,{value:t,done:!1})}))},"53ca":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}},"57f7":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{attrs:{shadow:"never"}},[n("el-row",{staticStyle:{"margin-bottom":"10px","margin-left":"10px"},attrs:{gutter:10}},[n("div",{staticStyle:{width:"300px",float:"left"}},[t._v(" 域名名称："+t._s(t.host)+" ")]),n("div",{staticStyle:{float:"right"}},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleAdd}},[t._v("添加")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleSave}},[t._v("保存")])],1)]),n("el-row",{staticStyle:{margin:"20px"}},[n("el-col",{attrs:{span:21}},[n("el-col",{attrs:{span:10}},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v("网站模式:")]),n("el-radio-group",{staticStyle:{"margin-right":"15px"},on:{change:function(e){return t.setbaseState("state")}},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("el-radio",{attrs:{label:"on"}},[t._v("拦截")]),n("el-radio",{attrs:{label:"off"}},[t._v("放行")]),n("el-radio",{attrs:{label:"log"}},[t._v("日志")])],1),n("el-divider",{staticStyle:{"margin-left":"20px"},attrs:{direction:"vertical"}})],1),n("el-col",{attrs:{span:7}},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v("args_HPP:")]),n("el-radio-group",{staticStyle:{"margin-right":"15px"},on:{change:function(e){return t.setbaseState("args_HPP")}},model:{value:t.args_HPP,callback:function(e){t.args_HPP=e},expression:"args_HPP"}},[n("el-radio",{attrs:{label:"on"}},[t._v("on")]),n("el-radio",{attrs:{label:"off"}},[t._v("off")])],1),n("el-divider",{attrs:{direction:"vertical"}})],1),n("el-col",{attrs:{span:7}},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v("posts_HPP:")]),n("el-radio-group",{staticStyle:{"margin-right":"15px"},on:{change:function(e){return t.setbaseState("posts_HPP")}},model:{value:t.posts_HPP,callback:function(e){t.posts_HPP=e},expression:"posts_HPP"}},[n("el-radio",{attrs:{label:"on"}},[t._v("on")]),n("el-radio",{attrs:{label:"off"}},[t._v("off")])],1)],1)],1),n("el-col",{attrs:{span:3}},[n("div",{staticStyle:{float:"right"}},[n("span",{staticStyle:{color:"blue"}},[t._v("版本号：")]),t._v(t._s(t.version)+" ")])])],1),n("el-tabs",{attrs:{type:"border-card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"获取真实IP配置",name:"realIpFrom_Mod"}},[n("RealIp",{ref:"nodeReal",attrs:{witchName:"获取真实IP配置",host:t.host},on:{handleSet:t.handleSet}})],1),n("el-tab-pane",{attrs:{label:"IP规则配置",name:"ip_dict"}},[n("Ip",{ref:"nodeIp",attrs:{host:t.host}})],1),n("el-tab-pane",{attrs:{label:"高级规则",name:"app_Mod"}},[n("Adv",{ref:"node2",attrs:{switchName:"高级规则配置",host:t.host,name:"app_Mod"},on:{handleSet:t.handleSet,handleDel:t.handleDel}})],1),n("el-tab-pane",{attrs:{label:"频率规则",name:"network_Mod"}},[n("Adv",{ref:"node3",attrs:{switchName:"频率规则配置",host:t.host,name:"network_Mod"},on:{handleSet:t.handleSet,handleDel:t.handleDel}})],1),n("el-tab-pane",{attrs:{label:"CDN-添加header",name:"add_headers_Mod"}},[n("Adv",{ref:"node4",attrs:{switchName:"添加header头配置",host:t.host,name:"add_headers_Mod"},on:{handleSet:t.handleSet,handleDel:t.handleDel}})],1),n("el-tab-pane",{attrs:{label:"CDN-限速配置",name:"limit_rate_Mod"}},[n("Adv",{ref:"node5",attrs:{switchName:"限速模块配置",host:t.host,name:"limit_rate_Mod"},on:{handleSet:t.handleSet,handleDel:t.handleDel}})],1),n("el-tab-pane",{attrs:{label:"CDN-缓存规则",name:"proxy_cache_Mod"}},[n("Adv",{ref:"node6",attrs:{switchName:"内容缓存配置",host:t.host,name:"proxy_cache_Mod"},on:{handleSet:t.handleSet,handleDel:t.handleDel}})],1),n("el-tab-pane",{attrs:{label:"刷新预热",name:"refreshPreHeat"}},[n("Heat",{attrs:{host:t.host}})],1)],1)],1),n("el-dialog",{attrs:{title:t.title,visible:t.open,width:"60%"},on:{"update:visible":function(e){t.open=e}}},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:12}},[n("vue-json-editor",{staticClass:"editorR",attrs:{mode:"code",lang:"zh"},model:{value:t.form.contents,callback:function(e){t.$set(t.form,"contents",e)},expression:"form.contents"}})],1),n("el-col",{attrs:{span:12}},[n("codemirror",{staticClass:"editorR",attrs:{options:t.options},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),n("br"),n("el-link",{attrs:{href:"https://www.kancloud.cn/openstar/install/1136671",target:"_blank"}},[t._v("详情请点击此处，参考文档")])],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")]),n("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1)],1)},s=[],i=(n("a434"),n("96cf"),n("1da1")),o=n("53ca"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticStyle:{margin:"20px"}},[n("el-col",{attrs:{span:12}},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v("获取真实IP配置:")]),n("el-radio",{attrs:{disabled:"",label:"on"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[t._v("on")]),n("el-radio",{attrs:{disabled:"",label:"off"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[t._v("off")])],1),n("el-col",{attrs:{span:12}},[n("div",{staticStyle:{float:"right"}},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v("当前数量："+t._s(t.count))]),n("span",{staticStyle:{color:"blue"}},[t._v("版本号：")]),t._v(t._s(t.version)+" ")])])],1),n("el-table",{attrs:{data:t.userList,border:""}},[n("el-table-column",{attrs:{label:"域名",align:"left",prop:"id",width:"320","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"JSON数据",align:"left",prop:"contents","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"120","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticStyle:{color:"green"},attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return t.handleSet(e.row)}}},[t._v("编辑")]),n("el-popover",{attrs:{placement:"top",width:"160"},model:{value:e.row.visible,callback:function(n){t.$set(e.row,"visible",n)},expression:"scope.row.visible"}},[n("p",[t._v("确定要删除吗?")]),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.row.visible=!1}}},[t._v("取消")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return t.handleDel(e.row)}}},[t._v("确定")])],1),n("el-button",{staticStyle:{color:"red","margin-left":"10px"},attrs:{slot:"reference",size:"mini",type:"text",icon:"el-icon-delete"},slot:"reference"},[t._v("删除")])],1)]}}])})],1)],1)},l=[],c=n("a417"),d={props:["host"],data:function(){return{state:"",count:0,version:"",userList:[],tempList:[]}},mounted:function(){this.getList()},methods:{getList:function(){var t=this,e={action:"get",mod:"realIpFrom_Mod"};Object(c["b"])(e).then((function(e){if(e.msg)if(t.state=e.msg.state,t.version=e.msg.G_version,e.msg[t.host]){var n={id:t.host,contents:JSON.stringify(e.msg[t.host])};t.userList=[n],t.tempList=[n],t.count=t.userList.length}else t.userList=[],t.tempList=[],t.count=0;else t.userList=[],t.tempList=[],t.count=0}))},handleSet:function(t){this.$emit("handleSet",t)},handleDel:function(t){var e=this,n={action:"del",mod:"realIpFrom_Mod",id:this.host};Object(c["b"])(n).then((function(t){"ok"===t.code?(e.$notify({title:"成功",message:t.msg,type:"success"}),e.getList()):e.$notify({title:"警告",message:t.msg,type:"warning"})}))}}},u=d,p=n("2877"),h=Object(p["a"])(u,r,l,!1,null,null,null),f=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticStyle:{margin:"20px"}},[n("el-col",{attrs:{span:12}},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v("IP规则配置:")]),n("el-radio",{attrs:{disabled:"",label:"on"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[t._v("on")]),n("el-radio",{attrs:{disabled:"",label:"off"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[t._v("off")])],1),n("el-col",{attrs:{span:12}},[n("div",{staticStyle:{float:"right"}},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v("当前数量："+t._s(t.count))]),n("span",{staticStyle:{color:"blue"}},[t._v("版本号：")]),t._v(t._s(t.version)+" ")])])],1),n("el-table",{attrs:{data:t.userList,border:""}},[n("el-table-column",{attrs:{label:"域名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.host)+" ")]}}])}),n("el-table-column",{attrs:{label:"ip"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.ip)+" ")]}}])}),n("el-table-column",{attrs:{label:"动作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.option)+" ")]}}])}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"360","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{placement:"top",width:"160"},model:{value:e.row.visible,callback:function(n){t.$set(e.row,"visible",n)},expression:"scope.row.visible"}},[n("p",[t._v("确定要删除吗?")]),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.row.visible=!1}}},[t._v("取消")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return t.handleDel(e.row)}}},[t._v("确定")])],1),n("el-button",{staticStyle:{color:"red","margin-left":"10px"},attrs:{slot:"reference",size:"mini",type:"text",icon:"el-icon-delete"},slot:"reference"},[t._v("删除")])],1)]}}])})],1)],1)},g=[],b=(n("ac1f"),n("1276"),n("b1ef")),v={props:["host"],data:function(){return{state:"",count:0,version:"",userList:[],tempList:[]}},mounted:function(){this.getList()},methods:{getList:function(){var t=this,e={action:"get",host:this.host};Object(b["a"])(e).then((function(e){var n=e.msg,a=[];for(var s in n)if("state"!==s&&"count"!==s){var i={},o=s.split("_");1==o.length?(i.host="*",i.ip=o[0]):(i.host=o[0],i.ip=o[1]),i.option=n[s],a.push(i)}t.userList=a,t.tempList=a,t.count=a.length,t.state=n.state.state,t.version=n.state.G_version}))},handleDel:function(t){var e=this,n={action:"del",ip:t.host+"_"+t.ip};Object(b["a"])(n).then((function(t){"ok"===t.code?(e.$notify({title:"成功",message:t.msg,type:"success"}),e.getList()):e.$notify({title:"警告",message:t.msg,type:"warning"})}))}}},_=v,y=Object(p["a"])(_,m,g,!1,null,null,null),w=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticStyle:{margin:"20px"}},[n("el-col",{attrs:{span:12}},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v(t._s(t.switchName))]),n("el-radio-group",{staticStyle:{"margin-right":"15px"},on:{change:function(e){return t.setbaseState()}},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("el-radio",{attrs:{label:"on"}},[t._v("on")]),n("el-radio",{attrs:{label:"off"}},[t._v("off")])],1)],1),n("el-col",{attrs:{span:12}},[n("div",{staticStyle:{float:"right"}},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v("当前数量："+t._s(t.count))])])])],1),n("el-table",{attrs:{data:t.userList,border:""}},[n("el-table-column",{attrs:{label:"ID",align:"center",prop:"id",width:"80","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"内容",align:"left",prop:"contents","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"360","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticStyle:{color:"green"},attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return t.handleSet(e.row)}}},[t._v("编辑")]),n("el-button",{staticStyle:{color:"orange"},attrs:{size:"mini",type:"text",icon:"el-icon-top"},on:{click:function(n){return t.up(e.$index)}}},[t._v("上移")]),n("el-button",{staticStyle:{color:"orange"},attrs:{size:"mini",type:"text",icon:"el-icon-bottom"},on:{click:function(n){return t.down(e.$index)}}},[t._v("下移")]),n("el-button",{staticStyle:{color:"orange"},attrs:{size:"mini",type:"text",icon:"el-icon-arrow-up"},on:{click:function(n){return t.upIndex(e.$index)}}},[t._v("置顶")]),n("el-button",{staticStyle:{color:"orange"},attrs:{size:"mini",type:"text",icon:"el-icon-arrow-down"},on:{click:function(n){return t.downIndex(e.$index)}}},[t._v("置底")]),n("el-popover",{attrs:{placement:"top",width:"160"},model:{value:e.row.visible,callback:function(n){t.$set(e.row,"visible",n)},expression:"scope.row.visible"}},[n("p",[t._v("确定要删除吗?")]),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.row.visible=!1}}},[t._v("取消")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return t.handleDel(e.row)}}},[t._v("确定")])],1),n("el-button",{staticStyle:{color:"red","margin-left":"10px"},attrs:{slot:"reference",size:"mini",type:"text",icon:"el-icon-delete"},slot:"reference"},[t._v("删除")])],1)]}}])})],1),n("el-row",[n("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.handleApply}},[t._v("应用")])],1)])],1)},x=[],S=(n("d81d"),n("b0c0"),n("5919")),$={props:["host","name","switchName"],data:function(){return{state:"on",count:0,userList:[],tempList:[]}},mounted:function(){this.getList()},methods:{up:function(t){0!==t&&this.swapItems(this.userList,t,t-1)},upIndex:function(t){0!==t&&this.swapItems(this.userList,t,0,"up")},down:function(t){t!==this.userList.length-1&&this.swapItems(this.userList,t,t+1)},downIndex:function(t){t!==this.userList.length-1&&this.swapItems(this.userList,t,0,"down")},swapItems:function(t,e,n,a){return"up"==a?(t.unshift(t[e]),t.splice(e+1,1),t):"down"==a?(t.push(t[e]),t.splice(e,1),t):(t[e]=t.splice(n,1,t[e])[0],t)},getList:function(){var t=this,e={action:"get",mod:this.name,host:this.host};Object(S["c"])(e).then((function(e){var n=e.msg.mod,a=[];for(var s in n)if("count"!=s&&"G_version"!=s&&"state"!=s){var i={};i.id=parseInt(s)+1,i.contents=JSON.stringify(n[s]),a.push(i)}t.userList=a,t.tempList=a,t.count=a.length,t.state=e.msg[t.name]}))},setbaseState:function(){var t=this,e={action:"set",host:this.host,id:this.name,value:this.state};Object(S["c"])(e).then((function(e){"ok"===e.code?t.$notify({title:"成功",message:e.msg,type:"success"}):t.$notify({title:"警告",message:e.msg,type:"warning"})}))},handleSet:function(t){this.$emit("handleSet",t)},handleDel:function(t){this.$emit("handleDel",t)},handleApply:function(){var t=this,e=this.userList.map((function(t){return JSON.parse(t.contents)})),n={action:"set",mod:this.name,host:this.host,value:JSON.stringify(e)};Object(S["c"])(n).then((function(e){"ok"==e.code?t.$notify({title:"成功",message:e.msg,type:"success"}):t.$notify({title:"警告",message:e.msg,type:"warning"})}))}}},L=$,M=Object(p["a"])(L,k,x,!1,null,null,null),I=M.exports,O=n("8f94"),N=(n("a7be"),n("acdf"),n("7ba3"),n("a8d9"),n("db91"),n("b2b9"),n("f9d4"),n("8e77")),P=n("45a3"),j=n("85c8"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{attrs:{gutter:10}},[n("el-col",{staticStyle:{"margin-bottom":"20px"},attrs:{span:24}},[n("el-radio-group",{model:{value:t.dir,callback:function(e){t.dir=e},expression:"dir"}},[n("el-radio",{attrs:{label:"url"}},[t._v("刷新url")]),n("el-radio",{attrs:{label:"dir"}},[t._v("刷新目录(前缀)")]),n("el-radio",{attrs:{label:"resource",disabled:""}},[t._v("预热资源[预留]")])],1)],1)],1),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:12}},[n("el-input",{attrs:{type:"textarea",rows:6,placeholder:"请输入内容"},model:{value:t.contents,callback:function(e){t.contents=e},expression:"contents"}})],1),n("el-col",{staticStyle:{color:"rgba(80, 80, 80, 1)","font-size":"12px"},attrs:{span:12}},[n("span",[t._v(" *eg:"),n("br")]),n("div",{domProps:{innerHTML:t._s(t.code)}})])],1),n("el-row",[n("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.submit}},[t._v("确定")])],1)])],1)},C=[],H={props:["host"],data:function(){return{dir:"url",contents:"",code:'["/favicon.ico","/1.jpg?version=1.0.1"]---url</br>\n      ["/js/","/img"]---目录前缀'}},created:function(){},methods:{submit:function(){var t=this,e={purge_list:this.contents,host:this.host,dir:"url"===this.dir?"false":"true"};Object(j["a"])(e).then((function(e){"ok"==e.code?t.$notify({title:"成功",message:e.msg,type:"success"}):t.$notify({title:"警告",message:e.msg,type:"warning"})}))}}},z=H,R=Object(p["a"])(z,D,C,!1,null,"2b51c64c",null),J=R.exports,A=n("e762").Base64,F={components:{MarkdownPreview:N["a"],vueJsonEditor:P["a"],codemirror:O["codemirror"],RealIp:f,Ip:w,Adv:I,Heat:J},data:function(){return{openCahe:!1,cacheContent:{},code2:'/* * eg: */\n{\n    "www.test.com":[\n    "/favicon.ico",\n    "/1.jpg?version=1.0.1"\n     ],\n    "www.abc.com":[\n    "/favicon.ico",\n    "/1.jpg"\n    ]\n}',host:"",state:"",args_HPP:"",posts_HPP:"",version:"",options:{tabSize:4,mode:{name:"javascript",json:!0},theme:"darcula",lineNumbers:!0,line:!0,lineWrapping:!0,styleSelectedText:!0,styleActiveLine:!0,hintOptions:{completeSingle:!0}},code:"",activeName:"realIpFrom_Mod",open:!1,title:"",form:{id:0,contents:{}}}},created:function(){this.host=this.$route.query.domain,this.getList()},methods:{isJSON:function(t){try{var e=JSON.parse(t);return!("object"!=Object(o["a"])(e)||!e)}catch(n){return!1}},up:function(t){0!==t&&this.swapItems(this.userList,t,t-1)},upIndex:function(t){0!==t&&this.swapItems(this.userList,t,0,"up")},down:function(t){t!==this.userList.length-1&&this.swapItems(this.userList,t,t+1)},downIndex:function(t){t!==this.userList.length-1&&this.swapItems(this.userList,t,0,"down")},swapItems:function(t,e,n,a){return"up"==a?(t.unshift(t[e]),t.splice(e+1,1),t):"down"==a?(t.push(t[e]),t.splice(e,1),t):(t[e]=t.splice(n,1,t[e])[0],t)},reset:function(){this.form={id:0,contents:{}}},cancel:function(){this.open=!1,this.openCahe=!1,this.reset()},handleDel:function(t){var e=this;console.log("handleDel del ",t);var n={action:"del",mod:this.activeName,id:t.id,host:this.host};Object(S["c"])(n).then((function(t){if("ok"===t.code)switch(e.$notify({title:"成功",message:t.msg,type:"success"}),e.activeName){case"realIpFrom_Mod":e.$refs.nodeReal.getList();break;case"ip_dict":console.log("activeName is ip_dict del"),e.$refs.nodeIp.getList();break;case"app_Mod":e.$refs.node2.getList();break;case"network_Mod":e.$refs.node3.getList();break;case"add_headers_Mod":e.$refs.node4.getList();break;case"limit_rate_Mod":e.$refs.node5.getList();break;case"proxy_cache_Mod":e.$refs.node6.getList();break;default:break}else e.$notify({title:"警告",message:t.msg,type:"warning"})}))},handleAdd:function(){switch(this.reset(),this.title="添加",this.activeName){case"realIpFrom_Mod":this.code='\n\n/* \n* 该规则是配置有使用CDN或者其他中转反向代理的域名，默认情况下，\n* CDN或者其他代理会把用户真实IP放在x-forword-for 或者x-real-ip中，\n* 故http头名称则设置为：x_forword_for（"-"需要换成"_"）。 \n* 部分CDN放在一个自定义字段中，需要和其确定在那个字段（"-"需要换成"_"）。\n*/\n\n{\n    "ips":["匹配内容","匹配符","是否取反"],\n    "realipfrom": "http头名称"\n}\n\n\n';break;case"ip_dict":this.code='\n\n/*\n* ip 不支持ip段仅支持单ip\n* 单位秒，0表示永久\n* value: deny/log/allow\n*/\n\n{\n    "ip": "111.111.111.111",\n    "value": "log",\n    "time": 120\n}\n\n\n';break;case"app_Mod":this.code='\n\n{\n    "state": "规则开关",\n    "id":"规则ID: host_Mod.app_Mod-1000",\n    "des": "规则描述",\n    "action": "执行动作(deny|allow|debug|refile|rehtml|func)",\n    "执行动作": "动作参数",\n    /* "refile": ["2.txt","text/html"], */\n    /* "rehtml": "<html>hi~!</html>", */\n    /* "func": ["函数名称",{函数参数}], */\n    "uri":["匹配内容","匹配符","是否取反"],\n    "app_ext": ["规则内容(table)"...]\n}\n\n\n';break;case"network_Mod":this.code='\n\n{\n    "state": "规则开关",\n    "des": "规则描述",\n    "uri":["匹配内容","匹配符","是否取反"],\n    "network": {"maxReqs":1000,"pTime":10,"blackTime":120}\n}\n\n\n';break;case"add_headers_Mod":this.code='\n\n{\n    "state": "规则开关",\n    "des": "规则描述",\n    "uri":["匹配内容","匹配符","是否取反"],\n    "add_headers":[["header头名称","内容"]],\n    "tag":["all_Mod"]\n    /* tag 也可以没有 */\n}\n\n';break;case"limit_rate_Mod":this.code='\n\n{\n    "state": "规则开关",\n    "des": "规则描述",\n    "uri":["匹配内容","匹配符","是否取反"],\n    "limit_rate":"限速大小",\n    "tag":["all_Mod"]\n    /* tag 也可以没有 */\n}\n\n';break;case"proxy_cache_Mod":this.code='\n\n{\n    "state": "规则开关",\n    "des": "规则描述",\n    "uri":["匹配内容","匹配符","是否取反"],\n    "tag":["all_Mod"]\n    /* tag 也可以没有 */\n}\n\n\n';break;default:break}this.open=!0},handleSet:function(t){switch(this.reset(),this.title="编辑",this.activeName){case"realIpFrom_Mod":this.code='\n\n\n/* \n* 该规则是配置有使用CDN或者其他中转反向代理的域名，默认情况下，\n* CDN或者其他代理会把用户真实IP放在x-forword-for 或者x-real-ip中，\n* 故http头名称则设置为：x_forword_for（"-"需要换成"_"）。 \n* 部分CDN放在一个自定义字段中，需要和其确定在那个字段（"-"需要换成"_"）。\n*/\n\n{\n    "ips":["匹配内容","匹配符","是否取反"],\n    "realipfrom": "http头名称",\n}\n\n\n';break;case"ip_dict":this.code='\n\n/*\n* ip 不支持ip段仅支持单ip\n* 单位秒，0表示永久\n* value: deny/log/allow\n*/\n\n{\n    "ip": "111.111.111.111",\n    "value": "log",\n    "time": 120\n}\n\n\n';break;case"app_Mod":this.code='\n\n{\n    "state": "规则开关",\n    "id":"规则ID:host_Mod.app_Mod-1000",\n    "des": "规则描述",\n    "action": "执行动作(deny|allow|debug|refile|rehtml|func)",\n    "执行动作": "动作参数",\n    /* "refile": ["2.txt","text/html"], */\n    /* "rehtml": "<html>hi~!</html>", */\n    /* "func": ["函数名称",{函数参数}], */\n    "uri":["匹配内容","匹配符","是否取反"],\n    "app_ext": ["规则内容(table)"...]\n}\n\n\n';break;case"network_Mod":this.code='\n\n{\n    "state": "规则开关",\n    "des": "规则描述",\n    "uri":["匹配内容","匹配符","是否取反"],\n    "network": {"maxReqs":1000,"pTime":10,"blackTime":120}\n}\n\n';break;case"add_headers_Mod":this.code='\n\n{\n    "state": "规则开关",\n    "des": "规则描述",\n    "uri":["匹配内容","匹配符","是否取反"],\n    "add_headers":[["header头名称","内容"]],\n    "tag":["all_Mod"]\n    /* tag 也可以没有 */\n}\n\n\n';break;case"limit_rate_Mod":this.code='\n{\n    "state": "规则开关",\n    "des": "规则描述",\n    "uri":["匹配内容","匹配符","是否取反"],\n    "limit_rate":"限速大小",\n    "tag":["all_Mod"]\n    /* tag 也可以没有 */\n}\n\n\n';break;case"proxy_cache_Mod":this.code='\n\n{\n    "state": "规则开关",\n    "des": "规则描述",\n    "uri":["匹配内容","匹配符","是否取反"],\n    "hostname":["匹配内容","匹配符","是否取反"],\n    "tag":["all_Mod"]\n    /* tag 也可以没有 */\n}\n\n\n';break;default:break}this.form.id=t.id,this.form.contents=JSON.parse(t.contents),this.open=!0},getList:function(){var t=this,e={host:this.host,action:"get"};Object(S["c"])(e).then((function(e){var n=e.msg;t.state=n.state,t.args_HPP=n.args_HPP,t.posts_HPP=n.posts_HPP,t.version=n.g_version}))},setbaseState:function(t){var e=this,n=this.state;switch(t){case"args_HPP":n=this.args_HPP;break;case"posts_HPP":n=this.posts_HPP;break;default:break}var a={action:"set",host:this.host,id:t,value:n};Object(S["c"])(a).then((function(t){"ok"===t.code?e.$notify({title:"成功",message:t.msg,type:"success"}):e.$notify({title:"警告",message:t.msg,type:"warning"})}))},submitForm:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("添加"!==e.title){t.next=47;break}t.t0=e.activeName,t.next="realIpFrom_Mod"===t.t0?4:"ip_dict"===t.t0?10:16;break;case 4:return a={action:"add",mod:e.activeName,id:e.host,value:JSON.stringify(e.form.contents)},t.next=7,Object(c["b"])(a);case 7:return n=t.sent,"ok"===n.code?(e.$notify({title:"成功",message:n.msg,type:"success"}),e.open=!1,e.$refs.nodeReal.getList()):e.$notify({title:"警告",message:n.msg,type:"warning"}),t.abrupt("break",45);case 10:return a={action:"set",ip:e.host+"_"+e.form.contents.ip,value:e.form.contents.value,time:e.form.contents.time},t.next=13,Object(b["a"])(a);case 13:return n=t.sent,"ok"===n.code?(e.$notify({title:"成功",message:n.msg,type:"success"}),e.open=!1,e.$refs.nodeIp.getList()):e.$notify({title:"警告",message:n.msg,type:"warning"}),t.abrupt("break",45);case 16:return a={action:"add",mod:e.activeName,host:e.host,value:JSON.stringify(e.form.contents)},t.next=19,Object(S["c"])(a);case 19:if(n=t.sent,"ok"!==n.code){t.next=43;break}e.$notify({title:"成功",message:n.msg,type:"success"}),e.open=!1,t.t1=e.activeName,t.next="realIpFrom_Mod"===t.t1?26:"ip_dict"===t.t1?28:"app_Mod"===t.t1?30:"network_Mod"===t.t1?32:"add_headers_Mod"===t.t1?34:"limit_rate_Mod"===t.t1?36:"proxy_cache_Mod"===t.t1?38:40;break;case 26:return e.$refs.nodeReal.getList(),t.abrupt("break",41);case 28:return e.$refs.nodeIp.getList(),t.abrupt("break",41);case 30:return e.$refs.node2.getList(),t.abrupt("break",41);case 32:return e.$refs.node3.getList(),t.abrupt("break",41);case 34:return e.$refs.node4.getList(),t.abrupt("break",41);case 36:return e.$refs.node5.getList(),t.abrupt("break",41);case 38:return e.$refs.node6.getList(),t.abrupt("break",41);case 40:return t.abrupt("break",41);case 41:t.next=44;break;case 43:e.$notify({title:"警告",message:n.msg,type:"warning"});case 44:return t.abrupt("break",45);case 45:t.next=86;break;case 47:t.t2=e.activeName,t.next="realIpFrom_Mod"===t.t2?50:"ip_dict"===t.t2?56:57;break;case 50:return a={action:"set",mod:e.activeName,id:e.host,value:JSON.stringify(e.form.contents)},t.next=53,Object(c["b"])(a);case 53:return n=t.sent,"ok"===n.code?(e.$notify({title:"成功",message:n.msg,type:"success"}),e.open=!1,e.$refs.nodeReal.getList()):e.$notify({title:"警告",message:n.msg,type:"warning"}),t.abrupt("break",86);case 56:return t.abrupt("break",86);case 57:return a={action:"set",mod:e.activeName,host:e.host,id:parseInt(e.form.id),value:JSON.stringify(e.form.contents)},t.next=60,Object(S["c"])(a);case 60:if(n=t.sent,"ok"!==n.code){t.next=84;break}e.$notify({title:"成功",message:n.msg,type:"success"}),e.open=!1,t.t3=e.activeName,t.next="realIpFrom_Mod"===t.t3?67:"ip_dict"===t.t3?69:"app_Mod"===t.t3?71:"network_Mod"===t.t3?73:"add_headers_Mod"===t.t3?75:"limit_rate_Mod"===t.t3?77:"proxy_cache_Mod"===t.t3?79:81;break;case 67:return e.$refs.nodeReal.getList(),t.abrupt("break",82);case 69:return e.$refs.nodeIp.getList(),t.abrupt("break",82);case 71:return e.$refs.node2.getList(),t.abrupt("break",82);case 73:return e.$refs.node3.getList(),t.abrupt("break",82);case 75:return e.$refs.node4.getList(),t.abrupt("break",82);case 77:return e.$refs.node5.getList(),t.abrupt("break",82);case 79:return e.$refs.node6.getList(),t.abrupt("break",82);case 81:return t.abrupt("break",82);case 82:t.next=85;break;case 84:e.$notify({title:"警告",message:n.msg,type:"warning"});case 85:return t.abrupt("break",86);case 86:case"end":return t.stop()}}),t)})))()},handleClean:function(){this.cacheContent={},this.openCahe=!0},cleanApi:function(){var t=this;if(!this.isJSON(JSON.stringify(this.cacheContent)))return this.$message.error("配置内容:json格式错误/没有内容"),!1;var e={host:this.host,purge_list:JSON.stringify(this.cacheContent)};Object(j["a"])(e).then((function(e){"ok"===e.code?(t.$notify({title:"成功",message:e.msg,type:"success"}),t.openCahe=!1):t.$notify({title:"警告",message:e.msg,type:"warning"})}))},handleSave:function(){var t=this,e={action:"save",mod:"all_Mod"};Object(c["h"])(e).then((function(e){"ok"==e.code?t.$notify({title:"成功",message:e.msg,type:"success"}):t.$notify({title:"警告",message:e.msg,type:"warning"})}))}},filters:{match:function(t){return A.decode(t)}},watch:{$route:function(t,e){},activeName:{handler:function(t,e){switch(this.activeName){case"realIpFrom_Mod":this.$refs.nodeReal.getList();break;case"ip_dict":this.$refs.nodeIp.getList();break;case"app_Mod":this.$refs.node2.getList();break;case"network_Mod":this.$refs.node3.getList();break;case"add_headers_Mod":this.$refs.node4.getList();break;case"limit_rate_Mod":this.$refs.node5.getList();break;case"proxy_cache_Mod":this.$refs.node6.getList();break;default:break}}}}},E=F,T=(n("34a1"),Object(p["a"])(E,a,s,!1,null,"141c7811",null));e["default"]=T.exports},5919:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"c",(function(){return l})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return d})),n.d(e,"i",(function(){return u})),n.d(e,"a",(function(){return p})),n.d(e,"d",(function(){return h})),n.d(e,"j",(function(){return f})),n.d(e,"b",(function(){return m})),n.d(e,"e",(function(){return g}));var a=n("b775"),s=n("4328"),i=n.n(s),o=n("365c");function r(t){return Object(a["a"])({url:"".concat(o["a"].domain.getDomain),method:"post",data:i.a.stringify(t)})}function l(t){return Object(a["a"])({url:"".concat(o["a"].domain.defenseDomain),method:"post",data:i.a.stringify(t)})}function c(t){return Object(a["a"])({url:"".concat(o["a"].domain.getCertification),method:"post",data:i.a.stringify(t)})}function d(){return Object(a["a"])({url:"".concat(o["a"].domain.getCertification),method:"post"})}function u(t){return Object(a["a"])({url:"".concat(o["a"].domain.setCertification),method:"post",data:i.a.stringify(t)})}function p(t){return Object(a["a"])({url:"".concat(o["a"].domain.addCertification),method:"post",data:i.a.stringify(t)})}function h(t){return Object(a["a"])({url:"".concat(o["a"].domain.delCertification),method:"post",data:i.a.stringify(t)})}function f(t){return Object(a["a"])({url:"".concat(o["a"].domain.setDomain),method:"post",data:i.a.stringify(t)})}function m(t){return Object(a["a"])({url:"".concat(o["a"].domain.addDomain),method:"post",data:i.a.stringify(t)})}function g(t){return Object(a["a"])({url:"".concat(o["a"].domain.delDomain),method:"post",data:i.a.stringify(t)})}},"85c8":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("b775"),s=n("4328"),i=n.n(s),o=n("365c");function r(t){return Object(a["a"])({url:"".concat(o["a"].cdn.cleanCache),method:"post",data:i.a.stringify(t)})}},a434:function(t,e,n){"use strict";var a=n("23e7"),s=n("23cb"),i=n("a691"),o=n("50c4"),r=n("7b0b"),l=n("65f0"),c=n("8418"),d=n("1dde"),u=n("ae40"),p=d("splice"),h=u("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,m=Math.min,g=9007199254740991,b="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!h},{splice:function(t,e){var n,a,d,u,p,h,v=r(this),_=o(v.length),y=s(t,_),w=arguments.length;if(0===w?n=a=0:1===w?(n=0,a=_-y):(n=w-2,a=m(f(i(e),0),_-y)),_+n-a>g)throw TypeError(b);for(d=l(v,a),u=0;u<a;u++)p=y+u,p in v&&c(d,u,v[p]);if(d.length=a,n<a){for(u=y;u<_-a;u++)p=u+a,h=u+n,p in v?v[h]=v[p]:delete v[h];for(u=_;u>_-a+n;u--)delete v[u-1]}else if(n>a)for(u=_-a;u>y;u--)p=u+a-1,h=u+n-1,p in v?v[h]=v[p]:delete v[h];for(u=0;u<n;u++)v[u+y]=arguments[u+2];return v.length=_-a+n,d}})},b1ef:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("b775"),s=n("4328"),i=n.n(s),o=n("365c");function r(t){return Object(a["a"])({url:"".concat(o["a"].global.ipSet),method:"post",data:i.a.stringify(t)})}},d28b:function(t,e,n){var a=n("746f");a("iterator")},d473:function(t,e,n){},e01a:function(t,e,n){"use strict";var a=n("23e7"),s=n("83ab"),i=n("da84"),o=n("5135"),r=n("861d"),l=n("9bf2").f,c=n("e893"),d=i.Symbol;if(s&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};c(p,d);var h=p.prototype=d.prototype;h.constructor=p;var f=h.toString,m="Symbol(test)"==String(d("test")),g=/^Symbol\((.*)\)[^)]+$/;l(h,"description",{configurable:!0,get:function(){var t=r(this)?this.valueOf():this,e=f.call(t);if(o(u,t))return"";var n=m?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),a({global:!0,forced:!0},{Symbol:p})}}}]);