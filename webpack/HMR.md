# HMR
- 一个模块发生变化，只会重新打包这一个模块
- 在webpack里面，devserver选项中，可以把hot设置为true即可
- 样式文件可以使用HMR功能，默认在style-loader已经内置了
- js默认不能使用HMR功能，需要修改js代码，添加支持HMR功能的代码。一旦module.hot为true，说明开启了HMR功能。
```
if(module.hot){
    moudule.hot.accept('./print.js',function(){
        //这个方法会监听print.js文件变化，一旦发生变化，其他默认不会重新打包构建。会执行后面的回调函数。
        ...
    })
}
```
- html默认不使用，而且不能热更新，解决：修改entry入口，将html文件引入。这样一来全部都会重新加载，这个是没有办法优化的。
