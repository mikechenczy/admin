var k=(h,l,o)=>new Promise((t,c)=>{var f=r=>{try{a(o.next(r))}catch(s){c(s)}},_=r=>{try{a(o.throw(r))}catch(s){c(s)}},a=r=>r.done?t(r.value):Promise.resolve(r.value).then(f,_);a((o=o.apply(h,l)).next())});import{d as x,f as w,w as D,y as A,a7 as R,Z as p,_ as g,F as T,a8 as V,m as I,k as i,u as e,a6 as n,G as y,a0 as b,a5 as S,a9 as $,A as B}from"./vue-C-fXn5x4.js";import{_ as M}from"./DetailModal.vue_vue_type_script_setup_true_lang-_fM0_-PY.js";import{a as N,b as j,c as F}from"./useForm-RgYvicpQ.js";import{u as G}from"./index-Ct8wWWt8.js";import{a as H,u as Z,b as q}from"./index.js";import{getColumns as z}from"./data-Bpu7tV8h.js";import{f as J}from"./antd-Dxxf6MN8.js";import"./index-dUtUCzOM.js";import"./useDescription-DUuPa_nj.js";import"./useFormItem-Djb2ixBi.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-Dg46GCSa.js";import"./useSortable-D2T5agEp.js";import"./index-sb4rP5N6.js";import"./onMountedOrActivated-C8ZkvEWz.js";import"./index-CIFLoaXD.js";import"./useWindowSizeFn-B-ZcP_zC.js";import"./sortable.esm-CXi5ODBW.js";import"./index-1ocsCaln.js";import"./copyTextToClipboard-C3IjWpoG.js";import"./index-Cb7zAOWj.js";const K=()=>H.get({url:"/error"}),O={class:"p-4"},P=["src"],yr=x({__name:"index",setup(h){const l=w(),o=w([]),{t}=Z(),c=q(),[f,{setTableData:_}]=N({title:t("sys.errorLog.tableTitle"),columns:z(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[a,{openModal:r}]=G();D(()=>c.getErrorLogInfoList,m=>{A(()=>{_(J(m))})},{immediate:!0});function s(m){l.value=m,r(!0)}function C(){throw new Error("fire vue error!")}function E(){o.value.push(`${new Date().getTime()}.png`)}function L(){return k(this,null,function*(){yield K()})}return(m,Q)=>{const d=R("a-button");return p(),g("div",O,[(p(!0),g(T,null,V(o.value,u=>I((p(),g("img",{key:u,src:u,alt:""},null,8,P)),[[B,!1]])),128)),i(M,{info:l.value,onRegister:e(a)},null,8,["info","onRegister"]),i(e(F),{onRegister:e(f),class:"error-handle-table"},{toolbar:n(()=>[i(d,{onClick:C,type:"primary"},{default:n(()=>[y(b(e(t)("sys.errorLog.fireVueError")),1)]),_:1}),i(d,{onClick:E,type:"primary"},{default:n(()=>[y(b(e(t)("sys.errorLog.fireResourceError")),1)]),_:1}),i(d,{onClick:L,type:"primary"},{default:n(()=>[y(b(e(t)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:n(({column:u,record:v})=>[u.key==="action"?(p(),S(e(j),{key:0,actions:[{label:e(t)("sys.errorLog.tableActionDesc"),onClick:s.bind(null,v)}]},null,8,["actions"])):$("",!0)]),_:1},8,["onRegister"])])}}});export{yr as default};
