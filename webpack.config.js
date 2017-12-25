const path=require('path');
const webpack=require('webpack');
const uglify=require('uglifyjs-webpack-plugin'); //js压缩
const htmlPlugin=require('html-webpack-plugin'); //html打包

module.exports={
    entry:{
        entry:'./src/main.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:'/\.(png|jpg|gif)/',
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:5000,
                        output:'images/'
                    }
                }]
            },{
                test:'/\.(htm|html)$/i',
                use:['html-withimg-loader']
            }
        ]
    },
    plugins:[
        new uglify(),
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            // template:''
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'192.168.1.5',
        compress:true,
        port:8080
    }
}
