webpackJsonp([109],{"4x3T":function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t={i18n:{"zh-CN":{label:"地址",disabled:"禁用搜索框",inputAlign:"搜索框内容对齐",background:"自定义背景色",placeholder:"请输入搜索关键词",customButton:"自定义按钮",listenToEvents:"事件监听",basicUsage:"基本用法"},"en-US":{label:"Address",disabled:"Disabled",inputAlign:"Input Align",background:"Custom Background Color",placeholder:"Placeholder",customButton:"Custom Action Button",listenToEvents:"Listen to Events",basicUsage:"basicUsage"}},data:function(){return{value1:"",value2:"",value3:"",value4:"",value5:"",value6:""}},methods:{onSearch:function(e){this.$toast(e)},onCancel:function(){this.$toast(this.t("cancel"))}}},o=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("demo-section",[l("fh-nav-bar",{attrs:{title:"Search搜索",fixed:"",placeholder:"",leftarrow:""}}),e._v(" "),l("demo-block",{attrs:{title:e.t("basicUsage")}},[l("van-search",{attrs:{placeholder:e.t("placeholder")},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1),e._v(" "),l("demo-block",{attrs:{title:e.t("listenToEvents")}},[l("form",{attrs:{action:"/"}},[l("van-search",{attrs:{placeholder:e.t("placeholder"),"show-action":""},on:{search:e.onSearch,cancel:e.onCancel},model:{value:e.value5,callback:function(a){e.value5=a},expression:"value5"}})],1)]),e._v(" "),l("demo-block",{attrs:{title:e.t("inputAlign")}},[l("van-search",{attrs:{placeholder:e.t("placeholder"),"input-align":"center"},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}})],1),e._v(" "),l("demo-block",{attrs:{title:e.t("disabled")}},[l("van-search",{attrs:{placeholder:e.t("placeholder"),disabled:""},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1),e._v(" "),l("demo-block",{attrs:{title:e.t("background")}},[l("van-search",{attrs:{placeholder:e.t("placeholder"),shape:"round",background:"#4fc08d"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),e._v(" "),l("demo-block",{attrs:{title:e.t("customButton")}},[l("van-search",{attrs:{"show-action":"",label:e.t("label"),placeholder:e.t("placeholder")},on:{search:e.onSearch},scopedSlots:e._u([{key:"action",fn:function(){return[l("div",{on:{click:e.onSearch}},[e._v(e._s(e.t("search")))])]},proxy:!0}]),model:{value:e.value6,callback:function(a){e.value6=a},expression:"value6"}})],1)],1)},n=[],c={render:o,staticRenderFns:n},s=c,r=l("VU/8"),u=r(t,s,!1,null,null,null);a.default=u.exports}});