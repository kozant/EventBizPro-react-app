(this.webpackJsonpeventbizpro=this.webpackJsonpeventbizpro||[]).push([[0],{21:function(e,t,a){e.exports=a(38)},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),i=a(8),o=a(9),s=a(11),m=a(10),u=(a(26),a(6)),d=function(e){var t=e.isLogged,a=r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{to:"/login",className:"nav-link"},"Profile")),n=r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{to:"/profile",className:"nav-link"},"Profile")),l="false"===t?a:n;return r.a.createElement("nav",{className:"app-header navbar"},r.a.createElement("div",{className:"container"},r.a.createElement(u.b,{to:"/",className:"navbar-brand"},"EventBiz",r.a.createElement("span",null,"Pro")),r.a.createElement("ul",{className:"nav navbar-nav pull-xs-right"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/news",className:"nav-link"},"News")),r.a.createElement("li",{className:"nav-item"},l))))},p=(a(32),function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement(u.b,{className:"logo-font",to:"/"},"EventBiz",r.a.createElement("span",null,"Pro")),r.a.createElement("span",{className:"attribution"},"\xa9 2020. An interactive learning project from",r.a.createElement(u.b,{to:"/"}," Space"),". Code licensed under MIT.")))}),f=(a(33),a(34),function(e){var t=e.articles;return r.a.createElement("div",{className:"article-preview"},r.a.createElement("div",null,r.a.createElement("div",{className:"article-meta"},r.a.createElement("div",{className:"info"},t.author))),r.a.createElement("p",null,t.description))}),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).maxId=100,e.state={articles:[e.createArticle("John"),e.createArticle("Mike"),e.createArticle("William"),e.createArticle("Jake"),e.createArticle("Peter")]},e}return Object(o.a)(a,[{key:"createArticle",value:function(e){return{id:this.maxId++,author:e,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}}},{key:"render",value:function(){var e=this.state.articles;return r.a.createElement("div",{className:"container"},e.map((function(e){return r.a.createElement(f,{key:e.id,articles:e})})))}}]),a}(n.Component),g=(a(35),function(){return r.a.createElement("div",{className:"profile-page"},r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,"Anton"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))}),E=a(20),h=a(1),b=(a(36),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",isLogged:"",error:""},e.onChangeField=function(t){e.setState(Object(E.a)({},t.target.name,t.target.value))},e.sendData=function(){var t=e.props.authInfo,a=e.state,n=a.username,r=a.password;t.username===n&&t.password===r?e.setState({isLogged:!0}):e.setState({error:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435 \u0432\u0435\u0440\u043d\u043e"})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.authInfo.isLogged.isLogged;this.setState({isLogged:e})}},{key:"render",value:function(){var e=this.state,t=e.isLogged,a=e.error;return t?r.a.createElement(h.a,{to:"/profile"}):r.a.createElement("div",{className:"auth-page"},r.a.createElement("div",{className:"container page"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},r.a.createElement("h1",{className:"text-xs-center"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("div",{className:"error"},a),r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("fieldset",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-control form-control-lg",name:"username",placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",type:"text",onChange:this.onChangeField})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{className:"form-control form-control-lg",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",onChange:this.onChangeField})),r.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",onClick:this.sendData},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))))))}}]),a}(n.Component)),N=(a(37),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isLogged:localStorage.getItem("isLogged"),username:localStorage.getItem("username"),password:localStorage.getItem("password")},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){localStorage.setItem("isLogged","false"),localStorage.setItem("username","admin"),localStorage.setItem("password","12345")}},{key:"render",value:function(){var e=this,t=this.state.isLogged;return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(d,{isLogged:t}),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",render:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"\u0414\u043e\u0431\u0440\u043e \u041f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"))},exact:!0}),r.a.createElement(h.b,{path:"/news",component:v,exact:!0}),r.a.createElement(h.b,{path:"/login",render:function(){return r.a.createElement(b,{authInfo:e.state})},exact:!0}),r.a.createElement(h.b,{path:"/profile",component:g,exact:!0}),r.a.createElement(h.b,{render:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430!"))}})),r.a.createElement(p,null)))}}]),a}(n.Component));c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.8ba1664c.chunk.js.map