(this.webpackJsonpdemosite=this.webpackJsonpdemosite||[]).push([[0],{66:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(34),a=n.n(s),o=n(20),i=n(35),u=n(4),l=n.n(u),j=n(10),d=n(15),b=n(16),h=n(19),p=n(18),x=n(68),O=n(69),f=n(12),m=n.n(f),v=n(0),y="https://jsonplaceholder.typicode.com/posts",g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).componentDidMount=function(){return e.getPost()},e.getPost=Object(j.a)(l.a.mark((function t(){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get(y);case 3:n=t.sent,r=n.data,e.setState({posts:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.handle=function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState(Object(i.a)({},n.target.name,n.target.value));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.submit=function(){var t=Object(j.a)(l.a.mark((function t(n){var r,c,s,a,i,u,j,d;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(n.target),n.preventDefault(),r=0,a=0;case 4:if(!(a<e.state.posts.length)){t.next=13;break}if(e.state.posts[a].id!=e.myRef1.current.value){t.next=10;break}return r=1,c=e.state.posts[a].id,s=a,t.abrupt("break",13);case 10:++a,t.next=4;break;case 13:if(0!==r){t.next=29;break}return i={userId:e.myRef1.current.value,title:e.myRef2.current.value,body:e.myRef3.current.value},console.log("if"),t.prev=16,t.next=19,m.a.post("".concat(y),i);case 19:u=[].concat(Object(o.a)(e.state.posts),[i]),console.log("try"),e.setState({posts:u}),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(16),console.log(t.t0);case 27:t.next=45;break;case 29:return console.log("else"),j={userId:e.myRef1.current.value,title:e.myRef2.current.value,body:e.myRef3.current.value},console.log("inside update"),t.prev=32,t.next=35,m.a.put("".concat(y,"/").concat(c),j);case 35:e.state.posts[s].userId=j.userId,e.state.posts[s].title=j.title,e.state.posts[s].body=j.body,d=Object(o.a)(e.state.posts),e.setState({posts:d}),t.next=45;break;case 42:t.prev=42,t.t1=t.catch(32),console.log(t.t1);case 45:case"end":return t.stop()}}),t,null,[[16,24],[32,42]])})));return function(e){return t.apply(this,arguments)}}(),e.comments=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(y,"/").concat(t,"/comments"));case 2:for(n=e.sent,r=n.data,c=[],s=0;s<r.length;++s)c.push(r[s].postId,r[s].id,r[s].name,r[s].email,r[s].body);alert(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.view=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(y,"/").concat(t));case 2:n=e.sent,r=n.data,console.log(r),alert("userId:  "+r.id+"   Title:  "+r.title+"   Body:  "+r.body);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.delete=function(){var t=Object(j.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.delete("".concat(y,"/").concat(n));case 3:r=(r=Object(o.a)(e.state.posts)).filter((function(e){return e.id!==n})),e.setState({posts:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),e.update=function(){var t=Object(j.a)(l.a.mark((function t(n,r,c){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.myRef1.current.value=n,e.myRef2.current.value=r,e.myRef3.current.value=c;case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),e.myRef1=c.a.createRef(),e.myRef2=c.a.createRef(),e.myRef3=c.a.createRef(),e.state={posts:[],userId:"",title:"",body:""},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:this.submit,children:[Object(v.jsxs)("label",{children:[" userId ",Object(v.jsx)("input",{ref:this.myRef1,type:"number",value:this.state.userId.value,name:"userId",onChange:this.handle})," "]})," ",Object(v.jsxs)("label",{children:[" Title ",Object(v.jsx)("input",{ref:this.myRef2,type:"text",value:this.state.title.value,name:"title",onChange:this.handle})," "]})," ",Object(v.jsxs)("label",{children:[" Body ",Object(v.jsx)("input",{ref:this.myRef3,type:"text",value:this.state.body.value,name:"body",onChange:this.handle})," "]})," ",Object(v.jsx)("input",{type:"submit",value:"Submit"})]})," ",Object(v.jsxs)(x.a,{children:[Object(v.jsxs)("thead",{children:[Object(v.jsx)("th",{children:" userId "})," ",Object(v.jsx)("th",{children:" Id "})," ",Object(v.jsx)("th",{children:" Title "})," ",Object(v.jsx)("th",{children:" Body "})," ",Object(v.jsx)("th",{children:" Action "})," "]})," ",Object(v.jsxs)("tbody",{children:[" ",this.state.posts.map((function(t){var n=t.userId,r=t.id,c=t.title,s=t.body;return Object(v.jsxs)("tr",{children:[Object(v.jsxs)("td",{children:[" ",n," "]})," ",Object(v.jsxs)("td",{children:[" ",r," "]})," ",Object(v.jsxs)("td",{children:[" ",c," "]})," ",Object(v.jsxs)("td",{children:[" ",s," "]})," ",Object(v.jsxs)("td",{children:[" ",Object(v.jsx)(O.a,{onClick:function(){return e.delete(r)},children:" Delete "})]}),Object(v.jsxs)("td",{children:[" ",Object(v.jsx)(O.a,{onClick:function(){return e.view(r)},children:" View User "})]}),Object(v.jsxs)("td",{children:[" ",Object(v.jsx)(O.a,{onClick:function(){return e.comments(r)},children:" View Comments "})]}),Object(v.jsxs)("td",{children:[" ",Object(v.jsx)(O.a,{onClick:function(){return e.update(r,c,s)},children:" Update "})]})]},r)}))," "]})," "]})," "]})}}]),n}(r.Component),k=n(11),w=n(3);var R=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:"This website is to display User details"}),Object(v.jsx)("h3",{children:"Simple CRUD APP"}),Object(v.jsx)("p",{children:"Posts will redirect to all available posts"}),Object(v.jsx)("p",{children:"Enter New Id to add new data and existing ID to update data"})]})};var I=function(){return Object(v.jsx)("h1",{children:"Home page"})};var C=function(){return Object(v.jsx)("p",{children:"This page publish all post details."})};var F=function(){var e=Object(w.f)();return console.log(Object(w.f)(),"here"),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("button",{onClick:e.goBack,children:"Backward"}),Object(v.jsx)("button",{onClick:e.goForward,children:"Forward"})]})},P=Object(r.createContext)({str:"Hello, Welcome to public posts"}),S=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.call(this)}return Object(b.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{children:["name: ",this.props.name]}),Object(v.jsxs)("p",{children:["age: ",this.props.age]})]})}}]),n}(c.a.Component);var B=function(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(P.Consumer,{children:function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("p",{children:e.str})})}}),Object(v.jsxs)(k.a,{children:[Object(v.jsx)(F,{})," ",Object(v.jsx)("br",{}),Object(v.jsx)(k.b,{to:"/",children:"Home"}),Object(v.jsx)(k.b,{to:"/about",children:"About"}),Object(v.jsx)(k.b,{to:"/posts",children:"Posts"}),Object(v.jsx)(k.b,{to:"/props",children:"Prop"}),Object(v.jsxs)(w.c,{children:[Object(v.jsx)(w.a,{path:"/about",children:Object(v.jsx)(R,{})}),Object(v.jsx)(w.a,{exact:!0,path:"/",render:function(){return Object(v.jsx)(I,{})}}),Object(v.jsxs)(w.a,{path:"/posts",children:[Object(v.jsx)(C,{}),Object(v.jsx)(g,{})]}),Object(v.jsx)(w.a,{path:"/props",children:Object(v.jsx)(S,{name:"nikhil",age:"25"})}),Object(v.jsx)(w.a,{path:"*",children:"404 Page"})]})]})]})};a.a.render(Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(B,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.9c98c210.chunk.js.map