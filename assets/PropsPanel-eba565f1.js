import{_ as C}from"./FormProps.vue_vue_type_script_setup_true_name_FormProps_lang-c30a7f2c.js";import{_ as y}from"./FormItemProps.vue_vue_type_script_setup_true_name_FormItemProps_lang-74f93958.js";import b from"./ComponentProps-65832e4d.js";import v from"./FormItemColumnProps-333b9e29.js";import{u as k}from"./useFormDesignState-add0a698.js";import{c}from"./formItemConfig-be0011d0.js";import{a9 as F,af as $}from"./antd-8e9c6fb8.js";import{d as g,c as T,a7 as t,Z as e,_ as I,k as s,a6 as r,a5 as n,ac as K}from"./vue-ae6a2213.js";import{W as B}from"./index.js";import"./formItemPropsConfig-5ec2cd46.js";import"./RuleProps-dee008fd.js";import"./index-a6481d01.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-e84e3d3d.js";import"./useFormItem-e445be9f.js";import"./FormOptions-bfe6850f.js";import"./componentMap-ee65c508.js";import"./index-470a7b7c.js";import"./useWindowSizeFn-be729167.js";import"./useSortable-1cd8f8b5.js";import"./index-949a3570.js";import"./onMountedOrActivated-d6e0a436.js";import"./index-81505b2a.js";import"./copyTextToClipboard-6d09c6e8.js";import"./index-58c143a0.js";import"./index-5bf3c444.js";import"./sortable.esm-9a942543.js";const E=g({name:"PropsPanel",components:{FormProps:C,FormItemProps:y,ComponentProps:b,ComponentColumnProps:v,Tabs:F,TabPane:$},setup(){const{formConfig:o}=k(),m=T(()=>c.find(i=>{var a;return i.component===((a=o.value.currentItem)==null?void 0:a.component)}));return{formConfig:o,customComponents:c,slotProps:m}}});function S(o,m,i,a,w,A){const _=t("FormProps"),p=t("TabPane"),u=t("FormItemProps"),f=t("ComponentColumnProps"),l=t("ComponentProps"),P=t("Tabs");return e(),I("div",null,[s(P,{activeKey:o.formConfig.activeKey,"onUpdate:activeKey":m[0]||(m[0]=d=>o.formConfig.activeKey=d),tabBarStyle:{margin:0}},{default:r(()=>[(e(),n(p,{key:1,tab:"表单"},{default:r(()=>[s(_)]),_:1})),(e(),n(p,{key:2,tab:"控件"},{default:r(()=>[s(u)]),_:1})),(e(),n(p,{key:3,tab:"栅格"},{default:r(()=>[s(f)]),_:1})),(e(),n(p,{key:4,tab:"组件"},{default:r(()=>[o.slotProps?K(o.$slots,o.slotProps.component+"Props",{key:0},void 0,!0):(e(),n(l,{key:1}))]),_:3}))]),_:3},8,["activeKey"])])}const mo=B(E,[["render",S],["__scopeId","data-v-3bf09025"]]);export{mo as default};