webpackJsonp([2],{"+NcR":function(t,s){},"+TmG":function(t,s,e){"use strict";e("y+mr");var i=e("3JdW"),n=e.n(i),a=(e("xaR9"),[{name:"全 部",href:"category.html"},{name:"游戏本 ",href:"category.html"},{name:"轻薄本",href:"category.html"}]),o={name:"gamerNav",data:function(){return{show:!1,string:"分类",navConfig:a}},created:function(){location.href.match("category")&&(this.string="购物车")},methods:{selectRoute:function(t,s){location.href=t?t+"?index="+s:"index.html"},activeMenu:function(){"分类"===this.string?this.show=!this.show:location.href="member.html"}},components:{"g-button":n.a}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"g-nav"},[e("g-button",{staticClass:"g-mint-button",on:{click:function(s){t.selectRoute()}}},[t._v("首页")]),t._v(" "),e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-gamer"}})]),t._v(" "),e("div",[e("g-button",{staticClass:"g-mint-button",on:{click:function(s){return s.stopPropagation(),t.activeMenu(s)}}},[t._v(t._s(t.string))]),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"menu-list"},t._l(t.navConfig,function(s,i){return e("li",{on:{click:function(e){t.selectRoute(s.href,i)}}},[t._v(t._s(s.name))])}),0)],1)],1)},staticRenderFns:[]};var c=e("VU/8")(o,r,!1,function(t){e("t7Va")},"data-v-67d16dc1",null);s.a=c.exports},"035s":function(t,s){},"0Whm":function(t,s){},"5bSE":function(t,s,e){"use strict";var i=e("woOf"),n=e.n(i),a=e("7+uW"),o=e("NYxO"),r=e("wI4f"),c=e("TFhR");a.a.use(o.a);var d=new o.a.Store({state:{allLists:null,gameLists:null,superLists:null,priceIndex:0,cartLists:null,addressLists:null},mutations:{setAllLists:function(t,s){t.allLists=s},setGameLists:function(t,s){t.gameLists=s},setSuperLists:function(t,s){t.superLists=s},changeIndex:function(t,s){t.priceIndex=s},setCartLists:function(t,s){t.cartLists=s},removeGoods:function(t,s){var e=[];t.cartLists.forEach(function(t){t.id!==s&&e.push(t)}),t.cartLists=e},setAddressLists:function(t,s){t.addressLists=s},addAddress:function(t,s){t.addressLists.push(s)},updateAddress:function(t,s){s.id&&t.addressLists.forEach(function(t){t.id===s.id&&n()(t,s)})},removeAddress:function(t,s){var e=t.addressLists.filter(function(t){return t.id!==s});t.addressLists=e},setDefaultAddress:function(t,s){t.addressLists.forEach(function(t){t.id===s?t.show=!0:t.show=!1})}},actions:{getAllLists:function(t){Object(r.a)(c.a.all).then(function(s){t.commit("setAllLists",s.data.lists)})},getGameLists:function(t){Object(r.a)(c.a.game).then(function(s){t.commit("setGameLists",s.data.lists)})},getSuperLists:function(t){Object(r.a)(c.a.super).then(function(s){t.commit("setSuperLists",s.data.lists)})},getCartLists:function(t){Object(r.a)(c.a.cart).then(function(s){t.commit("setCartLists",s.data.lists)})},getAddressLists:function(t){Object(r.a)(c.a.address).then(function(s){t.commit("setAddressLists",s.data.lists)})}}});s.a=d},"5vxm":function(t,s){},"Q+HK":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e("035s"),e("n2Nl");var i=e("7+uW"),n=e("/ocq"),a=e("U/rD"),o={name:"gCart",data:function(){return{}},computed:{lists:function(){return this.$store.state.cartLists},allSelected:{get:function(){return!(!this.lists||!this.lists.length)&&this.lists.every(function(t){return t.select})},set:function(t){this.lists&&this.lists.length&&this.lists.forEach(function(s){s.select=t})}},goodsCount:function(){var t=0;return this.lists&&this.lists.length&&this.lists.forEach(function(s){s.select&&(t+=s.price*s.number)}),t}},created:function(){this.lists||this.$store.dispatch("getCartLists")},methods:{reduce:function(t){1===t.number?confirm("是否删除商品？")?this.removeGoods(t.id):t.number:t.number--},add:function(t){t.number++},removeGoods:function(t){this.$store.commit("removeGoods",t)},selectGoods:function(t){t.select=!t.select},selectAll:function(){this.allSelected=!this.allSelected},goodsPage:function(t){location.href="goods.html?id="+t}},mixins:[a.a]},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"member-cart"},[e("ul",{staticClass:"cart-goods-lists"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.lists,expression:"!lists"}],staticClass:"g-loading"},[e("g-loading",{attrs:{type:3,size:100,color:"#f5c437"}})],1),t._v(" "),t._l(t.lists,function(s){return e("li",{staticClass:"cart-goods",class:{select:!0===s.select},on:{click:function(e){t.selectGoods(s)}}},[e("div",{staticClass:"point"}),t._v(" "),e("div",{staticClass:"goods-msg"},[e("img",{attrs:{src:s.img,alt:""},on:{click:function(e){t.goodsPage(s.id)}}}),t._v(" "),e("div",{attrs:{msg:""}},[e("div",{attrs:{name:""}},[t._v(t._s(s.goods))]),t._v(" "),e("div",{attrs:{data:""}},[e("div",{attrs:{change:""}},[e("span",{staticClass:"plus",on:{click:function(e){e.stopPropagation(),t.reduce(s)}}},[t._v("-")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.number,expression:"item.number"}],attrs:{type:"text"},domProps:{value:s.number},on:{input:function(e){e.target.composing||t.$set(s,"number",e.target.value)}}}),t._v(" "),e("span",{staticClass:"reduce",on:{click:function(e){e.stopPropagation(),t.add(s)}}},[t._v("+")])]),t._v(" "),e("span",{attrs:{price:""}},[t._v("￥"+t._s(s.price))])])])])])})],2),t._v(" "),e("div",{staticClass:"cart-footer",class:{select:!0===t.allSelected}},[e("div",{staticClass:"all-button",on:{click:t.selectAll}},[e("div",{staticClass:"point"}),t._v(" "),e("span",[t._v("全选")])]),t._v(" "),e("div",{staticClass:"cart-count"},[e("span",[t._v("合计 : "+t._s(t.goodsCount))]),t._v(" "),e("div",{staticClass:"count-button"},[t._v("结算")])])])])},staticRenderFns:[]};var c=e("VU/8")(o,r,!1,function(t){e("+NcR")},"data-v-55afb283",null).exports,d=e("woOf"),l=e.n(d),u={name:"gAddress",data:function(){return{edit:!1,showButton:!0,defaultMark:!1,name:"",phone:"",address:"",show:!1,id:""}},computed:{lists:function(){return this.$store.state.addressLists}},created:function(){this.lists||this.$store.dispatch("getAddressLists")},methods:{selectAddress:function(t){},editAddress:function(t){this.edit=!0,l()(this,t),this.id||(this.showButton=!1)},save:function(){var t=this.name,s=this.phone,e=this.address,i=this.show,n=this.id;if(n){var a={name:t,phone:s,address:e,show:i,id:n};this.$store.commit("updateAddress",a)}else if(t&&s&&e){n=parseInt(100*Math.random());var o={name:t,phone:s,address:e,show:i=!!this.defaultMark,id:n};this.$store.commit("addAddress",o),this.defaultMark&&this.$store.commit("setDefaultAddress",o.id)}else console.log("未输入有效地址");this.edit=!1,this.resetData()},remove:function(){this.show&&this.$store.commit("setDefaultAddress",this.lists[0].id),this.$store.commit("removeAddress",this.id),this.edit=!1,this.resetData()},setDefault:function(){this.$store.commit("setDefaultAddress",this.id),this.edit=!1,this.resetData()},setDefaultMark:function(){this.defaultMark=!this.defaultMark},resetData:function(){this.name="",this.phone="",this.address="",this.show=!1,this.id="",this.defaultMark=!1,this.showButton=!0},hidePopover:function(){this.edit=!1}},watch:{lists:function(){1===this.lists.length&&this.$store.commit("setDefaultAddress",this.lists[0].id)}},mixins:[a.a]},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"address-wrapper"},[e("ul",{staticClass:"address-lists"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.lists,expression:"!lists"}],staticClass:"g-loading"},[e("g-loading",{attrs:{type:3,size:100,color:"#f5c437"}})],1),t._v(" "),t._l(t.lists,function(s){return e("li",{staticClass:"address-item",class:{select:!0===s.select},on:{click:function(e){t.selectAddress(s)}}},[e("div",{staticClass:"point",class:{show:1==s.show}}),t._v(" "),e("div",{staticClass:"address-msg"},[e("div",{staticClass:"msg-item"},[e("div",[t._v("收货人：")]),t._v(" "),e("span",[t._v(t._s(s.name))])]),t._v(" "),e("div",{staticClass:"msg-item"},[e("div",[t._v("联系方式：")]),t._v(" "),e("span",[t._v(t._s(s.phone))])]),t._v(" "),e("div",{staticClass:"msg-item"},[e("div",[t._v("联系地址：")]),t._v(" "),e("span",[t._v(t._s(s.address))])])]),t._v(" "),e("div",{staticClass:"edit-button",on:{click:function(e){t.editAddress(s)}}},[t._v("修改")])])})],2),t._v(" "),e("div",{staticClass:"newAddress-button",on:{click:t.editAddress}},[t._v("添加地址")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}],staticClass:"change-popover",on:{click:function(s){t.hidePopover()}}},[e("div",{staticClass:"address-form",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"form-row"},[e("label",[t._v("收货人：")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入姓名",name:"user_name"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-row"},[e("label",[t._v("联系方式：")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入联系电话",name:"user_phone"},domProps:{value:t.phone},on:{input:function(s){s.target.composing||(t.phone=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-row"},[e("label",[t._v("地址：")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",placeholder:"请输入地址",name:"user_address"},domProps:{value:t.address},on:{input:function(s){s.target.composing||(t.address=s.target.value)}}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.showButton,expression:"!showButton"}],staticClass:"form-row",attrs:{options:""}},[e("div",{staticClass:"options",on:{click:t.setDefaultMark}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.defaultMark,expression:"defaultMark"}],staticClass:"icon"})]),t._v(" "),e("div",{staticClass:"text"},[t._v("设为默认地址")])]),t._v(" "),e("div",{staticClass:"edit-options"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showButton,expression:"showButton"}],staticClass:"delete-button",on:{click:t.remove}},[t._v("删除")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showButton,expression:"showButton"}],staticClass:"show-button",on:{click:t.setDefault}},[t._v("默认地址")]),t._v(" "),e("div",{staticClass:"save-button",on:{click:t.save}},[t._v("保存")])])])])])},staticRenderFns:[]};var m=e("VU/8")(u,v,!1,function(t){e("0Whm")},"data-v-12f26021",null).exports;i.a.use(n.a);var h=[{path:"",redirect:"/cart"},{path:"/cart",component:c},{path:"/address",component:m}],f=new n.a({routes:h}),p=e("5bSE"),g=e("+TmG");new i.a({el:"#app",router:f,store:p.a,data:{navLists:{cart:"我的购物车",address:"我的地址"},activeRoute:"cart"},methods:{selectRoute:function(t){this.activeRoute=t,this.$router.push(t)}},components:{"g-nav":g.a}})},TFhR:function(t,s,e){"use strict";var i={all:"/category/all",game:"/category/game",super:"/category/super",cart:"/member/cart",address:"/member/address"};for(var n in i)i.hasOwnProperty(n)&&(i[n]=" https://www.easy-mock.com/mock/5c31c45467fe190a45936a5e/gamer"+i[n]);s.a=i},"U/rD":function(t,s,e){"use strict";e("ULTG");var i=e("oobK"),n=e.n(i),a=e("+TmG"),o={name:"gamerLists",props:{lists:{type:Array,default:null}},watch:{lists:function(){this.lists.forEach(function(t){t.img instanceof Array||(t.img=t.img.split(","))})}},methods:{goGoods:function(t){location.href="goods.html?id="+t.id}},components:{"g-loading":n.a}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"goods-lists"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.lists,expression:"!lists"}],staticClass:"g-loading"},[e("g-loading",{attrs:{type:3,size:100,color:"#f5c437"}})],1),t._v(" "),t._l(t.lists,function(s){return e("li",{key:s.id,on:{click:function(e){t.goGoods(s)}}},[e("div",[t._v(t._s(s.name))]),t._v(" "),e("div",[t._v(t._s(s.info))]),t._v(" "),e("div",[t._v("￥"+t._s(s.price))]),t._v(" "),e("div",{staticClass:"goods-img"},[e("img",{attrs:{src:s.img[0],alt:""}})]),t._v(" "),e("div",[t._v("查看详情")])])}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.lists,expression:"lists"}],staticClass:"lists-tips"},[t._v("END")])],2)},staticRenderFns:[]};var c=e("VU/8")(o,r,!1,function(t){e("5vxm")},"data-v-52efb2a8",null).exports,d={components:{"g-nav":a.a,"g-lists":c,"g-loading":n.a}};s.a=d},ULTG:function(t,s){},joTY:function(t,s){},n2Nl:function(t,s){},t7Va:function(t,s){},wI4f:function(t,s,e){"use strict";var i=e("//Fk"),n=e.n(i),a=e("mtWM"),o=e.n(a);s.a=function(t,s){return new n.a(function(s,e){o.a.get(t).then(function(t){var i=t.data.status;200===i&&s(t),300===i&&(location.href="login.html",s(t)),i>=500&&(e(t),console.log("error"))}).catch(function(t){e(t)})})}},xaR9:function(t,s){!function(t){var s,e='<svg><symbol id="icon-gamer" viewBox="0 0 1547 1024"><path d="M1410.844444 887.466667v-819.2c0-36.408889-29.582222-68.266667-68.266666-68.266667h-1137.777778c-36.408889 0-68.266667 29.582222-68.266667 68.266667v819.2h-136.533333v91.022222h4.551111c9.102222 27.306667 34.133333 45.511111 63.715556 45.511111h1410.844444c29.582222 0 54.613333-18.204444 63.715556-45.511111h4.551111v-91.022222h-136.533334z m-1160.533333-773.688889h1046.755556v682.666666h-1046.755556v-682.666666z m637.155556 796.444444h-227.555556v-45.511111h227.555556v45.511111z"  ></path></symbol></svg>';if((s=document.getElementsByTagName("script"))[s.length-1].getAttribute("data-injectcss")&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(s){console&&console.log(s)}}!function(s){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(s,0);else{document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t,!1),s()},!1)}else document.attachEvent&&(e=s,i=t.document,n=!1,a=function(){n||(n=!0,e())},(o=function(){try{i.documentElement.doScroll("left")}catch(t){return void setTimeout(o,50)}a()})(),i.onreadystatechange=function(){"complete"==i.readyState&&(i.onreadystatechange=null,a())});var e,i,n,a,o}(function(){var t,s,i,n,a,o;(t=document.createElement("div")).innerHTML=e,e=null,(s=t.getElementsByTagName("svg")[0])&&(s.setAttribute("aria-hidden","true"),s.style.position="absolute",s.style.width=0,s.style.height=0,s.style.overflow="hidden",i=s,(n=document.body).firstChild?(a=i,(o=n.firstChild).parentNode.insertBefore(a,o)):n.appendChild(i))})}(window)},"y+mr":function(t,s){}},["Q+HK"]);
//# sourceMappingURL=member.0376ec4e6e619c250150.js.map