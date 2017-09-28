<template>
<div id="TalionNav" transition="expand">
	<header class="TalionNav is-active">
	<div class="TalionNav-secondary">
		<a href="javascript:" class="close-nav" @click="close">关闭</a>
		<form action="/search" method="GET">
			<div>
				<input name="query" type="search">
			</div>
		</form>
		<ul>
			<li>
			<div>
				<a href="javascript:" target="_blank"><strong style="color: rgb(35, 132, 232);">电影</strong><span>影院热映</span></a><a href="javascript:" target=""><strong style="color: rgb(230, 70, 126);">同城</strong><span>周末活动</span></a><a href="javascript:" target=""><strong style="color: rgb(159, 120, 96);">阅读</strong><span>电子书</span></a><a href="javascript:" target=""><strong style="color: rgb(225, 100, 77);">东西</strong><span>心爱之物</span></a>
			</div>
			</li>
			<li>
			<div>
				<a href="javascript:" target="_blank"><strong style="color: rgb(122, 106, 219);">电视</strong><span>正在热播</span></a><a href="javascript:" target="_blank"><strong style="color: rgb(42, 184, 204);">小组</strong><span>志趣相投</span></a><a href="javascript:" target="_blank"><strong style="color: rgb(87, 116, 197);">游戏</strong><span>虚拟世界</span></a><a href="javascript:" target=""><strong style="color: rgb(64, 207, 169);">FM</strong><span>红心歌单</span></a>
			</div>
			</li>
			<li>
			<div>
				<a href="javascript:" target="_blank"><strong style="color: rgb(159, 120, 96);">图书</strong><span>畅销排行</span></a><a href="javascript:" target="_blank"><strong style="color: rgb(244, 143, 46);">音乐</strong><span>新碟榜</span></a><a href="javascript:" target="_blank"><strong style="color: rgb(89, 108, 221);">应用</strong><span>玩手机</span></a><a href="javascript:" target=""><strong style="color: rgb(66, 189, 86);">市集</strong><span>购买原创</span></a>
			</div>
			</li>
		</ul>
		<div class="navBottom">
			<div class="nav-item">
				<a class="toReg" href="javascript:">注册帐号</a><a class="toLogin" href="javascript:">登录豆瓣</a>
			</div>
			<div class="nav-item">
				<a class="toPC" href="javascript:">使用桌面版</a><a class="toApp">使用豆瓣App</a>
			</div>
		</div>
	</div>
	</header>
</div>
</template>

<script>
	export default{
		methods:{
			close(){
				window.history.back();
			},
		}
	}
</script>

<style scoped>
#TalionNav{
    z-index: 9999;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
}
.TalionNav.is-active {
    height: 100%;
    position: absolute;
    bottom: 0;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}
.TalionNav-secondary {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
    background: #fff;
}
.TalionNav-secondary a.close-nav {
    position: absolute;
    top: 20px;
    left: 18px;
    color: #42bd56;
    font-size: 16px;
}
.TalionNav a {
    text-decoration: none;
}

.TalionNav-secondary form {
    border-bottom: 1px solid #f3f3f3;
    padding: 15px 18px 15px 60px;
}

.TalionNav-secondary input[type=search] {
    box-sizing: border-box;
    -webkit-appearance: none;
    border: 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50% #f3f3f3;
    background-size: 17.33333px;
    border-radius: 3px;
    width: 100%;
    height: 31px;
    font-size: 14px;
}

.TalionNav-secondary input[type=search]:focus {
    background-image: none;
}
.TalionNav-secondary ul {
    padding-top: 25px;
    overflow: hidden;
    display: -webkit-box;
    display: flex;
    justify-content: space-around;
}
.TalionNav li, .TalionNav ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.TalionNav-secondary li {
    width: 33.33%;
}
.TalionNav-secondary li div {
    float: left;
    position: relative;
    left: 50%;
    top: 0;
}
.TalionNav-secondary li a {
    display: block;
    text-align: center;
    margin-bottom: 25px;
    position: relative;
    left: -50%;
    top: 0;
}
.TalionNav-secondary li strong {
    display: block;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
}
.TalionNav-secondary li span {
    display: block;
    color: #999;
    height: 17px;
    font-size: 12px;
    letter-spacing: 1px;
}
.TalionNav-secondary .navBottom {
    width: 100%;
    border-bottom: 1px solid #f3f3f3;
}
.TalionNav-secondary .navBottom .nav-item {
    border-top: 1px solid #f3f3f3;
    padding: 13px 0;
}
.TalionNav-secondary .navBottom a {
    margin: 0 auto;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    color: #42bd56;
}
.TalionNav-secondary .navBottom .nav-item a {
    width: 50%;
    display: inline-block;
    box-sizing: border-box;
}
.TalionNav-secondary .navBottom .nav-item a:first-child {
    border-right: 1px solid #e5e5e5;
}
</style>