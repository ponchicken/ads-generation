(this["webpackJsonpads-generation"]=this["webpackJsonpads-generation"]||[]).push([[0],{28:function(t,e,n){t.exports=n(57)},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},53:function(t,e,n){},54:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"Context",(function(){return v})),n.d(i,"ActionsContext",(function(){return b})),n.d(i,"Provider",(function(){return y}));var r={};n.r(r),n.d(r,"Context",(function(){return j})),n.d(r,"ActionsContext",(function(){return S})),n.d(r,"Provider",(function(){return H}));var a=n(0),o=n.n(a),s=n(21),l=n.n(s),h=(n(33),n(34),n(35),n(36),n(22)),c=n.n(h),g=[{titles:["\u041d\u0430\u0439\u0434\u0435\u043c \u0432\u0430\u0448\u0443 \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044e \u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043c \u043d\u043e\u0432\u044b\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u0438\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430"],texts:["\u041f\u043e\u0434\u0431\u0435\u0440\u0435\u043c \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u2014 \u043e\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0434\u043e \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0445 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u043e\u0432. \u0420\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u0438\u0437 \u0420\u043e\u0441\u0441\u0438\u0438 \u0438 \u0438\u0437-\u0437\u0430 \u0440\u0443\u0431\u0435\u0436\u0430"],images:[{src:"https://elama.ru/info/build/assets/img/agencies/agencies-hero.png"},{src:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"},{src:"https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg"},{src:"https://lh3.googleusercontent.com/proxy/RXXwgLhci5uy7jq2FVJ1FwHQSHD3a2Kvz72kURPKHeA2DOMnpF19JW44V6Jt_oReeYTmLbUBZwdBEjDKGodfskGpt9Ajzq3a2g45shLOa23dQ2MzWZfipqRIwKJ0bsx5s84Ifw"},{src:"https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg"}]}],d=function(){return c.a.get("/").then((function(t){return g}))},u=n(1),f=n(10),p=n(5),m=function(){var t={};return function(e){return new Promise((function(n){if(!e)return n(null);t[e]&&n(t[e]);var i=new Image;i.src=e,i.onload=function(){t[e]=createImageBitmap(i),n(t[e])}}))}}(),x=function(t){return Promise.all(t.map((function(t){return m(t.src)})))},v=Object(a.createContext)([]),b=Object(a.createContext)({}),y=function(t){var e=t.children,n=function(){var t=Object(a.useState)([]),e=Object(p.a)(t,2),n=e[0],i=e[1],r=Object(a.useCallback)((function(t){var e=t.input,n=t.field,r=t.i,a=t.j;i((function(t){return t[r][n][a]=e,Object(f.a)(t)}))}),[]),o=Object(a.useCallback)((function(t){var e=t.field,n=t.i,r=t.j;i((function(t){return t[n][e].splice(r,1),Object(f.a)(t)}))}),[]);return{actions:Object(a.useMemo)((function(){return{setLinksData:i,setLinksDataFieldItem:r,removeLinksFieldItem:o}}),[i,r,o]),value:Object(a.useMemo)((function(){return{linksData:n}}),[n])}}(),i=n.actions,r=n.value,s=function(t){var e=t.reduce((function(t,e){return t.concat(e.images)}),[]);return Object(a.useEffect)((function(){e&&x(e)}),[e]),{loadImage:m,preloadImages:x}}(r.linksData),l=Object(a.useMemo)((function(){return Object(u.a)({},i,{},s)}),[i,s]);return o.a.createElement(v.Provider,{value:r},o.a.createElement(b.Provider,{value:l},e))},w=Object.freeze([{key:"key1",width:1080,height:1920,backgroundColor:"#212121",background:{x:0,y:380,width:1080,height:650,isCover:!1},texts:[{x:0,y:1200,width:1080,height:240,textAlign:"left",verticalAlign:"center",hPadding:100,vPadding:20,fontSize:72,lineHeight:84,fontFamily:"Arial",fontWeight:"bold",textColor:"#fff",backgroundColor:""},{x:0,y:1460,width:1080,height:300,autoHeight:!0,textAlign:"left",verticalAlign:"top",hPadding:100,vPadding:10,fontSize:40,lineHeight:70,fontFamily:"Arial",textColor:"#fff",backgroundColor:""}]},{key:"key2",width:1080,height:1080,backgroundColor:"#212121",background:{x:0,y:100,width:1080,height:460,isCover:!1},texts:[{x:0,y:600,width:1080,height:200,textAlign:"center",verticalAlign:"center",hPadding:100,vPadding:20,fontSize:66,lineHeight:80,fontFamily:"Arial",fontWeight:"bold",textColor:"#fff",backgroundColor:""},{x:0,y:820,width:1080,height:300,textAlign:"center",verticalAlign:"top",hPadding:100,vPadding:10,fontSize:32,lineHeight:52,fontFamily:"Arial",textColor:"#fff",backgroundColor:"",autoHeight:!0,pinTo:"bottom"}]},{key:"key3",width:1080,height:610,backgroundColor:"#212121",background:{x:40,y:40,width:520,height:530,isCover:!1},texts:[{x:560,y:50,width:520,height:250,textAlign:"left",verticalAlign:"center",hPadding:50,vPadding:20,fontSize:48,lineHeight:60,fontFamily:"Arial",fontWeight:"bold",textColor:"#fff",backgroundColor:""},{x:560,y:300,width:520,height:300,textAlign:"left",verticalAlign:"top",hPadding:50,vPadding:10,fontSize:28,lineHeight:42,fontFamily:"Arial",textColor:"#fff",backgroundColor:"",autoHeight:!0,pinTo:"bottom"}]},{key:"key4",width:1080,height:1080,backgroundColor:"#212121",background:{x:0,y:0,width:1080,height:1080,isCover:!0},texts:[{x:0,y:0,width:1080,height:600,textAlign:"center",verticalAlign:"center",hPadding:100,vPadding:40,fontSize:130,lineHeight:140,fontFamily:"Arial",fontWeight:"bold",textColor:"#fff",backgroundColor:"#cc2600cc"},{x:0,y:930,width:1080,height:150,textAlign:"center",verticalAlign:"center",hPadding:100,vPadding:10,fontSize:32,lineHeight:52,fontFamily:"Arial",fontWeight:"bold",textColor:"#000",backgroundColor:"#fffc",pinTo:"bottom"}]}]),C=n(6);var _=function(){var t=Object(a.useState)([]),e=Object(p.a)(t,2),n=e[0],i=e[1],r=Object(a.useCallback)((function(t){var e=t.map((function(t){var e,n,i={image:(e=Object(u.a)({},t,{templates:w})).images,title:e.titles,text:e.texts,template:e.templates};return n=i,Object.entries(n).reduce((function(t,e){var n=Object(p.a)(e,2),i=n[0],r=n[1],a=[];return t.forEach((function(t){return(Array.isArray(r)?r:[r]).forEach((function(e){return(e&&[e]).forEach((function(e){return a.push(Object.assign({},t,Object(C.a)({},i,e)))}))}))})),a}),[{}])}));e.length&&i(e[0].sort((function(t,e){return t.template.key>e.template.key?1:t.template.key<e.template.key?-1:0})))}),[i]);return{actions:Object(a.useMemo)((function(){return{calcCombinations:r}}),[r]),value:Object(a.useMemo)((function(){return{combinations:n}}),[n])}},j=Object(a.createContext)([]),S=Object(a.createContext)({}),H=function(t){var e=t.children,n=_(),i=n.actions,r=n.value;return o.a.createElement(j.Provider,{value:r},o.a.createElement(S.Provider,{value:i},e))},O=(n(53),"LinkToSource"),T=function(){var t=Object(a.useContext)(i.ActionsContext).setLinksData;return Object(a.useEffect)((function(){d().then((function(e){t(e)})).catch((function(t){return console.warn(t)}))}),[t]),o.a.createElement("form",{className:"".concat(O,"-form"),onSubmit:function(e){e.preventDefault(),d().then((function(e){t(e)})).catch((function(t){return console.warn(t)}))}},o.a.createElement("input",{className:"".concat(O,"-input"),placeholder:"Link to Source"}),o.a.createElement("button",{className:"".concat(O,"-submit"),type:"submit"},"process"))},E=(n(54),function(){var t=Object(a.useContext)(r.Context).combinations;return t?o.a.createElement("div",{className:"".concat("Showtime")},t.map((function(t,e){var n=t.template,i=t.image,r=t.text,a=t.title;return o.a.createElement("div",{className:"".concat("Showtime","-item"),key:e},o.a.createElement(At,{texts:[a,r],template:n,background:i.src}))}))):null}),k=n(3),A=n(4);function W(){var t=Object(k.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  border: none;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: red;\n  color: #fff;\n  font-size: 20px;\n  line-height: 1;\n\n  &:hover {\n    background-color: #f00a;\n  }\n"]);return W=function(){return t},t}var N=A.a.button(W());function R(){var t=Object(k.a)(["\n  display: block;\n  width: 100%;\n"]);return R=function(){return t},t}function L(){var t=Object(k.a)(["\n  font-size: 20px;\n  font-weight: normal;\n  margin: 0;\n"]);return L=function(){return t},t}function D(){var t=Object(k.a)(["\n  padding: 0;\n  overflow: hidden;\n"]);return D=function(){return t},t}function M(){var t=Object(k.a)(["\n  position: relative;\n  display: block;\n  padding: 10px 20px;\n  background: #fff3;\n  border-radius: 3px;\n\n  &:hover "," {\n    opacity: 1;\n    transition: opacity .1s ease;\n  }\n"]);return M=function(){return t},t}function B(){var t=Object(k.a)(["\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(3, 1fr);\n"]);return B=function(){return t},t}function z(){var t=Object(k.a)(["\n  display: grid;\n  grid-gap: 10px;\n"]);return z=function(){return t},t}function I(){var t=Object(k.a)(["\n  display: grid;\n  grid-gap: 15px;\n"]);return I=function(){return t},t}function F(){var t=Object(k.a)(["\n  display: grid;\n  grid-gap: 30px;\n"]);return F=function(){return t},t}function P(){var t=Object(k.a)(["\n  width: 100%;\n  max-width: 600px;\n  word-break: break-word;\n  display: grid;\n  grid-gap: 50px;\n"]);return P=function(){return t},t}function V(){var t=Object(k.a)(["\n  opacity: 0;\n  transition: opacity .3s ease;\n"]);return V=function(){return t},t}var K=Object(A.a)((function(t){return o.a.createElement(N,t,"\xd7")}))(V()),q=A.a.div(P()),U=A.a.div(F()),$=A.a.div(I()),G=A.a.div(z()),J=Object(A.a)($)(B()),Q=A.a.div(M(),K),X=Object(A.a)(Q)(D()),Z=A.a.h2(L()),Y=A.a.img(R()),tt=function(t){var e=t.image,n=t.onRemove;return o.a.createElement(X,null,o.a.createElement(Y,{src:e.src}),o.a.createElement(K,{onClick:n}))},et=function(t){var e=t.text,n=t.onChange,i=t.onRemove;return o.a.createElement(Q,null,o.a.createElement("span",{contentEditable:!0,suppressContentEditableWarning:!0,onBlur:n},e),o.a.createElement(K,{onClick:i}))},nt=function(){var t=Object(a.useContext)(i.Context).linksData,e=Object(a.useContext)(i.ActionsContext),n=e.setLinksDataFieldItem,s=e.removeLinksFieldItem,l=Object(a.useContext)(r.ActionsContext).calcCombinations;Object(a.useEffect)((function(){l(t)}),[l,t]);var h=Object(a.useCallback)((function(t){return function(e){n(Object(u.a)({},t,{input:e.target.textContent}))}}),[n]),c=Object(a.useCallback)((function(t){return function(){s(t)}}),[s]);return t?o.a.createElement(q,null,t.map((function(t,e){return o.a.createElement(U,{key:e},o.a.createElement($,null,o.a.createElement(Z,null,"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),o.a.createElement(G,null,t.titles.map((function(t,n){return o.a.createElement(et,{key:"".concat(n,"_").concat(t),text:t,index:n,onChange:h({field:"titles",i:e,j:n}),onRemove:c({field:"titles",i:e,j:n})})})))),o.a.createElement($,null,o.a.createElement(Z,null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),o.a.createElement(G,null,t.texts.map((function(t,n){return o.a.createElement(et,{key:"".concat(n,"_").concat(t),text:t,index:n,onChange:h({field:"texts",i:e,j:n}),onRemove:c({field:"texts",i:e,j:n})})})))),o.a.createElement($,null,o.a.createElement(Z,null,"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),o.a.createElement(J,null,t.images.map((function(t,n){return o.a.createElement(tt,{key:"".concat(n,"_").concat(t.src),image:t,index:n,onRemove:c({field:"images",i:e,j:n})})})))))}))):null},it=n(9),rt=n.n(it),at=n(26);var ot={init:function(t){var e=t.document,n=t.navigator.userAgent,i=Math.ceil,r=Math.floor,a="fusioncharts-smartlabel-",o=a+"container",s=a+"tag";return ot={win:t,containerClass:o,classNameWithTag:s,classNameWithTagBR:"fusioncharts-smartlabel-br",maxDefaultCacheLimit:1e3,classNameReg:/\bfusioncharts-smartlabel-tag\b/,classNameBrReg:/\bfusioncharts-smartlabel-br\b/,spanAdditionRegx:/(<[^<\>]+?\>)|(&(?:[a-z]+|#[0-9]+);|.)/gi,spanAdditionReplacer:'$1<span class="'+s+'">$2</span>',spanRemovalRegx:new RegExp("\\<span[^\\>]+?"+s+"[^\\>]{0,}\\>(.*?)\\<\\/span\\>","ig"),xmlTagRegEx:new RegExp("<[^>][^<]*[^>]+>","i"),brRegex:new RegExp("({br[ ]*})|(<br[ ]*>)|(<br[ ]*/>)|(<BR[ ]*/>)|(<br\\>)","g"),ltgtRegex:/&lt;|&gt;/g,nbspRegex:/&nbsp;|&#160;|&#xA0;/g,htmlSpecialEntityRegex:/&amp;|&quot;|&lt;|&gt;/g,brReplaceRegex:/<br\/>/gi,testStrAvg:"WgI",parentContainerStyle:{position:"absolute",top:"-9999em",whiteSpace:"nowrap",padding:"0px",width:"1px",height:"1px",overflow:"hidden"},supportedStyle:{font:"font",fontFamily:"font-family","font-family":"font-family",fontWeight:"font-weight","font-weight":"font-weight",fontSize:"font-size","font-size":"font-size",lineHeight:"line-height","line-height":"line-height",fontStyle:"font-style","font-style":"font-style"},getDocumentSupport:function(){var i,r,a;return e.getElementsByClassName?(i="getElementsByClassName",r=s,a=!0):(i="getElementsByTagName",r="span",a=!1),{isIE:/msie/i.test(n)&&!t.opera,hasSVG:Boolean(t.SVGAngle||e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")),isHeadLess:new RegExp(" HtmlUnit").test(n),isWebKit:new RegExp(" AppleWebKit/").test(n),childRetriverFn:i,childRetriverString:r,noClassTesting:a}},createContainer:function(t){var n,i;if(t&&(t.offsetWidth||t.offsetHeight)){if(t.appendChild)return t.appendChild(i=e.createElement("DIV")),i.className=o,i.setAttribute("aria-hidden","true"),i.setAttribute("role","presentation"),i}else if((n=e.getElementsByTagName("body")[0])&&n.appendChild)return(i=e.createElement("DIV")).className=o,i.setAttribute("aria-hidden","true"),i.setAttribute("role","presentation"),n.appendChild(i),i},getNearestBreakIndex:function(t,e,n){if(!t||!t.length)return 0;var a,o=n._getWidthFn(),s=0,l=0,h=o(t),c=h/t.length;if(a=e,s=i(e/c),h<e)return t.length-1;for(s>t.length&&(a=e-h,s=t.length);a>0;){if(a=e-o(t.substr(0,s)),!(l=r(a/c)))return s;s+=l}for(;a<0;){if(a=e-o(t.substr(0,s)),!(l=r(a/c)))return s;s+=l}return s},parseStyle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={};return e.fontSize=(t.fontSize||t["font-size"]||"12px")+"",e.fontVariant=t.fontVariant||t["font-variant"]||"normal",e.fontWeight=t.fontWeight||t["font-weight"]||"normal",e.fontStyle=t.fontStyle||t["font-style"]||"normal",e.fontFamily=t.fontFamily||t["font-family"]||"Verdana,sans",e.lineHeight=t.lineHeight||t["line-height"]||"15px",e},setLineHeight:function(t){var e=t.fontSize;return t.lineHeight=t.lineHeight||t["line-height"]||1.2*parseInt(e,10)+"px",t},_getCleanHeight:function(t){return t=t.replace(/px/g,""),Number(t)},_getDimentionUsingDiv:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e._container;return t instanceof Array&&(t=t.join("")),n.innerHTML=t,{width:n.offsetWidth,height:n.offsetHeight}},_getDimentionUsingCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.ctx,i=e.style,r=ot._getCleanHeight(i.lineHeight);return t=t instanceof Array?(t=t.join("")).replace(/<br \/>/g,""):t.replace(/<br \/>/g,""),{width:n.measureText(t).width,height:r}},_hasOnlyBRTag:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!ot.xmlTagRegEx.test(t)&&ot.brRegex.test(t)},_getDimentionOfMultiLineText:function(){var t,e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,a=i.replace(ot.brRegex,"<br />"),o=ot._getTextArray(a),s=0,l=0,h=r._getWidthFn(),c=ot._getCleanHeight(r.style.lineHeight),g=c,d={};for(t=0,e=o.length;t<e;t++)"<br />"===o[t]?(l=Math.max(l,s),s=0,g+=c):(s+=n=h(o[t]),d[o[t]]=n);return{height:g,width:l=Math.max(l,s),detailObj:d}},_getTextArray:function(){var t,e,n,i,r,a,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=[];for(n=(r=o.split("<br />")).length,t=0;t<n;t++){for(i=(a=r[t].split("")).length,e=0;e<i;e++)s.push(a[e]);t!==n-1&&s.push("<br />")}return s},_findLastIndex:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,i=e.length;for(t=i-1;t>=0;t--)if(e[t]===n)return t;return-1}}}},st=ot,lt=st.init(window),ht=lt.win.document,ct=lt.getDocumentSupport(),gt=ct.isWebKit?0:4.5;function dt(t,e,n){var i;n=(n=n>5?n:5)<20?n:20,this.maxContainers=n,this.first=null,this.last=null,this.containers={},this.length=0,this.rootNode=t,e&&((i=ht.createElementNS("http://www.w3.org/2000/svg","svg")).setAttributeNS("http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"),i.setAttributeNS("http://www.w3.org/2000/svg","height","0"),i.setAttributeNS("http://www.w3.org/2000/svg","width","0"),this.svgRoot=i,this.rootNode.appendChild(i))}dt.prototype.get=function(t){var e,n,i,r=this.containers,a=this.length,o=this.maxContainers,s="";for(n in lt.supportedStyle)void 0!==t[n]&&(s+=lt.supportedStyle[n]+":"+t[n]+";");if(!s)return!1;if(i=r[s])this.first!==i&&(i.prev&&(i.prev.next=i.next),i.next&&(i.next.prev=i.prev),i.next=this.first,i.next.prev=i,this.last===i&&(this.last=i.prev),i.prev=null,this.first=i);else{if(a>=o)for(e=a-o+1;e--;)this.removeContainer(this.last);i=this.addContainer(s)}return i},dt.prototype._makeDivNode=function(t){var e,n=t.keyStr;t.node||(t.node=ht.createElement("div"),t.node.className="fusioncharts-div",this.rootNode.appendChild(t.node)),e=t.node,ct.isIE&&!ct.hasSVG?e.style.setAttribute("cssText",n):e.setAttribute("style",n),e.setAttribute("aria-hidden","true"),e.setAttribute("role","presentation"),e.style.display="inline-block",e.innerHTML=lt.testStrAvg,t.lineHeight=e.offsetHeight,t.avgCharWidth=e.offsetWidth/3,ct.isBrowserLess?(t.svgText||(t.svgText=ht.createElementNS("http://www.w3.org/2000/svg","text"),this.svgRoot.appendChild(e)),(e=t.svgText).setAttribute("style",n),e.textContent=lt.testStrAvg,t.lineHeight=e.getBBox().height,t.avgCharWidth=(e.getBBox().width-gt)/3,e.textContent="...",t.ellipsesWidth=e.getBBox().width-gt,e.textContent=".",t.dotWidth=e.getBBox().width-gt):(e.innerHTML="...",t.ellipsesWidth=e.offsetWidth,e.innerHTML=".",t.dotWidth=e.offsetWidth,e.innerHTML="")},dt.prototype.addContainer=function(t){var e;return this.containers[t]=e={next:null,prev:null,node:null,ellipsesWidth:0,lineHeight:0,dotWidth:0,avgCharWidth:4,keyStr:t,charCache:{}},e.next=this.first,e.next&&(e.next.prev=e),this.first=e,this.last||(this.last=e),this.length+=1,e},dt.prototype.removeContainer=function(t){var e=t.keyStr;e&&this.length&&t&&(this.length-=1,t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),this.first===t&&(this.first=t.next),this.last===t&&(this.last=t.prev),t.node&&t.node.parentNode.removeChild(t.node),delete this.containers[e])},dt.prototype.dispose=function(){var t,e=this.containers;for(t in this.maxContainers=null,e)this.removeContainer(e[t]);this.rootNode.parentNode.removeChild(this.rootNode),this.rootNode=null,this.first=null,this.last=null};var ut=dt,ft=st.init(window),pt=ft.win.document,mt=ft.win.Math,xt=mt.max,vt=mt.round,bt={" ":"&nbsp;"},yt=ft.getDocumentSupport(),wt=yt.isWebKit?0:4.5;function Ct(t,e,n){var i,r,a,o=!1,s=window.document.createElement("canvas");for(r in(n=n||{}).maxCacheLimit=isFinite(a=n.maxCacheLimit)?a:ft.maxDefaultCacheLimit,"string"===typeof t&&(t=pt.getElementById(t)),(i=ft.createContainer(t)).innerHTML=ft.testStrAvg,!yt.isHeadLess&&(yt.isIE||i.offsetHeight||i.offsetWidth)||(o=!0),i.innerHTML="",ft.parentContainerStyle)i.style[r]=ft.parentContainerStyle[r];this.parentContainer=i,this.ctx=s&&s.getContext&&s.getContext("2d"),this._containerManager=new ut(i,o,10),this._showNoEllipses=!e,this._init=!0,this.style={},this.oldStyle={},this.options=n,this.setStyle()}Ct.textToLines=function(t){return(t=t||{}).text?"string"!==typeof t.text&&(t.text=t.text.toString()):t.text="",t.lines=t.text.split(/\r?\n|<br\s*?\/?>/gi),t},Ct.prototype._calCharDimWithCache=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;if(!this._init)return!1;var i,r,a,o,s,l,h,c,g,d=this.options.maxCacheLimit,u=this.style||{};return l=this._advancedCache=this._advancedCache||(this._advancedCache={}),h=this._advancedCacheKey||(this._advancedCacheKey=[]),c=t+u.fontSize+u.fontFamily+u.fontWeight+u.fontStyle,g=t+"init"+u.fontSize+u.fontFamily+u.fontWeight+u.fontStyle,!this.ctx&&bt[t]&&(t=bt[t]),e?void 0===(s=l[g])&&(r=this._getDimention(t.repeat?t.repeat(n):Array(n+1).join(t)).width,a=this._getDimention(t).width,s=l[g]=(r-n*a)/(n+1),h.push(g),h.length>d&&delete l[h.shift()]):s=0,(o=l[c])?{width:o.width,height:o.height}:((i=this._getDimention(t)).width+=s,l[c]={width:i.width,height:i.height},h.push(c),h.length>d&&delete l[h.shift()],i)},Ct.prototype._getDimention=function(t){return this.requireDiv||!this.ctx?ft._getDimentionUsingDiv(t,this):ft._getDimentionUsingCanvas(t,this)},Ct.prototype._getWidthFn=function(){var t=this,e=t._containerObj.svgText;return e?function(t){var n,i;return e.textContent=t,(i=(n=e.getBBox()).width-wt)<1&&(i=n.width),i}:function(e){return t.requireDiv||!t.ctx?ft._getDimentionUsingDiv(e,t).width:ft._getDimentionUsingCanvas(e,t).width}},Ct.prototype._isSameStyle=function(){var t=this.oldStyle||{},e=this.style;return e.fontSize===t.fontSize&&e.fontFamily===t.fontFamily&&e.fontStyle===t.fontStyle&&e.fontWeight===t.fontWeight&&e.lineHeight===t.lineHeight&&e.fontVariant===t.fontVariant},Ct.prototype._setStyleOfCanvas=function(){if(!this._isSameStyle()){var t,e,n=this.style,i=n.fontStyle,r=n.fontVariant,a=n.fontWeight,o=n.fontSize,s=n.fontFamily;n.lineHeight;t=i+" "+r+" "+a+" "+(o+=-1===o.indexOf("px")?"px":"")+" "+s,this.ctx.font=t,e=this._containerObj=this._containerManager.get(n),this._containerObj?(this._container=e.node,this._context=e.context,this._cache=e.charCache,this._lineHeight=e.lineHeight,this._styleNotSet=!1):this._styleNotSet=!0,e.ellipsesWidth=this._calCharDimWithCache("...",!1).width,e.dotWidth=this._calCharDimWithCache(".",!1).width,e.lineHeight=this._lineHeight=e.lineHeight||ft._getCleanHeight(n.lineHeight),this.oldStyle=n}},Ct.prototype._setStyleOfDiv=function(){var t,e=this.style;this._containerObj=t=this._containerManager.get(e),t.node||this._containerManager._makeDivNode(this._containerObj),this._containerObj?(this._container=t.node,this._context=t.context,this._cache=t.charCache,this._lineHeight=t.lineHeight,this._styleNotSet=!1):this._styleNotSet=!0},Ct.prototype._updateStyle=function(){return this.requireDiv||!this.ctx?this._setStyleOfDiv():this._setStyleOfCanvas()},Ct.prototype.setStyle=function(t){return this.style=ft.parseStyle(t),ft.setLineHeight(this.style),this},Ct.prototype.useEllipsesOnOverflow=function(t){return this._init?(this._showNoEllipses=!t,this):this},Ct.prototype.getSmartText=function(t,e,n,i){if(!this._init)return!1;void 0===t||null===t?t="":"string"!==typeof t&&(t=t.toString());var r,a,o,s,l,h,c,g,d,u,f,p,m,x,v,b,y,w,C,_,j,S,H,O,T,E,k,A,W,N,R,L,D,M,B,z=0,I=-1,F=-1,P=-1,V=0,K=0,q=[],U=0,$=this._showNoEllipses?"":"...",G=this.ctx,J=[],Q=-1,X=-1,Z=-1,Y=function(t){for(var e=/\s/,n=(t=t.replace(/^\s\s*/,"")).length;e.test(t.charAt(n-=1)););return t.slice(0,n+1)},tt={text:t,maxWidth:e,maxHeight:n,width:null,height:null,oriTextWidth:null,oriTextHeight:null,oriText:t,isTruncated:!1};if(k=ft.xmlTagRegEx.test(t)||ft.nbspRegex.test(t),M=ft._hasOnlyBRTag(t),this.requireDiv=k&&!M,this._updateStyle(),A=this._lineHeight,W=this._context,N=this._container,L=(R=this._containerObj).ellipsesWidth,D=R.dotWidth,h=t.replace(ft.spanAdditionRegx,"$2"),p=this._getWidthFn(),A-n<=1&&A-n>=0&&(n*=1.2),G||N){if(!yt.isBrowserLess){if(k?M?(t=t.replace(ft.brRegex,"<br />"),B=ft._getDimentionOfMultiLineText(t,this),tt.oriTextWidth=c=B.width,tt.oriTextHeight=g=B.height):(N.innerHTML=t,tt.oriTextWidth=c=N.offsetWidth,tt.oriTextHeight=g=N.offsetHeight):(s=t=t.replace(ft.ltgtRegex,(function(t){return"&lt;"===t?"<":">"})),v=this.getSize(s,!0,{hasHTMLTag:k,hasOnlyBrTag:M,cleanText:!0}),tt.oriTextWidth=c=v.width,tt.oriTextHeight=g=v.height),g<=n&&c<=e)return tt.width=tt.oriTextWidth=c,tt.height=tt.oriTextHeight=g,tt;if(A>n)return tt.text="",tt.width=tt.oriTextWidth=0,tt.height=tt.oriTextHeight=0,tt}if(t=Y(t).replace(/(\s+)/g," "),l=this._showNoEllipses?e:e-L,!k||M){if(r=(q=ft._getTextArray(t)).length,a="",o=[],f=q[0],this._cache[f]?C=this._cache[f].width:(C=p(f),this._cache[f]={width:C}),l>C&&!M)o=t.substr(0,ft.getNearestBreakIndex(t,l,this)).split("");else{if(C>e)return tt.text="",tt.width=tt.oriTextWidth=tt.height=tt.oriTextHeight=0,tt;$&&((l=e-2*D)>C?$="..":(l=e-D)>C?$=".":(l=0,$=""))}if(U=o.length,V=p(o.join("")),K=this._lineHeight,i){for(;U<r;U+=1)if(f=o[U]=q[U],"<br />"!==o[U]){if(this._cache[f]?C=this._cache[f].width:(v&&(C=v.detailObj[f])||(C=p(f)),this._cache[f]={width:C}),(V+=C)>l&&(a||(a=o.slice(0,-1).join("")),V>e))return tt.text=Y(a)+$,tt.tooltext=tt.oriText,tt.width=xt(z,V),tt.height=K,tt.isTruncated=!0,tt}else K+=this._lineHeight,P=U,z=xt(z,V),V=0,a=null;return tt.text=o.join(""),tt.width=xt(z,V),tt.height=K,tt}for(;U<r;U+=1){if(" "!==(f=o[U]=q[U])||W||(f=this.ctx?" ":"&nbsp;"),"<br />"===o[U]){if(z=xt(z,V),(K+=this._lineHeight)<=n){P=U,V=0,a=null;continue}if(K>n)return a=o.slice(0,-1).join(""),tt.text=Y(a)+$,tt.tooltext=h,tt.width=z,tt.height=K-this._lineHeight,tt.isTruncated=!0,tt}if(this._cache[f]?C=this._cache[f].width:(v&&(C=v.detailObj[f])||(C=p(f)),this._cache[f]={width:C}),(V+=C)>l&&(a||(a=o.slice(0,-1).join("")),V>e)){if("<br />"===q[U+1])continue;if(F=ft._findLastIndex(q.slice(0,o.length)," "),I=ft._findLastIndex(q.slice(0,o.length),"-"),F>P?(V=p(o.slice(P+1,F).join("")),o.splice(F,1,"<br />"),P=F,d=F+1):I>P?(I===o.length-1?(V=p(o.slice(P+1,F).join("")),o.splice(I,1,"<br />-")):(V=p(o.slice(P+1,F).join("")),o.splice(I,1,"-<br />")),P=I,d=I+1):(o.splice(o.length-1,1,"<br />"+q[U]),Z=o.length-2,V=p(o.slice(P+1,Z+1).join("")),P=Z,d=U),(K+=this._lineHeight)>n)return tt.text=Y(a)+$,tt.tooltext=tt.oriText,tt.width=e,tt.height=K-this._lineHeight,tt.isTruncated=!0,tt;z=xt(z,V),a=null,M?V=ft._getDimentionOfMultiLineText(o.slice(P+1).join(""),this).width:(u=ft.getNearestBreakIndex(t.substr(d),l,this),V=p(t.substr(d,u||1)),o.length<d+u&&(U=(o=o.concat(t.substr(o.length,d+u-o.length).split(""))).length-1))}}return z=xt(z,V),tt.text=o.join(""),tt.width=z,tt.height=K,tt}for(h=t.replace(ft.spanAdditionRegx,"$2"),t=(t=t.replace(ft.spanAdditionRegx,ft.spanAdditionReplacer)).replace(/(<br\s*\/*\>)/g,'<span class="'+[ft.classNameWithTag," ",ft.classNameWithTagBR].join("")+'">$1</span>'),N.innerHTML=t,y=0,w=(b=N[yt.childRetriverFn](yt.childRetriverString)).length;y<w;y+=1)_=b[y],(yt.noClassTesting||ft.classNameReg.test(_.className))&&""!==(j=_.innerHTML)&&(" "===j?X=J.length:"-"===j&&(Q=J.length),J.push({spaceIdx:X,dashIdx:Q,elem:_}),q.push(j));if(U=0,(C=(r=J.length)&&J[0].elem.offsetWidth)>e||!r)return tt.text="",tt.width=tt.oriTextWidth=tt.height=tt.oriTextHeight=0,tt;if(C>l&&!this._showNoEllipses&&((l=e-2*D)>C?$="..":(l=e-D)>C?$=".":(l=0,$="")),m=J[0].elem.offsetLeft,x=J[0].elem.offsetTop,i)for(;U<r;U+=1)(S=(_=J[U].elem).offsetLeft-m+_.offsetWidth)>l&&(E||(E=U),N.offsetWidth>e&&(T=U,U=r));else for(;U<r;U+=1)H=(_=J[U].elem).offsetHeight+(_.offsetTop-x),O=null,(S=_.offsetLeft-m+_.offsetWidth)>l?(E||(E=U),S>e&&(F=J[U].spaceIdx,I=J[U].dashIdx,F>P?(J[F].elem.innerHTML="<br/>",P=F):I>P?(J[I].elem.innerHTML=I===U?"<br/>-":"-<br/>",P=I):_.parentNode.insertBefore(O=pt.createElement("br"),_),_.offsetHeight+_.offsetTop>n?(O?O.parentNode.removeChild(O):P===I?J[I].elem.innerHTML="-":J[F].elem.innerHTML=" ",T=U,U=r):E=null)):H>n&&(T=U,U=r);if(T<r){for(tt.isTruncated=!0,E=E||T,U=r-1;U>=E;U-=1)(_=J[U].elem).parentNode.removeChild(_);for(;U>=0;U-=1)_=J[U].elem,ft.classNameBrReg.test(_.className)?_.parentNode.removeChild(_):U=0}return tt.text=N.innerHTML.replace(ft.spanRemovalRegx,"$1").replace(/\&amp\;/g,"&"),tt.isTruncated&&(tt.text+=$,tt.tooltext=h),tt.height=N.offsetHeight,tt.width=N.offsetWidth,tt}return tt.error=new Error("Body Tag Missing!"),tt},Ct.prototype.getSize=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!this._init)return!1;void 0===t||null===t?t="":"string"!==typeof t&&(t=t.toString());var i,r,a,o,s,l,h=0,c=0,g={},d=n.hasHTMLTag,f=n.hasOnlyBrTag;if("undefined"===typeof d&&(d=ft.xmlTagRegEx.test(t)||ft.nbspRegex.test(t)),"undefined"===typeof f&&(f=ft._hasOnlyBRTag(t)),this.requireDiv=d&&!f,n.cleanText||(t=t.replace(ft.ltgtRegex,(function(t){return"&lt;"===t?"<":">"}))),this._updateStyle(),l=this._container,!e)return this._calCharDimWithCache(t);for(o=0,s=(i=t.split("")).length;o<s;o++)r=i[o],a=this._calCharDimWithCache(r,!1,i.length),c=xt(c,a.height),h+=a.width,g[r]=a.width;return f?Object(u.a)({},ft._getDimentionOfMultiLineText(t,this),{detailObj:g}):d?(l.innerHTML=t,{width:l.offsetWidth,height:l.offsetHeight,detailObj:g}):{width:vt(h),height:c,detailObj:g}},Ct.prototype.getOriSize=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSize(t,e,n)},Ct.prototype.dispose=function(){return this._init?(this._containerManager&&this._containerManager.dispose&&this._containerManager.dispose(),delete this._container,delete this._context,delete this._cache,delete this._containerManager,delete this._containerObj,delete this.id,delete this.style,delete this.parentContainer,delete this._showNoEllipses,this):this};var _t=Ct,jt=new _t("div",!0),St=function(t){var e=t.text,n=t.fontSize,i=t.fontFamily,r=t.fontWeight,a=void 0===r?"normal":r,o=t.lineHeight,s=t.width,l=t.height,h=s-2*t.hPadding,c=l-2*t.vPadding;jt.setStyle({lineHeight:o&&"".concat(o,"px"),fontSize:n&&"".concat(n,"px"),fontFamily:i||"Arial",fontWeight:a,fontStyle:"normal"});var g=jt.getSmartText(e,h,c,!1),d=_t.textToLines(g);return Object(u.a)({},t,{lines:d.lines,lineHeight:o,textWidth:d.width,textHeight:d.height,text:d.text,oriText:e})};function Ht(t){return function(e,n,i,r){var a=t?Math.min(e/i,n/r):Math.max(e/i,n/r);return{x:e/2-i/2*a,y:n/2-r/2*a,width:i*a,height:r*a}}}Ht(!1),Ht(!0);var Ot=function(t,e){var n=e.background,i=Ht(n.isCover)(n.bitmap.width,n.bitmap.height,n.width,n.height),r=i.width,a=i.height,o=i.x,s=i.y;t.drawImage(n.bitmap,o,s,r,a,n.x,n.y,n.width,n.height)},Tt=function(t){return function(e){var n=e.width,i=e.height,r=e.autoHeight,a=e.lines,o=e.fontSize,s=e.fontFamily,l=e.fontWeight,h=void 0===l?"normal":l,c=e.lineHeight,g=e.hPadding,d=e.vPadding,u=e.verticalAlign,f=e.textAlign,p=e.textWidth,m=e.textHeight,x=e.textColor,v=e.backgroundColor,b=e.x,y=void 0===b?0:b,w=e.y,C=void 0===w?0:w;t.fillStyle=v||"#0000",t.fillRect(y,C,n,r?m+2*d:i),t.fillStyle=x||"#111",t.font="".concat(h," ").concat(o,"px ").concat(s),t.textBaseline="middle",t.textAlign=f;var _=y+function(t){var e=t.align,n=t.textWidth,i=t.width,r=t.padding;switch(e){case"center":return i/2;case"right":return n+r;case"left":default:return r}}({align:f,textWidth:p,width:n,padding:g}),j=C+function(t){var e=t.align,n=t.textHeight,i=t.height,r=t.padding,a=i-n;switch(e){case"center":return a/2;case"bottom":return n;case"top":default:return r}}({align:u,textHeight:m,height:i,padding:d});a.forEach((function(e,n){t.fillText(e,_,j+c*(n+.5))}))}},Et=function(t,e){var n=e.width,i=e.height,r=e.backgroundColor;t.fillStyle=r||"#000",t.fillRect(0,0,n,i)},kt=function(){var t=Object(at.a)(rt.a.mark((function t(e,n){var i,r,a,o,s;return rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.width,r=n.height,a=n.texts,o=n.background,s=n.backgroundColor,Et(e,{width:i,height:r,backgroundColor:s}),Ot(e,{background:o}),a.forEach(Tt(e)),t.abrupt("return",{state:"ready"});case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),At=function(t){var e=t.template,n=t.texts,r=t.background,s=Object(a.useState)(!1),l=Object(p.a)(s,2),h=l[0],c=l[1],g=Object(a.useContext)(i.ActionsContext).loadImage,d=Object(a.useCallback)((function(t){if(null!==t){var i=t.getContext("2d");g(r).then((function(t){kt(i,Object(u.a)({},e,{texts:n.map((function(t,n){return Object(u.a)({},e.texts[n],{text:t})})).map(St),background:Object(u.a)({},e.background,{bitmap:t,src:r})})),c(!0)}))}}),[e,n,r,g]);return o.a.createElement("div",null,!h&&"loading...",o.a.createElement("canvas",{style:{display:h?"block":"none"},ref:d,width:e.width,height:e.height}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement((function(){return o.a.createElement(i.Provider,null,o.a.createElement(r.Provider,null,o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"App-header-text"},"In vino veritas In vino veritas In vino veritas In vino veritas")),o.a.createElement("main",{className:"App-main"},o.a.createElement("div",{className:"App-main-row"},o.a.createElement(T,null)),o.a.createElement("div",{className:"App-main-row"},o.a.createElement(nt,null)),o.a.createElement("div",{className:"App-main-row"},o.a.createElement(E,null))))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.6564a940.chunk.js.map