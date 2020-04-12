(function(t){function e(e){for(var s,i,l=e[0],o=e[1],c=e[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-todolist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",{staticClass:"title"},[t._v("Todo List")]),a("Todolist")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"todolist"},[a("div",{staticClass:"todolist__text"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputTask,expression:"inputTask"}],attrs:{type:"text",placeholder:"Add your task..."},domProps:{value:t.inputTask},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask(e)},input:function(e){e.target.composing||(t.inputTask=e.target.value)}}}),a("button",{staticClass:"button",on:{click:t.addTask}},[t._v("Add task")])]),a("div",{staticClass:"todolist__tasks"},[a("Todotask",{attrs:{arrayTasks:t.arrayTasks}})],1)])},l=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tasks_box"},[a("div",{staticClass:"filter_buttons"},[a("p",{staticClass:"total"},[t._v(t._s("all"===t.filter?"All tasks: "+t.arrayTasks.length:"")+" "+t._s("completed"===t.filter?"Completed tasks: "+t.completedTasks:"")+" "+t._s("active"===t.filter?"Active tasks: "+t.activeTasks:""))]),a("button",{staticClass:"all",class:{active_btn:"all"===t.filter},on:{click:function(e){t.filter="all"}}},[t._v("All")]),a("button",{staticClass:"active",class:{active_btn:"active"===t.filter},on:{click:function(e){t.filter="active",t.activeFind()}}},[t._v("Active")]),a("button",{staticClass:"completed",class:{active_btn:"completed"===t.filter},on:{click:function(e){t.filter="completed",t.completedFind()}}},[t._v("Completed")]),a("button",{staticClass:"delete_btn",on:{click:t.deleteAll}},[t._v("Delete all")])]),a("ul",t._l(t.arrayTasksFiltered,(function(e,s){return a("li",{key:s,staticClass:"task",class:{donetask:e.completed}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"el.completed"}],staticClass:"done",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(a){var s=e.completed,n=a.target,r=!!n.checked;if(Array.isArray(s)){var i=null,l=t._i(s,i);n.checked?l<0&&t.$set(e,"completed",s.concat([i])):l>-1&&t.$set(e,"completed",s.slice(0,l).concat(s.slice(l+1)))}else t.$set(e,"completed",r)}}}),a("span",[t._v(t._s(e.task))]),a("button",{staticClass:"remove",on:{click:function(e){return t.removeTask(e,s)}}},[t._v("X")])])})),0)])},c=[],u=(a("4de4"),a("a434"),{props:["arrayTasks"],data:function(){return{completedTasks:0,activeTasks:0,filter:"all"}},methods:{removeTask:function(t,e){this.arrayTasks.splice(e,1)},deleteAll:function(){this.filter="all",this.arrayTasks.splice(0,this.arrayTasks.length)},completedFind:function(){var t=this.arrayTasks.filter((function(t){return t.completed}));this.completedTasks=t.length},activeFind:function(){var t=this.arrayTasks.filter((function(t){return!t.completed}));this.activeTasks=t.length}},computed:{arrayTasksFiltered:function(){return"all"===this.filter?this.arrayTasks:"active"===this.filter?this.arrayTasks.filter((function(t){return!t.completed})):"completed"===this.filter?this.arrayTasks.filter((function(t){return t.completed})):this.arrayTasks}}}),d=u,p=(a("6f82"),a("2877")),f=Object(p["a"])(d,o,c,!1,null,null,null),v=f.exports,k={components:{Todotask:v},data:function(){return{arrayTasks:[],inputTask:""}},methods:{addTask:function(){""!==this.inputTask&&(this.arrayTasks.push({task:this.inputTask,completed:!1}),this.inputTask="")}}},m=k,h=(a("b7b0"),Object(p["a"])(m,i,l,!1,null,null,null)),y=h.exports,T={name:"App",components:{Todolist:y}},b=T,_=(a("5c0b"),Object(p["a"])(b,n,r,!1,null,null,null)),g=_.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"6e68":function(t,e,a){},"6f82":function(t,e,a){"use strict";var s=a("f04a"),n=a.n(s);n.a},"9c0c":function(t,e,a){},b7b0:function(t,e,a){"use strict";var s=a("6e68"),n=a.n(s);n.a},f04a:function(t,e,a){}});
//# sourceMappingURL=app.6797ac62.js.map