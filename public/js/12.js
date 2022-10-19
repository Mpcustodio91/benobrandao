"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12],{3744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,n]of t)o[e]=n;return o}},3831:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(821),r=o(7829),a={class:"md:grid md:grid-cols-3 md:gap-6"},l={class:"mt-5 md:mt-0 md:col-span-2"},c={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"};const s={__name:"ActionSection",setup:function(e){return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",a,[(0,n.createVNode)(r.Z,null,{title:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"title")]})),description:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"description")]})),_:3}),(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",c,[(0,n.renderSlot)(e.$slots,"content")])])])}}}},7041:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r=["type"];const a={__name:"Button",props:{type:{type:String,default:"submit"}},setup:function(e){return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},[(0,n.renderSlot)(t.$slots,"default")],8,r)}}}},2252:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r=["type"];const a={__name:"DangerButton",props:{type:{type:String,default:"button"}},setup:function(e){return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25 transition"},[(0,n.renderSlot)(t.$slots,"default")],8,r)}}}},7100:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(821),r=o(312),a={class:"px-6 py-4"},l={class:"text-lg"},c={class:"mt-4"},s={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"};const i={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup:function(e,t){var o=t.emit,i=function(){o("close")};return function(t,o){return(0,n.openBlock)(),(0,n.createBlock)(r.Z,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:i},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",l,[(0,n.renderSlot)(t.$slots,"title")]),(0,n.createElementVNode)("div",c,[(0,n.renderSlot)(t.$slots,"content")])]),(0,n.createElementVNode)("div",s,[(0,n.renderSlot)(t.$slots,"footer")])]})),_:3},8,["show","max-width","closeable"])}}}},1959:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r=["value"];const a={__name:"Input",props:{modelValue:String},emits:["update:modelValue"],setup:function(e,t){var o=t.expose,a=(0,n.ref)(null);return(0,n.onMounted)((function(){a.value.hasAttribute("autofocus")&&a.value.focus()})),o({focus:function(){return a.value.focus()}}),function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("input",{ref_key:"input",ref:a,class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:o[0]||(o[0]=function(e){return t.$emit("update:modelValue",e.target.value)})},null,40,r)}}}},604:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r={class:"text-sm text-red-600"};const a={__name:"InputError",props:{message:String},setup:function(e){return function(t,o){return(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("p",r,(0,n.toDisplayString)(e.message),1)],512)),[[n.vShow,e.message]])}}}},7088:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(821),r={class:"block font-medium text-sm text-gray-700"},a={key:0},l={key:1};const c={__name:"Label",props:{value:String},setup:function(e){return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("label",r,[e.value?((0,n.openBlock)(),(0,n.createElementBlock)("span",a,(0,n.toDisplayString)(e.value),1)):((0,n.openBlock)(),(0,n.createElementBlock)("span",l,[(0,n.renderSlot)(t.$slots,"default")]))])}}}},312:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(821),r={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},a=[(0,n.createElementVNode)("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1)];const l={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup:function(e,t){var o=t.emit,l=e;(0,n.watch)((function(){return l.show}),(function(){l.show?document.body.style.overflow="hidden":document.body.style.overflow=null}));var c=function(){l.closeable&&o("close")},s=function(e){"Escape"===e.key&&l.show&&c()};(0,n.onMounted)((function(){return document.addEventListener("keydown",s)})),(0,n.onUnmounted)((function(){document.removeEventListener("keydown",s),document.body.style.overflow=null}));var i=(0,n.computed)((function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[l.maxWidth]}));return function(t,o){return(0,n.openBlock)(),(0,n.createBlock)(n.Teleport,{to:"body"},[(0,n.createVNode)(n.Transition,{"leave-active-class":"duration-200"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",r,[(0,n.createVNode)(n.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",{class:"fixed inset-0 transform transition-all",onClick:c},a,512),[[n.vShow,e.show]])]})),_:1}),(0,n.createVNode)(n.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",(0,n.unref)(i)])},[e.show?(0,n.renderSlot)(t.$slots,"default",{key:0}):(0,n.createCommentVNode)("",!0)],2),[[n.vShow,e.show]])]})),_:3})],512),[[n.vShow,e.show]])]})),_:3})])}}}},2575:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r=["type"];const a={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup:function(e){return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition"},[(0,n.renderSlot)(t.$slots,"default")],8,r)}}}},7829:(e,t,o)=>{o.d(t,{Z:()=>u});var n=o(821),r={class:"md:col-span-1 flex justify-between"},a={class:"px-4 sm:px-0"},l={class:"text-lg font-medium text-gray-900"},c={class:"mt-1 text-sm text-gray-600"},s={class:"px-4 sm:px-0"};const i={},u=(0,o(3744).Z)(i,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("h3",l,[(0,n.renderSlot)(e.$slots,"title")]),(0,n.createElementVNode)("p",c,[(0,n.renderSlot)(e.$slots,"description")])]),(0,n.createElementVNode)("div",s,[(0,n.renderSlot)(e.$slots,"aside")])])}]])},5012:(e,t,o)=>{o.r(t),o.d(t,{default:()=>j});var n=o(821),r=o(9680),a=o(9038),l=o(3831),c=o(7041),s=o(7100),i=o(1959),u=o(604),d=o(2575),m={class:"mt-4"},f=(0,n.createTextVNode)(" Cancel ");const p={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup:function(e,t){var o=t.emit,r=(0,n.ref)(!1),a=(0,n.reactive)({password:"",error:"",processing:!1}),l=(0,n.ref)(null),p=function(){axios.get(route("password.confirmation")).then((function(e){e.data.confirmed?o("confirmed"):(r.value=!0,setTimeout((function(){return l.value.focus()}),250))}))},v=function(){a.processing=!0,axios.post(route("password.confirm"),{password:a.password}).then((function(){a.processing=!1,y(),(0,n.nextTick)().then((function(){return o("confirmed")}))})).catch((function(e){a.processing=!1,a.error=e.response.data.errors.password[0],l.value.focus()}))},y=function(){r.value=!1,a.password="",a.error=""};return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("span",null,[(0,n.createElementVNode)("span",{onClick:p},[(0,n.renderSlot)(t.$slots,"default")]),(0,n.createVNode)(s.Z,{show:r.value,onClose:y},{title:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.title),1)]})),content:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.content)+" ",1),(0,n.createElementVNode)("div",m,[(0,n.createVNode)(i.Z,{ref_key:"passwordInput",ref:l,modelValue:a.password,"onUpdate:modelValue":o[0]||(o[0]=function(e){return a.password=e}),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:(0,n.withKeys)(v,["enter"])},null,8,["modelValue","onKeyup"]),(0,n.createVNode)(u.Z,{message:a.error,class:"mt-2"},null,8,["message"])])]})),footer:(0,n.withCtx)((function(){return[(0,n.createVNode)(d.Z,{onClick:y},{default:(0,n.withCtx)((function(){return[f]})),_:1}),(0,n.createVNode)(c.Z,{class:(0,n.normalizeClass)(["ml-3",{"opacity-25":a.processing}]),disabled:a.processing,onClick:v},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.button),1)]})),_:1},8,["class","disabled"])]})),_:1},8,["show"])])}}};var v=o(2252),y=o(7088),x=(0,n.createTextVNode)(" Two Factor Authentication "),w=(0,n.createTextVNode)(" Add additional security to your account using two factor authentication. "),h={key:0,class:"text-lg font-medium text-gray-900"},g={key:1,class:"text-lg font-medium text-gray-900"},k={key:2,class:"text-lg font-medium text-gray-900"},b=(0,n.createElementVNode)("div",{class:"mt-3 max-w-xl text-sm text-gray-600"},[(0,n.createElementVNode)("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),V={key:3},B={key:0},N={class:"mt-4 max-w-xl text-sm text-gray-600"},C={key:0,class:"font-semibold"},E={key:1},S=["innerHTML"],_={key:0,class:"mt-4 max-w-xl text-sm text-gray-600"},T={class:"font-semibold"},Z=(0,n.createTextVNode)(" Setup Key: "),$=["innerHTML"],D={key:1,class:"mt-4"},F={key:1},K=(0,n.createElementVNode)("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[(0,n.createElementVNode)("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),L={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"},M={class:"mt-5"},z={key:0},A=(0,n.createTextVNode)(" Enable "),I={key:1},P=(0,n.createTextVNode)(" Confirm "),R=(0,n.createTextVNode)(" Regenerate Recovery Codes "),W=(0,n.createTextVNode)(" Show Recovery Codes "),q=(0,n.createTextVNode)(" Cancel "),H=(0,n.createTextVNode)(" Disable ");const j={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup:function(e){var t=e,o=(0,n.ref)(!1),s=(0,n.ref)(!1),m=(0,n.ref)(!1),f=(0,n.ref)(null),j=(0,n.ref)(null),U=(0,n.ref)([]),Y=(0,a.cI)({code:""}),O=(0,n.computed)((function(){var e;return!o.value&&(null===(e=(0,a.qt)().props.value.user)||void 0===e?void 0:e.two_factor_enabled)}));(0,n.watch)(O,(function(){O.value||(Y.reset(),Y.clearErrors())}));var Q=function(){o.value=!0,r.Inertia.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess:function(){return Promise.all([G(),J(),X()])},onFinish:function(){o.value=!1,s.value=t.requiresConfirmation}})},G=function(){return axios.get("/user/two-factor-qr-code").then((function(e){f.value=e.data.svg}))},J=function(){return axios.get("/user/two-factor-secret-key").then((function(e){j.value=e.data.secretKey}))},X=function(){return axios.get("/user/two-factor-recovery-codes").then((function(e){U.value=e.data}))},ee=function(){Y.post("/user/confirmed-two-factor-authentication",{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:function(){s.value=!1,f.value=null,j.value=null}})},te=function(){axios.post("/user/two-factor-recovery-codes").then((function(){return X()}))},oe=function(){m.value=!0,r.Inertia.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess:function(){m.value=!1,s.value=!1}})};return function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(l.Z,null,{title:(0,n.withCtx)((function(){return[x]})),description:(0,n.withCtx)((function(){return[w]})),content:(0,n.withCtx)((function(){return[(0,n.unref)(O)&&!s.value?((0,n.openBlock)(),(0,n.createElementBlock)("h3",h," You have enabled two factor authentication. ")):(0,n.unref)(O)&&s.value?((0,n.openBlock)(),(0,n.createElementBlock)("h3",g," Finish enabling two factor authentication. ")):((0,n.openBlock)(),(0,n.createElementBlock)("h3",k," You have not enabled two factor authentication. ")),b,(0,n.unref)(O)?((0,n.openBlock)(),(0,n.createElementBlock)("div",V,[f.value?((0,n.openBlock)(),(0,n.createElementBlock)("div",B,[(0,n.createElementVNode)("div",N,[s.value?((0,n.openBlock)(),(0,n.createElementBlock)("p",C," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):((0,n.openBlock)(),(0,n.createElementBlock)("p",E," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),(0,n.createElementVNode)("div",{class:"mt-4",innerHTML:f.value},null,8,S),j.value?((0,n.openBlock)(),(0,n.createElementBlock)("div",_,[(0,n.createElementVNode)("p",T,[Z,(0,n.createElementVNode)("span",{innerHTML:j.value},null,8,$)])])):(0,n.createCommentVNode)("",!0),s.value?((0,n.openBlock)(),(0,n.createElementBlock)("div",D,[(0,n.createVNode)(y.Z,{for:"code",value:"Code"}),(0,n.createVNode)(i.Z,{id:"code",modelValue:(0,n.unref)(Y).code,"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,n.unref)(Y).code=e}),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:(0,n.withKeys)(ee,["enter"])},null,8,["modelValue","onKeyup"]),(0,n.createVNode)(u.Z,{message:(0,n.unref)(Y).errors.code,class:"mt-2"},null,8,["message"])])):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0),U.value.length>0&&!s.value?((0,n.openBlock)(),(0,n.createElementBlock)("div",F,[K,(0,n.createElementVNode)("div",L,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(U.value,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{key:e},(0,n.toDisplayString)(e),1)})),128))])])):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("div",M,[(0,n.unref)(O)?((0,n.openBlock)(),(0,n.createElementBlock)("div",I,[(0,n.createVNode)(p,{onConfirmed:ee},{default:(0,n.withCtx)((function(){return[s.value?((0,n.openBlock)(),(0,n.createBlock)(c.Z,{key:0,type:"button",class:(0,n.normalizeClass)(["mr-3",{"opacity-25":o.value}]),disabled:o.value},{default:(0,n.withCtx)((function(){return[P]})),_:1},8,["class","disabled"])):(0,n.createCommentVNode)("",!0)]})),_:1}),(0,n.createVNode)(p,{onConfirmed:te},{default:(0,n.withCtx)((function(){return[U.value.length>0&&!s.value?((0,n.openBlock)(),(0,n.createBlock)(d.Z,{key:0,class:"mr-3"},{default:(0,n.withCtx)((function(){return[R]})),_:1})):(0,n.createCommentVNode)("",!0)]})),_:1}),(0,n.createVNode)(p,{onConfirmed:X},{default:(0,n.withCtx)((function(){return[0!==U.value.length||s.value?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)(d.Z,{key:0,class:"mr-3"},{default:(0,n.withCtx)((function(){return[W]})),_:1}))]})),_:1}),(0,n.createVNode)(p,{onConfirmed:oe},{default:(0,n.withCtx)((function(){return[s.value?((0,n.openBlock)(),(0,n.createBlock)(d.Z,{key:0,class:(0,n.normalizeClass)({"opacity-25":m.value}),disabled:m.value},{default:(0,n.withCtx)((function(){return[q]})),_:1},8,["class","disabled"])):(0,n.createCommentVNode)("",!0)]})),_:1}),(0,n.createVNode)(p,{onConfirmed:oe},{default:(0,n.withCtx)((function(){return[s.value?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)(v.Z,{key:0,class:(0,n.normalizeClass)({"opacity-25":m.value}),disabled:m.value},{default:(0,n.withCtx)((function(){return[H]})),_:1},8,["class","disabled"]))]})),_:1})])):((0,n.openBlock)(),(0,n.createElementBlock)("div",z,[(0,n.createVNode)(p,{onConfirmed:Q},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(c.Z,{type:"button",class:(0,n.normalizeClass)({"opacity-25":o.value}),disabled:o.value},{default:(0,n.withCtx)((function(){return[A]})),_:1},8,["class","disabled"])]})),_:1})]))])]})),_:1})}}}}}]);