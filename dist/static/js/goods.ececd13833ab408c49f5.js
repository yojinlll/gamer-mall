webpackJsonp([3],{"+TmG":function(t,s,e){"use strict";e("y+mr");var n=e("3JdW"),i=e.n(n),o=(e("xaR9"),[{name:"全 部",href:"category.html"},{name:"游戏本 ",href:"category.html"},{name:"轻薄本",href:"category.html"}]),a={name:"gamerNav",data:function(){return{show:!1,string:"分类",navConfig:o}},created:function(){location.href.match("category")&&(this.string="购物车")},methods:{selectRoute:function(t,s){location.href=t?t+"?index="+s:"index.html"},activeMenu:function(){"分类"===this.string?this.show=!this.show:location.href="member.html"}},components:{"g-button":i.a}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"g-nav"},[e("g-button",{staticClass:"g-mint-button",on:{click:function(s){t.selectRoute()}}},[t._v("首页")]),t._v(" "),e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-gamer"}})]),t._v(" "),e("div",[e("g-button",{staticClass:"g-mint-button",on:{click:function(s){return s.stopPropagation(),t.activeMenu(s)}}},[t._v(t._s(t.string))]),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"menu-list"},t._l(t.navConfig,function(s,n){return e("li",{on:{click:function(e){t.selectRoute(s.href,n)}}},[t._v(t._s(s.name))])}),0)],1)],1)},staticRenderFns:[]};var r=e("VU/8")(a,c,!1,function(t){e("4s1T")},"data-v-1af8a598",null);s.a=r.exports},"035s":function(t,s){},"4s1T":function(t,s){},"5bSE":function(t,s,e){"use strict";var n=e("woOf"),i=e.n(n),o=e("7+uW"),a=e("NYxO"),c=e("wI4f"),r=e("TFhR");o.a.use(a.a);var d=new a.a.Store({state:{allLists:null,gameLists:null,superLists:null,priceIndex:0,cartLists:null,addressLists:null},mutations:{setAllLists:function(t,s){t.allLists=s},setGameLists:function(t,s){t.gameLists=s},setSuperLists:function(t,s){t.superLists=s},changeIndex:function(t,s){t.priceIndex=s},setCartLists:function(t,s){t.cartLists=s},removeGoods:function(t,s){var e=[];t.cartLists.forEach(function(t){t.id!==s&&e.push(t)}),t.cartLists=e},setAddressLists:function(t,s){t.addressLists=s},addAddress:function(t,s){t.addressLists.push(s)},updateAddress:function(t,s){s.id&&t.addressLists.forEach(function(t){t.id===s.id&&i()(t,s)})},removeAddress:function(t,s){var e=t.addressLists.filter(function(t){return t.id!==s});t.addressLists=e},setDefaultAddress:function(t,s){t.addressLists.forEach(function(t){t.id===s?t.show=!0:t.show=!1})}},actions:{getAllLists:function(t){Object(c.a)(r.a.all).then(function(s){t.commit("setAllLists",s.data.lists)})},getGameLists:function(t){Object(c.a)(r.a.game).then(function(s){t.commit("setGameLists",s.data.lists)})},getSuperLists:function(t){Object(c.a)(r.a.super).then(function(s){t.commit("setSuperLists",s.data.lists)})},getCartLists:function(t){Object(c.a)(r.a.cart).then(function(s){t.commit("setCartLists",s.data.lists)})},getAddressLists:function(t){Object(c.a)(r.a.address).then(function(s){t.commit("setAddressLists",s.data.lists)})}}});s.a=d},"5vxm":function(t,s){},HFfA:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("035s"),i=(e.n(n),e("haLE")),o=(e.n(i),e("7+uW")),a=e("5bSE"),c=e("wI4f"),r=e("TFhR"),d=e("U/rD");o.a.prototype.$fetch=c.a,o.a.prototype.url=r.a,new o.a({el:"#app",store:a.a,data:function(){return{lists:null,goods:null,goodsId:0,activeImg:0,goodsNumber:0,iconActive:!1}},created:function(){this.getGoodsId(),this.getLists()},methods:{getLists:function(){var t=this;this.$fetch(this.url.all).then(function(s){t.lists=s.data.lists,t.findGoods()})},getGoodsId:function(){location.search&&(this.goodsId=+location.search.slice(location.search.indexOf("=")+1))},findGoods:function(){var t=this;this.lists.forEach(function(s){s.id===t.goodsId&&(console.log(s),t.goods=s)})},selectImg:function(t){this.activeImg=t},add:function(){this.goodsNumber++},reduce:function(){0!==this.goodsNumber&&this.goodsNumber--},addCart:function(){this.goodsNumber&&(this.iconActive=!0,this.goodsNumber=0)},goCart:function(){location.href="member.html"}},watch:{goods:function(t){t.img instanceof Array||(t.img=t.img.split(","))}},mixins:[d.a]})},TFhR:function(t,s,e){"use strict";var n={all:"/category/all",game:"/category/game",super:"/category/super",cart:"/member/cart",address:"/member/address"};for(var i in n)n.hasOwnProperty(i)&&(n[i]=" https://www.easy-mock.com/mock/5c31c45467fe190a45936a5e/gamer"+n[i]);s.a=n},"U/rD":function(t,s,e){"use strict";e("ULTG");var n=e("oobK"),i=e.n(n),o=e("+TmG"),a={name:"gamerLists",props:{lists:{type:Array,default:null}},watch:{lists:function(){this.lists.forEach(function(t){t.img instanceof Array||(t.img=t.img.split(","))})}},methods:{goGoods:function(t){location.href="goods.html?id="+t.id}},components:{"g-loading":i.a}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"goods-lists"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.lists,expression:"!lists"}],staticClass:"g-loading"},[e("g-loading",{attrs:{type:3,size:100,color:"#f5c437"}})],1),t._v(" "),t._l(t.lists,function(s){return e("li",{key:s.id,on:{click:function(e){t.goGoods(s)}}},[e("div",[t._v(t._s(s.name))]),t._v(" "),e("div",[t._v(t._s(s.info))]),t._v(" "),e("div",[t._v("￥"+t._s(s.price))]),t._v(" "),e("div",{staticClass:"goods-img"},[e("img",{attrs:{src:s.img[0],alt:""}})]),t._v(" "),e("div",[t._v("查看详情")])])}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.lists,expression:"lists"}],staticClass:"lists-tips"},[t._v("END")])],2)},staticRenderFns:[]};var r=e("VU/8")(a,c,!1,function(t){e("5vxm")},"data-v-52efb2a8",null).exports,d={components:{"g-nav":o.a,"g-lists":r,"g-loading":i.a}};s.a=d},ULTG:function(t,s){},haLE:function(t,s){},joTY:function(t,s){},wI4f:function(t,s,e){"use strict";var n=e("//Fk"),i=e.n(n),o=e("mtWM"),a=e.n(o);s.a=function(t,s){return new i.a(function(s,e){a.a.get(t).then(function(t){var n=t.data.status;200===n&&s(t),300===n&&(location.href="login.html",s(t)),n>=500&&(e(t),console.log("error"))}).catch(function(t){e(t)})})}},xaR9:function(t,s){!function(t){var s,e='<svg><symbol id="icon-gamer" viewBox="0 0 1547 1024"><path d="M1410.844444 887.466667v-819.2c0-36.408889-29.582222-68.266667-68.266666-68.266667h-1137.777778c-36.408889 0-68.266667 29.582222-68.266667 68.266667v819.2h-136.533333v91.022222h4.551111c9.102222 27.306667 34.133333 45.511111 63.715556 45.511111h1410.844444c29.582222 0 54.613333-18.204444 63.715556-45.511111h4.551111v-91.022222h-136.533334z m-1160.533333-773.688889h1046.755556v682.666666h-1046.755556v-682.666666z m637.155556 796.444444h-227.555556v-45.511111h227.555556v45.511111z"  ></path></symbol></svg>';if((s=document.getElementsByTagName("script"))[s.length-1].getAttribute("data-injectcss")&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(s){console&&console.log(s)}}!function(s){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(s,0);else{document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t,!1),s()},!1)}else document.attachEvent&&(e=s,n=t.document,i=!1,o=function(){i||(i=!0,e())},(a=function(){try{n.documentElement.doScroll("left")}catch(t){return void setTimeout(a,50)}o()})(),n.onreadystatechange=function(){"complete"==n.readyState&&(n.onreadystatechange=null,o())});var e,n,i,o,a}(function(){var t,s,n,i,o,a;(t=document.createElement("div")).innerHTML=e,e=null,(s=t.getElementsByTagName("svg")[0])&&(s.setAttribute("aria-hidden","true"),s.style.position="absolute",s.style.width=0,s.style.height=0,s.style.overflow="hidden",n=s,(i=document.body).firstChild?(o=n,(a=i.firstChild).parentNode.insertBefore(o,a)):i.appendChild(n))})}(window)},"y+mr":function(t,s){}},["HFfA"]);
//# sourceMappingURL=goods.ececd13833ab408c49f5.js.map