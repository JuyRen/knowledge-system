## Debounce 防抖

`clearTimeout只是清除定时器， 不会将timer赋值为undefined， timer仍为定时器id`

1. 返回一个函数
2. 在一定时间后执行一次，重复调用，取最新的延迟
3. 注意 this 的绑定和参数的传递
4. 取消 debounce
   > 给函数设置属性 cancel， 用去 clearTimeout(timer)
