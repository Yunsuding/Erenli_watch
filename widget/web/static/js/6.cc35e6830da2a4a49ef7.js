webpackJsonp([6],{"5x8m":function(e,t,n){var i=n("ytfU");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("e7b4191c",i,!0,{})},"I+Lo":function(e,t,n){"use strict";function i(e){n("5x8m")}Object.defineProperty(t,"__esModule",{value:!0});var o={name:"state",data:function(){return{stateValue:"",scroll:null}},mounted:function(){this.getInfo()},methods:{states:function(){this.common.commonFun.ajax({dom:this,url:this.common.apiUrl.editWorkStatus,type:"post",data:{work_status:this.stateValue},success:function(e,t){console.log("response",t)}})},uptasa:function(){2!=this.stateValue&&(this.stateValue="2",this.states())},uptasb:function(){1!=this.stateValue&&(this.stateValue="1",this.states())},uptasc:function(){0!=this.stateValue&&(this.stateValue="0",this.states())},getInfo:function(){var e=this;this.common.commonFun.ajax({dom:this,url:this.common.apiUrl.getMine,type:"post",data:{},success:function(t,n){e.stateValue=t.work_status,e.stateValue=e.stateValue.toString()}})},onScroll:function(e){this.scroll=e.left}},watch:{scroll:function(){this.scroll<-50&&this.$router.push("/operation")}}},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroller",{ref:"scrollerEvent",attrs:{"lock-y":""},on:{"on-scroll":e.onScroll}},[n("div",{staticClass:"state"},[n("div",{staticClass:"box"},[n("checker",{attrs:{"default-item-class":"pitch","selected-item-class":"default","radio-required":""},model:{value:e.stateValue,callback:function(t){e.stateValue=t},expression:"stateValue"}},[n("checker-item",{attrs:{value:"2"},on:{"on-item-click":e.uptasa}},[e._v("繁忙")]),e._v(" "),n("checker-item",{staticClass:"space",attrs:{value:"1"},on:{"on-item-click":e.uptasb}},[e._v("空闲")]),e._v(" "),n("checker-item",{attrs:{value:"0"},on:{"on-item-click":e.uptasc}},[e._v("离开")])],1)],1)])])},A=[],c={render:a,staticRenderFns:A},l=c,s=n("VU/8"),r=i,B=s(o,l,!1,r,"data-v-f3a76c5e",null);t.default=B.exports},ytfU:function(e,t,n){var i=n("kxFB");t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.flexRowJcAc[data-v-f3a76c5e] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.flexRowFwJcAc[data-v-f3a76c5e] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.flexClJc[data-v-f3a76c5e] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.flexRowAc[data-v-f3a76c5e] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n@font-face {\n  font-family: 'FZCYJ';\n  src: url("+i(n("Cazu"))+");\n}\n.state[data-v-f3a76c5e] {\n  height: 320px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.state .box[data-v-f3a76c5e] {\n  text-align: center;\n}\n.state .box .pitch[data-v-f3a76c5e] {\n  font-size: 24px;\n  color: #fff;\n  width: 90%;\n  height: 64px;\n  border-radius: 5px;\n  background-color: #4B4B4B;\n  line-height: 64px;\n  text-align: center;\n}\n.state .box .space[data-v-f3a76c5e] {\n  margin: 15px 0;\n}\n.state .box .default[data-v-f3a76c5e] {\n  background-color: #55DFDA;\n}\n","",{version:3,sources:["/Users/steven/Desktop/web/gitweb/wc_resources/src/components/state.vue"],names:[],mappings:";AACA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,+BAA+B;EAC/B,8BAA8B;EAC9B,4BAA4B;UACpB,oBAAoB;EAC5B,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;EAChC,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,+BAA+B;EAC/B,8BAA8B;EAC9B,4BAA4B;UACpB,oBAAoB;EAC5B,wBAAwB;UAChB,gBAAgB;EACxB,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;EAChC,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;CACjC;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,+BAA+B;EAC/B,8BAA8B;EAC9B,4BAA4B;UACpB,oBAAoB;EAC5B,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,qBAAqB;EACrB,mCAAqC;CACtC;AACD;EACE,cAAc;EACd,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;CACjC;AACD;EACE,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,0BAA0B;EAC1B,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,eAAe;CAChB;AACD;EACE,0BAA0B;CAC3B",file:"state.vue",sourcesContent:["\n.flexRowJcAc[data-v-f3a76c5e] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.flexRowFwJcAc[data-v-f3a76c5e] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.flexClJc[data-v-f3a76c5e] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.flexRowAc[data-v-f3a76c5e] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n@font-face {\n  font-family: 'FZCYJ';\n  src: url('../assets/less/FZCYJ.otf');\n}\n.state[data-v-f3a76c5e] {\n  height: 320px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.state .box[data-v-f3a76c5e] {\n  text-align: center;\n}\n.state .box .pitch[data-v-f3a76c5e] {\n  font-size: 24px;\n  color: #fff;\n  width: 90%;\n  height: 64px;\n  border-radius: 5px;\n  background-color: #4B4B4B;\n  line-height: 64px;\n  text-align: center;\n}\n.state .box .space[data-v-f3a76c5e] {\n  margin: 15px 0;\n}\n.state .box .default[data-v-f3a76c5e] {\n  background-color: #55DFDA;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=6.cc35e6830da2a4a49ef7.js.map