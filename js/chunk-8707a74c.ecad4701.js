(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8707a74c","chunk-4c4787be","chunk-2d0e883d"],{6690:function(e,t,a){},"6eb7":function(e,t,a){},"8a31":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("j-form-container",{attrs:{disabled:e.formDisabled}},[a("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"创建日期",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"createTime"}},[a("a-input",{attrs:{placeholder:"请输入创建日期"},model:{value:e.model.createTime,callback:function(t){e.$set(e.model,"createTime",t)},expression:"model.createTime"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"邮箱",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"email"}},[a("a-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"password"}},[a("a-input",{attrs:{placeholder:"请输入密码"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"手机号",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"phoneNum"}},[a("a-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.model.phoneNum,callback:function(t){e.$set(e.model,"phoneNum",t)},expression:"model.phoneNum"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"用户ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"userId"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入用户ID"},model:{value:e.model.userId,callback:function(t){e.$set(e.model,"userId",t)},expression:"model.userId"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"用户名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"username"}},[a("a-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"VIP到期时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"vip"}},[a("a-input",{attrs:{placeholder:"请输入VIP到期时间"},model:{value:e.model.vip,callback:function(t){e.$set(e.model,"vip",t)},expression:"model.vip"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"VIP类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"vipType"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入VIP类型"},model:{value:e.model.vipType,callback:function(t){e.$set(e.model,"vipType",t)},expression:"model.vipType"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"余额",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"money"}},[a("a-input",{attrs:{placeholder:"请输入余额"},model:{value:e.model.money,callback:function(t){e.$set(e.model,"money",t)},expression:"model.money"}})],1)],1)],1)],1)],1)],1)},r=[],o=a("0fea"),n=(a("ca00"),{name:"UserForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/ddz/user/add",edit:"/ddz/user/edit",queryById:"/ddz/user/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(a){t.confirmLoading=!0;var l="",r="";e.model.id?(l+=e.url.edit,r="put"):(l+=e.url.add,r="post"),Object(o["h"])(l,e.model,r).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}))}}}),s=n,i=a("2877"),d=Object(i["a"])(s,l,r,!1,null,null,null);t["default"]=d.exports},ba58:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"创建日期"}},[a("a-input",{attrs:{placeholder:"请输入创建日期"},model:{value:e.queryParam.createTime,callback:function(t){e.$set(e.queryParam,"createTime",t)},expression:"queryParam.createTime"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"邮箱"}},[a("a-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.queryParam.email,callback:function(t){e.$set(e.queryParam,"email",t)},expression:"queryParam.email"}})],1)],1),e.toggleSearchStatus?[a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"密码"}},[a("a-input",{attrs:{placeholder:"请输入密码"},model:{value:e.queryParam.password,callback:function(t){e.$set(e.queryParam,"password",t)},expression:"queryParam.password"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"手机号"}},[a("a-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.queryParam.phoneNum,callback:function(t){e.$set(e.queryParam,"phoneNum",t)},expression:"queryParam.phoneNum"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"用户ID"}},[a("a-input",{attrs:{placeholder:"请输入用户ID"},model:{value:e.queryParam.userId,callback:function(t){e.$set(e.queryParam,"userId",t)},expression:"queryParam.userId"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"用户名"}},[a("a-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"VIP到期时间"}},[a("a-input",{attrs:{placeholder:"请输入VIP到期时间"},model:{value:e.queryParam.vip,callback:function(t){e.$set(e.queryParam,"vip",t)},expression:"queryParam.vip"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"VIP类型"}},[a("a-input",{attrs:{placeholder:"请输入VIP类型"},model:{value:e.queryParam.vipType,callback:function(t){e.$set(e.queryParam,"vipType",t)},expression:"queryParam.vipType"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"余额"}},[a("a-input",{attrs:{placeholder:"请输入余额"},model:{value:e.queryParam.money,callback:function(t){e.$set(e.queryParam,"money",t)},expression:"queryParam.money"}})],1)],1)]:e._e(),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n              "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n              "),a("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)])],2)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("用户")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),a("j-super-query",{ref:"superQueryModal",attrs:{fieldList:e.superFieldList},on:{handleSuperQuery:e.handleSuperQuery}}),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",scroll:{x:!0},bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"htmlSlot",fn:function(t){return[a("div",{domProps:{innerHTML:e._s(t)}})]}},{key:"imgSlot",fn:function(t){return[t?a("img",{staticStyle:{"max-width":"80px","font-size":"12px","font-style":"italic"},attrs:{src:e.getImgView(t),height:"25px",alt:""}}):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无图片")])]}},{key:"fileSlot",fn:function(t){return[t?a("a-button",{attrs:{ghost:!0,type:"primary",icon:"download",size:"small"},on:{click:function(a){return e.downloadFile(t)}}},[e._v("\n          下载\n        ")]):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无文件")])]}},{key:"action",fn:function(t,l){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(l)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{on:{click:function(t){return e.handleDetail(l)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(l.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("user-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},r=[],o=(a("6eb7"),a("ac0d")),n=a("b65a"),s=a("e4d1"),i={name:"UserList",mixins:[n["a"],o["b"]],components:{UserModal:s["default"]},data:function(){return{description:"用户管理页面",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"创建日期",align:"center",sorter:!0,dataIndex:"createTime"},{title:"邮箱",align:"center",sorter:!0,dataIndex:"email"},{title:"密码",align:"center",sorter:!0,dataIndex:"password"},{title:"手机号",align:"center",sorter:!0,dataIndex:"phoneNum"},{title:"用户ID",align:"center",sorter:!0,dataIndex:"userId"},{title:"用户名",align:"center",sorter:!0,dataIndex:"username"},{title:"VIP到期时间",align:"center",sorter:!0,dataIndex:"vip"},{title:"VIP类型",align:"center",sorter:!0,dataIndex:"vipType"},{title:"余额",align:"center",sorter:!0,dataIndex:"money"},{title:"操作",dataIndex:"action",align:"center",fixed:"right",width:147,scopedSlots:{customRender:"action"}}],url:{list:"/ddz/user/list",delete:"/ddz/user/delete",deleteBatch:"/ddz/user/deleteBatch",exportXlsUrl:"/ddz/user/exportXls",importExcelUrl:"ddz/user/importExcel"},dictOptions:{},superFieldList:[]}},created:function(){this.getSuperFieldList()},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{initDictConfig:function(){},getSuperFieldList:function(){var e=[];e.push({type:"string",value:"createTime",text:"创建日期",dictCode:""}),e.push({type:"string",value:"email",text:"邮箱",dictCode:""}),e.push({type:"string",value:"password",text:"密码",dictCode:""}),e.push({type:"string",value:"phoneNum",text:"手机号",dictCode:""}),e.push({type:"int",value:"userId",text:"用户ID",dictCode:""}),e.push({type:"string",value:"username",text:"用户名",dictCode:""}),e.push({type:"string",value:"vip",text:"VIP到期时间",dictCode:""}),e.push({type:"int",value:"vipType",text:"VIP类型",dictCode:""}),e.push({type:"string",value:"money",text:"余额",dictCode:""}),this.superFieldList=e}}},d=i,c=(a("f5b9"),a("2877")),m=Object(c["a"])(d,l,r,!1,null,"61846322",null);t["default"]=m.exports},e4d1:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("user-form",{ref:"realForm",attrs:{disabled:e.disableSubmit},on:{ok:e.submitCallback}})],1)},r=[],o=a("8a31"),n={name:"UserModal",components:{UserForm:o["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.add()}))},edit:function(e){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.edit(e)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},s=n,i=a("2877"),d=Object(i["a"])(s,l,r,!1,null,null,null);t["default"]=d.exports},f5b9:function(e,t,a){"use strict";var l=a("6690"),r=a.n(l);r.a}}]);