(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-business-highSalary-highSalary"],{2292:function(t,e,n){var a=n("f2e8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("2ae99dac",a,!0,{sourceMap:!1,shadowMode:!1})},"262f":function(t,e,n){"use strict";n.r(e);var a=n("9e2f"),i=n("8dc2");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("f329");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"53ed316a",null);e["default"]=s.exports},"8dc2":function(t,e,n){"use strict";n.r(e);var a=n("fb62"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"9e2f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-image",{staticClass:"bg",attrs:{src:"../../../static/highSalary_bg.png"}}),n("v-uni-view",{staticClass:"back",on:{click:function(e){e=t.$handleEvent(e),t.navBack(e)}}},[t._v("返回")]),n("v-uni-scroll-view",{staticClass:"content",attrs:{"scroll-y":"true","scroll-with-animation":"true"}},t._l(t.list,function(e,a){return n("v-uni-view",{staticClass:"content-item",attrs:{id:"demo1"}},[n("v-uni-view",{staticClass:"number"},[t._v(t._s(a+1)),n("v-uni-view",{staticClass:"fix"})],1),n("v-uni-view",{staticClass:"title"},[t._v(t._s(e.company_name))]),n("v-uni-view",{staticClass:"disc"},[n("v-uni-view",{staticClass:"disc_item"},[t._v("注册时间："+t._s(e.register_time))]),n("v-uni-view",{staticClass:"disc_item"},[t._v("产品特色："+t._s(e.product_feature))])],1),n("v-uni-view",{staticClass:"button",on:{click:function(n){n=t.$handleEvent(n),t.handleLook(e.company_name)}}},[t._v("查看荣誉")])],1)}),1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},b883:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={index:"/pages/index/index",router:"/pages/router/router",enterprise:"/pages/business/enterprise/enterprise",finance:"/pages/business/finance/finance",highSalary:"/pages/business/highSalary/highSalary",companyDetail:"/pages/business/highSalary/companyDetail/companyDetail",abnormal:"/pages/tools/abnormal/abnormal",bill:"/pages/tools/bill/bill",income:"/pages/tools/income/income",latestPolicy:"/pages/tools/latestPolicy/latestPolicy",patent:"/pages/tools/patent/patent",subsidy:"/pages/tools/subsidy/subsidy",login:"/pages/login/login",error:"/pages/error/error"},i=a;e.default=i},f2e8:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-53ed316a]{font-size:0;overflow:hidden;background:red}.page[data-v-53ed316a]{position:relative;width:100%;height:100vh}.page .bg[data-v-53ed316a]{width:100%;height:100vh}.page .back[data-v-53ed316a]{position:absolute;width:%?125?%;height:%?50?%;text-align:center;background:#fff;-webkit-box-shadow:%?0?% %?1?% %?0?% %?0?% #e21616;box-shadow:%?0?% %?1?% %?0?% %?0?% #e21616;border-radius:%?6?%;font-size:%?19?%;font-weight:500;right:%?33?%;top:%?236?%;color:#e21616;line-height:%?50?%}.page .content[data-v-53ed316a]{position:absolute;left:0;right:0;margin:0 auto;top:%?346?%;width:%?683?%;height:%?700?%;background:#fff;-webkit-box-shadow:%?0?% %?-1?% %?0?% %?0?% rgba(93,72,67,.16);box-shadow:%?0?% %?-1?% %?0?% %?0?% rgba(93,72,67,.16);border-radius:%?11?%;overflow:hidden}.page .content-item[data-v-53ed316a]{padding:0 %?28?% 0 %?78?%;position:relative;padding-top:%?1?%;height:%?175?%;border-bottom:%?1?% solid rgba(93,72,67,.16)}.page .content-item .number[data-v-53ed316a]{position:absolute;top:%?39?%;left:0;width:%?67?%;height:%?67?%;font-weight:900;font-size:%?67?%;line-height:%?67?%;text-align:center;color:#ff140a}.page .content-item .number .fix[data-v-53ed316a]{border-top:%?2?% solid #ff140a;background:#fff;height:%?30?%;width:%?40?%;-webkit-transform:rotate(-40deg);-ms-transform:rotate(-40deg);transform:rotate(-40deg);position:relative;left:%?30?%;top:%?-20?%}.page .content-item .title[data-v-53ed316a]{margin:%?16?% 0;font-size:%?25?%;font-weight:700;color:#2c2222;line-height:%?40?%;overflow:hidden}.page .content-item .disc[data-v-53ed316a]{font-size:%?19?%;font-weight:400;color:#7d8386}.page .content-item .disc_item[data-v-53ed316a]{margin:0 0 %?10?% 0}.page .content-item .button[data-v-53ed316a]{position:absolute;right:%?28?%;top:%?79?%;width:%?133?%;height:%?50?%;font-size:%?19?%;text-align:center;line-height:%?50?%;font-weight:400;color:#fff;background:-webkit-gradient(linear,left top,right top,from(#f23f0f),to(#f61e15));background:-o-linear-gradient(left,#f23f0f 0,#f61e15 100%);background:linear-gradient(90deg,#f23f0f,#f61e15);-webkit-box-shadow:%?0?% %?-1?% %?0?% %?0?% rgba(93,72,67,.16);box-shadow:%?0?% %?-1?% %?0?% %?0?% rgba(93,72,67,.16)}.page .content-item .button_gray[data-v-53ed316a]{background:-webkit-gradient(linear,left top,right top,from(#d9dde0),to(#c6cccf));background:-o-linear-gradient(left,#d9dde0 0,#c6cccf 100%);background:linear-gradient(90deg,#d9dde0,#c6cccf)}body.?%PAGE?%[data-v-53ed316a]{background:red}',""])},f329:function(t,e,n){"use strict";var a=n("2292"),i=n.n(a);i.a},fb62:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("a34a")),i=n("ea2e"),o=s(n("b883")),r=(n("2f62"),n("5beb"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,a,i,o,r){try{var s=t[o](r),c=s.value}catch(d){return void n(d)}s.done?e(c):Promise.resolve(c).then(a,i)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var o=t.apply(e,n);function r(t){c(o,a,i,r,s,"next",t)}function s(t){c(o,a,i,r,s,"throw",t)}r(void 0)})}}var u={data:function(){return{list:[]}},onLoad:function(){var t=d(a.default.mark(function t(){var e;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(),t.next=4,i.channelLogicApi.TopFiveCompny();case 4:e=t.sent,this.list=e.map(function(t){return t.register_time=(0,r.formatDate)(t.register_time,"yyyy年MM月dd日"),t}),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}},t,this,[[0,8]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{navBack:function(){uni.navigateTo({url:"/pages/index/index"})},handleLook:function(){var t=d(a.default.mark(function t(e){return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$api.navigateTo({url:o.default.companyDetail,data:{componyName:e}});case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}};e.default=u}}]);