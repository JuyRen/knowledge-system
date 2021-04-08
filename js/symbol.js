// Symbol 新增的数据类型， 解决变量名冲突的问题，
// 使用：
// Symbol('xx') Symbol({ toString: () => 'xxx'}) 多次调用，产生多个，个个都不同
// Symbol.for('xx') 全局只保存一个，多次调用仍只有一个
// Symbol.keyFor(s1)
// 对象属性名为Symbol类型时， 不会被遍历 for...in, Object.keys()无法获取， Reflect.ownKeys() 可以获取
// 使用， 通常用来消除魔法字符串， （redux中定义action type）
