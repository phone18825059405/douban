<template>
	<div class="page" transition="expand">
        
            <div class="album">              
                <a v-link="{name:'viewList'}">肖申克的救赎</a>
                <span class="navigation">
                    <span id="cur-index">{{indexOfDL}}</span> / {{datalist.length}}
                </span>
            </div>

            <div class="photo">
                <div class="pswp pswp--open pswp--touch pswp--css_animation pswp--svg pswp--animated-in pswp--visible" tabindex="-1" role="dialog" aria-hidden="false" style="opacity: 1;">
                    <div class="pswp__bg" style="opacity: 0;">
                    </div>
                    <div class="pswp__scroll-wrap">
                        <div class="pswp__container">
                            <div  v-for="item in swipeList" class="pswp__item"">
                                <div class="pswp__zoom-wrap">
                                    <img class="pswp__img" :src="item.imgurl" style="width: 100%; height: auto;display: block">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tool">
                <div class="fav-btn-clear fav-event" data-fav="false" data-id="490578450">
                    <span class="fav-icon"></span><span class="fav-num">3</span><img src="https://img3.doubanio.com/f/talion/22c02fa5adbc12a91da713d4be30c9462871c13d/pics/card/ic_liked@2x.png" style="display:none">
                </div>
                <span class="comment" data-id="490578450" id="cm-btn">9</span><span class="more"></span>
                <div class="more-menu-box" data-can-report="true" data-can-delete-pic="false" data-tid="490578450" data-report-url="https://m.douban.com/photos/photo/490578450/" data-islogin="false">
                    <ul data-reactroot="" class="more-menu">
                        <li class="more-menu-item">举报</li>
                    </ul>
                </div>

        </div>
	<div>
</template>

<script>
require('../public/stylesheets/_base.css')
import Hammer from '../public/javascripts/hammer';
    export default {
        data(){
            return{
                datalist:[],
                swipeDistance:0,
                swipeIndex:0,
                swipeList:[],
                indexOfDL:0,
            }
        },
        created(){         
          var router = this.$route.params;
          this.indexOfDL = router.id;
          console.log(this.$route.params)

          this.datalist = require('../json/photos')['type'+router.type];
          this.swipeList = this.datalist.slice(router.id*1,3+router.id*1);
          console.log('第'+router.id+'张')
        },
        ready(){
            this.swipeDistance = window.innerWidth;
            
            console.log('swipeDistance: '+this.swipeDistance)

            var that = this;
            var imgViewDom = document.querySelector('.pswp__scroll-wrap');
            var imgView = new Hammer(imgViewDom)
            imgView.on('swipe',function(event){
                if(event.deltaX<0){
                    //next
                    that.swipeIndex = that.swipeIndex>=that.datalist.length?that.datalist.length:++that.swipeIndex&&(++that.indexOfDL); 

                    //change img's array
                    if(that.swipeIndex>2 && that.swipeIndex==that.swipeList.length){
                        that.swipeList.push(that.datalist[that.swipeIndex+1])
                    }


                }else{
                    that.swipeIndex = that.swipeIndex<=0?0:--that.swipeIndex;
                }
                console.log(that.swipeIndex)
                imgViewDom.style.webkitTransform = 'translate3d('+ -(that.swipeIndex*that.swipeDistance)+'px,0,0)';
            })
        },
        methods:{
            loadData:function(){
                this.$http.jsonp('https://m.douban.com/j/fetch_photo/?start=0&id=25996309&type=S&mid=1292052',{'emulateJSON':true},function(response){
                    console.log(response)
                })
            }
        }

    }
</script>

<style scoped>

@import url(https://img3.doubanio.com/f/talion/001deacf8dd4a2cc3b9243c0b5d8964243aa284d/css/card/movie_gallery.css);
.pswp__item{
    vertical-align: middle;
    width: 100%;
}
.pswp__container{
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
}
.pswp__scroll-wrap{
    transition: transform 300ms ease;
}
.album{font-size:15px;line-height:1;padding:15px 18px 11px;margin-top:44px;border-bottom:1px solid #f3f3f3}.album a{display:inline-block;max-width:70%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.album .navigation{color:#aaaaaa;float:right}
.tool{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.album{font-size:15px;line-height:1;padding:15px 18px 11px;margin-top:44px;border-bottom:1px solid #f3f3f3}.album a{display:inline-block;max-width:70%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.album .navigation{color:#aaaaaa;float:right}.photo{-webkit-tap-highlight-color:transparent;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;position:relative}.pswp--open{z-index:0}.pswp__img{background-color:#ffffff}.photo-desc{position:absolute;width:100%;height:42px;bottom:44px;border-top:1px solid #f3f3f3;font-size:12px;color:#494949;padding:15px 18px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:height 0.3s cubic-bezier(0.07, 0.9, 0.29, 1);transition:height 0.3s cubic-bezier(0.07, 0.9, 0.29, 1);-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);background:rgba(255,255,255,0.91)}.desc-close .desc-short{display:block}.desc-close .desc-long{display:none}.desc-open .desc-short{display:none}.desc-open .desc-long{display:block}.desc-short{height:12px;line-height:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.desc-long{line-height:1.5;word-wrap:break-word}.desc-hide{visibility:hidden}.tool{position:relative;color:#cccccc;line-height:1;font-size:15px;border-top:1px solid #f3f3f3;background-color:#fff;-webkit-tap-highlight-color:transparent}.tool .fav-btn-clear{display:inline-block;padding:14px 8px 14px 18px}.tool .fav-btn-clear .fav-icon{display:inline-block;width:14px;height:13px;vertical-align:bottom;background-repeat:no-repeat;background-position:center;background-size:14px 13px;-webkit-transition:all 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28);transition:all 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28);-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.tool .fav-btn-clear .fav-num{padding-left:5px}.tool .fav-btn-clear[data-fav='false'] .fav-icon{background-image:url(https://img3.doubanio.com/f/talion/2e210d466e47d7fe89559a6db5cc5265bb441f70/pics/card/like.png)}.tool .fav-btn-clear[data-fav='true'] .fav-icon{background-image:url(https://img3.doubanio.com/f/talion/2e210d466e47d7fe89559a6db5cc5265bb441f70/pics/card/like.png)}.tool .comment{padding:14px 24px 12px 30px;background-image:url(https://img3.doubanio.com/f/talion/2e210d466e47d7fe89559a6db5cc5265bb441f70/pics/card/like@2x.png);background-repeat:no-repeat;background-position:5px 12px;background-size:20px 20px}.tool .more{display:block;float:right;height:43px;width:56px;background-image:url(https://img3.doubanio.com/f/talion/f62af019f70451ad05c832ba7c81e91a91385ce6/pics/card/more-action@2x.png);background-repeat:no-repeat;background-position:20px 12px;background-size:20px 20px}.tool .more-menu-box{visibility:hidden;position:absolute;right:18px;top:2px}.tool .more-menu-box-show{visibility:visible}
</style>
