webpackJsonp([5],{

/***/ 100:
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"group\" transition=\"expand\" _v-e24ad6b4=\"\">\n        <ul _v-e24ad6b4=\"\">\n            <li class=\"group_item\" v-for=\"item in info\" _v-e24ad6b4=\"\">\n                <h3 _v-e24ad6b4=\"\">{{item.title}}</h3>\n                <ul class=\"group_list\" _v-e24ad6b4=\"\">\n                    <li class=\"ui-bottom-line\" v-for=\"list in item.arr\" _v-e24ad6b4=\"\">\n                        <a _v-e24ad6b4=\"\">\n                            <div class=\"ui-flex-align\" _v-e24ad6b4=\"\">\n                                <div class=\"ui-flex-left group_list_l\" _v-e24ad6b4=\"\">\n                                    <img :src=\"list.url\" _v-e24ad6b4=\"\">\n                                </div>\n                                <div class=\"ui-flex-1 group_list_m\" _v-e24ad6b4=\"\">\n                                    {{list.name}}\n                                </div>\n                                <div class=\"group_list_r\" _v-e24ad6b4=\"\">{{list.num}}</div>\n                            </div>\n                            <p _v-e24ad6b4=\"\">{{list.des}}</p>\n                        </a>\n                    </li>\n                </ul>\n                <div class=\"group_more ui-bottom-line\" _v-e24ad6b4=\"\">更多相关小组</div>\n            </li>\n        </ul>\n        <nv-footer _v-e24ad6b4=\"\"></nv-footer>\n    </div>\n";

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
__webpack_require__(88)
__vue_script__ = __webpack_require__(61)
__vue_template__ = __webpack_require__(100)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "c:\\douban\\app\\views\\group.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  "info": [{
    "title": "租房找室友",
    "arr": [{
      "name": "北京CBD租房",
      "url": "https://img3.doubanio.com/icon/g221207-3.jpg",
      "num": "20487人",
      "des": "58分钟前发布：北京动物园有精美单间出租拎包入住"
    }, {
      "name": "上海租房@长宁租房/徐汇/静安租房",
      "url": "https://img3.doubanio.com/icon/g196844-1.jpg",
      "num": "20487人",
      "des": "58分钟前发布：北京动物园有精美单间出租拎包入住"
    }, {
      "name": "厦门租房",
      "url": "https://img1.doubanio.com/icon/g26926-9.jpg",
      "num": "20487人",
      "des": "58分钟前发布：北京动物园有精美单间出租拎包入住"
    }]
  }, {
    "title": "来聊五块钱",
    "arr": [{
      "name": "北京CBD租房",
      "url": "https://img3.doubanio.com/icon/g221207-3.jpg",
      "num": "20487人",
      "des": "58分钟前发布：北京动物园有精美单间出租拎包入住"
    }, {
      "name": "上海租房@长宁租房/徐汇/静安租房",
      "url": "https://img3.doubanio.com/icon/g196844-1.jpg",
      "num": "20487人",
      "des": "58分钟前发布：北京动物园有精美单间出租拎包入住"
    }, {
      "name": "厦门租房",
      "url": "https://img1.doubanio.com/icon/g26926-9.jpg",
      "num": "20487人",
      "des": "58分钟前发布：北京动物园有精美单间出租拎包入住"
    }]
  }, {
    "title": "买买买",
    "arr": [{
      "name": "北京CBD租房",
      "url": "https://img3.doubanio.com/icon/g221207-3.jpg",
      "num": "20487人",
      "des": "58分钟前发布：北京动物园有精美单间出租拎包入住"
    }, {
      "name": "上海租房@长宁租房/徐汇/静安租房",
      "url": "https://img3.doubanio.com/icon/g196844-1.jpg",
      "num": "20487人",
      "des": "58分钟前发布：北京动物园有精美单间出租拎包入住"
    }, {
      "name": "厦门租房",
      "url": "https://img1.doubanio.com/icon/g26926-9.jpg",
      "num": "20487人",
      "des": "58分钟前发布：北京动物园有精美单间出租拎包入住"
    }]
  }]
};

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// <template>
//     <div class="group" transition="expand">
//         <ul>
//             <li class="group_item" v-for="item in info">
//                 <h3>{{item.title}}</h3>
//                 <ul class="group_list">
//                     <li class="ui-bottom-line" v-for="list in item.arr">
//                         <a>
//                             <div class="ui-flex-align">
//                                 <div class="ui-flex-left group_list_l">
//                                     <img :src="list.url"/>
//                                 </div>
//                                 <div class="ui-flex-1 group_list_m">
//                                     {{list.name}}
//                                 </div>
//                                 <div class="group_list_r">{{list.num}}</div>
//                             </div>
//                             <p>{{list.des}}</p>
//                         </a>
//                     </li>
//                 </ul>
//                 <div class="group_more ui-bottom-line">更多相关小组</div>
//             </li>
//         </ul>
//         <nv-footer></nv-footer>
//     </div>
// </template>
//
// <script>
exports.default = {
    data: function data() {
        return {
            info: {}
        };
    },
    ready: function ready() {
        var self = this;
        self.info = __webpack_require__(53).info;
    }
};
// </script>
//
// <style scoped>
// .group{
//     padding-top: 47px;
//     max-width: 650px;
//     background: #fff;
//     margin: 0 15px;
//     overflow-x: hidden;
// }
//  .group_item {
//   padding: 0.2rem 0.3rem;
// }
// .group_item h3 {
//   padding: 4px 0;
//   font-size: 18px;
//   color: #111;
// }
// .ui-flex-align {
//     position: relative;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     align-items: center;
//     width: 100%;
//     box-sizing: border-box;
// }
// .group_item .group_list li a {
//   display: block;
//   width: 100%;
//   height: 100%;
//   box-sizing: border-box;
//   padding: 0.1rem 0 0.3rem;
// }
// .group_item .group_list li a p {
//   font-size: 14px;
//   color: #aaa;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   padding: 8px 0 0;
// }
// .group_item .group_list li a div.group_list_l {
//   width: 40px;
//   height: 40px;
// }
// .group_list_l img {
//     max-width: 100%;
//     max-height: 100%;
//     width: 100%;
//     display: block;
//     border: 0;
//     height: 100%;
// }
// .group_item .group_list li a div.group_list_m {
//   padding-left: 10px;
//   padding-right: 10px;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   font-size: 16px;
//   color: #111;
// }
// .group_item .group_list li a div.group_list_r {
//   color: #ccc;
//   font-size: 14px;
// }
// .ui-flex-1 {
//     -webkit-box-flex: 1;
//     -ms-flex: 1;
//     flex: 1;
// }
// .group_more {
//   text-align: center;
//   padding: 0.25rem 0;
//   color: #42bd56;
//   font-size: 15px;
//   margin-bottom: 30px;
//   padding: 15px 0;
// }
// .ui-bottom-line {
//     position: relative;
// }
// .ui-bottom-line:before {
//     content: " ";
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     width: 100%;
//     height: 1px;
//     border-bottom: 1px solid #D9D9D9;
//     color: #D9D9D9;
//     -webkit-transform-origin: 0 100%;
//     transform-origin: 0 100%;
//     -webkit-transform: scaleY(0.5);
//     transform: scaleY(0.5);
// }
// </style>
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\r\n.group[_v-e24ad6b4]{\r\n    padding-top: 47px;\r\n    max-width: 650px;\r\n    background: #fff;\r\n    margin: 0 15px;\r\n    overflow-x: hidden;\r\n}\r\n .group_item[_v-e24ad6b4] {\r\n  padding: 0.2rem 0.3rem;\r\n}\r\n.group_item h3[_v-e24ad6b4] {\r\n  padding: 4px 0;\r\n  font-size: 18px;\r\n  color: #111;\r\n}\r\n.ui-flex-align[_v-e24ad6b4] {\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n.group_item .group_list li a[_v-e24ad6b4] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  padding: 0.1rem 0 0.3rem;\r\n}\r\n.group_item .group_list li a p[_v-e24ad6b4] {\r\n  font-size: 14px;\r\n  color: #aaa;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  padding: 8px 0 0;\r\n}\r\n.group_item .group_list li a div.group_list_l[_v-e24ad6b4] {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n.group_list_l img[_v-e24ad6b4] {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    width: 100%;\r\n    display: block;\r\n    border: 0;\r\n    height: 100%;\r\n}\r\n.group_item .group_list li a div.group_list_m[_v-e24ad6b4] {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  font-size: 16px;\r\n  color: #111;\r\n}\r\n.group_item .group_list li a div.group_list_r[_v-e24ad6b4] {\r\n  color: #ccc;\r\n  font-size: 14px;\r\n}\r\n.ui-flex-1[_v-e24ad6b4] {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n}\r\n.group_more[_v-e24ad6b4] {\r\n  text-align: center;\r\n  padding: 0.25rem 0;\r\n  color: #42bd56;\r\n  font-size: 15px;\r\n  margin-bottom: 30px;\r\n  padding: 15px 0;\r\n}\r\n.ui-bottom-line[_v-e24ad6b4] {\r\n    position: relative;\r\n}\r\n.ui-bottom-line[_v-e24ad6b4]:before {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px solid #D9D9D9;\r\n    color: #D9D9D9;\r\n    -webkit-transform-origin: 0 100%;\r\n    transform-origin: 0 100%;\r\n    -webkit-transform: scaleY(0.5);\r\n    transform: scaleY(0.5);\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e24ad6b4&file=group.vue&scoped=true!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./group.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e24ad6b4&file=group.vue&scoped=true!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./group.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});