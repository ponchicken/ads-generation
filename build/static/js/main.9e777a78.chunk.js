(this["webpackJsonpads-generation"]=this["webpackJsonpads-generation"]||[]).push([[0],{119:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"Context",(function(){return v})),n.d(a,"ActionsContext",(function(){return d})),n.d(a,"Provider",(function(){return h}));var r={};n.r(r),n.d(r,"Context",(function(){return j})),n.d(r,"ActionsContext",(function(){return O})),n.d(r,"Provider",(function(){return E}));var c=n(0),i=n.n(c),o=n(41),u=n.n(o),s=(n(49),n(50),n(51),n(52),n(42)),l=n.n(s),f=[{titles:["\u041d\u0430\u0439\u0434\u0435\u043c \u0432\u0430\u0448\u0443 \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044e \u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043c \u043d\u043e\u0432\u044b\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u0438\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430"],texts:["\u041f\u043e\u0434\u0431\u0435\u0440\u0435\u043c \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u2014 \u043e\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0434\u043e \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0445 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u043e\u0432. \u0420\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u0438\u0437 \u0420\u043e\u0441\u0441\u0438\u0438 \u0438 \u0438\u0437-\u0437\u0430 \u0440\u0443\u0431\u0435\u0436\u0430"],images:[{src:"https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg"}]}],m=n(7),v=Object(c.createContext)([]),d=Object(c.createContext)({}),h=function(e){var t=e.children,n=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],a=t[1];return{actions:Object(c.useMemo)((function(){return{setLinksData:a}}),[a]),value:Object(c.useMemo)((function(){return{linksData:n}}),[n])}}(),a=n.actions,r=n.value;return i.a.createElement(v.Provider,{value:r},i.a.createElement(d.Provider,{value:a},t))},b=n(44),p=n(14),x=Object.freeze([{key:"vertical",width:300,height:600},{key:"horisontal",width:600,height:300},{key:"square",width:400,height:400}]),g=n(15);var w=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(c.useCallback)((function(e){var t=e.map((function(e){var t;return function e(t){return Object.entries(t).reduce((function(t,n){var a=Object(m.a)(n,2),r=a[0],c=a[1],i=[];return t.forEach((function(t){return(Array.isArray(c)?c:[c]).forEach((function(n){return(n&&"object"===typeof n?e(n):[n]).forEach((function(e){return i.push(Object.assign({},t,Object(g.a)({},r,e)))}))}))})),i}),[{}])}({image:(t=Object(p.a)({},e,{templates:x})).images,title:t.titles,text:t.texts,template:t.templates})}));a.apply(void 0,Object(b.a)(t))}),[a]);return{actions:Object(c.useMemo)((function(){return{calcCombinations:r}}),[r]),value:Object(c.useMemo)((function(){return{combinations:n}}),[n])}},j=Object(c.createContext)([]),O=Object(c.createContext)({}),E=function(e){var t=e.children,n=w(),a=n.actions,r=n.value;return i.a.createElement(j.Provider,{value:r},i.a.createElement(O.Provider,{value:a},t))},y=(n(70),"LinkToSource"),k=function(){var e=Object(c.useContext)(a.ActionsContext).setLinksData;return i.a.createElement("form",{className:"".concat(y,"-form"),onSubmit:function(t){t.preventDefault(),l.a.get("/").then((function(e){return f})).then((function(t){e(t)})).catch((function(e){return console.warn(e)}))}},i.a.createElement("input",{className:"".concat(y,"-input"),placeholder:"Link to Source"}),i.a.createElement("button",{className:"".concat(y,"-submit"),type:"submit"},"process"))},C=(n(71),function(){var e=Object(c.useContext)(r.Context).combinations;return e?i.a.createElement("div",{className:"".concat("Showtime")},e.map((function(e,t){var n=e.template,a=e.image,r=e.text;e.title;return i.a.createElement("div",{className:"".concat("Showtime","-item"),key:t},i.a.createElement(B,{text:r,width:n.width,height:n.height,background:a.src}))}))):null}),R=(n(72),function(){var e=Object(c.useContext)(a.Context).linksData,t=Object(c.useContext)(r.ActionsContext).calcCombinations;return Object(c.useEffect)((function(){t(e)}),[t,e]),e?i.a.createElement("div",{className:"".concat("Review")},e.map((function(e,t){return i.a.createElement("div",{className:"".concat("Review","-item"),key:t},i.a.createElement("div",{className:"".concat("Review","-row")},e.titles.map((function(e,t){return i.a.createElement("div",{key:t},e)}))),i.a.createElement("div",{className:"".concat("Review","-row")},e.texts.map((function(e,t){return i.a.createElement("strong",{key:t},e)}))),i.a.createElement("div",{className:"".concat("Review","-row")},e.images.map((function(e,t){return i.a.createElement("div",{key:t},e.src)}))))}))):null}),S=n(21),A=n.n(S),N=n(9),I=n(43),P=n.n(I),L=n(12),D=n.n(L),Y=n(22),z=function(e){return function(t,n,a,r){var c=a/r,i=t/n,o=t,u=n;return(e?c>i:c<i)?u=o/c:o=u*c,{width:o,height:u,x:(t-o)/2,y:(n-u)/2}}},M=(z(!0),z(!1)),W=function(){var e=Object(Y.a)(D.a.mark((function e(t){var n,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.blob();case 5:return a=e.sent,e.abrupt("return",URL.createObjectURL(a));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(Y.a)(D.a.mark((function e(t){var n,a,r,c,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.filename,r=void 0===a?"file":a,e.next=3,W(n);case 3:c=e.sent,(i=document.createElement("a")).href=c,i.download=r+".png",document.body.appendChild(i),i.click(),i.remove();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=e.rgb,n=t.r,a=t.g,r=t.b,c=t.a;return"rgba(".concat(n,", ").concat(a,", ").concat(r,", ").concat(c,")")},H=function(e){var t=e.onReady,n=e.width,a=e.height,r=e.url,o=P()("".concat(r)),u=Object(m.a)(o,2),s=u[0],l=u[1],f=Object(c.useState)({}),v=Object(m.a)(f,2),d=v[0],h=v[1];return Object(c.useEffect)((function(){"loaded"===l&&s&&(h(M(n,a,s.naturalWidth,s.naturalHeight)),t())}),[n,a,s,l,t]),s?i.a.createElement(N.Image,Object.assign({image:s},d)):null},U=function(e){var t=e.onReady,n=e.width,a=e.height,r=e.color;return Object(c.useEffect)((function(){t()}),[]),r.hex?i.a.createElement(N.Rect,{width:n,height:a,fill:T(r)}):null},_={text:"",width:void 0,textWidth:void 0,x:0,y:0,offsetY:0},B=function(e){var t=e.render,n=e.onReady,a=void 0===n?function(){}:n,r=e.width,o=e.height,u=e.text,s=void 0===u?"":u,l=e.previewWidth,f=void 0===l?200:l,v=e.substrateColor,d=e.textColor,h=e.textAlign,b=void 0===h?"left":h,x=e.textPosition,g=void 0===x?"top":x,w=e.fontSize,j=void 0===w?40:w,O=e.fontFamily,E=void 0===O?"Arial":O,y=e.background,k=e.formatCategory,C=void 0===k?"":k,R=Object(c.useRef)(null),S=Object(c.useRef)(null),I=Object(c.useRef)(null),P=Object(c.useState)(0),L=Object(m.a)(P,2),D=L[0],Y=L[1],z=Object(c.useState)({width:0,height:0}),M=Object(m.a)(z,2),W=M[0],B=M[1],J=function(e){var t=e.textObj,n=e.textRef,a=e.tagRef,r=e.width,i=e.height,o=e.textPosition,u=e.textAlign,s=e.fontSize,l=Object(c.useState)(_),f=Object(m.a)(l,2),v=f[0],d=f[1],h=Object(c.useCallback)((function(){var e=t.getTextWidth()+80,a=r-80,c=e>a?a:e,l={width:c,text:t.text(),x:40},f=80+t.textArr.reduce((function(e,t){var n=t.width+80;return e+(n>a?Math.ceil(n/a):1)}),0)*s*n.current.attrs.lineHeight;switch(o){case"center":l.y=i/2,l.offsetY=f/2;break;case"top":l.y=.1*i,l.offsetY=0;break;case"bottom":default:l.y=.9*i,l.offsetY=f}switch(u){case"left":l.x=40;break;case"right":l.x=r-c-40;break;case"center":default:l.x=(r-c)/2}d((function(e){return Object(p.a)({},e,{},l)}))}),[i,r,u,o,s,n,t]);return Object(c.useEffect)((function(){a.current&&h()}),[a,h]),v}({textObj:Object(c.useMemo)((function(){return new A.a.Text({x:40,y:0,text:s,fontSize:j,fontFamily:E,padding:40})}),[s,j,E]),text:s,textRef:I,tagRef:S,width:r,height:o,fontSize:j,fontFamily:E,textAlign:b,textPosition:g}),q=Object(c.useState)(!1),$=Object(m.a)(q,2),G=$[0],K=$[1],Q=Object(c.useState)(!1),V=Object(m.a)(Q,2),X=V[0],Z=V[1],ee=G&&X;Object(c.useEffect)((function(){var e=f/(r||1);Y(e),B({width:e*r,height:e*o})}),[Y,f,r,o,B]),Object(c.useEffect)((function(){S.current&&K(!0)}),[S,K]),Object(c.useEffect)((function(){ee&&a({scale:D,canvas:R.current})}),[ee,a,D]);return i.a.createElement(i.a.Fragment,null,ee&&t&&t({onDownload:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){var t=R.current.toDataURL({pixelRatio:1/D});F({url:t,filename:"".concat(C,"_").concat(r,"_").concat(o,"_").concat(e)})}}}),i.a.createElement(N.Stage,{width:W.width,height:W.height,ref:R,scale:{x:D,y:D},visible:ee},i.a.createElement(N.Layer,null,i.a.createElement(U,{onReady:function(){return Z(!0)},width:r,height:o,color:y}),i.a.createElement(H,{onReady:function(){return Z(!0)},url:y,width:r,height:o}),i.a.createElement(N.Label,{x:J.x,y:J.y,offsetY:J.offsetY,visible:null!==J.offsetY&&!!J.text.length},i.a.createElement(N.Tag,{ref:S,width:J.width,height:200,fill:v&&!v.disabled?T(v):"rgba(0,0,0,0.5)"}),i.a.createElement(N.Text,{ref:I,text:J.text,fontSize:j,fontFamily:E,lineHeight:1.2,width:J.width,align:b,fill:d?T(d):"#fff",padding:40})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement((function(){return i.a.createElement(a.Provider,null,i.a.createElement(r.Provider,null,i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("div",{className:"App-header-text"},"In vino veritas In vino veritas In vino veritas In vino veritas In vino veritas In vino veritas In vino veritas In vino veritas In vino veritas In vino veritas In vino veritas In vino veritas In vino veritas")),i.a.createElement("main",{className:"App-main"},i.a.createElement("div",{className:"App-main-row"},i.a.createElement(k,null)),i.a.createElement("div",{className:"App-main-row"},i.a.createElement(R,null)),i.a.createElement("div",{className:"App-main-row"},i.a.createElement(C,null))))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,n){e.exports=n(119)},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.9e777a78.chunk.js.map