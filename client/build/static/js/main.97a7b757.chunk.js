(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){e.exports=t.p+"static/media/logo.513785b8.png"},27:function(e,a,t){e.exports=t(59)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){e.exports=t.p+"static/media/event.326b5e01.JPG"},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(22),r=t.n(c),s=t(3),i=t(4),m=t(6),o=t(5),u=t(7),d=t(62),p=t(64),E=t(63);function b(e){var a=e.fluid,t=e.children;return l.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function h(e){var a=e.fluid,t=e.children;return l.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function v(e){var a=e.size,t=e.children;return l.a.createElement("div",{className:a.split(" ").map(function(e){return"col-"+e}).join(" ")},t)}var N=function(e){var a=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},a)};var f=function(){return l.a.createElement(b,{fluid:!0},l.a.createElement(h,null,l.a.createElement(v,{size:"md-12"},l.a.createElement(N,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},g=t(23);t(32);function y(e){return l.a.createElement("div",{className:e.provider}," ",l.a.createElement("a",{href:"/auth/".concat("Facebook"==e.provider?"facebook":"google","/")},l.a.createElement("i",{class:"fab fa-".concat("Facebook"==e.provider?"facebook":"google")})," \xa0  \xa0Log in with ",e.provider))}function j(e){return l.a.createElement("div",{className:"wrap"},e.children)}function O(e){return l.a.createElement("div",{className:"inputWrap"},e.children)}function w(e){return l.a.createElement("input",Object.assign({className:"input"},e))}function k(){return l.a.createElement("div",{className:"subButton"}," ",l.a.createElement("a",{href:"/api/sign/googlesign"},l.a.createElement("i",{class:"fab fa-submit"}),l.a.createElement("b",null,"Submit")))}t(33);var C=function(e){return l.a.createElement("div",{className:"logo"},l.a.createElement("img",{className:"img",src:t(34)}))},x=(t(35),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={userName:"",firstName:"",lastName:"",email:"",password:"",passwordValid:""},t.handleInputChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(g.a)({},n,l))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(b,{fluid:!0},l.a.createElement(h,null,l.a.createElement(v,{size:"md-6 sm-12 cont1"},l.a.createElement(C,null)),l.a.createElement(v,{size:"md-6 sm-12 cont2"},l.a.createElement("div",{className:"graywrap"},l.a.createElement(j,null,l.a.createElement("h1",{style:{width:150,margin:"auto",position:"relative",top:35}},"Sign Up"),l.a.createElement(O,null,l.a.createElement(w,{value:this.state.firstName,onChange:this.handleInputChange,name:"firstName",placeholder:"First Name"}),l.a.createElement(w,{value:this.state.lastName,onChange:this.handleInputChange,name:"lastName",placeholder:"Last Name"}),l.a.createElement(w,{value:this.state.userName,onChange:this.handleInputChange,name:"userName",placeholder:"Username"}),l.a.createElement(w,{value:this.state.email,onChange:this.handleInputChange,name:"email",placeholder:"Email"}),l.a.createElement(w,{value:this.state.password,onChange:this.handleInputChange,name:"password",placeholder:"Password",type:"password"}),l.a.createElement(w,{value:this.state.passwordValid,onChange:this.handleInputChange,name:"passwordValid",placeholder:"Retype Password",type:"password"}),l.a.createElement(k,null)))))))}}]),a}(n.Component));t(36);var S=function(){return l.a.createElement(b,{fluid:!0},l.a.createElement(h,null,l.a.createElement(v,{size:"md-6 sm-12 cont1"},l.a.createElement(C,null)),l.a.createElement(v,{size:"md-6 sm-12 cont2"},l.a.createElement("div",{className:"graywrap"},l.a.createElement(j,null,l.a.createElement("h1",{style:{width:100,margin:"auto",position:"relative",top:35}},"Log In"),l.a.createElement("div",{className:"buttonWrap"},l.a.createElement(y,{provider:"Facebook"}),l.a.createElement(y,{provider:"Google"})),l.a.createElement("p",{className:"signup"},"Don't have a Facebook or Google account ? ",l.a.createElement("a",{href:"/signup"},l.a.createElement("b",null,"Sign Up"))))))))},F=(t(37),t(8)),I=t(24),z=t.n(I),M=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg "},l.a.createElement("a",{href:"/",id:"logo"},l.a.createElement("img",{src:z.a,width:"30",height:"30",alt:"logo"})),l.a.createElement("a",{className:"navbar-brand",id:"brand",href:"/"},"Eventbook"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse ",id:"navbarNav"},l.a.createElement("form",{className:"form-inline",id:"searchForm"},l.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",id:"searchButton"}," ",l.a.createElement(F.c,{className:"searchicon"})),l.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",id:"logoutButton"}," ",l.a.createElement(F.b,{className:"searchicon"})))))}}]),a}(n.Component),B=t(11),V=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container",id:"profilediv"},l.a.createElement("div",{className:"row justify-content-md-center",id:"rowprofileimg"},l.a.createElement("img",{src:"http://ae01.alicdn.com/kf/HTB1ZSuEXizxK1RkSnaVq6xn9VXaZ.jpg",alt:"profileimg",className:"img-thumbnail rounded-circle",id:"imageprofile"})),l.a.createElement("div",{className:"row justify-content-md-center",id:""},l.a.createElement("h1",null,"The Mask")),l.a.createElement("div",{className:"row justify-content-md-center profileinfo"},l.a.createElement("p",null,l.a.createElement(B.a,null)," Has organised ",l.a.createElement("span",null,"10")," events")),l.a.createElement("div",{className:"row justify-content-md-center profileinfo"},l.a.createElement("p",null,"Rating ",l.a.createElement("span",null,l.a.createElement(F.d,null),l.a.createElement(F.d,null),l.a.createElement(F.d,null),l.a.createElement(F.e,null),l.a.createElement(F.e,null)))))}}]),a}(n.Component),L=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-4",id:""},l.a.createElement("img",{src:"https://picsum.photos/200",className:"friendimg img-thumbnail rounded-circle",alt:"..."}),l.a.createElement("h1",{className:"friendname"},"name"))}}]),a}(n.Component),P=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container",id:"chatdiv"},l.a.createElement("h3",{className:"sectiontitle"},"Chat"),l.a.createElement("div",{className:"chatbox"},l.a.createElement("div",{className:"row",id:"friendsbox"},l.a.createElement(L,null),l.a.createElement(L,null),l.a.createElement(L,null),l.a.createElement(L,null),l.a.createElement(L,null),l.a.createElement(L,null),l.a.createElement(L,null),l.a.createElement(L,null)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"message...","aria-label":"message...","aria-describedby":"button-addon2"}),l.a.createElement("div",{className:"input-group-append"}),l.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2"},l.a.createElement(F.h,null))))))}}]),a}(n.Component),T=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container",id:"postdiv"},l.a.createElement("h3",{className:"sectiontitle"},"Post"),l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("button",{type:"button",className:"btn btn-outline-success postbtns"},l.a.createElement(F.f,{className:"posticons"})),l.a.createElement("button",{type:"button",className:"btn btn-outline-success postbtns"},l.a.createElement(F.g,{className:"posticons"})),l.a.createElement("button",{type:"button",className:"btn btn-outline-success postbtns",onClick:function(e){e.preventDefault(),window.location="/main/createEvent"}},l.a.createElement(B.a,{className:"posticons"}))),l.a.createElement("div",{className:"row m-2"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{type:"submit",className:"input-group-text postlinks"},"Video ",l.a.createElement(F.a,null))),l.a.createElement("input",{type:"text","aria-label":"First name",className:"form-control",placeholder:"video link"}),l.a.createElement("input",{type:"text","aria-label":"Last name",className:"form-control",placeholder:"comments"}))),l.a.createElement("div",{className:"row m-2"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{type:"submit",className:"input-group-text postlinks"},"image ",l.a.createElement(F.a,null))),l.a.createElement("input",{type:"text","aria-label":"First name",className:"form-control",placeholder:"image link"}),l.a.createElement("input",{type:"text","aria-label":"Last name",className:"form-control",placeholder:"comments"}))))}}]),a}(n.Component),A=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-3 videostr"},l.a.createElement("iframe",{className:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/aVS4W7GZSq0",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}}]),a}(n.Component),D=t(13),G=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"modal fade ".concat(this.props.show),id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle",ariaHidden:"false",style:this.props.modalStyle},l.a.createElement("div",{className:"modalcontainer modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2"},l.a.createElement(B.c,null)),l.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2"},l.a.createElement(B.d,null)),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:function(){return e.props.hide()}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-7"},l.a.createElement("img",{src:"https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",className:"modalimg"}),l.a.createElement("h1",{className:"likes"},l.a.createElement(D.a,{className:"likesic"}),l.a.createElement("span",{className:"likesicn"},"20"),l.a.createElement(D.b,{className:"dislikesic"}),l.a.createElement("span",{className:"dislikesicn"},"3"))),l.a.createElement("div",{className:"col-5"},l.a.createElement("div",{className:"container",id:"cmtdiv"},l.a.createElement("h3",{className:"sectiontitle"},"Comments"),l.a.createElement("div",{className:"commentsbox"},l.a.createElement("div",{className:"row",id:"comments"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Comments...","aria-label":"Comments","aria-describedby":"button-addon2"}),l.a.createElement("div",{className:"input-group-append"}),l.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2"},l.a.createElement(B.b,null)),l.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2"},l.a.createElement(D.a,null)),l.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2"},l.a.createElement(D.b,null)))))))))))))}}]),a}(n.Component),R=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={modal:"",modalStyle:{}},t.showModal=function(){t.setState(function(e){return{modal:"show",modalStyle:{display:"inline-block",backgroundColor:"rgba(52, 52, 52, 0.8)"}}})},t.hideModal=function(){t.setState(function(e){return{modal:"",modalStyle:{}}})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container",id:"timelinediv"},l.a.createElement("h3",{className:"sectiontitle"},"Streaming"),l.a.createElement("div",{className:"streamsection"},l.a.createElement("div",{id:"rowvideostream"},l.a.createElement(A,null),l.a.createElement(A,null),l.a.createElement(A,null),l.a.createElement(A,null),l.a.createElement(A,null))),l.a.createElement("h3",{className:"sectiontitle"},"Timeline"),l.a.createElement("div",{className:"timelinesection"},l.a.createElement("div",{className:"row",id:"rowtimeline"},l.a.createElement("div",{className:"col-4",onClick:function(a){return e.showModal()}},l.a.createElement("img",{src:"https://picsum.photos/200",alt:"",className:"timelineimg"})),l.a.createElement("div",{className:"col-4"},l.a.createElement("img",{src:"https://picsum.photos/200",alt:"",className:"timelineimg"})),l.a.createElement("div",{className:"col-4"},l.a.createElement("img",{src:"https://picsum.photos/200",alt:"",className:"timelineimg"})),l.a.createElement("div",{className:"col-4"},l.a.createElement("img",{src:"https://picsum.photos/200",alt:"",className:"timelineimg"})),l.a.createElement("div",{className:"col-4"},l.a.createElement("img",{src:"https://picsum.photos/200",alt:"",className:"timelineimg"})))),l.a.createElement(G,{show:this.state.modal,modalStyle:this.state.modalStyle,hide:this.hideModal}))}}]),a}(n.Component),W=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"card mb-3 eventcard",id:""},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:"https://picsum.photos/200",className:"card-img",alt:"..."})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Bootcamp graduation"),l.a.createElement("p",{className:"card-text"},"Organizors : hani, susan ,abdel ,dawid , jenny, iji",l.a.createElement("br",null),"Participants : hani, susan ,abdel ,dawid , jenny, iji",l.a.createElement("br",null),"Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate."),l.a.createElement("p",{className:"card-text"},l.a.createElement("small",{className:"text-muted"},"Created 3 mins ago"))))))}}]),a}(n.Component),q=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container",id:"eventscontainer"},l.a.createElement("h3",{className:"sectiontitle"},"Events"),l.a.createElement(W,null),l.a.createElement(W,null),l.a.createElement(W,null),l.a.createElement(W,null))}}]),a}(n.Component),H=t(25),J=t.n(H),U=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={autenticated:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;J.a.get("/auth/google/main").then(function(a){if(a)return e.setState({autenticated:!0}),!0;e.setState({autenticated:!1})})}},{key:"render",value:function(){if(this.state.autenticated)return l.a.createElement("div",{id:"mainpagediv"},l.a.createElement(M,null),l.a.createElement("div",{className:"container-fluid",id:"contentdiv"},l.a.createElement("div",{className:"row",id:"contentrow"},l.a.createElement("div",{className:"container",id:"profileChat"},l.a.createElement(V,null),l.a.createElement(P,null)),"/main/createEvent"===this.props.link?l.a.createElement("div",{className:"container",id:"mainsectionCtrE"}):l.a.createElement("div",{className:"container",id:"mainsection"},l.a.createElement(T,null),l.a.createElement(R,null)),l.a.createElement("div",{className:"container",id:"events"},l.a.createElement(q,null)))));this.props.history.push("/")}}]),a}(n.Component),Z=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(E.a,{exact:!0,path:"/",component:S}),l.a.createElement(E.a,{exact:!0,path:"/signup",component:x}),l.a.createElement(E.a,{exact:!0,path:"/main",component:U}),l.a.createElement(E.a,{component:f}))))}}]),a}(n.Component);r.a.render(l.a.createElement(Z,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.97a7b757.chunk.js.map