webpackJsonp([81],{"7Z6I":function(t,n,e){n=t.exports=e("FZ+f")(!1),n.push([t.i,"\n.badge[data-v-35354f19] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n  margin-top: 5.6rem;\n  font-size: 0.426667rem;\n}\n.popuptip[data-v-35354f19] {\n  padding: 0.266667rem 0.426667rem;\n  font-size: 0.32rem;\n  color: #999999;\n  background-color: #eeeeee;\n}\n.item-text[data-v-35354f19] {\n  font-size: 0.32rem;\n  width: 1.466667rem;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.bar-animate[data-v-35354f19] {\n  -webkit-transition: all 0.3s cubic-bezier(0.7, 0.03, 0.38, 0.9);\n  transition: all 0.3s cubic-bezier(0.7, 0.03, 0.38, 0.9);\n  /*transition-property:transform,scale,width,height,opacity;*/\n  /*transition-duration: 0.3s;*/\n  /*transition-timing-function: cubic-bezier(0.7, 0.03, 0.38, 0.9);*/\n}\n.icon-box[data-v-35354f19] {\n  display: inline-block;\n  width: 1.333333rem;\n  height: 1.333333rem;\n  font-size: 0.48rem;\n  text-align: center;\n  line-height: 1.333333rem;\n  border: 0.026667rem dashed #666666;\n  border-radius: 0.133333rem;\n}\n.scale-usual[data-v-35354f19] {\n  position: relative;\n  width: 1.333333rem;\n  height: 1.333333rem;\n  top: 2.133333rem;\n  left: 50%;\n  margin-left: -0.666667rem;\n  text-align: center;\n}\n.item-position0[data-v-35354f19] {\n  /*top: -35px;*/\n  top: 0;\n  left: -1.866667rem;\n}\n.item-position3[data-v-35354f19] {\n  bottom: -2.266667rem;\n  left: 0;\n}\n.item-position4[data-v-35354f19] {\n  top: 1.733333rem;\n  left: -1.866667rem;\n}\n.item-position1[data-v-35354f19] {\n  top: 0;\n  right: -1.866667rem;\n}\n.item-position2[data-v-35354f19] {\n  top: -1.733333rem;\n  left: 0;\n}\n.item-position5[data-v-35354f19] {\n  top: 0.533333rem;\n  left: -1.2rem;\n}\n.item-length5 .item-position0[data-v-35354f19],\n.item-length5 .item-position1[data-v-35354f19] {\n  top: -0.4rem;\n}\n.item-length5 .item-position3[data-v-35354f19] {\n  bottom: unset;\n  left: unset;\n  top: 1.733333rem;\n  right: -1.866667rem;\n}\n.item-length5 .item-position5[data-v-35354f19] {\n  top: unset;\n  bottom: -3.333333rem;\n  left: 0;\n}\n.item-length7 .item-position0[data-v-35354f19],\n.item-length7 .item-position1[data-v-35354f19] {\n  top: -1.733333rem;\n}\n.item-length7 .item-position3[data-v-35354f19] {\n  bottom: unset;\n  left: unset;\n  top: 0.213333rem;\n  right: -1.866667rem;\n}\n.item-length7 .item-position4[data-v-35354f19] {\n  top: 0.213333rem;\n}\n.item-length7 .item-position5[data-v-35354f19] {\n  top: 2.266667rem;\n  left: -1.866667rem;\n}\n.item-length7 .item-position6[data-v-35354f19] {\n  top: 2.266667rem;\n  right: -1.866667rem;\n}\n.item-length7 .item-position7[data-v-35354f19] {\n  top: 2.266667rem;\n  left: 0;\n}\n.bar-item-positon[data-v-35354f19] {\n  position: absolute;\n}",""])},SqEo:function(t,n,e){var i=e("7Z6I");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("26557aa2",i,!0,{})},XyvI:function(t,n,e){"use strict";function i(t){e("SqEo")}Object.defineProperty(n,"__esModule",{value:!0});var o=e("mvHQ"),a=e.n(o),s=e("IcnI"),r={name:"toolBarControl",data:function(){return{checked4:!1,checked5:!1,showLeftCorner:!1,workList:[],itemIndex:0,activeIndex:0,itemSelect:[{text:"警情",children:[{text:"我的警情",id:1,iconType:"vant",icon:"van-icon-fire-o"},{text:"查人知警",id:2,iconType:"vant",icon:"van-icon-phone-o"},{text:"今日说法",id:3,iconType:"vant",icon:"van-icon-gift-o"},{text:"新闻联播",id:4,iconType:"vant",icon:"van-icon-gem-o"},{text:"焦点访谈",id:5,iconType:"vant",icon:"van-icon-gem-o"},{text:"新说唱",id:6,iconType:"vant",icon:"van-icon-gem-o"},{text:"动物世界",id:7,iconType:"vant",icon:"van-icon-gem-o"},{text:"今日股市",id:8,iconType:"vant",icon:"van-icon-gem-o"},{text:"自定义",id:9,iconType:"vant",icon:"van-icon-gem-o",link:"/toolBarControl"}]},{text:"警情1",children:[{text:"我的警情1",id:11,iconType:"vant",icon:"van-icon-fire-o"},{text:"查人知警1",id:12,iconType:"vant",icon:"van-icon-phone-o"},{text:"今日说法1",id:13,iconType:"vant",icon:"van-icon-gift-o"},{text:"新闻联播1",id:14,iconType:"vant",icon:"van-icon-gem-o"},{text:"焦点访谈1",id:15,iconType:"vant",icon:"van-icon-gem-o"},{text:"新说唱1",id:16,iconType:"vant",icon:"van-icon-gem-o"},{text:"动物世界1",id:17,iconType:"vant",icon:"van-icon-gem-o"},{text:"今日股市1",id:18,iconType:"vant",icon:"van-icon-gem-o"}]}]}},created:function(){var t=JSON.parse(localStorage.getItem("workList"));this.workList=t||s.b.workList},computed:{showInitPopup:{get:function(){return s.b.showInitPopup},set:function(t){s.b.showInitPopup=t}}},methods:{clickNav:function(t){console.log(t)},clickItem:function(t){this.showLeftCorner=!1,this.workList[this.itemIndex]=t,localStorage.setItem("workList",a()(this.workList)),s.b.workList=this.workList},onInput:function(t){this.checked4=t,s.b.assitsBtn=t},onInput1:function(t){this.checked5=t,s.b.assitsBgBtn=t},initBar:function(){s.b.showInitPopup=!0},workHandle:function(t){this.showLeftCorner=!0,this.itemIndex=t,this.findChoosed()},findChoosed:function(){var t=JSON.parse(localStorage.getItem("workList")),n=this.itemSelect;if(t)for(var e=0;e<n.length;e++)n[e].children.forEach(function(n){for(var e=0,i=0;i<t.length;i++)n.id==t[i].id?(n.disabled=!0,e=1):0==e&&(n.disabled=!1)})},less:function(t){this.workList.push({text:"",link:"",iconType:"vant",icon:"van-icon-plus"}),localStorage.setItem("workList",a()(this.workList)),s.b.workList=this.workList},more:function(t){this.workList.shift({text:"",link:"",iconType:"vant",icon:"van-icon-plus"}),localStorage.setItem("workList",a()(this.workList)),s.b.workList=this.workList}}},c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("fh-nav-bar",{attrs:{title:"自定义辅助按钮",fixed:"",placeholder:"",leftarrow:""}}),t._v(" "),e("van-cell-group",[e("van-cell",{attrs:{title:"触控按钮"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("van-switch",{attrs:{value:t.checked4,size:"16"},on:{input:t.onInput}})]},proxy:!0}])}),t._v(" "),e("van-cell",{attrs:{title:"触控图标按钮"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("van-switch",{attrs:{value:t.checked5,size:"16"},on:{input:t.onInput1}})]},proxy:!0}])}),t._v(" "),e("van-cell",{attrs:{"is-link":"",title:"自定义辅助选项"},on:{click:t.initBar}})],1),t._v(" "),e("van-popup",{style:{height:"70%"},attrs:{round:"",position:"top"},model:{value:t.showInitPopup,callback:function(n){t.showInitPopup=n},expression:"showInitPopup"}},[e("div",[e("div",{staticClass:"popuptip"},[t._v("点击需要更改的图标")]),t._v(" "),e("div",{ref:"barModal",staticClass:"bar-animate"},[e("div",{class:["scale-usual",{"item-length5":t.workList.length>4&&t.workList.length<7},{"item-length7":t.workList.length>=7}]},t._l(t.workList,function(n,i){return e("div",{key:n.id,class:["bar-item-positon","item-position"+i],on:{click:function(n){return n.preventDefault(),t.workHandle(i)}}},[e("div",[e("div",{staticClass:"icon-box"},[e("i",{class:[{"van-icon":"vant"==n.iconType,aidicon:"fh"==n.iconType},n.icon]})]),t._v(" "),e("div",{staticClass:"item-text"},[t._v(t._s(n.text))])])])}),0)]),t._v(" "),e("div",{staticClass:"popuptip badge"},[e("span",{staticStyle:{"margin-right":"10px"}},[t._v(t._s(t.workList.length)+"个图标")]),t._v(" "),e("van-stepper",{attrs:{min:2,max:8,"disable-input":""},on:{plus:t.less,minus:t.more},model:{value:t.workList.length,callback:function(n){t.$set(t.workList,"length",n)},expression:"workList.length"}})],1)])]),t._v(" "),e("van-popup",{style:{height:"100%",width:"100%",paddingTop:"40px"},attrs:{position:"left",closeable:"","close-icon":"close"},model:{value:t.showLeftCorner,callback:function(n){t.showLeftCorner=n},expression:"showLeftCorner"}},[e("van-tree-select",{style:{height:"100%",width:"100%"},attrs:{items:t.itemSelect,"main-active-index":t.activeIndex},on:{"click-nav":t.clickNav,"click-item":t.clickItem,"update:mainActiveIndex":function(n){t.activeIndex=n},"update:main-active-index":function(n){t.activeIndex=n}}})],1)],1)},l=[],p={render:c,staticRenderFns:l},d=p,m=e("VU/8"),v=i,f=m(r,d,!1,v,"data-v-35354f19",null);n.default=f.exports}});