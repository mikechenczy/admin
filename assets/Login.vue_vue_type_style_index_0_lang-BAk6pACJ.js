import{Y as u,f as h,u as g,aT as w,ak as v,aU as y,L as r}from"./index.js";import{_ as k}from"./LoginForm.vue_vue_type_script_setup_true_lang-DymP3lqs.js";import{_ as S}from"./ForgetPasswordForm.vue_vue_type_script_setup_true_lang-DauM7PlB.js";import{_ as L}from"./RegisterForm.vue_vue_type_script_setup_true_lang-BFFn_oEi.js";import{_ as $}from"./MobileForm.vue_vue_type_script_setup_true_lang-DCmyAmC7.js";import{_ as b}from"./QrCodeForm.vue_vue_type_script_setup_true_lang-B91WtHP1.js";import{d as B,c as T,f as C,Z as l,_ as N,$ as e,a5 as m,u as s,a9 as _,k as t,a0 as A,a1 as x}from"./vue-C-fXn5x4.js";const D=""+new URL("login-box-bg-BwcHql23.svg",import.meta.url).href,J={class:"flex items-center absolute right-4 top-4"},M={class:"-enter-x xl:hidden"},V={class:"container relative h-full py-2 mx-auto sm:px-10"},I={class:"flex h-full"},P={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},U={class:"my-auto"},q=["alt"],z={class:"mt-10 font-medium text-white -enter-x"},E={class:"inline-block mt-4 text-3xl"},G={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"},W=B({__name:"Login",props:{sessionTimeout:{type:Boolean}},setup(n){const o=u(),{prefixCls:i}=h("login");g();const d=w().getShowPicker,p=T(()=>{var a;return(a=o==null?void 0:o.title)!=null?a:""}),c=C("MJ管理后台"),f=JSON.parse(localStorage.getItem("globalConfig")||"{}");return c.value=f.description||"MJ管理后台",(a,O)=>(l(),N("div",{class:x([s(i),"relative w-full h-full px-4"])},[e("div",J,[n.sessionTimeout?_("",!0):(l(),m(s(v),{key:0,class:"enter-x mr-2"})),!n.sessionTimeout&&s(d)?(l(),m(s(y),{key:1,class:"text-white enter-x xl:text-gray-600","show-text":!1})):_("",!0)]),e("span",M,[t(s(r),{alwaysShowTitle:!0})]),e("div",V,[e("div",I,[e("div",P,[t(s(r),{class:"-enter-x"}),e("div",U,[e("img",{alt:p.value,src:D,class:"w-1/2 -mt-16 -enter-x"},null,8,q),e("div",z,[e("span",E,A(s(c)),1)])])]),e("div",G,[e("div",{class:x([`${s(i)}-form`,"relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])},[t(k),t(S),t(L),t($),t(b)],2)])])])],2))}});export{W as _};
