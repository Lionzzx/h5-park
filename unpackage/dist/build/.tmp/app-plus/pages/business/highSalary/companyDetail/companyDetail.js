(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/business/highSalary/companyDetail/companyDetail"],{"053c":function(t,e,n){"use strict";var a=n("eb80"),i=n.n(a);i.a},"5b3d":function(t,e,n){"use strict";n.r(e);var a=n("e4e6"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},b1ba:function(t,e,n){"use strict";n.r(e);var a=n("c5af"),i=n("5b3d");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("053c");var o=n("2877"),s=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},c5af:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},e4e6:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("a34a")),i=n("ea2e"),r=o(n("b883"));n("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,a,i,r,o){try{var s=t[r](o),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(a,i)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var r=t.apply(e,n);function o(t){s(r,a,i,o,u,"next",t)}function u(t){s(r,a,i,o,u,"throw",t)}o(void 0)})}}var c={data:function(){return{loading:!0,tabIndex:0,tabs:[{title:"荣誉"},{title:"发明专利"},{title:"实用新型"},{title:"外观专利"}],totalList:{},list:[]}},onLoad:function(){var t=u(a.default.mark(function t(e){var n,r;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.componyName,t.prev=1,this.componyName=n,t.next=5,i.channelLogicApi.CompanyHonorByName({componyName:n});case 5:r=t.sent,console.log(r," at pages\\business\\highSalary\\companyDetail\\companyDetail.vue:92"),this.list=r.rongyu,this.totalList=r,t.next=13;break;case 11:t.prev=11,t.t0=t["catch"](1);case 13:return t.prev=13,this.loading=!1,t.finish(13);case 16:case"end":return t.stop()}},t,this,[[1,11,13,16]])}));function e(e){return t.apply(this,arguments)}return e}(),methods:{navBack:function(){t.navigateTo({url:r.default.highSalary})},handleTab:function(t){switch(this.tabIndex=t,t){case 0:this.list=this.totalList["rongyu"];break;case 1:this.list=this.totalList["fmzl"];break;case 2:this.list=this.totalList["wgzl"];break;case 3:this.list=this.totalList["syxx"];break;default:break}}}};e.default=c}).call(this,n("6e42")["default"])},eb80:function(t,e,n){}},[["6096","common/runtime","common/vendor"]]]);