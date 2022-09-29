"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[260,887,76],{2225:function(n,t,e){e.d(t,{_:function(){return p}});var r,i,o=e(168),a=e(7689),c=e(6731),s=e(6036),u=e(6444),d=e(184),p=function(){var n,t,e=null!==(n=null===(t=(0,a.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";return(0,d.jsx)(l,{children:(0,d.jsxs)(f,{to:e,children:[(0,d.jsx)(s.ly8,{})," Back to the Previous page"]})})},l=u.ZP.div(r||(r=(0,o.Z)(["\n  margin-bottom: 25px;\n  font-size: 18px;\n  font-weight: 700;\n  text-align: center;\n"]))),f=(0,u.ZP)(c.rU)(i||(i=(0,o.Z)(["\n  border-bottom: 4px double black;\n  &:hover {\n    background-color: #66d0d0;\n    border-bottom: 4px double white;\n  }\n"])))},3069:function(n,t,e){e.d(t,{a:function(){return s}});var r,i=e(8402),o=e(168),a=e(6444).ZP.div(r||(r=(0,o.Z)(["\n  text-align: center;\n"]))),c=e(184),s=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(i.s5,{strokeColor:"grey",strokeWidth:"4",width:"80",animationDuration:"1.2"})})}},3887:function(n,t,e){e.r(t),e.d(t,{TextNotInfo:function(){return s},WrapperMoviePage:function(){return c}});var r,i,o=e(168),a=e(6444),c=a.ZP.main(r||(r=(0,o.Z)(["\n  width: 100vw;\n  height: 100vh;\n  padding: 20px;\n"]))),s=a.ZP.p(i||(i=(0,o.Z)(["\n  text-align: center;\n  font-size: 18px;\n"])))},7076:function(n,t,e){e.r(t),e.d(t,{List:function(){return p},ListEl:function(){return l},NavStyled:function(){return f},WrapperList:function(){return d}});var r,i,o,a,c=e(168),s=e(6444),u=e(6731),d=s.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n"]))),p=s.ZP.ul(i||(i=(0,c.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n  padding-top: 15px;\n  margin: 0 auto;\n  text-align: center;\n"]))),l=s.ZP.li(o||(o=(0,c.Z)(["\n  text-align: center;\n  margin-top: 10px;\n  margin-right: 30px;\n  font-size: 16px;\n  font-weight: 700;\n  color: black;\n  &:last-child {\n    margin-right: 0;\n  }\n"]))),f=(0,s.ZP)(u.OL)(a||(a=(0,c.Z)(["\n  text-decoration: none;\n  color: black;\n  border-bottom: 3px double black;\n  padding-left: 5px;\n  padding-right: 5px;\n  &:hover {\n    color: #66d0d0;\n    border-bottom: 3px double #66d0d0;\n  }\n\n  &.active {\n    color: white;\n    border-bottom: 3px double white;\n    background-color: #004747;\n\n    &:hover {\n      color: #66d0d0;\n      border-bottom: 3px double #66d0d0;\n    }\n  }\n"])))},3573:function(n,t,e){e.r(t),e.d(t,{MoviesSinglePage:function(){return z}});var r,i,o,a,c,s,u=e(7689),d=e.p+"static/media/imageComingSoon.81409fe3f14f1744716f.jpg",p=e(168),l=e(6444),f=l.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  border-bottom: 6px double #004747;\n  padding-bottom: 10px;\n"]))),v=l.ZP.div(i||(i=(0,p.Z)(["\n  max-width: 600px;\n"]))),x=l.ZP.img(o||(o=(0,p.Z)(["\n  object-fit: cover;\n  height: auto;\n  border-radius: 5px;\n  max-width: 250px;\n  margin-right: 15px;\n"]))),h=l.ZP.p(a||(a=(0,p.Z)(["\n  margin-top: 10px;\n"]))),m=l.ZP.h4(c||(c=(0,p.Z)(["\n  margin-top: 10px;\n  &:first-child {\n    margin-top: 0;\n  }\n"]))),g=l.ZP.span(s||(s=(0,p.Z)(["\n  font-size: 16px;\n  font-weight: 400;\n  padding-left: 10px;\n"]))),Z=e(184),b=function(n){var t=n.movie,e=Math.ceil(10*t.vote_average),r=t.poster_path,i=t.title,o=t.overview,a=t.genres;return(0,Z.jsxs)(f,{children:[r?(0,Z.jsx)(x,{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:i}):(0,Z.jsx)(x,{src:d,alt:i}),(0,Z.jsxs)(v,{children:[(0,Z.jsxs)(m,{children:["Movie title: ",i]}),(0,Z.jsxs)(h,{children:["User rating: ",e," % "]}),(0,Z.jsx)(m,{children:"Overview:"}),(0,Z.jsx)("p",{children:o}),(0,Z.jsxs)(m,{children:["Genres:",a&&a.map((function(n){var t=n.id,e=n.name;return(0,Z.jsxs)(g,{children:[e," |"]},t)}))]})]})]})},j=e(3069),w=e(4165),k=e(5861),y=e(885),P=e(2791),_=e(8671),L=e(2225),S=e(2849),C=e(3887),F=e(7076),z=function(){var n,t,e=function(){var n=(0,u.UO)().movieId,t=(0,P.useState)([]),e=(0,y.Z)(t,2),r=e[0],i=e[1],o=(0,P.useState)(null),a=(0,y.Z)(o,2),c=a[0],s=a[1],d=(0,P.useState)(!1),p=(0,y.Z)(d,2),l=p[0],f=p[1];return(0,P.useEffect)((function(){var t=function(){var t=(0,k.Z)((0,w.Z)().mark((function t(){var e;return(0,w.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.prev=1,t.next=4,(0,_.FL)(n);case 4:e=t.sent,i(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s(t.t0);case 11:return t.prev=11,f(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),{movies:r,loading:l,error:c,movieId:n}}(),r=e.movies,i=e.error,o=e.loading,a=e.movieId,c=(0,u.TH)();return(0,Z.jsxs)(C.WrapperMoviePage,{children:[(0,Z.jsx)(Z.Fragment,{children:!i&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(L._,{}),o&&(0,Z.jsx)(j.a,{}),(0,Z.jsx)(b,{movie:r})]})}),(0,Z.jsx)(Z.Fragment,{children:i?(0,Z.jsx)(S.NotFoundPage,{}):(0,Z.jsxs)(F.List,{children:["Additional Information:",(0,Z.jsxs)(F.WrapperList,{children:[(0,Z.jsx)(F.ListEl,{children:(0,Z.jsx)(F.NavStyled,{to:"/movies/".concat(a,"/cast"),state:{from:null===c||void 0===c||null===(n=c.state)||void 0===n?void 0:n.from},children:"Cast"})}),(0,Z.jsx)(F.ListEl,{children:(0,Z.jsx)(F.NavStyled,{to:"/movies/".concat(a,"/reviews"),state:{from:null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from},children:"Reviews"})})]})]})}),(0,Z.jsx)(u.j3,{})]})}},8671:function(n,t,e){e.d(t,{Cx:function(){return p},Df:function(){return s},FL:function(){return d},V0:function(){return u},sR:function(){return l}});var r=e(4165),i=e(5861),o=e(4569),a=e.n(o),c="833791a5e754a1f0443be5fc62646bdb";a().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("search/movie?api_key=".concat(c,"&query=").concat(t,"&include_adult=false"));case 2:return e=n.sent,i=e.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("movie/".concat(t,"?api_key=").concat(c));case 2:return e=n.sent,i=e.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("movie/".concat(t,"/credits?api_key=").concat(c));case 2:return e=n.sent,i=e.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return e=n.sent,i=e.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=260.b2e13222.chunk.js.map