var y=Object.defineProperty,I=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var h=(e,o,a)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,c=(e,o)=>{for(var a in o||(o={}))E.call(o,a)&&h(e,a,o[a]);if(_)for(var a of _(o))J.call(o,a)&&h(e,a,o[a]);return e},i=(e,o)=>I(e,M(o));import{u as U}from"./useFormDesignState-add0a698.js";import{f as g,g as j}from"./index-a6481d01.js";import{C as k,M as w}from"./index-ca06cd68.js";import{au as D,W as F}from"./index.js";import{aw as S,M as O}from"./antd-8e9c6fb8.js";import{d as B,r as N,I as $,a7 as r,Z as x,a5 as T,a6 as n,k as l,G as u,$ as C,ap as V,aq as A}from"./vue-ae6a2213.js";import"./useWindowSizeFn-be729167.js";const K=B({name:"ImportJsonModal",components:{CodeEditor:k,Upload:S,Modal:O},setup(){const{createMessage:e}=D(),o=N({visible:!1,json:`{
  "schemas": [
    {
      "component": "input",
      "label": "输入框",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "layout": "horizontal",
  "labelLayout": "flex",
  "labelWidth": 100,
  "labelCol": {},
  "wrapperCol": {}
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:a}=U(),p=()=>{o.visible=!1},m=()=>{o.visible=!0},d=()=>{try{const s=JSON.parse(o.json);s.schemas&&g(s.schemas,t=>{j(t)}),a.setFormConfig(i(c({},s),{activeKey:1,currentItem:{component:""}})),p(),e.success("导入成功")}catch(s){e.error("导入失败，数据格式不对")}};return i(c({handleImportJson:d,beforeUpload:s=>{const t=new FileReader;return t.readAsText(s),t.onload=function(){o.json=this.result,d()},!1},handleCancel:p,showModal:m},$(o)),{MODE:w})}});const L=e=>(V("data-v-62ebfefa"),e=e(),A(),e),R=L(()=>C("p",{class:"hint-box"},"导入格式如下:",-1)),W={class:"v-json-box"};function q(e,o,a,p,m,d){const f=r("CodeEditor"),s=r("a-button"),t=r("Upload"),b=r("Modal");return x(),T(b,{title:"JSON数据",open:e.visible,onOk:e.handleImportJson,onCancel:e.handleCancel,cancelText:"关闭",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[l(s,{onClick:e.handleCancel},{default:n(()=>[u("取消")]),_:1},8,["onClick"]),l(t,{class:"upload-button",beforeUpload:e.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[l(s,{type:"primary"},{default:n(()=>[u("导入json文件")]),_:1})]),_:1},8,["beforeUpload"]),l(s,{type:"primary",onClick:e.handleImportJson},{default:n(()=>[u("确定")]),_:1},8,["onClick"])]),default:n(()=>[R,C("div",W,[l(f,{value:e.json,"onUpdate:value":o[0]||(o[0]=v=>e.json=v),ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["open","onOk","onCancel"])}const ee=F(K,[["render",q],["__scopeId","data-v-62ebfefa"]]);export{ee as default};
