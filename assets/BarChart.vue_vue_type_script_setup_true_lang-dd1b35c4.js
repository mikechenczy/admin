import{u as h}from"./useECharts-e5f16b04.js";import{d as m,f as t,r as v,o as d,Z as f,_ as y,ae as _}from"./vue-ae6a2213.js";const g=m({__name:"BarChart",props:{valueFetch:{type:Function,default:()=>""},anChartField:{type:Object}},setup(s){const o=t(),{setOptions:c}=h(o),i=t("280px"),l=t("100%"),u=s,n=t([10,22,28,23,19]),r=t([]),p=v({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},xAxis:{data:r},yAxis:{type:"value"},series:[{data:n,type:"bar"}]});return d(()=>{u.valueFetch().then(a=>{r.value=a.value.map(e=>e.item||e.ITEM),n.value=a.value.map(e=>e.itemCount||e.ITEMCOUNT||e.itemcount),c(p)})}),(a,e)=>(f(),y("div",{ref_key:"chartRef",ref:o,style:_({height:i.value,width:l.value})},null,4))}});export{g as _};