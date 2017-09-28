webpackJsonp([10],{

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
__webpack_require__(89)
__vue_script__ = __webpack_require__(57)
__vue_template__ = __webpack_require__(90)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "c:\\douban\\app\\views\\article.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// <template>
// 	<div class="page" transition="expand">
// 		<div class="card">
//
//       <section class="header">
//         <h1 class="title">雪域色达</h1>
//         <div class="user-title">
//             <span class="info">
//               小力子百合
//               <span class="timestamp">2017-08-29</span>
//             </span>
//         </div>
//       </section>
//
//       <section class="note-content paper">
//         <div class="note-body" id="note-body">
//           <div class="rich-note">
//             <div id="content">
//               <p>
//                 这是一篇游记，记录5月份四天三夜的旅行
//               </p>
//               <p>
//                 - 观音桥 - 色达 - 甲居藏寨 - 四姑娘山
//               </p>
//               <p>
//                 照片都由本人所拍， 更多照片在这里： <a href="https://www.douban.com/photos/album/1651717275/" rel="nofollow">https://www.douban.com/photos/album/1651717275/</a>
//               </p>
//               <div class="image-container image-float-center">
//                 <div class="image-wrapper">
//                   <img width="100%" v-lazy="'https://img3.doubanio.com/view/note/llarge/public/p45039125.webp'">
//                 </div>
//                 <div class="image-caption-wrapper">
//                   <div class="image-caption">
//                     匆匆的红袍僧人
//                   </div>
//                 </div>
//               </div>
//               <div class="image-container image-float-center">
//                 <div class="image-wrapper">
//                   <img width="100%" v-lazy="'https://img1.doubanio.com/view/note/llarge/public/p45039119.webp'">
//                 </div>
//                 <div class="image-caption-wrapper">
//                   <div class="image-caption">
//                     雪后的色达佛学院
//                   </div>
//                 </div>
//               </div>
//               <div class="image-container image-float-center">
//                 <div class="image-wrapper">
//                   <img width="100%" v-lazy="'https://img3.doubanio.com/view/note/llarge/public/p45039126.webp'">
//                 </div>
//                 <div class="image-caption-wrapper">
//                   <div class="image-caption">
//                     正要入寺的觉姆
//                   </div>
//                 </div>
//               </div>
//               <div class="image-container image-float-center">
//                 <div class="image-wrapper">
//                   <img width="100%" v-lazy="'https://img3.doubanio.com/view/note/llarge/public/p45039130.webp'">
//                 </div>
//                 <div class="image-caption-wrapper">
//                   <div class="image-caption">
//                     转经筒
//                   </div>
//                 </div>
//               </div>
//               <h2>一 飞雪</h2>
//               <p>
//                 我在五月目睹了一场漫天飞雪。
//               </p>
//               <p>
//                 汽车行驶在通往色达县的路上。从成都出发，这是在路上的第三天。绻在最后一排，中排的人们已然昏昏入睡，前面一向精神，积极的星姐也静了下来。大家都倦了。车里，时间仿佛凝固，一片静默，阒然无声，就连发动机的轰鸣和车轮压过路面的摩擦声也变得遥远。
//               </p>
//               <div class="image-container image-float-center">
//                 <div class="image-wrapper">
//                   <img width="100%" v-lazy="'https://img3.doubanio.com/view/note/llarge/public/p45039641.webp'">
//                 </div>
//                 <div class="image-caption-wrapper">
//                   <div class="image-caption">
//                     青藏高原
//                   </div>
//                 </div>
//               </div>
//               <p>
//                 尼哥边把着方向盘边吐着烟，烟雾结合着大家疲惫的呼吸朦胧着车窗。在近四千米高海拔的稀薄空气中，在暮色近临苍茫的青藏高原上，倦意洗涤着回忆。这些天看到的美景，经历的喜悦 – 一切似乎都模糊了可却又无比清晰，沁入骨髓，正如窗外的漫天飞雪，洗涤着一切色彩，却凸显着山峦本身的形态 - 巍峨，巉峻，黑压压地直到地平线的尽头。
//               </p>
//               <div class="image-container image-float-center">
//                 <div class="image-wrapper">
//                   <img width="100%" v-lazy="'https://img3.doubanio.com/view/note/llarge/public/p45039695.webp'">
//                 </div>
//                 <div class="image-caption-wrapper">
//                   <div class="image-caption">
//                     风雪中的牦牛
//                   </div>
//                 </div>
//               </div>
//               <p>
//                 本该是墨绿的大地被雪覆盖后只剩一片暗沉的灰，天空更是黯然，一片萧瑟，不见人烟，恰如诗中描述的 “千山鸟飞绝，万径人踪灭”。忽然，我看到远处的牧人，在苍茫的画面中沧海一粟。数头牦牛，孤身一人，巍然着，笃定着，伫立于飘然的白雪和呼啸的飓风中。我和他隔着很远，只能去想象他的寂寞孤独，他的凛然无畏，可无论如何，都是一副足以让人心动的画面。
//               </p>
//               <p>
//                 我匆匆地让尼哥停了车，飞速地冲下去，拿起相机，按下快门。
//               </p>
//               <div class="image-container image-float-center">
//                 <div class="image-wrapper">
//                   <img width="100%" v-lazy="'https://img1.doubanio.com/view/note/llarge/public/p45039668.webp'">
//                 </div>
//                 <div class="image-caption-wrapper">
//                   <div class="image-caption">
//                     风雪中的牧民
//                   </div>
//                 </div>
//               </div>
//               <p>
//                 外面的空气无比冷冽，新鲜，加上雪花飘打着肌肤的寒冷刺痛，顿时清醒。疲倦仿佛也被飞雪洗涤，那天，我再未困过，直到很深的夜。
//               </p>
//               <div class="image-container image-float-center">
//                 <div class="image-wrapper">
//                   <img width="100%" v-lazy="'https://img1.doubanio.com/view/note/llarge/public/p45039759.webp'">
//                 </div>
//               </div>
//               <p>
//                 晚饭是丰盛的藏餐 – 牦牛肉，酥油茶，青稞酒。酒精，结合高原的缺氧带来一种迷离恍惚的兴奋，当众人都欹卧在柔软的沙发上，胸闷，头疼，奄奄一息，我决定晚上出去拍拍色达的夜景，慰藉不能去佛学院看夜景的遗憾。
//               </p>
//               <p>
//                 半夜10点的色达县空旷无人，我漫无目的的闲逛，没有月光，没有星辰，霓虹灯和偶尔车辆的灯光扰着夜的宁静 - 色达，似乎和普通县城没有区别。可瞥见路边的积雪，我知道，待天明，一定是一片白皑的美好。
//               </p>
//               <div class="image-container image-float-center">
//                 <div class="image-wrapper">
//                   <img width="100%" v-lazy="'https://img3.doubanio.com/view/note/llarge/public/p45039816.webp'">
//                 </div>
//               </div>
//               <h2>二 雪域</h2>
//               <p>
//                 次日，初入眼帘的是一片纯净的蓝白。
//               </p>
//               <div class="image-container image-float-center">
//                 <div class="image-wrapper">
//                   <img width="100%" v-lazy="'https://img3.doubanio.com/view/note/llarge/public/p45039955.webp'">
//                 </div>
//                 <div class="image-caption-wrapper">
//                   <div class="image-caption">
//                     色达，清晨
//                   </div>
//                 </div>
//               </div>
//
//               <p>
//                 多年以后，当我面对生死，我大概会想起这片雪域色达，想起人生路上的总总风景和总总情愫。我知道，漫天的鹰鹫依然会翱翔在四千米海拔上的朗朗诵经声，消失在喇嘛们鳞次栉比的红色居所背后，有人死也有人生，轮回永无止境。
//               </p>
//               <div class="image-container image-float-center">
//                 <div class="image-wrapper">
//                   <img width="100%" v-lazy="'https://img3.doubanio.com/view/note/large/public/p45040914.jpg'">
//                 </div>
//               </div>
//               <p>
//                 最后
//               </p>
//               <p>
//                 星姐和尼哥相识于牛背山的一次徒步，最近刚领了证。祝福他们。
//               </p>
//               <div class="image-container image-float-center">
//                 <div class="image-wrapper">
//                   <img width="100%" v-lazy="'https://img3.doubanio.com/view/note/llarge/public/p45040915.webp'">
//                 </div>
//               </div>
//               <div class="image-container image-float-center">
//                 <div class="image-wrapper">
//                   <img width="100%" v-lazy="'https://img3.doubanio.com/view/note/large/public/p45040916.jpg'">
//                 </div>
//               </div>
//               <div class="separator">
//                 <hr>
//               </div>
//               <p>原文发在</p>
//               <p>我的公众号： 小力摄影 LLSPhotography - </p>
//               <p> 一个用快门和心灵记录世界的地方.</p>
//               <div class="image-container image-float-center">
//                 <div class="image-wrapper">
//                   <img width="258" v-lazy="'https://img1.doubanio.com/view/note/large/public/p45040937.jpg'">
//                 </div>
//               </div>
//             </div>
//             <div class="copyright-notice">
//               ©本文版权归 小力子百合 所有, 任何形式转载请联系作者。
//             </div>
//             <div class="like-btn " data-url="/j/note/635228761" data-needlogin="">
//               69
//             </div>
//           </div>
//           <a href="javascript:;" class="btn-more show-rich-content" onclick="ga('send', 'event', 'ios', 'click', 'card full_note')" style="display: none;">显示全文</a>
//         </div>
//       </section>
//
//     </div>
// 	</div>
// </template>
//
// <script>
exports.default = {
    data: function data() {
        return {
            datalist: [],
            label: [],
            type: []
        };
    },
    ready: function ready() {},

    methods: {
        removeClass: function removeClass(event, className) {
            var target = event.currentTarget || event;
            if (!target) return;
            if (className && target.classList) {
                target.classList.remove(className);
            } else if (className && !target.classList) {
                target.className = target.className.replace(/className/, '');
            }
        },
        showContent: function showContent() {
            this.removeClass(document.querySelector('.rich-note.truncated'), 'truncated');
        }
    }

};
// </script>
//
// <style>
// @import url(https://img3.doubanio.com/f/talion/881fcae3a474d3f7c8c20ded91b34bfde79af6e5/css/card/base.css);
// @import url(https://img3.doubanio.com/misc/mixed_static/2dd424c0ea07232a.css)
// </style>

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports
exports.push([module.i, "@import url(https://img3.doubanio.com/f/talion/881fcae3a474d3f7c8c20ded91b34bfde79af6e5/css/card/base.css);", ""]);
exports.push([module.i, "@import url(https://img3.doubanio.com/misc/mixed_static/2dd424c0ea07232a.css);", ""]);

// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f6006046&file=article.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./article.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f6006046&file=article.vue!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./article.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = "\r\n\t<div class=\"page\" transition=\"expand\">\r\n\t\t<div class=\"card\">\r\n\r\n      <section class=\"header\">\r\n        <h1 class=\"title\">雪域色达</h1>\r\n        <div class=\"user-title\">\r\n            <span class=\"info\">\r\n              小力子百合\r\n              <span class=\"timestamp\">2017-08-29</span>\r\n            </span>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"note-content paper\">\r\n        <div class=\"note-body\" id=\"note-body\">\r\n          <div class=\"rich-note\">\r\n            <div id=\"content\">\r\n              <p>\r\n                这是一篇游记，记录5月份四天三夜的旅行\r\n              </p>\r\n              <p>\r\n                - 观音桥 - 色达 - 甲居藏寨 - 四姑娘山\r\n              </p>\r\n              <p>\r\n                照片都由本人所拍， 更多照片在这里： <a href=\"https://www.douban.com/photos/album/1651717275/\" rel=\"nofollow\">https://www.douban.com/photos/album/1651717275/</a>\r\n              </p>\r\n              <div class=\"image-container image-float-center\">\r\n                <div class=\"image-wrapper\">\r\n                  <img width=\"100%\" v-lazy=\"'https://img3.doubanio.com/view/note/llarge/public/p45039125.webp'\">\r\n                </div>\r\n                <div class=\"image-caption-wrapper\">\r\n                  <div class=\"image-caption\">\r\n                    匆匆的红袍僧人\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"image-container image-float-center\">\r\n                <div class=\"image-wrapper\">\r\n                  <img width=\"100%\" v-lazy=\"'https://img1.doubanio.com/view/note/llarge/public/p45039119.webp'\">\r\n                </div>\r\n                <div class=\"image-caption-wrapper\">\r\n                  <div class=\"image-caption\">\r\n                    雪后的色达佛学院\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"image-container image-float-center\">\r\n                <div class=\"image-wrapper\">\r\n                  <img width=\"100%\" v-lazy=\"'https://img3.doubanio.com/view/note/llarge/public/p45039126.webp'\">\r\n                </div>\r\n                <div class=\"image-caption-wrapper\">\r\n                  <div class=\"image-caption\">\r\n                    正要入寺的觉姆\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"image-container image-float-center\">\r\n                <div class=\"image-wrapper\">\r\n                  <img width=\"100%\" v-lazy=\"'https://img3.doubanio.com/view/note/llarge/public/p45039130.webp'\">\r\n                </div>\r\n                <div class=\"image-caption-wrapper\">\r\n                  <div class=\"image-caption\">\r\n                    转经筒\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <h2>一 飞雪</h2>\r\n              <p>\r\n                我在五月目睹了一场漫天飞雪。\r\n              </p>\r\n              <p>\r\n                汽车行驶在通往色达县的路上。从成都出发，这是在路上的第三天。绻在最后一排，中排的人们已然昏昏入睡，前面一向精神，积极的星姐也静了下来。大家都倦了。车里，时间仿佛凝固，一片静默，阒然无声，就连发动机的轰鸣和车轮压过路面的摩擦声也变得遥远。\r\n              </p>\r\n              <div class=\"image-container image-float-center\">\r\n                <div class=\"image-wrapper\">\r\n                  <img width=\"100%\" v-lazy=\"'https://img3.doubanio.com/view/note/llarge/public/p45039641.webp'\">\r\n                </div>\r\n                <div class=\"image-caption-wrapper\">\r\n                  <div class=\"image-caption\">\r\n                    青藏高原\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p>\r\n                尼哥边把着方向盘边吐着烟，烟雾结合着大家疲惫的呼吸朦胧着车窗。在近四千米高海拔的稀薄空气中，在暮色近临苍茫的青藏高原上，倦意洗涤着回忆。这些天看到的美景，经历的喜悦 – 一切似乎都模糊了可却又无比清晰，沁入骨髓，正如窗外的漫天飞雪，洗涤着一切色彩，却凸显着山峦本身的形态 - 巍峨，巉峻，黑压压地直到地平线的尽头。\r\n              </p>\r\n              <div class=\"image-container image-float-center\">\r\n                <div class=\"image-wrapper\">\r\n                  <img width=\"100%\" v-lazy=\"'https://img3.doubanio.com/view/note/llarge/public/p45039695.webp'\">\r\n                </div>\r\n                <div class=\"image-caption-wrapper\">\r\n                  <div class=\"image-caption\">\r\n                    风雪中的牦牛\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p>\r\n                本该是墨绿的大地被雪覆盖后只剩一片暗沉的灰，天空更是黯然，一片萧瑟，不见人烟，恰如诗中描述的 “千山鸟飞绝，万径人踪灭”。忽然，我看到远处的牧人，在苍茫的画面中沧海一粟。数头牦牛，孤身一人，巍然着，笃定着，伫立于飘然的白雪和呼啸的飓风中。我和他隔着很远，只能去想象他的寂寞孤独，他的凛然无畏，可无论如何，都是一副足以让人心动的画面。\r\n              </p>\r\n              <p>\r\n                我匆匆地让尼哥停了车，飞速地冲下去，拿起相机，按下快门。\r\n              </p>\r\n              <div class=\"image-container image-float-center\">\r\n                <div class=\"image-wrapper\">\r\n                  <img width=\"100%\" v-lazy=\"'https://img1.doubanio.com/view/note/llarge/public/p45039668.webp'\">\r\n                </div>\r\n                <div class=\"image-caption-wrapper\">\r\n                  <div class=\"image-caption\">\r\n                    风雪中的牧民\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p>\r\n                外面的空气无比冷冽，新鲜，加上雪花飘打着肌肤的寒冷刺痛，顿时清醒。疲倦仿佛也被飞雪洗涤，那天，我再未困过，直到很深的夜。\r\n              </p>\r\n              <div class=\"image-container image-float-center\">\r\n                <div class=\"image-wrapper\">\r\n                  <img width=\"100%\" v-lazy=\"'https://img1.doubanio.com/view/note/llarge/public/p45039759.webp'\">\r\n                </div>\r\n              </div>\r\n              <p>\r\n                晚饭是丰盛的藏餐 – 牦牛肉，酥油茶，青稞酒。酒精，结合高原的缺氧带来一种迷离恍惚的兴奋，当众人都欹卧在柔软的沙发上，胸闷，头疼，奄奄一息，我决定晚上出去拍拍色达的夜景，慰藉不能去佛学院看夜景的遗憾。\r\n              </p>\r\n              <p>\r\n                半夜10点的色达县空旷无人，我漫无目的的闲逛，没有月光，没有星辰，霓虹灯和偶尔车辆的灯光扰着夜的宁静 - 色达，似乎和普通县城没有区别。可瞥见路边的积雪，我知道，待天明，一定是一片白皑的美好。\r\n              </p>\r\n              <div class=\"image-container image-float-center\">\r\n                <div class=\"image-wrapper\">\r\n                  <img width=\"100%\" v-lazy=\"'https://img3.doubanio.com/view/note/llarge/public/p45039816.webp'\">\r\n                </div>\r\n              </div>\r\n              <h2>二 雪域</h2>\r\n              <p>\r\n                次日，初入眼帘的是一片纯净的蓝白。\r\n              </p>\r\n              <div class=\"image-container image-float-center\">\r\n                <div class=\"image-wrapper\">\r\n                  <img width=\"100%\" v-lazy=\"'https://img3.doubanio.com/view/note/llarge/public/p45039955.webp'\">\r\n                </div>\r\n                <div class=\"image-caption-wrapper\">\r\n                  <div class=\"image-caption\">\r\n                    色达，清晨\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <p>\r\n                多年以后，当我面对生死，我大概会想起这片雪域色达，想起人生路上的总总风景和总总情愫。我知道，漫天的鹰鹫依然会翱翔在四千米海拔上的朗朗诵经声，消失在喇嘛们鳞次栉比的红色居所背后，有人死也有人生，轮回永无止境。\r\n              </p>\r\n              <div class=\"image-container image-float-center\">\r\n                <div class=\"image-wrapper\">\r\n                  <img width=\"100%\" v-lazy=\"'https://img3.doubanio.com/view/note/large/public/p45040914.jpg'\">\r\n                </div>\r\n              </div>\r\n              <p>\r\n                最后\r\n              </p>\r\n              <p>\r\n                星姐和尼哥相识于牛背山的一次徒步，最近刚领了证。祝福他们。\r\n              </p>\r\n              <div class=\"image-container image-float-center\">\r\n                <div class=\"image-wrapper\">\r\n                  <img width=\"100%\" v-lazy=\"'https://img3.doubanio.com/view/note/llarge/public/p45040915.webp'\">\r\n                </div>\r\n              </div>\r\n              <div class=\"image-container image-float-center\">\r\n                <div class=\"image-wrapper\">\r\n                  <img width=\"100%\" v-lazy=\"'https://img3.doubanio.com/view/note/large/public/p45040916.jpg'\">\r\n                </div>\r\n              </div>\r\n              <div class=\"separator\">\r\n                <hr>\r\n              </div>\r\n              <p>原文发在</p>\r\n              <p>我的公众号： 小力摄影 LLSPhotography - </p>\r\n              <p> 一个用快门和心灵记录世界的地方.</p>\r\n              <div class=\"image-container image-float-center\">\r\n                <div class=\"image-wrapper\">\r\n                  <img width=\"258\" v-lazy=\"'https://img1.doubanio.com/view/note/large/public/p45040937.jpg'\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"copyright-notice\">\r\n              ©本文版权归 小力子百合 所有, 任何形式转载请联系作者。\r\n            </div>\r\n            <div class=\"like-btn \" data-url=\"/j/note/635228761\" data-needlogin=\"\">\r\n              69\r\n            </div>\r\n          </div>\r\n          <a href=\"javascript:;\" class=\"btn-more show-rich-content\" onclick=\"ga('send', 'event', 'ios', 'click', 'card full_note')\" style=\"display: none;\">显示全文</a>\r\n        </div>\r\n      </section>\r\n\r\n    </div>\r\n\t</div>\r\n";

/***/ })

});