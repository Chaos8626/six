webpackJsonp([71],{"6vg0":function(e,c,o){"use strict";function t(e){o("7KBx")}Object.defineProperty(c,"__esModule",{value:!0});var n={i18n:{"zh-CN":{basicUsage:"基本用法",disabled:"禁用状态",checkbox:"复选框",customIcon:"自定义图标",customIconSize:"自定义大小",customColor:"自定义颜色",customShape:"自定义形状",title3:"复选框组",title4:"限制最大可选数",title5:"搭配单元格组件使用",toggleAll:"全选与反选",checkAll:"全选",inverse:"反选",horizontal:"水平排列",disableLabel:"禁用文本点击"},"en-US":{checkbox:"Checkbox",customIcon:"Custom Icon",customIconSize:"Custom Icon Size",customColor:"Custom Color",customShape:"Custom Shape",title3:"Checkbox Group",title4:"Maximum amount of checked options",title5:"Inside a Cell",toggleAll:"Toggle All",checkAll:"Check All",inverse:"Inverse",horizontal:"Horizontal",disableLabel:"Disable label click"}},data:function(){return{checkbox1:!0,checkbox2:!0,checkbox3:!0,checkboxShape:!0,checkboxLabel:!0,checboxIcon:!0,list:["a","b"],result:["a","b"],result2:[],result3:[],checkAllResult:[],horizontalResult:[],activeIcon:o("dVfe"),inactiveIcon:o("7Otq")}},methods:{toggle:function(e){this.$refs.checkboxes[e].toggle()},checkAll:function(){this.$refs.group.toggleAll(!0)},toggleAll:function(){this.$refs.group.toggleAll()}}},l=function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("div",{staticClass:"demo-checkbox-warp"},[o("fh-nav-bar",{attrs:{title:"Checkbox复选框",fixed:"",placeholder:"",leftarrow:""}}),e._v(" "),o("demo-section",[o("demo-block",{attrs:{title:e.t("basicUsage")}},[o("van-checkbox",{model:{value:e.checkbox1,callback:function(c){e.checkbox1=c},expression:"checkbox1"}},[e._v(e._s(e.t("checkbox")))])],1),e._v(" "),o("demo-block",{attrs:{title:e.t("disabled")}},[o("van-checkbox",{attrs:{value:!1,disabled:""}},[e._v("\n        "+e._s(e.t("checkbox"))+"\n      ")]),e._v(" "),o("van-checkbox",{attrs:{value:!0,disabled:""}},[e._v("\n        "+e._s(e.t("checkbox"))+"\n      ")])],1),e._v(" "),o("demo-block",{attrs:{title:e.t("customShape")}},[o("van-checkbox",{attrs:{shape:"square"},model:{value:e.checkboxShape,callback:function(c){e.checkboxShape=c},expression:"checkboxShape"}},[e._v("\n        "+e._s(e.t("customColor"))+"\n      ")])],1),e._v(" "),o("demo-block",{attrs:{title:e.t("customColor")}},[o("van-checkbox",{attrs:{"checked-color":"#07c160"},model:{value:e.checkbox2,callback:function(c){e.checkbox2=c},expression:"checkbox2"}},[e._v("\n        "+e._s(e.t("customColor"))+"\n      ")])],1),e._v(" "),o("demo-block",{attrs:{title:e.t("customIconSize")}},[o("van-checkbox",{attrs:{"icon-size":"24px"},model:{value:e.checboxIcon,callback:function(c){e.checboxIcon=c},expression:"checboxIcon"}},[e._v("\n        "+e._s(e.t("customIconSize"))+"\n      ")])],1),e._v(" "),o("demo-block",{attrs:{title:e.t("customIcon")}},[o("van-checkbox",{scopedSlots:e._u([{key:"icon",fn:function(c){var t=c.checked;return[o("img",{attrs:{src:t?e.activeIcon:e.inactiveIcon}})]}}]),model:{value:e.checkbox3,callback:function(c){e.checkbox3=c},expression:"checkbox3"}},[e._v("\n        "+e._s(e.t("customIcon"))+"\n        ")])],1),e._v(" "),o("demo-block",{attrs:{title:e.t("disableLabel")}},[o("van-checkbox",{attrs:{"label-disabled":""},model:{value:e.checkboxLabel,callback:function(c){e.checkboxLabel=c},expression:"checkboxLabel"}},[e._v("\n        "+e._s(e.t("checkbox"))+"\n      ")])],1),e._v(" "),o("demo-block",{attrs:{title:e.t("title3")}},[o("van-checkbox-group",{model:{value:e.result,callback:function(c){e.result=c},expression:"result"}},[o("van-checkbox",{attrs:{name:"a"}},[e._v(e._s(e.t("checkbox"))+" a")]),e._v(" "),o("van-checkbox",{attrs:{name:"b"}},[e._v(e._s(e.t("checkbox"))+" b")])],1)],1),e._v(" "),e.isWeapp?e._e():o("demo-block",{attrs:{title:e.t("horizontal")}},[o("van-checkbox-group",{attrs:{direction:"horizontal"},model:{value:e.horizontalResult,callback:function(c){e.horizontalResult=c},expression:"horizontalResult"}},[o("van-checkbox",{attrs:{name:"a"}},[e._v(e._s(e.t("checkbox"))+" a")]),e._v(" "),o("van-checkbox",{attrs:{name:"b"}},[e._v(e._s(e.t("checkbox"))+" b")])],1)],1),e._v(" "),o("demo-block",{attrs:{title:e.t("title4")}},[o("van-checkbox-group",{attrs:{max:2},model:{value:e.result2,callback:function(c){e.result2=c},expression:"result2"}},[o("van-checkbox",{attrs:{name:"a"}},[e._v(e._s(e.t("checkbox"))+" a")]),e._v(" "),o("van-checkbox",{attrs:{name:"b"}},[e._v(e._s(e.t("checkbox"))+" b")]),e._v(" "),o("van-checkbox",{attrs:{name:"c"}},[e._v(e._s(e.t("checkbox"))+" c")])],1)],1),e._v(" "),e.isWeapp?e._e():o("demo-block",{attrs:{title:e.t("toggleAll")}},[o("van-checkbox-group",{ref:"group",model:{value:e.checkAllResult,callback:function(c){e.checkAllResult=c},expression:"checkAllResult"}},[o("van-checkbox",{attrs:{name:"a"}},[e._v(e._s(e.t("checkbox"))+" a")]),e._v(" "),o("van-checkbox",{attrs:{name:"b"}},[e._v(e._s(e.t("checkbox"))+" b")]),e._v(" "),o("van-checkbox",{attrs:{name:"c"}},[e._v(e._s(e.t("checkbox"))+" c")])],1),e._v(" "),o("div",{staticClass:"demo-checkbox-buttons"},[o("van-button",{attrs:{type:"primary"},on:{click:e.checkAll}},[e._v("\n          "+e._s(e.t("checkAll"))+"\n        ")]),e._v(" "),o("van-button",{attrs:{type:"info"},on:{click:e.toggleAll}},[e._v("\n          "+e._s(e.t("inverse"))+"\n        ")])],1)],1),e._v(" "),o("demo-block",{attrs:{title:e.t("title5")}},[o("van-checkbox-group",{model:{value:e.result3,callback:function(c){e.result3=c},expression:"result3"}},[o("van-cell-group",e._l(e.list,function(c,t){return o("van-cell",{key:t,attrs:{clickable:"",title:e.t("checkbox")+" "+c},on:{click:function(c){return e.toggle(t)}},scopedSlots:e._u([{key:"right-icon",fn:function(){return[o("van-checkbox",{ref:"checkboxes",refInFor:!0,attrs:{name:c}})]},proxy:!0}],null,!0)})}),1)],1)],1)],1)],1)},a=[],s={render:l,staticRenderFns:a},r=s,b=o("VU/8"),i=t,k=b(n,r,!1,i,null,null);c.default=k.exports},"7KBx":function(e,c,o){var t=o("RQ3/");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);o("rjj0")("5a19f9e8",t,!0,{})},"RQ3/":function(e,c,o){c=e.exports=o("FZ+f")(!1),c.push([e.i,"\n.demo-checkbox-warp {\n  padding: 0 0.266667rem;\n  background-color: #fff;\n}\n.demo-checkbox-warp .van-checkbox {\n  margin: 0.133333rem;\n}\n.demo-checkbox-warp .van-doc-demo-block__title {\n  padding-left: 0!important;\n}\n.demo-checkbox-warp img {\n  width: 0.533333rem;\n  height: 0.533333rem;\n}\n.demo-checkbox {\n  background: #fff;\n}\n.demo-checkbox .van-checkbox {\n  margin: 0 0 0.213333rem 0.533333rem;\n}\n.demo-checkbox .van-cell .van-checkbox {\n  margin: 0;\n}\n.demo-checkbox-buttons {\n  margin-top: 0.426667rem;\n}\n.demo-checkbox-buttons .van-button {\n  margin-left: 0.426667rem;\n}\n.demo-checkbox .van-doc-demo-block__title {\n  margin-top: -0.213333rem;\n}",""])}});