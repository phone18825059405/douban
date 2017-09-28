<template>
	<div class="page" transition="expand">
		<section class="promo_top_banner" style="display: block !important">
			<div class="banner_bg">
				<img src="https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg" class="img">
			</div>
			<div class="banner_wrapper">
				<div class="banner_inner">
					<div class="promo_title">
						<span class="promo_title_text">打开App, 回复广播</span><br>
						<span class="promo_title_text"></span>
					</div>
					<div class="button_wrapper">
						<a href="javascript:">极速下载</a>
						<a href="javascript:" class="promo_button open_app">打开</a>
					</div>
				</div>
			</div>
		</section>
		<div class="card">
			<div id="status-list">
				<div class="pull-refresh-container">
					<div class="status-editor-bar">
						<div class="avatar">
							<img src="https://img1.doubanio.com/icon/user_normal.jpg" alt="未登陆">
						</div>
						<div class="holder">登录发广播</div>
						<div class="icon icon-camera"></div>
						<div class="icon icon-pen"></div>
					</div>
					<div class="pull-refresh-loading"></div>
					<ul class="status-list comment-list">
						<li v-for="item in lists">
							<div>
								<div class="desc">
									<a href="#"><img data-type="avatar" alt="豆瓣" src="https://img5.doubanio.com/icon/up95805238-16.jpg"></a>
									<a href="#">
										<div class="user-info">
											<strong>豆瓣<span>写了日记</span></strong>
											<div class="timestamp">{{item.status.create_time}}</div>
										</div>
									</a>
								</div>
								<a href="#">
									<div v-if="item.status.text.length>0" class="content" v-to-Link>{{item.status.text}}</div>		
								</a>
							</div>
							<template v-if="item.status.text.length==0">
								<div v-bind:class="['feed-card', 'article-card', 'has-subtitle', item.status.card.image.normal !== undefined? 'has-cover' :'']">
									<a href="#">
									<div class="title">{{item.status.card.title}}</div>
									<div v-bind:class="['detail', item.status.card.image.normal !== undefined? 'has-cover' :'']">
										<div class="text">{{item.status.card.subtitle}}</div>
										<div v-if="item.status.card.image.normal !== undefined " class="cover" data-type="cover" v-lazy:background-image=" item.status.card.image.normal.url"></div>
									</div>
									</a>
								</div>
							</template>
							<template v-else>
								<div style="font-size: 32.8px;" :class="['feed-images', item.status.images.length>1?'multi':'single']">
									<template v-if="item.status.images.length<=1">
										<div v-for="image in item.status.images" class="item landscape " data-type="cover" v-bind:style="{backgroundImage: 'url('+ image.normal.url +')'}">
											<img data-type="cover" v-lazy="image.normal.url">
										</div>
									</template>
									<template v-else>
										<div v-for="image in item.status.images" class="item landscape" v-lazy:background-image="image.normal.url"></div>
									</template>
								</div>
							</template>
							
							<div class="info">
								<div class="ic-btn ic-btn-like left "><span class="text">{{item.status.like_count}}</span></div>
								<div class="ic-btn ic-btn-comment left "><span class="text">{{item.status.comments_count}}</span></div>
								<div class="ic-btn ic-btn-retweet left "><span class="text">{{item.status.reshares_count}}</span></div>
								<div class="ic-btn ic-btn-more right"></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
        <nv-footer></nv-footer>
	</div>
</template>

<script>
    export default {
        data(){
            return{
                lists:[],
                reg_http:/https:\/\/[\w.\/]+/,
                reg_text:/#.+#/
            }
        },
        ready(){
            let self = this;
            var aa = require('../json/broadcast');

            self.lists = aa.items;
        },
        directives: {
        // 发送消息后滚动到底部
        'to-link' () {           
            this.vm.$nextTick(() => {
                var text = this.el.innerText;
                var text_http = text.match(this.vm.$data.reg_http)[0];
                var text_title = text.match(this.vm.$data.reg_text)[0];

                text = text.replace(this.vm.$data.reg_http,'<a>'+text_http+'</a>');
                text = text.replace(this.vm.$data.reg_text,'<a>'+text_title+'</a>');
                this.el.innerHTML = text;
            })
                
                //console.log('damndamn')
            }
        }

    }	
