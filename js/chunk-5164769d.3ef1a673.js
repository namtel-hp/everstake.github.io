(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5164769d"],{"0ad0":function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"coin-layout"},[a("b-container",[a("Header",{attrs:{isInternal:!0}})],1),a("main",{staticClass:"coin-layout__main"},[a("div",{class:{"coin-layout__stats":!0,"d-none":t.isNoStats}},[t._t("stats")],2),a("div",{staticClass:"coin-layout__main-info"},[a("b-container",[t._t("content")],2)],1)]),a("Footer",{attrs:{isInternal:!0}})],1)},e=[],i=a("0418"),o=a("4c03"),r={name:"CoinLayout",components:{Header:i["a"],Footer:o["a"]},props:{isNoStats:Boolean}},c=r,l=(a("9447"),a("2877")),u=Object(l["a"])(c,s,e,!1,null,"16e14fcb",null);n["a"]=u.exports},"0c04":function(t,n,a){},2386:function(t,n,a){"use strict";var s=a("0c04"),e=a.n(s);e.a},"372e":function(t,n,a){"use strict";var s=a("a297"),e=a.n(s);e.a},"3ff2":function(t,n,a){},7761:function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"coin-stat"},[a("div",{staticClass:"coin-stat__top"},[t._t("top")],2),a("div",{staticClass:"coin-stat__bottom"},[t._t("bottom")],2)])},e=[],i={name:"CoinStat"},o=i,r=(a("2386"),a("2877")),c=Object(r["a"])(o,s,e,!1,null,"d5d45a84",null);n["a"]=c.exports},"7c12":function(t,n,a){t.exports=a.p+"img/link.495fd3c2.svg"},"85cf":function(t,n,a){"use strict";a.r(n);var s=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("CoinLayout",{attrs:{isNoStats:!0}},[s("template",{slot:"stats"},[s("b-container",[s("b-row",[s("b-col",{staticClass:"mb-4 mb-lg-0 text-md-center"},[s("CoinStat",[s("template",{slot:"top"}),s("template",{slot:"bottom"},[t._v("\n                "+t._s(t.$t("coinPages.total"))+"\n              ")])],2)],1)],1)],1)],1),s("template",{slot:"content"},[s("div",{staticClass:"coin-info"},[s("div",{staticClass:"coin-info__top"},[s("CardAlt",{attrs:{isCoinImg:!0}},[s("div",{staticClass:"coin-logo"},[s("div",{staticClass:"coin-logo__inner"},[s("img",{attrs:{src:a("1685"),alt:"IOST"}})])]),s("div",{staticClass:"coin-info__container text-center"},[s("div",{staticClass:"coin-info__intro"},[s("h1",{staticClass:"coin-info__title"},[t._v("IOST")]),s("p",{staticClass:"coin-info__subtitle"},[t._v(t._s(t.$t("coinPages.iost.youCanSupport")))])]),s("div",{staticClass:"coin-info__address"},[s("a",{staticClass:"coin-info__link break",attrs:{href:"https://iost.biss.com/#/nodedetail?id=64",target:"_blank"}},[t._v("\n                  iost.biss.com/#/nodedetail?id=64\n                ")])])])])],1),s("div",{staticClass:"coin-info__bottom"},[s("b-row",[s("b-col",{attrs:{lg:"6 mb-4 mb-lg-0"}},[s("LinkCard",{attrs:{linkAddress:"https://medium.com/everstake/iost-telegram-bot-by-everstake-c1a689629d82"}},[s("template",{slot:"link-txt"},[t._v("\n                  "+t._s(t.$t("coinPages.iost.iostTgBot"))+"\n                ")])],2)],1),s("b-col",{attrs:{lg:"6 mb-4 mb-lg-0"}},[s("LinkCard",{attrs:{linkAddress:"https://medium.com/everstake/iost-voting-guide-how-to-vote-on-the-iostabc-explorer-using-the-iwallet-extension-2e0291c6958e"}},[s("template",{slot:"link-txt"},[t._v("\n                  "+t._s(t.$t("coinPages.iost.delegationGuide"))+"\n                ")])],2)],1)],1)],1),s("CardAlt",{staticClass:"justify-content-center mt-5"},[s("div",{staticClass:"ml-form-embed",attrs:{"data-account":"1521034:h8a8l8v6n5","data-form":"1342998:e3o0e8"}})])],1)])],2)},e=[],i=(a("96cf"),a("3b8d")),o=(a("28a5"),a("0ad0")),r=a("7761"),c=a("e849"),l=a("d6b5"),u=a("c47e"),d={name:"IOST",components:{CoinLayout:o["a"],CoinStat:r["a"],CardAlt:c["a"],LinkCard:l["a"]},mixins:[u["a"]],data:function(){return{IOSTHtml:null}},computed:{total:function(){if(!this.IOSTHtml)return 0;var t=this.IOSTHtml.getElementsByClassName("fz-14")[0].lastChild.data;return t.trim().split(" ")[0]}},methods:{getIostHtml:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$iostApi.getIostHtml();case 3:this.IOSTHtml=t.sent,n=new DOMParser,this.IOSTHtml=n.parseFromString(this.IOSTHtml.data,"text/html"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));function n(){return t.apply(this,arguments)}return n}()},mounted:function(){this.$_initMail()}},m=d,_=a("2877"),f=Object(_["a"])(m,s,e,!1,null,"0a46d78a",null);n["default"]=f.exports},9447:function(t,n,a){"use strict";var s=a("a216"),e=a.n(s);e.a},a216:function(t,n,a){},a297:function(t,n,a){},b22c:function(t,n,a){"use strict";var s=a("3ff2"),e=a.n(s);e.a},d6b5:function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("CardAlt",[s("div",{class:{"link-card":!0,"justify-content-center":t.textCenter,"w-100":t.textCenter}},[s("img",{staticClass:"link-card__img",attrs:{src:a("7c12"),alt:"Link"}}),s("a",{staticClass:"link-card__link",attrs:{href:t.linkAddress,target:"_blank",rel:"noopener noreferrer"}},[t._t("link-txt")],2)])])},e=[],i=a("e849"),o={name:"LinkCard",components:{CardAlt:i["a"]},props:{linkAddress:String,textCenter:Boolean}},r=o,c=(a("b22c"),a("2877")),l=Object(c["a"])(r,s,e,!1,null,"2ca117b8",null);n["a"]=l.exports},e849:function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{class:{"card-alt":!0,"card-alt--pt":t.isCoinImg}},[t._t("default")],2)},e=[],i={name:"CardAlt",props:{isCoinImg:Boolean}},o=i,r=(a("372e"),a("2877")),c=Object(r["a"])(o,s,e,!1,null,"48517107",null);n["a"]=c.exports}}]);