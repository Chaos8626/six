webpackJsonp([111],{"1KQc":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={i18n:{"zh-CN":{useSlot:"使用插槽"},"en-US":{useSlot:"Use Slot"}},methods:{onClickLeft:function(){this.$toast("返回")},onClickRight:function(){this.$toast("按钮")}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("fh-nav-bar",{attrs:{title:"Navbar",fixed:"",placeholder:"",leftarrow:""}}),t._v(" "),n("demo-block",{attrs:{title:"基础用法"}},[n("van-nav-bar",{attrs:{title:"标题","left-text":"返回","right-text":"按钮","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}})],1),t._v(" "),n("demo-block",{attrs:{title:"高级用法"}},[n("van-nav-bar",{attrs:{title:"标题","left-text":"返回","left-arrow":""},scopedSlots:t._u([{key:"right",fn:function(){return[n("van-icon",{attrs:{name:"search",size:"18"}})]},proxy:!0}])})],1)],1)},o=[],a={render:r,staticRenderFns:o},i=a,s=n("VU/8"),c=s(l,i,!1,null,null,null);e.default=c.exports}});