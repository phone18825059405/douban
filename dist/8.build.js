webpackJsonp([8],{

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
__webpack_require__(84)
__vue_script__ = __webpack_require__(65)
__vue_template__ = __webpack_require__(96)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "c:\\douban\\app\\views\\search.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// <template>
// <div id="TalionNav" transition="expand">
// 	<header class="TalionNav is-active">
// 	<div class="TalionNav-secondary">
// 		<a href="javascript:" class="close-nav" @click="close">关闭</a>
// 		<form action="/search" method="GET">
// 			<div>
// 				<input name="query" type="search">
// 			</div>
// 		</form>
// 		<ul>
// 			<li>
// 			<div>
// 				<a href="javascript:" target="_blank"><strong style="color: rgb(35, 132, 232);">电影</strong><span>影院热映</span></a><a href="javascript:" target=""><strong style="color: rgb(230, 70, 126);">同城</strong><span>周末活动</span></a><a href="javascript:" target=""><strong style="color: rgb(159, 120, 96);">阅读</strong><span>电子书</span></a><a href="javascript:" target=""><strong style="color: rgb(225, 100, 77);">东西</strong><span>心爱之物</span></a>
// 			</div>
// 			</li>
// 			<li>
// 			<div>
// 				<a href="javascript:" target="_blank"><strong style="color: rgb(122, 106, 219);">电视</strong><span>正在热播</span></a><a href="javascript:" target="_blank"><strong style="color: rgb(42, 184, 204);">小组</strong><span>志趣相投</span></a><a href="javascript:" target="_blank"><strong style="color: rgb(87, 116, 197);">游戏</strong><span>虚拟世界</span></a><a href="javascript:" target=""><strong style="color: rgb(64, 207, 169);">FM</strong><span>红心歌单</span></a>
// 			</div>
// 			</li>
// 			<li>
// 			<div>
// 				<a href="javascript:" target="_blank"><strong style="color: rgb(159, 120, 96);">图书</strong><span>畅销排行</span></a><a href="javascript:" target="_blank"><strong style="color: rgb(244, 143, 46);">音乐</strong><span>新碟榜</span></a><a href="javascript:" target="_blank"><strong style="color: rgb(89, 108, 221);">应用</strong><span>玩手机</span></a><a href="javascript:" target=""><strong style="color: rgb(66, 189, 86);">市集</strong><span>购买原创</span></a>
// 			</div>
// 			</li>
// 		</ul>
// 		<div class="navBottom">
// 			<div class="nav-item">
// 				<a class="toReg" href="javascript:">注册帐号</a><a class="toLogin" href="javascript:">登录豆瓣</a>
// 			</div>
// 			<div class="nav-item">
// 				<a class="toPC" href="javascript:">使用桌面版</a><a class="toApp">使用豆瓣App</a>
// 			</div>
// 		</div>
// 	</div>
// 	</header>
// </div>
// </template>
//
// <script>
exports.default = {
	methods: {
		close: function close() {
			window.history.back();
		}
	}
};
// </script>
//
// <style scoped>
// #TalionNav{
//     z-index: 9999;
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: #fff;
// }
// .TalionNav.is-active {
//     height: 100%;
//     position: absolute;
//     bottom: 0;
//     -webkit-transform: translateZ(0);
//     transform: translateZ(0);
// }
// .TalionNav-secondary {
//     position: absolute;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     z-index: 9999;
//     background: #fff;
// }
// .TalionNav-secondary a.close-nav {
//     position: absolute;
//     top: 20px;
//     left: 18px;
//     color: #42bd56;
//     font-size: 16px;
// }
// .TalionNav a {
//     text-decoration: none;
// }
//
// .TalionNav-secondary form {
//     border-bottom: 1px solid #f3f3f3;
//     padding: 15px 18px 15px 60px;
// }
//
// .TalionNav-secondary input[type=search] {
//     box-sizing: border-box;
//     -webkit-appearance: none;
//     border: 0;
//     background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50% #f3f3f3;
//     background-size: 17.33333px;
//     border-radius: 3px;
//     width: 100%;
//     height: 31px;
//     font-size: 14px;
// }
//
// .TalionNav-secondary input[type=search]:focus {
//     background-image: none;
// }
// .TalionNav-secondary ul {
//     padding-top: 25px;
//     overflow: hidden;
//     display: -webkit-box;
//     display: flex;
//     justify-content: space-around;
// }
// .TalionNav li, .TalionNav ul {
//     margin: 0;
//     padding: 0;
//     list-style: none;
// }
// .TalionNav-secondary li {
//     width: 33.33%;
// }
// .TalionNav-secondary li div {
//     float: left;
//     position: relative;
//     left: 50%;
//     top: 0;
// }
// .TalionNav-secondary li a {
//     display: block;
//     text-align: center;
//     margin-bottom: 25px;
//     position: relative;
//     left: -50%;
//     top: 0;
// }
// .TalionNav-secondary li strong {
//     display: block;
//     font-weight: 400;
//     font-size: 24px;
//     line-height: 28px;
// }
// .TalionNav-secondary li span {
//     display: block;
//     color: #999;
//     height: 17px;
//     font-size: 12px;
//     letter-spacing: 1px;
// }
// .TalionNav-secondary .navBottom {
//     width: 100%;
//     border-bottom: 1px solid #f3f3f3;
// }
// .TalionNav-secondary .navBottom .nav-item {
//     border-top: 1px solid #f3f3f3;
//     padding: 13px 0;
// }
// .TalionNav-secondary .navBottom a {
//     margin: 0 auto;
//     text-align: center;
//     text-decoration: none;
//     font-size: 15px;
//     color: #42bd56;
// }
// .TalionNav-secondary .navBottom .nav-item a {
//     width: 50%;
//     display: inline-block;
//     box-sizing: border-box;
// }
// .TalionNav-secondary .navBottom .nav-item a:first-child {
//     border-right: 1px solid #e5e5e5;
// }
// </style>

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\r\n#TalionNav[_v-4f63b9de]{\r\n    z-index: 9999;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: #fff;\r\n}\r\n.TalionNav.is-active[_v-4f63b9de] {\r\n    height: 100%;\r\n    position: absolute;\r\n    bottom: 0;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n}\r\n.TalionNav-secondary[_v-4f63b9de] {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 9999;\r\n    background: #fff;\r\n}\r\n.TalionNav-secondary a.close-nav[_v-4f63b9de] {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 18px;\r\n    color: #42bd56;\r\n    font-size: 16px;\r\n}\r\n.TalionNav a[_v-4f63b9de] {\r\n    text-decoration: none;\r\n}\r\n\r\n.TalionNav-secondary form[_v-4f63b9de] {\r\n    border-bottom: 1px solid #f3f3f3;\r\n    padding: 15px 18px 15px 60px;\r\n}\r\n\r\n.TalionNav-secondary input[type=search][_v-4f63b9de] {\r\n    box-sizing: border-box;\r\n    -webkit-appearance: none;\r\n    border: 0;\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50% #f3f3f3;\r\n    background-size: 17.33333px;\r\n    border-radius: 3px;\r\n    width: 100%;\r\n    height: 31px;\r\n    font-size: 14px;\r\n}\r\n\r\n.TalionNav-secondary input[type=search][_v-4f63b9de]:focus {\r\n    background-image: none;\r\n}\r\n.TalionNav-secondary ul[_v-4f63b9de] {\r\n    padding-top: 25px;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n.TalionNav li[_v-4f63b9de], .TalionNav ul[_v-4f63b9de] {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n.TalionNav-secondary li[_v-4f63b9de] {\r\n    width: 33.33%;\r\n}\r\n.TalionNav-secondary li div[_v-4f63b9de] {\r\n    float: left;\r\n    position: relative;\r\n    left: 50%;\r\n    top: 0;\r\n}\r\n.TalionNav-secondary li a[_v-4f63b9de] {\r\n    display: block;\r\n    text-align: center;\r\n    margin-bottom: 25px;\r\n    position: relative;\r\n    left: -50%;\r\n    top: 0;\r\n}\r\n.TalionNav-secondary li strong[_v-4f63b9de] {\r\n    display: block;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n}\r\n.TalionNav-secondary li span[_v-4f63b9de] {\r\n    display: block;\r\n    color: #999;\r\n    height: 17px;\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n}\r\n.TalionNav-secondary .navBottom[_v-4f63b9de] {\r\n    width: 100%;\r\n    border-bottom: 1px solid #f3f3f3;\r\n}\r\n.TalionNav-secondary .navBottom .nav-item[_v-4f63b9de] {\r\n    border-top: 1px solid #f3f3f3;\r\n    padding: 13px 0;\r\n}\r\n.TalionNav-secondary .navBottom a[_v-4f63b9de] {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 15px;\r\n    color: #42bd56;\r\n}\r\n.TalionNav-secondary .navBottom .nav-item a[_v-4f63b9de] {\r\n    width: 50%;\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n}\r\n.TalionNav-secondary .navBottom .nav-item a[_v-4f63b9de]:first-child {\r\n    border-right: 1px solid #e5e5e5;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4f63b9de&file=search.vue&scoped=true!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./search.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4f63b9de&file=search.vue&scoped=true!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./search.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports = "\n<div id=\"TalionNav\" transition=\"expand\" _v-4f63b9de=\"\">\n\t<header class=\"TalionNav is-active\" _v-4f63b9de=\"\">\n\t<div class=\"TalionNav-secondary\" _v-4f63b9de=\"\">\n\t\t<a href=\"javascript:\" class=\"close-nav\" @click=\"close\" _v-4f63b9de=\"\">关闭</a>\n\t\t<form action=\"/search\" method=\"GET\" _v-4f63b9de=\"\">\n\t\t\t<div _v-4f63b9de=\"\">\n\t\t\t\t<input name=\"query\" type=\"search\" _v-4f63b9de=\"\">\n\t\t\t</div>\n\t\t</form>\n\t\t<ul _v-4f63b9de=\"\">\n\t\t\t<li _v-4f63b9de=\"\">\n\t\t\t<div _v-4f63b9de=\"\">\n\t\t\t\t<a href=\"javascript:\" target=\"_blank\" _v-4f63b9de=\"\"><strong style=\"color: rgb(35, 132, 232);\" _v-4f63b9de=\"\">电影</strong><span _v-4f63b9de=\"\">影院热映</span></a><a href=\"javascript:\" target=\"\" _v-4f63b9de=\"\"><strong style=\"color: rgb(230, 70, 126);\" _v-4f63b9de=\"\">同城</strong><span _v-4f63b9de=\"\">周末活动</span></a><a href=\"javascript:\" target=\"\" _v-4f63b9de=\"\"><strong style=\"color: rgb(159, 120, 96);\" _v-4f63b9de=\"\">阅读</strong><span _v-4f63b9de=\"\">电子书</span></a><a href=\"javascript:\" target=\"\" _v-4f63b9de=\"\"><strong style=\"color: rgb(225, 100, 77);\" _v-4f63b9de=\"\">东西</strong><span _v-4f63b9de=\"\">心爱之物</span></a>\n\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li _v-4f63b9de=\"\">\n\t\t\t<div _v-4f63b9de=\"\">\n\t\t\t\t<a href=\"javascript:\" target=\"_blank\" _v-4f63b9de=\"\"><strong style=\"color: rgb(122, 106, 219);\" _v-4f63b9de=\"\">电视</strong><span _v-4f63b9de=\"\">正在热播</span></a><a href=\"javascript:\" target=\"_blank\" _v-4f63b9de=\"\"><strong style=\"color: rgb(42, 184, 204);\" _v-4f63b9de=\"\">小组</strong><span _v-4f63b9de=\"\">志趣相投</span></a><a href=\"javascript:\" target=\"_blank\" _v-4f63b9de=\"\"><strong style=\"color: rgb(87, 116, 197);\" _v-4f63b9de=\"\">游戏</strong><span _v-4f63b9de=\"\">虚拟世界</span></a><a href=\"javascript:\" target=\"\" _v-4f63b9de=\"\"><strong style=\"color: rgb(64, 207, 169);\" _v-4f63b9de=\"\">FM</strong><span _v-4f63b9de=\"\">红心歌单</span></a>\n\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li _v-4f63b9de=\"\">\n\t\t\t<div _v-4f63b9de=\"\">\n\t\t\t\t<a href=\"javascript:\" target=\"_blank\" _v-4f63b9de=\"\"><strong style=\"color: rgb(159, 120, 96);\" _v-4f63b9de=\"\">图书</strong><span _v-4f63b9de=\"\">畅销排行</span></a><a href=\"javascript:\" target=\"_blank\" _v-4f63b9de=\"\"><strong style=\"color: rgb(244, 143, 46);\" _v-4f63b9de=\"\">音乐</strong><span _v-4f63b9de=\"\">新碟榜</span></a><a href=\"javascript:\" target=\"_blank\" _v-4f63b9de=\"\"><strong style=\"color: rgb(89, 108, 221);\" _v-4f63b9de=\"\">应用</strong><span _v-4f63b9de=\"\">玩手机</span></a><a href=\"javascript:\" target=\"\" _v-4f63b9de=\"\"><strong style=\"color: rgb(66, 189, 86);\" _v-4f63b9de=\"\">市集</strong><span _v-4f63b9de=\"\">购买原创</span></a>\n\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t\t<div class=\"navBottom\" _v-4f63b9de=\"\">\n\t\t\t<div class=\"nav-item\" _v-4f63b9de=\"\">\n\t\t\t\t<a class=\"toReg\" href=\"javascript:\" _v-4f63b9de=\"\">注册帐号</a><a class=\"toLogin\" href=\"javascript:\" _v-4f63b9de=\"\">登录豆瓣</a>\n\t\t\t</div>\n\t\t\t<div class=\"nav-item\" _v-4f63b9de=\"\">\n\t\t\t\t<a class=\"toPC\" href=\"javascript:\" _v-4f63b9de=\"\">使用桌面版</a><a class=\"toApp\" _v-4f63b9de=\"\">使用豆瓣App</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t</header>\n</div>\n";

/***/ })

});