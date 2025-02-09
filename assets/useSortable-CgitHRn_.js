var d=Object.defineProperty;var f=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var m=(r,a,t)=>a in r?d(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,c=(r,a)=>{for(var t in a||(a={}))p.call(a,t)&&m(r,t,a[t]);if(f)for(var t of f(a))y.call(a,t)&&m(r,t,a[t]);return r};var l=(r,a,t)=>new Promise((i,u)=>{var s=e=>{try{n(t.next(e))}catch(o){u(o)}},_=e=>{try{n(t.throw(e))}catch(o){u(o)}},n=e=>e.done?i(e.value):Promise.resolve(e.value).then(s,_);n((t=t.apply(r,a)).next())});import{z as b}from"./index.js";import{y as S,u as O}from"./vue-C-fXn5x4.js";function P(r,a){function t(){S(()=>l(this,null,function*(){if(r=O(r),!r)return;(yield b(()=>import("./sortable.esm-CXi5ODBW.js"),__vite__mapDeps([]),import.meta.url)).default.create(r,c({animation:100,delay:400,delayOnTouchOnly:!0},a))}))}return{initSortable:t}}export{P as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}