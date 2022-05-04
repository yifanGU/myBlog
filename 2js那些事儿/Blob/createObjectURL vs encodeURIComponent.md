# createObjectURL vs encodeURLComponent
[网站链接](https://stackoverflow.com/questions/61597868/creating-and-downloading-text-file-from-string-in-javascript-blob-createobjectu)
- 使用js，让客户端发送下载文件命令的时候，这两个函数都经常被用到。
## createObjectURL
- 社区使用createObjectURL的频率更多
- 它的性能表现更好。因为它对内容有完全的控制，并允许分割数据，支持大数据。
- 面向对象
- 在客户端，所有文件对于java来说就是一个blob类型数据
- 不用担心跨站脚本攻击和CORS问题
- API支持更好



## encodeURLComponent
- encodeURLComponent对浏览器的支持更好，而且支持Blob
