import{d as n,f as o,o as c,Z as r,_ as l,$ as u,a0 as p}from"./vue-ae6a2213.js";const _={class:"text-center"},i={class:"text-2xl"},m=n({__name:"NumberChart",props:{valueFetch:{type:Function,default:()=>""}},setup(a){const s=a,e=o("");return c(()=>{s.valueFetch().then(t=>{e.value=t.value})}),(t,d)=>(r(),l("div",_,[u("span",i,p(e.value),1)]))}});export{m as _};