</script>

<style>
.promo_top_banner {
    margin-bottom: 0;
    max-width: 100%;
    overflow: hidden;
    text-align: left;
    position: relative;
    display: block !important;
}
.card {
    margin: 0 18px;
    -webkit-text-size-adjust: 100%;
}
.promo_top_banner+.card {
    margin-top: 0px;
}

.promo_top_banner .banner_bg {
    font-size: 0;
    padding-bottom: 21.33333%;
    position: relative;
}
.promo_top_banner .banner_bg .img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.promo_top_banner .banner_wrapper {
    position: absolute;
    left: 18px;
    top: 0;
    bottom: 0;
    right: 10px;
}
.promo_top_banner .banner_wrapper .banner_inner {
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    box-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    -o-align-items: center;
    align-items: center;
    -ms-flex-align: center;
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    -ms-justify-content: space-between;
    -o-justify-content: space-between;
    justify-content: space-between;
    -ms-flex-pack: justify;
    width: 100%;
    height: 100%;
}
.promo_top_banner .banner_wrapper .banner_inner>* {
    vertical-align: middle;
}
.promo_title {
    margin: 40px 0 0 0;
}
.promo_top_banner .promo_title {
    margin: 0;
}
@media (min-width: 414px)
.promo_title, .promo_text {
    font-size: 23px;
}
.promo_title, .promo_text {
    line-height: 1;
    font-weight: 600;
    color: #494949;
}
.promo_top_banner .promo_title_text {
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    color: #2CA532;
}
.promo_top_banner .button_wrapper {
    white-space: nowrap;
    font-size: 0;
    padding-left: 12px;
}
.button_wrapper {
    margin: 0;
}
.status-editor-bar {
    position: relative;
    margin: 0 -18px 5px;
    padding: 10px 18px;
    cursor: pointer;
    overflow: hidden;
}
.pull-refresh-container {
    position: relative;
}
.status-editor-bar .avatar {
    width: 40px;
    height: 40px;
    float: left;
}
.status-editor-bar .avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.status-editor-bar .holder {
    color: #aaa;
    padding-left: 10px;
    font-size: 15px;
    line-height: 40px;
    float: left;
}

