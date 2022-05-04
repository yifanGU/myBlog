# todataUrl
- 在使用了webgl的前提下，使用todataurl将canvas画像进行截屏是行不通的。
- 原因是浏览器会在内部对调用webgl的canvas进行优化。在完成绘画后，浏览器会在页面显示了图像后，自动把的canvas缓存(drawing buffer)给清除掉。
- 解决办法：
  + 在截图前直接使用渲染命令
  + 在渲染周期中直接使用截图命令
  + 设置preserveDrawingBuffer: true
  