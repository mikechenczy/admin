import{f as l}from"./index.js";import{d as p}from"./index-4eb2abac.js";import{d as u,Z as a,_ as s,F as _,a8 as d,a1 as m,u as t,ae as f,k}from"./vue-ae6a2213.js";import{a_ as C}from"./antd-8e9c6fb8.js";import"./index-e2325f80.js";import"./useContentViewHeight-ca8eb444.js";import"./useWindowSizeFn-be729167.js";import"./useSortable-1cd8f8b5.js";import"./lock-b1b3ff91.js";const y=["onClick"],F=u({name:"ThemeColorPicker",__name:"ThemeColorPicker",props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(r){const o=r,{prefixCls:n}=l("setting-theme-picker");function c(i){o.event&&p(o.event,i)}return(i,h)=>(a(),s("div",{class:m(t(n))},[(a(!0),s(_,null,d(r.colorList||[],e=>(a(),s("span",{key:e,onClick:v=>c(e),class:m([`${t(n)}__item`,{[`${t(n)}__item--active`]:r.def===e}]),style:f({background:e})},[k(t(C))],14,y))),128))],2))}});export{F as default};