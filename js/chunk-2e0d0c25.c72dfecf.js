(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e0d0c25"],{"0ad0":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"coin-layout"},[e("b-container",[e("Header",{attrs:{isInternal:!0}})],1),e("main",{staticClass:"coin-layout__main"},[e("div",{class:{"coin-layout__stats":!0,"d-none":t.isNoStats}},[t._t("stats")],2),e("div",{staticClass:"coin-layout__main-info"},[e("b-container",[t._t("content")],2)],1)]),e("Footer",{attrs:{isInternal:!0}})],1)},s=[],i=e("0418"),r=e("4c03"),o={name:"CoinLayout",components:{Header:i["a"],Footer:r["a"]},props:{isNoStats:Boolean}},c=o,l=(e("9447"),e("2877")),u=Object(l["a"])(c,a,s,!1,null,"16e14fcb",null);n["a"]=u.exports},"0c04":function(t,n,e){},2386:function(t,n,e){"use strict";var a=e("0c04"),s=e.n(a);s.a},"372e":function(t,n,e){"use strict";var a=e("a297"),s=e.n(a);s.a},"3ff2":function(t,n,e){},7761:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"coin-stat"},[e("div",{staticClass:"coin-stat__top"},[t._t("top")],2),e("div",{staticClass:"coin-stat__bottom"},[t._t("bottom")],2)])},s=[],i={name:"CoinStat"},r=i,o=(e("2386"),e("2877")),c=Object(o["a"])(r,a,s,!1,null,"d5d45a84",null);n["a"]=c.exports},"7c12":function(t,n,e){t.exports=e.p+"img/link.495fd3c2.svg"},"92fe":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("CoinLayout",[a("template",{slot:"stats"},[a("b-container",[a("b-row",[a("b-col",{staticClass:"mb-4 mb-lg-0"},[a("CoinStat",{staticClass:"text-center"},[a("template",{slot:"top"},[t._v("\n             "+t._s(t.currentBpComputed)+"\n            ")]),a("template",{slot:"bottom"},[t._v("\n              "+t._s(t.$t("coinPages.eos.currentBp"))+"\n            ")])],2)],1)],1)],1)],1),a("template",{slot:"content"},[a("div",{staticClass:"coin-info"},[a("div",{staticClass:"coin-info__top"},[a("CardAlt",{attrs:{isCoinImg:!0}},[a("div",{staticClass:"coin-logo"},[a("div",{staticClass:"coin-logo__inner"},[a("img",{attrs:{src:e("f41d"),alt:"IOST"}})])]),a("div",{staticClass:"coin-info__container text-center"},[a("div",{staticClass:"coin-info__intro"},[a("h1",{staticClass:"coin-info__title"},[t._v("EOS")]),a("p",{staticClass:"coin-info__subtitle"},[t._v(t._s(t.$t("coinPages.eos.youCanLease")))])]),a("div",{staticClass:"coin-info__address"},[a("a",{staticClass:"coin-info__link break",attrs:{href:"https://rex.atticlab.net/",target:"_blank"}},[t._v("\n                "+t._s(t.$t("coinPages.eos.tryRex"))+"\n              ")])])])])],1),a("div",{staticClass:"coin-info__bottom"},[a("b-row",[a("b-col",[a("LinkCard",{attrs:{linkAddress:"https://medium.com/everstake/how-to-earn-eos-by-using-rex-d0eabe47131d",textCenter:!0}},[a("template",{slot:"link-txt"},[t._v("\n                "+t._s(t.$t("coinPages.eos.howToEarn"))+"\n              ")])],2)],1)],1)],1)])])],2)},s=[],i=(e("96cf"),e("3b8d")),r=e("0ad0"),o=e("e849"),c=e("d6b5"),l=e("7761"),u={name:"EOS",components:{CoinLayout:r["a"],CardAlt:o["a"],LinkCard:c["a"],CoinStat:l["a"]},data:function(){return{currentBp:null,currentEosPrice:0,eosStats:null,interval:null}},computed:{currentBpComputed:function(){return this.currentBp&&this.currentBp.data?this.currentBp.data.head_block_producer:""}},methods:{getCurrentBp:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$eosApi.getCurrentBp();case 3:this.currentBp=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0);case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function n(){return t.apply(this,arguments)}return n}()},mounted:function(){var t=this;this.getCurrentBp(),this.interval=setInterval(function(){t.getCurrentBp()},5e3)},beforeDestroy:function(){clearInterval(this.interval)}},d=u,_=e("2877"),f=Object(_["a"])(d,a,s,!1,null,"5156e7cd",null);n["default"]=f.exports},9447:function(t,n,e){"use strict";var a=e("a216"),s=e.n(a);s.a},a216:function(t,n,e){},a297:function(t,n,e){},b22c:function(t,n,e){"use strict";var a=e("3ff2"),s=e.n(a);s.a},d6b5:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("CardAlt",[a("div",{class:{"link-card":!0,"justify-content-center":t.textCenter,"w-100":t.textCenter}},[a("img",{staticClass:"link-card__img",attrs:{src:e("7c12"),alt:"Link"}}),a("a",{staticClass:"link-card__link",attrs:{href:t.linkAddress,target:"_blank",rel:"noopener noreferrer"}},[t._t("link-txt")],2)])])},s=[],i=e("e849"),r={name:"LinkCard",components:{CardAlt:i["a"]},props:{linkAddress:String,textCenter:Boolean}},o=r,c=(e("b22c"),e("2877")),l=Object(c["a"])(o,a,s,!1,null,"2ca117b8",null);n["a"]=l.exports},e849:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:{"card-alt":!0,"card-alt--pt":t.isCoinImg}},[t._t("default")],2)},s=[],i={name:"CardAlt",props:{isCoinImg:Boolean}},r=i,o=(e("372e"),e("2877")),c=Object(o["a"])(r,a,s,!1,null,"48517107",null);n["a"]=c.exports}}]);