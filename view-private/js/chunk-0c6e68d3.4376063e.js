(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c6e68d3"],{"0356":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("el-card",{attrs:{shadow:"never"}},[t("el-row",{staticStyle:{"margin-bottom":"10px","margin-left":"10px"},attrs:{gutter:10}},[t("div",{staticStyle:{width:"300px",float:"left"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入搜索内容"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t("div",{staticStyle:{float:"right"}},[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handleAdd}},[e._v("添加")]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handleSave}},[e._v("保存")])],1)]),t("el-row",{staticStyle:{margin:"20px"}},[t("el-col",{attrs:{span:12}},[t("span",{staticStyle:{"margin-right":"20px"}},[e._v("内容缓存配置:")]),t("el-radio-group",{on:{change:e.setbaseState},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[t("el-radio",{attrs:{label:"on"}}),t("el-radio",{attrs:{label:"off"}})],1)],1),t("el-col",{attrs:{span:12}},[t("div",{staticStyle:{float:"right"}},[t("span",{staticStyle:{"margin-right":"20px"}},[e._v("当前数量："+e._s(e.pageTotal))]),t("span",{staticStyle:{color:"blue"}},[e._v("版本号：")]),e._v(e._s(e.version)+" ")])])],1),t("el-table",{attrs:{data:e.userList,border:""}},[t("el-table-column",{attrs:{label:"ID",align:"center",prop:"id",width:"80","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"内容",align:"left",prop:"contents","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"360","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{staticStyle:{color:"orange"},attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(t){return e.handleSet(a.row)}}},[e._v("修改")]),t("el-button",{staticStyle:{color:"green"},attrs:{size:"mini",type:"text",icon:"el-icon-top"},on:{click:function(t){return e.up(a.$index)}}},[e._v("上移")]),t("el-button",{staticStyle:{color:"green"},attrs:{size:"mini",type:"text",icon:"el-icon-bottom"},on:{click:function(t){return e.down(a.$index)}}},[e._v("下移")]),t("el-button",{staticStyle:{color:"green"},attrs:{size:"mini",type:"text",icon:"el-icon-arrow-up"},on:{click:function(t){return e.upIndex(a.$index)}}},[e._v("置顶")]),t("el-button",{staticStyle:{color:"green"},attrs:{size:"mini",type:"text",icon:"el-icon-arrow-down"},on:{click:function(t){return e.downIndex(a.$index)}}},[e._v("置底")]),t("el-popover",{attrs:{placement:"top",width:"160"},model:{value:a.row.visible,callback:function(t){e.$set(a.row,"visible",t)},expression:"scope.row.visible"}},[t("p",[e._v("确定要删除吗?")]),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){a.row.visible=!1}}},[e._v("取消")]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleDel(a.row)}}},[e._v("确定")])],1),t("el-button",{staticStyle:{color:"red","margin-left":"10px"},attrs:{slot:"reference",size:"mini",type:"text",icon:"el-icon-delete"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),t("el-row",[t("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.handleApply}},[e._v("应用")])],1)]),t("el-dialog",{attrs:{title:e.title,visible:e.open,width:"60%"},on:{"update:visible":function(t){e.open=t}}},[t("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"图形化配置",name:"second"}},[t("el-form",{attrs:{"label-width":"100px",model:e.form.contents}},[t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"规则ID："}},[t("el-input",{attrs:{placeholder:"输入ID信息",clearable:""},model:{value:e.form.contents.id,callback:function(t){e.$set(e.form.contents,"id",t)},expression:"form.contents.id"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"描述信息："}},[t("el-input",{attrs:{placeholder:"输入描述信息",clearable:""},model:{value:e.form.contents.des,callback:function(t){e.$set(e.form.contents,"des",t)},expression:"form.contents.des"}})],1)],1)],1),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"是否启用："}},[t("el-switch",{attrs:{"active-value":"on","inactive-value":"off"},model:{value:e.form.contents.state,callback:function(t){e.$set(e.form.contents,"state",t)},expression:"form.contents.state"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"跳过标识："}},[t("el-select",{attrs:{placeholder:"输入跳过标识",clearable:"","allow-create":"",filterable:"","default-first-option":"",multiple:""},model:{value:e.form.contents.tag,callback:function(t){e.$set(e.form.contents,"tag",t)},expression:"form.contents.tag"}})],1)],1)],1),t("el-form-item",{attrs:{label:"匹配规则：","label-width":"''"}},[e.open&&"second"==e.activeName?t("PtComponent",{attrs:{data:e.ptData,ruleData:e.form.contents}}):e._e()],1)],1)],1),t("el-tab-pane",{attrs:{label:"原始JSON配置",name:"first"}},[t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:12}},["first"===e.activeName?t("vue-json-editor",{staticClass:"editorR",attrs:{mode:"code",lang:"zh"},model:{value:e.form.contents,callback:function(t){e.$set(e.form,"contents",t)},expression:"form.contents"}}):e._e()],1),t("el-col",{attrs:{span:12}},["first"===e.activeName?t("codemirror",{staticClass:"editorR",attrs:{options:e.options},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}):e._e(),t("br"),t("el-link",{attrs:{href:"https://www.kancloud.cn/openstar/install/1136671",target:"_blank"}},[e._v("详情请点击此处，参考文档")])],1)],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),t("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),t("el-dialog",{attrs:{title:"清除缓存",visible:e.openCahe,width:"60%"},on:{"update:visible":function(t){e.openCahe=t}}},[t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:12}},[t("vue-json-editor",{staticClass:"editorR",attrs:{mode:"code",lang:"zh"},model:{value:e.cacheContent,callback:function(t){e.cacheContent=t},expression:"cacheContent"}})],1),t("el-col",{attrs:{span:12}},[t("codemirror",{staticClass:"editorR",attrs:{options:e.options},model:{value:e.code2,callback:function(t){e.code2=t},expression:"code2"}}),t("br"),t("el-link",{attrs:{href:"https://www.kancloud.cn/openstar/install/1136671",target:"_blank"}},[e._v("详情请点击此处，参考文档")])],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.cleanApi}},[e._v("确 定")]),t("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)],1)},r=[],o=(a("3c65"),a("14d9"),a("090c")),n=a("8f94"),l=(a("a7be"),a("acdf"),a("7ba3"),a("a8d9"),a("db91"),a("b2b9"),a("f9d4"),a("45a3")),i=a("a417"),c=a("85c8");const u=a("e762").Base64;var d={components:{vueJsonEditor:l["a"],codemirror:n["codemirror"],PtComponent:o["a"]},data(){return{code:'{\n    "state": "规则开关",\n    "des": "规则描述",\n    "uri":["匹配内容","匹配符","是否取反"],\n    "hostname":["匹配内容","匹配符","是否取反"],\n    "tag":["all_Mod"]\n    /* tag 也可以没有 */\n}',openCahe:!1,cacheContent:{},code2:'/** eg: **/\n{\n    "www.test.com":[\n    "/favicon.ico",\n    "/1.jpg?version=1.0.1"\n     ],\n    "www.abc.com":[\n    "/favicon.ico",\n    "/1.jpg"\n    ]\n}\n---- 目录(uri)前缀匹配\n{\n"www.abc.com":[\n    "/js/",\n    "/img/"\n    ]\n}\n',options:{tabSize:4,mode:{name:"javascript",json:!0},theme:"darcula",lineNumbers:!0,line:!0,lineWrapping:!0,styleSelectedText:!0,styleActiveLine:!0,hintOptions:{completeSingle:!0}},userList:[],tempList:[],pageTotal:0,state:"",version:"",search:"",open:!1,title:"",form:{id:0,contents:{state:"on"}},activeName:"second",ptData:[{dataTmpselectwz:"uri",dataTmpselectmatch:"",dataIsNot:!1,dataRuleValue:null,dataOperator:""},{dataTmpselectwz:"hostname",dataTmpselectmatch:"",dataIsNot:!1,dataRuleValue:null,dataOperator:""}]}},created(){this.getList()},methods:{isJSON(e){if("string"==typeof e)try{var t=JSON.parse(e);return!("object"!=typeof t||!t)}catch(a){return!1}else if("object"==typeof e&&e)return!0},up(e){0!==e&&this.swapItems(this.userList,e,e-1)},upIndex(e){0!==e&&this.swapItems(this.userList,e,0,"up")},down(e){e!==this.userList.length-1&&this.swapItems(this.userList,e,e+1)},downIndex(e){e!==this.userList.length-1&&this.swapItems(this.userList,e,0,"down")},swapItems(e,t,a,s){return"up"==s?(e.unshift(e[t]),e.splice(t+1,1),e):"down"==s?(e.push(e[t]),e.splice(t,1),e):(e[t]=e.splice(a,1,e[t])[0],e)},getList(){var e={action:"get",mod:"proxy_cache_Mod"};Object(i["b"])(e).then(e=>{var t=e.msg,a=[];t=e.msg;for(var s in t)if("count"!=s&&"G_version"!=s&&"state"!=s){var r={};r.id=s,r.contents=JSON.stringify(t[s]),a.push(r)}this.version=e.msg.G_version,this.state=e.msg.state,this.userList=a,this.tempList=a,this.pageTotal=a.length})},setbaseState(){var e={G_version:this.version,state:this.state},t={action:"set",mod:"base",id:"proxy_cache_Mod",value:JSON.stringify(e)};Object(i["b"])(t).then(e=>{"ok"===e.code?this.$notify({title:"成功",message:e.msg,type:"success"}):this.$notify({title:"警告",message:e.msg,type:"warning"})})},reset(){this.form={id:0,contents:{state:"on"}},this.ptData=this.$options.data().ptData},cancel(){this.open=!1,this.openCahe=!1,this.reset()},handleAdd(){this.reset(),this.title="添加",this.open=!0},handleSet(e){this.reset(),this.title="修改";var t={};t.id=e.id,t.contents=JSON.parse(e.contents),this.form=t,this.open=!0},handleDel(e){var t={action:"del",mod:"proxy_cache_Mod",id:e.id};Object(i["b"])(t).then(e=>{"ok"===e.code?(this.$notify({title:"成功",message:e.msg,type:"success"}),this.open=!1,this.getList()):this.$notify({title:"警告",message:e.msg,type:"warning"})})},submitForm(){if(!this.isJSON(this.form.contents))return this.$message.error("配置内容:json格式错误/没有内容"),!1;if("修改"===this.title){var e={action:"set",mod:"proxy_cache_Mod",id:this.form.id,value:JSON.stringify(this.form.contents)};Object(i["b"])(e).then(e=>{"ok"===e.code?(this.$notify({title:"成功",message:e.msg,type:"success"}),this.open=!1,this.getList(1)):this.$notify({title:"警告",message:e.msg,type:"warning"})})}else{e={action:"add",mod:"proxy_cache_Mod",value:JSON.stringify(this.form.contents)};Object(i["b"])(e).then(e=>{"ok"===e.code?(this.$notify({title:"成功",message:e.msg,type:"success"}),this.open=!1,this.getList(1)):this.$notify({title:"警告",message:e.msg,type:"warning"})})}},handleClean(){this.cacheContent={},this.openCahe=!0},cleanApi(){if(!this.isJSON(JSON.stringify(this.cacheContent)))return this.$message.error("配置内容:json格式错误/没有内容"),!1;var e={purge_list:JSON.stringify(this.cacheContent)};Object(c["a"])(e).then(e=>{"ok"===e.code?(this.$notify({title:"成功",message:e.msg,type:"success"}),this.openCahe=!1):this.$notify({title:"警告",message:e.msg,type:"warning"})})},handleSave(){var e={action:"save",mod:"all_Mod"};Object(i["h"])(e).then(e=>{"ok"==e.code?this.$notify({title:"成功",message:e.msg,type:"success"}):this.$notify({title:"警告",message:e.msg,type:"warning"})})},handleApply(){var e=this.userList.map(e=>JSON.parse(e.contents)),t={action:"set",mod:"proxy_cache_Mod",value:JSON.stringify(e)};Object(i["b"])(t).then(e=>{"ok"==e.code?this.$notify({title:"成功",message:e.msg,type:"success"}):this.$notify({title:"警告",message:e.msg,type:"warning"})})}},filters:{match:function(e){return u.decode(e)}},watch:{$route(e,t){},search:{handler:function(e,t){this.userList=""===e?this.tempList:this.tempList.filter((function(t){if(t.contents.indexOf(e)>=0)return!0}))}}}},h=d,m=(a("eb07"),a("2877")),p=Object(m["a"])(h,s,r,!1,null,"c7135158",null);t["default"]=p.exports},"083a":function(e,t,a){"use strict";var s=a("0d51"),r=TypeError;e.exports=function(e,t){if(!delete e[t])throw r("Cannot delete property "+s(t)+" of "+s(e))}},"090c":function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("el-table",e._b({attrs:{border:"","header-row-style":{"line-height":"23px"}}},"el-table",e.$attrs,!1),[t("el-table-column",{attrs:{label:"匹配位置",align:"center",prop:"dataTmpselectwz"}}),t("el-table-column",{attrs:{label:"匹配方式",align:"center"},scopedSlots:e._u([{key:"default",fn:function({row:a,$index:s}){return[t("el-select",{attrs:{size:"small",disabled:e.flag,placeholder:"请选择"},on:{change:function(t){return e.selectNodematch(a.dataTmpselectmatch,s)}},model:{value:a.dataTmpselectmatch,callback:function(t){e.$set(a,"dataTmpselectmatch","string"===typeof t?t.trim():t)},expression:"row.dataTmpselectmatch"}},e._l(e.computedOptions[a.dataTmpselectwz],(function(a,s){return t("el-option",{key:s,attrs:{value:a,label:a}},[e._v(" "+e._s(a)+" ")])})),1)]}}])}),t("el-table-column",{attrs:{label:"取反标识",align:"center"},scopedSlots:e._u([{key:"default",fn:function({row:a,$index:s}){return[t("el-select",{attrs:{size:"small",disabled:e.flag,placeholder:"请选择"},on:{change:function(t){return e.selectNodematchqf(a.dataIsNot,s)}},model:{value:a.dataIsNot,callback:function(t){e.$set(a,"dataIsNot",t)},expression:"row.dataIsNot"}},e._l([!1,!0],(function(e,a){return t("el-option",{key:a,attrs:{value:e,label:e+""}})})),1)]}}])}),t("el-table-column",{attrs:{label:"匹配内容",align:"center",width:"400"},scopedSlots:e._u([{key:"default",fn:function({row:a,$index:s}){return[t("el-input",{attrs:{size:"small",placeholder:e.computed_dataRuleValue_place(a.dataTmpselectmatch),name:"name",title:e.computed_dataRuleValue_place(a.dataTmpselectmatch),disabled:e.flag},on:{blur:function(t){return t.preventDefault(),e.change_dataRuleValue(s)}},model:{value:a.dataRuleValue,callback:function(t){e.$set(a,"dataRuleValue","string"===typeof t?t.trim():t)},expression:"row.dataRuleValue"}}),t("el-row",{directives:[{name:"show",rawName:"v-show",value:e.computedRulewz(s),expression:"computedRulewz($index)"}]},[t("el-input",{staticStyle:{width:"65%"},attrs:{size:"small",placeholder:e.computed_dataRulewz_place(a.dataTmpselectwz),name:"name",title:e.computed_dataRulewz_place(a.dataTmpselectwz),disabled:e.flag},on:{blur:function(t){return t.preventDefault(),e.change_dataRulewz(s)}},model:{value:a.dataRulewz,callback:function(t){e.$set(a,"dataRulewz","string"===typeof t?t.trim():t)},expression:"row.dataRulewz"}}),e._v(" * 匹配位置取值配置 ")],1)]}}])})],1)},r=[],o=a("73eb"),n=o["a"],l=a("2877"),i=Object(l["a"])(n,s,r,!1,null,"831264f0",null);t["a"]=i.exports},"3c65":function(e,t,a){"use strict";var s=a("23e7"),r=a("7b0b"),o=a("07fa"),n=a("3a34"),l=a("083a"),i=a("3511"),c=1!==[].unshift(0),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();s({target:"Array",proto:!0,arity:1,forced:c||u},{unshift:function(e){var t=r(this),a=o(t),s=arguments.length;if(s){i(a+s);var c=a;while(c--){var u=c+s;c in t?t[u]=t[c]:l(t,u)}for(var d=0;d<s;d++)t[d]=arguments[d]}return n(t,a+s)}})},"629b":function(e,t,a){},"6ae5":function(e,t,a){"use strict";a.d(t,"i",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"g",(function(){return n})),a.d(t,"h",(function(){return l})),a.d(t,"j",(function(){return i})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return h})),a.d(t,"d",(function(){return m})),a.d(t,"e",(function(){return p})),a.d(t,"f",(function(){return d}));var s=a("5c96");const r={scheme:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],uri:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],remoteIp:["等于","列表","字典","IP段"],server_port:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],ip:["等于","列表","字典","IP段"],serverIp:["等于","列表","字典","IP段"],http_host:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],server_name:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],host:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],method:["等于","列表","字典","正则"],referer:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],headers:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],headers_data:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],useragent:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],cookie:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],request_uri:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],query_string:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],http_content_type:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],args:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],args_data:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],posts:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],posts_data:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],posts_all:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],post_form:["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"]},o=["hostname","scheme","uri","remoteIp","server_port","ip","serverIp","http_host","server_name","host","method","referer","useragent","cookie","request_uri","query_string","http_content_type","headers","headers_data","args","args_data","posts","posts_data","posts_all","post_form"],n=["字典","IP段","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"];let l=new Object;l["等于"]={value:"=",des:"【字符串等于】 eg:'请输入字符串' * 表示匹配任意字符串"},l["包含"]={value:"in",des:"【字符串包含】 eg:'请输入字符串'"},l["正则"]={value:"jio",des:"【字符串正则 jio (ngx.re 参数修改使用 json 配置)】 eg:'请输入字符串'"},l["TOKEN"]={value:"@token@",des:"【服务端 token 验证】 eg:'请输入变量名称 ...'"},l["字典"]={value:"dict",des:"【等于对象中任一值】 eg:{'匹配':true,'字典中值为 true':true,'任意一个':true}"},l["IP段"]={value:"cidr",des:"【ip段 cidr 列表匹配】 eg:['匹配','cidr 列表中','任意一个']"},l["长度"]={value:"len",des:"【字符串长度匹配 min <= (*len) <= max 】 eg:['最小值','最大值']"},l["列表"]={value:"list",des:"【等于列表任一值】 eg:['匹配','数组中','任意一个']"},l["包含列表"]={value:"in_list",des:"【包含列表任一值】 eg:['包含匹配','列表中','任意一个']"},l["aho 包含列表"]={value:"aho",des:"【包含列表任一值（使用 aho 算法）】 eg:['包含匹配','列表中','任意一个']"},l["前缀列表"]={value:"start_list",des:"【前缀列表任一值】 eg:['前缀','列表中','任意一个(前缀匹配)']"},l["前缀列表(不分大小写)"]={value:"ustart_list",des:"【前缀列表任一值】 eg:['前缀','列表中','任意一个(前缀匹配)']"},l["后缀列表"]={value:"end_list",des:"【后缀列表任一值】 eg:['后缀','列表中','任意一个(后缀匹配)']"},l["后缀列表(不分大小写)"]={value:"uend_list",des:"【后缀列表任一值】 eg:['后缀','列表中','任意一个(后缀匹配)']"};let i=new Object;i["header"]={value:"headers",des:"【header 取值配置】\r\neg:['header头名称(横线使用下划线代替)','匹配位置'] \r\neg:['X_Scan_Memo','any (当有多个同名 header 头时 匹配任意位置)'] \r\neg:['X_Scan_Memo','end (默认值 当有多个同名 header 头时 匹配最后一个)']"},i["args"]={value:"args",des:"【args 取值配置】\r\neg:['GET url请求参数名称','匹配位置'] \r\neg:['args_a','any (当有多个同名参数时 匹配任意位置)'] \r\neg:['args_b','end (默认值 当有多个同名 GET 参数时 匹配最后一个)']"},i["posts"]={value:"posts",des:"【posts 取值配置】\r\neg:['POST body请求参数名称','匹配位置'] \r\neg:['username','any (当有多个同名参数时 匹配任意位置)'] \r\neg:['password','end (默认值 当有多个同名参数时 匹配最后一个)']"},i["post_form"]={value:"post_form",des:"【post 表单取值配置】\r\neg:['form表单name名称',匹配位置(取值范围：1-4)] \r\neg:['*（匹配所有表单name）',2 -- 匹配文件名] \r\neg:['*（匹配所有表单name）',3 匹配上传文件类型]\r\neg:['*（匹配所有表单name）',4 匹配上传文件内容（前 10240 内容【可配置】）]\r\neg:['*（匹配所有表单name）',1 匹配form表单name名称]"};const c=a("833b");function u(e){return Object.prototype.toString.call(e)}function d(e){var t;if(Object.keys(l).forEach((function(a){l[a]["value"]==e[1]&&(t=l[a],t["name"]=a)})),null!=t)return"长度"==t.name?(s["Message"].error("数组 需要是 Number"),!1):"字典"==t.name?(s["Message"].error("内容 需要是 Object eg：{'aaaa':true,'bbbb':true}"),!1):"IP段"==t.name?(s["Message"].error("数组值需要是合法的 CIDR eg: '192.168.1.1'"),!1):n.includes(t.name)?(s["Message"].error("内容 需要是 Array eg：['1','aaaa']"),!1):void s["Message"].error("内容 需要是 String eg：'aaaa'")}function h(e){var t;if(""==e[1]&&(e[1]="="),"restart_list"==e[1]&&(e[1]="ustart_list"),"reend_list"==e[1]&&(e[1]="uend_list"),"rein_list"==e[1]&&(e[1]="uin_list"),"[object Boolean]"!=u(e[2])&&(e[2]=!1),Object.keys(l).forEach((function(a){l[a]["value"]==e[1]&&(t=l[a],t["name"]=a)})),null!=t){if("长度"==t.name){if(2!=e[0].length)return console.log("checkmatch(objmatch) 数组长度需要为 2"),s["Message"].error("数组长度需要为 2"),!1;if("[object Number]"!=u(e[0][0])||"[object Number]"!=u(e[0][1]))return console.log("checkmatch(objmatch) 数组 需要是 Number"),s["Message"].error("数组 需要是 Number"),!1}else if("字典"==t.name){if("[object Object]"!=u(e[0]))return console.log("checkmatch(objmatch) 内容 需要是 Object eg：{'aaaa':true,'bbbb':true}"),s["Message"].error("内容 需要是 Object eg：{'aaaa':true,'bbbb':true}"),!1;Object.keys(e[0]).forEach((function(t){if("[object Boolean]"!=u(e[0][t]))return console.log("checkmatch(objmatch) key 对应的值 需要是 Boolean eg: {'aaaa':true,'bbbb':true}"),s["Message"].error("key 对应的值 需要是 Boolean eg: {'aaaa':true,'bbbb':true}"),!1}))}else if("IP段"==t.name){if("[object Array]"!=u(e[0]))return!1;e[0]=Array.from(new Set(e[0])),console.log("objmatch[0] ",e[0]);for(var a=0;a<e[0].length;a++)if(!c.isValidAddress(e[0][a]))return console.log("checkmatch(objmatch) 数组值需要是合法的 CIDR eg: '192.168.1.1'"),s["Message"].error("数组值需要是合法的 CIDR eg: '192.168.1.1'"),!1}else if(n.includes(t.name)){if(console.log("列表111",u(e[0])),"[object Array]"!=u(e[0]))return console.log("checkmatch(objmatch) 内容 需要是 Array eg：['1','aaaa']"),s["Message"].error("内容 需要是 Array eg：['1','aaaa']"),!1;e[0]=Array.from(new Set(e[0]))}else if("[object String]"!=u(e[0]))return console.log("checkmatch(objmatch) 内容 需要是 String eg：'aaaa'"),s["Message"].error("内容 需要是 String eg：'aaaa'"),!1;return!0}var r=new RegExp("[^jiosadxDjuU]");return!r.test(e[1])&&(l["正则"]["value"]=e[1],!0)}function m(e){if(e.length>2)return console.log("匹配位置配置数组长度 <= 2 "),!1;if(null!=e[1]){let t=["any","end"];if(!t.includes(e[1])&&"[object Number]"!=u(e[1]))return console.log("位置错误 eg: any|end|null|%Number%"),!1}return!0}function p(e){return 2!=e.length?(console.log("匹配位置配置数组长度 == 2 eg:['*',2]"),!1):"[object Number]"!=u(e[1])?(console.log("位置错误 eg:1|2|3|4(Number)"),!1):!(e[1]>4||e[1]<1)||(console.log("位置错误 eg: 1<= N <= 4"),!1)}},"73eb":function(module,__webpack_exports__,__webpack_require__){"use strict";var _options_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("6ae5"),element_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("5c96"),element_ui__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_1__);const IPCIDR=__webpack_require__("833b");function TypeToString(e){return Object.prototype.toString.call(e)}function cloneObj(e){var t={};for(var a in e instanceof Array&&(t=[]),e){var s=e[a];t[a]="object"===typeof s?cloneObj(s):s}return t}function isInArray(e,t){if("[object Array]"==TypeToString(e)&&"[object Array]"==TypeToString(t)){for(var a=0;a<e.length;a++)for(var s=0;s<t.length;s++)if(e[a]==t[s])return!0;return!1}return!1}var match_str=["等于","包含","正则","TOKEN"],match_array=["字典","IP段","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],matchobj=new Object;matchobj["等于"]={value:"=",des:"【字符串等于】 eg:'请输入字符串' * 表示匹配任意字符串"},matchobj["包含"]={value:"in",des:"【字符串包含】 eg:'请输入字符串'"},matchobj["正则"]={value:"jio",des:"【字符串正则 jio (ngx.re 参数修改使用 json 配置)】 eg:'请输入字符串'"},matchobj["TOKEN"]={value:"@token@",des:"【服务端 token 验证】 eg:'请输入变量名称 ...'"},matchobj["字典"]={value:"dict",des:"【等于对象中任一值】 eg:{'匹配':true,'字典中值为 true':true,'任意一个':true}"},matchobj["IP段"]={value:"cidr",des:"【ip段 cidr 列表匹配】 eg:['匹配','cidr 列表中','任意一个']"},matchobj["长度"]={value:"len",des:"【字符串长度匹配 min <= (*len) <= max 】 eg:['最小值','最大值']"},matchobj["列表"]={value:"list",des:"【等于列表任一值】 eg:['匹配','数组中','任意一个']"},matchobj["包含列表"]={value:"in_list",des:"【包含列表任一值】 eg:['包含匹配','列表中','任意一个']"},matchobj["aho 包含列表"]={value:"aho",des:"【包含列表任一值（使用 aho 算法）】 eg:['包含匹配','列表中','任意一个']"},matchobj["前缀列表"]={value:"start_list",des:"【前缀列表任一值】 eg:['前缀','列表中','任意一个(前缀匹配)']"},matchobj["前缀列表(不分大小写)"]={value:"ustart_list",des:"【前缀列表任一值】 eg:['前缀','列表中','任意一个(前缀匹配)']"},matchobj["后缀列表"]={value:"end_list",des:"【后缀列表任一值】 eg:['后缀','列表中','任意一个(后缀匹配)']"},matchobj["后缀列表(不分大小写)"]={value:"uend_list",des:"【后缀列表任一值】 eg:['后缀','列表中','任意一个(后缀匹配)']"};var wzobj=new Object;function checkmatch(e){var t;if(""==e[1]&&(e[1]="="),"restart_list"==e[1]&&(e[1]="ustart_list"),"reend_list"==e[1]&&(e[1]="uend_list"),"rein_list"==e[1]&&(e[1]="uin_list"),"[object Boolean]"!=TypeToString(e[2])&&(e[2]=!1),Object.keys(matchobj).forEach((function(a){matchobj[a]["value"]==e[1]&&(t=matchobj[a],t["name"]=a)})),null!=t){if("长度"==t.name){if(2!=e[0].length)return console.log("长度 checkmatch(objmatch) 数组长度需要为 2"),element_ui__WEBPACK_IMPORTED_MODULE_1__["Message"].error("数组长度需要为 2"),!1;if("[object Number]"!=TypeToString(e[0][0])||"[object Number]"!=TypeToString(e[0][1]))return console.log("checkmatch(objmatch) 数组 需要是 Number"),element_ui__WEBPACK_IMPORTED_MODULE_1__["Message"].error("数组 需要是 Number"),!1}else if("字典"==t.name){if("[object Object]"!=TypeToString(e[0]))return console.log("字典 checkmatch(objmatch) 内容 需要是 Object eg：{'aaaa':true,'bbbb':true}"),element_ui__WEBPACK_IMPORTED_MODULE_1__["Message"].error("匹配内容 需要是 Object eg：{'aaaa':true,'bbbb':true}"),!1;Object.keys(e[0]).forEach((function(t){if("[object Boolean]"!=TypeToString(e[0][t]))return console.log("字典 checkmatch(objmatch) key 对应的值 需要是 Boolean eg: {'aaaa':true,'bbbb':true}"),element_ui__WEBPACK_IMPORTED_MODULE_1__["Message"].error("key 对应的值 需要是 Boolean eg: {'aaaa':true,'bbbb':true}"),!1}))}else if("IP段"==t.name){if("[object Array]"!=TypeToString(e[0]))return!1;e[0]=Array.from(new Set(e[0])),console.log("objmatch[0] ",e[0]);for(var a=0;a<e[0].length;a++)if(!IPCIDR.isValidAddress(e[0][a]))return console.log("IP段 checkmatch(objmatch) 数组值需要是合法的 CIDR eg: '192.168.1.1'"),element_ui__WEBPACK_IMPORTED_MODULE_1__["Message"].error("数组值需要是合法的 CIDR eg: '192.168.1.1'"),!1}else if(match_array.includes(t.name)){if("[object Array]"!=TypeToString(e[0]))return console.log("数组类 checkmatch(objmatch) 内容 需要是 Array eg：['1','aaaa']"),element_ui__WEBPACK_IMPORTED_MODULE_1__["Message"].error("匹配内容 需要是 Array eg：['1','aaaa']"),!1;e[0]=Array.from(new Set(e[0]))}else if("[object String]"!=TypeToString(e[0]))return console.log("字符串类 checkmatch(objmatch) 内容 需要是 String eg：'aaaa'"),element_ui__WEBPACK_IMPORTED_MODULE_1__["Message"].error("匹配内容 需要是 String eg：'aaaa'"),!1;return!0}var s=new RegExp("[^jiosadxDjuU]");return!s.test(e[1])&&(matchobj["正则"]["value"]=e[1],!0)}function checkwz(e){if(e.length>2)return console.log("匹配位置配置数组长度 <= 2 "),!1;if(null!=e[1]){let t=["any","end"];if(!t.includes(e[1])&&"[object Number]"!=TypeToString(e[1]))return console.log("位置错误 eg: any|end|null|%Number%"),!1}return!0}wzobj["header"]={value:"header",des:"【header 取值配置】\r\neg:['header头名称(横线使用下划线代替)','匹配位置'] \r\neg:['X_Scan_Memo','any (当有多个同名 header 头时 匹配任意位置)'] \r\neg:['X_Scan_Memo','end (默认值 当有多个同名 header 头时 匹配最后一个)']"};var GeneralList=["server_port","ip","hostname","uri","ips","method","referer","header","useragent","cookie","args","post"];__webpack_exports__["a"]={name:"match",props:{},computed:{computedOptions(){var e=new Object;return e["server_port"]=["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],e["ip"]=["等于","列表","字典","IP段"],e["hostname"]=["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],e["uri"]=["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],e["ips"]=["等于","列表","字典","IP段"],e["method"]=["等于","列表","字典","正则"],e["referer"]=["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],e["header"]=["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],e["useragent"]=["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],e["cookie"]=["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],e["args"]=["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],e["post"]=["等于","包含","正则","字典","长度","列表","包含列表","aho 包含列表","前缀列表","前缀列表(不分大小写)","后缀列表","后缀列表(不分大小写)"],e}},data(){return{dataLocalruleData:cloneObj(this.ruleData),dataTmpselectwz:"",dataTmpselectmatch:"",dataIsNot:!1,dataRuleValue:"",dataRulewz:"",dataRuleArray:[],dataRuleView:"",flag:!1,outobj:{success:!1,emsg:"",data:""}}},created(){this.$attrs.data.forEach((e,t)=>{let a=[];this.$attrs.ruleData[e.dataTmpselectwz]&&(this.$attrs.ruleData[e.dataTmpselectwz][1]||(this.$attrs.ruleData[e.dataTmpselectwz][1]="="),"restart_list"==this.$attrs.ruleData[e.dataTmpselectwz][1]&&(this.$attrs.ruleData[e.dataTmpselectwz][1]="ustart_list"),"reend_list"==this.$attrs.ruleData[e.dataTmpselectwz][1]&&(this.$attrs.ruleData[e.dataTmpselectwz][1]="uend_list"),"rein_list"==this.$attrs.ruleData[e.dataTmpselectwz][1]&&(this.$attrs.ruleData[e.dataTmpselectwz][1]="uin_list")),this.computedRulewz(t)?("[object Boolean]"!=TypeToString(this.$attrs.ruleData[e.dataTmpselectwz][3])&&(this.$attrs.ruleData[e.dataTmpselectwz][3]=!1),a=[this.$attrs.ruleData[e.dataTmpselectwz][0],this.$attrs.ruleData[e.dataTmpselectwz][1],this.$attrs.ruleData[e.dataTmpselectwz][3]],e.dataRulewz=JSON.stringify(this.$attrs.ruleData[e.dataTmpselectwz][2])):a=this.$attrs.ruleData[e.dataTmpselectwz]||[];let s=a[1];var r;if(Object.keys(matchobj).forEach((function(e){matchobj[e]["value"]==s&&(r=matchobj[e],r["name"]=e)})),null!=r)e.dataTmpselectmatch=r.name;else{var o=new RegExp("[^jiosadxDjuU]");o.test(s)}"[object String]"!=TypeToString(a[0])?e.dataRuleValue=JSON.stringify(a[0]):e.dataRuleValue=a[0],e.dataIsNot=a[2]}),this.dataRuleView=JSON.stringify(this.$attrs.ruleData)},methods:{computedRulewz(e){let t=["header","args","posts","post_form"];return!!t.includes(this.$attrs.data[e].dataTmpselectwz)},computed_dataRulewz_place(e){var t=wzobj[e];return null!=t?t.des:"请输入"},computed_dataRuleValue_place(e){var t=matchobj[e];return null!=t?t.des:"请输入"},UphandleChange(){this.flag?(this.flag=!1,this.outobj.success=!1,this.$emit("UphandleChange",this.outobj)):(this.selectALl(),0==this.outobj.success&&(alert("规则配置错误 "+this.outobj.emsg),event.target.checked=!1),console.log("UphandleChange true",this.outobj),this.$emit("UphandleChange",this.outobj))},selectALl(e){this.$attrs.data.forEach((t,a)=>{this.$attrs.ruleData[t.dataTmpselectwz]||(this.$attrs.ruleData[t.dataTmpselectwz]=[]),null!=matchobj[this.$attrs.data[e].dataTmpselectmatch]&&e===a&&(this.$attrs.ruleData[t.dataTmpselectwz][1]=matchobj[this.$attrs.data[a].dataTmpselectmatch].value),this.$attrs.data[e].dataRuleValue&&e===a&&this.check_dataRuleValue(e,t.dataTmpselectwz),this.computedRulewz(e)?(e===a&&void 0!==this.$attrs.data[e].dataIsNot&&(this.$attrs.ruleData[t.dataTmpselectwz][3]=this.$attrs.data[e].dataIsNot),this.$attrs.data[e].dataRulewz&&e===a&&this.check_dataRulewz(e,t.dataTmpselectwz)):e===a&&void 0!==this.$attrs.data[e].dataIsNot&&(this.$attrs.ruleData[t.dataTmpselectwz][2]=this.$attrs.data[e].dataIsNot)}),1==this.outobj.success&&(this.outobj.data=this.dataLocalruleData.rule),this.dataRuleView=JSON.stringify(this.dataLocalruleData.rule)},selectNodewz(e){this.selectALl(),console.log("匹配位置:",this.dataTmpselectwz)},selectNodematch(e,t){this.selectALl(t),console.log("匹配方式:",e)},selectNodematchqf(e,t){this.selectALl(t),console.log("是否取反:",e)},print(e){},check_dataRuleValue(index,dataTmpselectwz){if(this.outobj.success=!1,match_array.includes(this.$attrs.data[index].dataTmpselectmatch))try{this.$attrs.ruleData[dataTmpselectwz][0]=eval("("+this.$attrs.data[index].dataRuleValue+")"),checkmatch(this.$attrs.ruleData[dataTmpselectwz])&&(this.outobj.success=!0,console.log("规则合法",this.$attrs.ruleData[dataTmpselectwz][0]))}catch(err){return this.outobj.success=!1,this.outobj.emsg="规则不合法合法 "+err,console.log("--- 规则不合法合法",err),Object(_options_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this.$attrs.ruleData[dataTmpselectwz]),!1}else this.$attrs.ruleData[dataTmpselectwz][0]=this.$attrs.data[index].dataRuleValue;return this.outobj.success=!0,!0},change_dataRuleValue(e){this.selectALl(e)},check_dataRulewz(e,t){try{this.$attrs.data[e].dataRulewz=this.$attrs.data[e].dataRulewz.replace(/-/g,"_");var a=JSON.parse(this.$attrs.data[e].dataRulewz);if(!checkwz(a))return this.outobj.success=!1,this.outobj.emsg="匹配位置配置 规则不合法",console.log("匹配位置配置 规则不合法"),!1;this.$attrs.ruleData[t][2]=a,console.log("匹配位置配置 规则合法")}catch(s){return this.outobj.success=!1,this.outobj.emsg="匹配位置配置 规则不合法 "+s,console.log("匹配位置配置 规则不合法",s),!1}return!0},change_dataRulewz(e){this.selectALl(e)}}}},"85c8":function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var s=a("b775"),r=a("4328"),o=a.n(r),n=a("365c");function l(e){return Object(s["a"])({url:""+n["a"].cdn.cleanCache,method:"post",data:o.a.stringify(e)})}function i(e){return Object(s["a"])({url:""+n["a"].cdn.setPurge,method:"post",data:o.a.stringify(e)})}},eb07:function(e,t,a){"use strict";a("629b")}}]);