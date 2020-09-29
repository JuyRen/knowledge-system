# Babel7

> 1. transform new syntax `() => {}` --> `function() {}`
> 2. polyfill missing features `includes, isArray ...`

## @babel/polyfill

> 填充新特性, 让浏览器可以使用 es2015+的内置新特性(like Promise or WeakMap, static methods like Array.from or Object.assign, instance methods like Array.prototype.includes, and generator functions (when used alongside the regenerator plugin))

1. 会添加到全局范围,以及诸如 String, Array 的原型中去

- 在项目中开发无关紧要
- 在工具库中开发, 引入项目中时,会污染项目中全局类
- 所以在开发工具库时, 使用 `transform runtime`插件 代替`@babel/polyfill`

### useBuiltIns

1. `usage`, 根据具体代码单独引入 polyfill
2. `entry`, 需要在打包 entry 文件顶部引入`@babel/polyfill`

## @babel/plugin-transform-runtime

> 使用此插件后, 所有的`helper`都将引用`@babel/runtime`模块, 避免每个文件重复出现`helper`代码

> 产生一个沙箱环境, 不影响全局类, 如果使用`@babel/polyfill`, 会全局使用,产生兼容问题
