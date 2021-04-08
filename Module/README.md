## CommonJS

1. module(node 自带)
2. module.exports（module 下面的一个对象，用于导出）
3. exports (exports = module.exports, 是 node 默认添加的，不能重新赋值 exports)
4. require(引用整一个文件，执行全部脚本，并去解析 module.exports)
5. require 引入文件后，缓存这个文件， 下次引用使用缓存。 （循环引用）

<strong>require(url)</strong>

1. url: 相对路径
   - 有后缀(.js, .json, .node), 按照当前目录去寻找文件
   - 没后缀(./moduleA)
     1. ./moduleA.js
     2. ./moduleA.json
     3. ./moduleA.node
     4. ./moduleA/
   - package.json 中 main 字段对应的路径
   - index.js
   - index.json
   - index.node
1. url: 绝对路径
1. 同上
1. url: 没有路径
1. 是否是 node 核心模块 http, path
1. 同目录 node_modules 中, 规则同上, 没找到向上级目录
