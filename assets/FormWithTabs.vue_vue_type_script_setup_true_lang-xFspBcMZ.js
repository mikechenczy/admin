var P=Object.defineProperty;var b=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var k=(e,a,t)=>a in e?P(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,B=(e,a)=>{for(var t in a||(a={}))R.call(a,t)&&k(e,t,a[t]);if(b)for(var t of b(a))$.call(a,t)&&k(e,t,a[t]);return e};var w=(e,a,t)=>new Promise((o,r)=>{var d=s=>{try{i(t.next(s))}catch(u){r(u)}},p=s=>{try{i(t.throw(s))}catch(u){r(u)}},i=s=>s.done?o(s.value):Promise.resolve(s.value).then(d,p);i((t=t.apply(e,a)).next())});import"./index.js";import{u as D,_ as G}from"./useForm-RgYvicpQ.js";import{B as S,V as L}from"./antd-Dxxf6MN8.js";import{d as M,f as y,o as O,Z as m,a5 as C,a6 as f,_ as g,a8 as F,u as l,G as v,a0 as x,F as A,k as U}from"./vue-C-fXn5x4.js";const z=M({__name:"FormWithTabs",props:{handleColumnClick:{type:Function},columnButtons:{type:Array},title:{type:String},rowKey:{type:[String,Number]},handleSuccess:{type:Function},api:{type:Function},tableButtons:{type:Array},handleTableClick:{type:Function},addSchemas:{type:Array},editSchemas:{type:Array}},emits:["success","register"],setup(e,{emit:a}){const t=a,o=e,r=y(o.addSchemas),d=y(),p=y(""),i=y(!1);function s(){o.api().then(c=>{let h=c.list,n=h[0];p.value=n[o.rowKey],h&&(i.value=!0,d.value=n,r.value=o.editSchemas,T(n))})}O(()=>{s()});const u={};u[o.rowKey]=void 0;const[V,{setProps:W,setFieldsValue:T,validate:K}]=D({labelWidth:100,baseColProps:{span:24},schemas:r,rowProps:{gutter:16,justify:"start"},labelAlign:"left",showActionButtonGroup:!1,showResetButton:!1,showSubmitButton:!0,submitButtonOptions:{text:"保存"},actionColOptions:{span:23}});function _(){return w(this,null,function*(){try{const c=yield K();c[o.rowKey]=p.value,t("success",{isUpdate:l(i),values:c,closeModal:()=>{}})}finally{setTimeout(()=>{s()},200)}})}return(c,h)=>(m(),C(l(L),{class:"w-full",title:e.title},{extra:f(()=>[(m(!0),g(A,null,F(e.tableButtons,n=>(m(),C(l(S),{class:"m-2",type:"primary",onClick:N=>e.handleTableClick(n)},{default:f(()=>[v(x(n.name),1)]),_:2},1032,["onClick"]))),256))]),default:f(()=>[U(l(G),{onRegister:l(V),onSubmit:_},null,8,["onRegister"]),(m(!0),g(A,null,F(e.columnButtons,n=>(m(),C(l(S),{class:"m-2",type:"primary",onClick:N=>e.handleColumnClick({props:B({},l(d)),option:n})},{default:f(()=>[v(x(n.name),1)]),_:2},1032,["onClick"]))),256))]),_:1},8,["title"]))}});export{z as _};
