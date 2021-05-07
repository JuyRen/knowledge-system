1. 定义一个方法，接收一个 generator 函数参数
2. 返回一个函数, 对应 g = generator(), 不做任何操作
3. g 返回 Promise 对象
4. 执行 generator 函数
5. 递归判断该 generator 函数
6. done 为 true 时， resolve
7. 每次递归将 value 传入 next()
