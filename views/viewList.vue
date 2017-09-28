<template>
	<div class="page" transition="expand">
        <div class="card">

            <a class="subject" href="/movie/subject/1292052/">
                <img class="cover" src="https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p480747492.webp" alt="肖申克的救赎">
                <span class="title">肖申克的救赎</span>
                  <span class="rating">9.6分</span>
            </a>
            <template v-if="!type">
                <section class="title-wrapper">
                    <h1 class="title">肖申克的救赎 剧照</h1>
                </section>
                <section class="type-switch" ref="type">
                    <span id="still"     @click="loadData" data-type="0" v-bind:class="['gallery-type',curClassify==0?'on':'']">剧照</span>
                    <span id="poster"    @click="loadData" data-type="1" v-bind:class="['gallery-type',curClassify==1?'on':'']">海报</span>
                    <span id="wallpaper" @click="loadData" data-type="2" v-bind:class="['gallery-type',curClassify==2?'on':'']">壁纸</span>
                    <span class="nums">534张图片</span>
                </section>
                <section>
                    <ul class="photowall-stack" id="photolist" data-id="25996309" data-movie-id="1292052" data-type="S" data-photonum="534" data-start="45">              
                        <li v-for="(index,item) in datalist">
                            <a v-link="{name:'view',params:{type:curClassify,id:index}}" style="background-image: url(https://img1.doubanio.com/view/photo/lthumb/public/p2196814199.jpg)" v-lazy:background-image="item.imgurl">
                                <span class="reply-num">{{item.n_comments}}</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </template>
            <template v-else>
                <p class="trailer-title">肖申克的救赎预告片</p>
                <video style="width:100%" controls="true" class="video"  poster="https://img3.doubanio.com/img/trailer/medium/1433841022.jpg?">
                    <source src="http://vt3.doubanio.com/201709171414/356b47ee55f2c129c3998ac40c8d2cf3/view/movie/M/301080756.mp4" type="video/mp4;codecs=&quot;avc1.42E01E, mp4a.40.2&quot;">
                </video>
                <section class="trailers">
                    <h2>
                        预告片 (1)
                    </h2>
                    <div class="bd photo-list">
                        <ul>                               
                                <li>
                                    <a href="/movie/trailer/108756" class="video" style="background-image:url(https://img3.doubanio.com/img/trailer/medium/1433841022.jpg?);" title="肖申克的救赎">
                                    </a>
                                    <a class="title" href="/movie/trailer/108756" title="肖申克的救赎 ">
                                        肖申克的救赎 预告片
                                    </a>
                                    <a class="runtime" href="/movie/trailer/108756">02:13</a>
                                </li>
                        </ul>
                    </div>
                </section>
            </template>
            <nv-footer></nv-footer>
        </div>
	<div>
</template>

<script>
require('../public/stylesheets/_base.css')
    export default {
        data(){
            return{
                datalist:[],
                curClassify:0,
                type:0,
            }
        },
        created(){
          this.datalist = require('../json/photos')['type0'];
          this.type = this.$route.params.type=="img"?0:1;
          console.log(this.type)
        },
        ready(){

        },
        methods:{
            loadData:function(event){
                var index = event.currentTarget.getAttribute('data-type');
                console.log(index)
                this.curClassify = index;
                this.datalist = require('../json/photos')['type'+index]
            }
        }

    }
</script>

<style scoped>

@import url(https://img3.doubanio.com/f/talion/001deacf8dd4a2cc3b9243c0b5d8964243aa284d/css/card/movie_gallery.css);


</style>
