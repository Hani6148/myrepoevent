(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t(49)},44:function(e,a,t){},45:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),s=t(4),m=t(5),o=t(8),i=t(6),u=t(9),p=t(52),d=t(54),E=t(53);function f(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function b(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function N(e){var a=e.size,t=e.children;return r.a.createElement("div",{className:a.split(" ").map(function(e){return"col-"+e}).join(" ")},t)}var g=function(e){var a=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},a)};var h=function(){return r.a.createElement(f,{fluid:!0},r.a.createElement(b,null,r.a.createElement(N,{size:"md-12"},r.a.createElement(g,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},v=t(19),k=t.n(v),w=(t(44),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).handleFormSubmit=function(e){e.preventDefault(),console.log("here"),k.a.get("api/sign/googlesign").then(function(e){console.log(e)})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"}),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"login-form"},r.a.createElement("form",{action:"/examples/actions/confirmation.php",method:"post"},r.a.createElement("h2",{className:"text-center"},"Sign in"),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"fa fa-user"})),r.a.createElement("input",{type:"text",className:"form-control",name:"username",placeholder:"Username",required:"required"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"fa fa-lock"})),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",required:"required"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-success btn-block login-btn"},"login in")),r.a.createElement("div",{className:"or-seperator"},r.a.createElement("i",null,"or")),r.a.createElement("div",{className:"text-center social-btn"},r.a.createElement("a",{href:"#",className:"btn btn-info btn-block"},r.a.createElement("i",{className:"fa fa-Facebook"})," login with ",r.a.createElement("b",null,"Facebook")),r.a.createElement("a",{href:"#",className:"btn btn-danger btn-block",onClick:this.handleFormSubmit},r.a.createElement("i",{className:"fa fa-google"})," login with ",r.a.createElement("b",null,"Google"))),r.a.createElement("div",{className:"hint-text small"},"Don't have an account? ",r.a.createElement("a",{href:"/signup",className:"text-success"},"sign up!")))))))}}]),a}(r.a.Component)),x=(t(45),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"}),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"login-form"},r.a.createElement("form",{action:"/examples/actions/confirmation.php",method:"post"},r.a.createElement("h2",{className:"text-center"},"Sign up"),r.a.createElement("div",{className:"text-center social-btn"},r.a.createElement("a",{href:"#",className:"btn btn-primary btn-block"},r.a.createElement("i",{className:"fa fa-facebook"})," Signup  with ",r.a.createElement("b",null," ",r.a.createElement("i",{class:"fab fa-facebook-square"})," Facebook")),r.a.createElement("a",{href:"#",className:"btn btn-danger btn-block"},r.a.createElement("i",{className:"fa fa-google"})," Sign in with ",r.a.createElement("b",null,"Google"))),r.a.createElement("div",{className:"or-seperator"},r.a.createElement("i",null,"or")),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"fa fa-user"})),r.a.createElement("input",{type:"text",className:"form-control",name:"date-of-birth",placeholder:"email",required:"required"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"fa fa-lock"})),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",required:"required"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"fa fa-user"})),r.a.createElement("input",{type:"text",className:"form-control",name:"date-of-birth",placeholder:"Date of birth",required:"required"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-success btn-block login-btn"},"Sign up")),r.a.createElement("div",{className:"clearfix"},r.a.createElement("label",{className:"pull-left checkbox-inline"},r.a.createElement("input",{type:"checkbox"})," Remember me"),r.a.createElement("a",{href:"#",className:"pull-right text-success"},"Forgot Password?"))),r.a.createElement("div",{className:"hint-text small"},"Already have an account? ",r.a.createElement("a",{href:"/",className:"text-success"},"login"))))))}}]),a}(r.a.Component));var y=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))},j=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(d.a,null,r.a.createElement(E.a,{exact:!0,path:"/",component:w}),r.a.createElement(E.a,{exact:!0,path:"/signup",component:x}),r.a.createElement(E.a,{component:h}))))}}]),a}(n.Component);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.4ff85950.chunk.js.map