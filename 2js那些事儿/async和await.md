# async 和 await
- await 允许接受普通函数调用或者直接量
- await是一个运算符，如果等到Promise对象，则阻塞后面代码等待resolve值，否则结果就是它等待的东西。
- async调用不会造成阻塞，它被分装在Promise中执行
- await等待的promise对象可能是reject状态，可以用try catch 语句来解决这个问题。