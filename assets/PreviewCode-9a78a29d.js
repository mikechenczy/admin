var b=Object.defineProperty,h=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var u=(e,t,o)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))J.call(t,o)&&u(e,o,t[o]);if(p)for(var o of p(t))k.call(t,o)&&u(e,o,t[o]);return e},_=(e,t)=>h(e,x(t));import{C as g,M as w}from"./index-5bf3c444.js";import{c as $}from"./copyTextToClipboard-6d09c6e8.js";import{au as M,W as B}from"./index.js";import{d as D,r as F,I as N,a7 as f,Z as A,_ as I,$ as v,k as r,a6 as C,G as y}from"./vue-ae6a2213.js";import"./antd-8e9c6fb8.js";import"./useWindowSizeFn-be729167.js";const O=D({name:"PreviewCode",components:{CodeEditor:g},props:{fileFormat:{type:String,default:"json"},editorJson:{type:String,default:""}},setup(e){const t=F({visible:!1}),o=(a,n=`file.${e.fileFormat}`)=>{let l="data:text/csv;charset=utf-8,";l+=a;const E=encodeURI(l),s=document.createElement("a");s.setAttribute("href",E),s.setAttribute("download",n),s.click()},c=()=>{o(e.editorJson)},{createMessage:d}=M(),i=()=>{const a=e.editorJson;if(!a){d.warning("代码为空！");return}$(a)};return _(m({},N(t)),{exportData:o,handleCopyJson:i,handleExportJson:c,MODE:w})}});const P={class:"v-json-box"},S={class:"copy-btn-box"};function V(e,t,o,c,d,i){const a=f("CodeEditor"),n=f("a-button");return A(),I("div",null,[v("div",P,[r(a,{value:e.editorJson,ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])]),v("div",S,[r(n,{onClick:e.handleCopyJson,type:"primary",class:"copy-btn","data-clipboard-action":"copy","data-clipboard-text":e.editorJson},{default:C(()=>[y(" 复制数据 ")]),_:1},8,["onClick","data-clipboard-text"]),r(n,{onClick:e.handleExportJson,type:"primary"},{default:C(()=>[y("导出代码")]),_:1},8,["onClick"])])])}const q=B(O,[["render",V],["__scopeId","data-v-a69efe87"]]);export{q as default};