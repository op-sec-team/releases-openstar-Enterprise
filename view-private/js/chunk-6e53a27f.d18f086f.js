(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e53a27f"],{"51ea":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("el-card",{attrs:{shadow:"never"}},[t("el-row",{staticStyle:{"margin-bottom":"10px","margin-left":"10px"},attrs:{gutter:10}},[t("div",{staticStyle:{width:"300px",float:"left"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入搜索内容"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t("div",{staticClass:"el-icon-info",staticStyle:{"margin-left":"100px",float:"left"}},[t("span",{staticStyle:{color:"red"}},[e._v("注：")]),e._v("插件配置有变更时，需要重启整个集群，使其生效")]),t("div",{staticStyle:{float:"right"}},[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handleAdd}},[e._v("添加插件")]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handleSave}},[e._v("保存")])],1)]),t("el-row",{staticStyle:{margin:"20px"}},[e._v(" 当前数量："+e._s(e.pageTotal)+" ")]),t("el-table",{attrs:{data:e.userList,border:""}},[t("el-table-column",{attrs:{label:"函数名称",align:"left",prop:"name",width:"180","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"文件名称",align:"left",prop:"file",width:"180","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"载入状态",align:"left",prop:"disk_file",width:"80"}}),t("el-table-column",{attrs:{label:"函数内容",align:"left",prop:"contents","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("match")(t.row.contents))+" ")]}}])}),t("el-table-column",{attrs:{label:"描述",align:"center",prop:"description","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"130","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-button",{staticStyle:{color:"orange"},attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(t){return e.handleSet(i.row)}}},[e._v("修改")]),t("el-popover",{attrs:{placement:"top",width:"160"},model:{value:i.row.visible,callback:function(t){e.$set(i.row,"visible",t)},expression:"scope.row.visible"}},[t("p",[e._v("确定要删除吗?")]),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){i.row.visible=!1}}},[e._v("取消")]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleDel(i.row)}}},[e._v("确定")])],1),t("el-button",{staticStyle:{color:"red","margin-left":"10px"},attrs:{slot:"reference",size:"mini",type:"text",icon:"el-icon-delete"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),t("el-dialog",{attrs:{title:e.title,visible:e.open,width:"50%"},on:{"update:visible":function(t){e.open=t}}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"函数名称:"}},[t("el-col",{staticStyle:{float:"left"}},[t("el-input",{directives:[{name:"show",rawName:"v-show",value:"修改"===e.title,expression:"title === '修改'"}],attrs:{disabled:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),t("el-input",{directives:[{name:"show",rawName:"v-show",value:"添加"===e.title,expression:"title === '添加'"}],model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),t("el-form-item",{attrs:{label:"文件名称:"}},[t("el-input",{directives:[{name:"show",rawName:"v-show",value:"修改"===e.title,expression:"title === '修改'"}],attrs:{disabled:""},model:{value:e.form.file,callback:function(t){e.$set(e.form,"file",t)},expression:"form.file"}}),t("el-input",{directives:[{name:"show",rawName:"v-show",value:"添加"===e.title,expression:"title === '添加'"}],model:{value:e.form.file,callback:function(t){e.$set(e.form,"file",t)},expression:"form.file"}})],1),t("el-form-item",{attrs:{label:"描述:"}},[t("el-input",{attrs:{type:"textarea",rows:"3"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),t("el-form-item",{attrs:{label:"函数内容:"}},[t("codemirror",{attrs:{options:e.options},model:{value:e.form.contents,callback:function(t){e.$set(e.form,"contents",t)},expression:"form.contents"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),t("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)],1)},n=[],o=(i("14d9"),i("9448")),l=i("a417"),r=i("8f94");i("a7be"),i("7ba3"),i("f9d4");const a=i("e762").Base64,c=()=>i.e("chunk-2d0b95e7").then(i.bind(null,"333d"));var f={components:{pagination:c,codemirror:r["codemirror"]},data(){return{options:{tabSize:2,mode:{name:"javascript",json:!0},theme:"darcula",lineNumbers:!0,line:!0,lineWrapping:!0,styleSelectedText:!0,styleActiveLine:!0,hintOptions:{completeSingle:!0}},userList:[],tempList:[],pageTotal:0,search:"",activename:"first",open:!1,title:"",form:{name:"",file:"",disk_file:"",description:"",contents:""},rules:{userName:[{required:!0,message:"用户名称不能为空",trigger:"blur"}],phone:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},created(){this.getList(1)},methods:{reset(){this.form={name:"",file:"",disk_file:"",description:"",contents:""}},cancel(){this.open=!1,this.reset()},handleAdd(){this.reset(),this.title="添加",this.open=!0},handleSet(e){this.reset(),this.form.name=e.name,this.form.file=e.file,this.form.description=e.description,this.form.contents=a.decode(e.contents),this.title="修改",this.open=!0},handleDel(e){var t={id:e.name};Object(o["b"])(t).then(e=>{"ok"===e.code?(this.$notify({title:"成功",message:e.msg,type:"success"}),this.open=!1,this.getList(1)):this.$notify({title:"警告",message:e.msg,type:"warning"})})},getList(e){var t={id:"all_Mod"};Object(o["c"])(t).then(e=>{var t=e.msg,i=[];for(var s in t)if("count"!=s){var n=t[s],o={};o.name=s,o.file=n.file,o.disk_file=n.disk_file,o.description=n.description,o.contents=n.contents,i.push(o)}this.userList=i,this.tempList=i,this.pageTotal=i.length})},submitForm(){if("修改"===this.title){var e={file:this.form.file,description:a.encode(this.form.description),contents:a.encode(this.form.contents)},t={id:this.form.name,value:JSON.stringify(e)};Object(o["d"])(t).then(e=>{"ok"===e.code?(this.$notify({title:"成功",message:e.msg,type:"success"}),this.open=!1,this.getList(1)):this.$notify({title:"警告",message:e.msg,type:"warning"})})}else{e={file:this.form.file,description:a.encode(this.form.description),contents:a.encode(this.form.contents)},t={id:this.form.name,value:JSON.stringify(e)};Object(o["a"])(t).then(e=>{"ok"===e.code?(this.$notify({title:"成功",message:e.msg,type:"success"}),this.open=!1,this.getList(1)):this.$notify({title:"警告",message:e.msg,type:"warning"})})}},handleSave(){var e={action:"save",mod:"all_Mod"};Object(l["h"])(e).then(e=>{"ok"==e.code?this.$notify({title:"成功",message:e.msg,type:"success"}):this.$notify({title:"警告",message:e.msg,type:"warning"})})}},filters:{match:function(e){return a.decode(e)}},watch:{$route(e,t){},search:{handler:function(e,t){this.userList=""===e?this.tempList:this.tempList.filter((function(t){if(t.name.indexOf(e)>=0)return!0}))}}}},m=f,d=(i("e5d6"),i("2877")),u=Object(d["a"])(m,s,n,!1,null,"c54fbfe8",null);t["default"]=u.exports},9448:function(e,t,i){"use strict";i.d(t,"c",(function(){return r})),i.d(t,"d",(function(){return a})),i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return f}));var s=i("b775"),n=i("4328"),o=i.n(n),l=i("365c");function r(e){return Object(s["a"])({url:""+l["a"].plugin.getPlugin,method:"post",data:o.a.stringify(e)})}function a(e){return Object(s["a"])({url:""+l["a"].plugin.setPlugin,method:"post",data:o.a.stringify(e)})}function c(e){return Object(s["a"])({url:""+l["a"].plugin.addPlugin,method:"post",data:o.a.stringify(e)})}function f(e){return Object(s["a"])({url:""+l["a"].plugin.delPlugin,method:"post",data:o.a.stringify(e)})}},b8d2:function(e,t,i){},e5d6:function(e,t,i){"use strict";i("b8d2")}}]);