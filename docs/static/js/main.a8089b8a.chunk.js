(this["webpackJsonpamplify-react-app"]=this["webpackJsonpamplify-react-app"]||[]).push([[0],{124:function(t,e,n){t.exports=n(192)},129:function(t,e,n){},131:function(t,e,n){t.exports=n.p+"static/media/logo.06e73328.svg"},135:function(t,e){},192:function(t,e,n){"use strict";n.r(e);var a=n(11),c=n.n(a),r=n(105),i=n.n(r),o=(n(129),n(73)),u=n.n(o),s=n(106),l=n(55),p=n(74),m=n(64),f=(n(131),n(82),n(104)),g=function(){var t=Object(a.useState)([]),e=Object(m.a)(t,2),n=e[0],r=e[1],i=Object(a.useState)({limit:5,start:0}),o=Object(m.a)(i,2),g=o[0],d=o[1],b=Object(a.useState)(!0),h=Object(m.a)(b,2),v=h[0],j=h[1];function E(t,e){d(Object(p.a)(Object(p.a)({},g),{},Object(l.a)({},t,e)))}var O=function(){var t=Object(s.a)(u.a.mark((function t(){var e,n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),e=g.limit,n=g.start,t.next=4,f.a.get("cryptoapi","/coins?limit=".concat(e,"&start=").concat(n));case 4:a=t.sent,r(a.coins),j(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){O()}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("input",{placeholder:"start",onChange:function(t){return E("start",t.target.value)}}),c.a.createElement("input",{onChange:function(t){return E("limit",t.target.value)},placeholder:"limit"}),c.a.createElement("button",{onClick:O},"Fetch Coins"),v&&c.a.createElement("h2",null,"Loading..."),!v&&n.map((function(t,e){return c.a.createElement("div",{key:e},c.a.createElement("h2",null,t.name," - ",t.symbol),c.a.createElement("h5",null,"$",t.price_usd))})))},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,219)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))},b={aws_project_region:"us-east-2",aws_cloud_logic_custom:[{name:"cryptoapi",endpoint:"https://6874nir9y8.execute-api.us-east-2.amazonaws.com/dev",region:"us-east-2"}]};n(71).default.configure(b),i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),d()},82:function(t,e,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.a8089b8a.chunk.js.map