<template>

    		<div class="lists">
            <h1>{{title}}</h1>
            <section id="list" class="grid clearfix">
                <a v-for="item in lists" v-link="{name:'detail'}" class="item">
                    <div class="cover">
                        <div class="wp ratio3_4">
                            <img v-lazy="item.cover.url" alt="肖申克的救赎" data-x="2000" data-y="2963" class="img-show" style="width: 100%;">
                            <span class="action-tag">可播放</span>
                        </div>
                    </div>

                    <div class="info">
                        <h4></h4>
                        <h3>{{item.title}}<span class="action-tag">可播放</span></h3>
                        <p class="rank">
                                    <span class="rating-stars" data-rating="4.8">
                                    <span v-for="n in Math.round(item.rating.value/2)" class="rating-star rating-star-small-full"></span>
                                    <span v-for="n in Math.round(5-item.rating.value/2)" class="rating-star rating-star-small-gray"></span>
                                    </span> 
                                    <span>{{item.rating.value}}</span>
                        </p>
                        <p class="meta">{{item.info}}</p>
                        <cite></cite>
                    </div>
                </a>
            </section>
    		</div>

</template>

<script>
    export default {
        data(){
            return{
                lists:[],
                currentPage:0,
                title:'',
                router:null,
                loading:false,
            }
        },
        methods:{
            getList:function(){
                var that = this;

                //if(that.loading) return;

                that.loading = true;
                
                this.$http.jsonp('https://m.douban.com/rexxar/api/v2/subject_collection/filter_'+this.router.type+'_'+this.router.id+'_hot/items?os=ios&for_mobile=1&start='+this.currentPage+'&count=18&loc_id=0&_=1504162678222').then(function(response){
                    response.data.subject_collection_items.forEach((item) => {
                        that.lists.push(item)
                    })

                    that.currentPage += response.data.count;
                    that.loading = false;
               })
            }
        },
        created(){   
            this.router = this.$route.params;
            this.title = this.router.title;
            this.getList();      
        },
        ready(){
            var that = this;
            setTimeout(function(context){
                return (function(context){
                    //console.log(context)
                    var iH = window.innerHeight;
                    var scrollEle = document.querySelector('#app');

                    var oT = document.querySelector('#list').offsetTop;
                    //console.log(scrollEle+'|||'+oT)

                    window.addEventListener('scroll',(event) => {
                        if(iH+document.body.scrollTop >= scrollEle.offsetHeight-oT-100 ){

                            if(context.loading) return;
                            context.getList();
                            //oH = document.body.offsetHeight;
                        }
                    })
                })(that)
            },15)
           
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
.lists{
    padding-top: 47px;
}
#list .item {
    text-decoration: none;
    color: #9b9b9b;
}
.grid .item {
    float: left;
    box-sizing: border-box;
    width: 33.33333%;
    padding-left: 4%;
    padding-right: 4%;
    margin-bottom: 20px;
    overflow: hidden;
}
.grid .item .cover {
    min-height: 87px;
    overflow: hidden;
    position: relative;
}



.grid .ratio1_1:before, .grid .ratio3_4:before {
    content: "";
    display: block;
    padding-top: 100%;
}
.grid .ratio3_4:before {
    padding-top: 143%;
}
.grid .ratio1_1, .grid .ratio3_4 {
    position: relative;
}
.grid .item img {
    display: block;
    position: absolute;
    left: -100%;
    right: -100%;
    top: -100%;
    bottom: -100%;
    margin: auto;
    min-height: 100%;
    min-width: 100%;
}
#list .item img {
    opacity: 0;
    -webkit-transition: opacity 0.3s ease-out;
    transition: opacity 0.3s ease-out;
}
#list .item .img-show {
    opacity: 1;
}
.grid .item .info {
    height: 45px;
    overflow: hidden;
}.grid .item h4, .grid .item cite, .grid .item .meta {
    display: none;
}#list h3, #list h4, #list p {
    margin: 0;
}.grid .item h3 {
    font-size: 13px;
    font-weight: normal;
    padding: 5px 0 0;
    color: #494949;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}#list h3, #list h4, #list p {
    margin: 0;
}.action-tag {
    font-size: 9px;
    color: #fff;
    border-radius: 3px;
    border: 1px solid #eee;
    background: #f5a623;
    padding: 1px 5px;
}.grid .item h3 .action-tag {
    display: none;
}.grid .item .rank {
    height: 16px;
    font-size: 12px;
    padding-top: 3px;
    text-align: center;
}#list h3, #list h4, #list p {
    margin: 0;
}.grid .item .rank {
    height: 16px;
    font-size: 12px;
    padding-top: 3px;
    text-align: center;
}.rating-stars {
    display: inline-block;
    vertical-align: middle;
}.rating-star-small-full, .rating-star-small-half, .rating-star-small-gray {
    width: 10px;
    height: 10px;
    background-size: 10px 10px;
}.rating-star-small-full {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==")
}.rating-stars .rating-star {
    display: inline-block;
    margin-right: 1px;
    background-color: transparent;
    background-repeat: no-repeat;
}.grid .item .rank {
    height: 16px;
    font-size: 12px;
    padding-top: 3px;
    text-align: center;
}#list .item cite {
    font-style: normal;
}
.rating-star-small-gray {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=");
}
body .download-app{
    display: none !important;
}
body{
    height: auto;
}

 h1 {
    font-size: 24px;
    font-weight: normal;
    box-sizing: border-box;
    max-width: 660px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 6px;
    padding-left: 4%;
}
</style>