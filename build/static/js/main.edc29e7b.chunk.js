(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports={Content:"About_Content__2EQcf"}},111:function(e,t,a){e.exports={Content:"RouteError_Content__1Y4HG"}},112:function(e,t,a){e.exports=a(241)},120:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){},16:function(e,t,a){e.exports={Background:"FullHeader_Background__6tstl",DiscoveryGroupTop:"FullHeader_DiscoveryGroupTop__J9atA",DiscoveryGroupMiddle:"FullHeader_DiscoveryGroupMiddle__3gHdC",ButtonGroup:"FullHeader_ButtonGroup__2bziz",DiscoveryGroupBottom:"FullHeader_DiscoveryGroupBottom__3mDjb",FontAwesomeIcon:"FullHeader_FontAwesomeIcon__1IQwm",IconGroup:"FullHeader_IconGroup__2vUj1",IconLabel:"FullHeader_IconLabel__1xzRG"}},17:function(e,t,a){e.exports=a.p+"static/media/tempLogo.3c297ae5.png"},18:function(e,t,a){e.exports={Background:"NavBar_Background__1n0Mk",Content:"NavBar_Content__5r5Xv",NavItemsGroup:"NavBar_NavItemsGroup__2sXwh",NavItem:"NavBar_NavItem__o8naE",ActiveTab:"NavBar_ActiveTab__1DgRw",Burger:"NavBar_Burger__IeQik"}},20:function(e,t,a){e.exports={Content:"ProjectFullDetail_Content__1FHIq",TitleImgs:"ProjectFullDetail_TitleImgs__oF3tF",imgEnlarge:"ProjectFullDetail_imgEnlarge__wec18",imgSelect:"ProjectFullDetail_imgSelect__32Ord",imgItem:"ProjectFullDetail_imgItem__27LXQ"}},232:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(107),r=a.n(i),l=a(248),c=a(25),u=Object(c.a)(),m=a(5),s=a(12),d=a(109),p=a(247),g=(a(120),a(7)),f=a(8),v=a(10),E=a(9),b=a(11),_=a(249),h=a(242),j=a(246),w=(a(122),a(39)),x=a(42),C=(a(124),a(250)),q=a(18),O=a.n(q),N=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:O.a.Background},n.a.createElement("div",{className:O.a.Content},n.a.createElement(C.a,{to:"/",exact:!0},n.a.createElement("h1",null,"UTSC Projects")),n.a.createElement("div",{className:O.a.NavItemsGroup},n.a.createElement(C.a,{activeClassName:O.a.ActiveTab,to:"/ViewProjects",exact:!0},n.a.createElement("div",{className:O.a.NavItem},"View Projects")),n.a.createElement(C.a,{activeClassName:O.a.ActiveTab,to:"/About"},n.a.createElement("div",{className:O.a.NavItem},"About")),n.a.createElement(C.a,{activeClassName:O.a.ActiveTab,to:"/ContactUs"},n.a.createElement("div",{className:O.a.NavItem},"Contact Us")),n.a.createElement("a",{onClick:this.props.toggleLoginModal},n.a.createElement("div",{className:O.a.NavItem},"Login"))),n.a.createElement("div",{className:O.a.Burger,onClick:this.props.toggleDrawer},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null))))}}]),t}(o.Component),y=Object(m.b)(function(e){return{}},null,null,{pure:!1})(N),D=a(28),F=a.n(D),k=function(e){var t=[F.a.Drawer,F.a.Close];return e.isOpen&&(t=[F.a.Drawer,F.a.Open]),n.a.createElement(n.a.Fragment,null,e.isOpen?n.a.createElement("div",{className:F.a.Background,onClick:e.closeDrawer}):null,n.a.createElement("div",{className:t.join(" ")},n.a.createElement("div",{className:F.a.ItemsGroup},n.a.createElement(C.a,{onClick:e.closeDrawer,to:"/",exact:!0},"View Projects"),n.a.createElement(C.a,{onClick:e.closeDrawer,to:"/About"},"About"),n.a.createElement(C.a,{onClick:e.closeDrawer,to:"/ContactUs"},"Contact Us"),n.a.createElement(C.a,{onClick:e.closeDrawer,to:"/Login"},"Login"))))},P=a(57),A=a.n(P),I=a(32),L=function(e){return n.a.createElement("div",{className:A.a.Background},n.a.createElement("div",{className:A.a.Content},n.a.createElement("p",null,"Made with ",n.a.createElement(I.a,{icon:"heart",size:"sm",className:A.a.FontAwesomeIcon})," by ",n.a.createElement("a",{href:"http://david-liu-ziming.com/",target:"_blank",rel:"noopener noreferrer"},"David Ziming Liu")," at ",n.a.createElement("a",{href:"https://www.utoronto.ca/",target:"_blank",rel:"noopener noreferrer"},"The University of Toronto"),".")))},B=a(43),T=a.n(B),S=a(243),U=a(245),M=a(244),H=a(33),G=a.n(H),R=function(e){var t=e.input,a=e.label,o=e.type,i=e.meta,r=i.touched,l=i.error;return n.a.createElement("div",{className:G.a.Field},n.a.createElement("label",null,a),"Message"===a?n.a.createElement("textarea",Object.assign({className:G.a.Message},t,{placeholder:a,type:o})):n.a.createElement("input",Object.assign({className:G.a.Regular},t,{placeholder:a,type:o})),r&&l&&n.a.createElement("span",null,l))},V=function(e){var t=e.handleSubmit;return n.a.createElement("form",{onSubmit:t(function(e){var t={},a=!1;if("email"in e||(t.email="Required",a=!0),"password"in e||(t.password="Required",a=!0),a)throw new S.a(t);console.log("Valid Submission"),console.log(e)}),className:G.a.Form},n.a.createElement(U.a,{name:"email",type:"email",component:R,label:"Email"}),n.a.createElement(U.a,{name:"password",type:"password",component:R,label:"Password"}),e.error&&n.a.createElement("strong",null,e.error),n.a.createElement("button",{className:G.a.SubmitButton,type:"submit",disabled:e.submitting},"Submit"))},W=V=Object(M.a)({form:"LoginForm"})(V),z=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=T.a.Close;return this.props.isOpen&&(e=T.a.Open),n.a.createElement("div",{className:e},n.a.createElement("div",{className:T.a.darkOverlay,onClick:this.props.closeLoginModal}),n.a.createElement("div",{className:T.a.Content},n.a.createElement("h1",null,"Admin Sign In"),n.a.createElement(W,null)))}}]),t}(o.Component),J=Object(m.b)(function(e){return{}})(z),Q=function(e){function t(){var e,a;Object(g.a)(this,t);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(n)))).state={showDrawer:!1,showLoginModal:!1},a.sideDrawerClosedHandler=function(){a.setState({showDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState(function(e){return{showDrawer:!e.showDrawer}})},a.loginModalClosedHandler=function(){a.setState({showLoginModal:!1})},a.loginModalToggleHandler=function(){a.setState(function(e){return{showLoginModal:!e.showLoginModal}})},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentDidUpdate",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{toggleDrawer:this.sideDrawerToggleHandler,toggleLoginModal:this.loginModalToggleHandler}),n.a.createElement(k,{isOpen:this.state.showDrawer,closeDrawer:this.sideDrawerClosedHandler}),n.a.createElement(J,{isOpen:this.state.showLoginModal,closeLoginModal:this.loginModalClosedHandler}),n.a.createElement("main",null,this.props.children),n.a.createElement(L,null))}}]),t}(o.Component),X=Object(m.b)(function(e){return{}})(Q),Y=a(16),K=a.n(Y),Z=function(e){return n.a.createElement("div",{className:K.a.Background},n.a.createElement("div",{className:K.a.DiscoveryGroupTop},n.a.createElement("p",null,"Building the world project by project")),n.a.createElement("div",{className:K.a.DiscoveryGroupMiddle},n.a.createElement("p",null,"I am looking to..."),n.a.createElement("div",{className:K.a.ButtonGroup},n.a.createElement("button",{onClick:function(){u.push("ContactUs")}},"Start a Project"),n.a.createElement("button",null,"Join a Project"))),n.a.createElement("div",{className:K.a.DiscoveryGroupBottom},n.a.createElement("p",null,"UTSC Projects will help you build your talent while you help us build our community"),n.a.createElement("div",{className:K.a.IconGroup},n.a.createElement("div",{className:K.a.IconLabel},n.a.createElement(I.a,{icon:"laptop-code",size:"6x",className:K.a.FontAwesomeIcon}),n.a.createElement("p",null,"Learn real world skills with talented peers who wants to do more")),n.a.createElement("div",{className:K.a.IconLabel},n.a.createElement(I.a,{icon:"dollar-sign",size:"6x",className:K.a.FontAwesomeIcon}),n.a.createElement("p",null,"Absolutely free with special guidance from University Faculty")),n.a.createElement("div",{className:K.a.IconLabel},n.a.createElement(I.a,{icon:"fire",size:"6x",className:K.a.FontAwesomeIcon}),n.a.createElement("p",null,"Real projects with real value to add fame to your name")))))},$=a(59),ee=a.n($),te=a(60),ae=a.n(te),oe=function(e){function t(){var e,a;Object(g.a)(this,t);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(n)))).routeProjectFullDetail=function(){u.push("/ProjectFullDetail")},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:ae.a.Box},n.a.createElement("div",null,n.a.createElement("img",{onClick:this.routeProjectFullDetail,src:this.props.img,alt:"Project Logo"})),n.a.createElement("div",{className:ae.a.Content},n.a.createElement("h1",null,this.props.title),n.a.createElement("p",null,this.props.description),n.a.createElement("button",{className:ae.a.ViewProject,onClick:this.routeProjectFullDetail},"View Project")))}}]),t}(o.Component),ne=Object(m.b)(function(e){return{}})(oe),ie=a(17),re=a.n(ie),le=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:ee.a.Background},n.a.createElement("div",{className:ee.a.OngoingProjects},n.a.createElement("h1",null,"Ongoing Projects"),n.a.createElement("section",{className:ee.a.Wrap},n.a.createElement(ne,{title:"Project 1",description:"Eu do commodo culpa est enim esse amet excepteur ipsum enim voluptate. Commodo mollit ex in exercitation Lorem minim. Cupidatat dolor dolor ullamco culpa consequat amet mollit adipisicing nulla dolore minim quis dolor. Aliqua fugiat eu officia nim nim quis dolor. Aliqua fugiat eu officia nim quis dolor. Aliqua fugiat eu officia nim quis dolor. Aliqua fugiat eu officia nim quis dolor. Aliqua fugiat eu officia nim quis dolor. Aliqua fugiat eu officia nim quis dolor. Aliqua fugiat eu officia quis dolor. Aliqua fugiat eu officia nostrud id proident veniam consequat culpa est velit officia magna aute.",img:re.a}),n.a.createElement(ne,{title:"Project 1",description:"Eu do commodo culpa est enim esse amet excepteur ipsum enim voluptate. Commodo mollit ex in exercitation Lorem minim. Cupidatat dolor dolor ullamco culpa consequat amet mollit adipisicing nulla dolore minim quis dolor. Aliqua fugiat eu officia nostrud id proident veniam consequat culpa est velit officia magna aute.",img:re.a}),n.a.createElement(ne,{title:"Project 1",description:"Eu do commodo culpa est enim esse amet excepteur ipsum enim voluptate. Commodo mollit ex in consequat culpa est velit officia magna aute.",img:re.a}),n.a.createElement(ne,{title:"Project 1",description:"Eu do commodo culpa est enim esse amet excepteur ipsum enim voluptate. Commodo mollit ex in exercitation Lorem minim. Cupidatat dolor dolor ullamco culpa consequat amet mollit adipisicing nulla dolore minim quis dolor. Aliqua fugiat eu officia nostrud id proident veniam consequat culpa est velit officia magna aute.",img:re.a}),n.a.createElement(ne,{title:"Project 1",description:"Eu do commodo culpa est enim esse amet excepteur ipsum enim voluptate. Commodo mollit ex in exercitation Lorem minim. Cupidatat dolor dolor ullamco culpa consequat amet mollit adipisicing nulla dolore minim quis dolor. Aliqua fugiat eu officia nostrud id proident veniam consequat culpa est velit officia magna aute.",img:re.a}))))}}]),t}(o.Component),ce=Object(m.b)(function(e){return{}},null,null,{pure:!1})(le),ue=(a(232),function(e){function t(){var e,a;Object(g.a)(this,t);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(n)))).state={showDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState(function(e){return{showDrawer:!e.showDrawer}})},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(Z,null),n.a.createElement(ce,null))}}]),t}(o.Component)),me=Object(m.b)(function(e){return{}})(ue),se=a(83),de=a.n(se),pe=function(e){return n.a.createElement("div",{className:de.a.Content},n.a.createElement("div",{className:de.a.CenterText},n.a.createElement("h1",null,e.header),n.a.createElement("p",null,e.text)))},ge=a(110),fe=a.n(ge),ve=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),document.body.scrollTop=0}},{key:"componentDidUpdate",value:function(){window.scrollTo(0,0),document.body.scrollTop=0}},{key:"render",value:function(){return n.a.createElement("div",{className:fe.a.Content},n.a.createElement(pe,{header:"About Us",text:"In exercitation id id ad. Tempor laborum exercitation do magna minim commodo dolor commodo qui velit adipisicing irure quis. Sit et dolor exercitation cupidatat ex incididunt in aliqua. Cupidatat cupidatat veniam anim tempor adipisicing enim ea pariatur commodo ea cupidatat excepteur exercitation officia. Quis exercitation sit minim reprehenderit commodo ad. Esse consectetur voluptate culpa culpa eiusmod qui ut deserunt. Laborum do adipisicing ex labore minim non sit laborum officia reprehenderit.Anim velit consectetur ullamco veniam. Exercitation irure sunt deserunt aute pariatur et commodo ea irure id ea velit commodo. Veniam consectetur ex excepteur fugiat officia exercitation id incididunt ullamco exercitation. Do nostrud quis ad sint pariatur consectetur dolore ad labore velit ullamco pariatur qui. Commodo culpa id deserunt commodo sunt. Ex mollit ex voluptate cillum.\n    In exercitation id id ad. Tempor laborum exercitation do magna minim commodo dolor commodo qui velit adipisicing irure quis. Sit et dolor exercitation cupidatat ex incididunt in aliqua. Cupidatat cupidatat veniam anim tempor adipisicing enim ea pariatur commodo ea cupidatat excepteur exercitation officia. Quis exercitation sit minim reprehenderit commodo ad. Esse consectetur voluptate culpa culpa eiusmod qui ut deserunt. Laborum do adipisicing ex labore minim non sit laborum officia reprehenderit.Anim velit consectetur ullamco veniam. Exercitation irure sunt deserunt aute pariatur et commodo ea irure id ea velit commodo. Veniam consectetur ex excepteur fugiat officia exercitation id incididunt ullamco exercitation. Do nostrud quis ad sint pariatur consectetur dolore ad labore velit ullamco pariatur qui. Commodo culpa id deserunt commodo sunt. Ex mollit ex voluptate cillum.Tempor laborum exercitation do magna minim commodo dolor commodo qui velit adipisicing irure quis. Sit et dolor exercitation cupidatat ex incididunt in aliqua. Cupidatat cupidatat veniam anim tempor adipisicing enim ea pariatur commodo ea cupidatat excepteur exercitation officia."}))}}]),t}(o.Component),Ee=Object(m.b)(function(e){return{}})(ve),be=a(61),_e=a.n(be),he=a(34),je=a.n(he),we=function(e){var t=e.handleSubmit,a=function(e){var t=e.input,a=e.label,o=e.type,i=e.meta,r=i.touched,l=i.error;return n.a.createElement("div",{className:je.a.Field},n.a.createElement("label",null,a),"Message"===a?n.a.createElement("textarea",Object.assign({className:je.a.Message},t,{placeholder:a,type:o})):n.a.createElement("input",Object.assign({className:je.a.Regular},t,{placeholder:a,type:o})),r&&l&&n.a.createElement("span",null,l))};return n.a.createElement("form",{onSubmit:t(function(e){var t={},a=!1;if("firstName"in e||(t.firstName="Required",a=!0),"lastName"in e||(t.lastName="Required",a=!0),"program"in e||(t.program="Required",a=!0),"yearOfStudy"in e||(t.yearOfStudy="Required",a=!0),"email"in e||(t.email="Required",a=!0),"message"in e||(t.message="Required",a=!0),a)throw new S.a(t);console.log("Valid Submission"),console.log(e)}),className:je.a.Form},n.a.createElement(U.a,{name:"firstName",type:"text",component:a,label:"First Name"}),n.a.createElement(U.a,{name:"lastName",type:"text",component:a,label:"Last Name"}),n.a.createElement(U.a,{name:"program",type:"text",component:a,label:"Program"}),n.a.createElement(U.a,{name:"yearOfStudy",type:"text",component:a,label:"Year Of Study"}),n.a.createElement(U.a,{name:"email",type:"email",component:a,label:"Email"}),n.a.createElement(U.a,{name:"message",type:"textarea",component:a,label:"Message"}),e.error&&n.a.createElement("strong",null,e.error),n.a.createElement("button",{className:je.a.SubmitButton,type:"submit",disabled:e.submitting},"Submit"))},xe=we=Object(M.a)({form:"ContactUsForm"})(we),Ce=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:_e.a.Content},n.a.createElement("div",{className:_e.a.ContactUs},n.a.createElement(xe,null),n.a.createElement("div",{className:_e.a.ContactUsFormDecorator},n.a.createElement("p",null,"Hey! Do you have an interesting idea to share with the world? Let us know all about it!"),n.a.createElement("p",null,"We will respond as soon as possible!"))))}}]),t}(o.Component),qe=Object(m.b)(function(e){return{}})(Ce),Oe=a(111),Ne=a.n(Oe),ye=function(e){return n.a.createElement("div",{className:Ne.a.Content},n.a.createElement("h1",null,"Woops! There is an error. Either you are not authorized to access this page or this page does not exist. Please check the URL and ensure that you have logged in."))},De=a(20),Fe=a.n(De),ke=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:Fe.a.Content},n.a.createElement("div",{className:Fe.a.TitleImgs},n.a.createElement("h1",null,"Project Title"),n.a.createElement("div",{className:Fe.a.imgEnlarge}),n.a.createElement("div",{className:Fe.a.imgSelect},n.a.createElement("div",{className:Fe.a.imgItem}),n.a.createElement("div",{className:Fe.a.imgItem}),n.a.createElement("div",{className:Fe.a.imgItem}),n.a.createElement("div",{className:Fe.a.imgItem}),n.a.createElement("div",{className:Fe.a.imgItem}))),n.a.createElement("h1",null,"Description"),n.a.createElement("p",{className:Fe.a.Description},"Labore ullamco cillum pariatur minim adipisicing voluptate labore. Voluptate consectetur in cillum velit pariatur culpa aliqua esse. Id enim aliquip consequat sint dolor occaecat sint consectetur. Cupidatat qui exercitation non nulla. Exercitation cillum minim velit sunt magna nisi laboris quis aliquip nisi nulla. Non ea et ex commodo.Labore ullamco cillum pariatur minim adipisicing voluptate labore. Voluptate consectetur in cillum velit pariatur culpa aliqua esse. Id enim aliquip consequat sint dolor occaecat sint consectetur. Cupidatat qui exercitation non nulla. Exercitation cillum minim velit sunt magna nisi laboris quis aliquip nisi nulla. Non ea et ex commodo. Labore ullamco cillum pariatur minim adipisicing voluptate labore. Voluptate consectetur in cillum velit pariatur culpa aliqua esse. Id enim aliquip consequat sint dolor occaecat sint consectetur. Cupidatat qui exercitation non nulla. Exercitation cillum minim velit sunt magna nisi laboris quis aliquip nisi nulla. Non ea et ex commodo. Labore ullamco cillum pariatur minim adipisicing voluptate labore. Voluptate consectetur in cillum velit pariatur culpa aliqua esse. Id enim aliquip consequat sint dolor occaecat sint consectetur. Cupidatat qui exercitation non nulla. Exercitation cillum minim velit sunt magna nisi laboris quis aliquip nisi nulla. Non ea et ex commodo."),n.a.createElement("button",null,"Join Project"))}}]),t}(o.Component),Pe=Object(m.b)(function(e){return{}})(ke),Ae=a(62),Ie=a.n(Ae),Le=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=[n.a.createElement(ne,{title:"Project 1",description:"Eu do commodo culpa est enim esse amet excepteur ipsum enim voluptate. Commodo mollit ex in exercitation Lorem minim. Cupidatat dolor dolor ullamco culpa consequat amet mollit adipisicing nulla dolore minim quis dolor. Aliqua fugiat eu officia nim nim quis dolor. Aliqua fugiat eu officia nim quis dolor. Aliqua fugiat eu officia nim quis dolor. Aliqua fugiat eu officia nim quis dolor. Aliqua fugiat eu officia nim quis dolor. Aliqua fugiat eu officia nim quis dolor. Aliqua fugiat eu officia quis dolor. Aliqua fugiat eu officia nostrud id proident veniam consequat culpa est velit officia magna aute.",img:re.a}),n.a.createElement(ne,{title:"Project 1",description:"Eu do commodo culpa est enim esse amet excepteur ipsum enim voluptate. Commodo mollit ex in exercitation Lorem minim. Cupidatat dolor dolor ullamco culpa consequat amet mollit adipisicing nulla dolore minim quis dolor. Aliqua fugiat eu officia nostrud id proident veniam consequat culpa est velit officia magna aute.",img:re.a}),n.a.createElement(ne,{title:"Project 1",description:"Eu do commodo culpa est enim esse amet excepteur ipsum enim voluptate. Commodo mollit ex in consequat culpa est velit officia magna aute.",img:re.a}),n.a.createElement(ne,{title:"Project 1",description:"Eu do commodo culpa est enim esse amet excepteur ipsum enim voluptate. Commodo mollit ex in exercitation Lorem minim. Cupidatat dolor dolor ullamco culpa consequat amet mollit adipisicing nulla dolore minim quis dolor. Aliqua fugiat eu officia nostrud id proident veniam consequat culpa est velit officia magna aute.",img:re.a}),n.a.createElement(ne,{title:"Project 1",description:"Eu do commodo culpa est enim esse amet excepteur ipsum enim voluptate. Commodo mollit ex in exercitation Lorem minim. Cupidatat dolor dolor ullamco culpa consequat amet mollit adipisicing nulla dolore minim quis dolor. Aliqua fugiat eu officia nostrud id proident veniam consequat culpa est velit officia magna aute.",img:re.a})];return n.a.createElement("div",{className:Ie.a.Background},n.a.createElement("div",{className:Ie.a.OngoingProjects},n.a.createElement("h1",null,"View Projects"),n.a.createElement("section",{className:Ie.a.Wrap},e)))}}]),t}(o.Component),Be=Object(m.b)(function(e){return{}},null,null,{pure:!1})(Le);w.b.add(x.d,x.a,x.b,x.c);var Te=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=n.a.createElement(_.a,null,n.a.createElement(h.a,{path:"/ViewProjects",component:Be}),n.a.createElement(h.a,{path:"/ProjectFullDetail",component:Pe}),n.a.createElement(h.a,{path:"/About",component:Ee}),n.a.createElement(h.a,{path:"/ContactUs",component:qe}),n.a.createElement(h.a,{path:"/",exact:!0,component:me}),n.a.createElement(h.a,{path:"/RouteError",component:ye}),n.a.createElement(j.a,{to:"/RouteError"}));return n.a.createElement("div",null,n.a.createElement(X,null,e))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=Object(s.c)({form:p.a}),Ue=Object(s.d)(Se,Object(s.a)(d.a)),Me=n.a.createElement(m.a,{store:Ue},n.a.createElement(l.a,{history:u},n.a.createElement(Te,null)));r.a.render(Me,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},28:function(e,t,a){e.exports={Background:"Drawer_Background__3H39R",Drawer:"Drawer_Drawer__3bxUx",ItemsGroup:"Drawer_ItemsGroup__NjcQD",Open:"Drawer_Open__3Pa50",Close:"Drawer_Close__2iAwz"}},33:function(e,t,a){e.exports={Form:"LoginForm_Form__2IET_",Field:"LoginForm_Field__LoTkr",Regular:"LoginForm_Regular__31RkE",Message:"LoginForm_Message__2sxbS",SubmitButton:"LoginForm_SubmitButton__1JTa_"}},34:function(e,t,a){e.exports={Form:"ContactUsForm_Form__32Rm6",Field:"ContactUsForm_Field__27UGO",Message:"ContactUsForm_Message__1a-oS",SubmitButton:"ContactUsForm_SubmitButton__13jtl"}},43:function(e,t,a){e.exports={Close:"Login_Close__1CmEA",Open:"Login_Open__1uAar",darkOverlay:"Login_darkOverlay__2Us7H",Content:"Login_Content__3W_vE"}},57:function(e,t,a){e.exports={Background:"Footer_Background__SXYGa",Content:"Footer_Content__4vgTH",FontAwesomeIcon:"Footer_FontAwesomeIcon__3lLXu"}},59:function(e,t,a){e.exports={Background:"ProjectsOverview_Background__22Oo8",OngoingProjects:"ProjectsOverview_OngoingProjects__2s2iD",Wrap:"ProjectsOverview_Wrap__O3UAV"}},60:function(e,t,a){e.exports={Box:"Project_Box__3qo1N",Content:"Project_Content__1nSPN",ViewProject:"Project_ViewProject__3gJbi"}},61:function(e,t,a){e.exports={ContactUs:"ContactUs_ContactUs__2-k4g",ContactUsFormDecorator:"ContactUs_ContactUsFormDecorator__2Rpum"}},62:function(e,t,a){e.exports={Background:"ViewProjects_Background__1B8H9",OngoingProjects:"ViewProjects_OngoingProjects__1QTtX",Wrap:"ViewProjects_Wrap__2ofJF"}},83:function(e,t,a){e.exports={Content:"LongInfo_Content__3ROKX",CenterText:"LongInfo_CenterText__8-1cb"}}},[[112,2,1]]]);
//# sourceMappingURL=main.edc29e7b.chunk.js.map