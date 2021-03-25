// 2. 什么是防抖和节流？有什么区别？如何实现？怎么应用？

{
  const inpDom = document.getElementById("inp");

  function sayHi() {
    console.log("你好");
  }

  /**
   * debounce 防抖
   * @description n秒之后只会执行一次
   */
  function debounce(fn, delay) {
    let timer = null;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn();
        timer = null;
      }, delay);
    };
  }

  /**
   * throttle 节流
   * @description n秒之内只执行一次
   */

  function throttle(fn, n) {
    let timer = null;

    return function () {
      if (timer) return;

      timer = setTimeout(() => {
        fn();
        timer = null;
      }, n);
    };
  }

  inpDom.addEventListener("input", debounce(sayHi, 500));
}
