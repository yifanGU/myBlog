# vite vs webpack
首先，除了生态以外，vite 完胜 webpack。
在打包之前，vite会把你的模块分为两个部分，dependency和application。
dependency：vite使用了用Go语言写的esbuild打包node modules下的包，esbuild打包的速度比webpack快了10倍100倍。
application：vite每次打包只会处理这部分的代码，且只处理你使用的部分的代码。这在多入口的情况下差异会非常明显。