# 存储机制
## 一、cookie
用cookie来保存在浏览器本地，这个不安全，而且是存储在缓存里面的。
服务器是如何区分不同的cookie的呢？ 针对每一个会话，都有服务器端都有一个sessionId，依据sessionId，服务器端会区分这些cookie。
## 二、session
sessionID: 设置在cookie中，是一个无规律的字符串，并有服务器签名。
浏览器会用sessionID来验证用户。

## 三、token
- 大量sessionID的情况下，多台服务器需要共享sessionID，会浪费资源。

- jwt（json web token），存储在用户那里，浏览器只存储在这个东西的签名。
header.payload.signature
header payload 进行base64编码，用header的算法进行签名，生成token给用户。以后用户提交的时候带token就可以有用户信息了。

- token会让请求头变大，所以会稍加服务器的压力。但session会增加大量压力。