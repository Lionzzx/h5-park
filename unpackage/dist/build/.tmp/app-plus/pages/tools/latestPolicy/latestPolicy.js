(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tools/latestPolicy/latestPolicy"],{"0392":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a")),r=n("ea2e");function a(t){return t&&t.__esModule?t:{default:t}}function s(t){return u(t)||o(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function l(t,e,n,i,r,a,s){try{var c=t[a](s),o=c.value}catch(u){return void n(u)}c.done?e(o):Promise.resolve(o).then(i,r)}function h(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var a=t.apply(e,n);function s(t){l(a,i,r,s,c,"next",t)}function c(t){l(a,i,r,s,c,"throw",t)}s(void 0)})}}var f=[],p={data:function(){return{provinceList:[],city:[],title:"",isSelect:!1,show:!1,list:[],detail:{},value:[18,0,0],indicatorStyle:"height: ".concat(Math.round(t.getSystemInfoSync().screenWidth/7.5),"px;"),loading:!0,myArea:"",page:0,pageSize:10,hasMore:!0}},onLoad:function(){var e=h(i.default.mark(function e(){var n;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.getStorageSync("account"),this.myArea=JSON.parse(n).cityName,e.next=5,r.channelLogicApi.GetProvinceList();case 5:f=e.sent,this.provinceList=f.map(function(t){return t.province.realname}),this.city=f[18].city.map(function(t){return t.realname}),e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](0);case 12:return e.prev=12,this.loading=!1,e.finish(12);case 15:case"end":return e.stop()}},e,this,[[0,10,12,15]])}));function n(){return e.apply(this,arguments)}return n}(),methods:{onFocus:function(){this.isSelect=!1},onBlur:function(t){var e=t.detail.value;this.title=e},scrolltolower:function(t){this.getList()},getList:function(){var t=h(i.default.mark(function t(){var e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.loading=!0,this.hasMore){t.next=3;break}return t.abrupt("return",!1);case 3:return this.page||(this.list=[]),this.page=Number(this.page)+1,t.prev=5,t.next=8,r.channelLogicApi.PolicyList({city:this.myArea,title:this.title,page:this.page,pageSize:this.pageSize});case 8:e=t.sent,e.result.length||(this.$api.toast("查询暂无结果"),this.page=0),this.hasMore=e.total>this.page*this.pageSize,this.list=[].concat(s(this.list),s(e.result)),t.next=16;break;case 14:t.prev=14,t.t0=t["catch"](5);case 16:return t.prev=16,this.loading=!1,t.finish(16);case 19:case"end":return t.stop()}},t,this,[[5,14,16,19]])}));function e(){return t.apply(this,arguments)}return e}(),handleSelectAddress:function(){var t=this.isSelect;this.isSelect=!t},handleSearch:function(){var t=h(i.default.mark(function t(){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.isSelect=!1,this.page=[],this.title){t.next=4;break}return t.abrupt("return",this.$api.toast("请输入关键字"));case 4:if(!this.loading){t.next=6;break}return t.abrupt("return");case 6:this.getList();case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),bindChange:function(t){var e=t.detail.value;console.log(e," at pages\\tools\\latestPolicy\\latestPolicy.vue:132"),this.value=e,this.city=f[e[0]].city.map(function(t){return t.realname}),this.myArea=this.city[e[1]]},navBack:function(){t.navigateTo({url:"/pages/index/index"})},selectOk:function(){this.isSelect=!1,this.list=[]},showDetail:function(t){this.show=!0,this.detail=this.list[t]},hidePopup:function(){this.show=!1}}};e.default=p}).call(this,n("6e42")["default"])},"4f0a":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"5fa4":function(t,e,n){"use strict";n.r(e);var i=n("0392"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},"78b1":function(t,e,n){},b291:function(t,e,n){"use strict";var i=n("78b1"),r=n.n(i);r.a},eeaf:function(t,e,n){"use strict";n.r(e);var i=n("4f0a"),r=n("5fa4");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("b291");var s=n("2877"),c=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports}},[["e2c5","common/runtime","common/vendor"]]]);