(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var r=n(6),a=n.n(r),o=n(22),c=n(45),i=n(14),u=n(44),s=n(15);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f={profile:null,newPostText:"gfdgdfg",posts:[{id:1,text_post:"My first post",likes:"25",span_date:"22.10",comments:"10",divi:"12"},{id:2,text_post:"My second post",likes:"10",span_date:"21.10",comments:"7",divi:"5"}]},d=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.getUser(e);case 2:r=t.sent,n(Object(u.d)(r));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.b:return p({},e,{profile:t.data});case u.a:var n={id:3,text_post:e.ProfilePage.newPostText,likes:0,span_date:"12.00",comments:0,divi:0};return p({},e,{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case u.c:return{ProfilePage:p({},e.ProfilePage,{newPostText:t.newText})};default:return p({},e)}}},112:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var r="RECENTCOMMENTS::GET_STATE",a=function(){return{type:r}}},113:function(e,t,n){"use strict";var r=n(6),a=n.n(r),o=n(22),c=n(45),i=n(14),u=n(15);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var l=function(e,t,n,r){return e.map(function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},r):e})};function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}n.d(t,"f",function(){return E}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return b}),n.d(t,"h",function(){return g}),n.d(t,"g",function(){return y}),n.d(t,"c",function(){return j}),n.d(t,"b",function(){return S}),n.d(t,"i",function(){return T});var d="RECENTCOMMENTS::FOLLOW",O={users:[],pageSize:30,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},E=function(e){return{type:"RECENTCOMMENTS::SET_USERS",users:e}},m=function(e){return{type:"RECENTCOMMENTS::SET_CURRENT_PAGE",currentPage:e}},b=function(e){return{type:"RECENTCOMMENTS::SET_TOTAL_USERS_COUNT",count:e}},g=function(e){return{type:"RECENTCOMMENTS::SET_TOGGLE_IS_FETCHING",isFetching:e}},h=function(e){return{type:d,userId:e}},v=function(e){return{type:"RECENTCOMMENTS::UNFOLLOW",userId:e}},y=function(e,t){return{type:"RECENTCOMMENTS::TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},j=function(e,t){return function(){var n=Object(o.a)(a.a.mark(function n(r){var o;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(m(e)),r(g(!0)),n.next=4,u.d.getUsers(e,t);case 4:o=n.sent,r(g(!1)),r(E(o.items)),r(b(o.totalCount));case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},w=function(){var e=Object(o.a)(a.a.mark(function e(t,n,r,o){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(y(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(o(n)),t(y(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:w(n,e,u.b.followUsersApi.bind(u.b),h);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},T=function(e){return function(t){w(t,e,u.b.unFollowUserApi.bind(u.b),v)}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECENTCOMMENTS::SET_USERS":return f({},e,{users:Object(c.a)(t.users)});case"RECENTCOMMENTS::SET_CURRENT_PAGE":return f({},e,{currentPage:t.currentPage});case"RECENTCOMMENTS::SET_TOTAL_USERS_COUNT":return f({},e,{totalUsersCount:t.count});case"RECENTCOMMENTS::SET_TOGGLE_IS_FETCHING":return f({},e,{isFetching:t.isFetching});case d:return f({},e,{users:l(e.users,t.userId,"id",{followed:!0})});case"RECENTCOMMENTS::UNFOLLOW":return f({},e,{users:l(e.users,t.userId,"id",{followed:!1})});case"RECENTCOMMENTS::TOGGLE_IS_FOLLOWING_PROGRESS":return f({},e,{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return f({},e)}}},114:function(e,t,n){e.exports={header:"Header_header__3XTvU"}},119:function(e,t,n){e.exports=n.p+"static/media/loading-loader-svgrepo-com.19bbd58b.svg"},12:function(e,t,n){e.exports={nav:"Navbar_nav__2mUfT",item:"Navbar_item__8s8x8",activeLink:"Navbar_activeLink__3uQzR"}},123:function(e,t,n){e.exports=n(257)},128:function(e,t,n){},129:function(e,t,n){},15:function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return u});var r=n(116),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"935e885f-a427-45a0-be88-a4710c01760f"}}),o={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})}},c={followUsersApi:function(e){return a.post("follow/".concat(e),{}).then(function(e){return e.data})},unFollowUserApi:function(e){return a.delete("follow/".concat(e)).then(function(e){return e.data})}},i={getUser:function(){return a.get("auth/me")},login:function(e,t){return a.post("auth/login",{email:e,password:t})},logout:function(){return a.delete("auth/login")}},u={getUser:function(e){return a.get("profile/"+e).then(function(e){return e.data})}}},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},257:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(55),c=n.n(o),i=(n(128),n(10));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(24),s=n(25),l=n(27),p=n(26),f=n(28),d=(n(129),n(114)),O=n.n(d),E=n(8),m=n(6),b=n.n(m),g=n(22),h=n(14),v=n(15);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w={error:null,isAuth:!1,userId:null,email:null,login:null},S=function(e){return{type:"SUCCESS_ERROR",data:e}},T=function(e,t,n,r){return{type:"SET_AUTH_USER_DATA",payloade:{userId:e,email:t,login:n,isAuth:r}}},_=function(){return function(){var e=Object(g.a)(b.a.mark(function e(t){var n,r,a,o,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.getUser();case 2:0===(n=e.sent).data.resultCode?(r=n.data.data,a=r.id,o=r.login,c=r.email,t(T(a,c,o,!0))):t({type:"SET_ERROR_AUTH_USER_DATA"});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS_LOGIN":return j({},e,{userId:t.data.userId,isAuth:!0});case"SUCCESS_LOG_OUT":return j({},e,{isAuth:!1});case"SUCCESS_ERROR":return j({},e,{isAuth:t.data.isAuth,error:t.data.messages});case"SET_AUTH_USER_DATA":return j({},e,{isAuth:t.payloade.isAuth,userId:t.payloade.userId,email:t.payloade.email,login:t.payloade.login});case"SET_ERROR_AUTH_USER_DATA":return j({},e,{isAuth:!1});default:return j({},e)}},P=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getUser()}},{key:"render",value:function(){return a.a.createElement("header",{className:O.a.header},a.a.createElement("img",{src:"http://www.bsatu.by/sites/default/files/images/logo.gif"}),this.props.isAuth?a.a.createElement("div",null,a.a.createElement("span",null,this.props.login)," ",a.a.createElement(i.b,{to:"/logout"},"LogOut")):a.a.createElement("div",null,a.a.createElement(i.b,{to:"/login"},"Login")))}}]),t}(r.Component),N=Object(E.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{getUser:_})(P),R=n(12),U=n.n(R),A=function(){return a.a.createElement("nav",{className:U.a.nav},a.a.createElement("div",{className:U.a.item},a.a.createElement(i.b,{to:"/profile",activeClassName:U.a.activeLink},"Profile")),a.a.createElement("div",{className:U.a.item},a.a.createElement(i.b,{activeClassName:U.a.activeLink,to:"/dialogs"},"Messages")),a.a.createElement("div",{className:U.a.item},a.a.createElement(i.b,{activeClassName:U.a.activeLink,to:"/users"},"Users")),a.a.createElement("div",{className:U.a.item},a.a.createElement(i.b,{activeClassName:U.a.activeLink,to:"/news"},"News")),a.a.createElement("div",{className:U.a.item},a.a.createElement(i.b,{activeClassName:U.a.activeLink,to:"/music"},"Music")),a.a.createElement("div",{className:U.a.item},a.a.createElement(i.b,{activeClassName:U.a.activeLink,to:"/settings"},"Settings")))},k=n(31),I=(n(156),function(e){return a.a.createElement("div",null,"News")}),L=(n(157),function(e){return a.a.createElement("div",null,"Music")}),M=(n(158),function(e){return a.a.createElement("div",null,"Settings")}),D=n(259),x=n(258),G=function(e){if(!e)return"Field is required"},F=n(121),z=n(75),W=n.n(z),H=function(e){var t=e.input,n=e.meta,r=Object(F.a)(e,["input","meta"]),o=n.touched&&n.error;return a.a.createElement("div",{className:W.a.formControl+" "+(o?W.a.error:" ")},a.a.createElement("div",null,a.a.createElement("input",Object.assign({},t,r))),o&&a.a.createElement("span",null,n.error))},J=Object(x.a)({form:"login"})(function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit},a.a.createElement("div",null,a.a.createElement(D.a,{placeholder:"Login",validate:[G],name:"email",component:H})),a.a.createElement("div",null,a.a.createElement(D.a,{placeholder:"Password",validate:[G],name:"password",type:"password",component:H})),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}),B=Object(E.b)(function(e){return{isAuth:e.auth.isAuth,error:e.auth.error}},{logIn:function(e,t){return function(){var n=Object(g.a)(b.a.mark(function n(r){var a;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.login(e,t);case 2:0===(a=n.sent).data.resultCode?r({type:"SUCCESS_LOGIN",data:a.data.data}):r(S(a));case 4:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(function(e){return e.isAuth?a.a.createElement(k.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login to ..."),a.a.createElement(J,{onSubmit:function(t){e.logIn(t.email,t.password)}}),e.error?a.a.createElement("h2",null,e.error):null)}),X=n(5),q=n(78),Q=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"logOut",value:function(){this.props.logOut()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("button",{onClick:this.logOut.bind(this)},"LogOut"))}}]),t}(r.Component),Z=Object(X.d)(Object(E.b)(null,{logOut:function(){return function(){var e=Object(g.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.logout();case 2:0===e.sent.data.resultCode&&t({type:"SUCCESS_LOG_OUT"});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}}),q.a)(Q);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Y={initialized:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return V({},e,{initialized:!0});default:return V({},e)}},ee=n(79),te=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null," Loading ...")},a.a.createElement(e,t))}},ne=a.a.lazy(function(){return n.e(3).then(n.bind(null,272))}),re=a.a.lazy(function(){return n.e(5).then(n.bind(null,273))}),ae=a.a.lazy(function(){return n.e(4).then(n.bind(null,271))}),oe=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initealezed?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(N,null),a.a.createElement(A,null),a.a.createElement("div",null,a.a.createElement(k.b,{path:"/profile/:userId?",render:te(ne)}),a.a.createElement(k.b,{path:"/dialogs",render:te(re)}),a.a.createElement(k.b,{path:"/users",render:te(ae)}),a.a.createElement(k.b,{path:"/news",component:I}),a.a.createElement(k.b,{path:"/music",component:L}),a.a.createElement(k.b,{path:"/settings",component:M}),a.a.createElement(k.b,{path:"/login",component:B}),a.a.createElement(k.b,{path:"/logout",component:Z}))):a.a.createElement(ee.a,null)}}]),t}(r.Component),ce=Object(X.d)(k.e,Object(E.b)(function(e){return{initealezed:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(_());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(oe),ie=n(111),ue=n(120),se=n(112);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var fe={DialogsPage:{dialogUser:[{name:"Diana Jameson",id:"1",message:["Great, I\u2019ll see you tomorrow!"],avatar:"https://pp.userapi.com/c844721/v844721732/1fe9d3/dF70fzsnBWk.jpg"},{name:"Elaine Dreyfuss",id:"2",avatar:"https://sun1.dataix-by-minsk.userapi.com/c845322/v845322845/1984b6/4Cqgddgr7xQ.jpg?ava=1"},{name:"James Spiegel",id:"3",avatar:"https://pp.userapi.com/c849132/v849132702/18ce7c/TLCCJkpJbLk.jpg?ava=1"}]}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe;switch((arguments.length>1?arguments[1]:void 0).type){case se.a:default:return pe({},e)}},Oe=n(113),Ee=n(260),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,be=Object(X.e)(Object(X.c)({auth:C,profilePage:ie.a,dialogues:de,usersPage:Oe.a,form:Ee.a,app:$}),me(Object(X.a)(ue.a)));c.a.render(a.a.createElement(E.a,{store:be},a.a.createElement(i.a,null,a.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return c});var r="RECENTCOMMENTS::ADD_POST",a="RECENTCOMMENTS::UPDATE_NEW_POST_TEXT",o="RECENTCOMMENTS::SET_USER_PROFILE",c=function(e){return{type:o,data:e}}},75:function(e,t,n){e.exports={formControl:"FormControls_formControl__3BlnS",error:"FormControls_error__32foS"}},78:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(24),a=n(25),o=n(27),c=n(26),i=n(28),u=n(0),s=n.n(u),l=n(31),p=n(8),f=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var t=function(t){function n(){return Object(r.a)(this,n),Object(o.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(i.a)(n,t),Object(a.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(l.a,{to:"/login"})}}]),n}(s.a.Component);return Object(p.b)(f)(t)}},79:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(119),c=n.n(o);t.a=function(){return a.a.createElement("div",{style:{backgroundColor:"white",width:"100px",height:"100px"}},a.a.createElement("img",{src:c.a}))}}},[[123,1,2]]]);
//# sourceMappingURL=main.a017de04.chunk.js.map