(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{261:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(262),i=n.n(o),s=n(263),l=n.n(s);t.a=function(e){var t=e.small;return r.a.createElement("div",{className:i.a.userPhoto},r.a.createElement("img",{src:null===t?l.a:t}))}},262:function(e,t,n){e.exports={userPhoto:"imgPhoto_userPhoto__37pX9"}},263:function(e,t,n){e.exports=n.p+"static/media/pngtree-users-vector-icon-png-image_3725294.2ac944bc.jpg"},264:function(e,t,n){e.exports={content:"Profile_content__pYrdU",posts:"Profile_posts__3NX2R"}},265:function(e,t,n){e.exports={content:"ProfileInfo_content__2EWWF",mainImg:"ProfileInfo_mainImg__3SQLf",userInfo:"ProfileInfo_userInfo__igeEP"}},272:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(25),o=n(27),i=n(26),s=n(28),l=n(0),c=n.n(l),u=n(8),p=n(264),f=n.n(p),m=n(265),d=n.n(m),_=n(79),v=n(261),h=function(e){return e.profile?c.a.createElement("div",{className:d.a.mainImg},c.a.createElement("div",{className:d.a.userInfo},c.a.createElement(v.a,{small:e.profile.photos.small}),c.a.createElement("div",null,e.profile.fullName),c.a.createElement("div",null,e.profile.aboutMe))):c.a.createElement(_.a,null)},E=function(e){return c.a.createElement("div",{className:f.a.content},c.a.createElement(h,{profile:e.profile}),c.a.createElement("div",{className:f.a.posts},c.a.createElement("div",null),c.a.createElement("div",null)))},b=n(31),g=n(111),I=n(78),P=n(5),j=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;void 0===e&&(e=this.props.userId),this.props.getUserProfile(e)}},{key:"render",value:function(){return c.a.createElement(E,Object.assign({},this.props,{profile:this.props.profile}))}}]),t}(c.a.Component);t.default=Object(P.d)(Object(u.b)(function(e){return{profile:e.profilePage.profile,userId:e.auth.userId}},{getUserProfile:g.b}),b.e,I.a)(j)}}]);
//# sourceMappingURL=3.bf65d7e7.chunk.js.map