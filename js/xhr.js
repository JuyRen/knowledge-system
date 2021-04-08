/**
 * CORS
 *  1. 协议+域名+端口
 *  2. 预检请求 preflight request
 *    比如，在发送一个DELETE跨域请求之前，客户端会自动发送一个preflight request, 去检查服务器知否支持这个DELETE。
      *    2.1 Access-Control-Request-Method: DELETE
      *    2.2 Access-Control-Request-Headers
      *    2.3 Origin
      简单请求不会触发preflight request
        1.GET
        2.POST
        3.HEAD?
        4. 设了自定义的header，
 */

/**
 * 1.- 如何设置request header
 *   - 1. xhr.setRequestHeader(key, value)
 *     2. 必须在open之后，send之前
 *     3. 采用追加方式，对同一个key多次set，不会覆盖
 *
 */

/**
 * 2.- 如何获取response header
 *   - 1. xhr.getResponseHeader(key) || xhr.getAllResponseHeaders()
 *     2. 为何出现 Refused to get unsafe header "xxx"
 *        2.1 "Set-Cookies", 无论跨域不跨域都获取不到
 *        2.2 跨域请求， 只能get ”Access-Control-Expose-Headers“中写的header
 */

/**
 * https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 *  3.- Content-Type: MIME + charset + boundary
 *    - 1. MIME: type/subtype
          1.1 type: text (普通文本) / subtype: plain,html,css,javascript
          1.2 type: image (图像) / subtype: png,jpg,jpeg,gif
          1.3 type: video (视频) / subtype: webm, ogg
          1.4 type: audio (音频) / subtype: webm, ogg
      ！！ 1.5 type: application (二进制) / subtype: octet-stream (八字节流), pdf, xml
 */

/**
 * 3.- 如何指定xhr.response的数据类型
 *
 */
