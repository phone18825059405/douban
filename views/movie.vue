<template>
	<div class="page" transition="expand">
		<div class="card">
			<section v-for="item in datalist" id="{{item.subject_collection.id}}">
				<header>
					<h2>{{item.subject_collection.name}}</h2>
					<a href="{{item.subject_collection.url}}">更多</a>
				</header>
				<div class="section-content">
					<ul class="row items">
						<li v-for="list in item.subject_collection_items" class="item">
							<a href="{{list.url}}">
								<div class="item-poster" v-lazy:background-image="list.cover.url">
								</div>
								<span class="item-title">{{list.title}}</span>
								<div class="item-rating">
									<div class="rank">
										<span class="rating-stars" v-if="list.rating!==null">
                                            <span v-for="n in list.rating.full" class="rating-star rating-star-small-full"></span>
                                            <span v-for="n in list.rating.gray" class="rating-star rating-star-small-gray"></span>
                                        </span>
                                        <span>{{list.rating == null ? '暂无评分' : list.rating.value}}</span>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</section>

            <section class="interests">
                <header>
                <h2>发现好电影</h2>
                </header>
                <div class="section-content">
                    <ul>
                        <li v-for="item in label[0]" v-bind:style="{borderColor: item.color}">
                            <a v-bind:href="item.href" v-bind:style="{color: item.color}">{{item.text}}</a>
                        </li>
                        <li class="line"></li>
                        <li v-for="item in label[1]" v-bind:style="{borderColor: item.color}">
                            <a v-bind:href="item.href" v-bind:style="{color: item.color}">{{item.text}}</a>
                        </li>                     
                    </ul>
                </div>
            </section>

            <section class="types">
                <header>
                    <h2>分类浏览</h2>
                </header>
                <div class="section-content">
                    <a name="cate"></a>
                    <ul class="type-list">
                        <li v-for="item in type"><a v-link="{ name:'list',params:{title:item.text,type:'movie',id:item.lab || ''} }">{{item.text}}<span></span></a></li>
                        <li></li>
                    </ul>
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
                datalist:[],
                label:[],
                type:[]
            }
        },
        ready(){
            let self = this;
            var aa = require('../json/movie');

            self.datalist = aa.datalist;
            self.label = aa.label;
            self.type = aa.type;
          
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
.card {
    margin: 0;
}
section {
    margin-bottom: 30px;
}
section {
    margin: 0;
    overflow: hidden;
    background-color: #fff;
}
section:first-child {
    padding-top: 10px;
}
section header {
    padding: 0 1.12rem;
}
section h2 {
    display: inline-block;
    min-width: 4em;
    margin-bottom: 0;
    font-size: 18px;
    color: #111;
    padding-left: 0;
    padding-bottom: 0;
    font-size: 1.06rem;
}
section header a {
    float: right;
    font-size: .9rem;
    line-height: 1.5rem;
}

.clearfix:after, .card section>header:after {
    content: '';
    clear: both;
    display: block;
}
section .section-content {
    margin-bottom: -1.12rem;
}
.items {
    font-size: 0;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
.row {
    border-bottom: 1px solid #F2F2F2;
    padding: 15px 0 43px 0;
}
.items>* {
    font-size: .94rem;
    white-space: normal;
}
.item {
    display: inline-block;
    vertical-align: top;
    width: 100px;
    text-align: center;
}
.item {
    margin-left: 0.48rem;
}
.item:first-child {
    margin-left: 1.12rem;
}
.item a {
    color: #111;
}
a {
    color: #42bd56;
    text-decoration: none;
}
.item-poster {
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
}
.item-poster:before {
    content: "";
    float: left;
    margin-top: 142.85714%;
}

.item-title {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: .6rem;
    line-height: .94rem;
}
.item__movie .item-title {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}

.item-rating {
    color: #aaa;
    line-height: .94rem;
    margin-top: .3rem;
    font-size: .72rem;
}
.rating-stars {
    display: inline-block;
    vertical-align: middle;
}
.rating-star-small-full, .rating-star-small-half, .rating-star-small-gray {
    width: 10px;
    height: 10px;
    background-size: 10px 10px;
}
.rating-star-small-gray {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=");
}
.rating-star-small-full {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==");
}
.rating-stars .rating-star {
    display: inline-block;
    margin-right: 1px;
    background-color: transparent;
    background-repeat: no-repeat;
}

.interests ul {
    white-space: nowrap;
    overflow-x: auto;
    padding: 15px 15px 43px 15px;
    font-size: 0;
    margin-left: -5px;
    -webkit-overflow-scrolling: touch;
}
.interests li {
    margin: 0 0 8px 8px;
    font-size: .94rem;
    display: inline-block;
    border-radius: .25rem;
    border: solid 1px;
    vertical-align: middle;
}
.interests a {
    height: 50px;
    line-height: 50px;
    padding: 0 1.55rem;
    letter-spacing: .1em;
    overflow: auto;
    display: block;
    text-align: center;
}
.interests li.line {
    width: 100%;
    display: block;
    height: 1px;
    border: 0;
    margin: 0;
}
.types {
    margin-right: -25px;
}
.type-list {
    padding: 1.12rem 0 1.88rem;
    color: #eee;
    font-size: .9rem;
    overflow: hidden;
}
.types .section-content {
    margin-bottom: 0;
}
.types .section-content {
    margin-left: .94rem;
}
.type-list li {
    width: 41.5%;
    border-top: solid 1px #eee;
    border-right: solid 1px #eee;
    float: left;
    padding-right: 1.12rem;
    height: 2.64rem;
}
.type-list li:nth-child(even) {
    border-right: none;
    padding-left: 1.12rem;
}
.type-list li:last-child, .type-list li:nth-last-child(2) {
    border-bottom: solid 1px #eee;
}
.type-list a {
    float: left;
    display: inline-block;
    width: 100%;
    line-height: 2.64rem;
}
.type-list span {
    color: #ccc;
    float: right;
    font-weight: bold;
    display: inline-block;
    border-right: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    width: .5rem;
    height: .5rem;
    transform: rotate(-45deg);
    margin-top: 1rem;
}

</style>