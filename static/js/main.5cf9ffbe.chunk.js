(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),j=c(0),r=c.n(j),s=c(15),i=c.n(s),b=c(17),l=c(7),a=c(2),h=r.a.createContext(),o=h.Provider,d=h.Consumer;function u(){return Object(n.jsx)("div",{children:Object(n.jsx)(d,{children:function(e){return Object(n.jsxs)("p",{children:["My name is ",e.name,", my age is ",e.age]})}})})}function O(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Hello Students"}),Object(n.jsx)(u,{})]})}function x(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Homepage"}),Object(n.jsx)("p",{children:"This is homepage"}),Object(n.jsx)(l.b,{to:"/gallary",children:Object(n.jsx)("div",{children:"gallary"})})]})}function p(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Gallary"}),Object(n.jsx)("p",{children:"This is Gallary"})]})}function f(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"About"}),Object(n.jsx)("p",{children:"This is About"})]})}c(28);function m(){var e=Object(j.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1];return Object(j.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))})),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Final"}),Object(n.jsxs)(l.a,{children:[Object(n.jsx)(l.b,{to:"/",children:Object(n.jsx)("button",{children:"Home"})}),Object(n.jsx)(l.b,{to:"/gallary",children:Object(n.jsx)("button",{children:"Gallary"})}),Object(n.jsx)(l.b,{to:"/about",children:Object(n.jsx)("button",{children:"About"})}),Object(n.jsxs)(a.c,{children:[Object(n.jsx)(a.a,{exact:!0,path:"/",component:function(){return Object(n.jsx)(x,{})}}),Object(n.jsx)(a.a,{path:"/gallary",component:function(){return Object(n.jsx)(p,{})}}),Object(n.jsx)(a.a,{path:"/about",component:function(){return Object(n.jsx)(f,{})}})]})]}),c.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:e.name}),Object(n.jsxs)("p",{children:["City: ",e.address.city]}),Object(n.jsxs)("p",{children:["Contact me: ",e.email]}),Object(n.jsx)("br",{})]})})),Object(n.jsx)(o,{value:{name:"Nati",age:22},children:Object(n.jsx)(O,{})})]})}i.a.render(Object(n.jsx)(m,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.5cf9ffbe.chunk.js.map