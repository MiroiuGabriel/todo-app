(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{29:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),o=n(20),l=n.n(o),i=(n(29),n(11)),s=n(9),r=n.n(s),d=n(2),j=n(21),u=n(4),b=n(23),m=n(5),O=function(t){var e=t.children,n=t.outline,a=t.className,o=Object(b.a)(t,["children","outline","className"]),l=Object(m.a)("button",a,n&&"outline");return Object(c.jsx)("button",Object(d.a)(Object(d.a)({},o),{},{className:l,children:e}))},f=(n(31),function(t){var e=t.task,n=t.onRemove,a=t.showCompleted,o=t.onEdit,l=Object(m.a)("task-container",e.completed&&"completed"),i=Object(m.a)("task-title",e.completed&&"completed");return Object(c.jsxs)("div",{className:l,children:[Object(c.jsxs)("div",{className:"task-content",onClick:function(){return a(e.id)},children:[Object(c.jsx)("h3",{className:i,children:e.title}),Object(c.jsx)("p",{className:"task-title",children:e.content})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{className:"edit",onClick:function(){return o(e)},children:"Edit"}),Object(c.jsx)(O,{className:"remove",onClick:function(){return n(e.id)},children:"Remove"})]})]})}),h=(n(32),function(t){var e=t.tasks,n=t.onRemove,a=t.showCompleted,o=t.onEdit,l=t.byCompleted,i=t.byTodo,s=t.byAll,r=function(t,e){return e.completed?t.filter((function(t){return t.completed})):e.todo?t.filter((function(t){return!t.completed})):t}(e,t.filter);return Object(c.jsxs)("div",{className:"task-list-container",children:[Object(c.jsx)("div",{className:"filter",children:Object(c.jsxs)("div",{className:"filter-content",children:[Object(c.jsx)("h3",{children:"Filter by:"}),Object(c.jsxs)("div",{className:"filter-btn-container",children:[Object(c.jsx)(O,{className:"finished",onClick:l,children:"Completed"}),Object(c.jsx)(O,{className:"todo",onClick:i,children:"Todo"}),Object(c.jsx)(O,{className:"unfiltered",onClick:s,children:"All"})]})]})}),r.map((function(t){return Object(c.jsx)(f,{task:t,onRemove:n,showCompleted:a,onEdit:o},t.id)}))]})}),p=(n(33),function(t){var e=t.label,n=t.value,a=t.onChange,o=t.hasError,l=Object(m.a)("title-input input",o&&"required");return Object(c.jsxs)("div",{className:l,children:[Object(c.jsx)("label",{htmlFor:e,className:"label-box",children:e}),Object(c.jsx)("input",{id:e,type:"text",className:"text-box",value:n,onChange:a})]})}),v=(n(34),n(10)),x=localStorage.getItem("theme"),k=function(t){var e=t.addTask,n=t.onEditCancel,o=t.editTask,l=t.saveEditTask,i=Object(a.useState)(o?o.title:""),s=Object(u.a)(i,2),r=s[0],j=s[1],b=Object(a.useState)(o?o.content:""),m=Object(u.a)(b,2),O=m[0],f=m[1],h=Object(a.useState)({title:!1,content:!1}),k=Object(u.a)(h,2),N=k[0],g=k[1],C=Object(a.useState)(x||"dark"),E=Object(u.a)(C,2),S=E[0],y=E[1];Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",S),localStorage.setItem("theme",S)}),[S]);var T=function(){r.trim()&&O.trim()&&(e(r,O),j(""),f("")),g({title:!r.trim(),content:!O.trim()})};return Object(c.jsxs)("div",{className:"add-todo-container",onKeyPress:function(t){return"Enter"===t.key&&T()},children:[Object(c.jsxs)("div",{className:"task-tracker-container",children:[Object(c.jsx)("h2",{className:"task-tracker",children:"Task Tracker"}),Object(c.jsxs)("div",{className:"btns-container-add",children:[!o&&Object(c.jsx)("button",{className:"theme-button",onClick:function(){y((function(t){return"dark"===t?"light":"dark"}))},"aria-label":"Switch theme",children:"dark"==S?Object(c.jsx)(v.b,{}):Object(c.jsx)(v.a,{})}),!o&&Object(c.jsx)("button",{className:"btn",onClick:T,children:"Add"})]}),o&&Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"btn edit margin",onClick:function(){return t=r,e=O,o&&t.length&&e.length&&(l(o.id,r,O),j(""),f("")),void g({title:0===r.length,content:0===O.length});var t,e},children:"Edit"}),Object(c.jsx)("button",{className:"btn cancel",onClick:function(){n(),j(""),f("")},children:"Cancel"})]})]}),Object(c.jsxs)("div",{className:"todo-create-container",children:[Object(c.jsx)(p,{label:"Title:",value:r,onChange:function(t){j(t.target.value),g(Object(d.a)(Object(d.a)({},N),{},{title:!t.target.value}))},hasError:N.title}),Object(c.jsx)(p,{label:"Todo:",value:O,onChange:function(t){f(t.target.value),g(Object(d.a)(Object(d.a)({},N),{},{content:!t.target.value}))},hasError:N.content})]})]})},N=(n(35),n(22)),g=n.n(N),C=JSON.parse(localStorage.getItem("todos")||"null"),E=function(){var t=Object(a.useState)(C||[]),e=Object(u.a)(t,2),n=e[0],o=e[1],l=Object(a.useState)(null),s=Object(u.a)(l,2),b=s[0],m=s[1],O=Object(a.useState)({completed:!1,todo:!1,all:!0}),f=Object(u.a)(O,2),p=f[0],v=f[1];Object(a.useEffect)((function(){function t(){return(t=Object(j.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(C){t.next=5;break}return t.next=3,g()("https://jsonplaceholder.typicode.com/todos");case 3:e=t.sent,o(e.data.slice(0,4).map((function(t){return Object(d.a)(Object(d.a)({},t),{},{content:t.title})})));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);var x=function(){m(null)};return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(k,{addTask:function(t,e){var c={id:Math.floor(1e3*Math.random()),title:t,content:e,completed:!1};console.log([].concat(Object(i.a)(n),[c])),o([].concat(Object(i.a)(n),[c]))},editTask:b,saveEditTask:function(t,e,c){o(n.map((function(n){return n.id===t?Object(d.a)(Object(d.a)({},n),{},{title:e,content:c}):n}))),m(null)},onEditCancel:x},b&&b.id),n.length>0&&Object(c.jsx)(h,{tasks:n,onRemove:function(t){b&&t===b.id&&x(),o(n.filter((function(e){return e.id!==t})))},showCompleted:function(t){o(n.map((function(e){return e.id===t?Object(d.a)(Object(d.a)({},e),{},{completed:!e.completed}):e})))},onEdit:function(t){m(t)},byCompleted:function(){v(Object(d.a)(Object(d.a)({},p),{},{todo:!1,all:!1,completed:!0}))},byTodo:function(){v(Object(d.a)(Object(d.a)({},p),{},{todo:!0,all:!1,completed:!1}))},byAll:function(){v(Object(d.a)(Object(d.a)({},p),{},{todo:!1,all:!0,completed:!1}))},filter:p})]})};Number.parseFloat(localStorage.getItem("version")||"0")<1.2&&(console.log("Outdated app: removing local storage"),localStorage.removeItem("todos")),localStorage.setItem("version",JSON.stringify(1.2));var S=function(){return Object(c.jsx)(E,{})};l.a.render(Object(c.jsx)(S,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.2bacc665.chunk.js.map