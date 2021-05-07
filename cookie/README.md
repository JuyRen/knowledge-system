# Cookie

> 为了解决 HTTP 无状态的问题

## 描述

> Cookie 是一段不超过 4kb 的文本数据，它由 name: value + 其他描述 Cookie 属性的字段组成

1. 大小： 不超过 4kb
2. Name: Value + 其他控制 Cookie 状态的属性

## 设置

### 服务端设置

1. 客户端发送请求到服务端
2. 服务端响应头添加 Set-Cookie 字段
3. 客户端保存 Set-Cookie

### 客户端设置

`document.cookie = 'name=value;max-age=xx;....'`

## 属性

1. Name/Value
2. Domain

   > cookie 可以送达的主机名

3. Path

   > 请求 url 必须包含，cookie 才会发送

4. Expires/Max-Age

   > cookie 有效时间, max-age 优先级高于 expires

   - Expires = Date (客户端时间)
   - max-age = number
   - 缺少两者, session, 关闭会话就消失

5. size

   > 大小，单位 byte

6. HttpOnly

   > 只能在 http 中获取，普通的 document.cookie 获取不到，防止 xss 攻击

7. Secure

   > 标记 Secure 的 Cookie 只能在 https 中发送

8. SameSite

   > 在进行`跨站`请求时，cookie 是否发送

   Cookie 的`同站策略`比`同源策略`宽松，不进行`协议`，`端口`比较，
   只进行`有效顶级域名+1`比较，相同即`同站`

   有效顶级域名: .com, .cn, .github.io 等
   有效顶级域名+1: baidu.com, taobao.com, ...

   - Strict: 跨站不发送
   - Lax: 跨站部分发送(a, link, get 表单)
   - None: 跨站发送
