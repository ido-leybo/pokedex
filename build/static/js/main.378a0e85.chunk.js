(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(17),r=n.n(s),i=(n(22),n(3)),o=n.n(i),l=n(4),u=n(6),j=(n(24),n(0));function p(e){var t=e.onClick;return Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("input",{className:"search-field",placeholder:"Enter pokemon name"}),Object(j.jsx)("button",{className:"btn search-button",onClick:t,children:"search pokemon"})]})}function d(e){var t,n,c=e.details,a=e.renderImage,s=e.onOver,r=e.onLeave,i=e.onTypeClick,o=e.buttonText,l=e.buttonCatchClick,u=e.buttonReleaseClick;return c?(t=c.types?c.types:[],n="catch"===o?l:u,Object(j.jsxs)("div",{className:"details",children:[Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"detail",children:"Name:"})," ",Object(j.jsx)("span",{className:"detail",children:c.name})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"detail",children:"Height:"})," ",Object(j.jsx)("span",{className:"detail",children:c.height})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"detail",children:"Weight:"})," ",Object(j.jsx)("span",{className:"detail",children:c.weight})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"detail",children:"Types:"}),t.map((function(e){return Object(j.jsx)("span",{className:"detail clickable",onClick:i,children:e},e)}))]})]}),Object(j.jsxs)("div",{className:"imgBtn",children:[Object(j.jsx)("img",{src:a,onMouseOver:s,onMouseLeave:r}),Object(j.jsx)("button",{className:"btn",onClick:n,children:o})]})]})):Object(j.jsx)("div",{className:"notfound",children:"Pokemon Not Found"})}function h(e){var t=e.item,n=e.onClick;return Object(j.jsxs)("li",{className:"list-item clickable",onClick:n,children:[Object(j.jsx)("span",{children:t.name}),Object(j.jsx)("span",{children:Object(j.jsx)("img",{className:"pokeImg",src:t.image})})]})}function m(e){var t=e.list,n=e.onClick;return Object(j.jsxs)("div",{className:"list",children:[Object(j.jsx)("h2",{className:"list-title",children:"Type List:"}),Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)(h,{item:e,onClick:n},"ListItem-".concat(e.name))}))})]})}var b=function(e){var t=e.pokemons,n=e.onClick;return 0===t.length?Object(j.jsx)("div",{className:"collection empty",children:"You Have No Pokemons In Your Collection"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"Collection:"}),Object(j.jsx)("div",{className:"collection",children:t.map((function(e){return Object(j.jsxs)("div",{onClick:n,className:"collection-item clickable",children:[Object(j.jsx)("span",{children:e.name}),Object(j.jsx)("img",{className:"collection-item",src:e.sprites.front})]})}))})]})},x=n(5),O=n.n(x);n(43).config();var f=[{name:"",height:"",weight:"",types:"",sprites:"",captured:""}];var g=function(){var e=Object(c.useState)(f),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(u.a)(s,2),i=r[0],h=r[1],x=Object(c.useState)(null),g=Object(u.a)(x,2),v=g[0],k=g[1],N=Object(c.useState)("catch"),C=Object(u.a)(N,2),w=C[0],y=C[1],T=Object(c.useState)([]),I=Object(u.a)(T,2),S=I[0],L=I[1],E=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="SPAN"===t.target.tagName?t.target.innerText:"IMG"===t.target.tagName?t.target.previousElementSibling.innerText:t.target.parentElement.children[0].value,O.a.get("/api/pokemon/".concat(n.toLowerCase())).then((function(e){if(404===e.status)return alert("Pokemon not found");var t=e.data,n=e.data.sprites.front;k(n),h([]),a({name:t.name,pokeId:t.id,types:t.types,height:t.height,weight:t.weight,sprites:t.sprites,captured:t.captured}),t.captured?y("release"):y("catch")})).catch((function(e){a(null)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.textContent,e.next=3,O.a.get("/api/type/".concat(n));case 3:c=e.sent,a=c.data.pokemons,h(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="img"===t.target?t.target.innerText:t.target.parentElement.parentElement.children[0].innerText,e.next=3,O.a.get("/api/pokemon/".concat(n));case 3:c=e.sent,s=c.data.sprites.front,r=c.data,k(s),y("catch"),h([]),a({name:r.name,pokeId:r.id,types:r.types,height:r.height,weight:r.weight,sprites:r.sprites});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.captured=!0,a(n),e.next=4,O.a.post("/api/collection/catch",n);case 4:console.log("saved"),y("release"),A();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.pokeId,e.next=3,O.a.delete("/api/collection/release/".concat(t));case 3:console.log("delete pokemon"),y("catch"),n.captured=!1,a(n),A();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/collection");case 2:t=e.sent,L(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){A()}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Pokedex"}),Object(j.jsx)(p,{onClick:E}),Object(j.jsx)(d,{details:n,renderImage:v,onOver:function(e){var t=e.target.src;t=n.sprites.back,e.target.src=t,a(n)},onLeave:function(e){var t=e.target.src;t=n.sprites.front,e.target.src=t,a(n)},onTypeClick:P,buttonCatchClick:M,buttonReleaseClick:B,buttonText:w}),Object(j.jsx)(b,{pokemons:S,onClick:E})]}),Object(j.jsx)(m,{list:i,onClick:F})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.378a0e85.chunk.js.map