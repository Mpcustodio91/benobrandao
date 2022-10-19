"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[428,902],{3744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}},5222:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(821),r={class:"text-sm text-gray-600"};const l={__name:"ActionMessage",props:{on:Boolean},setup:function(e){return function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(o.Transition,{"leave-active-class":"transition ease-in duration-1000","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,o.withCtx)((function(){return[(0,o.withDirectives)((0,o.createElementVNode)("div",r,[(0,o.renderSlot)(t.$slots,"default")],512),[[o.vShow,e.on]])]})),_:3})])}}}},3831:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(821),r=n(7829),l={class:"md:grid md:grid-cols-3 md:gap-6"},a={class:"mt-5 md:mt-0 md:col-span-2"},s={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"};const c={__name:"ActionSection",setup:function(e){return function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",l,[(0,o.createVNode)(r.Z,null,{title:(0,o.withCtx)((function(){return[(0,o.renderSlot)(e.$slots,"title")]})),description:(0,o.withCtx)((function(){return[(0,o.renderSlot)(e.$slots,"description")]})),_:3}),(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",s,[(0,o.renderSlot)(e.$slots,"content")])])])}}}},7041:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(821),r=["type"];const l={__name:"Button",props:{type:{type:String,default:"submit"}},setup:function(e){return function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},[(0,o.renderSlot)(t.$slots,"default")],8,r)}}}},5300:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(821),r=["value"];const l={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup:function(e,t){var n=t.emit,l=e,a=(0,o.computed)({get:function(){return l.checked},set:function(e){n("update:checked",e)}});return function(t,n){return(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("input",{"onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,o.isRef)(a)?a.value=e:null}),type:"checkbox",value:e.value,class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,r)),[[o.vModelCheckbox,(0,o.unref)(a)]])}}}},2252:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(821),r=["type"];const l={__name:"DangerButton",props:{type:{type:String,default:"button"}},setup:function(e){return function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)("button",{type:e.type,class:"inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25 transition"},[(0,o.renderSlot)(t.$slots,"default")],8,r)}}}},7100:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(821),r=n(312),l={class:"px-6 py-4"},a={class:"text-lg"},s={class:"mt-4"},c={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"};const i={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup:function(e,t){var n=t.emit,i=function(){n("close")};return function(t,n){return(0,o.openBlock)(),(0,o.createBlock)(r.Z,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:i},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",a,[(0,o.renderSlot)(t.$slots,"title")]),(0,o.createElementVNode)("div",s,[(0,o.renderSlot)(t.$slots,"content")])]),(0,o.createElementVNode)("div",c,[(0,o.renderSlot)(t.$slots,"footer")])]})),_:3},8,["show","max-width","closeable"])}}}},6036:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(821),r=n(7829),l={class:"md:grid md:grid-cols-3 md:gap-6"},a={class:"mt-5 md:mt-0 md:col-span-2"},s={class:"grid grid-cols-6 gap-6"},c={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"};const i={__name:"FormSection",emits:["submitted"],setup:function(e){var t=(0,o.computed)((function(){return!!(0,o.useSlots)().actions}));return function(e,n){return(0,o.openBlock)(),(0,o.createElementBlock)("div",l,[(0,o.createVNode)(r.Z,null,{title:(0,o.withCtx)((function(){return[(0,o.renderSlot)(e.$slots,"title")]})),description:(0,o.withCtx)((function(){return[(0,o.renderSlot)(e.$slots,"description")]})),_:3}),(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("form",{onSubmit:n[0]||(n[0]=(0,o.withModifiers)((function(t){return e.$emit("submitted")}),["prevent"]))},[(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(["px-4 py-5 bg-white sm:p-6 shadow",(0,o.unref)(t)?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[(0,o.createElementVNode)("div",s,[(0,o.renderSlot)(e.$slots,"form")])],2),(0,o.unref)(t)?((0,o.openBlock)(),(0,o.createElementBlock)("div",c,[(0,o.renderSlot)(e.$slots,"actions")])):(0,o.createCommentVNode)("",!0)],32)])])}}}},1959:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(821),r=["value"];const l={__name:"Input",props:{modelValue:String},emits:["update:modelValue"],setup:function(e,t){var n=t.expose,l=(0,o.ref)(null);return(0,o.onMounted)((function(){l.value.hasAttribute("autofocus")&&l.value.focus()})),n({focus:function(){return l.value.focus()}}),function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)("input",{ref_key:"input",ref:l,class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:n[0]||(n[0]=function(e){return t.$emit("update:modelValue",e.target.value)})},null,40,r)}}}},604:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(821),r={class:"text-sm text-red-600"};const l={__name:"InputError",props:{message:String},setup:function(e){return function(t,n){return(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("p",r,(0,o.toDisplayString)(e.message),1)],512)),[[o.vShow,e.message]])}}}},7088:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(821),r={class:"block font-medium text-sm text-gray-700"},l={key:0},a={key:1};const s={__name:"Label",props:{value:String},setup:function(e){return function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)("label",r,[e.value?((0,o.openBlock)(),(0,o.createElementBlock)("span",l,(0,o.toDisplayString)(e.value),1)):((0,o.openBlock)(),(0,o.createElementBlock)("span",a,[(0,o.renderSlot)(t.$slots,"default")]))])}}}},312:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(821),r={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},l=[(0,o.createElementVNode)("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1)];const a={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup:function(e,t){var n=t.emit,a=e;(0,o.watch)((function(){return a.show}),(function(){a.show?document.body.style.overflow="hidden":document.body.style.overflow=null}));var s=function(){a.closeable&&n("close")},c=function(e){"Escape"===e.key&&a.show&&s()};(0,o.onMounted)((function(){return document.addEventListener("keydown",c)})),(0,o.onUnmounted)((function(){document.removeEventListener("keydown",c),document.body.style.overflow=null}));var i=(0,o.computed)((function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[a.maxWidth]}));return function(t,n){return(0,o.openBlock)(),(0,o.createBlock)(o.Teleport,{to:"body"},[(0,o.createVNode)(o.Transition,{"leave-active-class":"duration-200"},{default:(0,o.withCtx)((function(){return[(0,o.withDirectives)((0,o.createElementVNode)("div",r,[(0,o.createVNode)(o.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,o.withCtx)((function(){return[(0,o.withDirectives)((0,o.createElementVNode)("div",{class:"fixed inset-0 transform transition-all",onClick:s},l,512),[[o.vShow,e.show]])]})),_:1}),(0,o.createVNode)(o.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:(0,o.withCtx)((function(){return[(0,o.withDirectives)((0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",(0,o.unref)(i)])},[e.show?(0,o.renderSlot)(t.$slots,"default",{key:0}):(0,o.createCommentVNode)("",!0)],2),[[o.vShow,e.show]])]})),_:3})],512),[[o.vShow,e.show]])]})),_:3})])}}}},2575:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(821),r=["type"];const l={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup:function(e){return function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition"},[(0,o.renderSlot)(t.$slots,"default")],8,r)}}}},6634:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(821),r={class:"hidden sm:block"},l=[(0,o.createElementVNode)("div",{class:"py-8"},[(0,o.createElementVNode)("div",{class:"border-t border-gray-200"})],-1)];const a={},s=(0,n(3744).Z)(a,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,l)}]])},7829:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(821),r={class:"md:col-span-1 flex justify-between"},l={class:"px-4 sm:px-0"},a={class:"text-lg font-medium text-gray-900"},s={class:"mt-1 text-sm text-gray-600"},c={class:"px-4 sm:px-0"};const i={},u=(0,n(3744).Z)(i,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("h3",a,[(0,o.renderSlot)(e.$slots,"title")]),(0,o.createElementVNode)("p",s,[(0,o.renderSlot)(e.$slots,"description")])]),(0,o.createElementVNode)("div",c,[(0,o.renderSlot)(e.$slots,"aside")])])}]])},7452:(e,t,n)=>{n.d(t,{Z:()=>Q});var o=n(821),r=n(9680),l=n(9038),a={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s=[(0,o.createElementVNode)("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),(0,o.createElementVNode)("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1)];const c={},i=(0,n(3744).Z)(c,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",a,s)}]]);var u={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},d={class:"flex items-center justify-between flex-wrap"},m={class:"w-0 flex-1 flex items-center min-w-0"},f={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},p=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)],v={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},x=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1)],h={class:"ml-3 font-medium text-sm text-white truncate"},g={class:"shrink-0 sm:ml-3"},k=[(0,o.createElementVNode)("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)];const y={__name:"Banner",setup:function(e){var t=(0,o.ref)(!0),n=(0,o.computed)((function(){var e;return(null===(e=(0,l.qt)().props.value.jetstream.flash)||void 0===e?void 0:e.bannerStyle)||"success"})),r=(0,o.computed)((function(){var e;return(null===(e=(0,l.qt)().props.value.jetstream.flash)||void 0===e?void 0:e.banner)||""}));return function(e,l){return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[t.value&&(0,o.unref)(r)?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:0,class:(0,o.normalizeClass)({"bg-indigo-500":"success"==(0,o.unref)(n),"bg-red-700":"danger"==(0,o.unref)(n)})},[(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("span",{class:(0,o.normalizeClass)(["flex p-2 rounded-lg",{"bg-indigo-600":"success"==(0,o.unref)(n),"bg-red-600":"danger"==(0,o.unref)(n)}])},["success"==(0,o.unref)(n)?((0,o.openBlock)(),(0,o.createElementBlock)("svg",f,p)):(0,o.createCommentVNode)("",!0),"danger"==(0,o.unref)(n)?((0,o.openBlock)(),(0,o.createElementBlock)("svg",v,x)):(0,o.createCommentVNode)("",!0)],2),(0,o.createElementVNode)("p",h,(0,o.toDisplayString)((0,o.unref)(r)),1)]),(0,o.createElementVNode)("div",g,[(0,o.createElementVNode)("button",{type:"button",class:(0,o.normalizeClass)(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":"success"==(0,o.unref)(n),"hover:bg-red-600 focus:bg-red-600":"danger"==(0,o.unref)(n)}]),"aria-label":"Dismiss",onClick:l[0]||(l[0]=(0,o.withModifiers)((function(e){return t.value=!1}),["prevent"]))},k,2)])])])],2)):(0,o.createCommentVNode)("",!0)])}}};const w={__name:"NavLink",props:{href:String,active:Boolean},setup:function(e){var t=e,n=(0,o.computed)((function(){return t.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition"}));return function(t,r){return(0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(l.rU),{href:e.href,class:(0,o.normalizeClass)((0,o.unref)(n))},{default:(0,o.withCtx)((function(){return[(0,o.renderSlot)(t.$slots,"default")]})),_:3},8,["href","class"])}}},b={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup:function(e){var t=e,n=(0,o.computed)((function(){return t.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition"}));return function(t,r){return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,["button"==e.as?((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:0,class:(0,o.normalizeClass)([(0,o.unref)(n),"w-full text-left"])},[(0,o.renderSlot)(t.$slots,"default")],2)):((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(l.rU),{key:1,href:e.href,class:(0,o.normalizeClass)((0,o.unref)(n))},{default:(0,o.withCtx)((function(){return[(0,o.renderSlot)(t.$slots,"default")]})),_:3},8,["href","class"]))])}}};var V={class:"min-h-screen bg-gray-100"},N={class:"bg-white border-b border-gray-100"},E={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},B={class:"flex justify-between h-16"},C={class:"flex"},_={class:"shrink-0 flex items-center"},S={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},Z=(0,o.createTextVNode)(" Dashboard "),T=(0,o.createTextVNode)(" Empresas "),$=(0,o.createTextVNode)(" Procurações "),P=(0,o.createTextVNode)(" Contratos "),A={class:"-mr-2 flex items-center sm:hidden"},D={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},M={class:"pt-2 pb-3 space-y-1"},j=(0,o.createTextVNode)(" Dashboard "),z={class:"pt-4 pb-1 border-t border-gray-200"},I={class:"flex items-center px-4"},L={key:0,class:"shrink-0 mr-3"},F=["src","alt"],U={class:"font-medium text-base text-gray-800"},W={class:"font-medium text-sm text-gray-500"},O={class:"mt-3 space-y-1"},q=(0,o.createTextVNode)(" Profile "),R=(0,o.createTextVNode)(" API Tokens "),Y=["onSubmit"],G=(0,o.createTextVNode)(" Log Out "),H={key:0,class:"bg-white shadow"},J={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},K={class:"container mt-5"};const Q={__name:"AppLayout",props:{title:String},setup:function(e){var t=(0,o.ref)(!1),n=function(){r.Inertia.post(route("logout"))};return function(r,a){return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)((0,o.unref)(l.Fb),{title:e.title},null,8,["title"]),(0,o.createVNode)(y),(0,o.createElementVNode)("div",V,[(0,o.createElementVNode)("nav",N,[(0,o.createElementVNode)("div",E,[(0,o.createElementVNode)("div",B,[(0,o.createElementVNode)("div",C,[(0,o.createElementVNode)("div",_,[(0,o.createVNode)((0,o.unref)(l.rU),{href:r.route("dashboard")},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(i,{class:"block h-9 w-auto"})]})),_:1},8,["href"])]),(0,o.createElementVNode)("div",S,[(0,o.createVNode)(w,{href:r.route("dashboard"),active:r.route().current("dashboard")},{default:(0,o.withCtx)((function(){return[Z]})),_:1},8,["href","active"]),(0,o.createVNode)(w,{href:r.route("companies.index"),active:r.route().current("companies.index")},{default:(0,o.withCtx)((function(){return[T]})),_:1},8,["href","active"]),(0,o.createVNode)(w,{href:r.route("letter-of-attorneys.index"),active:r.route().current("letter-of-attorneys.index")},{default:(0,o.withCtx)((function(){return[$]})),_:1},8,["href","active"]),(0,o.createVNode)(w,{href:r.route("contracts.index"),active:r.route().current("contracts.index")},{default:(0,o.withCtx)((function(){return[P]})),_:1},8,["href","active"])])]),(0,o.createElementVNode)("div",A,[(0,o.createElementVNode)("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:a[0]||(a[0]=function(e){return t.value=!t.value})},[((0,o.openBlock)(),(0,o.createElementBlock)("svg",D,[(0,o.createElementVNode)("path",{class:(0,o.normalizeClass)({hidden:t.value,"inline-flex":!t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),(0,o.createElementVNode)("path",{class:(0,o.normalizeClass)({hidden:!t.value,"inline-flex":t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)([{block:t.value,hidden:!t.value},"sm:hidden"])},[(0,o.createElementVNode)("div",M,[(0,o.createVNode)(b,{href:r.route("dashboard"),active:r.route().current("dashboard")},{default:(0,o.withCtx)((function(){return[j]})),_:1},8,["href","active"])]),(0,o.createElementVNode)("div",z,[(0,o.createElementVNode)("div",I,[r.$page.props.jetstream.managesProfilePhotos?((0,o.openBlock)(),(0,o.createElementBlock)("div",L,[(0,o.createElementVNode)("img",{class:"h-10 w-10 rounded-full object-cover",src:r.$page.props.user.profile_photo_url,alt:r.$page.props.user.name},null,8,F)])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("div",U,(0,o.toDisplayString)(r.$page.props.user.name),1),(0,o.createElementVNode)("div",W,(0,o.toDisplayString)(r.$page.props.user.email),1)])]),(0,o.createElementVNode)("div",O,[(0,o.createVNode)(b,{href:r.route("profile.show"),active:r.route().current("profile.show")},{default:(0,o.withCtx)((function(){return[q]})),_:1},8,["href","active"]),r.$page.props.jetstream.hasApiFeatures?((0,o.openBlock)(),(0,o.createBlock)(b,{key:0,href:r.route("api-tokens.index"),active:r.route().current("api-tokens.index")},{default:(0,o.withCtx)((function(){return[R]})),_:1},8,["href","active"])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("form",{method:"POST",onSubmit:(0,o.withModifiers)(n,["prevent"])},[(0,o.createVNode)(b,{as:"button"},{default:(0,o.withCtx)((function(){return[G]})),_:1})],40,Y)])])],2)]),r.$slots.header?((0,o.openBlock)(),(0,o.createElementBlock)("header",H,[(0,o.createElementVNode)("div",J,[(0,o.renderSlot)(r.$slots,"header")])])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("main",null,[(0,o.createElementVNode)("div",K,[(0,o.renderSlot)(r.$slots,"default")])])])])}}}},9428:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var o=n(821),r=n(902),l=n(7452),a=(0,o.createElementVNode)("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," API Tokens ",-1),s={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"};const c={__name:"Index",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup:function(e){return function(t,n){return(0,o.openBlock)(),(0,o.createBlock)(l.Z,{title:"API Tokens"},{header:(0,o.withCtx)((function(){return[a]})),default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("div",s,[(0,o.createVNode)(r.default,{tokens:e.tokens,"available-permissions":e.availablePermissions,"default-permissions":e.defaultPermissions},null,8,["tokens","available-permissions","default-permissions"])])])]})),_:1})}}}},902:(e,t,n)=>{n.r(t),n.d(t,{default:()=>re});var o=n(821),r=n(9038),l=n(5222),a=n(3831),s=n(7041),c=n(312),i={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},u={class:"sm:flex sm:items-start"},d=(0,o.createElementVNode)("div",{class:"mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[(0,o.createElementVNode)("svg",{class:"h-6 w-6 text-red-600",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])],-1),m={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},f={class:"text-lg"},p={class:"mt-2"},v={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"};const x={__name:"ConfirmationModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup:function(e,t){var n=t.emit,r=function(){n("close")};return function(t,n){return(0,o.openBlock)(),(0,o.createBlock)(c.Z,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:r},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",u,[d,(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("h3",f,[(0,o.renderSlot)(t.$slots,"title")]),(0,o.createElementVNode)("div",p,[(0,o.renderSlot)(t.$slots,"content")])])])]),(0,o.createElementVNode)("div",v,[(0,o.renderSlot)(t.$slots,"footer")])]})),_:3},8,["show","max-width","closeable"])}}};var h=n(2252),g=n(7100),k=n(6036),y=n(1959),w=n(5300),b=n(604),V=n(7088),N=n(2575),E=n(6634),B=(0,o.createTextVNode)(" Create API Token "),C=(0,o.createTextVNode)(" API tokens allow third-party services to authenticate with our application on your behalf. "),_={class:"col-span-6 sm:col-span-4"},S={key:0,class:"col-span-6"},Z={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},T={class:"flex items-center"},$={class:"ml-2 text-sm text-gray-600"},P=(0,o.createTextVNode)(" Created. "),A=(0,o.createTextVNode)(" Create "),D={key:0},M={class:"mt-10 sm:mt-0"},j=(0,o.createTextVNode)(" Manage API Tokens "),z=(0,o.createTextVNode)(" You may delete any of your existing tokens if they are no longer needed. "),I={class:"space-y-6"},L={class:"flex items-center"},F={key:0,class:"text-sm text-gray-400"},U=["onClick"],W=["onClick"],O=(0,o.createTextVNode)(" API Token "),q=(0,o.createElementVNode)("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),R={key:0,class:"mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"},Y=(0,o.createTextVNode)(" Close "),G=(0,o.createTextVNode)(" API Token Permissions "),H={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},J={class:"flex items-center"},K={class:"ml-2 text-sm text-gray-600"},Q=(0,o.createTextVNode)(" Cancel "),X=(0,o.createTextVNode)(" Save "),ee=(0,o.createTextVNode)(" Delete API Token "),te=(0,o.createTextVNode)(" Are you sure you would like to delete this API token? "),ne=(0,o.createTextVNode)(" Cancel "),oe=(0,o.createTextVNode)(" Delete ");const re={__name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup:function(e){var t=e,n=(0,r.cI)({name:"",permissions:t.defaultPermissions}),c=(0,r.cI)({permissions:[]}),i=(0,r.cI)(),u=(0,o.ref)(!1),d=(0,o.ref)(null),m=(0,o.ref)(null),f=function(){n.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:function(){u.value=!0,n.reset()}})},p=function(){c.put(route("api-tokens.update",d.value),{preserveScroll:!0,preserveState:!0,onSuccess:function(){return d.value=null}})},v=function(){i.delete(route("api-tokens.destroy",m.value),{preserveScroll:!0,preserveState:!0,onSuccess:function(){return m.value=null}})};return function(t,r){return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(k.Z,{onSubmitted:f},{title:(0,o.withCtx)((function(){return[B]})),description:(0,o.withCtx)((function(){return[C]})),form:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",_,[(0,o.createVNode)(V.Z,{for:"name",value:"Name"}),(0,o.createVNode)(y.Z,{id:"name",modelValue:(0,o.unref)(n).name,"onUpdate:modelValue":r[0]||(r[0]=function(e){return(0,o.unref)(n).name=e}),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),(0,o.createVNode)(b.Z,{message:(0,o.unref)(n).errors.name,class:"mt-2"},null,8,["message"])]),e.availablePermissions.length>0?((0,o.openBlock)(),(0,o.createElementBlock)("div",S,[(0,o.createVNode)(V.Z,{for:"permissions",value:"Permissions"}),(0,o.createElementVNode)("div",Z,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.availablePermissions,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{key:e},[(0,o.createElementVNode)("label",T,[(0,o.createVNode)(w.Z,{checked:(0,o.unref)(n).permissions,"onUpdate:checked":r[1]||(r[1]=function(e){return(0,o.unref)(n).permissions=e}),value:e},null,8,["checked","value"]),(0,o.createElementVNode)("span",$,(0,o.toDisplayString)(e),1)])])})),128))])])):(0,o.createCommentVNode)("",!0)]})),actions:(0,o.withCtx)((function(){return[(0,o.createVNode)(l.Z,{on:(0,o.unref)(n).recentlySuccessful,class:"mr-3"},{default:(0,o.withCtx)((function(){return[P]})),_:1},8,["on"]),(0,o.createVNode)(s.Z,{class:(0,o.normalizeClass)({"opacity-25":(0,o.unref)(n).processing}),disabled:(0,o.unref)(n).processing},{default:(0,o.withCtx)((function(){return[A]})),_:1},8,["class","disabled"])]})),_:1}),e.tokens.length>0?((0,o.openBlock)(),(0,o.createElementBlock)("div",D,[(0,o.createVNode)(E.Z),(0,o.createElementVNode)("div",M,[(0,o.createVNode)(a.Z,null,{title:(0,o.withCtx)((function(){return[j]})),description:(0,o.withCtx)((function(){return[z]})),content:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",I,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.tokens,(function(t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{key:t.id,class:"flex items-center justify-between"},[(0,o.createElementVNode)("div",null,(0,o.toDisplayString)(t.name),1),(0,o.createElementVNode)("div",L,[t.last_used_ago?((0,o.openBlock)(),(0,o.createElementBlock)("div",F," Last used "+(0,o.toDisplayString)(t.last_used_ago),1)):(0,o.createCommentVNode)("",!0),e.availablePermissions.length>0?((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:1,class:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:function(e){return function(e){c.permissions=e.abilities,d.value=e}(t)}}," Permissions ",8,U)):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("button",{class:"cursor-pointer ml-6 text-sm text-red-500",onClick:function(e){return function(e){m.value=e}(t)}}," Delete ",8,W)])])})),128))])]})),_:1})])])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)(g.Z,{show:u.value,onClose:r[3]||(r[3]=function(e){return u.value=!1})},{title:(0,o.withCtx)((function(){return[O]})),content:(0,o.withCtx)((function(){return[q,t.$page.props.jetstream.flash.token?((0,o.openBlock)(),(0,o.createElementBlock)("div",R,(0,o.toDisplayString)(t.$page.props.jetstream.flash.token),1)):(0,o.createCommentVNode)("",!0)]})),footer:(0,o.withCtx)((function(){return[(0,o.createVNode)(N.Z,{onClick:r[2]||(r[2]=function(e){return u.value=!1})},{default:(0,o.withCtx)((function(){return[Y]})),_:1})]})),_:1},8,["show"]),(0,o.createVNode)(g.Z,{show:d.value,onClose:r[6]||(r[6]=function(e){return d.value=null})},{title:(0,o.withCtx)((function(){return[G]})),content:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",H,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.availablePermissions,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{key:e},[(0,o.createElementVNode)("label",J,[(0,o.createVNode)(w.Z,{checked:(0,o.unref)(c).permissions,"onUpdate:checked":r[4]||(r[4]=function(e){return(0,o.unref)(c).permissions=e}),value:e},null,8,["checked","value"]),(0,o.createElementVNode)("span",K,(0,o.toDisplayString)(e),1)])])})),128))])]})),footer:(0,o.withCtx)((function(){return[(0,o.createVNode)(N.Z,{onClick:r[5]||(r[5]=function(e){return d.value=null})},{default:(0,o.withCtx)((function(){return[Q]})),_:1}),(0,o.createVNode)(s.Z,{class:(0,o.normalizeClass)(["ml-3",{"opacity-25":(0,o.unref)(c).processing}]),disabled:(0,o.unref)(c).processing,onClick:p},{default:(0,o.withCtx)((function(){return[X]})),_:1},8,["class","disabled"])]})),_:1},8,["show"]),(0,o.createVNode)(x,{show:m.value,onClose:r[8]||(r[8]=function(e){return m.value=null})},{title:(0,o.withCtx)((function(){return[ee]})),content:(0,o.withCtx)((function(){return[te]})),footer:(0,o.withCtx)((function(){return[(0,o.createVNode)(N.Z,{onClick:r[7]||(r[7]=function(e){return m.value=null})},{default:(0,o.withCtx)((function(){return[ne]})),_:1}),(0,o.createVNode)(h.Z,{class:(0,o.normalizeClass)(["ml-3",{"opacity-25":(0,o.unref)(i).processing}]),disabled:(0,o.unref)(i).processing,onClick:v},{default:(0,o.withCtx)((function(){return[oe]})),_:1},8,["class","disabled"])]})),_:1},8,["show"])])}}}}}]);