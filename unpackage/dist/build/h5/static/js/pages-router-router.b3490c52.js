(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-router-router"],{"0f62":function(e,t,a){var n=a("4ca9");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("32b242de",n,!0,{sourceMap:!1,shadowMode:!1})},"3a6e":function(e,t,a){"use strict";a.r(t);var n=a("f5767"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=i.a},"461b":function(e,t,a){"use strict";var n=a("0f62"),i=a.n(n);i.a},"4ca9":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-14754f6d]{width:100vw;height:100vh}.page[data-v-14754f6d]{width:100vw;height:100vh}.page .swiper[data-v-14754f6d]{width:100vw;height:100vh}.page .swiper .bg_log[data-v-14754f6d]{width:100vw;height:100vh}',""])},b883:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={index:"/pages/index/index",router:"/pages/router/router",enterprise:"/pages/business/enterprise/enterprise",finance:"/pages/business/finance/finance",highSalary:"/pages/business/highSalary/highSalary",companyDetail:"/pages/business/highSalary/companyDetail/companyDetail",abnormal:"/pages/tools/abnormal/abnormal",bill:"/pages/tools/bill/bill",income:"/pages/tools/income/income",latestPolicy:"/pages/tools/latestPolicy/latestPolicy",patent:"/pages/tools/patent/patent",subsidy:"/pages/tools/subsidy/subsidy",login:"/pages/login/login",error:"/pages/error/error"},i=n;t.default=i},c942:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"page"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{autoplay:e.autoplay,circular:"true",interval:e.interval,duration:e.duration},on:{click:function(t){t=e.$handleEvent(t),e.navToIndex(t)}}},[a("v-uni-swiper-item",[a("v-uni-image",{staticClass:"bg_log",attrs:{src:"../../static/swper_log1.jpg",mode:""}})],1),a("v-uni-swiper-item",[a("v-uni-image",{staticClass:"bg_log",attrs:{src:"../../static/swper_log2.png",mode:""}})],1),a("v-uni-swiper-item",[a("v-uni-image",{staticClass:"bg_log",attrs:{src:"../../static/swper_log3.jpg",mode:""}})],1),a("v-uni-swiper-item",[a("v-uni-image",{staticClass:"bg_log",attrs:{src:"../../static/swper_log4.jpg",mode:""}})],1)],1)],1)},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},f36f:function(e,t,a){"use strict";a.r(t);var n=a("c942"),i=a("3a6e");for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);a("461b");var r=a("2877"),o=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"14754f6d",null);t["default"]=o.exports},f5767:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("b883"));function i(e){return e&&e.__esModule?e:{default:e}}var s={data:function(){return{autoplay:!0,interval:3e4,duration:1e3}},onShow:function(){},methods:{navToIndex:function(){this.$api.navigateTo({url:n.default.index})}}};t.default=s}}]);