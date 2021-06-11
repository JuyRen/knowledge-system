1. 浏览器解析 html，从头到尾一次执行。
2. 碰到`<script></script>`下载并执行，若在 dom 之前，会阻塞 dom 渲染。 所以一般都放在 dom 尾部
3. dom 过长时，对于低网速，可能也会存在加载延迟。

# defer

> 使 script 先下载，但不阻塞 dom。等到 dom 加载完毕之后，才会调用该脚本，

1. defer 脚本，会在 `DOMContentLoaded`之前调用
2. defer 脚本具有顺序，不管资源是否先下载完成

   ```
     <script defer src='./a.js'>
     <script defer src='./b.js'>

     b.js先下载完成的情况，它的执行也要等a.js执行完毕 (有依赖关系的时候，使用defer)
   ```

3. defer 脚本需要使用 src， 不然不生效

# async

> 与 defer 功能类似， 不阻塞 dom 加载

1. 脚本完全独立，不会等待其他脚本执行完毕。 其他脚本也不等待 async 执行完毕
2. DOMContentLoaded 不会等待，执行时机随 async 脚本，可能在前也可能在后
3. 主要用来加载第三方脚本，因为不依赖代码脚本

# 动态加载

document.appendChild(script)

1. 默认行为是`async = true`
