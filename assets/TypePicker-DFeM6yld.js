import{f as c,_ as p}from"./index.js";import{d,Z as n,_ as i,F as u,a8 as m,a1 as l,u as t,a5 as f,a6 as _,$ as o}from"./vue-C-fXn5x4.js";import{T as y}from"./antd-Dxxf6MN8.js";const k=["onClick"],T=d({name:"MenuTypePicker",__name:"TypePicker",props:{menuTypeList:{type:Array,default:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(s){const{prefixCls:a}=c("setting-menu-type-picker");return(v,r)=>(n(),i("div",{class:l(t(a))},[(n(!0),i(u,null,m(s.menuTypeList||[],e=>(n(),f(t(y),{key:e.title,title:e.title,placement:"bottom"},{default:_(()=>[o("div",{onClick:x=>s.handler(e),class:l([`${t(a)}__item`,`${t(a)}__item--${e.type}`,{[`${t(a)}__item--active`]:s.def===e.type}])},r[0]||(r[0]=[o("div",{class:"mix-sidebar"},null,-1)]),10,k)]),_:2},1032,["title"]))),128))],2))}}),B=p(T,[["__scopeId","data-v-484d23e8"]]);export{B as default};
