var M=Object.defineProperty,E=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var b=(e,o,a)=>o in e?M(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,i=(e,o)=>{for(var a in o||(o={}))U.call(o,a)&&b(e,a,o[a]);if(C)for(var a of C(o))j.call(o,a)&&b(e,a,o[a]);return e},u=(e,o)=>E(e,I(o));import{u as k}from"./useFormDesignState-DfF1U7xE.js";import{f as D,g as F}from"./index-x8rlXzM_.js";import{C as J}from"./index-BhRH-QtU.js";import{ay as _,_ as g}from"./index.js";import{az as O,M as w}from"./antd-DKzFhik5.js";import{d as B,r as N,I as S,a7 as r,Z as $,a5 as x,a6 as n,k as l,G as m,$ as h}from"./vue-C-fXn5x4.js";import{M as T}from"./typing-BOKmFwfh.js";const V=B({name:"ImportJsonModal",components:{CodeEditor:J,Upload:O,Modal:w},setup(){const{createMessage:e}=_(),o=N({visible:!1,json:`{
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
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:a}=k(),d=()=>{o.visible=!1},c=()=>{o.visible=!0},p=()=>{try{const t=JSON.parse(o.json);t.schemas&&D(t.schemas,s=>{F(s)}),a.setFormConfig(u(i({},t),{activeKey:1,currentItem:{component:""}})),d(),e.success("导入成功")}catch(t){e.error("导入失败，数据格式不对")}};return u(i({handleImportJson:p,beforeUpload:t=>{const s=new FileReader;return s.readAsText(t),s.onload=function(){o.json=this.result,p()},!1},handleCancel:d,showModal:c},S(o)),{MODE:T})}}),z={class:"v-json-box"};function A(e,o,a,d,c,p){const f=r("CodeEditor"),t=r("a-button"),s=r("Upload"),v=r("Modal");return $(),x(v,{title:"JSON数据",open:e.visible,onOk:e.handleImportJson,onCancel:e.handleCancel,cancelText:"关闭",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[l(t,{onClick:e.handleCancel},{default:n(()=>o[1]||(o[1]=[m("取消")])),_:1},8,["onClick"]),l(s,{class:"upload-button",beforeUpload:e.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[l(t,{type:"primary"},{default:n(()=>o[2]||(o[2]=[m("导入json文件")])),_:1})]),_:1},8,["beforeUpload"]),l(t,{type:"primary",onClick:e.handleImportJson},{default:n(()=>o[3]||(o[3]=[m("确定")])),_:1},8,["onClick"])]),default:n(()=>[o[4]||(o[4]=h("p",{class:"hint-box"},"导入格式如下:",-1)),h("div",z,[l(f,{value:e.json,"onUpdate:value":o[0]||(o[0]=y=>e.json=y),ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["open","onOk","onCancel"])}const P=g(V,[["render",A],["__scopeId","data-v-62ebfefa"]]);export{P as default};
