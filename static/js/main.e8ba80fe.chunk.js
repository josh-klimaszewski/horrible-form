(this["webpackJsonphorrible-form"]=this["webpackJsonphorrible-form"]||[]).push([[0],{136:function(e,r,n){},140:function(e,r,n){},246:function(e,r,n){"use strict";n.r(r);var t=n(0),a=(n(136),n(10)),c=n.n(a),i=n(287),o=n(286),s=(n(140),n(285)),u=n(248),l=n(281),d=n(280),j=n(282),b=n(284),f=n(289),m=n(21),h=n(71),p=n(34),O=n(128),x=n(288),v=n(6),g=function(e){var r=e.form,n=r.handleChange,t=r.handleBlur,a=r.errors,c=r.touched,i=e.field,o=i.name,s=i.value,u=Object(O.a)(e,["form","field"]),l=Object(m.c)(a,o),d=Object(m.c)(c,o);return Object(v.jsx)(x.a,Object(p.a)({variant:"outlined",error:!!l&&d,fullWidth:!0,name:o,onChange:function(e){n(e)},onBlur:function(e){t(e)},value:s},u))},y=n(33);var w=function(){var e=Object(m.d)(),r=null===e||void 0===e?void 0:e.values,n=null===e||void 0===e?void 0:e.errors,a=function(e){var r=Object(t.useRef)();return Object(t.useEffect)((function(){r.current=e}),[e]),r.current}(n),c=Object(t.useState)([]),i=Object(y.a)(c,2),o=i[0],s=i[1];return Object(t.useEffect)((function(){if(n!==a)if((null===n||void 0===n?void 0:n.password)!==(null===a||void 0===a?void 0:a.password)&&o.some((function(e){return"password"===e.name}))&&r&&!r.password)s((function(e){return e.filter((function(e){return"password"!==e.name||e.error.includes("required")})).map((function(e){return e.error.includes("required")?Object(p.a)(Object(p.a)({},e),{},{clean:!1}):e}))}));else{var e=Object.entries(n),t=o.map((function(r){var n=!0;return e.forEach((function(e){e[0]===r.name&&e[1]===r.error&&(n=!1)})),Object(p.a)(Object(p.a)({},r),{},{clean:n})}));e.forEach((function(e){!n||t.some((function(r){return r.name===e[0]&&r.error===e[1]}))||t.push({name:e[0],error:e[1],clean:!1})})),s(t)}}),[n,o,a,r]),o},E=n(283),W=n(69),q=n(70),C=n(125),B=n.n(C),N=n(126),S=n.n(N),k=Object(l.a)((function(e){return{errorContainer:{paddingTop:e.spacing(7)},dirtyError:{color:W.a[400],fontWeight:e.typography.fontWeightBold},cleanError:{color:q.a[400],fontWeight:e.typography.fontWeightBold,opacity:.5},icon:{paddingTop:e.spacing(1.5),fontWeight:e.typography.fontWeightBold}}})),H=function(){var e=k(),r=e.errorContainer,n=e.dirtyError,t=e.cleanError,a=e.icon,c=w();return Object(v.jsx)(j.a,{container:!0,spacing:3,classes:{root:r},children:c.map((function(e,r){var c=e.error,i=e.clean;return Object(v.jsx)(E.a,{in:!0,direction:"left",mountOnEnter:!0,unmountOnExit:!0,children:Object(v.jsx)(j.a,{item:!0,xs:12,children:Object(v.jsxs)(b.a,{variant:"subtitle1",classes:{root:i?t:n},children:[Object(v.jsx)("span",{children:i?Object(v.jsx)(B.a,{className:a}):Object(v.jsx)(S.a,{className:a})}),c]})})},r)}))})},A=Object(l.a)((function(e){return{paper:{minHeight:500,width:"100%",padding:e.spacing(3)}}})),F=h.a().shape({name:h.b().required("Name is required"),password:h.b().required("Password is required").matches(/(?=.*?[A-Z])/,"Must contain an uppercase letter").matches(/(?=.*?[a-z])/,"Must contain a lowercase letter")}),J=function(){var e=A().paper;return w(),Object(v.jsx)(m.b,{validationSchema:F,initialValues:{name:"",password:""},onSubmit:function(){return alert("you did it!")},children:function(r){var n=r.submitForm;return Object(v.jsx)(d.a,{classes:{root:e},children:Object(v.jsxs)(j.a,{container:!0,spacing:3,children:[Object(v.jsx)(j.a,{item:!0,xs:12,md:6,children:Object(v.jsxs)(j.a,{container:!0,spacing:3,children:[Object(v.jsx)(j.a,{item:!0,xs:12,children:Object(v.jsx)(b.a,{variant:"h4",children:"Horrible Form"})}),Object(v.jsx)(j.a,{item:!0,xs:12,children:Object(v.jsx)(m.a,{name:"name",label:"Name",component:g})}),Object(v.jsx)(j.a,{item:!0,xs:12,children:Object(v.jsx)(m.a,{name:"password",label:"Password",component:g})}),Object(v.jsx)(j.a,{item:!0,xs:12,children:Object(v.jsx)(f.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:n,children:"Submit"})})]})}),Object(v.jsx)(j.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(H,{})})]})})}})},M=Object(u.a)((function(e){return{container:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}})),P=function(){var e=M().container;return Object(v.jsx)(s.a,{className:e,children:Object(v.jsx)(J,{})})},T=n(127),z=Object(T.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:W.a.A400},background:{default:"#fff"}}});c.a.render(Object(v.jsxs)(o.a,{theme:z,children:[Object(v.jsx)(i.a,{}),Object(v.jsx)(P,{})]}),document.querySelector("#root"))}},[[246,1,2]]]);
//# sourceMappingURL=main.e8ba80fe.chunk.js.map