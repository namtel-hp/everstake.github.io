(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea479ce0"],{"0ad0":function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"coin-layout"},[s("b-container",[s("Header",{attrs:{isInternal:!0}})],1),s("main",{staticClass:"coin-layout__main"},[s("div",{class:{"coin-layout__stats":!0,"d-none":t.isNoStats}},[t._t("stats")],2),s("div",{staticClass:"coin-layout__main-info"},[s("b-container",[t._t("content")],2)],1)]),s("Footer",{attrs:{isInternal:!0}})],1)},i=[],o=s("0418"),e=s("4c03"),c={name:"CoinLayout",components:{Header:o["a"],Footer:e["a"]},props:{isNoStats:Boolean}},l=c,r=(s("9447"),s("2877")),d=Object(r["a"])(l,n,i,!1,null,"16e14fcb",null);a["a"]=d.exports},"0c04":function(t,a,s){},2386:function(t,a,s){"use strict";var n=s("0c04"),i=s.n(n);i.a},"372e":function(t,a,s){"use strict";var n=s("a297"),i=s.n(n);i.a},7761:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"coin-stat"},[s("div",{staticClass:"coin-stat__top"},[t._t("top")],2),s("div",{staticClass:"coin-stat__bottom"},[t._t("bottom")],2)])},i=[],o={name:"CoinStat"},e=o,c=(s("2386"),s("2877")),l=Object(c["a"])(e,n,i,!1,null,"d5d45a84",null);a["a"]=l.exports},9447:function(t,a,s){"use strict";var n=s("a216"),i=s.n(n);i.a},a216:function(t,a,s){},a297:function(t,a,s){},e3b2:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("CoinLayout",{attrs:{isNoStats:!0}},[n("template",{slot:"stats"},[n("b-container",[n("b-row",[n("b-col",{staticClass:"mb-4 mb-lg-0 mx-lg-auto",attrs:{md:"3"}},[n("CoinStat",[n("template",{slot:"top"},[t._v("\n              3036899\n            ")]),n("template",{slot:"bottom"},[t._v("\n              "+t._s(t.$t("coinPages.totalStake"))+"\n            ")])],2)],1),n("b-col",{staticClass:"mb-4 mb-lg-0 mx-lg-auto",attrs:{md:"3"}},[n("CoinStat",[n("template",{slot:"top"},[t._v("\n              303\n            ")]),n("template",{slot:"bottom"},[t._v("\n              "+t._s(t.$t("coinPages.rolls"))+"\n            ")])],2)],1)],1)],1)],1),n("template",{slot:"content"},[n("div",{staticClass:"coin-info"},[n("div",{staticClass:"coin-info__top"},[n("CardAlt",{attrs:{isCoinImg:!0}},[n("div",{staticClass:"coin-logo"},[n("div",{staticClass:"coin-logo__inner"},[n("img",{attrs:{src:s("b028"),alt:"Waves"}})])]),n("div",{staticClass:"coin-info__container"},[n("div",{staticClass:"coin-info__intro"},[n("h1",{staticClass:"coin-info__title"},[t._v("Waves")]),n("p",{staticClass:"coin-info__subtitle"},[t._v(t._s(t.$t("coinPages.youCanLease")))])]),n("div",{staticClass:"coin-info__address"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.wavesAddress,expression:"wavesAddress"}],staticClass:"input input--alt",attrs:{type:"text",readonly:""},domProps:{value:t.wavesAddress},on:{input:function(a){a.target.composing||(t.wavesAddress=a.target.value)}}}),n("div",{staticClass:"coin-info__address-info"},[n("div",[t._v("\n                  Waves - "+t._s(t.$t("coinPages.fee"))+" 5%\n                ")]),n("div",[t._v("\n                  MRT 30%\n                ")])])])])])],1),n("CardAlt",{staticClass:"justify-content-center mt-5"},[n("div",{staticClass:"ml-form-embed",attrs:{"data-account":"1521034:h8a8l8v6n5","data-form":"1343004:a0k2m0"}})])],1)])],2)},i=[],o=s("0ad0"),e=s("7761"),c=s("e849"),l=s("c47e"),r={name:"Waves",components:{CoinLayout:o["a"],CoinStat:e["a"],CardAlt:c["a"]},mixins:[l["a"]],data:function(){return{wavesAddress:"3P7JY8d67v9vpV2fq8ZTJPLFPtUmMffL7md"}},mounted:function(){this.$_initMail()}},d=r,u=s("2877"),v=Object(u["a"])(d,n,i,!1,null,"6eb6fe33",null);a["default"]=v.exports},e849:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{class:{"card-alt":!0,"card-alt--pt":t.isCoinImg}},[t._t("default")],2)},i=[],o={name:"CardAlt",props:{isCoinImg:Boolean}},e=o,c=(s("372e"),s("2877")),l=Object(c["a"])(e,n,i,!1,null,"48517107",null);a["a"]=l.exports}}]);