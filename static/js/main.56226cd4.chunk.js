(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,t,a){e.exports={button:"style_button__tgjHH",info:"style_info__weiHc",success:"style_success__29VG-",danger:"style_danger__33bus"}},,function(e,t,a){e.exports={done:"style_done__1S9Xw"}},,,function(e,t,a){e.exports={App:"App_App__3X82d"}},function(e,t,a){e.exports={list:"style_list__32RAF",task:"style_task__1GGuQ"}},function(e,t,a){},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(6),l=a.n(s),r=(a(15),a(7)),i=a.n(r),o=a(1),u=a(2),m=a.n(u),p=a(3),d=a.n(p),_=function(e){var t,a=d()((t={},Object(o.a)(t,m.a.button,!0),Object(o.a)(t,m.a.danger,"danger"===e.type),Object(o.a)(t,m.a.info,"info"===e.type),Object(o.a)(t,m.a.success,"success"===e.type),t));return c.a.createElement("input",{type:"button",className:a,value:e.text})},E=function(e){return c.a.createElement("input",{placeholder:e.placeholder})};var f=function(){return c.a.createElement("div",{className:"todoList-header"},c.a.createElement("h3",{className:"todoList-header__title"},"What to Learn"),c.a.createElement("div",{className:"todoList-newTaskForm"},c.a.createElement(E,{placeholder:"New Title"}),c.a.createElement(_,{text:"Add"})))},v=a(8),y=a.n(v),b=a(4),h=a.n(b);var k=function(e){var t=d()(Object(o.a)({},h.a.done,!0===e.isDone));return c.a.createElement("div",{className:h.a.list},c.a.createElement("div",{className:t},c.a.createElement("input",{type:"checkbox",checked:e.isDone}),c.a.createElement("span",null,e.title)))};function x(e){var t=e.tasks.map((function(e){return c.a.createElement(k,{title:e.title,isDone:e.isDone})}));return c.a.createElement("div",{className:y.a.list},t)}function N(){return c.a.createElement("div",{className:"todoList-footer"},c.a.createElement(_,{text:"All",type:"info"}),c.a.createElement(_,{text:"Completed",type:"danger"}),c.a.createElement(_,{text:"Active",type:"success"}))}var j=a(9),O=a.n(j),A=function(e){return c.a.createElement("div",{className:O.a.todolist},c.a.createElement(f,null),c.a.createElement(x,{tasks:e.tasks}),c.a.createElement(N,null))},D=a(18);var g=function(){var e=[{id:Object(D.a)(),title:"CSS",isDone:!0},{id:Object(D.a)(),title:"HTML",isDone:!1},{id:Object(D.a)(),title:"JS",isDone:!0},{id:Object(D.a)(),title:"React",isDone:!1}];return c.a.createElement("div",{className:i.a.App},c.a.createElement(A,{tasks:e}))};l.a.render(c.a.createElement(g,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.56226cd4.chunk.js.map