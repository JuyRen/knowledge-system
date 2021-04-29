1. 定义一个方法，接收一个 generator 函数参数
2. 返回 Promise 对象
3. 执行 generator 函数
4. 递归判断该 generator 函数
5. done 为 true 时， resolve
6. 每次递归将 value 传入 next()
