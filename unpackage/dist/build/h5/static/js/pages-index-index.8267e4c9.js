(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"134e":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"index"},[e("v-uni-view",{class:{blur:t.loading}},[e("v-uni-image",{staticClass:"index__bg-top ",attrs:{src:"../../static/index_top-bg.png"}}),e("v-uni-image",{staticClass:"index__bg-bottom",attrs:{src:"../../static/index_bottom.png"}}),e("v-uni-view",{staticClass:"index__header",on:{click:function(i){i=t.$handleEvent(i),t.navTo(i)}}},[e("v-uni-view",{staticClass:"index__header-item",attrs:{"data-index":"enterprise"}},[e("v-uni-image",{staticClass:"icon",attrs:{"data-index":"enterprise",src:"../../static/index__icon1.png"}}),e("v-uni-view",{staticClass:"title",attrs:{"data-index":"enterprise"}},[t._v("企业名录")])],1),e("v-uni-view",{staticClass:"index__header-item mlr-30",attrs:{"data-index":"highSalary"}},[e("v-uni-image",{staticClass:"icon",attrs:{"data-index":"highSalary",src:"../../static/index__icon2.png"}}),e("v-uni-view",{staticClass:"title",attrs:{"data-index":"highSalary"}},[t._v("高新企业榜")])],1),e("v-uni-view",{staticClass:"index__header-item",attrs:{"data-index":"finance"}},[e("v-uni-image",{staticClass:"icon",attrs:{"data-index":"finance",src:"../../static/index__icon3.png"}}),e("v-uni-view",{staticClass:"title",attrs:{"data-index":"finance"}},[t._v("获取财税服务")])],1)],1),e("v-uni-view",{staticClass:"index__body"},[e("v-uni-view",{staticClass:"index__body-title"},[t._v("常用工具")]),e("v-uni-view",{staticClass:"index__body-content",on:{click:function(i){i=t.$handleEvent(i),t.navTo(i)}}},[e("v-uni-view",{staticClass:"index__body-content-item",attrs:{"data-index":"latestPolicy"}},[e("v-uni-image",{staticClass:"icon",attrs:{"data-index":"latestPolicy",src:"../../static/index_icons01.png",mode:""}}),e("v-uni-view",{staticClass:"title",attrs:{"data-index":"latestPolicy"}},[t._v("最新政策")])],1),e("v-uni-view",{staticClass:"index__body-content-item",attrs:{"data-index":"patent"}},[e("v-uni-image",{staticClass:"icon",attrs:{"data-index":"patent",src:"../../static/index_icons02.png",mode:""}}),e("v-uni-view",{staticClass:"title",attrs:{"data-index":"patent"}},[t._v("专利荣誉查询")])],1),e("v-uni-view",{staticClass:"index__body-content-item",attrs:{"data-index":"abnormal"}},[e("v-uni-image",{staticClass:"icon",attrs:{"data-index":"abnormal",src:"../../static/index_icons03.png",mode:""}}),e("v-uni-view",{staticClass:"title",attrs:{"data-index":"abnormal"}},[t._v("企业异常查询")])],1)],1),e("v-uni-view",{staticClass:"index__body-content",on:{click:function(i){i=t.$handleEvent(i),t.navTo(i)}}},[e("v-uni-view",{staticClass:"index__body-content-item",attrs:{"data-index":"bill"}},[e("v-uni-image",{staticClass:"icon",attrs:{"data-index":"bill",src:"../../static/index_icons04.png",mode:""}}),e("v-uni-view",{staticClass:"title",attrs:{"data-index":"bill"}},[t._v("发票查验")])],1),e("v-uni-view",{staticClass:"index__body-content-item",attrs:{"data-index":"subsidy"}},[e("v-uni-image",{staticClass:"icon",attrs:{"data-index":"subsidy",src:"../../static/index_icons05.png",mode:""}}),e("v-uni-view",{staticClass:"title",attrs:{"data-index":"subsidy"}},[t._v("政府补助测评")])],1),e("v-uni-view",{staticClass:"index__body-content-item",attrs:{"data-index":"income"}},[e("v-uni-image",{staticClass:"icon",attrs:{"data-index":"income",src:"../../static/index_icons06.png",mode:""}}),e("v-uni-view",{staticClass:"title",attrs:{"data-index":"income"}},[t._v("个税测算")])],1)],1),e("v-uni-view",{staticClass:"index__body-button",on:{click:function(i){i=t.$handleEvent(i),t.call(i)}}},[t._v("一键呼叫园内财税管家")]),e("v-uni-view",{staticClass:"index__text"},[e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"year"},[t._v("2019")]),e("v-uni-view",{staticClass:"copyright"},[t._v("Copyright @2004 - 2019 xxxx.com 版权所有")])],1)],1)],1),e("x-Loading",{attrs:{show:t.loading}})],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"38a2":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a,n=o(e("a34a")),s=o(e("4d68")),d=e("40fe");e("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function r(t,i,e,a,n,s,d){try{var o=t[s](d),r=o.value}catch(c){return void e(c)}o.done?i(r):Promise.resolve(r).then(a,n)}function c(t){return function(){var i=this,e=arguments;return new Promise(function(a,n){var s=t.apply(i,e);function d(t){r(s,a,n,d,o,"next",t)}function o(t){r(s,a,n,d,o,"throw",t)}d(void 0)})}}var l={data:function(){return{loading:!1}},onLoad:function(){},onShow:function(){clearTimeout(a),a=setTimeout(function(t){uni.reLaunch({url:s.default.router})},2e4)},onHide:function(){clearTimeout(a)},methods:{navTo:function(t){var i=t.target.dataset;this.$api.navigateTo({url:s.default[i.index]})},call:function(){var t=c(n.default.mark(function t(){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,d.channelLogicApi.SendMsg();case 4:this.$api.toast("呼叫成功"),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),this.$api.toast("呼叫失败");case 10:return t.prev=10,this.loading=!1,t.finish(10);case 13:case"end":return t.stop()}},t,this,[[1,7,10,13]])}));function i(){return t.apply(this,arguments)}return i}()}};i.default=l},"39c3":function(t,i,e){var a=e("f738");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("0387c730",a,!0,{sourceMap:!1,shadowMode:!1})},"4d68":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={index:"/pages/index/index",router:"/pages/router/router",enterprise:"/pages/business/enterprise/enterprise",finance:"/pages/business/finance/finance",highSalary:"/pages/business/highSalary/highSalary",companyDetail:"/pages/business/highSalary/companyDetail/companyDetail",abnormal:"/pages/tools/abnormal/abnormal",bill:"/pages/tools/bill/bill",income:"/pages/tools/income/income",latestPolicy:"/pages/tools/latestPolicy/latestPolicy",patent:"/pages/tools/patent/patent",subsidy:"/pages/tools/subsidy/subsidy",subsidyDetail:"/pages/tools/subsidy/detail/detail",login:"/pages/login/login",error:"/pages/error/error"},n=a;i.default=n},a395:function(t,i,e){"use strict";var a=e("39c3"),n=e.n(a);n.a},afbd:function(t,i,e){"use strict";e.r(i);var a=e("38a2"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},d49d:function(t,i,e){"use strict";e.r(i);var a=e("134e"),n=e("afbd");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("a395");var d=e("2877"),o=Object(d["a"])(n["default"],a["a"],a["b"],!1,null,"9496dd86",null);i["default"]=o.exports},f738:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-9496dd86]{background:#eef0f7;font-size:0;height:100%;overflow:hidden}.index[data-v-9496dd86]{width:100%;height:100%}.index__bg-top[data-v-9496dd86]{width:100vw;height:%?435?%}.index__bg-bottom[data-v-9496dd86]{position:fixed;bottom:0;left:0;width:100vw;height:%?280?%}.index__header[data-v-9496dd86]{position:relative;top:%?-140?%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.index__header .mlr-30[data-v-9496dd86]{margin:0 %?0?%}.index__header-item[data-v-9496dd86]{margin:0 %?20?%;width:%?211?%;height:%?256?%;background:#fff;-webkit-box-shadow:%?0?% %?10?% %?21?% %?0?% rgba(69,0,0,.15);box-shadow:%?0?% %?10?% %?21?% %?0?% rgba(69,0,0,.15);border-radius:%?11?%}.index__header-item .icon[data-v-9496dd86]{margin:%?44?% auto %?22?% auto;display:block;height:%?100?%;width:%?100?%}.index__header-item .title[data-v-9496dd86]{text-align:center;font-size:%?24?%;font-weight:400;color:#2c2222}.index__body[data-v-9496dd86]{overflow:none;position:relative;margin:%?-120?% auto 0;width:%?683?%;height:%?433?%;background:#fff;-webkit-box-shadow:%?0?% %?10?% %?21?% %?0?% rgba(69,0,0,.1);box-shadow:%?0?% %?10?% %?21?% %?0?% rgba(69,0,0,.1);border-radius:%?11?%}.index__body-title[data-v-9496dd86]{text-align:center;height:%?100?%;font-size:%?28?%;font-weight:500;color:#2c2222;line-height:%?100?%}.index__body-content[data-v-9496dd86]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.index__body-content-item[data-v-9496dd86]{width:%?211?%;height:%?137?%}.index__body-content-item .icon[data-v-9496dd86]{display:block;margin:0 auto;margin-bottom:%?19?%;width:%?67?%;height:%?67?%}.index__body-content-item .title[data-v-9496dd86]{text-align:center;font-size:%?24?%;font-weight:400;color:#2c2222}.index__body-button[data-v-9496dd86]{position:absolute;bottom:%?-31?%;margin:0 auto;left:0;right:0;width:%?389?%;height:%?72?%;font-size:%?28?%;color:#fff;background:#e21616;border-radius:%?42?%;text-align:center;line-height:%?72?%;z-index:1}.index__text[data-v-9496dd86]{position:fixed;bottom:0;left:0;color:#e21616;margin:0 0 %?40?% %?40?%}.index__text .line[data-v-9496dd86]{width:%?50?%;height:%?8?%;background:#e21616;margin-bottom:%?10?%}.index__text .year[data-v-9496dd86]{font-size:%?37?%;font-weight:700}.index__text .copyright[data-v-9496dd86]{width:%?240?%;font-size:%?14?%;font-weight:500;color:#e21616;line-height:%?30?%}body.?%PAGE?%[data-v-9496dd86]{background:#eef0f7}',""])}}]);