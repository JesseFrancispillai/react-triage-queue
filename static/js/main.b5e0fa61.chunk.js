(this["webpackJsonpreact-triage-queue"]=this["webpackJsonpreact-triage-queue"]||[]).push([[0],{12:function(e,t,n){e.exports={item:"TicketItem_item__2hA5S",content:"TicketItem_content__1kSOw",actions:"TicketItem_actions__5SSB7"}},17:function(e,t,n){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",active:"MainNavigation_active__oN3Ka"}},20:function(e,t,n){e.exports={card:"Card_card__3_jzl"}},23:function(e,t,n){e.exports={list:"TicketList_list__GWc5_"}},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(19),r=n.n(i),s=(n(30),n(2)),a=n(25),u=n(11),l=n(20),o=n.n(l),j=n(0);var d=function(e){return Object(j.jsx)("div",{className:o.a.card,children:e.children})},b=n(21),h=n(22),O=Object(c.createContext)({queue:[],totalQueue:0,addQueue:function(e){},removeQueue:function(e){},itemInQueue:function(e){}}),f=new(function(){function e(){Object(b.a)(this,e),this.values=[]}return Object(h.a)(e,[{key:"swap",value:function(e,t){var n=this.values[e];return this.values[e]=this.values[t],this.values[t]=n,this.values}},{key:"bubbleUp",value:function(){for(var e=this.values.length-1;e>0;){var t=Math.floor((e-1)/2);if(!(this.values[t].priority>this.values[e].priority))break;this.swap(e,t),e=t}return 0}},{key:"enqueue",value:function(e){return this.values.push(e),this.bubbleUp(),this.values}},{key:"bubbleDown",value:function(){for(var e=0,t=this.values.length,n=this.values[0].priority;;){var c=2*e+1,i=2*e+2,r=void 0,s=void 0,a=null;if(c<t&&(r=this.values[c].priority)<n&&(a=c),i<t&&((s=this.values[i].priority)<n&&null===a||s<r&&null!==a)&&(a=i),null===a)break;this.swap(e,a),e=a}}},{key:"dequeue",value:function(){this.swap(0,this.values.length-1);var e=this.values.pop();return this.values.length>1&&this.bubbleDown(),e}}]),e}());function x(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),i=n[0],r=n[1];var s={queue:i,totalQueue:i.length,addQueue:function(e){r(f.enqueue(e))},removeQueue:function(e){r((function(t){return t.filter((function(t){return t.id!=e}))}))},itemInQueue:function(e){return i.some((function(t){return t.id===e}))}};return Object(j.jsx)(O.Provider,{value:s,children:e.children})}var v=O,m=n(12),p=n.n(m);var _=function(e){var t=Object(c.useContext)(v),n=t.itemInQueue(e.id);return Object(j.jsx)("li",{className:p.a.item,children:Object(j.jsxs)(d,{children:[Object(j.jsxs)("div",{className:p.a.content,children:[Object(j.jsx)("h3",{children:e.priority}),Object(j.jsx)("p",{children:e.fname}),Object(j.jsx)("p",{children:e.lname}),Object(j.jsx)("p",{children:e.date}),Object(j.jsx)("p",{children:e.id}),Object(j.jsx)("p",{children:e.notes})]}),Object(j.jsx)("div",{className:p.a.actions,children:Object(j.jsx)("button",{onClick:function(){n?t.removeQueue(e.id):t.addQueue({id:e.id,priority:e.priority,fname:e.fname,lname:e.lname,date:e.date,notes:e.notes})},children:n?"Dequeue":"Enqueue"})})]})})},k=n(23),N=n.n(k);var y=function(e){return Object(j.jsx)("ul",{className:N.a.list,children:e.tickets.map((function(e){return Object(j.jsx)(_,{id:e.id,priority:e.priority,fname:e.fname,lname:e.lname,date:e.date,notes:e.notes},e.id)}))})};var g=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),s=Object(u.a)(r,2),l=s[0],o=s[1];return Object(c.useEffect)((function(){i(!0),fetch("https://react-triage-queue-default-rtdb.firebaseio.com/tickets.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var n in e){var c=Object(a.a)({id:n},e[n]);t.push(c)}i(!1),o(t)}))}),[]),n?Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:"Loading..."})}):Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"All Tickets"}),Object(j.jsx)(y,{tickets:l})]})},q=n(8),T=n.n(q);var w=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),i=Object(c.useRef)(),r=Object(c.useRef)(),s=Object(c.useRef)();return Object(j.jsx)(d,{children:Object(j.jsxs)("form",{className:T.a.form,onSubmit:function(c){c.preventDefault();var a={priority:parseInt(t.current.value),fname:n.current.value,lname:i.current.value,date:r.current.value,notes:s.current.value};e.onAddTicket(a)},children:[Object(j.jsxs)("div",{className:T.a.control,children:[Object(j.jsx)("label",{htmlFor:"priority",children:"Priority"}),Object(j.jsx)("input",{type:"number",required:!0,id:"priority",min:"1",placeholder:"1",ref:t})]}),Object(j.jsxs)("div",{className:T.a.control,children:[Object(j.jsx)("label",{htmlFor:"fname",children:"First Name"}),Object(j.jsx)("input",{type:"text",required:!0,id:"fname",ref:n})]}),Object(j.jsxs)("div",{className:T.a.control,children:[Object(j.jsx)("label",{htmlFor:"lname",children:"Last Name"}),Object(j.jsx)("input",{type:"text",required:!0,id:"lname",ref:i})]}),Object(j.jsxs)("div",{className:T.a.control,children:[Object(j.jsx)("label",{htmlFor:"date",children:"Date"}),Object(j.jsx)("input",{type:"date",required:!0,id:"date",ref:r})]}),Object(j.jsxs)("div",{className:T.a.control,children:[Object(j.jsx)("label",{htmlFor:"notes",children:"Notes"}),Object(j.jsx)("textarea",{required:!0,id:"notes",rows:"5",ref:s})]}),Object(j.jsx)("div",{className:T.a.actions,children:Object(j.jsx)("button",{children:"Add Ticket"})})]})})};var Q=function(){var e=Object(s.f)();return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Add New Ticket"}),Object(j.jsx)(w,{onAddTicket:function(t){fetch("https://react-triage-queue-default-rtdb.firebaseio.com/tickets.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})};var S=function(){return Object(j.jsx)("div",{children:"Info Page"})};var I=function(){var e,t=Object(c.useContext)(v);return e=0===t.totalQueue?Object(j.jsx)("p",{children:"No tickets"}):Object(j.jsx)(y,{tickets:t.queue}),Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Queue"}),e]})},F=n(7),A=n(17),C=n.n(A);var R=function(){return Object(j.jsxs)("header",{className:C.a.header,children:[Object(j.jsx)("div",{className:C.a.logo,children:"Triage Queue - ReactJS"}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(F.b,{to:"/",children:"All Tickets"})}),Object(j.jsx)("li",{children:Object(j.jsx)(F.b,{to:"/new-ticket",children:"Add New Ticket"})}),Object(j.jsx)("li",{children:Object(j.jsx)(F.b,{to:"/queue",children:"Queue"})}),Object(j.jsx)("li",{children:Object(j.jsx)(F.b,{to:"/info",children:"Info"})})]})})]})};var D=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(R,{}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/",exact:!0,children:Object(j.jsx)(g,{})}),Object(j.jsx)(s.a,{path:"/new-ticket",children:Object(j.jsx)(Q,{})}),Object(j.jsx)(s.a,{path:"/queue",children:Object(j.jsx)(I,{})}),Object(j.jsx)(s.a,{path:"/info",children:Object(j.jsx)(S,{})})]})]})};r.a.render(Object(j.jsx)(x,{children:Object(j.jsx)(F.a,{children:Object(j.jsx)(D,{})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={form:"NewTicketForm_form__3sfTK",control:"NewTicketForm_control__3Cfnq",actions:"NewTicketForm_actions__1KrzS"}}},[[37,1,2]]]);
//# sourceMappingURL=main.b5e0fa61.chunk.js.map