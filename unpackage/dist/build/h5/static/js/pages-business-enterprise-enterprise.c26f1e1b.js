(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-business-enterprise-enterprise"],{"09bbb":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-865b6c6a]{font-size:0;overflow:hidden}.page[data-v-865b6c6a]{position:relative;width:100%;height:100vh}.page .bg[data-v-865b6c6a]{width:100%;height:100vh}.page .back[data-v-865b6c6a]{position:absolute;width:%?125?%;height:%?50?%;text-align:center;background:#fff;-webkit-box-shadow:%?0?% %?1?% %?0?% %?0?% #e21616;box-shadow:%?0?% %?1?% %?0?% %?0?% #e21616;border-radius:%?6?%;font-size:%?19?%;font-weight:500;right:%?33?%;top:%?236?%;color:#e21616;line-height:%?50?%}.page .content[data-v-865b6c6a]{position:absolute;left:0;right:0;margin:0 auto;top:%?346?%;width:%?683?%;height:%?628?%;background:#fff;-webkit-box-shadow:%?0?% %?-1?% %?0?% %?0?% rgba(93,72,67,.16);box-shadow:%?0?% %?-1?% %?0?% %?0?% rgba(93,72,67,.16);border-radius:%?11?%;overflow:hidden}.page .content-item[data-v-865b6c6a]{padding:0 %?28?%;position:relative;padding-top:%?1?%;height:%?208?%;border-bottom:%?1?% solid rgba(93,72,67,.16)}.page .content-item .title[data-v-865b6c6a]{margin:%?20?% 0;font-size:%?25?%;font-weight:500;color:#2c2222;line-height:%?40?%;overflow:hidden}.page .content-item .disc[data-v-865b6c6a]{font-size:%?19?%;font-weight:400;color:#7d8386}.page .content-item .disc_item[data-v-865b6c6a]{margin:%?10?% 0}.page .content-item .button[data-v-865b6c6a]{position:absolute;right:%?28?%;top:%?90?%;width:%?133?%;height:%?50?%;font-size:%?19?%;text-align:center;line-height:%?50?%;font-weight:400;color:#fff;background:-webkit-gradient(linear,left top,right top,from(#f23f0f),to(#f61e15));background:-o-linear-gradient(left,#f23f0f 0,#f61e15 100%);background:linear-gradient(90deg,#f23f0f,#f61e15);-webkit-box-shadow:%?0?% %?-1?% %?0?% %?0?% rgba(93,72,67,.16);box-shadow:%?0?% %?-1?% %?0?% %?0?% rgba(93,72,67,.16)}.page .content-item .button_gray[data-v-865b6c6a]{background:-webkit-gradient(linear,left top,right top,from(#d9dde0),to(#c6cccf));background:-o-linear-gradient(left,#d9dde0 0,#c6cccf 100%);background:linear-gradient(90deg,#d9dde0,#c6cccf)}',""])},"2b54":function(t,e,n){"use strict";n.r(e);var a=n("782f"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"4d68":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={index:"/pages/index/index",router:"/pages/router/router",enterprise:"/pages/business/enterprise/enterprise",finance:"/pages/business/finance/finance",highSalary:"/pages/business/highSalary/highSalary",companyDetail:"/pages/business/highSalary/companyDetail/companyDetail",abnormal:"/pages/tools/abnormal/abnormal",bill:"/pages/tools/bill/bill",income:"/pages/tools/income/income",latestPolicy:"/pages/tools/latestPolicy/latestPolicy",patent:"/pages/tools/patent/patent",subsidy:"/pages/tools/subsidy/subsidy",subsidyDetail:"/pages/tools/subsidy/detail/detail",login:"/pages/login/login",error:"/pages/error/error"},i=a;e.default=i},6134:function(t,e,n){var a=n("09bbb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("64c7ec46",a,!0,{sourceMap:!1,shadowMode:!1})},"6d06":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{class:{blur:t.loading}},[n("v-uni-image",{staticClass:"bg",attrs:{src:"../../../static/enterprise__bg.png"}}),n("v-uni-view",{staticClass:"back",on:{click:function(e){e=t.$handleEvent(e),t.navBack(e)}}},[t._v("返回")]),n("v-uni-scroll-view",{staticClass:"content",attrs:{"scroll-y":"true","scroll-with-animation":"true"}},t._l(t.list,function(e,a){return n("v-uni-view",{key:e.id,staticClass:"content-item"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(e.company_name))]),n("v-uni-view",{staticClass:"disc"},[n("v-uni-view",{staticClass:"disc_item"},[t._v("注册时间："+t._s(e.register_time))]),n("v-uni-view",{staticClass:"disc_item"},[t._v("产品特色："+t._s(e.product_feature))]),n("v-uni-view",{staticClass:"disc_item"},[t._v("办公地点："+t._s(e.address))])],1),n("v-uni-view",{staticClass:"button",class:{button_gray:!e.website},on:{click:function(n){n=t.$handleEvent(n),t.handleLook(e.website)}}},[t._v("查看官网")])],1)}),1)],1),n("x-Loading",{attrs:{show:t.loading}})],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"782f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a")),i=(r(n("4d68")),n("40fe")),o=(n("2f62"),n("0561"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,a,i,o,r){try{var s=t[o](r),c=s.value}catch(d){return void n(d)}s.done?e(c):Promise.resolve(c).then(a,i)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var o=t.apply(e,n);function r(t){s(o,a,i,r,c,"next",t)}function c(t){s(o,a,i,r,c,"throw",t)}r(void 0)})}}var d={data:function(){return{list:[],website:!1,loading:!0}},onLoad:function(){var t=c(a.default.mark(function t(){var e;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.channelLogicApi.ChannelTypeCompanyList({page:1,pageSize:10});case 3:e=t.sent,e.rows.length&&(this.list=e.rows.map(function(t){return t.register_time=(0,o.formatDate)(t.register_time,"yyyy年MM月dd日"),t})),t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:return t.prev=9,this.loading=!1,t.finish(9);case 12:case"end":return t.stop()}},t,this,[[0,7,9,12]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{navBack:function(){uni.navigateTo({url:"/pages/index/index"})},handleLook:function(t){t&&window.open("http://".concat(t))}}};e.default=d},"7fa3":function(t,e,n){"use strict";var a=n("6134"),i=n.n(a);i.a},"88b9":function(t,e,n){"use strict";n.r(e);var a=n("6d06"),i=n("2b54");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("7fa3");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"865b6c6a",null);e["default"]=s.exports}}]);