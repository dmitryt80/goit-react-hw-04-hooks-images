(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Searchbar_container__5Fa4R",form:"Searchbar_form__1wucm",input:"Searchbar_input__1LOyE",button:"Searchbar_button__3PfGV"}},29:function(e,t,a){e.exports={imageItem:"ImageGalleryItem_imageItem__1163K",image:"ImageGalleryItem_image__3P9M6"}},30:function(e,t,a){e.exports={button:"Button_button__htfHU"}},31:function(e,t,a){e.exports={overlay:"Modal_overlay__75cx7",modal:"Modal_modal__vF36x"}},44:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__WO4bO"}},52:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),o=a.n(r),i=(a(52),a(53),a(16)),s=(a(54),a(8)),u=a(5),l=a(42),m=a.n(l),b=function(e,t,a){var n="".concat("https://pixabay.com/api/","?image_type=photo&orientation=horizontal&q=").concat(a,"&page=").concat(e,"&per_page=").concat(t,"&key=").concat("24796652-91261c2217f863e1b8ad91622");return m.a.get(n).then((function(e){return 200===e.status&&0!==e.data.hits.length?e.data:null}))},j=a(43),f=a.n(j),d=a(13),g=a.n(d),O=a(1);var h=function(e){var t=e.onSetQuery,a=Object(n.useState)(""),c=Object(u.a)(a,2),r=c[0],o=c[1];return Object(O.jsx)("header",{className:g.a.container,children:Object(O.jsxs)("form",{className:g.a.form,onSubmit:function(e){e.preventDefault();var a=r.trim();a&&t(a)},children:[Object(O.jsx)("button",{type:"submit",className:g.a.button,children:Object(O.jsx)(f.a,{className:g.a.icon,style:{width:"90%",height:"90%",fill:"blue"}})}),Object(O.jsx)("input",{className:g.a.input,value:r,type:"text",name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.target.value)}})]})})},p=a(44),x=a.n(p),v=a(29),_=a.n(v);var y=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,c=e.myRef,r=void 0===c?null:c,o=e.onClickImg;return Object(O.jsx)("li",{className:_.a.imageItem,ref:r,onClick:function(e){o(e.target)},children:Object(O.jsx)("img",{src:t,"data-src":a,className:_.a.image,alt:n})})};function w(e){var t=e.itemsImg,a=e.myRef,n=e.onClickImg;return Object(O.jsx)("ul",{className:x.a.imageGallery,children:t&&t.map((function(e,t,c){return Object(O.jsx)(y,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,myRef:t===c.length-12?a:null,onClickImg:n},e.id)}))})}var I=a(30),S=a.n(I);var k,N=function(e){var t=e.onClickMore;return Object(O.jsx)("div",{className:S.a.blockMore,children:Object(O.jsx)("button",{type:"button",className:S.a.button,onClick:t,children:"Load more..."})})},C=a(45),R=a(11),L=a(46),M=a.n(L),E=Object(R.css)(k||(k=Object(C.a)(["\n  display: block;\n  margin: 10px auto;\n"])));var G=function(){return Object(O.jsx)(M.a,{color:"rgb(6, 255, 247)",loading:true,css:E,size:50})},U=a(31),F=a.n(U),P=document.querySelector("#root-modal");function T(e){var t=e.item,a=e.onCloseModal,c=function(e){"Escape"===e.code&&a()};Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}),[c]);var o=t.src,i=t.tags;return Object(r.createPortal)(Object(O.jsx)("div",{className:F.a.overlay,onClick:function(e){e.target===e.currentTarget&&a()},children:Object(O.jsx)("div",{className:F.a.modal,children:Object(O.jsx)("img",{src:o,alt:i})})}),P)}function q(){var e=Object(n.useRef)(null),t=Object(n.useState)(12),a=Object(u.a)(t,1)[0],c=Object(n.useState)(1),r=Object(u.a)(c,2),o=r[0],l=r[1],m=Object(n.useState)([]),j=Object(u.a)(m,2),f=j[0],d=j[1],g=Object(n.useState)(!1),p=Object(u.a)(g,2),x=p[0],v=p[1],_=Object(n.useState)(!1),y=Object(u.a)(_,2),I=y[0],S=y[1],k=Object(n.useState)(""),C=Object(u.a)(k,2),R=C[0],L=C[1],M=Object(n.useState)(null),E=Object(u.a)(M,2),U=E[0],F=E[1],P=function(){d([]),l(1),v(!0),S(!1)};return Object(n.useEffect)((function(){I&&R&&b(o,a,R).then((function(t){if(!t)return P(),void i.b.warn("No such results!");S(!1),d([].concat(Object(s.a)(f),Object(s.a)(t.hits))),v(o+1>=Math.trunc(t.totalHits/a)+1),e.current&&function(e){var t=e.current.offsetTop-80;window.scrollTo({top:t,behavior:"smooth"})}(e)})).catch((function(e){P(),i.b.error(e.message)}))}),[I,R,o,a,f]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h,{onSetQuery:function(e){d([]),l(1),L(e),S("true")}}),Object(O.jsx)(w,{itemsImg:f,myRef:e,onClickImg:function(e){F({src:e.dataset.src,tags:e.alt})}}),I&&Object(O.jsx)(G,{}),R&&!x&&!I&&Object(O.jsx)(N,{onClickMore:function(){l((function(e){return e+1})),S(!0)}}),U&&Object(O.jsx)(T,{item:U,onCloseModal:function(){F(null)}})]})}var z=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(q,{}),Object(O.jsx)(i.a,{theme:"dark"})]})};o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.db72744e.chunk.js.map