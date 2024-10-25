(()=>{"use strict";var e={335:(e,t,a)=>{var n=a(609),r=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var n,l={},c=null,d=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:d,props:l,_owner:o.current}}t.jsx=l,t.jsxs=l},85:(e,t,a)=>{e.exports=a(335)},609:e=>{e.exports=window.React}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,a),s.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};a.r(n),a.d(n,{hydrate:()=>k,save:()=>S,setGtmConfig:()=>C,setTranslation:()=>T,setTranslations:()=>w});var r={};a.r(r),a.d(r,{getData:()=>O,getGtmConfig:()=>I,getTranslation:()=>M,getTranslations:()=>F});var s={};a.r(s),a.d(s,{getData:()=>j,getTagData:()=>z,getTranslation:()=>U,getTranslations:()=>V});var o={};a.r(o),a.d(o,{closeModal:()=>ge,disableComplementaryArea:()=>le,enableComplementaryArea:()=>ie,openModal:()=>_e,pinItem:()=>ce,setDefaultComplementaryArea:()=>oe,setFeatureDefaults:()=>me,setFeatureValue:()=>pe,toggleFeature:()=>ue,unpinItem:()=>de});var i={};a.r(i),a.d(i,{getActiveComplementaryArea:()=>be,isComplementaryAreaLoading:()=>he,isFeatureActive:()=>ye,isItemPinned:()=>ve,isModalActive:()=>fe});var l=a(609);const c=window.wp.element,d=window.wp.domReady;var u=a.n(d);const p=window.wp.dataControls,m=window.wp.data,_=window.wp.notices,g="boxuk/consent-management",b="consent_options",h={HYDRATE:"HYDRATE",SET_TRANSLATIONS:"SET_TRANSLATIONS",SAVE_SUCCESS:"SAVE_SUCCESS",SAVE_FAILURE:"SAVE_FAILURE",SET_GTM_CONFIG:"SET_GTM_CONFIG"},{SET_TRANSLATIONS:v,HYDRATE:y,SAVE_SUCCESS:f,SAVE_FAILURE:E,SET_GTM_CONFIG:x}=h;function*T(e,t){return w({...(yield(0,m.resolveSelect)(g,"getData")).translations,[e]:t})}function*w(e){return{type:v,translations:e}}function*C(e){return{type:x,tagConfig:e}}const k=e=>({type:y,data:e});function*S(){const e=(0,m.select)(H).getData(),t={[b]:e};try{const e=yield(0,p.apiFetch)({path:"wp/v2/settings",method:"PUT",body:JSON.stringify(t)});return(0,m.dispatch)(_.store).createSuccessNotice("Settings saved.",{isDismissible:!0,type:"snackbar"}),{type:f,data:e[b]}}catch(e){if(!(e instanceof Error))throw e;return console.error({payload:t,error:e}),(0,m.dispatch)(_.store).createErrorNotice("Failed to save settings. ",{isDismissible:!0,type:"snackbar",explicitDismiss:!0}),{type:E}}}const{SET_TRANSLATIONS:N,HYDRATE:A,SAVE_SUCCESS:L,SAVE_FAILURE:P,SET_GTM_CONFIG:R}=h,D=window.wp.i18n,B={translations:{functionalityStorageLabel:(0,D.__)("Enables storage that supports the functionality of the website","boxuk"),securityStorageLabel:(0,D.__)("Enables storage related to security such as authentication functionality, fraud prevention, and other user protection","boxuk"),analyticsStorageLabel:(0,D.__)("Enables storage, such as cookies, related to analytics (for example, visit duration)","boxuk"),personalizationStorageLabel:(0,D.__)("Enables storage related to personalization","boxuk"),adStorageLabel:(0,D.__)("Enables storage, such as cookies, related to advertising","boxuk"),adUserDataLabel:(0,D.__)("Sets consent for sending user data related to advertising to Google","boxuk"),adPersonalizationLabel:(0,D.__)("Enables storage related to personalization such as video recommendations","boxuk"),modal:{title:(0,D.__)("Privacy","boxuk"),description:(0,D.__)("Our website uses cookies and similar technologies to provide you with a better service while searching or placing an order, for analytical purposes and to personalise our advertising.","boxuk"),acceptAllBtn:(0,D.__)("Accept all","boxuk"),acceptNecessaryBtn:(0,D.__)("Accept necessary","boxuk"),showPreferencesBtn:(0,D.__)("Privacy preferences","boxuk")},preferences:{title:(0,D.__)("Privacy preferences","boxuk"),acceptAllBtn:(0,D.__)("Accept all","boxuk"),acceptNecessaryBtn:(0,D.__)("Accept only necessary","boxuk"),savePreferencesBtn:(0,D.__)("Save preferences","boxuk"),closeIconLabel:(0,D.__)("Dismiss","boxuk")},main:{title:(0,D.__)("Consent Management","boxuk"),description:(0,D.__)("When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer","boxuk")},necessary:{title:(0,D.__)("Necessary","boxuk"),description:(0,D.__)("These cookies are necessary for the site to function properly.","boxuk")},analytics:{title:(0,D.__)("Analytics","boxuk"),description:(0,D.__)("These are used to track user interaction and detect potential problems. These help us improve our services by providing analytical data on how users use this site.","boxuk")},personalisation:{title:(0,D.__)("Personalization","boxuk"),description:(0,D.__)("These cookies allow the provision of enhance functionality and personalization, such as videos and live chats. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies, then some or all of these functionalities may not function properly.","boxuk")},advertising:{title:(0,D.__)("Advertising","boxuk"),description:(0,D.__)("These cookies are used to display relevant advertising to visitors, as well as to track the volume of visitors. They track details about visitors such as the number of unique visitors, number of times particular ads have been displayed, the number of clicks the ads have received, and are also used to measure the effectiveness of ad campaigns by building up user profiles. These are set by trusted third party networks, and are generally persistent in nature.","boxuk")}},tagConfig:{id:"",auth:"",preview:""}};function*O(){var e;const t=yield(0,p.apiFetch)({path:"wp/v2/settings"});return k(null!==(e=t[b])&&void 0!==e?e:B)}function*F(){yield O()}function*M(e){yield O()}function*I(){yield O()}const j=e=>e,V=e=>{var t;return null!==(t=e?.translations)&&void 0!==t?t:B.translations},z=e=>{var t;return null!==(t=e?.tagConfig)&&void 0!==t?t:B.tagConfig},U=(e,t)=>{var a;return null!==(a=e?.translations[t])&&void 0!==a?a:B.translations[t]},H=(0,m.createReduxStore)(g,{selectors:s,actions:n,reducer:(e,{type:t,translations:a,data:n,tagConfig:r})=>{switch(t){case N:return{...e,translations:a};case A:return{...n};case R:return{...e,tagConfig:r};case L:return{...n};default:return e}},resolvers:r,controls:p.controls}),G=window.wp.editor;function Y(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=Y(e[t]))&&(n&&(n+=" "),n+=a)}else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}const X=function(){for(var e,t,a=0,n="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=Y(e))&&(n&&(n+=" "),n+=t);return n},$=window.wp.components,q=window.wp.compose;var W=a(85);const J=(0,c.forwardRef)((({children:e,className:t,ariaLabel:a,as:n="div",...r},s)=>(0,W.jsx)(n,{ref:s,className:X("interface-navigable-region",t),"aria-label":a,role:"region",tabIndex:"-1",...r,children:e})));J.displayName="NavigableRegion";const K=J,Q={type:"tween",duration:.25,ease:[.6,0,.4,1]},Z={hidden:{opacity:1,marginTop:-60},visible:{opacity:1,marginTop:0},distractionFreeHover:{opacity:1,marginTop:0,transition:{...Q,delay:.2,delayChildren:.2}},distractionFreeHidden:{opacity:0,marginTop:-60},distractionFreeDisabled:{opacity:0,marginTop:0,transition:{...Q,delay:.8,delayChildren:.8}}},ee=(0,c.forwardRef)((function({isDistractionFree:e,footer:t,header:a,editorNotices:n,sidebar:r,secondarySidebar:s,content:o,actions:i,labels:l,className:d},u){const[p,m]=(0,q.useResizeObserver)(),_=(0,q.useViewportMatch)("medium","<"),g={type:"tween",duration:(0,q.useReducedMotion)()?0:.25,ease:[.6,0,.4,1]};!function(e){(0,c.useEffect)((()=>{const t=document&&document.querySelector(`html:not(.${e})`);if(t)return t.classList.toggle(e),()=>{t.classList.toggle(e)}}),[e])}("interface-interface-skeleton__html-container");const b={
/* translators: accessibility text for the top bar landmark region. */
header:(0,D._x)("Header","header landmark area"),
/* translators: accessibility text for the content landmark region. */
body:(0,D.__)("Content"),
/* translators: accessibility text for the secondary sidebar landmark region. */
secondarySidebar:(0,D.__)("Block Library"),
/* translators: accessibility text for the settings landmark region. */
sidebar:(0,D.__)("Settings"),
/* translators: accessibility text for the publish landmark region. */
actions:(0,D.__)("Publish"),
/* translators: accessibility text for the footer landmark region. */
footer:(0,D.__)("Footer"),...l};return(0,W.jsxs)("div",{ref:u,className:X(d,"interface-interface-skeleton",!!t&&"has-footer"),children:[(0,W.jsxs)("div",{className:"interface-interface-skeleton__editor",children:[(0,W.jsx)($.__unstableAnimatePresence,{initial:!1,children:!!a&&(0,W.jsx)(K,{as:$.__unstableMotion.div,className:"interface-interface-skeleton__header","aria-label":b.header,initial:e&&!_?"distractionFreeHidden":"hidden",whileHover:e&&!_?"distractionFreeHover":"visible",animate:e&&!_?"distractionFreeDisabled":"visible",exit:e&&!_?"distractionFreeHidden":"hidden",variants:Z,transition:g,children:a})}),e&&(0,W.jsx)("div",{className:"interface-interface-skeleton__header",children:n}),(0,W.jsxs)("div",{className:"interface-interface-skeleton__body",children:[(0,W.jsx)($.__unstableAnimatePresence,{initial:!1,children:!!s&&(0,W.jsx)(K,{className:"interface-interface-skeleton__secondary-sidebar",ariaLabel:b.secondarySidebar,as:$.__unstableMotion.div,initial:"closed",animate:"open",exit:"closed",variants:{open:{width:m.width},closed:{width:0}},transition:g,children:(0,W.jsxs)($.__unstableMotion.div,{style:{position:"absolute",width:_?"100vw":"fit-content",height:"100%",left:0},variants:{open:{x:0},closed:{x:"-100%"}},transition:g,children:[p,s]})})}),(0,W.jsx)(K,{className:"interface-interface-skeleton__content",ariaLabel:b.body,children:o}),!!r&&(0,W.jsx)(K,{className:"interface-interface-skeleton__sidebar",ariaLabel:b.sidebar,children:r}),!!i&&(0,W.jsx)(K,{className:"interface-interface-skeleton__actions",ariaLabel:b.actions,children:i})]})]}),!!t&&(0,W.jsx)(K,{className:"interface-interface-skeleton__footer",ariaLabel:b.footer,children:t})]})})),te=window.wp.deprecated;var ae=a.n(te);const ne=window.wp.preferences;function re(e){return["core/edit-post","core/edit-site"].includes(e)?(ae()(`${e} interface scope`,{alternative:"core interface scope",hint:"core/edit-post and core/edit-site are merging.",version:"6.6"}),"core"):e}function se(e,t){return"core"===e&&"edit-site/template"===t?(ae()("edit-site/template sidebar",{alternative:"edit-post/document",version:"6.6"}),"edit-post/document"):"core"===e&&"edit-site/block-inspector"===t?(ae()("edit-site/block-inspector sidebar",{alternative:"edit-post/block",version:"6.6"}),"edit-post/block"):t}const oe=(e,t)=>({type:"SET_DEFAULT_COMPLEMENTARY_AREA",scope:e=re(e),area:t=se(e,t)}),ie=(e,t)=>({registry:a,dispatch:n})=>{t&&(e=re(e),t=se(e,t),a.select(ne.store).get(e,"isComplementaryAreaVisible")||a.dispatch(ne.store).set(e,"isComplementaryAreaVisible",!0),n({type:"ENABLE_COMPLEMENTARY_AREA",scope:e,area:t}))},le=e=>({registry:t})=>{e=re(e),t.select(ne.store).get(e,"isComplementaryAreaVisible")&&t.dispatch(ne.store).set(e,"isComplementaryAreaVisible",!1)},ce=(e,t)=>({registry:a})=>{if(!t)return;e=re(e),t=se(e,t);const n=a.select(ne.store).get(e,"pinnedItems");!0!==n?.[t]&&a.dispatch(ne.store).set(e,"pinnedItems",{...n,[t]:!0})},de=(e,t)=>({registry:a})=>{if(!t)return;e=re(e),t=se(e,t);const n=a.select(ne.store).get(e,"pinnedItems");a.dispatch(ne.store).set(e,"pinnedItems",{...n,[t]:!1})};function ue(e,t){return function({registry:a}){ae()("dispatch( 'core/interface' ).toggleFeature",{since:"6.0",alternative:"dispatch( 'core/preferences' ).toggle"}),a.dispatch(ne.store).toggle(e,t)}}function pe(e,t,a){return function({registry:n}){ae()("dispatch( 'core/interface' ).setFeatureValue",{since:"6.0",alternative:"dispatch( 'core/preferences' ).set"}),n.dispatch(ne.store).set(e,t,!!a)}}function me(e,t){return function({registry:a}){ae()("dispatch( 'core/interface' ).setFeatureDefaults",{since:"6.0",alternative:"dispatch( 'core/preferences' ).setDefaults"}),a.dispatch(ne.store).setDefaults(e,t)}}function _e(e){return{type:"OPEN_MODAL",name:e}}function ge(){return{type:"CLOSE_MODAL"}}const be=(0,m.createRegistrySelector)((e=>(t,a)=>{a=re(a);const n=e(ne.store).get(a,"isComplementaryAreaVisible");if(void 0!==n)return!1===n?null:t?.complementaryAreas?.[a]})),he=(0,m.createRegistrySelector)((e=>(t,a)=>{a=re(a);const n=e(ne.store).get(a,"isComplementaryAreaVisible"),r=t?.complementaryAreas?.[a];return n&&void 0===r})),ve=(0,m.createRegistrySelector)((e=>(t,a,n)=>{var r;n=se(a=re(a),n);const s=e(ne.store).get(a,"pinnedItems");return null===(r=s?.[n])||void 0===r||r})),ye=(0,m.createRegistrySelector)((e=>(t,a,n)=>(ae()("select( 'core/interface' ).isFeatureActive( scope, featureName )",{since:"6.0",alternative:"select( 'core/preferences' ).get( scope, featureName )"}),!!e(ne.store).get(a,n))));function fe(e,t){return e.activeModal===t}const Ee=(0,m.combineReducers)({complementaryAreas:function(e={},t){switch(t.type){case"SET_DEFAULT_COMPLEMENTARY_AREA":{const{scope:a,area:n}=t;return e[a]?e:{...e,[a]:n}}case"ENABLE_COMPLEMENTARY_AREA":{const{scope:a,area:n}=t;return{...e,[a]:n}}}return e},activeModal:function(e=null,t){switch(t.type){case"OPEN_MODAL":return t.name;case"CLOSE_MODAL":return null}return e}}),xe=(0,m.createReduxStore)("core/interface",{reducer:Ee,actions:o,selectors:i});(0,m.register)(xe);const Te=window.wp.blockEditor,we=()=>{const e=(0,m.useSelect)((e=>e(H).getTranslations()),[]),{setTranslations:t}=(0,m.useDispatch)(H);return(0,l.createElement)("div",{className:"cm-wrapper cc--anim"},(0,l.createElement)("div",{className:"cm cm--box cm--middle cm--center","aria-describedby":"cm__desc","aria-labelledby":"cm__title",style:{position:"relative",transform:"unset"}},(0,l.createElement)("div",{className:"cm__body"},(0,l.createElement)("div",{className:"cm__texts"},(0,l.createElement)(Te.RichText,{tagName:"h2",value:e.modal.title,className:"cm__title",onChange:a=>{t({...e,modal:{...e.modal,title:a}})}}),(0,l.createElement)(Te.RichText,{tagName:"p",className:"cm__desc",value:e.modal.description,onChange:a=>{t({...e,modal:{...e.modal,description:a}})}})),(0,l.createElement)("div",{className:"cm__btns"},(0,l.createElement)("div",{className:"cm__btn-group"},(0,l.createElement)("button",{className:"cm__btn"},(0,l.createElement)(Te.RichText,{tagName:"span",value:e.modal.acceptAllBtn,onChange:a=>{t({...e,modal:{...e.modal,acceptAllBtn:a}})}})),(0,l.createElement)("button",{className:"cm__btn"},(0,l.createElement)(Te.RichText,{tagName:"span",value:e.modal.acceptNecessaryBtn,onChange:a=>{t({...e,modal:{...e.modal,acceptNecessaryBtn:a}})}}))),(0,l.createElement)("div",{className:"cm__btn-group"},(0,l.createElement)("button",{className:"cm__btn cm__btn--secondary"},(0,l.createElement)(Te.RichText,{tagName:"span",value:e.modal.showPreferencesBtn,onChange:a=>{t({...e,modal:{...e.modal,showPreferencesBtn:a}})}})))))))};var Ce;function ke(){return ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ke.apply(null,arguments)}var Se,Ne=function(e){return l.createElement("svg",ke({viewBox:"0 0 24 24"},e),Ce||(Ce=l.createElement("path",{d:"m21.999 6.94-10.36 10.24L2.001 6.82"})))};function Ae(){return Ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Ae.apply(null,arguments)}var Le,Pe=function(e){return l.createElement("svg",Ae({viewBox:"0 0 24 24"},e),Se||(Se=l.createElement("path",{d:"m19.5 4.5-15 15m0-14.999 15 14.999"})))};function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Re.apply(null,arguments)}var De=function(e){return l.createElement("svg",Re({viewBox:"0 0 24 24"},e),Le||(Le=l.createElement("path",{d:"m3.572 13.406 4.709 4.709 12.147-12.23"})))};const Be=({id:e,disabled:t=!1,isChecked:a=!1,setIsChecked:n=(()=>{}),className:r=""})=>{const s="section__toggle-wrapper "+r;return(0,l.createElement)("label",{htmlFor:e,className:s},(0,l.createElement)("input",{id:e,type:"checkbox",className:"section__toggle",disabled:t,checked:a,onChange:()=>n(!a)}),(0,l.createElement)("span",{className:"toggle__icon","aria-hidden":"true"},(0,l.createElement)("span",{className:"toggle__icon-circle"},(0,l.createElement)("span",{className:"toggle__icon-off"},(0,l.createElement)(Pe,null)),(0,l.createElement)("span",{className:"toggle__icon-on"},(0,l.createElement)(De,null)))))},Oe=({value:e,placeholder:t,setValue:a,disabled:n,checked:r,setIsChecked:s})=>{const o=e.replace(/\s/g,"-");return(0,l.createElement)("div",{className:"pm__service"},(0,l.createElement)("div",{className:"pm__service-header"},(0,l.createElement)("div",{className:"pm__service-icon"}),(0,l.createElement)(Te.RichText,{tagName:"div",className:"pm__service-title",value:e,placeholder:t,onChange:a})),(0,l.createElement)(Be,{id:o,className:"toggle-service",disabled:n,isChecked:r,setIsChecked:s}))},Fe=({title:e,setTitle:t,titlePlaceholder:a,description:n,setDescription:r,descriptionPlaceholder:s,disabled:o=!1,checked:i=!1,services:d=[]})=>{const[u,p]=(0,c.useState)(!1),[m,_]=(0,c.useState)(i),g=e.replace(/\s/g,"-"),b=["pm__section--toggle","pm__section--expandable",u?"is-expanded":""];return(0,l.createElement)("div",{className:b.join(" ")},(0,l.createElement)("div",{className:"pm__section-title-wrapper"},(0,l.createElement)(Te.RichText,{tagName:"button",className:"pm__section-title",value:e,placeholder:a,onChange:t,onClick:()=>p(!u),"aria-expanded":u,"aria-controls":"section-"+g}),(0,l.createElement)("span",{className:"pm__section-arrow"},(0,l.createElement)(Ne,null)),(0,l.createElement)(Be,{id:g,disabled:o,isChecked:m,setIsChecked:_})),(0,l.createElement)("div",{className:"pm__section-desc-wrapper","aria-hidden":!u,id:"section-"+g},(0,l.createElement)("div",{className:"pm__section-services"},d.map(((e,t)=>(0,l.createElement)(Oe,{key:t,value:e.value,placeholder:e.placeholder,setValue:e.setValue,disabled:o,checked:m,setIsChecked:_})))),(0,l.createElement)(Te.RichText,{tagName:"p",className:"pm__section-desc",value:n,placeholder:s,onChange:r})))},Me=()=>{const e=(0,m.useSelect)((e=>e(H).getTranslations()),[]),{setTranslations:t}=(0,m.useDispatch)(H);return(0,l.createElement)("div",{className:"pm-wrapper cc--anim"},(0,l.createElement)("div",{className:"pm pm--box pm--flip",style:{position:"relative",transform:"unset"}},(0,l.createElement)("div",{className:"pm__header"},(0,l.createElement)(Te.RichText,{tagName:"h2",className:"pm__title",placeholder:"Modal Title",value:e.preferences.title,onChange:a=>{t({...e,preferences:{...e.preferences,title:a}})},allowedFormats:["core/link"]})),(0,l.createElement)("div",{className:"pm__body"},(0,l.createElement)("div",{className:"pm__section"},(0,l.createElement)("div",{className:"pm__section-title-wrapper"},(0,l.createElement)(Te.RichText,{className:"pm__section-title",placeholder:"Introduction Title",role:"heading","aria-level":3,value:e.main.title,onChange:a=>{t({...e,main:{...e.main,title:a}})}})),(0,l.createElement)("div",{className:"pm__section-desc-wrapper"},(0,l.createElement)(Te.RichText,{tagName:"p",className:"pm__section-desc",placeholder:"Main description",value:e.main.description,onChange:a=>{t({...e,main:{...e.main,description:a}})}}))),(0,l.createElement)("div",{className:"pm__section-toggles"},(0,l.createElement)(Fe,{title:e.necessary.title,titlePlaceholder:"Necessary",setTitle:a=>{t({...e,necessary:{...e.necessary,title:a}})},description:e.necessary.description,descriptionPlaceholder:"Necessary description",setDescription:a=>{t({...e,necessary:{...e.necessary,description:a}})},disabled:!0,checked:!0,services:[{value:e.functionalityStorageLabel,placeholder:"Functionality Storage",setValue:a=>{t({...e,functionalityStorageLabel:a})}},{value:e.securityStorageLabel,placeholder:"Security Storage",setValue:a=>{t({...e,securityStorageLabel:a})}}]}),(0,l.createElement)(Fe,{title:e.analytics.title,titlePlaceholder:"Analytics",setTitle:a=>{t({...e,analytics:{...e.analytics,title:a}})},description:e.analytics.description,descriptionPlaceholder:"Analytics description",setDescription:a=>{t({...e,analytics:{...e.analytics,description:a}})},services:[{value:e.analyticsStorageLabel,placeholder:"Analytics Storage",setValue:a=>{t({...e,analyticsStorageLabel:a})}}]}),(0,l.createElement)(Fe,{title:e.personalisation.title,titlePlaceholder:"Personalisation",setTitle:a=>{t({...e,personalisation:{...e.personalisation,title:a}})},description:e.personalisation.description,descriptionPlaceholder:"Personalisation description",setDescription:a=>{t({...e,personalisation:{...e.personalisation,description:a}})},services:[{value:e.personalizationStorageLabel,placeholder:"Personalization Storage",setValue:a=>{t({...e,personalizationStorageLabel:a})}}]}),(0,l.createElement)(Fe,{title:e.advertising.title,titlePlaceholder:"Advertising",setTitle:a=>{t({...e,advertising:{...e.advertising,title:a}})},description:e.advertising.description,descriptionPlaceholder:"Advertising description",setDescription:a=>{t({...e,advertising:{...e.advertising,description:a}})},services:[{value:e.adStorageLabel,placeholder:"Ad Storage",setValue:a=>{t({...e,adStorageLabel:a})}},{value:e.adUserDataLabel,placeholder:"Ad User Data",setValue:a=>{t({...e,adUserDataLabel:a})}},{value:e.adPersonalizationLabel,placeholder:"Ad Personalization",setValue:a=>{t({...e,adPersonalizationLabel:a})}}]}))),(0,l.createElement)("div",{className:"pm__footer"},(0,l.createElement)("div",{className:"pm__btn-group"},(0,l.createElement)(Te.RichText,{tagName:"button",className:"pm__btn",value:e.preferences.acceptAllBtn,onChange:a=>{t({...e,preferences:{...e.preferences,acceptAllBtn:a}})}}),(0,l.createElement)(Te.RichText,{tagName:"button",value:e.preferences.acceptNecessaryBtn,className:"pm__btn pm__btn--secondary",onChange:a=>{t({...e,preferences:{...e.preferences,acceptNecessaryBtn:a}})}})),(0,l.createElement)("div",{className:"pm__btn-group"},(0,l.createElement)(Te.RichText,{tagName:"button",className:"pm__btn pm__btn--secondary",value:e.preferences.savePreferencesBtn,onChange:a=>{t({...e,preferences:{...e.preferences,savePreferencesBtn:a}})}})))))},Ie=()=>{const e=(0,m.useSelect)((e=>e(H).getTranslations()),[]),{setTranslations:t}=(0,m.useDispatch)(H);return(0,l.createElement)($.PanelBody,null,(0,l.createElement)($.TextControl,{label:(0,D.__)("Title","boxuk"),value:e.modal.title,onChange:a=>t({...e,modal:{...e.modal,title:a}})}),(0,l.createElement)($.TextareaControl,{label:(0,D.__)("Description","bouk"),rows:10,value:e.modal.description,onChange:a=>t({...e,modal:{...e.modal,description:a}})}),(0,l.createElement)($.TextControl,{label:(0,D.__)("Accept All Button","boxuk"),value:e.modal.acceptAllBtn,onChange:a=>t({...e,modal:{...e.modal,acceptAllBtn:a}})}),(0,l.createElement)($.TextControl,{label:(0,D.__)("Accept Necessary Button","boxuk"),value:e.modal.acceptNecessaryBtn,onChange:a=>t({...e,modal:{...e.modal,acceptNecessaryBtn:a}})}),(0,l.createElement)($.TextControl,{label:(0,D.__)("Show Preferences Button","boxuk"),value:e.modal.showPreferencesBtn,onChange:a=>t({...e,modal:{...e.modal,showPreferencesBtn:a}})}))},je=({translations:e,setTranslations:t})=>(0,l.createElement)($.PanelBody,{initialOpen:!1,title:e.necessary.title},(0,l.createElement)("p",null,(0,D.sprintf)(
// translators: %1$s and %2$s are the name of the consent keys
// translators: %1$s and %2$s are the name of the consent keys
(0,D.__)("This section controls the %1$s and %1$s consent keys from Google Tag Manager. These settings are enforced to be enabled for all users.","boxuk"),'"functional_storage"','"security_storage"')),(0,l.createElement)($.TextControl,{label:(0,D.__)("Title","boxuk"),value:e.necessary.title,onChange:a=>t({...e,necessary:{...e.necessary,title:a}})}),(0,l.createElement)($.TextareaControl,{rows:3,label:(0,D.__)("Functionality Storage Label","boxuk"),value:e.functionalityStorageLabel,onChange:a=>t({...e,functionalityStorageLabel:a})}),(0,l.createElement)($.TextareaControl,{rows:3,label:(0,D.__)("Security Storage Label","boxuk"),value:e.securityStorageLabel,onChange:a=>t({...e,securityStorageLabel:a})}),(0,l.createElement)($.TextareaControl,{rows:10,label:(0,D.__)("Description","boxuk"),value:e.necessary.description,onChange:a=>t({...e,necessary:{...e.necessary,description:a}})})),Ve=({translations:e,setTranslations:t})=>(0,l.createElement)($.PanelBody,{initialOpen:!1,title:e.analytics.title},(0,l.createElement)("p",null,(0,D.sprintf)(
// translators: %s is the name of the consent key
// translators: %s is the name of the consent key
(0,D.__)("This section controls the %s consent key from Google Tag Manager","boxuk"),'"analytics_storage"')),(0,l.createElement)($.TextControl,{label:(0,D.__)("Title","boxuk"),value:e.analytics.title,onChange:a=>t({...e,analytics:{...e.analytics,title:a}})}),(0,l.createElement)($.TextareaControl,{rows:3,label:(0,D.__)("Analytics Storage Label","boxuk"),value:e.analyticsStorageLabel,onChange:a=>t({...e,analyticsStorageLabel:a})}),(0,l.createElement)($.TextareaControl,{rows:10,label:(0,D.__)("Description","boxuk"),value:e.analytics.description,onChange:a=>t({...e,analytics:{...e.analytics,description:a}})})),ze=({translations:e,setTranslations:t})=>(0,l.createElement)($.PanelBody,{initialOpen:!1,title:e.personalisation.title},(0,l.createElement)("p",null,(0,D.sprintf)(
// translators: %s is the name of the
// translators: %s is the name of the
(0,D.__)("This section controls the %s consent key from Google Tag Manager.","boxuk"),'"personalization_storage"')),(0,l.createElement)($.TextControl,{label:(0,D.__)("Title","boxuk"),value:e.personalisation.title,onChange:a=>t({...e,personalisation:{...e.personalisation,title:a}})}),(0,l.createElement)($.TextareaControl,{rows:3,label:(0,D.__)("Personalization Storage Label","boxuk"),value:e.personalizationStorageLabel,onChange:a=>t({...e,personalizationStorageLabel:a})}),(0,l.createElement)($.TextareaControl,{rows:10,label:(0,D.__)("Description","boxuk"),value:e.personalisation.description,onChange:a=>t({...e,personalisation:{...e.personalisation,description:a}})})),Ue=({translations:e,setTranslations:t})=>(0,l.createElement)($.PanelBody,{initialOpen:!1,title:e.advertising.title},(0,l.createElement)($.TextControl,{label:(0,D.__)("Title","boxuk"),value:e.advertising.title,onChange:a=>t({...e,advertising:{...e.advertising,title:a}})}),(0,l.createElement)($.TextareaControl,{rows:3,label:(0,D.__)("Advertising Storage Label","boxuk"),value:e.adStorageLabel,onChange:a=>t({...e,adStorageLabel:a})}),(0,l.createElement)($.TextareaControl,{rows:3,label:(0,D.__)("Advertising User Data Label","boxuk"),value:e.adUserDataLabel,onChange:a=>t({...e,adUserDataLabel:a})}),(0,l.createElement)($.TextareaControl,{rows:3,label:(0,D.__)("Advertising Personalization Label","boxuk"),value:e.adPersonalizationLabel,onChange:a=>t({...e,adPersonalizationLabel:a})}),(0,l.createElement)($.TextareaControl,{rows:10,label:(0,D.__)("Description","boxuk"),value:e.advertising.description,onChange:a=>t({...e,advertising:{...e.advertising,description:a}})})),He=({translations:e,setTranslations:t})=>(0,l.createElement)($.PanelBody,{initialOpen:!1,title:"Buttons"},(0,l.createElement)($.TextControl,{label:(0,D.__)("Accept All","boxuk"),value:e.preferences.acceptAllBtn,onChange:a=>t({...e,preferences:{...e.preferences,acceptAllBtn:a}})}),(0,l.createElement)($.TextControl,{label:(0,D.__)("Accept Necessary","boxuk"),value:e.preferences.acceptNecessaryBtn,onChange:a=>t({...e,preferences:{...e.preferences,acceptNecessaryBtn:a}})}),(0,l.createElement)($.TextControl,{label:(0,D.__)("Save Preferences","boxuk"),value:e.preferences.savePreferencesBtn,onChange:a=>t({...e,preferences:{...e.preferences,savePreferencesBtn:a}})})),Ge=()=>{const e=(0,m.useSelect)((e=>e(H).getTranslations()),[]),{setTranslations:t}=(0,m.useDispatch)(H);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)($.PanelBody,null,(0,l.createElement)($.TextControl,{label:(0,D.__)("Popup Title","boxuk"),value:e.preferences.title,onChange:a=>t({...e,preferences:{...e.preferences,title:a}})})),(0,l.createElement)($.PanelBody,{initialOpen:!1,title:"Introduction"},(0,l.createElement)($.TextControl,{label:(0,D.__)("Title","boxuk"),value:e.main.title,onChange:a=>t({...e,main:{...e.main,title:a}})}),(0,l.createElement)($.TextareaControl,{rows:10,label:(0,D.__)("Description","bouk"),value:e.main.description,onChange:a=>t({...e,main:{...e.main,description:a}})})),(0,l.createElement)(je,{translations:e,setTranslations:t}),(0,l.createElement)(Ve,{translations:e,setTranslations:t}),(0,l.createElement)(ze,{translations:e,setTranslations:t}),(0,l.createElement)(Ue,{translations:e,setTranslations:t}),(0,l.createElement)(He,{translations:e,setTranslations:t}))},Ye=()=>{const e=(0,m.useSelect)((e=>e(H).getTagData()),[]),{setGtmConfig:t}=(0,m.useDispatch)(H);return(0,l.createElement)($.PanelBody,null,(0,l.createElement)($.TextControl,{label:(0,D.__)("Tag ID","boxuk"),placeholder:"GTM-XXXXXXX",value:e.id,onChange:a=>t({...e,id:a}),required:!0}),(0,l.createElement)($.TextControl,{label:(0,D.__)("Authorisation (optional)","boxuk"),value:e.auth,placeholder:"",onChange:a=>t({...e,auth:a})}),(0,l.createElement)($.TextControl,{label:(0,D.__)("Preview ID (optional)","boxuk"),value:e.preview,placeholder:"env-123",onChange:a=>t({...e,preview:a})}))},Xe=({setCurrentTab:e})=>{const t=[{title:(0,D.__)("Modal","boxuk"),name:"modal",content:(0,l.createElement)(Ie,null)},{title:(0,D.__)("Preference Panel","boxuk"),name:"preferences",content:(0,l.createElement)(Ge,null)},{title:(0,D.__)("Tag Configuration","boxuk"),name:"tags",content:(0,l.createElement)(Ye,null)}];return(0,l.createElement)("div",{className:"interface-complementary-area"},(0,l.createElement)($.TabPanel,{onSelect:t=>"tags"!==t&&e(t),tabs:t},(({content:e})=>(0,l.createElement)($.Panel,null,e))))},$e=window.wp.primitives,qe=(0,W.jsx)($e.SVG,{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,W.jsx)($e.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4 14.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h8v13zm4.5-.5c0 .3-.2.5-.5.5h-2.5v-13H18c.3 0 .5.2.5.5v12z"})}),We=({showSidebar:e,setShowSidebar:t,hasFinishedResolution:a=!0})=>{const{save:n}=(0,m.useDispatch)(H);return(0,l.createElement)("div",{className:"editor-header edit-post-header"},(0,l.createElement)($.Flex,{direction:"row",justify:"space-between",align:"center",style:{padding:"1em"}},(0,l.createElement)("h2",null,(0,D.__)("Cookie Consent","boxuk")),a&&(0,l.createElement)($.Flex,{direction:"row",justify:"flex-end",gap:"1em"},(0,l.createElement)($.Button,{onClick:()=>t(!e),icon:qe,label:e?(0,D.__)("Hide Settings","boxuk"):(0,D.__)("Show Settings","boxuk"),className:e?"is-pressed":""}),(0,l.createElement)($.Button,{variant:"primary",onClick:n},(0,D.__)("Save","boxuk")))))},Je=()=>{const{data:e,dataHasLoaded:t}=(0,m.useSelect)((e=>{const{getData:t,hasFinishedResolution:a}=e(H);return{data:t(),dataHasLoaded:a("getData")}}),[]),[a,n]=(0,c.useState)("modal"),r=(0,q.useViewportMatch)("medium","<"),[s,o]=(0,c.useState)(!r),i=t?(0,l.createElement)("div",{className:"show--consent show--preferences",style:{padding:"48px 12px",height:"100%"}},(0,l.createElement)("div",{id:"cc-main",style:{position:"relative",marginLeft:"auto",marginRight:"auto"}},"preferences"===a?(0,l.createElement)(Me,null):(0,l.createElement)(we,null))):(0,l.createElement)($.Flex,{style:{height:"100%",backgroundColor:"white"},align:"center",justify:"center"},(0,l.createElement)($.Spinner,null));return(0,l.createElement)(ee,{header:(0,l.createElement)(We,{showSidebar:s&&t,setShowSidebar:o,hasFinishedResolution:t}),sidebar:s&&t&&(0,l.createElement)(Xe,{setCurrentTab:n}),content:i,notices:(0,l.createElement)(G.EditorSnackbars,null),editorNotices:(0,l.createElement)(G.EditorNotices,null)})};u()((()=>{const e=document.getElementById("consent-settings-root");e&&((0,m.register)(H),(0,c.createRoot)(e).render((0,l.createElement)(Je,null)))}))})();