(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9552"],{"8ca2":function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("a-spin",{attrs:{spinning:e.confirmLoading}},[s("j-form-container",{attrs:{disabled:e.formDisabled}},[s("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[s("a-row",[s("a-col",{attrs:{span:24}},[s("a-form-model-item",{attrs:{label:"用户ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"userId"}},[s("a-input",{attrs:{placeholder:"请输入用户ID"},model:{value:e.model.userId,callback:function(a){e.$set(e.model,"userId",a)},expression:"model.userId"}})],1)],1),s("a-col",{attrs:{span:24}},[s("a-form-model-item",{attrs:{label:"用户名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"username"}},[s("a-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.model.username,callback:function(a){e.$set(e.model,"username",a)},expression:"model.username"}})],1)],1)],1)],1)],1)],1)},l=[],o=s("0fea"),n=(s("ca00"),{name:"SignInForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/bestvpn/signIn/add",edit:"/bestvpn/signIn/edit",queryById:"/bestvpn/signIn/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,a=this;this.$refs.form.validate((function(s){if(s){a.confirmLoading=!0;var t="",l="";e.model.id?(t+=e.url.edit,l="put"):(t+=e.url.add,l="post"),Object(o["h"])(t,e.model,l).then((function(e){e.success?(a.$message.success(e.message),a.$emit("ok")):a.$message.warning(e.message)})).finally((function(){a.confirmLoading=!1}))}}))}}}),r=n,i=s("2877"),d=Object(i["a"])(r,t,l,!1,null,null,null);a["default"]=d.exports}}]);