(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225de4"],{e5db:function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("j-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,switchFullscreen:"",cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[t("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"sysOrgCode",label:"所属部门"}},[t("a-input",{attrs:{placeholder:"请输入所属部门"},model:{value:e.model.sysOrgCode,callback:function(s){e.$set(e.model,"sysOrgCode",s)},expression:"model.sysOrgCode"}})],1)],1)],1)],1)},i=[],l=t("0fea"),n=(t("c1df"),{name:"TestDemoModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/demo/testDemo/add",edit:"/demo/testDemo/edit"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){this.model=Object.assign({},e),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.$refs.form.clearValidate()},handleOk:function(){var e=this,s=this;this.$refs.form.validate((function(t){if(!t)return!1;s.confirmLoading=!0;var o="",i="";e.model.id?(o+=e.url.edit,i="put"):(o+=e.url.add,i="post"),Object(l["h"])(o,e.model,i).then((function(e){e.success?(s.$message.success(e.message),s.$emit("ok")):s.$message.warning(e.message)})).finally((function(){s.confirmLoading=!1,s.close()}))}))},handleCancel:function(){this.close()}}}),a=n,d=t("2877"),r=Object(d["a"])(a,o,i,!1,null,"c121c870",null);s["default"]=r.exports}}]);