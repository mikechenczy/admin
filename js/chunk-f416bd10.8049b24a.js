(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f416bd10","chunk-9acec91c","chunk-2d20f13c"],{3781:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchQuery(e)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"用户Id"}},[a("a-input",{attrs:{placeholder:"请输入用户Id"},model:{value:t.queryParam.userId,callback:function(e){t.$set(t.queryParam,"userId",e)},expression:"queryParam.userId"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"房间Id"}},[a("a-input",{attrs:{placeholder:"请输入房间Id"},model:{value:t.queryParam.roomId,callback:function(e){t.$set(t.queryParam,"roomId",e)},expression:"queryParam.roomId"}})],1)],1),t.toggleSearchStatus?[a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"看牌状态"}},[a("a-input",{attrs:{placeholder:"请输入看牌状态"},model:{value:t.queryParam.cardState,callback:function(e){t.$set(t.queryParam,"cardState",e)},expression:"queryParam.cardState"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"要牌状态"}},[a("a-input",{attrs:{placeholder:"请输入要牌状态"},model:{value:t.queryParam.haveState,callback:function(e){t.$set(t.queryParam,"haveState",e)},expression:"queryParam.haveState"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"出总钱"}},[a("a-input",{attrs:{placeholder:"请输入出总钱"},model:{value:t.queryParam.totalMoney,callback:function(e){t.$set(t.queryParam,"totalMoney",e)},expression:"queryParam.totalMoney"}})],1)],1)]:t._e(),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:t.searchQuery}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:t.searchReset}},[t._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:t.handleToggleSearch}},[t._v("\n              "+t._s(t.toggleSearchStatus?"收起":"展开")+"\n              "),a("a-icon",{attrs:{type:t.toggleSearchStatus?"up":"down"}})],1)],1)])],2)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.handleAdd}},[t._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(e){return t.handleExportXls("用户数据")}}},[t._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:t.tokenHeader,action:t.importExcelUrl},on:{change:t.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[t._v("导入")])],1),a("j-super-query",{ref:"superQueryModal",attrs:{fieldList:t.superFieldList},on:{handleSuperQuery:t.handleSuperQuery}}),t.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:t.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),t._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[t._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):t._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),t._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.selectedRowKeys.length))]),t._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:t.onClearSelected}},[t._v("清空")])]),a("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",scroll:{x:!0},bordered:"",rowKey:"id",columns:t.columns,dataSource:t.dataSource,pagination:t.ipagination,loading:t.loading,rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"htmlSlot",fn:function(e){return[a("div",{domProps:{innerHTML:t._s(e)}})]}},{key:"imgSlot",fn:function(e){return[e?a("img",{staticStyle:{"max-width":"80px","font-size":"12px","font-style":"italic"},attrs:{src:t.getImgView(e),height:"25px",alt:""}}):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[t._v("无图片")])]}},{key:"fileSlot",fn:function(e){return[e?a("a-button",{attrs:{ghost:!0,type:"primary",icon:"download",size:"small"},on:{click:function(a){return t.downloadFile(e)}}},[t._v("\n          下载\n        ")]):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[t._v("无文件")])]}},{key:"action",fn:function(e,l){return a("span",{},[a("a",{on:{click:function(e){return t.handleEdit(l)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[t._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{on:{click:function(e){return t.handleDetail(l)}}},[t._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return t.handleDelete(l.id)}}},[a("a",[t._v("删除")])])],1)],1)],1)],1)}}])})],1),a("user-data-modal",{ref:"modalForm",on:{ok:t.modalFormOk}})],1)},r=[],o=(a("6eb7"),a("ac0d")),n=a("b65a"),i=a("b9a9"),s={name:"UserDataList",mixins:[n["a"],o["b"]],components:{UserDataModal:i["default"]},data:function(){return{description:"用户数据管理页面",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(t,e,a){return parseInt(a)+1}},{title:"用户Id",align:"center",sorter:!0,dataIndex:"userId"},{title:"房间Id",align:"center",sorter:!0,dataIndex:"roomId"},{title:"看牌状态",align:"center",sorter:!0,dataIndex:"cardState"},{title:"要牌状态",align:"center",sorter:!0,dataIndex:"haveState"},{title:"出总钱",align:"center",sorter:!0,dataIndex:"totalMoney"},{title:"操作",dataIndex:"action",align:"center",fixed:"right",width:147,scopedSlots:{customRender:"action"}}],url:{list:"/ddz/userData/list",delete:"/ddz/userData/delete",deleteBatch:"/ddz/userData/deleteBatch",exportXlsUrl:"/ddz/userData/exportXls",importExcelUrl:"ddz/userData/importExcel"},dictOptions:{},superFieldList:[]}},created:function(){this.getSuperFieldList()},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{initDictConfig:function(){},getSuperFieldList:function(){var t=[];t.push({type:"string",value:"userId",text:"用户Id",dictCode:""}),t.push({type:"string",value:"roomId",text:"房间Id",dictCode:""}),t.push({type:"string",value:"cardState",text:"看牌状态",dictCode:""}),t.push({type:"string",value:"haveState",text:"要牌状态",dictCode:""}),t.push({type:"string",value:"totalMoney",text:"出总钱",dictCode:""}),this.superFieldList=t}}},d=s,c=(a("496c"),a("2877")),u=Object(c["a"])(d,l,r,!1,null,"b401fdf8",null);e["default"]=u.exports},"496c":function(t,e,a){"use strict";var l=a("66f8"),r=a.n(l);r.a},"66f8":function(t,e,a){},"6eb7":function(t,e,a){},b1a8:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-spin",{attrs:{spinning:t.confirmLoading}},[a("j-form-container",{attrs:{disabled:t.formDisabled}},[a("a-form-model",{ref:"form",attrs:{slot:"detail",model:t.model,rules:t.validatorRules},slot:"detail"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"用户Id",labelCol:t.labelCol,wrapperCol:t.wrapperCol,prop:"userId"}},[a("a-input",{attrs:{placeholder:"请输入用户Id"},model:{value:t.model.userId,callback:function(e){t.$set(t.model,"userId",e)},expression:"model.userId"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"房间Id",labelCol:t.labelCol,wrapperCol:t.wrapperCol,prop:"roomId"}},[a("a-input",{attrs:{placeholder:"请输入房间Id"},model:{value:t.model.roomId,callback:function(e){t.$set(t.model,"roomId",e)},expression:"model.roomId"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"看牌状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol,prop:"cardState"}},[a("a-input",{attrs:{placeholder:"请输入看牌状态"},model:{value:t.model.cardState,callback:function(e){t.$set(t.model,"cardState",e)},expression:"model.cardState"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"要牌状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol,prop:"haveState"}},[a("a-input",{attrs:{placeholder:"请输入要牌状态"},model:{value:t.model.haveState,callback:function(e){t.$set(t.model,"haveState",e)},expression:"model.haveState"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"出总钱",labelCol:t.labelCol,wrapperCol:t.wrapperCol,prop:"totalMoney"}},[a("a-input",{attrs:{placeholder:"请输入出总钱"},model:{value:t.model.totalMoney,callback:function(e){t.$set(t.model,"totalMoney",e)},expression:"model.totalMoney"}})],1)],1)],1)],1)],1)],1)},r=[],o=a("0fea"),n=(a("ca00"),{name:"UserDataForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/ddz/userData/add",edit:"/ddz/userData/edit",queryById:"/ddz/userData/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(t){this.model=Object.assign({},t),this.visible=!0},submitForm:function(){var t=this,e=this;this.$refs.form.validate((function(a){if(a){e.confirmLoading=!0;var l="",r="";t.model.id?(l+=t.url.edit,r="put"):(l+=t.url.add,r="post"),Object(o["h"])(l,t.model,r).then((function(t){t.success?(e.$message.success(t.message),e.$emit("ok")):e.$message.warning(t.message)})).finally((function(){e.confirmLoading=!1}))}}))}}}),i=n,s=a("2877"),d=Object(s["a"])(i,l,r,!1,null,null,null);e["default"]=d.exports},b9a9:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("j-modal",{attrs:{title:t.title,width:t.width,visible:t.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":t.disableSubmit}},cancelText:"关闭"},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("user-data-form",{ref:"realForm",attrs:{disabled:t.disableSubmit},on:{ok:t.submitCallback}})],1)},r=[],o=a("b1a8"),n={name:"UserDataModal",components:{UserDataForm:o["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.add()}))},edit:function(t){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.edit(t)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},i=n,s=a("2877"),d=Object(s["a"])(i,l,r,!1,null,null,null);e["default"]=d.exports}}]);