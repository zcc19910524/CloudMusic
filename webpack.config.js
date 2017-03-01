/**
 * Created by zhaochenchen on 2017/2/26.
 */
const path=require('path')
const autoprefixer=require('autoprefixer')
module.exports={
    devtool:'eval-source-map',
    entry:path.resolve(__dirname,'./index.js'),
    output:{
        path:path.resolve(__dirname,'./public'),
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!postcss-loader!less-loader'
            }
        ],
    },
    devServer: {
        inline: true,//实时刷新
        port:9000,
    }
}