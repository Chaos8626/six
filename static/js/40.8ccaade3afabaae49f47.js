webpackJsonp([40],{"6ZJJ":function(t,a,e){"use strict";function n(t){e("LgMf")}Object.defineProperty(a,"__esModule",{value:!0});var o=e("Bl3V"),i=e("2sLL"),r=e("t5DY"),s=(i.a,o.a,{name:"photo",components:{XButton:i.a,KLayout:o.a},data:function(){return{showFlag:!1,image:"",image64:""}},created:function(){var t=this;window.getCode=t.getCode},methods:{takePhoto:function(){return Object(r.m)("getCode")},getCode:function(t){this.showFlag=!0,this.image="data:image/png;base64,"+t,console.log(t)}}}),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("fh-nav-bar",{staticClass:"navs",attrs:{title:"相册&相机",fixed:"",placeholder:"",leftarrow:""}}),t._v(" "),e("x-button",{nativeOn:{click:function(a){return t.takePhoto()}}},[t._v("\n      相机/相册\n    ")]),t._v(" "),e("div",{style:t.showFlag?"display:block":"display:none"},[e("img",{staticClass:"imageShow",attrs:{src:t.image}})])],1)},l=[],c={render:d,staticRenderFns:l},f=c,g=e("VU/8"),u=n,h=g(s,f,!1,u,"data-v-df042502",null);a.default=h.exports},Fo9l:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,"\n.xhr[data-v-df042502] {\n  padding: 0;\n  margin: 0;\n}\n#word[data-v-df042502] {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.imageShow[data-v-df042502] {\n  width: 100% !important;\n  height: 50% !important;\n}",""])},LgMf:function(t,a,e){var n=e("Fo9l");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("16d88a00",n,!0,{})}});