(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9dbe0b0"],{"1fbe":function(t,e,i){"use strict";i.d(e,"e",(function(){return a})),i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return c})),i.d(e,"h",(function(){return f})),i.d(e,"d",(function(){return m})),i.d(e,"g",(function(){return d})),i.d(e,"c",(function(){return u})),i.d(e,"f",(function(){return p}));var n=i("b775"),o=i("4328"),s=i.n(o),r=i("365c");function a(t){return Object(n["a"])({url:""+r["a"].fourtier.getStream,method:"get",params:t})}function l(t){return Object(n["a"])({url:""+r["a"].fourtier.addStream,method:"post",data:s.a.stringify(t)})}function c(t){return Object(n["a"])({url:""+r["a"].fourtier.delStream,method:"post",data:s.a.stringify(t)})}function f(t){return Object(n["a"])({url:""+r["a"].fourtier.setStream,method:"post",data:s.a.stringify(t)})}function m(t){return Object(n["a"])({url:""+r["a"].fourtier.getSip,method:"get",params:t})}function d(t){return Object(n["a"])({url:""+r["a"].fourtier.setSip,method:"post",data:s.a.stringify(t)})}function u(t){return Object(n["a"])({url:""+r["a"].fourtier.configDict,method:"get",params:t})}function p(t){return Object(n["a"])({url:""+r["a"].fourtier.configDict,method:"post",data:s.a.stringify(t)})}},c700:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[e("el-card",{attrs:{shadow:"never"}},[e("el-row",{staticStyle:{"margin-bottom":"10px","margin-left":"10px"},attrs:{gutter:10}},[e("div",{staticStyle:{width:"300px",float:"left"}},[e("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入搜索内容"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e("div",{staticClass:"el-icon-info",staticStyle:{"margin-left":"80px",float:"left"}},[e("span",{staticStyle:{color:"red"}},[t._v("注：")]),t._v("插件配置有变更时，需要重启整个集群，使其生效")]),e("div",{staticStyle:{float:"right","line-height":"40px"}},[e("span",{staticStyle:{"margin-right":"20px"}},[t._v("当前数量："),e("span",{staticStyle:{color:"rgba(255, 141, 26, 1)"}},[t._v(t._s(t.pageTotal))])]),e("span",{staticStyle:{"margin-right":"20px"}},[t._v("版本号："),e("span",{staticStyle:{color:"rgba(255, 141, 26, 1)"}},[t._v(t._s(t.version))])]),e("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("添加")]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleSave}},[t._v("保存")])],1)]),e("el-table",{attrs:{data:t.userList,border:""}},[e("el-table-column",{attrs:{label:"函数名称",align:"left",prop:"name","min-width":"13%","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{label:"文件名称",align:"left",prop:"file","min-width":"13%","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{label:"载入状态",align:"left",prop:"disk_file","min-width":"10%"}}),e("el-table-column",{attrs:{label:"函数内容",align:"left",prop:"contents","show-overflow-tooltip":!0,"min-width":"25%"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("match")(e.row.contents))+" ")]}}])}),e("el-table-column",{attrs:{label:"描述",align:"left",prop:"description","min-width":"25%"}}),e("el-table-column",{attrs:{label:"操作",align:"left","min-width":"14%","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-button",{staticStyle:{color:"orange","margin-right":"5px"},attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(e){return t.handleSet(i.row)}}},[t._v("修改")]),e("el-popover",{attrs:{placement:"top"},model:{value:i.row.visible,callback:function(e){t.$set(i.row,"visible",e)},expression:"scope.row.visible"}},[e("p",[t._v("确定要删除吗?")]),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){i.row.visible=!1}}},[t._v("取消")]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleDel(i.row)}}},[t._v("确定")])],1),e("el-button",{staticStyle:{color:"red"},attrs:{slot:"reference",size:"mini",type:"text",icon:"el-icon-delete"},slot:"reference"},[t._v("删除")])],1)]}}])})],1),e("el-dialog",{attrs:{title:t.title,visible:t.open,width:"50%"},on:{"update:visible":function(e){t.open=e}}},[e("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"函数名称:"}},[e("el-col",{staticStyle:{float:"left"}},[e("el-input",{directives:[{name:"show",rawName:"v-show",value:"修改"===t.title,expression:"title === '修改'"}],attrs:{disabled:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),e("el-input",{directives:[{name:"show",rawName:"v-show",value:"添加"===t.title,expression:"title === '添加'"}],model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),e("el-form-item",{attrs:{label:"文件名称:"}},[e("el-input",{directives:[{name:"show",rawName:"v-show",value:"修改"===t.title,expression:"title === '修改'"}],attrs:{disabled:""},model:{value:t.form.file,callback:function(e){t.$set(t.form,"file",e)},expression:"form.file"}}),e("el-input",{directives:[{name:"show",rawName:"v-show",value:"添加"===t.title,expression:"title === '添加'"}],model:{value:t.form.file,callback:function(e){t.$set(t.form,"file",e)},expression:"form.file"}})],1),e("el-form-item",{attrs:{label:"描述:"}},[e("el-input",{attrs:{type:"textarea",rows:"3"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),e("el-form-item",{attrs:{label:"函数内容:"}},[e("codemirror",{attrs:{options:t.options},model:{value:t.form.contents,callback:function(e){t.$set(t.form,"contents",e)},expression:"form.contents"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")]),e("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1)],1)],1)},o=[],s=(i("14d9"),i("1fbe")),r=i("a417"),a=i("8f94");i("a7be"),i("7ba3"),i("f9d4");const l=i("e762").Base64,c=()=>i.e("chunk-2d0b95e7").then(i.bind(null,"333d"));var f={components:{pagination:c,codemirror:a["codemirror"]},data(){return{options:{tabSize:2,mode:{name:"javascript",json:!0},theme:"darcula",lineNumbers:!0,line:!0,lineWrapping:!0,styleSelectedText:!0,styleActiveLine:!0,hintOptions:{completeSingle:!0}},userList:[],tempList:[],pageTotal:0,version:"",search:"",open:!1,title:"",form:{name:"",file:"",disk_file:"",description:"",contents:""},rules:{userName:[{required:!0,message:"用户名称不能为空",trigger:"blur"}],phone:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},created(){this.getList(1)},methods:{reset(){this.form={name:"",file:"",disk_file:"",description:"",contents:""}},cancel(){this.open=!1,this.reset()},handleAdd(){this.reset(),this.title="添加",this.open=!0},handleSet(t){this.reset(),this.form.name=t.name,this.form.file=t.file,this.form.description=t.description,this.form.contents=l.decode(t.contents),this.title="修改",this.open=!0},handleDel(t){var e={action:"del",mod:"splugin_Mod",id:t.name};Object(s["f"])(e).then(t=>{"ok"===t.code?(this.$notify({title:"成功",message:t.msg,type:"success"}),this.open=!1,this.getList(1)):this.$notify({title:"警告",message:t.msg,type:"warning"})})},getList(t){var e={action:"get",mod:"splugin_Mod",id:""};Object(s["c"])(e).then(t=>{var e=t.msg,i=[];for(var n in e)if("count"!=n&&"G_version"!=n){console.log(n);var o=e[n],s={};s.name=n,s.file=o.file,s.disk_file=o.disk_file,s.description=o.description,s.contents=o.contents?o.contents:"",i.push(s)}this.userList=i,this.tempList=i,this.pageTotal=i.length,this.version=e.G_version,console.log(this.userList)})},submitForm(){if("修改"===this.title){var t={file:this.form.file,description:this.form.description,contents:l.encode(this.form.contents)},e={action:"set",mod:"splugin_Mod",id:this.form.name,value:JSON.stringify(t)};Object(s["f"])(e).then(t=>{"ok"===t.code?(this.$notify({title:"成功",message:t.msg,type:"success"}),this.open=!1,this.getList(1)):this.$notify({title:"警告",message:t.msg,type:"warning"})})}else{var i={file:this.form.file,description:this.form.description,contents:l.encode(this.form.contents)},n={action:"add",mod:"splugin_Mod",id:this.form.name,value:JSON.stringify(i)};Object(s["f"])(n).then(t=>{"ok"===t.code?(this.$notify({title:"成功",message:t.msg,type:"success"}),this.open=!1,this.getList(1)):this.$notify({title:"警告",message:t.msg,type:"warning"})})}},handleSave(){var t={action:"save",mod:"all_Mod"};Object(r["h"])(t).then(t=>{"ok"==t.code?this.$notify({title:"成功",message:t.msg,type:"success"}):this.$notify({title:"警告",message:t.msg,type:"warning"})})}},filters:{match:function(t){return l.decode(t)}},watch:{$route(t,e){},search:{handler:function(t,e){this.userList=""===t?this.tempList:this.tempList.filter((function(e){if(e.name.indexOf(t)>=0)return!0}))}}}},m=f,d=(i("d0b4"),i("2877")),u=Object(d["a"])(m,n,o,!1,null,"42b5c91f",null);e["default"]=u.exports},d0b4:function(t,e,i){"use strict";i("fd4b")},fd4b:function(t,e,i){}}]);