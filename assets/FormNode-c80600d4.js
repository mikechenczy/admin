var I=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var n=(e,o,t)=>o in e?I(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,i=(e,o)=>{for(var t in o||(o={}))F.call(o,t)&&n(e,t,o[t]);if(a)for(var t of a(o))k.call(o,t)&&n(e,t,o[t]);return e},p=(e,o)=>g(e,C(o));import v from"./FormNodeOperate-60435bca.js";import{u as N}from"./useFormDesignState-add0a698.js";import S from"./index-c7d873c1.js";import{d as b,r as y,I as V,a7 as c,Z as $,_ as B,$ as f,k as d,a0 as O,a1 as _,B as D}from"./vue-ae6a2213.js";import{W as w}from"./index.js";import"./index-a6481d01.js";import"./antd-8e9c6fb8.js";import"./formItemConfig-112cd72d.js";import"./componentMap-78462e6d.js";import"./useFormItem-e445be9f.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-e84e3d3d.js";import"./index-470a7b7c.js";import"./useWindowSizeFn-be729167.js";import"./useSortable-1cd8f8b5.js";import"./index-949a3570.js";import"./onMountedOrActivated-d6e0a436.js";import"./index-81505b2a.js";import"./copyTextToClipboard-6d09c6e8.js";import"./index-58c143a0.js";import"./index-ca06cd68.js";import"./sortable.esm-9a942543.js";const M=b({name:"FormNode",components:{VFormItem:S,FormNodeOperate:v},props:{schema:{type:Object,required:!0}},setup(e){const{formConfig:o,formDesignMethods:t}=N(),r=y({}),m=()=>{t.handleSetSelectItem(e.schema)};return p(i({},V(r)),{handleSelectItem:m,formConfig:o})}}),j={class:"form-item-box"},q={class:"show-key-box"};function z(e,o,t,r,m,E){var s;const l=c("VFormItem"),h=c("FormNodeOperate");return $(),B("div",{class:_(["drag-move-box",{active:e.schema.key===((s=e.formConfig.currentItem)==null?void 0:s.key)}]),onClick:o[0]||(o[0]=D((...u)=>e.handleSelectItem&&e.handleSelectItem(...u),["stop"]))},[f("div",j,[d(l,{formConfig:e.formConfig,schema:e.schema},null,8,["formConfig","schema"])]),f("div",q,O(e.schema.label+(e.schema.field?"/"+e.schema.field:"")),1),d(h,{schema:e.schema,currentItem:e.formConfig.currentItem},null,8,["schema","currentItem"])],2)}const ae=w(M,[["render",z]]);export{ae as default};