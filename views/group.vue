<template>
    <div class="group" transition="expand">
        <ul>
            <li class="group_item" v-for="item in info">
                <h3>{{item.title}}</h3>
                <ul class="group_list">
                    <li class="ui-bottom-line" v-for="list in item.arr">
                        <a>
                            <div class="ui-flex-align">
                                <div class="ui-flex-left group_list_l">
                                    <img :src="list.url"/>
                                </div>
                                <div class="ui-flex-1 group_list_m">
                                    {{list.name}}
                                </div>
                                <div class="group_list_r">{{list.num}}</div>
                            </div>
                            <p>{{list.des}}</p>
                        </a>
                    </li>
                </ul>
                <div class="group_more ui-bottom-line">更多相关小组</div>
            </li>
        </ul>
        <nv-footer></nv-footer>
    </div>
</template>

<script>
    export default {
        data(){
        return {
            info:{}
        }
    },
    ready(){
        let self = this;
        self.info = require('../json/group.js').info
    }
    }
</script>

<style scoped>
.group{
    padding-top: 47px;
    max-width: 650px;
    background: #fff;
    margin: 0 15px;
    overflow-x: hidden;
}
 .group_item {
  padding: 0.2rem 0.3rem;
}
.group_item h3 {
  padding: 4px 0;
  font-size: 18px;
  color: #111;
}
.ui-flex-align {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
}
.group_item .group_list li a {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0.1rem 0 0.3rem;
}
.group_item .group_list li a p {
  font-size: 14px;
  color: #aaa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 8px 0 0;
}
.group_item .group_list li a div.group_list_l {
  width: 40px;
  height: 40px;
}
.group_list_l img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    display: block;
    border: 0;
    height: 100%;
}
.group_item .group_list li a div.group_list_m {
  padding-left: 10px;
  padding-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  color: #111;
}
.group_item .group_list li a div.group_list_r {
  color: #ccc;
  font-size: 14px;
}
.ui-flex-1 {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.group_more {
  text-align: center;
  padding: 0.25rem 0;
  color: #42bd56;
  font-size: 15px;
  margin-bottom: 30px;
  padding: 15px 0;
}
.ui-bottom-line {
    position: relative;
}
.ui-bottom-line:before {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}
</style>



























