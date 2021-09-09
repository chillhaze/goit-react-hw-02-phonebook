(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={container:"Filter_container__2hcyU",input:"Filter_input__1y7UQ"}},25:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),r=n(15),s=n.n(r),i=(n(25),n(19)),o=n(14),l=n(7),u=n(8),m=n(11),b=n(10),d=n(28),j=n(5),h=n.n(j),p=n(18),f=n(9),_=n(6),O=n(4),x=n.n(O),C=n(1),v=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(d.a)(),t.numberInputId=Object(d.a)(),t.handleFormChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(_.a)({},a,c))},t.handleOnSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.formReset()},t.formReset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(C.jsx)("div",{className:x.a.container,children:Object(C.jsxs)("form",{className:x.a.form,onSubmit:this.handleOnSubmit,children:[Object(C.jsxs)("label",{className:x.a.label,htmlFor:this.nameInputId,children:["Name",Object(C.jsx)("input",{type:"text",placeholder:"Mark Zuckerberg",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleFormChange,className:x.a.input,id:this.nameInputId})]}),Object(C.jsxs)("label",{className:x.a.label,htmlFor:this.numberInputId,children:["Number",Object(C.jsx)("input",{type:"tel",placeholder:"xxx-xx-xx",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleFormChange,className:x.a.input,id:this.numberInputId})]}),Object(C.jsx)("button",{type:"submit",className:x.a.btn,children:"Add contact"})]})})}}]),n}(a.Component),N=n(12),g=n.n(N),I=function(t){var e=t.value,n=t.onChange;return Object(C.jsxs)("div",{className:g.a.container,children:[Object(C.jsx)("h2",{className:g.a.title,children:"Search by name"}),Object(C.jsx)("input",{type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:n,className:g.a.input})]})},A=n(3),S=n.n(A),y=n(17),F=n(16),L=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteBtnPush;return Object(C.jsxs)("li",{className:S.a.listItem,children:[Object(C.jsxs)("p",{className:S.a.name,children:[Object(C.jsx)(f.a,{className:S.a.contactIcon}),n,":"]}),Object(C.jsxs)("p",{className:S.a.number,children:[Object(C.jsx)(F.a,{className:S.a.contactIcon}),a]}),Object(C.jsx)("button",{type:"button",className:S.a.btnDelete,onClick:function(){return c(e)},children:Object(C.jsx)(y.a,{})})]},e)},k=function(t){var e=t.contacts,n=t.onDeleteBtnPush;return Object(C.jsx)("div",{className:S.a.container,children:Object(C.jsx)("ul",{className:S.a.contactsList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(C.jsx)(L,{id:e,name:a,number:c,onDeleteBtnPush:n},e)}))})})},D=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){e=Object(o.a)(Object(o.a)({},e),{},{id:Object(d.a)()}),t.state.contacts.find((function(n){return n.name===e.name?alert("".concat(n.name+" is already in contacts")):t.setState({contacts:[].concat(Object(i.a)(t.state.contacts),[e])})}))},t.removeContactHandler=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getFilteredContacts();return Object(C.jsxs)("div",{className:h.a.container,children:[Object(C.jsxs)("h1",{className:h.a.title,children:["Phonebook ",Object(C.jsx)(p.a,{className:h.a.icon})]}),Object(C.jsx)(v,{contacts:e,onSubmit:this.formSubmitHandler}),Object(C.jsx)(I,{value:n,onChange:this.handleFilterChange}),Object(C.jsxs)("h2",{className:h.a.title,children:["Contacts",Object(C.jsx)(f.b,{className:h.a.icon})]}),Object(C.jsx)(k,{contacts:a,onDeleteBtnPush:this.removeContactHandler})]})}}]),n}(a.Component);s.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(D,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={container:"ContactList_container__2G1mD",contactsList:"ContactList_contactsList__b49M5",listItem:"ContactList_listItem__1N5O5",contactIcon:"ContactList_contactIcon__ublUj",number:"ContactList_number__2fKxD",btnDelete:"ContactList_btnDelete__XrSig"}},4:function(t,e,n){t.exports={container:"ContactForm_container__fP7hG",form:"ContactForm_form__32_jT",label:"ContactForm_label__3jE0V",input:"ContactForm_input__1vGSP",btn:"ContactForm_btn__2VLEx"}},5:function(t,e,n){t.exports={container:"App_container__1zniv",title:"App_title__TNAGL",icon:"App_icon__YUiAf"}}},[[27,1,2]]]);
//# sourceMappingURL=main.6705b7d4.chunk.js.map