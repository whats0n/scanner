(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],v=0,u=[];v<s.length;v++)o=s[v],i[o]&&u.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);h&&h(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var h=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1282:function(e,t,n){"use strict";var a=n("3a71"),i=n.n(a);i.a},"3a71":function(e,t,n){},"3f92":function(e,t,n){"use strict";var a=n("fb2d"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isMobile?n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[e.url||e.isReading?e._e():n("div",{staticClass:"container__intro"},[e._m(0),n("QRCodeIcon",{staticClass:"container__placeholder"})],1),e.isReading?n("Stream",{on:{success:e.handleSuccessReading}}):e._e(),n("iframe",{directives:[{name:"show",rawName:"v-show",value:e.url&&!e.isReading,expression:"url && !isReading"}],ref:"iframe",staticClass:"container__iframe",attrs:{frameborder:"0",src:e.url}})],1),n("div",{staticClass:"toolbar"},[n("ButtonScan",{on:{click:e.openScanner}})],1)]):n("div",{staticClass:"container"},[n("div",{staticClass:"container__error"},[e._v("Please enter from mobile device")])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"container__title"},[e._v("Welcome"),n("br"),e._v("Scan QR Code")])}],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"placeholder"},[n("div",{staticClass:"placeholder__corner placeholder__corner_top-left"}),n("div",{staticClass:"placeholder__corner placeholder__corner_top-right"}),n("div",{staticClass:"placeholder__corner placeholder__corner_bottom-right"}),n("div",{staticClass:"placeholder__corner placeholder__corner_bottom-left"}),n("svg",{staticClass:"placeholder__icon",attrs:{viewBox:"0 0 29.938 29.938"}},[n("path",{attrs:{d:"M7.129,15.683h1.427v1.427h1.426v1.426H2.853v-1.426h1.426v-2.853h2.853v1.426H7.129z M25.664,28.513h1.424v-1.426h-1.424\n      V28.513z M8.555,15.683h1.426v-1.426H8.555V15.683z M28.512,28.513h1.427v-1.426h-1.427V28.513z M11.408,29.938h2.85v-1.426h-2.85\n      V29.938z M24.237,29.938v-1.426h-1.427v1.426H24.237z M18.535,29.938h1.426v-2.852h-1.426V29.938z M7.129,11.406v1.426h4.277\n      v-1.426H7.129z M5.705,12.831v-1.426H2.852v2.852h1.426v-1.426H5.705z M9.981,9.979H0.002V0.001h9.979V9.979z M8.555,1.427H1.426\n      v7.127h7.129V1.427z M2.852,27.087h4.276V22.81H2.852V27.087z M17.108,25.66v1.427h1.428V25.66H17.108z M7.129,2.853H2.853v4.275\n      h4.276V2.853z M29.938,0.001v9.979h-9.979V0.001H29.938z M28.512,1.427h-7.127v7.127h7.127V1.427z M0,19.957h9.98v9.979H0V19.957z\n       M1.427,28.513h7.129v-7.129H1.427V28.513z M1.427,11.406H0v7.129h1.427V11.406z M19.959,18.533v1.424h1.426v-1.424H19.959z\n       M15.682,24.236V22.81h-1.425v1.427h-2.85v2.853h2.85v1.426h1.425v-2.853h1.427v-1.426H15.682L15.682,24.236z M11.408,5.704h2.85\n      V4.276h-2.85V5.704z M22.811,17.109h2.854v1.426h1.425v-4.276h-1.425v-2.853h-1.428v4.277h-4.274v1.427h1.426v1.426h1.426v-1.426\n      H22.811z M24.237,21.384h-1.427v-1.427h-1.426v2.853h-4.276v1.427h2.854v2.853h1.426v1.426h1.426v-2.853h5.701v-1.426h-4.276\n      v-2.853H24.237z M24.237,21.384h1.428v-2.851h-1.428V21.384z M12.832,21.384v-1.427h1.424v-1.424h1.425v-1.426h1.427v-2.853h4.276\n      v-2.853h-1.426v1.426h-1.426V7.125h-1.426V4.272h1.426V0h-1.426v2.852h-1.426V0h-4.276v2.852h1.426V1.426h1.424v2.85h1.426v4.277\n      h1.426v1.426h-1.426v2.852h-1.426V9.979h-1.424V8.554h-1.426v2.852h1.426v1.426h-1.426v4.278h1.426v-2.853h1.424v2.853h-1.424\n      v1.426h-1.426v4.274h2.85v-1.426H12.832z M28.512,22.81v-1.426h-2.85v1.426H28.512z M27.086,2.853h-4.275v4.275h4.275V2.853z\n       M15.682,21.384h2.854v-1.427h-1.428v-1.424h-1.427V21.384z M18.535,18.533v-1.426h-1.428v1.426H18.535z M27.086,12.831h2.853\n      v-1.426h-2.853V12.831z M28.512,24.236h1.427V22.81h-1.427V24.236z M28.512,15.683h1.427v-1.426h-1.427V15.683z M15.682,8.554\n      h-1.425v1.426h1.425V8.554z"}})])])},s=[],c={name:"QRCodeIcon"},l=c,h=(n("3f92"),n("2877")),v=Object(h["a"])(l,o,s,!1,null,null,null);v.options.__file="QRCodeIcon.vue";var u=v.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"btn-scan",on:{click:function(t){t.preventDefault(),e.$emit("click",t)}}},[n("span",{staticClass:"btn-scan__text"},[e._v("SCAN")])])},p=[],m={name:"ButtonScan"},f=m,b=(n("acac"),Object(h["a"])(f,d,p,!1,null,null,null));b.options.__file="ButtonScan.vue";var g=b.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("QrcodeStream",{attrs:{camera:e.camera},on:{decode:e.handleDecode,init:e.handleInit}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.cameraForzen,expression:"cameraForzen"}],staticClass:"validation-layer"},[e.validating?n("div",{staticClass:"validation-notice"},[e._v("\n      Long validation in progress...\n    ")]):n("div",{staticClass:"validation-result"},[e.isValid?e._e():n("div",{staticClass:"is-invalid"},[e._v("\n        This is NOT a URL\n      ")])])])])},w=[],z=(n("3b2b"),n("96cf"),n("1da1")),M=n("9a3e"),V={name:"Stream",components:{QrcodeStream:M["QrcodeStream"]},data:function(){return{isValid:!1,validating:!1,camera:{},result:null,loading:!1,firstLoad:!0}},computed:{cameraForzen:function(){return!1===this.camera||this.loading&&!this.firstLoad}},methods:{handleInit:function(){var e=Object(z["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,t;case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.error(e.t0);case 9:return e.prev=9,this.firstLoad=!1,this.loading=!1,e.finish(9);case 13:case"end":return e.stop()}},e,this,[[1,6,9,13]])}));return function(t){return e.apply(this,arguments)}}(),handleDecode:function(){var e=Object(z["a"])(regeneratorRuntime.mark(function e(t){var n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.result=t,this.stopCamera(),this.validating=!0,e.next=5,this.validate(t);case 5:this.isValid=e.sent,this.validating=!1,this.isValid?(this.$emit("success",this.result),this.startCamera()):setTimeout(function(){n.startCamera()},2e3);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),stopCamera:function(){this.camera=!1},startCamera:function(){this.camera=null},validate:function(e){return new Promise(function(t){return t(new RegExp("^(http|https)://").test(e))})}}},k=V,x=(n("1282"),Object(h["a"])(k,_,w,!1,null,null,null));x.options.__file="Stream.vue";var y=x.exports,C={name:"app",components:{QRCodeIcon:u,ButtonScan:g,Stream:y},data:function(){return{url:null,isReading:!1,isMobile:function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(e.substr(0,4))}()}},methods:{openScanner:function(){this.url=null,this.isReading=!0},handleSuccessReading:function(e){this.isReading=!1,this.url=e}}},H=C,S=(n("5c0b"),Object(h["a"])(H,i,r,!1,null,null,null));S.options.__file="App.vue";var R=S.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(R)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5e27":function(e,t,n){},a917:function(e,t,n){},acac:function(e,t,n){"use strict";var a=n("a917"),i=n.n(a);i.a},fb2d:function(e,t,n){}});
//# sourceMappingURL=app.317d3f4e.js.map