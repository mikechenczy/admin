import{Y as f,f as h,u as g,aS as w,ak as v,aT as y,K as r}from"./index.js";import{_ as k}from"./LoginForm.vue_vue_type_script_setup_true_lang-4a89d48e.js";import{_ as S}from"./ForgetPasswordForm.vue_vue_type_script_setup_true_lang-be34df67.js";import{_ as $}from"./RegisterForm.vue_vue_type_script_setup_true_lang-048df43b.js";import{_ as b}from"./MobileForm.vue_vue_type_script_setup_true_lang-deb4ab60.js";import{_ as L}from"./QrCodeForm.vue_vue_type_script_setup_true_lang-e35fb9b2.js";import{d as T,c as B,f as C,Z as l,_ as N,$ as e,a5 as m,u as s,a9 as _,k as t,a0 as A,a1 as x}from"./vue-ae6a2213.js";const D="/assets/login-box-bg-9027741f.svg",J={class:"flex items-center absolute right-4 top-4"},M={class:"-enter-x xl:hidden"},V={class:"container relative h-full py-2 mx-auto sm:px-10"},I={class:"flex h-full"},P={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},z={class:"my-auto"},E=["alt"],G={class:"mt-10 font-medium text-white -enter-x"},K={class:"inline-block mt-4 text-3xl"},O={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"},W=T({__name:"Login",props:{sessionTimeout:{type:Boolean}},setup(n){const o=f(),{prefixCls:i}=h("login");g();const d=w().getShowPicker,p=B(()=>{var a;return(a=o==null?void 0:o.title)!=null?a:""}),c=C("MJ管理后台"),u=JSON.parse(localStorage.getItem("globalConfig")||"{}");return c.value=u.description||"MJ管理后台",(a,Z)=>(l(),N("div",{class:x([s(i),"relative w-full h-full px-4"])},[e("div",J,[n.sessionTimeout?_("",!0):(l(),m(s(v),{key:0,class:"enter-x mr-2"})),!n.sessionTimeout&&s(d)?(l(),m(s(y),{key:1,class:"text-white enter-x xl:text-gray-600","show-text":!1})):_("",!0)]),e("span",M,[t(s(r),{alwaysShowTitle:!0})]),e("div",V,[e("div",I,[e("div",P,[t(s(r),{class:"-enter-x"}),e("div",z,[e("img",{alt:p.value,src:D,class:"w-1/2 -mt-16 -enter-x"},null,8,E),e("div",G,[e("span",K,A(s(c)),1)])])]),e("div",O,[e("div",{class:x([`${s(i)}-form`,"relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])},[t(k),t(S),t($),t(b),t(L)],2)])])])],2))}});export{W as _};