.status-editor-bar .icon {
    width: 40px;
    height: 40px;
    padding: 8px;
    margin-right: 10px;
    position: relative;
    float: right;
    box-sizing: border-box;
}
.status-editor-bar .icon.icon-camera {
    margin-right: 0;
}
.status-editor-bar .icon.icon-camera:before {
    background-image: url(https://img3.doubanio.com/f/talion/68ab505eac3e7551815c06a5e03a26a6373bb46c/pics/card/ic_status_camera.svg);
}
.status-editor-bar .icon:before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
.status-editor-bar .icon.icon-pen:before {
    background-image: url(https://img3.doubanio.com/f/talion/d9ba3fa414721588284167944c70664e685993b1/pics/card/ic_status_pen.svg);
}
.status-editor-bar:after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #E8E8E8;
    -webkit-transform: scaleY(0.5);
    content: '';
    position: absolute;
    -webkit-transform-origin: 0 bottom;
}
.pull-refresh-loading {
    background: url(https://img3.doubanio.com/f/talion/bf2ef8c5c1a8c84dddfd1135656857e73582c5d8/pics/card/loading_grey.gif) no-repeat;
    background-position: center;
    background-size: 24px;
    width: 100%;
    height: 48px;
    z-index: -1;
    position: absolute;
    left: 0;
    top: 60px;
    opacity: 0;
    -webkit-transform: "translateZ(0)";
    -moz-transform: "translateZ(0)";
    -ms-transform: "translateZ(0)";
    -o-transform: "translateZ(0)";
    transform: "translateZ(0)";
}
.status-list {
    overflow: hidden;
}
.comment-list li {
    margin-bottom: 30px;
    padding-left: 46px;
}
.status-list li {
    position: relative;
    padding-bottom: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 50px;
}

.comment-list li .desc {
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 0;
    line-height: normal;
    margin: 0 0 11px;
    color: #494949;
    position: relative;
    align-items: center;
    margin-left: -46px;
}
.status-list li .desc {
    margin-left: -50px;
}
.comment-list li .desc img, .comment-list li .desc .avatar {
    border-radius: 50%;
    vertical-align: text-top;
    margin-right: 10px;
    width: 36px;
    height: 36px;
}
.status-list li .desc img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
.comment-list li .desc .user-info {
    -webkit-box-flex: auto;
    -moz-box-flex: auto;
    box-flex: auto;
    -webkit-flex: auto;
    -moz-flex: auto;
    -ms-flex: auto;
    flex: auto;
}
.status-list li .desc .user-info {
    -webkit-box-flex: auto;
    -moz-box-flex: auto;
    box-flex: auto;
    -webkit-flex: auto;
    -moz-flex: auto;
    -ms-flex: auto;
    flex: auto;
}
.comment-list li .desc .user-info strong {
    font-size: 15px;
    display: inline-block;
    vertical-align: text-top;
    margin-right: 6px;
}
.status-list li .desc .user-info strong {
    font-size: 17px;
    line-height: 1;
    color: #494949;
}
.status-list li .desc .user-info strong span {
    color: #aaa;
    font-weight: normal;
}
.comment-list li .desc .user-info .timestamp {
    margin-top: 6px;
    font-size: 12px;
    color: #aaa;
}
.status-list li .desc .user-info .timestamp {
    font-size: 14px;
    margin-top: 6px;
    line-height: 1;
}
.comment-list li .content {
    padding-left: 0;
    margin-top: 10px;
    line-height: 22px;
    color: #494949;
    font-size: 15px;
}
.status-list li .content {
    font-size: 17px;
}
.feed-card {
    padding: 15px;
    margin: 10px 0 20px;
    border-radius: 2px;
    border: solid 1px #d8d8d8;
}
.feed-card .title {
    font-size: 17px;
    font-weight: 500;
    line-height: 1.4;
    color: #494949;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.feed-card.article-card.has-cover .detail {
    height: 48px;
    padding-right: 90px;
    position: relative;
}
.feed-card .text {
    font-size: 12px;
    line-height: 16px;
    color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.feed-card.article-card.has-cover .detail .cover {
    width: 75px;
    height: 48px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
}
.comment-list li .info {
    padding-left: 0;
    margin-top: 13px;
    margin-right: -20px;
    overflow: auto;
}
.ic-btn {
    display: inline-block;
    margin-right: 20px;
    font-size: 14px;
    cursor: pointer;
}
.ic-btn.left {
    float: left;
}
.ic-btn-like:before {
    background-image: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg);
}
.ic-btn:before {
    content: '';
    width: 20px;
    height: 20px;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
    margin-bottom: -2px;
}
.ic-btn .text {
    color: #ccc;
    margin-left: 3px;
    position: relative;
    left: 0;
    top: -3px;
}
.ic-btn-comment:before {
    background-image: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg);
}
.ic-btn-retweet:before {
    background-image: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg);
}
.ic-btn-more:before {
    background-image: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg);
}
.status-list li:after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #E8E8E8;
    -webkit-transform: scaleY(0.5);
    content: '';
    position: absolute;
    -webkit-transform-origin: 0 bottom;
}
.comment-list li:before, .comment-list li:after {
    margin-left: 46px;
}
.feed-images {
    margin-top: 15px;
}
.feed-images .item {
    position: relative;
    cursor: pointer;
    overflow: hidden;
}
.feed-images.single .item {
    display: inline-block;
    max-height: 300px;
    overflow: hidden;
}
.feed-images.single .item img {
    display: block;
}
.feed-images.single .item.landscape img {
    max-width: 100%;
    height: auto;
}
.feed-images.multi {
    overflow: hidden;
}
.feed-images.multi .item {
    background: center/cover no-repeat;
    width: 3.2em;
    height: 3.2em;
    margin-right: 0.1em;
    margin-bottom: 0.1em;
    float: left;
}
</style>