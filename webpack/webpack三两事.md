# webpack
学习来源：尚硅谷的视频
##一、五个核心概念
- entry 入口，指示从哪个文件起点开始打包
- output 指示webpack打包后的资源bundles输入到哪里去
- loader 让webpack处理非js的文件，原生webpack可以处理js文件和json文件。不能处理css/img等其他资源。
- plugins 可以用于执行范围更广的任务。打包优化、压缩、甚至重写定义环境变量。
- mode 不同开发模式使用不同的插件。development开发模式，让代码本地调试运行的环境（更简单） production模式，能让代码优化上线运行的环境（更复杂，需要考虑优化，兼容处理。

##二、运行指令
- 开发环境
```
webpack ./src/index.js -o ./build/built.js --mode=development
```
webpack会以。/src/index.js为入口文件开始打包，打包后输入到 ./build/built.js 整体打包环境是开发环境。
当项目规模变大，要考虑优化，比如文件划分，压缩混淆，tree shaking（移除JavaScript上下文中未引用的代码），使用一些更便利的语法糖之类的。

- 生产环境
```
webpack ./src/index.js -o ./build/built.js --mode=production
```
生产环境比开发环境多一个压缩js代码。


##三、loader和 plugin
- webpack.config.js  webpack配置文件，指示webpack做什么东西
所有构建工具都是基于node.js平台运行的，模块化默认采用common.js
```
const {resolve} = require('path');
const HtmlWebpackPlugin=require('HtmlWebpackPlugin')

module.exports = {
    //五个核心概念略
    //入口起点
    entry: './src/index.js',
    output: {
        //输出文件名
        filename:'built.js',
        //输出路径
        //__dirname 是nodejs的变量,代表当前文件的目录绝对路径
        path: path.resolve(__dirname, 'dist')
    },
    //loader配置
    module: {
        rules: [
            {
                test:/\.less/,
                use:['style-loader','css-loader','less-loader']
            },
            //处理图片，但是处理不了html中的img图片
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                //小于8kb，图片会被base64处理
                options:{
                    limit:8*1024，
                    //url-loader会用es6进行模块化解析，html-loader引入图片是common。js，因此会出现问题，解决办法是吧es6模块引入功能关掉
                    esModule:false,
                    //给图片重命名,hash：10戴白哦取hash值前十为作为名字，ext代表使用原扩展名
                    name:'[hash:10].[ext]
                }
            },
            // 专门处理html文件中的img图片，从而能被url-loader进行处理
            {
                test: /\.html$/,
                loader:'html-loader'
            }，
            // 其他资源
            {
                //排除css。js。html资源
                exclude: /\.(css|js|html)$/,
                loader: 'file-loader'
            }
        ]
    },
    //plugins的配置
    plugin:[
        new HtmlWebpackPlugin({
            ...
        }),...
    ],
    mode:'development',
    // 热更新,开发服务器,只在内存中编译打包，不会有任何输出 ,npx webpack-dev-server,npx 可以运行使用 Node.js 构建并通过 npm 仓库发布的代码。
    devServer:{
        contentBase: resolve(__dirname,'build'),
        // gzip压缩
        compress:true,
        port:3000，
        // 自动打开浏览器
        open: true
    }
}

```

# 四、性能优化
- webpack性能优化
  - 开发环境性能优化
    -优化打包构建速度
        -HMR（css必用style-loader,js，module.hot)
    -优化代码调试
        -source map（[inline-|hidden-|eval-] [nosources-] [cheap-[module-]] source-map推荐开发环境使用 source-map: eval-source-map/ eval-cheap-module-source-map，生产环境使用 source-map/ cheap-module-source-map ）
  - 生产环境性能优化
    - 优化打包构建速度
        - oneOf
        - babel缓存
        - 多进程打包 每一个进程的开启大约会浪费0.5s左右
    - 优化代码运行性能
        - 缓存（hash文件每次打包都会便-chunkhash同一个入口共享同一个哈希-contenthash依据文件内容生成哈希值） 强制缓存
        - tree shaking  必须es6模块 使用生产环境会自动做树摇，使用side effect防止被误删
        - 代码分割 单入口 optimization配置或者import语法 多入口 optimization避免重复打包node modules里面的代码 dll技术可以将这个再次进行更细致的分割
        - 懒加载（异步代码分割） 预加载更好，但是兼容性更差
        - PWA 离线环境下也可以访问网站
        - externals 使用CSN方式引入，不打包node modules的第三方库
        - dll 较复杂，分别打包node modules第三方库



## webpack 总结
- entry
    - 1.string 
    单入口，打包形成一个chunk，输出一个bundle
    - 2.array
    多入口，只会形成一个chunk，输出一个bundle，只有在HMR功能里面让html热更新生效
    - 3.object
    多入口，有几个入口文件形成几个chunk，输出几个bundle，此时chunk的名称是key
- output
    - filename文件名称（指定名称+目录）
    - path输出文件目录（所有资源输出的公共目录）
    - publicPath 所有资源引入的公共路径前缀
    - chunkFilename 非入口chunk的文件名称（import或者optimization产生非入口chunk）
    - library 整个库向外暴露的名称，结合dll用
    - libraryTarget 暴露的变量名添加到哪个名称上，结合dll一起使用
- module
- resolve
    - 解析模块的规则
    - alias 配置解析模块别名,可以简写路径
    - extensions 配置省略文件后缀名
    - modules 告诉webpack解析模块去找哪个目录
- devServer
    - 一定用于开发环境
    - contentBase 运行代码的目录
    - watchcontentBase 监视目录下所有文件，一旦变化就会reload重载
    - watchOptions ignored 忽略文件
    - compress 启动gzip压缩
    - port 指定端口号
    - host 指定域名
    - open 自动打开浏览器
    - hot 开启HMR功能
    - clientLogLevel 日志信息
    - quiet 除了基本启动信息外其他内容不要打印
    - overlay 如果出现错误，全屏提示是否打开
    - proxy 服务器代理，解决开发环境跨域问题
        ```
            '/api':{
                target:'http://localhost:3000',
                pathRewrite:{
                    '^/api':''
                }
            }
        ```
- optimization
    - 只在生产环境有意义
    - splitChunks
        - chunks
        - minsize 分割chunk最小大小
        - maxsize 分割chunk最大，无限制的话则设置为0
        - minChunks 被提取的chunk最小被引用的次数
        - maxAsyncRequests 按需加载时并行加载文件最大数量
        - maxInitialRequests 入口js文件最大并行请求数
        - automaticNameDelimiter 名称连接符
        - name 可以使用的命名规则
        - cacheGroups 分割chunk的组
    - runtimeChunk 将当前模块记录其他模块的hash单独打包为一个文件
    - minimizer 配置生产环境的压缩方案



