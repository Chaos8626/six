webpackJsonp([87],{D2VN:function(t,n,e){var o=e("migG");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("be2d2968",o,!0,{})},"Jp+T":function(t,n,e){"use strict";function o(t){e("D2VN")}Object.defineProperty(n,"__esModule",{value:!0});var i={name:"Dialog",i18n:{"zh-CN":{alert1:"提示弹窗",alert2:"提示弹窗（无标题）",confirm:"确认弹窗",asyncClose:"异步关闭",componentCall:"组件调用",content:"代码是写出来给人看的，附带能在机器上运行"},"en-US":{alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",asyncClose:"Async Close",componentCall:"Component Call"}},data:function(){return{show:!1,currentRate:0,image:e("7Otq")}},methods:{onClickAlert:function(){this.$dialog.alert({title:this.t("title"),message:this.t("content")})},onClickAlert2:function(){this.$dialog.alert({message:this.t("content")})},onClickConfirm:function(){this.$dialog.confirm({title:this.t("title"),message:this.t("content")})},onClickAsyncClose:function(){function t(t,n){"confirm"===t?setTimeout(n,1e3):n()}this.$dialog.confirm({title:this.t("title"),message:this.t("content"),beforeClose:t})}}},l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("demo-section",[e("fh-nav-bar",{attrs:{title:"Dialog",fixed:"",placeholder:"",leftarrow:""}}),t._v(" "),e("demo-block",{attrs:{title:t.t("alert1")}},[e("van-button",{attrs:{type:"primary"},on:{click:t.onClickAlert}},[t._v("\n      "+t._s(t.t("alert1"))+"\n    ")]),t._v(" "),e("van-button",{attrs:{type:"primary"},on:{click:t.onClickAlert2}},[t._v("\n      "+t._s(t.t("alert2"))+"\n    ")])],1),t._v(" "),e("demo-block",{attrs:{title:t.t("confirm")}},[e("van-button",{attrs:{type:"primary"},on:{click:t.onClickConfirm}},[t._v("\n      "+t._s(t.t("confirm"))+"\n    ")])],1),t._v(" "),e("demo-block",{attrs:{title:t.t("asyncClose")}},[e("van-button",{attrs:{type:"primary"},on:{click:t.onClickAsyncClose}},[t._v("\n      "+t._s(t.t("asyncClose"))+"\n    ")])],1),t._v(" "),e("demo-block",{attrs:{title:t.t("componentCall")}},[e("van-button",{attrs:{type:"primary"},on:{click:function(n){t.show=!0}}},[t._v("\n      "+t._s(t.t("componentCall"))+"\n    ")]),t._v(" "),e("van-dialog",{attrs:{title:t.t("title"),"show-cancel-button":"","lazy-render":!1},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[e("img",{attrs:{src:t.image}})])],1)],1)},a=[],r={render:l,staticRenderFns:a},c=r,s=e("VU/8"),m=o,d=s(i,c,!1,m,null,null);n.default=d.exports},migG:function(t,n,e){n=t.exports=e("FZ+f")(!1),n.push([t.i,"\n.demo-dialog {\n  background-color: #fff;\n}\n.demo-dialog .van-doc-demo-block > .van-button {\n  margin-left: 0.426667rem;\n}\n.demo-dialog img {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0.666667rem 0.533333rem 0;\n}\n.van-dialog {\n  text-align: center;\n}",""])}});