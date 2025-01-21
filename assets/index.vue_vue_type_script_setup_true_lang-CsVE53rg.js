var _=Object.defineProperty;var h=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var b=(e,n,t)=>n in e?_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))M.call(n,t)&&b(e,t,n[t]);if(h)for(var t of h(n))w.call(n,t)&&b(e,t,n[t]);return e};var f=(e,n,t)=>new Promise((s,o)=>{var a=r=>{try{i(t.next(r))}catch(c){o(c)}},l=r=>{try{i(t.throw(r))}catch(c){o(c)}},i=r=>r.done?s(r.value):Promise.resolve(r.value).then(a,l);i((t=t.apply(e,n)).next())});import{d as defineComponent,f as ref,Z as openBlock,a5 as createBlock,a6 as withCtx,$ as createBaseVNode,k as createVNode,u as unref,aa as mergeProps,J as toRaw,aj as useRoute,r as reactive,y as nextTick,S as useRouter,a7 as resolveComponent,_ as createElementBlock,a1 as normalizeClass,a9 as createCommentVNode,F as Fragment,a8 as renderList,G as createTextVNode,a0 as toDisplayString,m as withDirectives,A as vShow}from"./vue-C-fXn5x4.js";import{D as useAppInject,Y as useGlobSetting,aq as getEntity,ar as getTableData,as as useComputed,at as runJavaCmd,au as querystring,av as getToken,aw as updateData,ax as saveData,ay as useMessage,az as deleteData}from"./index.js";import{a as useTable,g as getAnnoSearchForm,d as getAnnoAddForm,e as getAnnoEditForm,f as getAnnoDescriptionForm,h as getColumns,b as _sfc_main$3,c as _sfc_main$4,i as _sfc_main$8}from"./useForm-RgYvicpQ.js";import{P as PageWrapper}from"./index-BLwIEHBJ.js";import{_ as _sfc_main$2}from"./AnnoTableTree.vue_vue_type_script_setup_true_lang-BXqEb46D.js";import{a as useModalInner,B as BasicModal,u as useModal}from"./index-Ct8wWWt8.js";import{_ as _sfc_main$6,a as _sfc_main$7}from"./AnnoModal.vue_vue_type_script_setup_true_lang-thJ2nk6b.js";import{_ as _sfc_main$9}from"./ButtonModal.vue_vue_type_script_setup_true_lang-DEtbjubr.js";import{D as Description}from"./index-dUtUCzOM.js";import{_ as _sfc_main$5}from"./FormWithTabs.vue_vue_type_script_setup_true_lang-xFspBcMZ.js";const _hoisted_1={class:"h-screen"},_sfc_main$1=defineComponent({__name:"index",setup(e){const{getIsMobile:n}=useAppInject(),[t,{setModalProps:s,closeModal:o}]=useModalInner(u=>f(this,null,function*(){i.value=toRaw(u.modalTitle),r.value=toRaw(u.modalMinHeight),c.value=toRaw(u.modalHeight),d.value=toRaw(u.modalWidth),a.value=toRaw(u.rowData),l.value=toRaw(u.descriptionSchemaParam),s({confirmLoading:!1,title:i,defaultFullscreen:n.value,width:d,minHeight:c,height:r,showOkBtn:!1,cancelText:"关闭"})})),a=ref({name:"测试",age:12,address:"test"}),l=ref([{label:"姓名",field:"name"},{label:"年龄",field:"age"},{label:"地址",field:"address"}]),i=ref("Iframe Modal"),r=ref("500px"),c=ref("500px"),d=ref("800px");function m(){}function p(){return f(this,null,function*(){s({confirmLoading:!1}),o()})}return(u,C)=>(openBlock(),createBlock(unref(BasicModal),mergeProps(u.$attrs,{onRegister:unref(t),title:"测试",onOk:p,onCancel:m}),{default:withCtx(()=>[createBaseVNode("div",_hoisted_1,[createVNode(unref(Description),{column:3,data:a.value,schema:l.value},null,8,["data","schema"])])]),_:1},16,["onRegister"]))}}),_sfc_main=defineComponent({__name:"index",props:{entityName:{}},setup(__props){const{createMessage}=useMessage(),route=useRoute(),props=__props;let clazz=route.name;route.name=="BasicPreview"&&(clazz=props.entityName);const{apiUrl}=useGlobSetting(),config=reactive({enableLeftTree:!1}),[registerModal,{openModal}]=useModal(),[registerM2mModal,{openModal:openM2modal}]=useModal(),[registerButtonModal,{openModal:openButtonModal}]=useModal(),[registerIFrameModal,{openModal:openIFrameModal}]=useModal(),[registerDescriptionModal,{openModal:openDescriptionModal}]=useModal(),searchInfo=reactive({}),[registerTable,{reload,setProps,getForm,getSelectRows}]=useTable({}),{getIsMobile}=useAppInject(),AnnoFormSchema=reactive({addScheme:[],editScheme:[]}),descriptionSchema=ref([]),api=ref();let getActions=e=>[],getMoreActions=e=>[];const rowKey=ref("id");getEntity(clazz).then(e=>{api.value=getTableData(e.entityName,e.annoTree.parentKey,e.annoTree.key,e.annoTree.displayAsTree);const n=getAnnoSearchForm(e.columns,getIsMobile);AnnoFormSchema.addScheme=getAnnoAddForm(e.columns),AnnoFormSchema.editScheme=getAnnoEditForm(e.columns),descriptionSchema.value=getAnnoDescriptionForm(e.columns),rowKey.value=e.pkColumn.javaName;let t=(AnnoFormSchema.editScheme.length>0?1:0)+(e.canRemove?1:0)+1,s=getIsMobile.value?1-t:5-t;getActions=useComputed(o=>{let a=e.columnButtons.slice(0,s).map(l=>({icon:l.icon,tooltip:l.name,onClick:columnBtnClick.bind(null,{props:o,option:l})}));return[{icon:"clarity:info-standard-line",tooltip:"查看详情",onClick:handleView.bind(null,o)},{icon:"clarity:note-edit-line",tooltip:"编辑资料",onClick:handleEdit.bind(null,o),ifShow:l=>AnnoFormSchema.editScheme.length>0},{icon:"ant-design:delete-outlined",color:"error",tooltip:"删除此项",popConfirm:{title:"是否确认删除",placement:"left",confirm:handleDelete.bind(null,o)},ifShow:l=>e.canRemove},...a]}),getMoreActions=useComputed(o=>e.columnButtons.length<s?[]:e.columnButtons.slice(s).map(a=>({label:a.name,tooltip:a.name,onClick:columnBtnClick.bind(null,{props:o,option:a})}))),Object.assign(config,e),setProps({pagination:{pageSize:10},title:config.name,api,rowSelection:{},showIndexColumn:!getIsMobile.value,canResize:!getIsMobile.value,resizeHeightOffset:10,rowKey:e.pkColumn.javaName,columns:getColumns(e.columns),indexColumnProps:{fixed:"left",width:50},formConfig:{rowProps:{gutter:16,justify:"start"},labelWidth:100,labelAlign:"left",schemas:n,autoSubmitOnEnter:!0,autoAdvancedLine:50,showAdvancedButton:!1,showSubmitButton:(n||[]).filter(o=>o.show({model:{}})).length>0,showResetButton:(n||[]).filter(o=>o.show({model:{}})).length>0},useSearchForm:n.length>0,showTableSetting:!0,bordered:!0,beforeFetch(o){return(!o.anOrderList||o.anOrderList.length===0)&&(o.anOrderList=e.annoOrder),o},actionColumn:{width:getIsMobile.value?65:(n.length>0?130:100)+(e.columnButtons.length>0?60:0),title:"操作",dataIndex:"action"}}),nextTick(()=>{const o=getForm();o.setFieldsValue(route.query),o.submit()})});function handleCreate(){openModal(!0,{isUpdate:!1})}const router=useRouter();function columnBtnClick({props:e,option:n}){let s=n.baseForm;getEntity(s).then(o=>{let a=o;a?openButtonModal(!0,{title:n.name,formSchema:getAnnoAddForm(a.columns),parentOptions:n,parentProps:e}):handleBtnSuccess({values:{},closeModal:()=>{},parentOptions:n,parentProps:e})})}function handleBtnSuccess(e){return f(this,arguments,function*({values,closeModal,parentOptions,parentProps}){let columnParentOptions=parentOptions;if(columnParentOptions.javaCmd.enable&&runJavaCmd(clazz,g({annoJavaCmdId:columnParentOptions.javaCmd.id,_extra:values},parentProps)).then(res=>{let data=res.trimStart();data?data.startsWith("js://")?eval(data.substring(5)):data.startsWith("iframe://")?openIFrameModal(!0,{modalTitle:"预览框",fullScreen:!0,modalWidth:900,modalHeight:500,iframeSrc:`${data.substring(9)}&_t=${Date.now()}`}):createMessage.success(data):createMessage.success("操作成功"),reload(),closeModal()}),columnParentOptions.jumpUrl&&(columnParentOptions.jumpUrl=columnParentOptions.jumpUrl.replace("${props}",JSON.stringify(parentProps)),closeModal(),window.open(columnParentOptions.jumpUrl)),columnParentOptions.jsCmd&&(eval(columnParentOptions.jsCmd),closeModal()),columnParentOptions.m2mJoinButton.enable&&(openM2modal(!0,{props:parentProps,option:columnParentOptions,isAdd:!1}),closeModal()),columnParentOptions.o2mJoinButton.enable){const n={};n[columnParentOptions.o2mJoinButton.targetJavaField]=parentProps[columnParentOptions.o2mJoinButton.thisJavaField],closeModal(),yield router.push({name:columnParentOptions.o2mJoinButton.targetClass,query:n})}columnParentOptions.annoTpl.enable&&(openIFrameModal(!0,{modalTitle:columnParentOptions.name,modalWidth:columnParentOptions.annoTpl.windowWidth,modalHeight:columnParentOptions.annoTpl.windowHeight,iframeSrc:`${apiUrl}/anno-admin-api/annoTpl?_tplId=${columnParentOptions.annoTpl.id}&${querystring.stringify(parentProps)}&_tokenValue=${getToken()}`}),closeModal())})}function handleEdit(e){openModal(!0,{record:e,isUpdate:!0})}function handleDelete(e){const n={};n[config.pkColumn.javaName]=e[config.pkColumn.javaName],deleteData(config.thisClass,n).then(t=>{reload()})}function handleSuccess(s){return f(this,arguments,function*({isUpdate:e,values:n,closeModal:t}){var o,a;if(e){if(((o=config.annoTree)!=null&&o.enable||(a=config.annoTree)!=null&&a.displayAsTree)&&n[config.annoTree.key]==n[config.annoTree.parentKey]){createMessage.error("不能选择自己为自己的子节点");return}yield updateData(config.thisClass,n).then(l=>{reload(),t(),createMessage.success("更新成功")})}else yield saveData(config.thisClass,n).then(l=>{reload(),t(),createMessage.success("保存成功")})})}function handleSelect(e=""){var n,t;searchInfo[((n=config.annoLeftTree)==null?void 0:n.catKey)||((t=config.annoTree)==null?void 0:t.key)||"__"]=e,getForm().setFieldsValue(searchInfo),getForm().submit()}function handleView(e){openDescriptionModal(!0,{modalTitle:"详情",modalWidth:900,modalHeight:500,rowData:e,descriptionSchemaParam:descriptionSchema})}const handleTableClick=e=>{let n=e.baseForm,t=getForm().getFieldsValue(),s=g({selectRows:getSelectRows()},t);getEntity(n).then(o=>{let a=o;a?openButtonModal(!0,{title:e.name,formSchema:getAnnoAddForm(a.columns),parentOptions:e,parentProps:s}):handleBtnSuccess({values:{},closeModal:()=>{},parentOptions:e,parentProps:s})})};return(e,n)=>{const t=resolveComponent("a-button");return openBlock(),createBlock(unref(PageWrapper),{dense:"",contentClass:unref(getIsMobile)?"flow-root px-16px pt-16px":"flex px-16px pt-16px",class:"min-h-full rounded-md"},{default:withCtx(()=>{var s,o,a,l,i,r,c,d;return[config.formTable?createCommentVNode("",!0):(openBlock(),createElementBlock(Fragment,{key:0},[(s=config.annoLeftTree)!=null&&s.enable||(o=config.annoTree)!=null&&o.displayAsTree?(openBlock(),createBlock(_sfc_main$2,{key:0,"left-tree-name":(a=config.annoLeftTree)!=null&&a.enable?config.annoLeftTree.leftTreeName:config.name,"left-tree-cat-key":(l=config.annoLeftTree)!=null&&l.enable?config.annoLeftTree.catKey:(i=config.annoTree)==null?void 0:i.key,"left-tree-class":(r=config.annoLeftTree)!=null&&r.enable?config.annoLeftTree.treeClass:config.entityName,class:normalizeClass(unref(getIsMobile)?"w-full xl:w-1/5 b-r-1 b-r-#eee h-64":"w-1/4 xl:w-1/5 b-r-1 b-r-#eee min-h-86svh max-h-100svh"),onSelect:handleSelect},null,8,["left-tree-name","left-tree-cat-key","left-tree-class","class"])):createCommentVNode("",!0),createVNode(unref(_sfc_main$4),{onRegister:unref(registerTable),class:normalizeClass(((c=config.annoLeftTree)!=null&&c.enable||(d=config.annoTree)!=null&&d.displayAsTree)&&!unref(getIsMobile)?"w-3/4 xl:w-4/5":"w-4/4 xl:w-5/5"),searchInfo},{toolbar:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(config.tableButtons,m=>(openBlock(),createBlock(t,{type:"primary",onClick:p=>handleTableClick(m)},{default:withCtx(()=>[createTextVNode(toDisplayString(m.name),1)]),_:2},1032,["onClick"]))),256)),withDirectives(createVNode(t,{type:"primary",onClick:handleCreate},{default:withCtx(()=>[createTextVNode("新增"+toDisplayString(config.name),1)]),_:1},512),[[vShow,(AnnoFormSchema.addScheme||[]).length>0]])]),bodyCell:withCtx(({column:m,record:p})=>[m.key==="action"?(openBlock(),createBlock(unref(_sfc_main$3),{key:0,divider:!1,actions:unref(getActions)(p),dropDownActions:unref(getMoreActions)(p,"more")},null,8,["actions","dropDownActions"])):createCommentVNode("",!0)]),_:1},8,["onRegister","class","searchInfo"])],64)),config.formTable?(openBlock(),createBlock(_sfc_main$5,{key:1,api:unref(api),title:config.name,rowKey:unref(rowKey),onSuccess:handleSuccess,"table-buttons":config.tableButtons,"column-buttons":config.columnButtons,"handle-table-click":handleTableClick,"handle-column-click":columnBtnClick,"edit-schemas":AnnoFormSchema.editScheme||[],"add-schemas":AnnoFormSchema.addScheme||[]},null,8,["api","title","rowKey","table-buttons","column-buttons","edit-schemas","add-schemas"])):createCommentVNode("",!0),createVNode(_sfc_main$6,{onRegister:unref(registerModal),"column-m2m-button":(config.columnButtons||[]).filter(m=>m.m2mJoinButton.enable),"add-schema":AnnoFormSchema.addScheme||[],"edit-schema":AnnoFormSchema.editScheme||[],"row-key":unref(rowKey),onSuccess:handleSuccess},null,8,["onRegister","column-m2m-button","add-schema","edit-schema","row-key"]),createVNode(_sfc_main$7,{onRegister:unref(registerM2mModal)},null,8,["onRegister"]),createVNode(_sfc_main$8,{onRegister:unref(registerIFrameModal)},null,8,["onRegister"]),createVNode(_sfc_main$1,{onRegister:unref(registerDescriptionModal)},null,8,["onRegister"]),createVNode(_sfc_main$9,{onRegister:unref(registerButtonModal),onSuccess:handleBtnSuccess},null,8,["onRegister"])]}),_:1},8,["contentClass"])}}});export{_sfc_main as _};
