(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tools/latestPolicy/latestPolicy"],{"0392":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a")),a=n("ea2e");function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,i,a,r,s){try{var c=t[r](s),u=c.value}catch(o){return void n(o)}c.done?e(u):Promise.resolve(u).then(i,a)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var r=t.apply(e,n);function c(t){s(r,i,a,c,u,"next",t)}function u(t){s(r,i,a,c,u,"throw",t)}c(void 0)})}}var u=[],o={data:function(){return{provinceList:[],city:[],title:"",isSelect:!1,show:!1,list:[],detail:{},value:[18,0,0],indicatorStyle:"height: ".concat(Math.round(t.getSystemInfoSync().screenWidth/7.5),"px;"),loading:!0,myArea:"",page:0,pageSize:10,hasMore:!0}},onLoad:function(){var e=c(i.default.mark(function e(){var n;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.getStorageSync("account"),this.myArea=JSON.parse(n).cityName,e.next=5,a.channelLogicApi.GetProvinceList();case 5:u=e.sent,this.provinceList=u.map(function(t){return t.province.realname}),this.city=u[18].city.map(function(t){return t.realname}),e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](0);case 12:return e.prev=12,this.loading=!1,e.finish(12);case 15:case"end":return e.stop()}},e,this,[[0,10,12,15]])}));function n(){return e.apply(this,arguments)}return n}(),methods:{onFocus:function(){this.isSelect=!1},onBlur:function(t){var e=t.detail.value;this.title=e},scrolltolower:function(t){this.getList()},getList:function(){var t=c(i.default.mark(function t(){var e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.loading=!0,this.hasMore){t.next=3;break}return t.abrupt("return",!1);case 3:return t.prev=3,t.next=6,a.channelLogicApi.PolicyList({city:this.myArea,title:this.title,page:this.page,pageSize:this.pageSize});case 6:e=t.sent,this.hasMore=e.total>this.page*this.pageSize,this.page+=1,this.list=this.list.push(e.result),t.next=14;break;case 12:t.prev=12,t.t0=t["catch"](3);case 14:return t.prev=14,this.loading=!1,t.finish(14);case 17:case"end":return t.stop()}},t,this,[[3,12,14,17]])}));function e(){return t.apply(this,arguments)}return e}(),handleSelectAddress:function(){var t=this.isSelect;this.isSelect=!t},handleSearch:function(){var t=c(i.default.mark(function t(){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.isSelect=!1,this.title){t.next=3;break}return t.abrupt("return",this.$api.toast("请输入关键字"));case 3:this.getList();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),bindChange:function(t){var e=t.detail.value;console.log(e," at pages\\tools\\latestPolicy\\latestPolicy.vue:119"),this.value=e,this.city=u[e[0]].city.map(function(t){return t.realname}),this.myArea=this.city[e[1]]},navBack:function(){t.navigateTo({url:"/pages/index/index"})},selectOk:function(){this.isSelect=!1,this.list=[]},showDetail:function(t){this.show=!0,this.detail=this.list[t]},hidePopup:function(){this.show=!1}}};e.default=o}).call(this,n("6e42")["default"])},"5fa4":function(t,e,n){"use strict";n.r(e);var i=n("0392"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"66d5":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"78b1":function(t,e,n){},b291:function(t,e,n){"use strict";var i=n("78b1"),a=n.n(i);a.a},eeaf:function(t,e,n){"use strict";n.r(e);var i=n("66d5"),a=n("5fa4");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("b291");var s=n("2877"),c=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports}},[["e2c5","common/runtime","common/vendor"]]]);