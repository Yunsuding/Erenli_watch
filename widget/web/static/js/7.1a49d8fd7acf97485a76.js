webpackJsonp([7],{NeHI:function(n,e,t){var i=t("yVDg");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("4b8bc16c",i,!0,{})},gWp0:function(n,e,t){"use strict";function i(n){t("NeHI")}Object.defineProperty(e,"__esModule",{value:!0});var o={name:"set",data:function(){return{voice:!1,shake:!1,scroll:null,PositionValue:null,showPosition:!1}},mounted:function(){this.getInfo()},methods:{baocun:function(){var n=this;this.common.commonFun.ajax({dom:this,url:this.common.apiUrl.edit,type:"post",data:{is_sound:this.isTrue(this.voice),is_shock:this.isTrue(this.shake)},success:function(e,t){n.showPosition=!0,n.PositionValue=t.msg,setTimeout(function(){n.$router.go(-1)},900)}})},getInfo:function(){var n=this;this.common.commonFun.ajax({dom:this,url:this.common.apiUrl.getting,type:"post",data:{},success:function(e,t){n.voice=n.isTrue(e.is_sound),n.shake=n.isTrue(e.is_shock)}})},isTrue:function(n){return"boolean"==typeof n?!0===n?1:0:1==n},onScroll:function(n){this.scroll=n.left}},watch:{scroll:function(){this.scroll<-50&&this.$router.push("/operation")}}},A=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("scroller",{ref:"scrollerEvent",attrs:{"lock-y":""},on:{"on-scroll":n.onScroll}},[t("div",{staticClass:"set"},[t("div",{staticClass:"me-classfiy base-radio"},[t("group",[t("x-switch",{attrs:{title:"声音"},model:{value:n.voice,callback:function(e){n.voice=e},expression:"voice"}}),n._v(" "),t("x-switch",{attrs:{title:"震动"},model:{value:n.shake,callback:function(e){n.shake=e},expression:"shake"}})],1)],1),n._v(" "),t("p",{on:{click:n.baocun}},[n._v("提交保存")]),n._v(" "),t("toast",{attrs:{type:"text",time:800,"is-show-mask":"",text:n.PositionValue,position:"middle"},model:{value:n.showPosition,callback:function(e){n.showPosition=e},expression:"showPosition"}})],1)])},c=[],r={render:A,staticRenderFns:c},s=r,l=t("VU/8"),a=i,B=l(o,s,!1,a,"data-v-6b3dcf91",null);e.default=B.exports},yVDg:function(n,e,t){var i=t("kxFB");e=n.exports=t("FZ+f")(!0),e.push([n.i,"\n.flexRowJcAc[data-v-6b3dcf91] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.flexRowFwJcAc[data-v-6b3dcf91] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.flexClJc[data-v-6b3dcf91] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.flexRowAc[data-v-6b3dcf91] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n@font-face {\n  font-family: 'FZCYJ';\n  src: url("+i(t("Cazu"))+");\n}\n.set[data-v-6b3dcf91] {\n  height: 320px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.set .me-classfiy[data-v-6b3dcf91] {\n  width: 90%;\n}\n.set p[data-v-6b3dcf91] {\n  width: 70%;\n  background-color: #3998fc;\n  text-align: center;\n  color: #fff;\n  border-radius: 5px;\n  height: 40px;\n  line-height: 40px;\n}\n","",{version:3,sources:["/Users/steven/Desktop/web/gitweb/wc_resources/src/components/set.vue"],names:[],mappings:";AACA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,+BAA+B;EAC/B,8BAA8B;EAC9B,4BAA4B;UACpB,oBAAoB;EAC5B,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;EAChC,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,+BAA+B;EAC/B,8BAA8B;EAC9B,4BAA4B;UACpB,oBAAoB;EAC5B,wBAAwB;UAChB,gBAAgB;EACxB,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;EAChC,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;CACjC;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,+BAA+B;EAC/B,8BAA8B;EAC9B,4BAA4B;UACpB,oBAAoB;EAC5B,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,qBAAqB;EACrB,mCAAqC;CACtC;AACD;EACE,cAAc;EACd,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,+BAA+B;EAC/B,8BAA8B;EAC9B,4BAA4B;UACpB,oBAAoB;EAC5B,wBAAwB;UAChB,gBAAgB;EACxB,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;EAChC,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,WAAW;CACZ;AACD;EACE,WAAW;EACX,0BAA0B;EAC1B,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,kBAAkB;CACnB",file:"set.vue",sourcesContent:["\n.flexRowJcAc[data-v-6b3dcf91] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.flexRowFwJcAc[data-v-6b3dcf91] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.flexClJc[data-v-6b3dcf91] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.flexRowAc[data-v-6b3dcf91] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n@font-face {\n  font-family: 'FZCYJ';\n  src: url('../assets/less/FZCYJ.otf');\n}\n.set[data-v-6b3dcf91] {\n  height: 320px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.set .me-classfiy[data-v-6b3dcf91] {\n  width: 90%;\n}\n.set p[data-v-6b3dcf91] {\n  width: 70%;\n  background-color: #3998fc;\n  text-align: center;\n  color: #fff;\n  border-radius: 5px;\n  height: 40px;\n  line-height: 40px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=7.1a49d8fd7acf97485a76.js.map