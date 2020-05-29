(this.webpackJsonplearnreac=this.webpackJsonplearnreac||[]).push([[0],{48:function(e,t,a){e.exports=a(76)},53:function(e,t,a){},54:function(e,t,a){},61:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),s=(a(53),a(10)),i=a(11),o=a(13),m=a(12),d=(a(54),a(55),a(44)),u=a(3),p=a(46),h=a(19);var E=function(e){return r.a.createElement(p.a,{variant:e.bg,expand:"lg"},r.a.createElement(h.a,null,r.a.createElement(h.a.Link,{href:"/"},"Home"),r.a.createElement(h.a.Link,{href:"/projects"},"Portfolio"),r.a.createElement(h.a.Link,{href:"/articles"},"Blog"),r.a.createElement(h.a.Link,{href:"Resume_A.pdf",download:!0},"Resume")))},v=[{title:"dcyphr",description:"An open-edit platform to make scientific literature more accessible.",skills:"Python, HTML, SQL, Flask, Bootstrap, Javascript",link:"https://www.dcyphr.org/",icon:"/S4_Research.png"},{title:"photography",description:"Photos that I have taken.",link:"https://jeffma.myportfolio.com/work",icon:"/looking.jpg"},{title:"this website",description:"Personal website.",link:"/",icon:"/landing.jpg",skills:"React"}],f=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"container"},r.a.createElement("img",{id:"img",src:this.props.icon,alt:"project"}),r.a.createElement("p",{className:"title"},this.props.title,r.a.createElement("br",null),r.a.createElement("div",{className:"small"},this.props.description)),r.a.createElement("div",{class:"overlay"}),r.a.createElement("div",{class:"button"},r.a.createElement("a",{href:this.props.link}," VISIT "))))}}]),a}(r.a.Component),g=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,{bg:"light"}),r.a.createElement("div",{className:"container"},v.map((function(e){return r.a.createElement(f,{icon:e.icon,link:e.link,title:e.title,description:e.description,skills:e.skills})}))))}}]),a}(r.a.Component);a(61);var b=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:e.post.thumbnail,className:"card-img-top post-thumbnail",alt:e.post.title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title post-title"},e.post.title),r.a.createElement("p",{className:"card-text post-preview"},(t=function(e){var t=document.createElement("div");return t.innerHTML=e,e=t.innerText}(e.post.content),a=0,n=200,(t.length>n?t.slice(a,n):t)+"...")),r.a.createElement("a",{href:e.post.link,target:"_blank",className:"btn btn-link-grey"},"Read this article on Medium.com")));var t,a,n},y=a(18),N=a.n(y),w=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={requestFailed:!1,active:0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;fetch((e=this.props.mediumRSSFeedLink,"https://api.rss2json.com/v1/api.json?rss_url=".concat(e))).then((function(e){if(!e.ok)throw Error("Network request failed");return e})).then((function(e){return e.json()})).then((function(e){var a=e.items.filter((function(e){return e.categories.length>0}));t.setState({mediumPosts:a})}),(function(){t.setState({requestFailed:!0})})),N()("#postsCardCarousels").on("slide.bs.carousel",(function(e){var t=N()(e.relatedTarget).index(),a=N()(".carousel-item").length;if(t>=a-2)for(var n=3-(a-t),r=0;r<n;r++)"left"===e.direction?N()(".carousel-item").eq(r).appendTo(".carousel-inner"):N()(".carousel-item").eq(0).appendTo(".carousel-inner")}))}},{key:"render",value:function(){var e=this;if(this.state.requestFailed)return r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"ml-4"},"Oops! Sorry we couldn't load your medium articles"));if(!this.state.mediumPosts)return r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"ml-4"},"Loading articles from my medium feed ..."));var t=this.state.mediumPosts,a=(t.length>6?t.slice(7):t).map((function(t,a){return r.a.createElement("div",{className:e.state.active===a?"carousel-item col-12 col-sm-12 col-md-6 col-lg-4 active":"carousel-item col-12 col-sm-12 col-md-6 col-lg-4",key:a},r.a.createElement(b,{post:t}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"postsCardCarousels",className:"carousel slide","data-ride":"carousel","data-interval":"false"},r.a.createElement("div",{className:"carousel-inner row w-100 mx-auto",role:"listbox"},a),r.a.createElement("a",{className:"carousel-control-prev",href:"#postsCardCarousels",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#postsCardCarousels",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))))}}]),a}(n.Component),k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("div",{className:"container"},r.a.createElement(w,{mediumRSSFeedLink:"https://www.medium.com/feed/@jeffreyma"})))}}]),a}(r.a.Component),j=a(33),x=a.n(j),C=a(25),O=a(47),S=a(43),P=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={renderMsg:!1,renderMsg2:!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"homepage"},r.a.createElement("div",{id:"background"},r.a.createElement(E,{bg:"dark"}),r.a.createElement("div",{id:"home"},r.a.createElement(x.a,{startDelay:1e3,className:"heading",onTypingDone:function(){return e.setState({renderMsg:!0})},cursor:{hideWhenDone:!0,hideWhenDoneDelay:0}},"Hi, I'm Jeffrey"),r.a.createElement("div",{className:"content pb-5"},this.state.renderMsg?r.a.createElement(x.a,{startDelay:500,className:"content",onTypingDone:function(){return e.setState({renderMsg2:!0})}},"Welcome! Learn more about me down there."):null),this.state.renderMsg2?r.a.createElement("div",{className:"downlink "},r.a.createElement(S.Link,{to:"section2",spy:!0,smooth:!0,className:"pt-5 mt-5 text-white"},r.a.createElement(O.a,{size:"5vh"}))):null)),r.a.createElement("div",{id:"section2",className:"container section"},r.a.createElement("div",{className:"heading sectionHeader"},"Profile"),r.a.createElement("blockquote",null,"\u201cIf you never did you should. These things are fun and fun is good.\u201d ",r.a.createElement("br",null),"\u2013 Dr. Seuss"),r.a.createElement("div",{className:"row"},r.a.createElement("article",{className:"w-25"}),r.a.createElement("article",{className:"w-50"},r.a.createElement("div",{className:"content py-2"},"About me"),"I am pursuing a B.S. in computer science and mathematics at Yale University. I enjoy creative problem-solving in both my academic pursuits and my extracurricular activities. I am experienced in full-stack web development and Python scripting."),r.a.createElement("article",{className:"w-25"})),r.a.createElement("img",{src:"jmlogo.png",className:"pr-2",alt:"mylogo"}),r.a.createElement("br",null),r.a.createElement(C.SocialIcon,{url:"https://instagram.com/j.eff.rey",style:{height:25,width:25},target:"_blank"})," \xa0",r.a.createElement(C.SocialIcon,{url:"https://linkedin.com/in/jeffzma2000",style:{height:25,width:25}})," \xa0",r.a.createElement(C.SocialIcon,{url:"https://medium.com/@jeffreyma",style:{height:25,width:25}})," \xa0"),r.a.createElement("div",{id:"section3",className:"section"},r.a.createElement("div",{className:"container text-white"},r.a.createElement("div",{className:"heading sectionHeader"},"Education"),r.a.createElement("div",{className:"row p-5"},r.a.createElement("div",{className:"text-left col-3"},r.a.createElement("strong",null,"Yale University")," ",r.a.createElement("br",null),"September 2018 - May 2022"),r.a.createElement("div",{className:"text-left col-7 ml-5 border-left"},r.a.createElement("strong",null,"B.S. Computer Science and Mathematics"),r.a.createElement("br",null),"Relevant coursework includes data structures, systems programming, algorithms, linear algebra, analysis, discrete mathematics, theory of statistics, and probability theory."),r.a.createElement("div",{className:"col"})),r.a.createElement("div",{className:"row p-5"},r.a.createElement("div",{className:"text-left col-3"},r.a.createElement("strong",null,"Currently self-learning")," ",r.a.createElement("br",null),"Present"),r.a.createElement("div",{className:"text-left col-7 ml-5 border-left"},r.a.createElement("strong",null,"Various programming languages and frameworks"),r.a.createElement("br",null),"React, Haskell, and Swift"),r.a.createElement("div",{className:"col"})))),r.a.createElement("div",{id:"section4",className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"heading sectionHeader"},"Professional Experiences"),r.a.createElement("div",{className:"row p-5"},r.a.createElement("div",{className:"text-left col-3"},r.a.createElement("strong",null,"dcyphr")," ",r.a.createElement("br",null),"November 2019 - Present"),r.a.createElement("div",{className:"text-left col-7 ml-5 border-left"},r.a.createElement("strong",null,"Founder, CEO, CTO"),r.a.createElement("br",null),"Founded a startup to make scientific literature more readable and accessible. Built a web application in Flask that allows users to browse, request, and upload summaries of scientific articles. Partnered with students and scientists across the world to integrate dcyphr into their workflows. Currently manage a team of 20 employees to generate meaningful content, develop new features for the web application, and expand dcyphr through strategic marketing and partnerships. Currently accepting SAFE investments and grants."),r.a.createElement("div",{className:"col"})),r.a.createElement("div",{className:"row p-5"},r.a.createElement("div",{className:"text-left col-3"},r.a.createElement("strong",null,"Cognitive & Neural Computation Lab at Yale")," ",r.a.createElement("br",null),"September 2019 - Present"),r.a.createElement("div",{className:"text-left col-7 ml-5 border-left"},r.a.createElement("strong",null,"Computer Programmer"),r.a.createElement("br",null),"Scripted and rendered physical scenes using Python and blender. Generated scenes were used for behavioral studies and modeling human event perception. Worked in Julia to model event perception and program neural networks."),r.a.createElement("div",{className:"col"})),r.a.createElement("div",{className:"row p-5"},r.a.createElement("div",{className:"text-left col-3"},r.a.createElement("strong",null,"Regeneron Pharmaceuticals")," ",r.a.createElement("br",null),"May 2017 - September 2018"),r.a.createElement("div",{className:"text-left col-7 ml-5 border-left"},r.a.createElement("strong",null,"Research assistant"),r.a.createElement("br",null),"Designed and executed research experiments including: ",r.a.createElement("br",null)," \xa0\xa01. \xa0Attempt to transform astrocytes into neurons with a viral vector. (2018) ",r.a.createElement("br",null),"\xa0\xa02. \xa0Demonstrate functional protection of hypercholesterolemia through an LDLR variant. (2017)",r.a.createElement("br",null),"\xa0\xa03. \xa0Discover protein-protein interactions between a novel mutation of a protein involved with depression to infer protein behavior. (2016)",r.a.createElement("br",null),r.a.createElement("br",null),"Developed skills in experimental design, scientific communication, PCR, Western blot, Northern blot, co-immunoprecipitation, and immunohistochemistry."),r.a.createElement("div",{className:"col"})))),r.a.createElement("div",{id:"section5",className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"heading sectionHeader pb-5"},"What I'm currently reading"),r.a.createElement("a",{href:"https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060839872/ref=sr_1_2?crid=1VWW84HV1AQWC&dchild=1&keywords=zen+and+the+art+of+motorcycle+maintenance&qid=1590765800&sprefix=zen+and+the+ar%2Caps%2C180&sr=8-2"},r.a.createElement("img",{src:"/book.jpg",className:"pb-4",alt:"book"})))))}}]),a}(r.a.Component),M=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{basename:"".concat("/personal","/")},r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{path:"/personal/",component:P}),r.a.createElement(u.a,{path:"/personal/projects",component:g}),r.a.createElement(u.a,{path:"/personal/articles",component:k}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.62dc78e8.chunk.js.map