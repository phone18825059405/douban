var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    //插件项
    //plugins: [commonsPlugin],
    //页面入口文件配置
    //debug:true,
    entry: {
        index: './main.js',
    },
    //入口文件输出配置
    output: {
        path: BUILD_PATH,
        filename: 'build.js'
    },
    module: {
        //加载器配置
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders:{
                css: ExtractTextPlugin.extract({
                  use: 'css-loader!sass-loader',
                  fallback: 'style-loader'
                }),
              }
               /* sass: ExtractTextPlugin.extract({
                  use: 'css-loader!sass-loader',
                  fallback: 'vue-style-loader'
                })*/
                //ExtractTextPlugin.extract("css!sass-loader")
            }
          },
          /*{
            test: /\.(css|scss|sass)$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader!sass-loader'
           })
            //include: APP_PATH
          },*/
          {
              test: /\.css$/,
              loader: "style-loader!css-loader"
          },
          {
              test: /\.scss$/,
              loader: "style-loader!css-loader!sass-loader!"
          },  
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            //include: APP_PATH,
            /*query: {
              presets: ['es2015']
            }*/
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
          }
        ]
    },  
    plugins: [
        new ExtractTextPlugin('[name].css'),
       /*new webpack.optimize.CommonsChunkPlugin({
            name:'common', // 注意不要.js后缀
            chunks:['index']
        }),*/
     ]
    //其它解决方案配置
   /* resolve: {
        root: 'E:/github/flux-example/src', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }*/
};