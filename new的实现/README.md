## new 模拟实现

new 之后的结果：

1. 返回一个对象
2. 可以访问属性
3. 可以访问原型对象

```
  // 基本实现
  function myNew(Fn, ...rest) {
    const obj = Object.create(null)

    const res = Fn.apply(obj, rest) // 访问属性

    res.__proto__ = Fn.prototype // 访问原型对象

    return res
  }
```

再考虑 Fn 是否有返回值(res)，以及返回值(res)的类型

1. object ([], null, {}, Map, ...)

- null, 仍返回新创建的对象
- 非 null, 返回 Fn 的返回值

2. 非 object (undefined, ...)

```
  // 基本实现
  function myNew(Fn, ...rest) {
    const obj = Object.create(null)

    const res = Fn.apply(obj, rest) // 访问属性

    if (typeof res === 'object' && res !== null) {
      return res
    }

    obj.__proto__ = Fn.prototype // 访问原型对象

    return obj
  }
```
