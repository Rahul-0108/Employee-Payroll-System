(this["webpackJsonpemployee-money-system"]=this["webpackJsonpemployee-money-system"]||[]).push([[0],{11:function(e,t,n){},21:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(4),d=n.n(r),i=(n(21),n(11),n(12)),l=n(13),s=n(16),j=n(15),y=n(6),b="Add_Money",m="Remove_Money";var p=n(0),a=function(e){Object(s.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).props=e,c}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{style:{textAlign:"center"},children:[Object(p.jsx)("h1",{style:{backgroundColor:"black",color:"white",padding:"8px"},children:"Employee Money System"}),Object(p.jsxs)("table",{className:"table-bordered",style:{width:"50%",marginTop:"8%",marginLeft:"auto",marginRight:"auto"},children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"EmployeeId"}),Object(p.jsx)("th",{children:"Account Total Money"}),Object(p.jsx)("th",{children:"Transaction Amount"}),Object(p.jsx)("th",{children:"Add"}),Object(p.jsx)("th",{children:"Remove"})]})}),Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Employee1"}),Object(p.jsx)("td",{children:this.props.state.employyee1.money}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"text",id:"id1",className:"form-control"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{style:{borderWidth:"0px"},onClick:function(){return e.props.transaction(b,"employyee1",document.getElementById("id1").value)},children:"Add"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{style:{borderWidth:"0px"},onClick:function(){return e.props.transaction(m,"employyee1",document.getElementById("id1").value)},children:"Remove"})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Employee2"}),Object(p.jsx)("td",{children:this.props.state.employyee2.money}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"text",id:"id2",className:"form-control"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{style:{borderWidth:"0px"},onClick:function(){return e.props.transaction(b,"employyee2",document.getElementById("id2").value)},children:"Add"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{style:{borderWidth:"0px"},onClick:function(){return e.props.transaction(m,"employyee2",document.getElementById("id2").value)},children:"Remove"})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Employee3"}),Object(p.jsx)("td",{children:this.props.state.employyee3.money}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"text",id:"id3",className:"form-control"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{style:{borderWidth:"0px"},onClick:function(){return e.props.transaction(b,"employyee3",document.getElementById("id3").value)},children:"Add"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{style:{borderWidth:"0px"},onClick:function(){return e.props.transaction(m,"employyee3",document.getElementById("id3").value)},children:"Remove"})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Employee4"}),Object(p.jsx)("td",{children:this.props.state.employyee4.money}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"text",id:"id4",className:"form-control"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{style:{borderWidth:"0px"},onClick:function(){return e.props.transaction(b,"employyee4",document.getElementById("id4").value)},children:"Add"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{style:{borderWidth:"0px"},onClick:function(){return e.props.transaction(m,"employyee4",document.getElementById("id4").value)},children:"Remove"})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Employee5"}),Object(p.jsx)("td",{children:this.props.state.employyee5.money}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"text",id:"id5",className:"form-control"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{style:{borderWidth:"0px"},onClick:function(){return e.props.transaction(b,"employyee5",document.getElementById("id5").value)},children:"Add"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{style:{borderWidth:"0px"},onClick:function(){return e.props.transaction(m,"employyee5",document.getElementById("id5").value)},children:"Remove"})})]})]})]})]})}}]),n}(o.a.Component),u=Object(y.b)((function(e){return{state:e}}),(function(e){return{transaction:function(t,n,c){e(function(e,t,n){return{type:e,employeeId:t,money:n}}(t,n,c))}}}))(a),h=n(5),x=n(2),O=n(3),f={employyee1:{money:1e3},employyee2:{money:1e3},employyee3:{money:1e3},employyee4:{money:1e3},employyee5:{money:1e3}},v=Object(h.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;if(void 0===t.money||""===t.money)return e;var n=e[t.employeeId];switch(t.type){case b:return Object(O.a)(Object(O.a)({},e),{},Object(x.a)({},t.employeeId,{money:n.money+Number(t.money)}));case m:return Object(O.a)(Object(O.a)({},e),{},Object(x.a)({},t.employeeId,{money:n.money-Number(t.money)}));default:return e}}));var g=function(){return Object(p.jsx)(y.a,{store:v,children:Object(p.jsx)("div",{children:Object(p.jsx)(u,{})})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,d=t.getTTFB;n(e),c(e),o(e),r(e),d(e)}))};d.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),E()}},[[29,1,2]]]);
//# sourceMappingURL=main.408323bd.chunk.js.map