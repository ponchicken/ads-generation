(this["webpackJsonpads-generation"]=this["webpackJsonpads-generation"]||[]).push([[0],{120:function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"Context",(function(){return d})),n.d(i,"ActionsContext",(function(){return g})),n.d(i,"Provider",(function(){return v}));var a={};n.r(a),n.d(a,"Context",(function(){return y})),n.d(a,"ActionsContext",(function(){return j})),n.d(a,"Provider",(function(){return O}));var o=n(0),r=n.n(o),c=n(40),l=n.n(c),u=(n(50),n(51),n(52),n(53),n(41)),h=n.n(u),s=[{titles:["\u041d\u0430\u0439\u0434\u0435\u043c \u0432\u0430\u0448\u0443 \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u044e \u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043c \u043d\u043e\u0432\u044b\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u0438\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430"],texts:["\u041f\u043e\u0434\u0431\u0435\u0440\u0435\u043c \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u2014 \u043e\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0434\u043e \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0445 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u043e\u0432. \u0420\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u0438\u0437 \u0420\u043e\u0441\u0441\u0438\u0438 \u0438 \u0438\u0437-\u0437\u0430 \u0440\u0443\u0431\u0435\u0436\u0430"],images:[{src:"https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg"}]}],m=function(){return h.a.get("/").then((function(t){return s}))},f=n(7),d=Object(o.createContext)([]),g=Object(o.createContext)({}),v=function(t){var e=t.children,n=function(){var t=Object(o.useState)([]),e=Object(f.a)(t,2),n=e[0],i=e[1];return{actions:Object(o.useMemo)((function(){return{setLinksData:i}}),[i]),value:Object(o.useMemo)((function(){return{linksData:n}}),[n])}}(),i=n.actions,a=n.value;return r.a.createElement(d.Provider,{value:a},r.a.createElement(g.Provider,{value:i},e))},p=n(44),w=n(42),x=Object.freeze([{key:"key1",width:1200,height:628,image:{width:600,height:628,position:"left"},text:{width:600,height:628,position:"right",align:"right",vertical:"bottom",padding:50,fontSize:{from:45,to:80}}},{key:"key2",width:1080,height:1920,image:{width:1080,height:900,position:"top"},text:{width:1080,height:1020,position:"bottom",align:"center",vertical:"center",padding:50,fontSize:{from:80,to:180}}},{key:"key3",width:1080,height:1080,image:{width:1080,height:500,position:"top"},text:{width:1080,height:580,position:"bottom",align:"left",vertical:"bottom",padding:50,fontSize:{from:50,to:150}}},{key:"key4",width:1080,height:607,image:{width:500,height:607,position:"left"},text:{width:580,height:607,position:"right",align:"left",vertical:"top",padding:50,fontSize:{from:50,to:150}}},{key:"key11",width:600,height:628,image:{width:300,height:628,position:"left"},text:{width:300,height:628,position:"right",align:"left",vertical:"top",padding:50,fontSize:{from:25,to:80}}},{key:"key12",width:1200,height:428,image:{width:600,height:628,position:"left"},text:{width:600,height:428,position:"right",align:"left",vertical:"top",padding:50,fontSize:{from:25,to:80}}}]),b=n(14);var E=function(){var t=Object(o.useState)([]),e=Object(f.a)(t,2),n=e[0],i=e[1],a=Object(o.useCallback)((function(t){var e=t.map((function(t){var e;return function t(e){return Object.entries(e).reduce((function(e,n){var i=Object(f.a)(n,2),a=i[0],o=i[1],r=[];return e.forEach((function(e){return(Array.isArray(o)?o:[o]).forEach((function(n){return(n&&"object"===typeof n?t(n):[n]).forEach((function(t){return r.push(Object.assign({},e,Object(b.a)({},a,t)))}))}))})),r}),[{}])}({image:(e=Object(w.a)({},t,{templates:x})).images,title:e.titles,text:e.texts,template:e.templates})}));i.apply(void 0,Object(p.a)(e))}),[i]);return{actions:Object(o.useMemo)((function(){return{calcCombinations:a}}),[a]),value:Object(o.useMemo)((function(){return{combinations:n}}),[n])}},y=Object(o.createContext)([]),j=Object(o.createContext)({}),O=function(t){var e=t.children,n=E(),i=n.actions,a=n.value;return r.a.createElement(y.Provider,{value:a},r.a.createElement(j.Provider,{value:i},e))},k=(n(71),"LinkToSource"),S=function(){var t=Object(o.useContext)(i.ActionsContext).setLinksData;return Object(o.useEffect)((function(){m().then((function(e){t(e)})).catch((function(t){return console.warn(t)}))}),[]),r.a.createElement("form",{className:"".concat(k,"-form"),onSubmit:function(e){e.preventDefault(),m().then((function(e){t(e)})).catch((function(t){return console.warn(t)}))}},r.a.createElement("input",{className:"".concat(k,"-input"),placeholder:"Link to Source"}),r.a.createElement("button",{className:"".concat(k,"-submit"),type:"submit"},"process"))},z=(n(72),function(){var t=Object(o.useContext)(a.Context).combinations;return t?r.a.createElement("div",{className:"".concat("Showtime")},t.map((function(t,e){var n=t.template,i=t.image,a=(t.text,t.title);return r.a.createElement("div",{className:"".concat("Showtime","-item"),key:e},r.a.createElement(T,{text:a,template:n,background:i.src}))}))):null}),C=(n(73),function(){var t=Object(o.useContext)(i.Context).linksData,e=Object(o.useContext)(a.ActionsContext).calcCombinations;return Object(o.useEffect)((function(){e(t)}),[e,t]),t?r.a.createElement("div",{className:"".concat("Review")},t.map((function(t,e){return r.a.createElement("div",{className:"".concat("Review","-item"),key:e},r.a.createElement("div",{className:"".concat("Review","-row")},t.titles.map((function(t,e){return r.a.createElement("div",{key:e},t)}))),r.a.createElement("div",{className:"".concat("Review","-row")},t.texts.map((function(t,e){return r.a.createElement("strong",{key:e},t)}))),r.a.createElement("div",{className:"".concat("Review","-row")},t.images.map((function(t,e){return r.a.createElement("div",{key:e},t.src)}))))}))):null}),N=n(9),A=n(45),R=n(43),F=n.n(R),H=(n(12),n(21),function(t){return function(e,n,i,a){var o=i/a,r=e/n,c=e,l=n;return(t?o>r:o<r)?l=c/o:c=l*o,{width:c,height:l,x:(e-c)/2,y:(n-l)/2}}}),B=(H(!0),H(!1)),P=function(t){var e=t.rgb,n=e.r,i=e.g,a=e.b,o=e.a;return"rgba(".concat(n,", ").concat(i,", ").concat(a,", ").concat(o,")")},I=function(t){var e=t.width,n=t.height,i=t.url,a=Object(A.a)(t,["width","height","url"]),c=F()("".concat(i)),l=Object(f.a)(c,2),u=l[0],h=l[1],s=Object(o.useState)({}),m=Object(f.a)(s,2),d=m[0],g=m[1];return Object(o.useEffect)((function(){"loaded"===h&&u&&g(B(e,n,u.naturalWidth,u.naturalHeight))}),[e,n,u,h]),u?r.a.createElement(N.Image,Object.assign({image:u},d,a)):null},D=function(t){var e=t.width,n=t.height,i=t.color;return r.a.createElement(N.Rect,{width:e,height:n,fill:i})},L=n(20),M=n.n(L),W=function(t){var e=t.text,n=t.textBox,i=t.fontFamily,a=t.fontSize;return new M.a.Text({x:0,y:0,text:e,fontSize:a,fontFamily:i,lineHeight:1.2,padding:n.padding,width:n.width})},T=function(t){var e=t.text,n=void 0===e?"":e,i=t.template,a=t.background,c=t.previewWidth,l=void 0===c?300:c,u=t.textColor,h=t.fontFamily,s=void 0===h?"Arial":h,m=Object(o.useRef)(null),d=Object(o.useRef)(null),g=Object(o.useState)(0),v=Object(f.a)(g,2),p=v[0],w=v[1],x=Object(o.useState)({width:0,height:0}),b=Object(f.a)(x,2),E=b[0],y=b[1],j=function(t){var e=t.textRef,n=t.text,i=t.textBox,a=t.width,o=t.height,r=t.fontFamily,c=i.fontSize.from,l=W({text:n,textBox:i,fontFamily:r,fontSize:i.fontSize.from}),u=Math.ceil(o/l.getHeight()*l.textArr.length),h=o/(u*l.attrs.lineHeight);console.log(o,l.getHeight(),i.fontSize.from),c=h>i.fontSize.to?i.fontSize.to:h,l=W({text:n,textBox:i,fontFamily:r,fontSize:c}),console.log(o,l.getHeight(),c);var s=function(){switch(i.vertical){case"bottom":return o-l.getHeight();case"center":return(o-l.getHeight())/2;case"top":default:return 0}}();return console.log({y:s,textObj:l,textRef:e,text:n,textBox:i,width:a,height:o,fontFamily:r}),{fontSize:c,y:s}}({textRef:d,text:n,width:i.text.width,height:i.text.height,fontSize:i.text.fontSize.from,fontFamily:s,textBox:i.text});return Object(o.useEffect)((function(){var t=l/(i.width||1);w(t),y({width:t*i.width,height:t*i.height})}),[w,l,i,y]),r.a.createElement(r.a.Fragment,null,r.a.createElement(N.Stage,{width:E.width,height:E.height,ref:m,scale:{x:p,y:p},style:{background:"red"}},r.a.createElement(N.Layer,null,r.a.createElement(D,{width:i.width,height:i.height,color:"#fa9"}),r.a.createElement(I,{url:a,x:i.width-i.image.width,y:i.height-i.image.height,width:i.width,height:i.image.height}),r.a.createElement(N.Text,{ref:d,text:n,fontSize:j.fontSize,fontFamily:s,lineHeight:1.2,y:j.y,width:i.text.width,align:i.text.align,fill:u?P(u):"#000",padding:i.text.padding}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){return r.a.createElement(i.Provider,null,r.a.createElement(a.Provider,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"App-header-text"},"In vino veritas In vino veritas In vino veritas In vino veritas")),r.a.createElement("main",{className:"App-main"},r.a.createElement("div",{className:"App-main-row"},r.a.createElement(S,null)),r.a.createElement("div",{className:"App-main-row"},r.a.createElement(C,null)),r.a.createElement("div",{className:"App-main-row"},r.a.createElement(z,null))))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},46:function(t,e,n){t.exports=n(120)},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){}},[[46,1,2]]]);
//# sourceMappingURL=main.24ad6c28.chunk.js.map