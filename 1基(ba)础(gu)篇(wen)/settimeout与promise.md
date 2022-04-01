# Settimeout 和 Promise
## 一、settimeout
- 每次执行，它都会把一个任务放在执行队列里面执行。执行队列中任务的执行会阻塞浏览器。因此，把复杂任务进行分片是有意义的。
- setTimeout的执行会有至少4ms的延迟，因此越早执行它，它将会跑得越快。
- 可以用setTimeout来模拟进度条。如果在脚本中直接运行，则很难模拟进度条。
## 微任务和宏任务
- 宏任务来源很多，例如setTimeout的回调函数执行的任务。
- 微任务只能从代码中定义，例如proise-then-catch-finally句柄，或者await，或者queueMicrotask
- 对于每一次宏任务的开始，引擎会有限检查微任务队列，先执行微任务，然后执行宏任务，或者渲染，或者其他的东西。

## 事件流程（搬运）
[任务队列三两事](https://javascript.info/event-loop)
- Dequeue and run the oldest task from the macrotask queue (e.g. “script”).
- Execute all microtasks:
- While the microtask queue is not empty: Dequeue and run the oldest microtask.
- Render changes if any.
- If the macrotask queue is empty, wait till a macrotask appears.
- Go to step 1.
