var m=Object.defineProperty;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var c=(r,a,t)=>a in r?m(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,s=(r,a)=>{for(var t in a||(a={}))y.call(a,t)&&c(r,t,a[t]);if(f)for(var t of f(a))b.call(a,t)&&c(r,t,a[t]);return r};var _=(r,a,t)=>new Promise((i,u)=>{var d=e=>{try{n(t.next(e))}catch(o){u(o)}},l=e=>{try{n(t.throw(e))}catch(o){u(o)}},n=e=>e.done?i(e.value):Promise.resolve(e.value).then(d,l);n((t=t.apply(r,a)).next())});import{z as p}from"./index.js";import{y as S,u as O}from"./vue-C-fXn5x4.js";function P(r,a){function t(){S(()=>_(this,null,function*(){if(r=O(r),!r)return;(yield p(()=>import("./sortable.esm-CXi5ODBW.js"),__vite__mapDeps([]))).default.create(r,s({animation:100,delay:400,delayOnTouchOnly:!0},a))}))}return{initSortable:t}}export{P as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}