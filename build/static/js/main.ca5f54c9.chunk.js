(this["webpackJsonpfrontend-kesesa"]=this["webpackJsonpfrontend-kesesa"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(18),i=n.n(s),r=(n(45),n(4)),o=n(6),l=n(7),j=n.n(l),d=n(25),u=n(12),b=n(5),m=n(14),h=(n(58),n(16)),p=n.n(h),O=n(0);var x=function(e){var t=e.url,n=e.id,c=e.handleDelete,a=e.name;return m.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(m.c.version,"/pdf.worker.js"),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"name-document",children:a}),Object(O.jsx)(b.b,{to:"/document/".concat(n),children:Object(O.jsx)(m.a,{file:t,noData:Object(O.jsx)("div",{style:{float:"left",marginLeft:"50%",marginTop:"10%"}}),children:Object(O.jsx)(m.b,{pageNumber:1,style:{width:"300px"}})})})]}),Object(O.jsx)("button",{onClick:c,className:"btn-delete","data-id":n,children:"Eliminar"})]})},v=(n(66),"https://backend-kesesa.herokuapp.com");function f(){return(f=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(v,"/documents/getDocuments"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(v,"/documents/getDocument"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(v,"/documents/deleteDocument/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(e){var t=e.documentAdded,n=e.isLoading,a=Object(c.useState)(!1),s=Object(r.a)(a,2),i=s[0],l=s[1],j=Object(c.useState)([]),d=Object(r.a)(j,2),u=d[0],b=d[1],m=Object(o.g)().travelId;function h(e){var t=e.target.getAttribute("data-id");p()("\xbfEst\xe1s seguro que quieres eliminar el documento?",{buttons:["Cancelar","S\xed, eliminar"]}).then((function(e){e&&function(e){return N.apply(this,arguments)}(t).then((function(e){p()("Eliminaste el documento \ud83d\udcc3.",{icon:"success"}).then((function(e){l(!0)}))})).catch((function(e){p()("No se pudo elimiar el documento.",{icon:"error"})}))}))}return Object(c.useEffect)((function(){(function(e){return f.apply(this,arguments)})({travelId:m}).then((function(e){return e.json()})).then((function(e){b(e),l(!1)})).catch((function(e){return console.log(e)}))}),[m,t,n,i]),u.length>0?Object(O.jsx)("div",{className:"DocumentList",children:null===u||void 0===u?void 0:u.map((function(e){return Object(O.jsx)(x,{url:e.url,id:e._id,handleDelete:h,name:e.name},e._id)}))}):Object(O.jsx)("h3",{children:"A\xfan no tienes documentos. !Agrega uno!"})};n(67);var k=function(e){var t=e.addDocument,n=e.handleName,c=e.handleFile,a=e.value;return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{className:"form-document",action:"",onSubmit:t,children:[Object(O.jsx)("label",{className:"label-name-document",htmlFor:"document-name",children:"Ingrese el nombre del documento"}),Object(O.jsx)("input",{className:"input-name-document",id:"document-name",type:"text",name:"document-name",onChange:n,value:a}),Object(O.jsx)("input",{className:" ",id:"file",type:"file",name:"file",onChange:c}),Object(O.jsx)("button",{className:"btn-save-document",children:"Guardar documento"})]})})};n(68);var y=function(){return Object(O.jsxs)("div",{className:"sk-chase",children:[Object(O.jsx)("div",{className:"sk-chase-dot"}),Object(O.jsx)("div",{className:"sk-chase-dot"}),Object(O.jsx)("div",{className:"sk-chase-dot"}),Object(O.jsx)("div",{className:"sk-chase-dot"}),Object(O.jsx)("div",{className:"sk-chase-dot"}),Object(O.jsx)("div",{className:"sk-chase-dot"})]})};n(69);var w=function(e){var t=e.content,n=e.type,c=e.showMessage;return Object(O.jsx)("div",{className:n,children:c?Object(O.jsx)("p",{children:t}):null})},S=a.a.createContext(),C=n(40),I=n.n(C);n(88);n(89);var D=function(e){var t=e.contryname,n=Object(c.useState)({}),a=Object(r.a)(n,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){var e;(e=t,fetch("https://travelbriefing.org/".concat(e,"?format=json")).then((function(e){return e.json()})).then((function(e){return e}))).then((function(e){return i(e)})).catch((function(e){return console.log(e)}))}),[t]),Object(O.jsx)("div",{className:"containerInfo",children:Object(O.jsxs)("div",{className:"titleContainer",children:[Object(O.jsx)("h2",{children:"Informaci\xf3n del pa\xeds de destino"}),Object(O.jsx)("form",{action:"",children:Object(O.jsx)("div",{className:"info",children:0!==Object.keys(s).length?Object(O.jsxs)("div",{className:"info-ps",children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Nombre completo:"}),s.names.full," "]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Continente:"})," ",s.names.continent," "]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Moneda:"})," ",s.currency.name," "]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Lenguaje: "}),s.language[0].language," "]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Tel\xe9fonos importantes:"})," "]}),Object(O.jsxs)("p",{className:"numberPhones",children:[Object(O.jsx)("b",{children:"Ambulancia"})," --- ",s.telephone.ambulance]}),Object(O.jsxs)("p",{className:"numberPhones",children:[Object(O.jsx)("b",{children:"Policia"})," --- ",s.telephone.police]}),Object(O.jsxs)("p",{className:"numberPhones",children:[Object(O.jsx)("b",{children:"C\xf3digo de llamada "}),"--- ",s.telephone.calling_code]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Zona horaria:"})," ",s.timezone.name]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Agua: "}),s.water.short]}),Object(O.jsx)("p",{children:Object(O.jsx)("b",{children:"Electr\xedcidad: "})}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Frecuencia:"}),s.electricity.frequency]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Tipos de entrada:"}),s.electricity.plugs.map((function(e,t){return Object(O.jsx)("span",{children:e},t)}))]})]}):null})})]})})};var E=function(){var e=Object(c.useContext)(S).user.user,t=Object(o.g)(),n=t.travelId,a=t.contryname,s=Object(c.useState)(""),i=Object(r.a)(s,2),l=i[0],b=i[1],m=Object(c.useState)(null),h=Object(r.a)(m,2),p=h[0],x=h[1],v=Object(c.useState)(!1),f=Object(r.a)(v,2),g=f[0],N=f[1],C=Object(c.useState)(!1),E=Object(r.a)(C,2),T=E[0],B=E[1],q=Object(c.useState)({show:!1,type:"",content:""}),M=Object(r.a)(q,2),J=M[0],P=M[1],L=function(){var t=Object(u.a)(j.a.mark((function t(c){var a,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),p){t.next=5;break}return P({show:!0,type:"error",content:"No seleccionaste ning\xfan archivo."}),setTimeout((function(){P(Object(d.a)({show:!1},J))}),3e3),t.abrupt("return");case 5:if(a=e._id,(s=new FormData).append("file",p),s.append("name",l),s.append("userId",a),s.append("travelId",n),!(l.length>0&&"application/pdf"===p.type)){t.next=28;break}return t.prev=12,B(!0),N(!0),t.next=17,i=s,I.a.post("".concat("https://backend-kesesa.herokuapp.com","/documents/add"),i,{headers:{"content-type":"multipart/form-data"}});case 17:B(!1),N(!1),b(""),P({show:!0,type:"success",content:"Documento agregado correctamente."}),t.next=26;break;case 23:t.prev=23,t.t0=t.catch(12),P({show:!0,type:"error",content:"No se pudo agregar el documento"});case 26:t.next=29;break;case 28:"application/pdf"!==p.type?P({show:!0,type:"error",content:"Formato de documento invalido. Solo .PDF"}):P({show:!0,type:"error",content:"Ingresa un nombre para el documento"});case 29:setTimeout((function(){P(Object(d.a)({show:!1},J))}),3e3);case 30:case"end":return t.stop()}var i}),t,null,[[12,23]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"Documents",children:[Object(O.jsxs)("section",{className:"add-document-section",children:[Object(O.jsx)(k,{addDocument:L,handleFile:function(e){x(e.target.files[0])},handleName:function(e){b(e.target.value)},value:l}),T?Object(O.jsx)(y,{}):null,Object(O.jsx)(w,{showMessage:J.show,content:J.content,type:J.type}),Object(O.jsx)(D,{contryname:a})]}),Object(O.jsx)("section",{className:"documents-list-section",children:Object(O.jsx)(A,{isLoading:T,documentAdded:g})})]})},T=(n(90),n.p+"static/media/masViajes.d0048a74.jpg"),B=n.p+"static/media/google_icon.817fc47e.png";n(91);var q=function(e){var t=e.text,n=e.typeBtn,c=e.typeIcon;return Object(O.jsx)("div",{children:Object(O.jsxs)("button",{className:"".concat(n," btn btn-google"),onClick:function(){window.open("https://backend-kesesa.herokuapp.com/auth/google","_self")},children:[Object(O.jsx)("img",{className:c,src:B,alt:"google-icon"}),t]})})},M=n.p+"static/media/home.0baf1e19.jpg";var J=function(){var e=Object(c.useContext)(S).user.authenticated;return console.log(e),Object(O.jsxs)("div",{className:"home-container",children:[Object(O.jsxs)("div",{className:"home-container-left",children:[Object(O.jsx)("p",{children:"Haz tus viajes m\xe1s sencillos"}),Object(O.jsxs)("h1",{children:["\xa1Organiza tus ",Object(O.jsx)("span",{children:"documentos"})," en un solo lugar!"]}),Object(O.jsx)("h3",{children:"Dedica tiempo al viaje y no pierdas tus documentos."}),Object(O.jsxs)("div",{className:"home-container-btn",children:[e?null:Object(O.jsx)(q,{text:"Empieza con Google.",typeBtn:"btn-home",typeIcon:"btn-icon "}),Object(O.jsx)(b.b,{to:"/about",className:"btn-right",children:"Conocenos"})]}),Object(O.jsxs)("div",{className:"destination-container",children:[Object(O.jsx)(b.b,{to:"#",children:Object(O.jsx)("img",{src:T,alt:"Travels"})}),Object(O.jsxs)("div",{className:"destination-container-text",children:[Object(O.jsx)("h4",{children:"Informaci\xf3n de viajes"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"Conoce los consejos m\xe1s importantes para realizar un viaje sin percances"})]})]})]}),Object(O.jsx)("div",{className:"home-container-right",children:Object(O.jsx)("img",{src:M,alt:"ImgTravel.jpg"})})]})};n(92);var P=function(){m.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(m.c.version,"/pdf.worker.js");var e=Object(c.useState)({}),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(o.f)(),i=Object(o.g)().id;return Object(c.useEffect)((function(){(function(e){return g.apply(this,arguments)})(i).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}),[i]),Object(O.jsxs)("div",{className:"full-document",children:[Object(O.jsx)("button",{className:"back",onClick:function(){return s.goBack()},children:"Volver"}),Object(O.jsx)(m.a,{file:n.url,noData:Object(O.jsx)("div",{style:{float:"left",marginLeft:"50%",marginTop:"10%"}}),children:Object(O.jsx)(m.b,{pageNumber:1,style:{width:"1000px"}})})]})},L=(n(93),n.p+"static/media/lopez.20147069.jpg"),R=n.p+"static/media/kevin.6f4b3047.jpg",U=n.p+"static/media/sebas.b79f3221.jpg",_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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";var Y=function(){return Object(O.jsxs)("div",{className:"about__container",children:[Object(O.jsx)("div",{className:"about__container-title",children:Object(O.jsx)("h2",{children:"About"})}),Object(O.jsxs)("p",{className:"about__container-p",children:["Este aplicaci\xf3n fue realizada con fines acad\xe9micos para el proyecto integrador 1 de la carrera de ingenier\xeda de sistemas en la universidad de Antioquia. Se desarroll\xf3 en un lapso de 6 meses, por; Santiago L\xf3pez Quiceno, Sebasti\xe1n Gallego Pulgar\xedn y Kevin Alonso Restrepo Garc\xeda.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Para su desarrollo se utilizaron tecnolog\xedas y herramientas como; React, Node.Js, Mongo DB, Git, entre otras.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Agradecemos al profesor Carlos Mauricio Duque por el acompa\xf1amiento durante todo el proceso del proyecto."]}),Object(O.jsxs)("div",{className:"about__container-team",children:[Object(O.jsx)("div",{className:"about__container-title",children:Object(O.jsx)("h2",{children:"Nosotros"})}),Object(O.jsxs)("div",{className:"team__flex-container",children:[Object(O.jsxs)("div",{className:"about__card-team",children:[Object(O.jsx)("div",{className:"about__card-team-img-container",children:Object(O.jsx)("img",{src:L,alt:""})}),Object(O.jsxs)("div",{className:"about__card-team-detail",children:[Object(O.jsx)("p",{children:"Santiago L\xf3pez"}),Object(O.jsx)("a",{href:"https://github.com/slqpez",target:"_blank",children:Object(O.jsx)("img",{src:_,alt:""})})]})]}),Object(O.jsxs)("div",{className:"about__card-team",children:[Object(O.jsx)("div",{className:"about__card-team-img-container",children:Object(O.jsx)("img",{src:R,alt:""})}),Object(O.jsxs)("div",{className:"about__card-team-detail",children:[Object(O.jsx)("p",{children:"Kevin Restrepo"}),Object(O.jsx)("a",{href:"https://github.com/kevinrg27",target:"_blank",children:Object(O.jsx)("img",{src:_,alt:""})})]})]}),Object(O.jsxs)("div",{className:"about__card-team",children:[Object(O.jsx)("div",{className:"about__card-team-img-container",children:Object(O.jsx)("img",{src:U,alt:""})}),Object(O.jsxs)("div",{className:"about__card-team-detail",children:[Object(O.jsx)("p",{children:"Sebastian Gallego"}),Object(O.jsx)("a",{href:"https://github.com/sebasgp",target:"_blank",children:Object(O.jsx)("img",{src:_,alt:""})})]})]})]})]})]})},G="https://backend-kesesa.herokuapp.com/travels";function Q(e){return z.apply(this,arguments)}function z(){return(z=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(G,"/addTravel"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(G,"/getTravels"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:t})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(G,"/deleteTravel/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(94);var F=n.p+"static/media/flag.8d55e1f7.png";var Z=function(e){var t=e.name,n=e.id,a=e.handleDelete,s=Object(c.useState)(!0),i=Object(r.a)(s,2),o=(i[0],i[1],{backgroundImage:"url(".concat(F,")"),backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",width:"100px",height:"100px"});return Object(O.jsxs)("div",{className:"bubble-countrie",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("h4",{className:"countrie-name",children:t}),Object(O.jsx)(b.b,{className:"travel-item",to:"/documents/".concat(n,"/").concat(t),style:o})]}),Object(O.jsx)("button",{className:"btn-delete-travel","data-id":n,onClick:a,children:"Eliminar"})]})};n(95);var H=function(e){var t=e.travelAdded,n=e.userId,a=Object(c.useState)([]),s=Object(r.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(!1),j=Object(r.a)(l,2),d=j[0],u=j[1];function b(e){var t=e.target.getAttribute("data-id");p()("\xbfEst\xe1s seguro que quieres eliminar el Viaje?",{buttons:["Cancelar","S\xed, eliminar"]}).then((function(e){e&&function(e){return W.apply(this,arguments)}(t).then((function(e){p()("Eliminaste el viaje \ud83d\ude89.",{icon:"success"}).then((function(e){u(!0)}))})).catch((function(e){p()("No se pudo elimiar el viaje.",{icon:"error"})}))}))}return Object(c.useEffect)((function(){(function(e){return V.apply(this,arguments)})(n).then((function(e){return e.json()})).then((function(e){o(e),u(!1)}))}),[t,n,d]),i.length>0?Object(O.jsx)("div",{children:Object(O.jsx)("ul",{className:"travels-list",children:null===i||void 0===i?void 0:i.map((function(e){return Object(O.jsx)(Z,{name:e.name,id:e._id,handleDelete:b},e._id)}))})}):Object(O.jsx)("h2",{children:"A\xfan no tienes viajes. !Agrega uno!"})},X=(n(96),n(26));n(97);var K=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(r.a)(s,2),o=i[0],l=i[1],d=Object(c.useContext)(S).user.user._id,b={name:n,userId:d},m=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(!0),t.preventDefault(),!n){e.next=14;break}return e.prev=3,e.next=6,Q(b);case 6:l(!1),a(""),l(!o),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:X.b.error("Ingrese un lugar de destino!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"custom-id-yes"});case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"travels-body",children:[Object(O.jsx)(X.a,{}),Object(O.jsx)("h2",{children:"Mis viajes"}),Object(O.jsxs)("div",{className:"travels-content",children:[Object(O.jsxs)("aside",{className:"travels-aside",children:[Object(O.jsx)("div",{className:"travelsList"}),Object(O.jsxs)("div",{className:"travelContainer",children:[Object(O.jsx)("h3",{children:"Crea un nuevo viaje"}),Object(O.jsxs)("form",{action:"POST",onSubmit:m,children:[Object(O.jsx)("label",{htmlFor:"placeName",children:"Nombre del sitio:"}),Object(O.jsx)("input",{type:"text",id:"placeName",onChange:function(e){a(e.target.value)},placeholder:"Nombre",value:n}),Object(O.jsx)("button",{children:"Crear"})]})]})]}),Object(O.jsx)(H,{travelAdded:o,userId:d})]})]})},$=(n(98),n(99),n.p+"static/media/tip-backPack.6f5a0431.jpg");var ee=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"title__container",children:Object(O.jsx)("h3",{children:"Atenci\xf3n con la maleta"})}),Object(O.jsxs)("div",{className:"backPackInfo__container",children:[Object(O.jsx)("img",{src:$,alt:"backPack.jpg"}),Object(O.jsxs)("p",{children:["Se trata de un consejo b\xe1sico, aunque solemos pasar de \xe9l: no viajes con exceso de equipaje. Mete en la maleta aquello que consideres necesario, pero olv\xeddate de acarrear art\xedculos que posiblemente ni siquiera utilizar\xe1s. Una vez all\xe1s identificado lo necesario para el viaje, asegurate de poner un distintivo a tu maleta, ya que lo m\xe1s probable es que te encuentres con maletas identicas a la tuya en la cintas transportadoras. ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Tambien ser\xe1 muy importante que investigues previamente con tu aerolinea seleccionada cual es la cantidad en peso del equipaje que cubre tu tickete de avi\xf3n \xf3 si quiz\xe1 presente un costo adicional. Este mismo metodo deber\xedas aplicarlo si piensas llevar equipaje de mano, ya que muchas aerolineas cuentan con ciertos topes permitidos"]})]})]})},te=(n(100),n.p+"static/media/tip-passport.3dd0f884.jpg");var ne=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"title__container",children:Object(O.jsx)("h3",{children:"Cuidado con el pasaporte"})}),Object(O.jsxs)("div",{className:"passportCare__container",children:[Object(O.jsx)("img",{src:te,alt:"passport.jpg"}),Object(O.jsxs)("p",{children:["Aseg\xfarate con tiempo de que tienes la documentaci\xf3n en regla. Por ejemplo, que tu pasaporte tiene una validez suficiente. En muchos pa\xedses exigen que su vigencia sea superior a los seis meses, algo que podr\xeda suponer un contratiempo importante a la hora de renovarlo si es un momento del a\xf1o con alta demanda.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})]})]})},ce=(n(101),n.p+"static/media/tip-neededVisa.5496d436.png");var ae=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"title__container",children:Object(O.jsx)("h3",{children:"Verificar si necesitas Visado"})}),Object(O.jsxs)("div",{className:"neededVisa__container",children:[Object(O.jsx)("img",{src:ce,alt:""}),Object(O.jsxs)("p",{children:["Aunque hayas viajado con anterioridad a tu destino, comprueba si es preciso disponer de un visado, ya que podr\xeda haber modificado su pol\xedtica de inmigraci\xf3n. Hazlo con tiempo. Mientras que en algunos pa\xedses permiten solicitar la visa telem\xe1ticamente, en otros obligan a hacerlo de forma presencial en consulados o embajadas, y los tr\xe1mites pueden prolongarse durante semanas. ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Es importante tener en cuenta cualquier detalle. Pa\xedses como China, por ejemplo, son especialmente exigentes con los requisitos de la fotograf\xeda del visado, que deben ser cumplidos escrupulosamente.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})]})]})},se=(n(102),n.p+"static/media/tip-diseases.5010197a.jpg");var ie=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"title__container",children:Object(O.jsx)("h3",{children:"Enfermedades en el extranjero"})}),Object(O.jsxs)("div",{className:"travelDiseases__container",children:[Object(O.jsx)("img",{src:se,alt:""}),Object(O.jsxs)("p",{children:["No te arriesgues a viajar si est\xe1s enfermo o si padeces alguna enfermedad que no podr\xe1 ser controlada correctamente en el exterior. En cualquier caso, inf\xf3rmate previamente del sistema sanitario del destino y de d\xf3nde podr\xe1s dirigirte en caso de necesidad. ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Si dispones de un seguro de salud, cerci\xf3rate de que cubra los gastos en el pa\xeds y en caso afirmativo qu\xe9 tipo de incidencias. Lee la letra peque\xf1a, puedes llevarte m\xe1s de un sobresalto. Y es que, en muchos pa\xedses, la sanidad es cara y en otros, deficiente. Un seguro que cubra con todas las garant\xedas, adem\xe1s de salvarte el viaje, puede salvar tu econom\xeda."]})]})]})};var re=function(e){var t=e.number,n=t||"1";return"1"===n?Object(O.jsx)(ee,{}):"2"===n?Object(O.jsx)(ne,{}):"3"===n?Object(O.jsx)(ae,{}):"4"===n?Object(O.jsx)(ie,{}):void 0},oe=n.p+"static/media/travel-tips-menu.a7b99885.svg";var le=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1];function s(e){a(e.target.id),d()}var i=Object(c.useState)(""),o=Object(r.a)(i,2),l=o[0],j=o[1];function d(){j("")}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"tips-container",children:[Object(O.jsx)("button",{className:"aside__tip-list-btn",onClick:function(){"showTip"!==l?j("showTip"):d()},children:Object(O.jsx)("img",{src:oe,alt:"Abrir tips Menu"})}),Object(O.jsxs)("aside",{className:"aside__tip-list ".concat(l),children:[Object(O.jsx)("div",{className:"title_tips-list-mobile-conteiner",children:Object(O.jsx)("h2",{className:"title__tip-list-mobile",children:"Conoce algunos tips: "})}),Object(O.jsxs)("ul",{className:"aside__tip-list-ul",children:[Object(O.jsx)("li",{onClick:s,id:"1",name:"1",children:"Atenci\xf3n con la maleta"}),Object(O.jsx)("li",{onClick:s,id:"2",name:"2",children:"Cuidado con el pasaporte"}),Object(O.jsx)("li",{onClick:s,id:"3",name:"3",children:"Verifica si necesitas visado"}),Object(O.jsx)("li",{onClick:s,id:"4",name:"4",children:"Enfermedades en el extranjero"})]})]}),Object(O.jsx)("div",{className:"tip-detailed",children:Object(O.jsx)(re,{number:n})})]}),Object(O.jsxs)("div",{className:"travelTips-ref",children:[Object(O.jsx)("b",{children:"Informaci\xf3n tomada de"}),": https://www.lavanguardia.com/ocio/viajes/20191202/471928081941/consejos-antes-viajar-extranjero.html"]})]})};function je(){var e=Object(c.useContext)(S),t=e.user,n=e.user.authenticated;return console.log(t),Object(O.jsx)("div",{children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",children:Object(O.jsx)(J,{})}),Object(O.jsx)(o.a,{exact:!0,path:"/travels",children:n?Object(O.jsx)(K,{}):Object(O.jsx)(J,{})}),Object(O.jsx)(o.a,{exact:!0,path:"/documents/:travelId/:contryname",children:n?Object(O.jsx)(E,{}):Object(O.jsx)(J,{})}),Object(O.jsx)(o.a,{exact:!0,path:"/about",children:Object(O.jsx)(Y,{})}),Object(O.jsx)(o.a,{exact:!0,path:"/travelTips",children:Object(O.jsx)(le,{})}),Object(O.jsx)(o.a,{exact:!0,path:"/infoCountries",children:n?Object(O.jsx)(D,{}):Object(O.jsx)(J,{})}),Object(O.jsx)(o.a,{exact:!0,path:"/document/:id",children:n?Object(O.jsx)(P,{}):Object(O.jsx)(J,{})})]})})}n(103);var de=n.p+"static/media/hamburger-icon.38a42dd0.svg",ue=n.p+"static/media/cerrar.99769859.svg",be=function(){var e=Object(c.useContext)(S).user,t=e.authenticated,n=e.user;function a(){window.open("https://backend-kesesa.herokuapp.com/auth/logout","_self"),localStorage.clear()}var s=Object(c.useState)(""),i=Object(r.a)(s,2),o=i[0],l=i[1];function j(){l("show")}function d(){l("")}return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("nav",{className:"nav-bar",children:t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"userInfo",children:[Object(O.jsx)("img",{className:"profile-picture",src:null===n||void 0===n?void 0:n.profileImage,alt:"profile"}),Object(O.jsx)("span",{children:null===n||void 0===n?void 0:n.name})]}),Object(O.jsxs)("div",{className:"nav-list-container",children:[Object(O.jsx)("button",{className:"btn-open-menu",onClick:j,children:Object(O.jsx)("img",{src:de,alt:"Abrir Menu"})}),Object(O.jsxs)("ul",{className:"nav-list ".concat(o),children:[Object(O.jsx)("button",{className:"btn-close-menu",onClick:d,children:Object(O.jsx)("img",{src:ue,alt:"Cerrar Menu"})}),Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{to:"/",onClick:d,children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{to:"/travels",onClick:d,children:"Mis viajes"})}),Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{to:"/about",onClick:d,children:"Acerca de"})}),Object(O.jsx)("li",{className:"last-child",children:Object(O.jsx)(b.b,{to:"/travelTips",onClick:d,children:"Tips de viaje"})}),Object(O.jsx)("li",{className:"btn-header-salir-responsive",children:Object(O.jsx)("div",{className:"btn-container",children:Object(O.jsx)("button",{className:"btn-logout",onClick:a,children:"Salir"})})})]})]}),Object(O.jsx)("div",{className:"btn-container btn-header-salir",children:Object(O.jsx)("button",{className:"btn-logout",onClick:a,children:"Salir"})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"logo-container",children:Object(O.jsx)("a",{href:"/",children:"Kesesa S.A"})}),Object(O.jsxs)("div",{className:"nav-list-container",children:[Object(O.jsx)("button",{className:"btn-open-menu",onClick:j,children:Object(O.jsx)("img",{src:de,alt:"Abrir Menu"})}),Object(O.jsxs)("ul",{className:"nav-list ".concat(o),children:[Object(O.jsx)("button",{className:"btn-close-menu",onClick:d,children:Object(O.jsx)("img",{src:ue,alt:"Cerrar Menu"})}),Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{to:"/",onClick:d,children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{to:"/about",onClick:d,children:"Acerca de"})}),Object(O.jsx)("li",{className:"last-child",children:Object(O.jsx)(b.b,{to:"/travelTips",onClick:d,children:"Tips de Viaje"})}),Object(O.jsx)("li",{className:"btn-header-google-responsive",children:Object(O.jsx)("div",{className:"btn-container",children:Object(O.jsx)(q,{text:"Ingresar",typeBtn:"nav-btn",typeIcon:"nav-icon"})})})]})]}),Object(O.jsx)("div",{className:"btn-container btn-header-google",children:Object(O.jsx)(q,{text:"Ingresar",typeBtn:"nav-btn",typeIcon:"nav-icon"})})]})})})};n(104);var me=function(){var e=Object(c.useState)({user:{},authenticated:!1}),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(o.f)();return Object(c.useEffect)((function(){if(Boolean(localStorage.getItem("authenticated"))){var e=JSON.parse(localStorage.getItem("user"));a({user:e,authenticated:!0})}else fetch("".concat("https://backend-kesesa.herokuapp.com","/auth/login/success"),{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0}}).then((function(e){if(200===e.status)return e.json();throw new Error("failed to authenticate user")})).then((function(e){return e})).catch((function(e){console.log(e)})).then((function(e){a({user:e.user[0],authenticated:!0}),localStorage.setItem("user",JSON.stringify(e.user[0])),localStorage.setItem("authenticated","true"),s.push("/travels")})).catch((function(e){return s.push("/")}))}),[a,s]),Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(S.Provider,{value:{user:n,setUser:a},children:[Object(O.jsx)(be,{}),Object(O.jsx)(je,{})]})})};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(b.a,{children:Object(O.jsx)(me,{})})}),document.getElementById("root"))},27:function(e,t){},45:function(e,t,n){},51:function(e,t){},52:function(e,t){},53:function(e,t){},54:function(e,t){},55:function(e,t){},58:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.ca5f54c9.chunk.js.map