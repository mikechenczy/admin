(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-353a7ef8","chunk-fba8ebaa","chunk-2d0d5c52"],{"0ae2":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("j-modal",{attrs:{title:t.title,width:t.width,visible:t.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":t.disableSubmit}},cancelText:"关闭"},on:{ok:t.handleOk,cancel:t.handleCancel}},[n("info-form",{ref:"realForm",attrs:{disabled:t.disableSubmit},on:{ok:t.submitCallback}})],1)},i=[],o=n("7069"),l={name:"InfoModal",components:{InfoForm:o["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.add()}))},edit:function(t){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.edit(t)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},r=l,s=n("2877"),c=Object(s["a"])(r,a,i,!1,null,null,null);e["default"]=c.exports},"6eb7":function(t,e,n){},7069:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-spin",{attrs:{spinning:t.confirmLoading}},[n("j-form-container",{attrs:{disabled:t.formDisabled}},[n("a-form-model",{ref:"form",attrs:{slot:"detail",model:t.model,rules:t.validatorRules},slot:"detail"},[n("a-row",[n("a-col",{attrs:{span:24}},[n("a-form-model-item",{attrs:{label:"描述",labelCol:t.labelCol,wrapperCol:t.wrapperCol,prop:"description"}},[n("a-input",{attrs:{placeholder:"请输入描述"},model:{value:t.model.description,callback:function(e){t.$set(t.model,"description",e)},expression:"model.description"}})],1)],1),n("a-col",{attrs:{span:24}},[n("a-form-model-item",{attrs:{label:"内容",labelCol:t.labelCol,wrapperCol:t.wrapperCol,prop:"content"}},[n("a-input",{attrs:{placeholder:"请输入内容"},model:{value:t.model.content,callback:function(e){t.$set(t.model,"content",e)},expression:"model.content"}})],1)],1)],1)],1)],1)],1)},i=[],o=n("0fea"),l=(n("ca00"),{name:"InfoForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/bestvpn/info/add",edit:"/bestvpn/info/edit",queryById:"/bestvpn/info/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(t){this.model=Object.assign({},t),this.visible=!0},submitForm:function(){var t=this,e=this;this.$refs.form.validate((function(n){if(n){e.confirmLoading=!0;var a="",i="";t.model.id?(a+=t.url.edit,i="put"):(a+=t.url.add,i="post"),Object(o["h"])(a,t.model,i).then((function(t){t.success?(e.$message.success(t.message),e.$emit("ok")):e.$message.warning(t.message)})).finally((function(){e.confirmLoading=!1}))}}))}}}),r=l,s=n("2877"),c=Object(s["a"])(r,a,i,!1,null,null,null);e["default"]=c.exports},7723:function(t,e,n){},8754:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-page-search-wrapper"},[n("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchQuery(e)}}},[n("a-row",{attrs:{gutter:24}},[n("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[n("a-form-item",{attrs:{label:"描述"}},[n("a-input",{attrs:{placeholder:"请输入描述"},model:{value:t.queryParam.description,callback:function(e){t.$set(t.queryParam,"description",e)},expression:"queryParam.description"}})],1)],1),n("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[n("a-form-item",{attrs:{label:"内容"}},[n("a-input",{attrs:{placeholder:"请输入内容"},model:{value:t.queryParam.content,callback:function(e){t.$set(t.queryParam,"content",e)},expression:"queryParam.content"}})],1)],1),n("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[n("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[n("a-button",{attrs:{type:"primary",icon:"search"},on:{click:t.searchQuery}},[t._v("查询")]),n("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:t.searchReset}},[t._v("重置")]),n("a",{staticStyle:{"margin-left":"8px"},on:{click:t.handleToggleSearch}},[t._v("\n              "+t._s(t.toggleSearchStatus?"收起":"展开")+"\n              "),n("a-icon",{attrs:{type:t.toggleSearchStatus?"up":"down"}})],1)],1)])],1)],1)],1),n("div",{staticClass:"table-operator"},[n("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.handleAdd}},[t._v("新增")]),n("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(e){return t.handleExportXls("信息")}}},[t._v("导出")]),n("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:t.tokenHeader,action:t.importExcelUrl},on:{change:t.handleImportExcel}},[n("a-button",{attrs:{type:"primary",icon:"import"}},[t._v("导入")])],1),n("j-super-query",{ref:"superQueryModal",attrs:{fieldList:t.superFieldList},on:{handleSuperQuery:t.handleSuperQuery}}),t.selectedRowKeys.length>0?n("a-dropdown",[n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{key:"1",on:{click:t.batchDel}},[n("a-icon",{attrs:{type:"delete"}}),t._v("删除")],1)],1),n("a-button",{staticStyle:{"margin-left":"8px"}},[t._v(" 批量操作 "),n("a-icon",{attrs:{type:"down"}})],1)],1):t._e()],1),n("div",[n("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[n("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),t._v(" 已选择 "),n("a",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.selectedRowKeys.length))]),t._v("项\n      "),n("a",{staticStyle:{"margin-left":"24px"},on:{click:t.onClearSelected}},[t._v("清空")])]),n("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",scroll:{x:!0},bordered:"",rowKey:"id",columns:t.columns,dataSource:t.dataSource,pagination:t.ipagination,loading:t.loading,rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"htmlSlot",fn:function(e){return[n("div",{domProps:{innerHTML:t._s(e)}})]}},{key:"imgSlot",fn:function(e){return[e?n("img",{staticStyle:{"max-width":"80px","font-size":"12px","font-style":"italic"},attrs:{src:t.getImgView(e),height:"25px",alt:""}}):n("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[t._v("无图片")])]}},{key:"fileSlot",fn:function(e){return[e?n("a-button",{attrs:{ghost:!0,type:"primary",icon:"download",size:"small"},on:{click:function(n){return t.downloadFile(e)}}},[t._v("\n          下载\n        ")]):n("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[t._v("无文件")])]}},{key:"action",fn:function(e,a){return n("span",{},[n("a",{on:{click:function(e){return t.handleEdit(a)}}},[t._v("编辑")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-dropdown",[n("a",{staticClass:"ant-dropdown-link"},[t._v("更多 "),n("a-icon",{attrs:{type:"down"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",[n("a",{on:{click:function(e){return t.handleDetail(a)}}},[t._v("详情")])]),n("a-menu-item",[n("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return t.handleDelete(a.id)}}},[n("a",[t._v("删除")])])],1)],1)],1)],1)}}])})],1),n("info-modal",{ref:"modalForm",on:{ok:t.modalFormOk}})],1)},i=[],o=(n("6eb7"),n("ac0d")),l=n("b65a"),r=n("0ae2"),s={name:"InfoList",mixins:[l["a"],o["b"]],components:{InfoModal:r["default"]},data:function(){return{description:"信息管理页面",columns:[{title:"描述",align:"center",sorter:!0,dataIndex:"description"},{title:"内容",align:"center",sorter:!0,dataIndex:"content"},{title:"操作",dataIndex:"action",align:"center",fixed:"right",width:147,scopedSlots:{customRender:"action"}}],url:{list:"/bestvpn/info/list",delete:"/bestvpn/info/delete",deleteBatch:"/bestvpn/info/deleteBatch",exportXlsUrl:"/bestvpn/info/exportXls",importExcelUrl:"bestvpn/info/importExcel"},dictOptions:{},superFieldList:[]}},created:function(){this.getSuperFieldList()},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{initDictConfig:function(){},getSuperFieldList:function(){var t=[];t.push({type:"string",value:"content",text:"内容",dictCode:""}),t.push({type:"string",value:"description",text:"描述",dictCode:""}),this.superFieldList=t}}},c=s,d=(n("9b28"),n("2877")),u=Object(d["a"])(c,a,i,!1,null,"6733694a",null);e["default"]=u.exports},"9b28":function(t,e,n){"use strict";var a=n("7723"),i=n.n(a);i.a}}]);