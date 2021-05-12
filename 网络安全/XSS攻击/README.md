# XSS

> 通过注入恶意脚本代码

## 类型

1. 反射型 XSS

   > 通过 URL 参数注入脚本

2. 存储型 XSS

   > 通过恶意链接将脚本注入数据库

3. DOM 型 XSS
   > 在使用 html 拼接时,将恶意代码注入

## 防御

1. 输入过滤

   - 对明确的数据类型，手机，邮箱等进行过滤

2. 反射型和存储型

   - HTML 转义
   - 换成纯前端渲染

3. DOM 型

   > 注重代码的严谨性, 对重视 HTML 拼接

   - 使用 document.write, innerHTML 时，注意, 使用 textContent 代替
   - 使用 React 框架， React.createElement 会将代码转义

4. 限制输入长度

5. cookie 设置 httpOnly
