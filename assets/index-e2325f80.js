import{p as h,f as v,W as y}from"./index.js";import{a as x}from"./useContentViewHeight-ca8eb444.js";import{G as w}from"./antd-8e9c6fb8.js";import{d as H,f as a,c as S,u as e,Z as R,_ as k,k as z,a6 as C,ae as f,a1 as m,$}from"./vue-ae6a2213.js";import{u as B}from"./useWindowSizeFn-be729167.js";const L=["src"],W=H({__name:"index",props:{frameSrc:h.string.def("")},setup(u){const n=a(!0),p=a(50),i=a(window.innerHeight),o=a(),{headerHeightRef:d}=x(),{prefixCls:r}=v("iframe-page");B(l,{wait:150,immediate:!0});const c=S(()=>({height:`${e(i)}px`}));function l(){const s=e(o);if(!s)return;const t=d.value;p.value=t,i.value=window.innerHeight-t;const g=document.documentElement.clientHeight-t;s.style.height=`${g}px`}function _(){n.value=!1,l()}return(s,t)=>(R(),k("div",{class:m(e(r)),style:f(c.value)},[z(e(w),{spinning:n.value,size:"large",style:f(c.value)},{default:C(()=>[$("iframe",{src:u.frameSrc,class:m(`${e(r)}__main`),ref_key:"frameRef",ref:o,onLoad:_},null,42,L)]),_:1},8,["spinning","style"])],6))}});const D=y(W,[["__scopeId","data-v-7b891ed4"]]);export{D as default};