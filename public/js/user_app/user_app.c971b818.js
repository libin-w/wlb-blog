webpackJsonp([1],{"+ZTG":function(t,e){},"+qWx":function(t,e){t.exports=vendor},"/WS8":function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,"\nbody {\n  margin: 0 0px;\n}\na {\n  text-decoration: none;\n}\n/* @import '../../../asset/css/global.css'; */\n","",{version:3,sources:["/Users/libin/workspace/MySpace/wlb-blog/app/web/component/layout/show_app/main.vue"],names:[],mappings:";AAAA;EACE,cAAc;CACf;AACD;EACE,sBAAsB;CACvB;AACD,8CAA8C",file:"main.vue",sourcesContent:["body {\n  margin: 0 0px;\n}\na {\n  text-decoration: none;\n}\n/* @import '../../../asset/css/global.css'; */\n"],sourceRoot:""}])},D6jI:function(t,e,n){var a=n("/WS8");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("po5z")("d0245d8a",a,!1,{})},HwM9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("9JMe"),i=n("7+uW"),s=n("NYxO"),r=n("mtWM"),o=n.n(r);i.default.use(s.default);var c,l={FETCH_ARTICLE_LIST:function(t){var e=t.commit;t.dispatch;return t.state.articleList.length?Promise.resolve():o.a.get("/api/article/list").then(function(t){var n=t.data.list;return e("SET_ARTICLE_LIST",n),n})},FETCH_ARTICLE_DETAIL:function(t,e){var n=t.commit,a=(t.dispatch,t.state),i=e.id;return a.article.id!=i?o.a.get("http://127.0.0.1:7001/api/article/"+i).then(function(t){var e=t.data;n("SET_ARTICLE_DETAIL",e)}):Promise.resolve()}},u={};function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=(p(c={},"SET_ARTICLE_LIST",function(t,e){t.articleList=e}),p(c,"SET_ARTICLE_DETAIL",function(t,e){t.article=e}),c);i.default.use(s.default);var v=new s.default.Store({state:{articleList:[],article:{}},actions:l,getters:u,mutations:d}),f=n("/ocq"),_={computed:{isLoading:function(){return!1},articleList:function(){return this.$store.state.articleList}},preFetch:function(t){t.state;var e=t.dispatch;t.commit;return Promise.all([e("FETCH_ARTICLE_LIST")])},beforeMount:function(){return Promise.all([this.$store.dispatch("FETCH_ARTICLE_LIST")])}},m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"font-size":"24px","text-align":"center"}},[a("div",{staticClass:"container smart-container"},[a("div",{staticClass:"row row-offcanvas row-offcanvas-right"},[a("div",{staticClass:"col-xs-12 col-sm-9"},[a("ul",{staticClass:"smart-artiles",attrs:{id:"articleList"}},t._l(t.articleList,function(e){return a("li",{key:e.id},[a("div",{staticClass:"point"},[t._v("+"+t._s(e.hits))]),t._v(" "),a("div",{staticClass:"card"},[a("h2",[a("router-link",{staticClass:"nav-item-a",attrs:{to:"/detail/"+e.id}},[t._v(t._s(e.title))])],1),t._v(" "),a("div",[a("ul",{staticClass:"actions"},[a("li",[a("time",{staticClass:"timeago"},[t._v(t._s(e.moduleName))])]),t._v(" "),t._m(0,!0),t._v(" "),a("li",[a("a",{attrs:{href:e.url,target:"_blank"}},[t._v("原文")])]),t._v(" "),a("li",[a("span",{staticClass:"timeago"},[t._v(t._s(e.summary))])]),t._v(" "),t._m(1,!0)])])])])})),t._v(" "),t.isLoading?a("div",{staticClass:"smart-pager",attrs:{id:"pagerBottom"}},[a("img",{attrs:{src:n("X+Kj")}})]):t._e()])])])])};m._withStripped=!0;var h={render:m,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"tauthor"},[e("a",{staticClass:"get",attrs:{href:"#",target:"_blank"}},[this._v("Sky")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",{staticClass:"timeago"})])}]},C=h;var w=n("VU/8")(_,C,!1,null,null,null);w.options.__file="app/web/component/app/list.vue";var g=w.exports;n("mSeI");i.default.use(f.default);var b=new f.default({mode:"history",base:"/show/",routes:[{path:"/",component:g},{path:"/list",component:g},{path:"/detail/:id",component:function(){return new Promise(function(t){t()}).then(n.bind(null,"mSeI"))}}]}),E=function(){var t=this.$createElement,e=this._self._c||t;return e("show-app-layout",[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)};E._withStripped=!0;var L={render:E,staticRenderFns:[]},y=L;var A=n("VU/8")({computed:{},mounted:function(){}},y,!1,null,null,null);A.options.__file="app/web/page/user_app/user_app.vue";var T=A.exports,S=n("wX9c"),x={data:function(){return{selectedMenu:"/app"}},computed:{},mounted:function(){this.selectedMenu=window.location.pathname.toLowerCase().replace(/\/$/,"")}},I=function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("div",{staticClass:"container"},[this._m(0),this._v(" "),e("ul",{staticClass:"nav"},[e("li",{staticClass:"nav-item"},[e("a",{class:{active:"/"===this.selectedMenu},attrs:{href:"/"}},[this._v("Single-Page")])])])])])};I._withStripped=!0;var M={render:I,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("a",{staticClass:"router-link-active",attrs:{href:""}},[this._v("Egg + Vue")])])}]},R=M;var $=!1;var k=n("VU/8")(x,R,!1,function(t){$||n("+ZTG")},null,null);k.options.__file="app/web/component/layout/show_app/header/header.vue";var P=k.exports,F=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("div",{staticClass:"page-container page-component"},[this._t("content")],2)])};F._withStripped=!0;var j={render:F,staticRenderFns:[]},H=j;var O=!1;var U=n("VU/8")({name:"v-content",data:function(){return{}},components:{},mounted:function(){}},H,!1,function(t){O||n("oiPM")},null,null);U.options.__file="app/web/component/layout/show_app/content/content.vue";var D={components:{LayoutHeader:P,LayoutContent:U.exports}},V=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("LayoutHeader"),this._v(" "),e("LayoutContent",[e("div",{attrs:{slot:"content"},slot:"content"},[this._t("main")],2)])],1)};V._withStripped=!0;var W={render:V,staticRenderFns:[]},z=W;var B=!1;var K=n("VU/8")(D,z,!1,function(t){B||n("D6jI")},null,null);K.options.__file="app/web/component/layout/show_app/main.vue";var N='<div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>',X={name:"ShowAppLayout",props:["title","description","keywords"],components:{MainLayout:K.exports},computed:{vTitle:function(){return this.$root.title||this.title||"Egg + Vue"},vKeywords:function(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription:function(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass:function(){return this.$root.baseClass}},template:N},Z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};o.a.defaults.baseURL="http://127.0.0.1:7001",o.a.defaults.headers.common.Authorization="11111AUTH_TOKEN",o.a.defaults.headers.common["Content-Type"]="application/x-www-form-urlencoded",o.a.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),S.a.component(X.name,X),Object(a.sync)(v,b);e.default=S.a.init(Z({base:"/app"},T,{router:b,store:v}))},"X+Kj":function(t,e,n){t.exports=n.p+"img/loading.0c81ad12.gif"},mSeI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"font-size":"24px","text-align":"center"}},[this._v("\n    5432vue-server-render detail\n")])};a._withStripped=!0;var i={render:a,staticRenderFns:[]},s=i;var r=n("VU/8")({},s,!1,null,null,null);r.options.__file="app/web/component/app/detail.vue";e.default=r.exports},oiPM:function(t,e){}},["HwM9"]);