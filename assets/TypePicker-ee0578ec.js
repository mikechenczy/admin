import{f as r,W as p}from"./index.js";import{d,Z as n,_ as o,F as l,a8 as _,a1 as c,u as a,a5 as u,a6 as m,$ as i,ap as f,aq as y}from"./vue-ae6a2213.js";import{T as k}from"./antd-8e9c6fb8.js";const h=e=>(f("data-v-484d23e8"),e=e(),y(),e),v=["onClick"],T=h(()=>i("div",{class:"mix-sidebar"},null,-1)),x=[T],C=d({name:"MenuTypePicker",__name:"TypePicker",props:{menuTypeList:{type:Array,default:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(e){const{prefixCls:s}=r("setting-menu-type-picker");return($,g)=>(n(),o("div",{class:c(a(s))},[(n(!0),o(l,null,_(e.menuTypeList||[],t=>(n(),u(a(k),{key:t.title,title:t.title,placement:"bottom"},{default:m(()=>[i("div",{onClick:B=>e.handler(t),class:c([`${a(s)}__item`,`${a(s)}__item--${t.type}`,{[`${a(s)}__item--active`]:e.def===t.type}])},x,10,v)]),_:2},1032,["title"]))),128))],2))}});const F=p(C,[["__scopeId","data-v-484d23e8"]]);export{F as default};