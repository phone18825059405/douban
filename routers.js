
export default function(router){
    router.map({
        '/':{				//首页
            //name:'home',
            component: function(resolve){
                require(['./views/index.vue'],resolve)
            },
        },
        '/movie':{              //电影
            //name:'movie',
            component: function(resolve){
                require(['./views/movie.vue'],resolve)
            }
            /*subRoutes: {
              '/classic': {
                name:'list',
                component:require('./views/list.vue')
              },

              // 其他子路由
            }*/
        },
        '/book':{				//书籍
            name:'book',
            component: function(resolve){
                require(['./views/book.vue'],resolve)
            }
        },
        '/network':{				//广播
            //name:'network',
            component: function(resolve){
                require(['./views/broadcast.vue'],resolve)
            }
        },
        '/group':{				//小组
            //name:'group',
            component: function(resolve){
                require(['./views/group.vue'],resolve)
            }
        },
        '/search':{				//搜索
            //name:'search',
            component: function(resolve){
                require(['./views/search.vue'],resolve)
            }
            /*component: function(resolve){
                require(['./views/index.vue'],resolve);
            }*/
        },
        '/article':{             //搜索
            name:'article',
             component: function(resolve){
                require(['./views/article.vue'],resolve)
            }
        },
        '/list/:title/:type/:id':{             //搜索
            name:'list',
             component: function(resolve){
                require(['./views/list.vue'],resolve)
            }
        },
        '/detail':{
            name:'detail',
             component: function(resolve){
                require(['./views/detail.vue'],resolve)
            }
        },
        '/viewList/:type':{
            name:'viewList',
             component: function(resolve){
                require(['./views/viewList.vue'],resolve)
            }
        },
        '/view/:type/:id':{
            name:'view',
             component: function(resolve){
                require(['./views/view.vue'],resolve)
            }
        }
    })
}