(this["webpackJsonpads-generation"]=this["webpackJsonpads-generation"]||[]).push([[0],{38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},60:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"Context",(function(){return m})),n.d(i,"WasChanged",(function(){return O})),n.d(i,"ActionsContext",(function(){return y})),n.d(i,"Provider",(function(){return w}));var r={};n.r(r),n.d(r,"Context",(function(){return U})),n.d(r,"ActionsContext",(function(){return V})),n.d(r,"Provider",(function(){return $}));var a={};n.r(a),n.d(a,"BannersContext",(function(){return q})),n.d(a,"ActionsContext",(function(){return K})),n.d(a,"Provider",(function(){return G}));var o={};n.r(o),n.d(o,"Context",(function(){return J})),n.d(o,"ActionsContext",(function(){return Q})),n.d(o,"Provider",(function(){return X}));var s=n(0),c=n(27),l=n.n(c),h=(n(38),n(39),n(40),n(41),n(5)),d=n(2),g=n(28),u=n.n(g),f=Object.freeze([{key:"key1",width:1080,height:1920,backgroundColor:"#000",background:{x:0,y:380,width:1080,height:650,isCover:!1},texts:[{x:0,y:1200,width:1080,height:240,textAlign:"left",verticalAlign:"center",hPadding:100,vPadding:20,fontSize:72,lineHeight:84,fontFamily:"Arial",fontWeight:"bold",textColor:"#fff",backgroundColor:""},{x:0,y:1460,width:1080,height:300,autoHeight:!0,textAlign:"left",verticalAlign:"top",hPadding:100,vPadding:10,fontSize:40,lineHeight:70,fontFamily:"Arial",textColor:"#fff",backgroundColor:""}]},{key:"key2",width:1080,height:1080,backgroundColor:"#fff",background:{x:0,y:100,width:1080,height:460,isCover:!1},texts:[{x:0,y:600,width:1080,height:200,textAlign:"center",verticalAlign:"center",hPadding:100,vPadding:20,fontSize:66,lineHeight:80,fontFamily:"Arial",fontWeight:"bold",textColor:"#000",backgroundColor:""},{x:0,y:820,width:1080,height:200,textAlign:"center",verticalAlign:"center",hPadding:100,vPadding:10,fontSize:32,lineHeight:52,fontFamily:"Arial",textColor:"#000",backgroundColor:"",autoHeight:!0,pinTo:"bottom"}]},{key:"key3",width:1080,height:610,backgroundColor:"#000",background:{x:40,y:40,width:520,height:530,isCover:!1},texts:[{x:560,y:50,width:520,height:250,textAlign:"left",verticalAlign:"center",hPadding:50,vPadding:20,fontSize:48,lineHeight:60,fontFamily:"Arial",fontWeight:"bold",textColor:"#fff",backgroundColor:""},{x:560,y:300,width:520,height:300,textAlign:"left",verticalAlign:"top",hPadding:50,vPadding:10,fontSize:28,lineHeight:42,fontFamily:"Arial",textColor:"#fff",backgroundColor:"",autoHeight:!0,pinTo:"bottom"}]},{key:"key4",width:1080,height:1080,backgroundColor:"#000",background:{x:0,y:0,width:1080,height:1080,isCover:!0},texts:[{x:0,y:0,width:1080,height:600,textAlign:"center",verticalAlign:"center",hPadding:100,vPadding:40,fontSize:130,lineHeight:140,fontFamily:"Arial",fontWeight:"bold",textColor:"#fff",backgroundColor:"#cc2600cc"},{x:0,y:930,width:1080,height:150,textAlign:"center",verticalAlign:"center",hPadding:100,vPadding:10,fontSize:32,lineHeight:52,fontFamily:"Arial",fontWeight:"bold",textColor:"#000",backgroundColor:"#fffc",pinTo:"bottom"}]}]),b="https://ads-gen.herokuapp.com",x={getUrlData:"".concat(b,"/getUrlData"),imageUrl:"".concat(b,"/imageUrl?url=")},p=function(){var t={};return function(e){return t[e]||(t[e]=new Promise((function(t){var n=new Image;n.src=e,n.crossOrigin="Anonymous",n.onload=function(){t(createImageBitmap(n))}}))),t[e]}}(),v=function(t){return Promise.all(t.map((function(t){return p(t.src)})))},j=n(1),m=Object(s.createContext)({}),O=Object(s.createContext)(!1),y=Object(s.createContext)({}),w=function(t){var e=t.children,n=function(){var t=Object(s.useState)({}),e=Object(h.a)(t,2),n=e[0],i=e[1],r=Object(s.useState)(!1),a=Object(h.a)(r,2),o=a[0],c=a[1],l=Object(s.useCallback)((function(t){i(t)}),[i]),d=Object(s.useCallback)((function(t){var e=t.input,n=t.field,r=t.i;i((function(t){var i=Object.assign({},t);return i[n][r]=e,i}))}),[i]),g=Object(s.useCallback)((function(t){var e=t.field,n=t.i;l((function(t){if(t[e].length>1){var i=Object.assign({},t);return i[e].splice(n,1),c(!0),i}return t}))}),[l,c]);return{actions:Object(s.useMemo)((function(){return{setLinksData:l,setLinksDataFieldItem:d,removeLinksFieldItem:g,setWasChanged:c}}),[l,d,g,c]),value:Object(s.useMemo)((function(){return{linksData:n}}),[n]),wasChanged:o}}(),i=n.actions,r=n.value,a=n.wasChanged,o=function(t){var e=t.images;return Object(s.useEffect)((function(){e&&v(e)}),[e]),{loadImage:p,preloadImages:v}}(r.linksData),c=Object(s.useMemo)((function(){return Object(d.a)(Object(d.a)({},i),o)}),[i,o]);return Object(j.jsx)(m.Provider,{value:r,children:Object(j.jsx)(O.Provider,{value:a,children:Object(j.jsx)(y.Provider,{value:c,children:e})})})},C=n(11);var _,S,k,H,T,A,W,R,N,L,D,E,B,M,P,z,I,F=function(){var t=Object(s.useState)([]),e=Object(h.a)(t,2),n=e[0],i=e[1],r=Object(s.useCallback)((function(t){var e,n=function(t){var e=[0];return Object.keys(t).forEach((function(n){var i=[];t[n].forEach((function(t,r){e.forEach((function(t){i.push(Object(d.a)(Object(d.a)({},t),{},Object(C.a)({},n,r)))}))})),e=i})),e}({image:(e=t).images,title:e.titles,text:e.texts,template:e.templates});n.length&&i(n.sort((function(t,e){return f[t.template]>f[e.template]?1:f[t.template]<f[e.template]?-1:0})))}),[i]),a=Object(s.useCallback)((function(t){i((function(e){return e.filter((function(e,n){return n!==t}))}))}),[i]);return{actions:Object(s.useMemo)((function(){return{calcCombinations:r,removeItem:a}}),[r,a]),value:Object(s.useMemo)((function(){return{combinations:n}}),[n])}},U=Object(s.createContext)([]),V=Object(s.createContext)({}),$=function(t){var e=t.children,n=F(),i=n.actions,r=n.value;return Object(j.jsx)(U.Provider,{value:r,children:Object(j.jsx)(V.Provider,{value:i,children:e})})},q=Object(s.createContext)([]),K=Object(s.createContext)({}),G=function(t){var e=t.children,n=function(){var t=Object(s.useContext)(r.Context).combinations,e=Object(s.useContext)(i.Context).linksData,n=Object(s.useState)([]),a=Object(h.a)(n,2),o=a[0],c=a[1];Object(s.useEffect)((function(){c((function(n){return t.map((function(t){return Object(d.a)({image:e.images[t.image],title:e.titles[t.title],text:e.texts[t.text],template:e.templates[t.template]},n)}))}))}),[t,c,e]);var l=Object(s.useCallback)((function(t){var e=t.data,n=t.id;c((function(t){var i=t.slice();return i[n]=Object(d.a)(Object(d.a)({},i[n]),e),i}))}),[c]),g=Object(s.useCallback)((function(t){c((function(e){var n=Object.assign({},e);return n[t].removed=!0,n}))}),[c]);return{actions:Object(s.useMemo)((function(){return{changeBanner:l,removeBanner:g}}),[l,g]),banners:o}}(),a=n.actions,o=n.banners;return Object(j.jsx)(q.Provider,{value:o,children:Object(j.jsx)(K.Provider,{value:a,children:e})})},J=Object(s.createContext)({}),Q=Object(s.createContext)({}),X=function(t){var e=t.children,n=function(){var t=Object(s.useContext)(r.Context).combinations,e=Object(s.useState)({}),n=Object(h.a)(e,2),i=n[0],a=n[1];Object(s.useEffect)((function(){t.length&&a({})}),[t,a]);var o=Object(s.useCallback)((function(t){var e=t.data,n=t.id;a((function(t){var i=Object.assign({},t);return i[n]=Object(d.a)(Object(d.a)({},i[n]),e),i}))}),[a]),c=Object(s.useCallback)((function(t){var e=t.id;return function(){o({data:{removed:!0},id:e})}}),[o]);return{actions:Object(s.useMemo)((function(){return{changeResultItem:o,removeResultItem:c}}),[o,c]),result:i}}(),i=n.actions,a=n.result;return Object(j.jsx)(J.Provider,{value:a,children:Object(j.jsx)(Q.Provider,{value:i,children:e})})},Y=(n(60),"LinkToSource"),Z=function(){var t=Object(s.useState)(!1),e=Object(h.a)(t,2),n=e[0],a=e[1],o=Object(s.useState)(""),c=Object(h.a)(o,2),l=c[0],g=c[1],b=Object(s.useContext)(i.ActionsContext).setLinksData,p=Object(s.useContext)(r.ActionsContext).calcCombinations;return Object(j.jsxs)("form",{className:"".concat(Y,"-form"),onSubmit:function(t){var e;t.preventDefault(),a(!0),(e={url:l},u.a.get(x.getUrlData,{params:e}).then((function(t){return Object(d.a)(Object(d.a)({},t.data),{},{templates:f})})).catch((function(t){console.error(t)}))).then((function(e){try{e&&(b(e),p(e))}catch(t){throw new Error(t)}})).catch((function(t){console.warn(t)})).finally((function(){a(!1)}))},children:[Object(j.jsx)("input",{className:"".concat(Y,"-input"),placeholder:"\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a",value:l,onChange:function(t){return g(t.target.value)}}),Object(j.jsxs)("button",{className:"".concat(Y,"-submit"),type:"submit",disabled:!l||n,children:[Object(j.jsx)(ue,{isLoading:n,size:"s"}),!n&&"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"]})]})},tt=n(3),et=n(4),nt=et.b.button(_||(_=Object(tt.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  border: none;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: red;\n  color: #fff;\n  font-size: 20px;\n  line-height: 1;\n\n  &:hover {\n    background-color: #f00a;\n  }\n"]))),it=function(t){return Object(j.jsx)(nt,Object(d.a)(Object(d.a)({},t),{},{children:"\xd7"}))},rt=et.b.div(S||(S=Object(tt.a)(["\n  width: 100%;\n  display: grid;\n  grid-gap: 20px;\n"]))),at=et.b.h2(k||(k=Object(tt.a)(["\n  font-size: 20px;\n  font-weight: normal;\n  margin: 0;\n"]))),ot=et.b.div(H||(H=Object(tt.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 10px;\n"]))),st=et.b.div(T||(T=Object(tt.a)(["\n  padding: 6px 0;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: var(--radius-m);\n\n  canvas {\n    max-width: 100%;\n  }\n"]))),ct=(et.b.div(A||(A=Object(tt.a)(["\n\n"]))),Object(et.b)(it)(W||(W=Object(tt.a)([""]))),function(){var t=Object(s.useContext)(i.Context).linksData,e=Object(s.useContext)(i.WasChanged),n=Object(s.useContext)(r.Context).combinations,a=Object(s.useContext)(r.ActionsContext),o=a.removeItem,c=a.calcCombinations;Object(s.useEffect)((function(){e&&c(t)}),[t,e,c]);return n.length?Object(j.jsxs)(rt,{children:[Object(j.jsxs)(at,{children:["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b: ",n.length]}),Object(j.jsx)(ve,{}),Object(j.jsx)(ot,{children:n.map((function(e,n){var i,r,a=e.template,s=e.image,c=e.text,l=e.title,h="".concat(a,"_").concat(s,"_").concat(c,"_").concat(l);return Object(j.jsx)(st,{children:Object(j.jsx)(le,{id:h,texts:[t.titles[l],t.texts[c]],template:t.templates[a],background:null===(i=t.images[s])||void 0===i?void 0:i.src,onRemove:(r=n,function(){o(r)})})},h)}))})]}):null}),lt=Object(et.b)(it)(R||(R=Object(tt.a)(["\n  opacity: 0;\n  transition: opacity 0.3s ease;\n"]))),ht=et.b.div(N||(N=Object(tt.a)(["\n  width: 100%;\n  word-break: break-word;\n  display: grid;\n  grid-gap: 50px;\n"]))),dt=et.b.div(L||(L=Object(tt.a)(["\n  display: grid;\n  grid-gap: 30px;\n"]))),gt=et.b.div(D||(D=Object(tt.a)(["\n  display: grid;\n  grid-gap: 20px;\n"]))),ut=et.b.div(E||(E=Object(tt.a)(["\n  display: grid;\n  grid-gap: 10px;\n"]))),ft=Object(et.b)(gt)(B||(B=Object(tt.a)(["\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(3, 1fr);\n"]))),bt=et.b.div(M||(M=Object(tt.a)(["\n  position: relative;\n  display: block;\n  padding: 10px 20px;\n  background: #fff3;\n  border-radius: 3px;\n  overflow: hidden;\n\n  &:hover "," {\n    opacity: 1;\n    transition: opacity 0.1s ease;\n  }\n"])),lt),xt=Object(et.b)(bt)(P||(P=Object(tt.a)(["\n  padding: 0;\n  overflow: hidden;\n"]))),pt=et.b.h2(z||(z=Object(tt.a)(["\n  font-size: 20px;\n  font-weight: normal;\n  margin: 0;\n"]))),vt=et.b.img(I||(I=Object(tt.a)(["\n  display: block;\n  width: 100%;\n"]))),jt=function(t){var e=t.image,n=t.onRemove;return console.log(e),Object(j.jsxs)(xt,{children:[Object(j.jsx)(vt,{src:e.src}),Object(j.jsx)(lt,{onClick:n})]})},mt=function(t){var e=t.text,n=t.onChange,i=t.onRemove;return Object(j.jsxs)(bt,{children:[Object(j.jsx)("span",{contentEditable:!0,suppressContentEditableWarning:!0,onBlur:n,children:e}),Object(j.jsx)(lt,{onClick:i})]})},Ot=function(){var t=Object(s.useContext)(i.Context).linksData,e=Object(s.useContext)(i.ActionsContext),n=e.setLinksDataFieldItem,r=e.removeLinksFieldItem,a=Object.values(t).filter((function(t){return"object"===typeof t})).length>2,o=Object(s.useCallback)((function(t){return function(e){n(Object(d.a)(Object(d.a)({},t),{},{input:e.target.textContent}))}}),[n]),c=Object(s.useCallback)((function(t){return function(){r(t)}}),[r]);return a?Object(j.jsx)(ht,{children:Object(j.jsxs)(dt,{children:[Object(j.jsxs)(gt,{children:[Object(j.jsx)(pt,{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(j.jsx)(ut,{children:t.titles.map((function(t,e){return Object(j.jsx)(mt,{text:t,index:e,onChange:o({field:"titles",i:e}),onRemove:c({field:"titles",i:e})},"".concat(e,"_").concat(t))}))})]}),Object(j.jsxs)(gt,{children:[Object(j.jsx)(pt,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(j.jsx)(ut,{children:t.texts.map((function(t,e){return Object(j.jsx)(mt,{text:t,index:e,onChange:o({field:"texts",i:e}),onRemove:c({field:"texts",i:e})},"".concat(e,"_").concat(t))}))})]}),Object(j.jsxs)(gt,{children:[Object(j.jsx)(pt,{children:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(j.jsx)(ft,{children:t.images.map((function(t,e){return Object(j.jsx)(jt,{image:t,index:e,onRemove:c({field:"images",i:e})},"".concat(e,"_").concat(t.src))}))})]})]})}):null},yt=n(6),wt=n.n(yt),Ct=n(9);function _t(t){var e=t.canvas,n=t.filename;return function(){e.toBlob(function(){var t=Object(Ct.a)(wt.a.mark((function t(e){return wt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,URL.createObjectURL(e);case 2:St({url:t.sent,filename:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}function St(t){var e=t.url,n=t.filename,i=void 0===n?"file":n,r=document.createElement("a");r.href=e,r.download=i+".png",document.body.appendChild(r),r.click(),r.remove()}var kt={init:function(t){var e=t.document,n=t.navigator.userAgent,i=Math.ceil,r=Math.floor,a="fusioncharts-smartlabel-",o=a+"container",s=a+"tag";return kt={win:t,containerClass:o,classNameWithTag:s,classNameWithTagBR:"fusioncharts-smartlabel-br",maxDefaultCacheLimit:1e3,classNameReg:/\bfusioncharts-smartlabel-tag\b/,classNameBrReg:/\bfusioncharts-smartlabel-br\b/,spanAdditionRegx:/(<[^<\>]+?\>)|(&(?:[a-z]+|#[0-9]+);|.)/gi,spanAdditionReplacer:'$1<span class="'+s+'">$2</span>',spanRemovalRegx:new RegExp("\\<span[^\\>]+?"+s+"[^\\>]{0,}\\>(.*?)\\<\\/span\\>","ig"),xmlTagRegEx:new RegExp("<[^>][^<]*[^>]+>","i"),brRegex:new RegExp("({br[ ]*})|(<br[ ]*>)|(<br[ ]*/>)|(<BR[ ]*/>)|(<br\\>)","g"),ltgtRegex:/&lt;|&gt;/g,nbspRegex:/&nbsp;|&#160;|&#xA0;/g,htmlSpecialEntityRegex:/&amp;|&quot;|&lt;|&gt;/g,brReplaceRegex:/<br\/>/gi,testStrAvg:"WgI",parentContainerStyle:{position:"absolute",top:"-9999em",whiteSpace:"nowrap",padding:"0px",width:"1px",height:"1px",overflow:"hidden"},supportedStyle:{font:"font",fontFamily:"font-family","font-family":"font-family",fontWeight:"font-weight","font-weight":"font-weight",fontSize:"font-size","font-size":"font-size",lineHeight:"line-height","line-height":"line-height",fontStyle:"font-style","font-style":"font-style"},getDocumentSupport:function(){var i,r,a;return e.getElementsByClassName?(i="getElementsByClassName",r=s,a=!0):(i="getElementsByTagName",r="span",a=!1),{isIE:/msie/i.test(n)&&!t.opera,hasSVG:Boolean(t.SVGAngle||e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")),isHeadLess:new RegExp(" HtmlUnit").test(n),isWebKit:new RegExp(" AppleWebKit/").test(n),childRetriverFn:i,childRetriverString:r,noClassTesting:a}},createContainer:function(t){var n,i;if(t&&(t.offsetWidth||t.offsetHeight)){if(t.appendChild)return t.appendChild(i=e.createElement("DIV")),i.className=o,i.setAttribute("aria-hidden","true"),i.setAttribute("role","presentation"),i}else if((n=e.getElementsByTagName("body")[0])&&n.appendChild)return(i=e.createElement("DIV")).className=o,i.setAttribute("aria-hidden","true"),i.setAttribute("role","presentation"),n.appendChild(i),i},getNearestBreakIndex:function(t,e,n){if(!t||!t.length)return 0;var a,o=n._getWidthFn(),s=0,c=0,l=o(t),h=l/t.length;if(a=e,s=i(e/h),l<e)return t.length-1;for(s>t.length&&(a=e-l,s=t.length);a>0;){if(a=e-o(t.substr(0,s)),!(c=r(a/h)))return s;s+=c}for(;a<0;){if(a=e-o(t.substr(0,s)),!(c=r(a/h)))return s;s+=c}return s},parseStyle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={};return e.fontSize=(t.fontSize||t["font-size"]||"12px")+"",e.fontVariant=t.fontVariant||t["font-variant"]||"normal",e.fontWeight=t.fontWeight||t["font-weight"]||"normal",e.fontStyle=t.fontStyle||t["font-style"]||"normal",e.fontFamily=t.fontFamily||t["font-family"]||"Verdana,sans",e.lineHeight=t.lineHeight||t["line-height"]||"15px",e},setLineHeight:function(t){var e=t.fontSize;return t.lineHeight=t.lineHeight||t["line-height"]||1.2*parseInt(e,10)+"px",t},_getCleanHeight:function(t){return t=t.replace(/px/g,""),Number(t)},_getDimentionUsingDiv:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e._container;return t instanceof Array&&(t=t.join("")),n.innerHTML=t,{width:n.offsetWidth,height:n.offsetHeight}},_getDimentionUsingCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.ctx,i=e.style,r=kt._getCleanHeight(i.lineHeight);return t=t instanceof Array?(t=t.join("")).replace(/<br \/>/g,""):t.replace(/<br \/>/g,""),{width:n.measureText(t).width,height:r}},_hasOnlyBRTag:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!kt.xmlTagRegEx.test(t)&&kt.brRegex.test(t)},_getDimentionOfMultiLineText:function(){var t,e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,a=i.replace(kt.brRegex,"<br />"),o=kt._getTextArray(a),s=0,c=0,l=r._getWidthFn(),h=kt._getCleanHeight(r.style.lineHeight),d=h,g={};for(t=0,e=o.length;t<e;t++)"<br />"===o[t]?(c=Math.max(c,s),s=0,d+=h):(s+=n=l(o[t]),g[o[t]]=n);return{height:d,width:c=Math.max(c,s),detailObj:g}},_getTextArray:function(){var t,e,n,i,r,a,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=[];for(n=(r=o.split("<br />")).length,t=0;t<n;t++){for(i=(a=r[t].split("")).length,e=0;e<i;e++)s.push(a[e]);t!==n-1&&s.push("<br />")}return s},_findLastIndex:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,i=e.length;for(t=i-1;t>=0;t--)if(e[t]===n)return t;return-1}},kt}},Ht=kt,Tt=Ht.init(window),At=Tt.win.document,Wt=Tt.getDocumentSupport(),Rt=Wt.isWebKit?0:4.5;function Nt(t,e,n){var i;n=(n=n>5?n:5)<20?n:20,this.maxContainers=n,this.first=null,this.last=null,this.containers={},this.length=0,this.rootNode=t,e&&((i=At.createElementNS("http://www.w3.org/2000/svg","svg")).setAttributeNS("http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"),i.setAttributeNS("http://www.w3.org/2000/svg","height","0"),i.setAttributeNS("http://www.w3.org/2000/svg","width","0"),this.svgRoot=i,this.rootNode.appendChild(i))}Nt.prototype.get=function(t){var e,n,i,r=this.containers,a=this.length,o=this.maxContainers,s="";for(n in Tt.supportedStyle)void 0!==t[n]&&(s+=Tt.supportedStyle[n]+":"+t[n]+";");if(!s)return!1;if(i=r[s])this.first!==i&&(i.prev&&(i.prev.next=i.next),i.next&&(i.next.prev=i.prev),i.next=this.first,i.next.prev=i,this.last===i&&(this.last=i.prev),i.prev=null,this.first=i);else{if(a>=o)for(e=a-o+1;e--;)this.removeContainer(this.last);i=this.addContainer(s)}return i},Nt.prototype._makeDivNode=function(t){var e,n=t.keyStr;t.node||(t.node=At.createElement("div"),t.node.className="fusioncharts-div",this.rootNode.appendChild(t.node)),e=t.node,Wt.isIE&&!Wt.hasSVG?e.style.setAttribute("cssText",n):e.setAttribute("style",n),e.setAttribute("aria-hidden","true"),e.setAttribute("role","presentation"),e.style.display="inline-block",e.innerHTML=Tt.testStrAvg,t.lineHeight=e.offsetHeight,t.avgCharWidth=e.offsetWidth/3,Wt.isBrowserLess?(t.svgText||(t.svgText=At.createElementNS("http://www.w3.org/2000/svg","text"),this.svgRoot.appendChild(e)),(e=t.svgText).setAttribute("style",n),e.textContent=Tt.testStrAvg,t.lineHeight=e.getBBox().height,t.avgCharWidth=(e.getBBox().width-Rt)/3,e.textContent="...",t.ellipsesWidth=e.getBBox().width-Rt,e.textContent=".",t.dotWidth=e.getBBox().width-Rt):(e.innerHTML="...",t.ellipsesWidth=e.offsetWidth,e.innerHTML=".",t.dotWidth=e.offsetWidth,e.innerHTML="")},Nt.prototype.addContainer=function(t){var e;return this.containers[t]=e={next:null,prev:null,node:null,ellipsesWidth:0,lineHeight:0,dotWidth:0,avgCharWidth:4,keyStr:t,charCache:{}},e.next=this.first,e.next&&(e.next.prev=e),this.first=e,this.last||(this.last=e),this.length+=1,e},Nt.prototype.removeContainer=function(t){var e=t.keyStr;e&&this.length&&t&&(this.length-=1,t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),this.first===t&&(this.first=t.next),this.last===t&&(this.last=t.prev),t.node&&t.node.parentNode.removeChild(t.node),delete this.containers[e])},Nt.prototype.dispose=function(){var t,e=this.containers;for(t in this.maxContainers=null,e)this.removeContainer(e[t]);this.rootNode.parentNode.removeChild(this.rootNode),this.rootNode=null,this.first=null,this.last=null};var Lt=Nt,Dt=Ht.init(window),Et=Dt.win.document,Bt=Dt.win.Math,Mt=Bt.max,Pt=Bt.round,zt={" ":"&nbsp;"},It=Dt.getDocumentSupport(),Ft=It.isWebKit?0:4.5;function Ut(t,e,n){var i,r,a,o=!1,s=window.document.createElement("canvas");for(r in(n=n||{}).maxCacheLimit=isFinite(a=n.maxCacheLimit)?a:Dt.maxDefaultCacheLimit,"string"===typeof t&&(t=Et.getElementById(t)),(i=Dt.createContainer(t)).innerHTML=Dt.testStrAvg,!It.isHeadLess&&(It.isIE||i.offsetHeight||i.offsetWidth)||(o=!0),i.innerHTML="",Dt.parentContainerStyle)i.style[r]=Dt.parentContainerStyle[r];this.parentContainer=i,this.ctx=s&&s.getContext&&s.getContext("2d"),this._containerManager=new Lt(i,o,10),this._showNoEllipses=!e,this._init=!0,this.style={},this.oldStyle={},this.options=n,this.setStyle()}Ut.textToLines=function(t){return(t=t||{}).text?"string"!==typeof t.text&&(t.text=t.text.toString()):t.text="",t.lines=t.text.split(/\r?\n|<br\s*?\/?>/gi),t},Ut.prototype._calCharDimWithCache=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;if(!this._init)return!1;var i,r,a,o,s,c,l,h,d,g=this.options.maxCacheLimit,u=this.style||{};return c=this._advancedCache=this._advancedCache||(this._advancedCache={}),l=this._advancedCacheKey||(this._advancedCacheKey=[]),h=t+u.fontSize+u.fontFamily+u.fontWeight+u.fontStyle,d=t+"init"+u.fontSize+u.fontFamily+u.fontWeight+u.fontStyle,!this.ctx&&zt[t]&&(t=zt[t]),e?void 0===(s=c[d])&&(r=this._getDimention(t.repeat?t.repeat(n):Array(n+1).join(t)).width,a=this._getDimention(t).width,s=c[d]=(r-n*a)/(n+1),l.push(d),l.length>g&&delete c[l.shift()]):s=0,(o=c[h])?{width:o.width,height:o.height}:((i=this._getDimention(t)).width+=s,c[h]={width:i.width,height:i.height},l.push(h),l.length>g&&delete c[l.shift()],i)},Ut.prototype._getDimention=function(t){return this.requireDiv||!this.ctx?Dt._getDimentionUsingDiv(t,this):Dt._getDimentionUsingCanvas(t,this)},Ut.prototype._getWidthFn=function(){var t=this,e=t._containerObj.svgText;return e?function(t){var n,i;return e.textContent=t,(i=(n=e.getBBox()).width-Ft)<1&&(i=n.width),i}:function(e){return t.requireDiv||!t.ctx?Dt._getDimentionUsingDiv(e,t).width:Dt._getDimentionUsingCanvas(e,t).width}},Ut.prototype._isSameStyle=function(){var t=this.oldStyle||{},e=this.style;return e.fontSize===t.fontSize&&e.fontFamily===t.fontFamily&&e.fontStyle===t.fontStyle&&e.fontWeight===t.fontWeight&&e.lineHeight===t.lineHeight&&e.fontVariant===t.fontVariant},Ut.prototype._setStyleOfCanvas=function(){if(!this._isSameStyle()){var t,e,n=this,i=n.style,r=i.fontStyle,a=i.fontVariant,o=i.fontWeight,s=i.fontSize,c=i.fontFamily;i.lineHeight;t=r+" "+a+" "+o+" "+(s+=-1===s.indexOf("px")?"px":"")+" "+c,n.ctx.font=t,e=this._containerObj=this._containerManager.get(i),this._containerObj?(this._container=e.node,this._context=e.context,this._cache=e.charCache,this._lineHeight=e.lineHeight,this._styleNotSet=!1):this._styleNotSet=!0,e.ellipsesWidth=n._calCharDimWithCache("...",!1).width,e.dotWidth=n._calCharDimWithCache(".",!1).width,e.lineHeight=this._lineHeight=e.lineHeight||Dt._getCleanHeight(i.lineHeight),this.oldStyle=i}},Ut.prototype._setStyleOfDiv=function(){var t,e=this.style;this._containerObj=t=this._containerManager.get(e),t.node||this._containerManager._makeDivNode(this._containerObj),this._containerObj?(this._container=t.node,this._context=t.context,this._cache=t.charCache,this._lineHeight=t.lineHeight,this._styleNotSet=!1):this._styleNotSet=!0},Ut.prototype._updateStyle=function(){return this.requireDiv||!this.ctx?this._setStyleOfDiv():this._setStyleOfCanvas()},Ut.prototype.setStyle=function(t){return this.style=Dt.parseStyle(t),Dt.setLineHeight(this.style),this},Ut.prototype.useEllipsesOnOverflow=function(t){return this._init?(this._showNoEllipses=!t,this):this},Ut.prototype.getSmartText=function(t,e,n,i){if(!this._init)return!1;void 0===t||null===t?t="":"string"!==typeof t&&(t=t.toString());var r,a,o,s,c,l,h,d,g,u,f,b,x,p,v,j,m,O,y,w,C,_,S,k,H,T,A,W,R,N,L,D,E,B,M,P=0,z=-1,I=-1,F=-1,U=0,V=0,$=[],q=0,K=this._showNoEllipses?"":"...",G=this.ctx,J=[],Q=-1,X=-1,Y=-1,Z=function(t){for(var e=/\s/,n=(t=t.replace(/^\s\s*/,"")).length;e.test(t.charAt(n-=1)););return t.slice(0,n+1)},tt={text:t,maxWidth:e,maxHeight:n,width:null,height:null,oriTextWidth:null,oriTextHeight:null,oriText:t,isTruncated:!1};if(A=Dt.xmlTagRegEx.test(t)||Dt.nbspRegex.test(t),B=Dt._hasOnlyBRTag(t),this.requireDiv=A&&!B,this._updateStyle(),W=this._lineHeight,R=this._context,N=this._container,D=(L=this._containerObj).ellipsesWidth,E=L.dotWidth,l=t.replace(Dt.spanAdditionRegx,"$2"),b=this._getWidthFn(),W-n<=1&&W-n>=0&&(n*=1.2),G||N){if(!It.isBrowserLess){if(A?B?(t=t.replace(Dt.brRegex,"<br />"),M=Dt._getDimentionOfMultiLineText(t,this),tt.oriTextWidth=h=M.width,tt.oriTextHeight=d=M.height):(N.innerHTML=t,tt.oriTextWidth=h=N.offsetWidth,tt.oriTextHeight=d=N.offsetHeight):(s=t=t.replace(Dt.ltgtRegex,(function(t){return"&lt;"===t?"<":">"})),v=this.getSize(s,!0,{hasHTMLTag:A,hasOnlyBrTag:B,cleanText:!0}),tt.oriTextWidth=h=v.width,tt.oriTextHeight=d=v.height),d<=n&&h<=e)return tt.width=tt.oriTextWidth=h,tt.height=tt.oriTextHeight=d,tt;if(W>n)return tt.text="",tt.width=tt.oriTextWidth=0,tt.height=tt.oriTextHeight=0,tt}if(t=Z(t).replace(/(\s+)/g," "),c=this._showNoEllipses?e:e-D,!A||B){if(r=($=Dt._getTextArray(t)).length,a="",o=[],f=$[0],this._cache[f]?y=this._cache[f].width:(y=b(f),this._cache[f]={width:y}),c>y&&!B)o=t.substr(0,Dt.getNearestBreakIndex(t,c,this)).split("");else{if(y>e)return tt.text="",tt.width=tt.oriTextWidth=tt.height=tt.oriTextHeight=0,tt;K&&((c=e-2*E)>y?K="..":(c=e-E)>y?K=".":(c=0,K=""))}if(q=o.length,U=b(o.join("")),V=this._lineHeight,i){for(;q<r;q+=1)if(f=o[q]=$[q],"<br />"!==o[q]){if(this._cache[f]?y=this._cache[f].width:(v&&(y=v.detailObj[f])||(y=b(f)),this._cache[f]={width:y}),(U+=y)>c&&(a||(a=o.slice(0,-1).join("")),U>e))return tt.text=Z(a)+K,tt.tooltext=tt.oriText,tt.width=Mt(P,U),tt.height=V,tt.isTruncated=!0,tt}else V+=this._lineHeight,F=q,P=Mt(P,U),U=0,a=null;return tt.text=o.join(""),tt.width=Mt(P,U),tt.height=V,tt}for(;q<r;q+=1){if(" "!==(f=o[q]=$[q])||R||(f=this.ctx?" ":"&nbsp;"),"<br />"===o[q]){if(P=Mt(P,U),(V+=this._lineHeight)<=n){F=q,U=0,a=null;continue}if(V>n)return a=o.slice(0,-1).join(""),tt.text=Z(a)+K,tt.tooltext=l,tt.width=P,tt.height=V-this._lineHeight,tt.isTruncated=!0,tt}if(this._cache[f]?y=this._cache[f].width:(v&&(y=v.detailObj[f])||(y=b(f)),this._cache[f]={width:y}),(U+=y)>c&&(a||(a=o.slice(0,-1).join("")),U>e)){if("<br />"===$[q+1])continue;if(I=Dt._findLastIndex($.slice(0,o.length)," "),z=Dt._findLastIndex($.slice(0,o.length),"-"),I>F?(U=b(o.slice(F+1,I).join("")),o.splice(I,1,"<br />"),F=I,g=I+1):z>F?(z===o.length-1?(U=b(o.slice(F+1,I).join("")),o.splice(z,1,"<br />-")):(U=b(o.slice(F+1,I).join("")),o.splice(z,1,"-<br />")),F=z,g=z+1):(o.splice(o.length-1,1,"<br />"+$[q]),Y=o.length-2,U=b(o.slice(F+1,Y+1).join("")),F=Y,g=q),(V+=this._lineHeight)>n)return tt.text=Z(a)+K,tt.tooltext=tt.oriText,tt.width=e,tt.height=V-this._lineHeight,tt.isTruncated=!0,tt;P=Mt(P,U),a=null,B?U=Dt._getDimentionOfMultiLineText(o.slice(F+1).join(""),this).width:(u=Dt.getNearestBreakIndex(t.substr(g),c,this),U=b(t.substr(g,u||1)),o.length<g+u&&(q=(o=o.concat(t.substr(o.length,g+u-o.length).split(""))).length-1))}}return P=Mt(P,U),tt.text=o.join(""),tt.width=P,tt.height=V,tt}for(l=t.replace(Dt.spanAdditionRegx,"$2"),t=(t=t.replace(Dt.spanAdditionRegx,Dt.spanAdditionReplacer)).replace(/(<br\s*\/*\>)/g,'<span class="'+[Dt.classNameWithTag," ",Dt.classNameWithTagBR].join("")+'">$1</span>'),N.innerHTML=t,m=0,O=(j=N[It.childRetriverFn](It.childRetriverString)).length;m<O;m+=1)w=j[m],(It.noClassTesting||Dt.classNameReg.test(w.className))&&""!==(C=w.innerHTML)&&(" "===C?X=J.length:"-"===C&&(Q=J.length),J.push({spaceIdx:X,dashIdx:Q,elem:w}),$.push(C));if(q=0,(y=(r=J.length)&&J[0].elem.offsetWidth)>e||!r)return tt.text="",tt.width=tt.oriTextWidth=tt.height=tt.oriTextHeight=0,tt;if(y>c&&!this._showNoEllipses&&((c=e-2*E)>y?K="..":(c=e-E)>y?K=".":(c=0,K="")),x=J[0].elem.offsetLeft,p=J[0].elem.offsetTop,i)for(;q<r;q+=1)(_=(w=J[q].elem).offsetLeft-x+w.offsetWidth)>c&&(T||(T=q),N.offsetWidth>e&&(H=q,q=r));else for(;q<r;q+=1)S=(w=J[q].elem).offsetHeight+(w.offsetTop-p),k=null,(_=w.offsetLeft-x+w.offsetWidth)>c?(T||(T=q),_>e&&(I=J[q].spaceIdx,z=J[q].dashIdx,I>F?(J[I].elem.innerHTML="<br/>",F=I):z>F?(J[z].elem.innerHTML=z===q?"<br/>-":"-<br/>",F=z):w.parentNode.insertBefore(k=Et.createElement("br"),w),w.offsetHeight+w.offsetTop>n?(k?k.parentNode.removeChild(k):F===z?J[z].elem.innerHTML="-":J[I].elem.innerHTML=" ",H=q,q=r):T=null)):S>n&&(H=q,q=r);if(H<r){for(tt.isTruncated=!0,T=T||H,q=r-1;q>=T;q-=1)(w=J[q].elem).parentNode.removeChild(w);for(;q>=0;q-=1)w=J[q].elem,Dt.classNameBrReg.test(w.className)?w.parentNode.removeChild(w):q=0}return tt.text=N.innerHTML.replace(Dt.spanRemovalRegx,"$1").replace(/\&amp\;/g,"&"),tt.isTruncated&&(tt.text+=K,tt.tooltext=l),tt.height=N.offsetHeight,tt.width=N.offsetWidth,tt}return tt.error=new Error("Body Tag Missing!"),tt},Ut.prototype.getSize=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!this._init)return!1;void 0===t||null===t?t="":"string"!==typeof t&&(t=t.toString());var i,r,a,o,s,c,l=0,h=0,g={},u=n.hasHTMLTag,f=n.hasOnlyBrTag;if("undefined"===typeof u&&(u=Dt.xmlTagRegEx.test(t)||Dt.nbspRegex.test(t)),"undefined"===typeof f&&(f=Dt._hasOnlyBRTag(t)),this.requireDiv=u&&!f,n.cleanText||(t=t.replace(Dt.ltgtRegex,(function(t){return"&lt;"===t?"<":">"}))),this._updateStyle(),c=this._container,!e)return this._calCharDimWithCache(t);for(o=0,s=(i=t.split("")).length;o<s;o++)r=i[o],a=this._calCharDimWithCache(r,!1,i.length),h=Mt(h,a.height),l+=a.width,g[r]=a.width;return f?Object(d.a)(Object(d.a)({},Dt._getDimentionOfMultiLineText(t,this)),{},{detailObj:g}):u?(c.innerHTML=t,{width:c.offsetWidth,height:c.offsetHeight,detailObj:g}):{width:Pt(l),height:h,detailObj:g}},Ut.prototype.getOriSize=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSize(t,e,n)},Ut.prototype.dispose=function(){return this._init?(this._containerManager&&this._containerManager.dispose&&this._containerManager.dispose(),delete this._container,delete this._context,delete this._cache,delete this._containerManager,delete this._containerObj,delete this.id,delete this.style,delete this.parentContainer,delete this._showNoEllipses,this):this};var Vt=Ut,$t=new Vt("div",!0),qt=function(t){var e=t.text,n=t.fontSize,i=t.fontFamily,r=t.fontWeight,a=void 0===r?"normal":r,o=t.lineHeight,s=t.width,c=t.height,l=s-2*t.hPadding,h=c-2*t.vPadding;$t.setStyle({lineHeight:o&&"".concat(o,"px"),fontSize:n&&"".concat(n,"px"),fontFamily:i||"Arial",fontWeight:a,fontStyle:"normal"});var g=$t.getSmartText(e,l,h,!1),u=Vt.textToLines(g);return Object(d.a)(Object(d.a)({},t),{},{lines:u.lines,lineHeight:o,textWidth:u.width,textHeight:u.height,text:u.text,oriText:e})};function Kt(t){return function(e,n,i,r){var a=t?Math.min(e/i,n/r):Math.max(e/i,n/r);return{x:e/2-i/2*a,y:n/2-r/2*a,width:i*a,height:r*a}}}Kt(!1),Kt(!0),n(8);var Gt,Jt,Qt,Xt,Yt,Zt,te,ee,ne=function(t,e){var n=e.background,i=Kt(n.isCover)(n.bitmap.width,n.bitmap.height,n.width,n.height),r=i.width,a=i.height,o=i.x,s=i.y;t.drawImage(n.bitmap,o,s,r,a,n.x,n.y,n.width,n.height)},ie=function(t){return function(e){var n=e.width,i=e.height,r=e.autoHeight,a=e.lines,o=e.fontSize,s=e.fontFamily,c=e.fontWeight,l=void 0===c?"normal":c,h=e.lineHeight,d=e.hPadding,g=e.vPadding,u=e.verticalAlign,f=e.textAlign,b=e.textWidth,x=e.textHeight,p=e.textColor,v=e.backgroundColor,j=e.x,m=void 0===j?0:j,O=e.y,y=void 0===O?0:O;t.fillStyle=v||"#0000",t.fillRect(m,y,n,r?x+2*g:i),t.fillStyle=p||"#111",t.font="".concat(l," ").concat(o,"px ").concat(s),t.textBaseline="middle",t.textAlign=f;var w=m+function(t){var e=t.align,n=t.textWidth,i=t.width,r=t.padding;switch(e){case"center":return i/2;case"right":return n+r;default:return r}}({align:f,textWidth:b,width:n,padding:d}),C=y+function(t){var e=t.align,n=t.textHeight,i=t.height,r=t.padding,a=i-n;switch(e){case"center":return a/2;case"bottom":return n;default:return r}}({align:u,textHeight:x,height:i,padding:g});a.forEach((function(e,n){t.fillText(e,w,C+h*(n+.5))}))}},re=function(t,e){var n=e.width,i=e.height,r=e.backgroundColor;t.fillStyle=r||"#000",t.fillRect(0,0,n,i)},ae=function(){var t=Object(Ct.a)(wt.a.mark((function t(e,n){var i,r,a,o,s;return wt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.width,r=n.height,a=n.texts,o=n.background,s=n.backgroundColor,re(e,{width:i,height:r,backgroundColor:s}),ne(e,{background:o}),a.forEach(ie(e)),t.abrupt("return",{state:"ready"});case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),oe=et.b.div(Gt||(Gt=Object(tt.a)(["\n  position: relative;\n\n  button {\n    opacity: 0;\n    transition: opacity .1s ease;\n  }\n\n  &:hover button {\n    opacity: 1;\n    transition: opacity .2s ease;\n  }\n"]))),se=Object(et.b)(it)(Jt||(Jt=Object(tt.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n"]))),ce=et.b.button(Qt||(Qt=Object(tt.a)(["\n  position: absolute;\n  left: 10px;\n  top: 10px;\n"]))),le=function(t){var e=t.id,n=t.template,r=t.texts,a=t.background,c=t.onRemove,l=Object(s.useState)(!1),g=Object(h.a)(l,2),u=g[0],f=g[1],b=Object(s.useState)(null),x=Object(h.a)(b,2),p=x[0],v=x[1],m=Object(s.useContext)(i.ActionsContext).loadImage,O=Object(s.useContext)(o.ActionsContext).changeResultItem,y=Object(s.useCallback)(function(){var t=Object(Ct.a)(wt.a.mark((function t(i){var o,s;return wt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===i){t.next=10;break}return f(!1),v(i),o=i.getContext("2d"),t.next=6,m(a);case 6:s=t.sent,ae(o,Object(d.a)(Object(d.a)({},n),{},{texts:r.map((function(t,e){return Object(d.a)(Object(d.a)({},n.texts[e]),{},{text:t})})).map(qt),background:Object(d.a)(Object(d.a)({},n.background),{},{bitmap:s,src:a})})),y&&f(!0),O({data:{canvas:i,bitmap:s,texts:r,background:a,template:n},id:e});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[n,r,a,m,O,e,f]),w=r[0]||r[1]||"";return Object(j.jsxs)(oe,{children:[Object(j.jsx)(ue,{isLoading:!u}),u&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ce,{onClick:_t({canvas:p,filename:"".concat(n.width,"x").concat(n.height,"_").concat(e,"_").concat(w.substring(0,5).replaceAll(" ","-"))}),children:"download"}),Object(j.jsx)(se,{onClick:c})]}),Object(j.jsx)("canvas",{style:{display:u?"block":"none"},ref:y,width:n.width,height:n.height})]})},he=Object(et.c)(Xt||(Xt=Object(tt.a)(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]))),de=et.b.div(Yt||(Yt=Object(tt.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n"]))),ge=et.b.div(Zt||(Zt=Object(tt.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px;\n  justify-content: center;\n  align-content: center;\n  position: relative;\n  width: 40px;\n  height: 40px;\n\n  ","\n\n  div {\n    border: 8px solid #fff;\n    opacity: 1;\n    border-radius: 50%;\n    animation: "," 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n\n    &:nth-child(2) {\n      animation-delay: -0.5s;\n    }\n  }\n"])),(function(t){return"s"===t.size&&Object(et.a)(te||(te=Object(tt.a)(["\n    width: 10px;\n    height: 0;\n  "])))}),he),ue=function(t){var e=t.isLoading,n=void 0!==e&&e,i=t.size,r=void 0===i?"m":i;return n?Object(j.jsx)(de,{children:Object(j.jsxs)(ge,{size:r,children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})}):null},fe=et.b.div(ee||(ee=Object(tt.a)(["\n  display: grid;\n  grid-gap: 20px;\n"]))),be=n(32),xe=n.n(be),pe=n(33),ve=function(){var t=Object(s.useState)(!1),e=Object(h.a)(t,2),n=e[0],i=e[1],c=Object(s.useContext)(o.Context),l=Object(s.useContext)(a.BannersContext),d=Object(s.useContext)(r.Context).combinations,g=function(t){var e=t.setLoading;return function(t){var n=t.creatives;e(!0);var i=new xe.a;setTimeout((function(){Object.entries(n).forEach((function(t){var e=Object(h.a)(t,2),n=e[0],r=e[1],a=new Promise((function(t){r.canvas.toBlob((function(e){t(e)}))})),o=r.template,s=o.width,c=o.height,l=r.texts[0]||r.texts[1]||"";i.file("".concat(s,"x").concat(c,"_").concat(n,"_").concat(l.substring(0,5).replaceAll(" ","-"),".png"),a)})),i.generateAsync({type:"blob"}).then((function(t){Object(pe.saveAs)(t,"creatives.zip")})).catch((function(t){console.warn(t)})).finally((function(){e(!1)}))}))}}({setLoading:i}),u=d.length>0&&Object.keys(l).length===d.length;return Object(j.jsx)(fe,{children:Object(j.jsx)("button",{onClick:function(){return g({creatives:c})},disabled:!u,children:n?"\u0421\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u0430\u0440\u0445\u0438\u0432...":"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0432\u0441\u0435 \u0430\u0440\u0445\u0438\u0432\u043e\u043c"})})},je=function(){return Object(j.jsx)(i.Provider,{children:Object(j.jsx)(r.Provider,{children:Object(j.jsx)(a.Provider,{children:Object(j.jsx)(o.Provider,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("div",{className:"App-header-text",children:"In vino veritas In vino veritas In vino veritas In vino veritas"})}),Object(j.jsxs)("main",{className:"App-main",children:[Object(j.jsx)("div",{className:"App-main-row",children:Object(j.jsx)(Z,{})}),Object(j.jsx)("div",{className:"App-main-row",children:Object(j.jsx)(Ot,{})}),Object(j.jsx)("div",{className:"App-main-row",children:Object(j.jsx)(ct,{})})]})]})})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(j.jsx)(je,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.fa610855.chunk.js.map