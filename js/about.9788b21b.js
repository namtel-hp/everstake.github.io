(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0ad0":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"coin-layout"},[a("b-container",[a("Header",{attrs:{isInternal:!0}})],1),a("main",{staticClass:"coin-layout__main"},[a("div",{class:{"coin-layout__stats":!0,"d-none":t.isNoStats}},[t._t("stats")],2),a("div",{staticClass:"coin-layout__main-info"},[a("b-container",[t._t("content")],2)],1)]),a("Footer",{attrs:{isInternal:!0}})],1)},n=[],o=a("0418"),i=a("4c03"),r={name:"CoinLayout",components:{Header:o["a"],Footer:i["a"]},props:{isNoStats:Boolean}},c=r,l=(a("9447"),a("2877")),u=Object(l["a"])(c,s,n,!1,null,"16e14fcb",null);e["a"]=u.exports},"0c04":function(t,e,a){},2386:function(t,e,a){"use strict";var s=a("0c04"),n=a.n(s);n.a},"35fc":function(t,e,a){"use strict";var s=a("3ff8"),n=a.n(s);n.a},"372e":function(t,e,a){"use strict";var s=a("a297"),n=a.n(s);n.a},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"3ff2":function(t,e,a){},"3ff8":function(t,e,a){},"6b54":function(t,e,a){"use strict";a("3846");var s=a("cb7c"),n=a("0bfb"),o=a("9e1e"),i="toString",r=/./[i],c=function(t){a("2aba")(RegExp.prototype,i,t,!0)};a("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?c(function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?n.call(t):void 0)}):r.name!=i&&c(function(){return r.call(this)})},"6e4c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("CoinLayout",[s("template",{slot:"stats"},[s("b-container",[s("b-row",[s("b-col",{staticClass:"mb-4 mb-lg-0",attrs:{md:"6",lg:"3"}},[s("CoinStat",[s("template",{slot:"top"},[t._v("\n              "+t._s(t.totalStakeInt)+".\n              "),s("span",{staticClass:"fraction"},[t._v(t._s(t.totalStakeFraction))])]),s("template",{slot:"bottom"},[t._v("\n              "+t._s(t.$t("coinPages.totalStake"))+"\n            ")])],2)],1),s("b-col",{staticClass:"mb-4 mb-lg-0",attrs:{md:"6",lg:"3"}},[s("CoinStat",[s("template",{slot:"top"},[t._v("\n              "+t._s(t.rolls)+"\n            ")]),s("template",{slot:"bottom"},[t._v("\n              "+t._s(t.$t("coinPages.rolls"))+"\n            ")])],2)],1),s("b-col",{staticClass:"mb-4 mb-md-0",attrs:{md:"6",lg:"3"}},[s("CoinStat",[s("template",{slot:"top"},[t._v("\n              "+t._s(t.fee)+"\n            ")]),s("template",{slot:"bottom"},[t._v("\n              "+t._s(t.$t("coinPages.fee"))+"\n            ")])],2)],1),s("b-col",{attrs:{md:"6",lg:"3"}},[s("CoinStat",[s("template",{slot:"top"},[t._v("\n             "+t._s(t.rollsShare)+"%\n            ")]),s("template",{slot:"bottom"},[t._v("\n              "+t._s(t.$t("coinPages.tezos.rollsShare"))+"\n            ")])],2)],1)],1)],1)],1),s("template",{slot:"content"},[s("div",{staticClass:"coin-info"},[s("div",{staticClass:"coin-info__top"},[s("CardAlt",{attrs:{isCoinImg:!0}},[s("div",{staticClass:"coin-logo"},[s("div",{staticClass:"coin-logo__inner"},[s("img",{attrs:{src:a("a3cb"),alt:"Tezos"}})])]),s("div",{staticClass:"coin-info__container"},[s("div",{staticClass:"coin-info__intro"},[s("h1",{staticClass:"coin-info__title"},[t._v("Tezos")]),s("p",{staticClass:"coin-info__subtitle"},[t._v(t._s(t.$t("coinPages.youCanLease")))])]),s("div",{staticClass:"coin-info__address"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tezosAddress,expression:"tezosAddress"}],staticClass:"input input--alt",attrs:{type:"text",readonly:""},domProps:{value:t.tezosAddress},on:{input:function(e){e.target.composing||(t.tezosAddress=e.target.value)}}}),s("div",{staticClass:"coin-info__address-info"},[s("div",[t._v("\n                  "+t._s(t.$t("coinPages.minDelegation"))+"10\n                  "),s("img",{staticClass:"tezos-icon",attrs:{src:a("ed39"),alt:"Tezos"}})]),s("div",[t._v("\n                  "+t._s(t.$t("coinPages.tezos.payoutsFrom"))+" 0.001\n                  "),s("img",{staticClass:"tezos-icon",attrs:{src:a("ed39"),alt:"Tezos"}})])])])])])],1),s("div",{staticClass:"coin-info__bottom"},[s("b-row",[s("b-col",{attrs:{lg:"6 mb-4 mb-lg-0"}},[s("LinkCard",{attrs:{linkAddress:"https://t.me/everstake_bot"}},[s("template",{slot:"link-txt"},[t._v("\n                "+t._s(t.$t("coinPages.tezos.tgBot"))+"\n              ")])],2)],1),s("b-col",{attrs:{lg:"6"}},[s("LinkCard",{attrs:{linkAddress:"https://medium.com/everstake/how-to-delegate-xtz-using-tezbox-bff4ff4906c8"}},[s("template",{slot:"link-txt"},[t._v("\n                "+t._s(t.$t("coinPages.tezos.howToDelegateTezos"))+"\n              ")])],2)],1)],1)],1)])])],2)},n=[],o=(a("96cf"),a("3b8d")),i=(a("6b54"),a("28a5"),a("0ad0")),r=a("7761"),c=a("e849"),l=a("d6b5"),u={name:"Tezos",components:{CoinLayout:i["a"],CoinStat:r["a"],CardAlt:c["a"],LinkCard:l["a"]},data:function(){return{tezosAddress:"tz1MXFrtZoaXckE41bjUCSjAjAap3AFDSr3N",totalStake:null,fee:"10%",totalStakePrecision:1e6,precision:6,totalRolls:null}},computed:{totalStakeParsed:function(){return this.totalStake?this.totalStake.data[0]/this.totalStakePrecision:0},totalStakeInt:function(){return this.totalStakeParsed?this.totalStakeParsed.toString().split(".")[0]:0},totalStakeFraction:function(){return this.totalStakeParsed?this.totalStakeParsed.toString().split(".")[1]:0},rolls:function(){return this.totalStake?Math.floor(this.totalStake.data[0].slice(0,-1*this.precision)/1e4):0},yesterday:function(){var t=new Date,e=new Date(t.setDate(t.getDate()-1)),a=e.getFullYear(),s=e.getMonth()+1,n=e.getDate(),o=s<10?"0".concat(s):s,i=n<10?"0".concat(n):n;return"".concat(a,"-").concat(o,"-").concat(i)},rollsShare:function(){return(this.rolls/(this.totalRolls/100)).toFixed(5)}},methods:{getTezosTotalStake:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$tezosApi.getTezosTotalStake();case 3:this.totalStake=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0);case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}(),getTezosTotalRolls:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$tezosApi.getTezosTotalRolls(e);case 3:a=t.sent,s=a.data.staking_balances.slice(0,-1*this.precision),this.totalRolls=Math.floor(s/1e4),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){this.getTezosTotalStake(),this.yesterday&&this.getTezosTotalRolls(this.yesterday)}},d=u,f=(a("35fc"),a("2877")),p=Object(f["a"])(d,s,n,!1,null,"c1473f40",null);e["default"]=p.exports},7761:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"coin-stat"},[a("div",{staticClass:"coin-stat__top"},[t._t("top")],2),a("div",{staticClass:"coin-stat__bottom"},[t._t("bottom")],2)])},n=[],o={name:"CoinStat"},i=o,r=(a("2386"),a("2877")),c=Object(r["a"])(i,s,n,!1,null,"d5d45a84",null);e["a"]=c.exports},"7c12":function(t,e,a){t.exports=a.p+"img/link.495fd3c2.svg"},9447:function(t,e,a){"use strict";var s=a("a216"),n=a.n(s);n.a},a216:function(t,e,a){},a297:function(t,e,a){},b22c:function(t,e,a){"use strict";var s=a("3ff2"),n=a.n(s);n.a},d6b5:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("CardAlt",[s("div",{class:{"link-card":!0,"justify-content-center":t.textCenter,"w-100":t.textCenter}},[s("img",{staticClass:"link-card__img",attrs:{src:a("7c12"),alt:"Link"}}),s("a",{staticClass:"link-card__link",attrs:{href:t.linkAddress,target:"_blank",rel:"noopener noreferrer"}},[t._t("link-txt")],2)])])},n=[],o=a("e849"),i={name:"LinkCard",components:{CardAlt:o["a"]},props:{linkAddress:String,textCenter:Boolean}},r=i,c=(a("b22c"),a("2877")),l=Object(c["a"])(r,s,n,!1,null,"2ca117b8",null);e["a"]=l.exports},e849:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"card-alt":!0,"card-alt--pt":t.isCoinImg}},[t._t("default")],2)},n=[],o={name:"CardAlt",props:{isCoinImg:Boolean}},i=o,r=(a("372e"),a("2877")),c=Object(r["a"])(i,s,n,!1,null,"48517107",null);e["a"]=c.exports},ed39:function(t,e,a){t.exports=a.p+"img/tezos.c40640b2.svg"}}]);