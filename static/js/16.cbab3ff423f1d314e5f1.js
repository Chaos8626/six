webpackJsonp([16],{"5Frx":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.box[data-v-32e38a80] {\n  height: 100%;\n  overflow: hidden;\n}\n.box .van-popup__close-icon[data-v-32e38a80] {\n  top: 0.213333rem!important;\n}\n.title-text[data-v-32e38a80] {\n  font-size: 0.533333rem;\n  font-weight: bold;\n  color: #111111;\n  padding: 0.32rem 0 0 0.4rem;\n  /*border-bottom: 1px solid #dddddd;*/\n}\n.mainlist[data-v-32e38a80] {\n  height: 60vh;\n  overflow: auto;\n  /*border-bottom: 1px solid #9d9d9d;*/\n  border-top: 0.026667rem solid #9d9d9d;\n  margin-bottom: 0.266667rem;\n  margin-top: 0.32rem;\n}\n.list[data-v-32e38a80] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  border-bottom: 0.026667rem solid #9d9d9d;\n  font-size: 0.48rem;\n  height: 1.333333rem;\n  padding: 0.32rem 0 0 0.4rem;\n}\n.list .title[data-v-32e38a80] {\n  width: 40%;\n  color: #111111;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.list .time[data-v-32e38a80] {\n  color: #9d9d9d;\n}\n\n/*.no-title{*/\n\n/*width: 40%;*/\n\n/*color: #F86060;*/\n\n/*font-size: 16px;*/\n\n/*margin-left: 35%;*/\n\n/*}*/\n.btnBox[data-v-32e38a80] {\n  height: 20vh;\n}\n.btn[data-v-32e38a80] {\n  /*position: fixed;*/\n  /*bottom: 20px;*/\n  /*height: 50px;*/\n  border-radius: 1.333333rem;\n  background-color: #0354A6;\n  font-size: 0.453333rem;\n  color: #ffffff;\n  text-align: center;\n  margin-left: 20%;\n  margin-top: 0.133333rem;\n  /*margin-bottom: 5px;*/\n}",""])},IERZ:function(t,e,n){var a=n("IjAC");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("c57d63e4",a,!0,{})},IjAC:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.box[data-v-50f12d94] {\n  height: 100%;\n  overflow: hidden;\n}\n.box .van-popup__close-icon[data-v-50f12d94] {\n  top: 0.213333rem!important;\n}\n.title-text[data-v-50f12d94] {\n  font-size: 0.533333rem;\n  font-weight: bold;\n  color: #111111;\n  padding: 0.32rem 0.4rem 0 0.4rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  /*border-bottom: 1px solid #dddddd;*/\n}\n.mainlist[data-v-50f12d94] {\n  height: 50vh;\n  overflow: auto;\n  /*border-bottom: 1px solid #9d9d9d;*/\n  border-top: 0.026667rem solid #9d9d9d;\n  margin-bottom: 0.266667rem;\n  margin-top: 0.32rem;\n}\n.swipeList[data-v-50f12d94] {\n  border-bottom: 0.026667rem solid #9d9d9d;\n  height: 1.2rem;\n}\n.van-cell[data-v-50f12d94] {\n  font-size: 0.426667rem;\n  color: #111111;\n}\n.edit[data-v-50f12d94] {\n  height: 1.2rem;\n  border: 0;\n  /*padding-left: 15px;*/\n  font-size: 0.426667rem;\n  color: #111111;\n  width: 60%;\n}\n.step[data-v-50f12d94] {\n  width: 40%;\n  text-align: right;\n  -webkit-align-self: center;\n          align-self: center;\n}\n\n/*.no-title{*/\n\n/*width: 40%;*/\n\n/*color: #F86060;*/\n\n/*font-size: 16px;*/\n\n/*margin-left: 35%;*/\n\n/*}*/\n.btnBox[data-v-50f12d94] {\n  height: 20vh;\n}\n.btn[data-v-50f12d94] {\n  /*position: fixed;*/\n  /*bottom: 20px;*/\n  /*height: 50px;*/\n  border-radius: 1.333333rem;\n  background-color: #0354A6;\n  font-size: 0.453333rem;\n  color: #ffffff;\n  text-align: center;\n  margin-left: 20%;\n  margin-top: 0.133333rem;\n  /*margin-bottom: 5px;*/\n}",""])},N5aT:function(t,e,n){"use strict";function a(t){n("WxjN")}function o(t){n("IERZ")}function i(t){n("Pydf")}Object.defineProperty(e,"__esModule",{value:!0});var r=n("mvHQ"),s=n.n(r),l={name:"recordDraw",data:function(){return{recInfo:[],show:this.value,icon:"cross",popupHeight:"80%",popupWidth:"100%",round:!0}},props:{value:{default:!1},position:{default:"bottom"},closeable:{default:!0},closeImg:{default:"cross"},width:{default:"100%"},height:{default:"80%"}},methods:{clean:function(){localStorage.removeItem("recInfo"),localStorage.setItem("deleteFlag",!0),this.recInfo=localStorage.getItem("recInfo")},close:function(){this.$emit("input",this.show)}},watch:{value:function(t){this.recInfo=JSON.parse(localStorage.getItem("recInfo")),this.show=t}}},d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("van-popup",{ref:"popup",style:"height:"+t.popupHeight+";width:"+t.popupWidth+";overflow: hidden",attrs:{position:t.position,round:t.round},on:{close:t.close},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"title-text"},[t._v("中奖纪录")]),t._v(" "),n("div",{staticClass:"mainlist"},t._l(t.recInfo,function(e){return n("div",{staticClass:"list"},[n("div",{staticClass:"title"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n("div",{staticClass:"time"},[t._v(t._s(e.time))])])}),0),t._v(" "),n("div",{staticClass:"btnBox"},[n("van-button",{staticClass:"btn",on:{click:t.clean}},[t._v("清除记录")])],1)])],1)},c=[],p={render:d,staticRenderFns:c},f=p,m=n("VU/8"),u=a,h=m(l,f,!1,u,"data-v-32e38a80",null),b=h.exports,g={name:"editDraw",data:function(){return{params:[],show:this.value,icon:"cross",popupHeight:"80%",popupWidth:"100%",arrFlag:!1,round:!0}},props:{value:{default:!1},position:{default:"bottom"},closeable:{default:!0},closeImg:{default:"cross"},width:{default:"100%"},height:{default:"80%"}},methods:{edit:function(){this.params.push({})},savaParam:function(){var t=0;this.params.forEach(function(e,n){e.probability=Number(e.probability),e.minNum=t,t+=e.probability,e.maxNum=t}),100!==t?this.$dialog.alert({title:"温馨提示",message:"设置的中奖概率不等于100，请重新设置！"}):(localStorage.setItem("arrscale",s()(this.params)),this.show=!1,this.arrFlag=!this.arrFlag);var e=JSON.parse(localStorage.getItem("arrscale"));this.$emit("getParams",e)},close:function(){this.params=JSON.parse(localStorage.getItem("arrscale")),this.$emit("input",this.show)},deleteDraw:function(t){this.params.splice(t,1)}},watch:{value:function(t){this.show=t}},mounted:function(){this.params=JSON.parse(localStorage.getItem("arrscale"))}},v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("van-popup",{ref:"popup",style:"height:"+t.popupHeight+";width:"+t.popupWidth+";overflow: hidden;",attrs:{position:t.position,round:t.round},on:{close:t.close},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"title-text"},[n("div",{staticStyle:{width:"60%"}},[t._v("编辑转盘内容")]),t._v(" "),n("div",{staticStyle:{width:"40%","text-align":"right"}},[t._v("中奖概率")])]),t._v(" "),n("div",{staticClass:"mainlist"},t._l(t.params,function(e,a){return n("van-swipe-cell",{key:a,staticClass:"swipeList",scopedSlots:t._u([{key:"right",fn:function(){return[n("van-button",{attrs:{square:"",type:"danger",text:"删除"},on:{click:function(e){return t.deleteDraw(a)}}})]},proxy:!0}],null,!0)},[n("div",{staticStyle:{display:"flex",padding:"0 15px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],staticClass:"edit",attrs:{type:"text",placeholder:"请输入内容"},domProps:{value:e.name},on:{input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}}),t._v(" "),n("van-stepper",{staticClass:"step",model:{value:e.probability,callback:function(n){t.$set(e,"probability",n)},expression:"item.probability"}})],1)])}),1),t._v(" "),n("div",{staticClass:"btnBox"},[n("van-button",{staticClass:"btn",on:{click:t.edit}},[t._v("添加新选项")]),t._v(" "),n("van-button",{staticClass:"btn",on:{click:t.savaParam}},[t._v("保存编辑")])],1)])],1)},x=[],w={render:v,staticRenderFns:x},y=w,k=n("VU/8"),_=o,I=k(g,y,!1,_,"data-v-50f12d94",null),C=I.exports,S={components:{recordDraw:b,editDraw:C},data:function(){return{blocks:[{padding:"8px",background:"#0354A6"}],prizes:[],buttons:[{fonts:[{text:"Go!",top:-12,fontColor:"white"}],radius:"22%",background:"#0354A6",pointer:!0}],defaultStyle:{fontColor:"#0354A6",fontSize:"14px"},defaultConfig:{gutter:"1px"},title:"",params:[],recInfo:[],id:"",showBottom:!1,showEdit:!1}},created:function(){var t=JSON.parse(localStorage.getItem("arrscale"));null===t||0===t.length?(this.params=[{name:"数独一刻钟",probability:1},{name:"轮滑半小时",probability:3},{name:"跳绳一刻钟",probability:90},{name:"看电视半小时",probability:2},{name:"奥特曼1个",probability:3},{name:"谢谢惠顾",probability:1}],localStorage.setItem("arrscale",s()(this.params))):this.params=t;var e=JSON.parse(localStorage.getItem("recInfo"));null===e||0===e.length?this.recInfo=[]:this.recInfo=e,this.getPrizesList()},methods:{getSort:function(){var t=this,e=parseInt(100*Math.random()),n=0;this.params.forEach(function(a,o){a.probability=Number(a.probability),a.minNum=n,n+=a.probability,a.maxNum=n,e>=a.minNum&&e<a.maxNum&&(t.id=o)})},getPrizesList:function(){var t=[];this.params.sort(function(t,e){return t.probability-e.probability}),this.params.forEach(function(e,n){t.push({title:e.name,background:"#DAECF4",fonts:[{text:e.name,top:"30%"}],fontSize:"10px"})}),this.prizes=t},startCallBack:function(){var t=this;this.getSort(),this.$refs.LuckyWheel.play(),setTimeout(function(){t.$refs.LuckyWheel.stop(t.id)},1e3)},endCallBack:function(t){"true"==localStorage.getItem("deleteFlag",this.deleteFlag)&&(this.recInfo=[]);var e=new Date,n=e.getFullYear(),a=e.getMonth()+1,o=e.getDate(),i=e.getHours(),r=e.getMinutes(),l=e.getSeconds();a=a<10?"0"+a:a,o=o<10?"0"+o:o,i=i<10?"0"+i:i,r=r<10?"0"+r:r,l=l<10?"0"+l:l;var d=n+"-"+a+"-"+o+"  "+i+":"+r+":"+l;this.recInfo.unshift({name:t.title,time:d}),localStorage.setItem("recInfo",s()(this.recInfo)),this.title=""+t.title,this.$dialog.alert({title:"温馨提示",message:this.title}),localStorage.setItem("deleteFlag",!1)},goConfiguration:function(){this.showEdit=!this.showEdit;JSON.parse(localStorage.getItem("arrscale"))},record:function(){this.showBottom=!this.showBottom},getParams:function(t){this.params=t,this.getPrizesList()}}},z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("fh-nav-bar",{attrs:{title:"抽奖组件",fixed:"",placeholder:"",leftarrow:""}}),t._v(" "),n("LuckyWheel",{ref:"LuckyWheel",staticClass:"content",attrs:{width:"260px",height:"260px",blocks:t.blocks,prizes:t.prizes,buttons:t.buttons,defaultStyle:t.defaultStyle,defaultConfig:t.defaultConfig},on:{start:t.startCallBack,end:t.endCallBack}}),t._v(" "),n("div",[n("van-button",{staticClass:"btn",on:{click:t.goConfiguration}},[t._v("活动配置")])],1),t._v(" "),n("div",[n("van-button",{staticClass:"btn",on:{click:t.record}},[t._v("中奖记录")])],1),t._v(" "),n("recordDraw",{attrs:{position:"bottom",width:"100%",height:"50%"},model:{value:t.showBottom,callback:function(e){t.showBottom=e},expression:"showBottom"}}),t._v(" "),n("editDraw",{attrs:{position:"bottom",width:"100%",height:"50%"},on:{getParams:t.getParams},model:{value:t.showEdit,callback:function(e){t.showEdit=e},expression:"showEdit"}})],1)},F=[],N={render:z,staticRenderFns:F},j=N,E=n("VU/8"),B=i,P=E(S,j,!1,B,"data-v-161e4da5",null);e.default=P.exports},Pydf:function(t,e,n){var a=n("jpe7");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("f6fb6954",a,!0,{})},WxjN:function(t,e,n){var a=n("5Frx");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("ac198a52",a,!0,{})},jpe7:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.van-nav-bar[data-v-161e4da5] {\n  background: deeppink;\n}\n.content[data-v-161e4da5] {\n  margin: 0.533333rem auto;\n  /*margin: auto;*/\n}\n.title[data-v-161e4da5] {\n  font-size: 0.8rem;\n  text-align: center;\n}\n.configuration[data-v-161e4da5] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  padding: 0 1.333333rem;\n}\n.configuration .item[data-v-161e4da5] {\n  background: #f9e3bb;\n  padding: 0.133333rem 0.4rem;\n  border-radius: 0.533333rem;\n}\n.btn[data-v-161e4da5] {\n  height: 1.333333rem;\n  border-radius: 1.333333rem;\n  background-color: #0354A6;\n  font-size: 0.453333rem;\n  color: #ffffff;\n  text-align: center;\n  margin-left: 20%;\n  margin-bottom: 0.133333rem;\n}",""])}});