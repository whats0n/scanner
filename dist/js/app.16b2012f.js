(function(e){function t(t){for(var r,c,i=t[0],h=t[1],l=t[2],s=0,u=[];s<i.length;s++)c=i[s],o[c]&&u.push(o[c][0]),o[c]=0;for(r in h)Object.prototype.hasOwnProperty.call(h,r)&&(e[r]=h[r]);v&&v(t);while(u.length)u.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var h=n[i];0!==o[h]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var v=h;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09c5":function(e,t,n){},"3f92":function(e,t,n){"use strict";var r=n("fb2d"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[e.result?e._e():n("div",{staticClass:"container__intro"},[e._m(0),n("QRCodeIcon",{staticClass:"container__placeholder"}),e.error?n("div",{staticClass:"container__error"},[e._v("Try again")]):e._e()],1),n("iframe",{directives:[{name:"show",rawName:"v-show",value:e.result,expression:"result"}],ref:"iframe",staticClass:"container__iframe",attrs:{frameborder:"0",src:e.result}})]),[e.active?n("div",{staticClass:"toolbar"},[n("QRFile",{ref:"file",on:{decode:e.handleDecode}})],1):e._e()]],2)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"container__title"},[e._v("Welcome"),n("br"),e._v("Scan QR Code")])}],c=(n("3b2b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"btn-scan"},[n("span",{staticClass:"btn-scan__text"},[e._v("Scan")]),n("QrcodeCapture",{staticClass:"btn-scan__input",on:{decode:function(t){e.$emit("decode",t)}}})],1)}),i=[],h=n("9a3e"),l={name:"QRFile",components:{QrcodeCapture:h["QrcodeCapture"]}},v=l,s=(n("9e99"),n("2877")),u=Object(s["a"])(v,c,i,!1,null,"924d2496",null);u.options.__file="QRFile.vue";var d=u.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"placeholder"},[n("div",{staticClass:"placeholder__corner placeholder__corner_top-left"}),n("div",{staticClass:"placeholder__corner placeholder__corner_top-right"}),n("div",{staticClass:"placeholder__corner placeholder__corner_bottom-right"}),n("div",{staticClass:"placeholder__corner placeholder__corner_bottom-left"}),n("svg",{staticClass:"placeholder__icon",attrs:{viewBox:"0 0 29.938 29.938"}},[n("path",{attrs:{d:"M7.129,15.683h1.427v1.427h1.426v1.426H2.853v-1.426h1.426v-2.853h2.853v1.426H7.129z M25.664,28.513h1.424v-1.426h-1.424\n      V28.513z M8.555,15.683h1.426v-1.426H8.555V15.683z M28.512,28.513h1.427v-1.426h-1.427V28.513z M11.408,29.938h2.85v-1.426h-2.85\n      V29.938z M24.237,29.938v-1.426h-1.427v1.426H24.237z M18.535,29.938h1.426v-2.852h-1.426V29.938z M7.129,11.406v1.426h4.277\n      v-1.426H7.129z M5.705,12.831v-1.426H2.852v2.852h1.426v-1.426H5.705z M9.981,9.979H0.002V0.001h9.979V9.979z M8.555,1.427H1.426\n      v7.127h7.129V1.427z M2.852,27.087h4.276V22.81H2.852V27.087z M17.108,25.66v1.427h1.428V25.66H17.108z M7.129,2.853H2.853v4.275\n      h4.276V2.853z M29.938,0.001v9.979h-9.979V0.001H29.938z M28.512,1.427h-7.127v7.127h7.127V1.427z M0,19.957h9.98v9.979H0V19.957z\n       M1.427,28.513h7.129v-7.129H1.427V28.513z M1.427,11.406H0v7.129h1.427V11.406z M19.959,18.533v1.424h1.426v-1.424H19.959z\n       M15.682,24.236V22.81h-1.425v1.427h-2.85v2.853h2.85v1.426h1.425v-2.853h1.427v-1.426H15.682L15.682,24.236z M11.408,5.704h2.85\n      V4.276h-2.85V5.704z M22.811,17.109h2.854v1.426h1.425v-4.276h-1.425v-2.853h-1.428v4.277h-4.274v1.427h1.426v1.426h1.426v-1.426\n      H22.811z M24.237,21.384h-1.427v-1.427h-1.426v2.853h-4.276v1.427h2.854v2.853h1.426v1.426h1.426v-2.853h5.701v-1.426h-4.276\n      v-2.853H24.237z M24.237,21.384h1.428v-2.851h-1.428V21.384z M12.832,21.384v-1.427h1.424v-1.424h1.425v-1.426h1.427v-2.853h4.276\n      v-2.853h-1.426v1.426h-1.426V7.125h-1.426V4.272h1.426V0h-1.426v2.852h-1.426V0h-4.276v2.852h1.426V1.426h1.424v2.85h1.426v4.277\n      h1.426v1.426h-1.426v2.852h-1.426V9.979h-1.424V8.554h-1.426v2.852h1.426v1.426h-1.426v4.278h1.426v-2.853h1.424v2.853h-1.424\n      v1.426h-1.426v4.274h2.85v-1.426H12.832z M28.512,22.81v-1.426h-2.85v1.426H28.512z M27.086,2.853h-4.275v4.275h4.275V2.853z\n       M15.682,21.384h2.854v-1.427h-1.428v-1.424h-1.427V21.384z M18.535,18.533v-1.426h-1.428v1.426H18.535z M27.086,12.831h2.853\n      v-1.426h-2.853V12.831z M28.512,24.236h1.427V22.81h-1.427V24.236z M28.512,15.683h1.427v-1.426h-1.427V15.683z M15.682,8.554\n      h-1.425v1.426h1.425V8.554z"}})])])},p=[],_={name:"QRCodeIcon"},M=_,b=(n("3f92"),Object(s["a"])(M,f,p,!1,null,null,null));b.options.__file="QRCodeIcon.vue";var V=b.exports,z={name:"app",components:{QRFile:d,QRCodeIcon:V},data:function(){return{result:null,active:!0,error:!1}},created:function(){this.handleScroll()},methods:{validateURL:function(e){return new RegExp("^(http|https)://").test(e)},handleScroll:function(){var e=this,t=window.scrollTop;window.addEventListener("scroll",function(){if(e.result){var n=window.scrollTop;e.active=n>t,t=n}})},handleDecode:function(e){var t=this;this.validateURL(e)?(this.result=e,this.error=!1):(this.error=!0,this.$nextTick(function(){return t.$refs.file.$el.querySelector("input").value=""}))}}},m=z,C=(n("5c0b"),Object(s["a"])(m,o,a,!1,null,null,null));C.options.__file="App.vue";var H=C.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(H)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"9e99":function(e,t,n){"use strict";var r=n("09c5"),o=n.n(r);o.a},fb2d:function(e,t,n){}});
//# sourceMappingURL=app.16b2012f.js.map