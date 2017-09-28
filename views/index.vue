<template>
	<div class="page" transition="expand">
		<div class="card">
			<ul class="quick-nav">
				<li>
				<a href="/movie/nowintheater?loc_id=108288">影院热映</a>
				</li>
				<li>
				<a href="/music/newwestern/">欧美新碟榜</a>
				</li>
				<li>
				<a id="hot-topics" href="https://m.douban.com/hashtag/红楼梦">我眼中的红楼梦</a>
				</li>
				<li>
				<a href="https://www.douban.com/doubanapp/app?channel=card_home&amp;direct_dl=1">使用豆瓣App</a>
				</li>
			</ul>
			<section id="recommend-feed">
                <div v-if="!pageOnLoad" data-reactroot="" class="feed-placeholder" ></div>
				<div>
					<div v-for="list in lists" class="feed-section">
						<a v-for="item in list.recommend_feeds" class="feed-item" v-link="{ path:'/article' }" v-bind:href="item.uri">
							<template v-if="item.target.more_pic_urls.length == 0">
								<div class="feed-content">
									<div v-if="item.target.cover_url" class="cover" v-bind:style="{position: 'relative', background: 'center center / cover no-repeat rgb(250, 250, 250)'}" v-lazy:background-image="item.target.cover_url">
										<div style="padding-top: 100%;"></div>
									</div>
									<h3>{{item.title}}</h3>
									<p>{{item.target.desc}}</p>
								</div>
							</template>
							<template v-else>
								<div class="feed-content">
									<div class="photos">
										<div class="main" v-bind:style="{position: relative, background: 'url('+ item.target.cover_url +') center center / cover no-repeat rgb(250, 250, 250)'}"></div>
										<div class="aside">
											<div v-for="(index, pic) in item.target.more_pic_urls" class="aside-pic">
												<div v-bind:style="{position: relative,background:'center center / cover no-repeat rgb(250, 250, 250)'}" v-lazy:background-image="pic">
													<div style="padding-top: 100%;"></div>
												</div>
												<div v-if="index == 1" class="more-pic">
													<span class="count"><!-- react-text: 88 -->{{item.target.photos_count}}<!-- /react-text --><!-- react-text: 89 -->+<!-- /react-text --></span>
												</div>
											</div>
										</div>
									</div>
									<h3>{{item.title}}</h3>
								</div>
							</template>
							<div class="author">by&nbsp;<span class="name">{{item.target.author.name}}</span></div>
							<span class="feed-label">{{item.source_cn}}</span>
						</a>
					</div>
				</div>
			</section>
		</div>
        <nv-footer></nv-footer>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				lists:[],
                pageOnLoad:false,
			}
		},
		created(){
            this.$http.jsonp('https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1').then((response) => {
                
                /*response.data.recommend_feeds.forEach((item) => {
                    this.lists.push(item)
                })*/

                console.log(this.lists)   
            })
            
            let self = this;
            var aa = require('../json/index');
            self.lists = aa;
            console.log(aa);

            this.pageOnLoad = true;
        }
	}
</script>

<style scoped>

.page {
    padding-top: 47px;
    max-width: 650px;
    background: #fff;
    margin: 0 auto;
    overflow-x: hidden;
}

.card {
    margin: 0 18px;
    -webkit-text-size-adjust: 100%;
}
.quick-nav {
    overflow: hidden;
    margin: 20px 0 0 0;
    padding-top: 6px;
}
.quick-nav>li {
    float: left;
    width: 50%;
    padding: 3px;
    box-sizing: border-box;
    font-size: 15px;
}
.quick-nav>li>a {
    background-color: #f6f6f6;
    color: #494949;
    display: block;
    text-align: center;
    line-height: 20px;
    padding: 12px 0;
    border-radius: 2px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}

#recommend-feed {
    margin-right: -18px;
    margin-left: -18px;
    margin-top: 2px;
    min-height: 480px;
    color: #494949;
    -webkit-text-size-adjust: 100%;
}
section {
    margin: 0;
}

#recommend-feed .feed-item {
    display: block;
    padding: 25px 18px;
    position: relative;
    color: #494949;
}
#recommend-feed .feed-content {
    overflow: hidden;
    margin-bottom: 10px;
}
#recommend-feed .feed-content .cover {
    width: 25.6%;
    margin-left: 25px;
    float: right;
}

section p, section h3 {
    line-height: 22px;
    word-wrap: break-word;
    margin: 0;
    padding: 0;
}
section h3 {
    font-size: 19px;
    color: #111;
}
#recommend-feed .feed-content h3 {
    text-align: justify;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.41;
    color: #494949;
    margin-bottom: 6px;
}

section p {
    font-size: 15px;
    color: #494949;
}
#recommend-feed .feed-content p {
    overflow: hidden;
    text-align: justify;
    color: #aaa;
    font-size: 12px;
    line-height: 1.5;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

#recommend-feed .feed-item .author {
    font-size: 12px;
    color: #ccc;
}
#recommend-feed .feed-item .feed-label {
    position: absolute;
    bottom: 25px;
    right: 18px;
    font-size: 12px;
    color: #ccc;
}
#recommend-feed .feed-content .photos {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 10px;
}
#recommend-feed .feed-content .photos .main {
    -webkit-box-flex: 3.2;
    -webkit-flex: 3.2;
    -ms-flex: 3.2;
    flex: 3.2;
    margin-right: 4px;
}
#recommend-feed .feed-content .photos .aside {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
#recommend-feed .feed-content .photos .aside .aside-pic {
    position: relative;
}
#recommend-feed .feed-content .photos .more-pic {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.4);
    color: #fff;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
#recommend-feed .feed-content .photos .more-pic .count {
    width: 100%;
}
#recommend-feed .feed-content .photos .aside .aside-pic ~ .aside-pic {
    margin-top: 4px;
}
.feed-placeholder {
    min-height: 480px;
    margin-right: 18px;
    background: url(https://img3.doubanio.com/f/talion/326df52f00a7dd43b9d23e2bbc7b7d3de5b9fd9e/pics/card/loading_green.gif) 50% 100px no-repeat;
    background-size: 40px 40px;
}
</style>