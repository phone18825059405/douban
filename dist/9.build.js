webpackJsonp([9],{

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
__webpack_require__(80)
__vue_script__ = __webpack_require__(63)
__vue_template__ = __webpack_require__(93)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "c:\\douban\\app\\views\\list.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// <template>
//
//     		<div class="lists">
//             <h1>{{title}}</h1>
//             <section id="list" class="grid clearfix">
//                 <a v-for="item in lists" v-link="{name:'detail'}" class="item">
//                     <div class="cover">
//                         <div class="wp ratio3_4">
//                             <img v-lazy="item.cover.url" alt="肖申克的救赎" data-x="2000" data-y="2963" class="img-show" style="width: 100%;">
//                             <span class="action-tag">可播放</span>
//                         </div>
//                     </div>
//
//                     <div class="info">
//                         <h4></h4>
//                         <h3>{{item.title}}<span class="action-tag">可播放</span></h3>
//                         <p class="rank">
//                                     <span class="rating-stars" data-rating="4.8">
//                                     <span v-for="n in Math.round(item.rating.value/2)" class="rating-star rating-star-small-full"></span>
//                                     <span v-for="n in Math.round(5-item.rating.value/2)" class="rating-star rating-star-small-gray"></span>
//                                     </span> 
//                                     <span>{{item.rating.value}}</span>
//                         </p>
//                         <p class="meta">{{item.info}}</p>
//                         <cite></cite>
//                     </div>
//                 </a>
//             </section>
//     		</div>
//
// </template>
//
// <script>
exports.default = {
    data: function data() {
        return {
            lists: [],
            currentPage: 0,
            title: '',
            router: null,
            loading: false
        };
    },

    methods: {
        getList: function getList() {
            var that = this;

            //if(that.loading) return;

            that.loading = true;

            this.$http.jsonp('https://m.douban.com/rexxar/api/v2/subject_collection/filter_' + this.router.type + '_' + this.router.id + '_hot/items?os=ios&for_mobile=1&start=' + this.currentPage + '&count=18&loc_id=0&_=1504162678222').then(function (response) {
                response.data.subject_collection_items.forEach(function (item) {
                    that.lists.push(item);
                });

                that.currentPage += response.data.count;
                that.loading = false;
            });
        }
    },
    created: function created() {
        this.router = this.$route.params;
        this.title = this.router.title;
        this.getList();
    },
    ready: function ready() {
        var that = this;
        setTimeout(function (context) {
            return function (context) {
                //console.log(context)
                var iH = window.innerHeight;
                var scrollEle = document.querySelector('#app');

                var oT = document.querySelector('#list').offsetTop;
                //console.log(scrollEle+'|||'+oT)

                window.addEventListener('scroll', function (event) {
                    if (iH + document.body.scrollTop >= scrollEle.offsetHeight - oT - 100) {

                        if (context.loading) return;
                        context.getList();
                        //oH = document.body.offsetHeight;
                    }
                });
            }(that);
        }, 15);
    }
};
// </script>
//
// <style scoped>
// .page {
//     padding-top: 47px;
//     max-width: 650px;
//     background: #fff;
//     margin: 0 auto;
//     overflow-x: hidden;
// }
// .card {
//     margin: 0 18px;
//     -webkit-text-size-adjust: 100%;
// }
// .card {
//     margin: 0;
// }
// .lists{
//     padding-top: 47px;
// }
// #list .item {
//     text-decoration: none;
//     color: #9b9b9b;
// }
// .grid .item {
//     float: left;
//     box-sizing: border-box;
//     width: 33.33333%;
//     padding-left: 4%;
//     padding-right: 4%;
//     margin-bottom: 20px;
//     overflow: hidden;
// }
// .grid .item .cover {
//     min-height: 87px;
//     overflow: hidden;
//     position: relative;
// }
//
//
//
// .grid .ratio1_1:before, .grid .ratio3_4:before {
//     content: "";
//     display: block;
//     padding-top: 100%;
// }
// .grid .ratio3_4:before {
//     padding-top: 143%;
// }
// .grid .ratio1_1, .grid .ratio3_4 {
//     position: relative;
// }
// .grid .item img {
//     display: block;
//     position: absolute;
//     left: -100%;
//     right: -100%;
//     top: -100%;
//     bottom: -100%;
//     margin: auto;
//     min-height: 100%;
//     min-width: 100%;
// }
// #list .item img {
//     opacity: 0;
//     -webkit-transition: opacity 0.3s ease-out;
//     transition: opacity 0.3s ease-out;
// }
// #list .item .img-show {
//     opacity: 1;
// }
// .grid .item .info {
//     height: 45px;
//     overflow: hidden;
// }.grid .item h4, .grid .item cite, .grid .item .meta {
//     display: none;
// }#list h3, #list h4, #list p {
//     margin: 0;
// }.grid .item h3 {
//     font-size: 13px;
//     font-weight: normal;
//     padding: 5px 0 0;
//     color: #494949;
//     text-align: center;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     display: -webkit-box;
//     -webkit-line-clamp: 1;
//     -webkit-box-orient: vertical;
// }#list h3, #list h4, #list p {
//     margin: 0;
// }.action-tag {
//     font-size: 9px;
//     color: #fff;
//     border-radius: 3px;
//     border: 1px solid #eee;
//     background: #f5a623;
//     padding: 1px 5px;
// }.grid .item h3 .action-tag {
//     display: none;
// }.grid .item .rank {
//     height: 16px;
//     font-size: 12px;
//     padding-top: 3px;
//     text-align: center;
// }#list h3, #list h4, #list p {
//     margin: 0;
// }.grid .item .rank {
//     height: 16px;
//     font-size: 12px;
//     padding-top: 3px;
//     text-align: center;
// }.rating-stars {
//     display: inline-block;
//     vertical-align: middle;
// }.rating-star-small-full, .rating-star-small-half, .rating-star-small-gray {
//     width: 10px;
//     height: 10px;
//     background-size: 10px 10px;
// }.rating-star-small-full {
//     background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==")
// }.rating-stars .rating-star {
//     display: inline-block;
//     margin-right: 1px;
//     background-color: transparent;
//     background-repeat: no-repeat;
// }.grid .item .rank {
//     height: 16px;
//     font-size: 12px;
//     padding-top: 3px;
//     text-align: center;
// }#list .item cite {
//     font-style: normal;
// }
// .rating-star-small-gray {
//     background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=");
// }
// body .download-app{
//     display: none !important;
// }
// body{
//     height: auto;
// }
//
//  h1 {
//     font-size: 24px;
//     font-weight: normal;
//     box-sizing: border-box;
//     max-width: 660px;
//     margin-left: auto;
//     margin-right: auto;
//     margin-bottom: 6px;
//     padding-left: 4%;
// }
// </style>

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\r\n.page[_v-0d478347] {\r\n    padding-top: 47px;\r\n    max-width: 650px;\r\n    background: #fff;\r\n    margin: 0 auto;\r\n    overflow-x: hidden;\r\n}\r\n.card[_v-0d478347] {\r\n    margin: 0 18px;\r\n    -webkit-text-size-adjust: 100%;\r\n}\r\n.card[_v-0d478347] {\r\n    margin: 0;\r\n}\r\n.lists[_v-0d478347]{\r\n    padding-top: 47px;\r\n}\r\n#list .item[_v-0d478347] {\r\n    text-decoration: none;\r\n    color: #9b9b9b;\r\n}\r\n.grid .item[_v-0d478347] {\r\n    float: left;\r\n    box-sizing: border-box;\r\n    width: 33.33333%;\r\n    padding-left: 4%;\r\n    padding-right: 4%;\r\n    margin-bottom: 20px;\r\n    overflow: hidden;\r\n}\r\n.grid .item .cover[_v-0d478347] {\r\n    min-height: 87px;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.grid .ratio1_1[_v-0d478347]:before, .grid .ratio3_4[_v-0d478347]:before {\r\n    content: \"\";\r\n    display: block;\r\n    padding-top: 100%;\r\n}\r\n.grid .ratio3_4[_v-0d478347]:before {\r\n    padding-top: 143%;\r\n}\r\n.grid .ratio1_1[_v-0d478347], .grid .ratio3_4[_v-0d478347] {\r\n    position: relative;\r\n}\r\n.grid .item img[_v-0d478347] {\r\n    display: block;\r\n    position: absolute;\r\n    left: -100%;\r\n    right: -100%;\r\n    top: -100%;\r\n    bottom: -100%;\r\n    margin: auto;\r\n    min-height: 100%;\r\n    min-width: 100%;\r\n}\r\n#list .item img[_v-0d478347] {\r\n    opacity: 0;\r\n    -webkit-transition: opacity 0.3s ease-out;\r\n    transition: opacity 0.3s ease-out;\r\n}\r\n#list .item .img-show[_v-0d478347] {\r\n    opacity: 1;\r\n}\r\n.grid .item .info[_v-0d478347] {\r\n    height: 45px;\r\n    overflow: hidden;\r\n}.grid .item h4[_v-0d478347], .grid .item cite[_v-0d478347], .grid .item .meta[_v-0d478347] {\r\n    display: none;\r\n}#list h3[_v-0d478347], #list h4[_v-0d478347], #list p[_v-0d478347] {\r\n    margin: 0;\r\n}.grid .item h3[_v-0d478347] {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    padding: 5px 0 0;\r\n    color: #494949;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 1;\r\n    -webkit-box-orient: vertical;\r\n}#list h3[_v-0d478347], #list h4[_v-0d478347], #list p[_v-0d478347] {\r\n    margin: 0;\r\n}.action-tag[_v-0d478347] {\r\n    font-size: 9px;\r\n    color: #fff;\r\n    border-radius: 3px;\r\n    border: 1px solid #eee;\r\n    background: #f5a623;\r\n    padding: 1px 5px;\r\n}.grid .item h3 .action-tag[_v-0d478347] {\r\n    display: none;\r\n}.grid .item .rank[_v-0d478347] {\r\n    height: 16px;\r\n    font-size: 12px;\r\n    padding-top: 3px;\r\n    text-align: center;\r\n}#list h3[_v-0d478347], #list h4[_v-0d478347], #list p[_v-0d478347] {\r\n    margin: 0;\r\n}.grid .item .rank[_v-0d478347] {\r\n    height: 16px;\r\n    font-size: 12px;\r\n    padding-top: 3px;\r\n    text-align: center;\r\n}.rating-stars[_v-0d478347] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}.rating-star-small-full[_v-0d478347], .rating-star-small-half[_v-0d478347], .rating-star-small-gray[_v-0d478347] {\r\n    width: 10px;\r\n    height: 10px;\r\n    background-size: 10px 10px;\r\n}.rating-star-small-full[_v-0d478347] {\r\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==\")\r\n}.rating-stars .rating-star[_v-0d478347] {\r\n    display: inline-block;\r\n    margin-right: 1px;\r\n    background-color: transparent;\r\n    background-repeat: no-repeat;\r\n}.grid .item .rank[_v-0d478347] {\r\n    height: 16px;\r\n    font-size: 12px;\r\n    padding-top: 3px;\r\n    text-align: center;\r\n}#list .item cite[_v-0d478347] {\r\n    font-style: normal;\r\n}\r\n.rating-star-small-gray[_v-0d478347] {\r\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=\");\r\n}\r\nbody .download-app[_v-0d478347]{\r\n    display: none !important;\r\n}\r\nbody[_v-0d478347]{\r\n    height: auto;\r\n}\r\n\r\n h1[_v-0d478347] {\r\n    font-size: 24px;\r\n    font-weight: normal;\r\n    box-sizing: border-box;\r\n    max-width: 660px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 6px;\r\n    padding-left: 4%;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0d478347&file=list.vue&scoped=true!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./list.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0d478347&file=list.vue&scoped=true!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./list.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports = "\n\n    \t\t<div class=\"lists\" _v-0d478347=\"\">\n            <h1 _v-0d478347=\"\">{{title}}</h1>\n            <section id=\"list\" class=\"grid clearfix\" _v-0d478347=\"\">\n                <a v-for=\"item in lists\" v-link=\"{name:'detail'}\" class=\"item\" _v-0d478347=\"\">\n                    <div class=\"cover\" _v-0d478347=\"\">\n                        <div class=\"wp ratio3_4\" _v-0d478347=\"\">\n                            <img v-lazy=\"item.cover.url\" alt=\"肖申克的救赎\" data-x=\"2000\" data-y=\"2963\" class=\"img-show\" style=\"width: 100%;\" _v-0d478347=\"\">\n                            <span class=\"action-tag\" _v-0d478347=\"\">可播放</span>\n                        </div>\n                    </div>\n\n                    <div class=\"info\" _v-0d478347=\"\">\n                        <h4 _v-0d478347=\"\"></h4>\n                        <h3 _v-0d478347=\"\">{{item.title}}<span class=\"action-tag\" _v-0d478347=\"\">可播放</span></h3>\n                        <p class=\"rank\" _v-0d478347=\"\">\n                                    <span class=\"rating-stars\" data-rating=\"4.8\" _v-0d478347=\"\">\n                                    <span v-for=\"n in Math.round(item.rating.value/2)\" class=\"rating-star rating-star-small-full\" _v-0d478347=\"\"></span>\n                                    <span v-for=\"n in Math.round(5-item.rating.value/2)\" class=\"rating-star rating-star-small-gray\" _v-0d478347=\"\"></span>\n                                    </span> \n                                    <span _v-0d478347=\"\">{{item.rating.value}}</span>\n                        </p>\n                        <p class=\"meta\" _v-0d478347=\"\">{{item.info}}</p>\n                        <cite _v-0d478347=\"\"></cite>\n                    </div>\n                </a>\n            </section>\n    \t\t</div>\n\n";

/***/ })

});