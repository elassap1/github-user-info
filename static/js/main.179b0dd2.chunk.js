(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{45:function(n,e,t){},58:function(n,e,t){},64:function(n,e,t){},65:function(n,e,t){"use strict";t.r(e);var i,c,r,a,o,s,d,l,j,b,u,x,h,p,f,m,g=t(1),O=t.n(g),w=t(27),v=t.n(w),y=(t(45),t(10)),z=t(18),_=t(5),k=Object(g.createContext)(),S=t(3),C=t(4),F=t(2),I=Object(C.a)(z.b)(i||(i=Object(S.a)(["\n  border: 2px solid ",";\n  color: ",";\n  text-decoration: none;\n  background: ",";\n  width: ",";\n  height: ",";\n  font-size: ",";\n  border-radius: 5px;\n  transition: all ease-in-out .5s;\n  cursor: pointer;\n  text-align: center;\n  &:hover{\n    color: ",";\n    background : ",";\n    box-shadow: 0 0 10px ",";\n    transform: scale(1.3,1.1);\n  }\n  @media (max-width: 650px){\n    width: ",";\n    height: ",";\n  }\n"])),(function(n){return n.b_clr}),(function(n){return n.clr}),(function(n){return n.bg}),(function(n){return"".concat(n.size[0],"rem")}),(function(n){return"".concat(n.size[1],"rem")}),(function(n){return"".concat(.2*n.size[0],"rem")}),(function(n){return n.clr}),(function(n){return n.bg}),(function(n){return n.b_clr}),(function(n){return"".concat(.8*n.size[0],"rem")}),(function(n){return"".concat(.8*n.size[1],"rem")})),N=function(n){var e=n.clr,t=n.bg,i=n.b_clr,c=n.size,r=void 0===c?1:c,a=n.children,o=n.go,s=void 0===o?"":o,d=n.padding;return Object(F.jsx)(I,{to:s,clr:e,bg:t,b_clr:i,size:r,padding:d,children:a})},R=C.a.div(c||(c=Object(S.a)(["\n  max-width: 100vw;\n  height: 100vh;\n  background: #E91E63;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  >*{margin:25px}\n"]))),E=C.a.h1(r||(r=Object(S.a)(["\n  font-size: 4rem;\n"]))),A=C.a.h1(a||(a=Object(S.a)(["\n  font-size: 2rem;\n"]))),B=function(){return Object(F.jsxs)(R,{children:[Object(F.jsx)(E,{children:"404"}),Object(F.jsx)(A,{children:"Page Not Found"}),Object(F.jsx)("span",{children:Object(F.jsx)(N,{go:"/",clr:"white",b_clr:"#000",bg:"#8bc34ac2",padding:[1,1.8],size:[20,15],children:"Back To Home"})})]})},J=t(23),M=t.n(J),P=t(31),T=t(12),U=function(){var n=Object(y.b)(),e=n.user,t=n.logout;return Object(F.jsxs)(q,{children:[Object(F.jsx)(G,{children:Object(F.jsx)("a",{href:"https://mail.google.com/",children:Object(F.jsx)("img",{src:e.picture,alt:e.name})})}),Object(F.jsx)(L,{children:"Wellcome,"}),Object(F.jsx)("h3",{children:e.nickname}),Object(F.jsx)("span",{onClick:function(){return t({returnTo:window.location.origin})},children:Object(F.jsx)(N,{clr:"gray",b_clr:"none",children:"Logout"})})]})},G=C.a.div(o||(o=Object(S.a)(["\n img{\n   width: 40px;\n   border-radius: 40%40%;\n }\n"]))),L=C.a.h3(s||(s=Object(S.a)(["\n  color: gray;\n  font-weight: 100;\n"]))),q=C.a.div(d||(d=Object(S.a)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 auto;\n  padding: 10px 35%;\n  background: #fff;\n  @media (max-width: 850px){\n    padding: 10px 15%;\n  }\n  @media (max-width: 650px){\n    padding: 10px 5%;\n  }\n"]))),H=C.a.div(l||(l=Object(S.a)(["\n  font-size: 2.5rem;\n  padding: 20px;\n  border-radius: 50%;\n  background: #f3a189;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media (max-width: 850px) and (min-width: 650px){\n    font-size: 3rem;\n    padding: 15px 5px;\n  }\n  @media (max-width: 650px){\n    font-size: 3.5rem;\n    padding: 5px;\n    width: 100px\n  }\n"]))),V=function(n){var e=n.children;return Object(F.jsx)(H,{children:e})},W=t(32),D=t(17),K=t(33),Q=C.a.div(j||(j=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  margin: 3vh 10px;\n  >*{\n    margin: 10px\n  }\n  @media (max-width: 570px){\n    flex-direction: column;\n  }\n  @media (min-width: 571px) and (max-width: 850px) {\n    flex-wrap: wrap;\n  }\n"]))),X=C.a.div(b||(b=Object(S.a)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-size: 1rem;\n  background: #fff;\n  padding: 10px;\n  color: gray;\n  width: 20%;\n  @media (max-width: 570px){\n    grid-template-columns: 1fr 1fr;\n    width: 85%;\n  }\n  @media (min-width: 571px) and (max-width: 850px) {\n    width: 45%;\n  }\n"]))),Y=function(n){var e=n.userInfo,t=[e.public_repos,e.followers,e.following,e.public_gists],i=[Object(F.jsx)(W.a,{}),Object(F.jsx)(D.b,{}),Object(F.jsx)(D.a,{}),Object(F.jsx)(K.a,{})],c=["Repos","Followers","Following","Gists"];return Object(F.jsx)(Q,{children:t.map((function(n,e){return Object(F.jsxs)(X,{children:[Object(F.jsx)(V,{children:i[e]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("h2",{children:n}),Object(F.jsx)("h2",{children:c[e]})]})]},e)}))})},Z=C.a.input(u||(u=Object(S.a)(["\nborder: 1px solid ",";\nwidth: ",";\nheight: ",";\ncolor: ",";\nbackground: ",";\nborder-radius: 2px;\npadding: 2px;\npadding-left: 5px;\nfont-size: 1rem;\noutline: none;\ntransition: all ease-in-out .5s;\n&:hover{\n  box-shadow: 0 0 15px ",";\n  transform: scale(1.01,1.01);\n}\n"])),(function(n){return n.b_clr}),(function(n){return"".concat(n.size[0],"rem")}),(function(n){return"".concat(n.size[1],"rem")}),(function(n){return n.clr,n.clr}),(function(n){return n.bg,n.bg}),(function(n){return n.b_clr,n.b_clr})),$=function(n){var e=n.handleChange,t=n.type,i=void 0===t?"text":t,c=n.size,r=void 0===c?[1,1]:c,a=n.holder,o=void 0===a?"text":a,s=n.value,d=n.d_value,l=n.clr,j=n.bg,b=void 0===j?"white":j,u=n.b_clr;return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(Z,{size:r,type:i,placeholder:o,value:s,defaultValue:d,onChange:function(n){return e(n)},clr:l,bg:b,b_clr:u})})},nn=t(34),en=C.a.div(x||(x=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  box-sizing: border-box;\n  min-width: 50%;\n  border-radius: 5px;\n  >*{\n    margin: 5px\n  }\n  @media (max-width: 850px){\n    width: 90%;\n    height: 60px;\n  }\n"]))),tn=function(){var n=Object(g.useContext)(k),e=n.user,t=n.handleChange,i=n.handleSubmit;return Object(F.jsxs)(en,{children:[Object(F.jsx)(nn.a,{color:"#2caeba"}),Object(F.jsx)($,{value:e,handleChange:t,b_clr:"#2caeba",clr:"#2caeba",size:[30,2.5]}),Object(F.jsx)("form",{onClick:function(n){return i(n)},children:Object(F.jsx)(N,{b_clr:"#2caeba",bg:"#2caeba",clr:"white",size:[8,3],children:"Search"})})]})},cn=(t(58),t(35)),rn=t(36),an=C.a.div(h||(h=Object(S.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  >div{\n    margin: 25px 15px;\n  }\n  @media (max-width: 850px){\n    flex-direction: column;\n  }\n"]))),on=C.a.div(p||(p=Object(S.a)(["\n  position: relative;\n  width: 40%;\n  height: 400px;\n  background: white;\n  padding: 25px;\n  border: 1px solid black;\n  overflow: auto;\n  &::before{\n    content: ",";\n    background: white;\n    padding: 5px 10px;\n    font-size: 2rem;\n    position: absolute;\n    top: -30px;\n    left: 0;\n  };\n  img{\n    width: 70px;\n    border-radius: 50%;\n  }\n  @media (max-width: 850px){\n    width: 85%;\n  }\n"])),(function(n){return n.title&&n.title})),sn=C.a.div(f||(f=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n  >*{\n    margin: 10px 0;\n  }\n  a{\n    font-size: 1.2rem;\n    width: 100px;\n    height: 44px;\n    color: green;\n    text-decoration: none;\n  }\n"]))),dn=C.a.div(m||(m=Object(S.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  font-size: 1.5rem;\n  margin: 10px;\n  >div{\n    display: flex;\n    >*{\n      margin: 10px\n    }\n    a{\n      text-decoration: none;\n      color: black;\n    }\n  }\n"]))),ln=function(n){var e=Object(g.useContext)(k),t=e.userInfo,i=e.follower,c=t.subscriptions_url,r=t.avatar_url,a=t.twitter_username,o=t.html_url,s=t.name,d=t.company,l=t.blog,j=t.bio,b=t.location;return Object(F.jsxs)(an,{children:[Object(F.jsxs)(on,{title:"User",children:[Object(F.jsxs)(sn,{children:[Object(F.jsx)("img",{src:r,alt:s||"Guest"}),Object(F.jsxs)("div",{children:[Object(F.jsx)("h3",{children:s||"Guest"}),Object(F.jsxs)("h3",{children:["@",a||"No Social Media"]})]}),Object(F.jsx)(N,{padding:[1,1],go:c,clr:"green",b_clr:"green",to:"",size:[1.7,.5],children:"Follow"})]}),Object(F.jsx)("p",{style:{padding:"10px",margin:"10px 0"},children:j||"No Bio Exist"}),Object(F.jsxs)(dn,{children:[Object(F.jsxs)("div",{children:[Object(F.jsx)(cn.a,{}),Object(F.jsx)("p",{children:d||"company"})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)(rn.a,{}),Object(F.jsx)("p",{children:b||"location"})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)(D.c,{}),Object(F.jsx)("p",{children:Object(F.jsx)("a",{href:o,children:l||"blog"})})]})]})]}),Object(F.jsx)(on,{children:i.length>0?i.map((function(n,e){return Object(F.jsxs)(sn,{title:"Followers",children:[Object(F.jsx)("img",{src:n.avatar_url,alt:n.login}),Object(F.jsxs)("div",{children:[Object(F.jsx)("h3",{children:n.login}),Object(F.jsx)("a",{href:o,children:o})]})]},e+10)})):Object(F.jsx)("div",{children:"No Followers Exist"})})]})},jn=t(40),bn=t(24),un=t.n(bn),xn=t(37),hn=t.n(xn),pn=t(38),fn=t.n(pn),mn=t(39),gn=t.n(mn);un.a.fcRoot(hn.a,fn.a,gn.a);var On,wn,vn,yn=function(n){var e={type:n.type,width:"95%",height:"400",dataFormat:"json",dataSource:{chart:{caption:"Most Languege Used",subCaption:"Per cent",xAxisName:"Langueges",numberSuffix:"%",theme:"candy",pieRadius:"50%"},data:n.data}};return Object(F.jsx)("div",{children:Object(F.jsx)(un.a,Object(jn.a)({},e))})},zn=function(){var n=[{label:"HTML",value:"13"},{label:"CSS",value:"8"},{label:"JAVASCRIPT",value:"78"}];return Object(F.jsxs)(_n,{children:[Object(F.jsx)(yn,{type:"doughnut3d",data:n}),Object(F.jsx)(yn,{type:"column3d",data:n}),Object(F.jsx)(yn,{type:"doughnut2d",data:n}),Object(F.jsx)(yn,{type:"doughnut3d",data:n})]})},_n=C.a.div(On||(On=Object(S.a)(["\ndisplay: grid;\nwidth: 85% !important;\ngrid-template-columns: 1fr 1fr;\nalign-items: center;\n>*{\n  width: 95% !important;\n  margin: 20px\n}\n@media (max-width: 850px){\n  grid-template-columns: 1fr;\n}\n"]))),kn=function(){var n=Object(g.useState)(""),e=Object(T.a)(n,2),t=e[0],i=e[1],c=Object(g.useState)(""),r=Object(T.a)(c,2),a=r[0],o=r[1],s=Object(g.useState)({}),d=Object(T.a)(s,2),l=d[0],j=d[1],b=Object(g.useState)([]),u=Object(T.a)(b,2),x=u[0],h=u[1],p=Object(g.useState)({}),f=Object(T.a)(p,2),m=f[0],O=f[1],w="https://api.github.com/users/".concat(t),v=function(){var n=Object(P.a)(M.a.mark((function n(){return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:fetch(w).then((function(n){return n.json()})).then((function(n){return j(n)})).then(fetch(l.followers_url).then((function(n){return n.json()})).then((function(n){return h(n)}))),fetch("http://api.github.com/rate_limit").then((function(n){return n.json()})).then((function(n){return O(n.rate)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(g.useEffect)((function(){""!==t&&v(),i("")}),[a]);return Object(F.jsx)("div",{className:"home",children:Object(F.jsxs)(k.Provider,{value:{handleChange:function(n){var e=n.target.value;""!==e&&i(e)},user:t,handleSubmit:function(n){n.preventDefault(),""!==t&&o(t)},follower:x,userInfo:l},children:[Object(F.jsx)(U,{}),Object(F.jsxs)(Sn,{children:[Object(F.jsx)(tn,{}),Object(F.jsxs)(Cn,{children:["Requests: ",m.remaining," / ",m.limit]})]}),l.login?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Y,{userInfo:l}),Object(F.jsx)(ln,{}),Object(F.jsx)(zn,{})]}):Object(F.jsx)("div",{children:"No request"})]})})},Sn=C.a.div(wn||(wn=Object(S.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 100% !important;\nmargin: 10vh 0;\n>*{\n  margin: 10px\n}\n@media (max-width: 850px){\n  flex-direction: column;\n}\nspan{\n  color: white;\n}\n"]))),Cn=C.a.span(vn||(vn=Object(S.a)(["\nfont-size: 1.5rem;\ncolor: gray;\n"]))),Fn=(t(64),t.p+"static/media/login.45d3b74f.svg"),In=function(){var n=Object(y.b)().loginWithRedirect;return Object(F.jsxs)("div",{className:"user",children:[Object(F.jsx)("img",{src:Fn,alt:"github"}),Object(F.jsx)("h1",{children:"Github User"}),Object(F.jsx)("span",{onClick:function(){return n()},children:Object(F.jsx)(N,{go:"/",padding:[1,1],size:[15,1.5],bg:"#05ca2854",clr:"white",b_clr:"#05ca28",children:"login / sign up"})})]})},Nn=function(){var n=Object(y.b)().isAuthenticated;return Object(F.jsx)(k.Provider,{value:{},children:Object(F.jsx)(z.a,{children:Object(F.jsxs)(_.c,{children:[Object(F.jsx)(_.a,{path:"/",exact:!0,component:n?kn:In}),Object(F.jsx)(_.a,{path:"*",component:B})]})})})};var Rn=function(){return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(y.a,{domain:"irassari.eu.auth0.com",clientId:"BwbeKMU6mhTInj18olRJibIbfeJFFB90",redirectUri:window.location.origin,children:Object(F.jsx)(Nn,{})})})};v.a.render(Object(F.jsx)(O.a.StrictMode,{children:Object(F.jsx)(Rn,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.179b0dd2.chunk.js.map