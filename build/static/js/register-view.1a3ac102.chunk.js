(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{89:function(e,a,t){"use strict";t.r(a);var n=t(3),s=t(38),i=t(39),l=t(41),c=t(40),r=t(0),h=t(13),o=t(20),b=t(1),j=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(s.a)(this,t);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={name:"",email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,i=t.value;e.setState(Object(n.a)({},s,i))},e.handleSubmit=function(a){a.preventDefault(),e.props.onSignup(e.state),e.setState({name:"",email:"",password:""})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.password;return Object(b.jsx)("section",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Registration"})}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:"Form",children:[Object(b.jsxs)("label",{className:"Label",children:["Name",Object(b.jsx)("input",{type:"text",name:"name",value:a,onChange:this.handleChange})]}),Object(b.jsxs)("label",{className:"Label",children:["Email",Object(b.jsx)("input",{type:"email",name:"email",value:t,onChange:this.handleChange})]}),Object(b.jsxs)("label",{className:"Label",children:["Password",Object(b.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange})]}),Object(b.jsx)("button",{type:"submit",children:"Submit"})]})]})})}}]),t}(r.Component),u={onSignup:o.f};a.default=Object(h.b)(null,u)(j)}}]);
//# sourceMappingURL=register-view.1a3ac102.chunk.js.map