var count = 1;
var container = document.getElementById("container");

function getUserAction(e) {
  console.log("e: ", e);
  console.log("this: ", this);
  this.innerHTML = count++;
}

// 两种方式可以实现节流
// 1. timer (不能立即执行)
// 2. 计算时间 (立即执行)

function throttle(fn, delay, immediate) {
  let timer = null;
  let preTime = 0;

  function wrap(...rest) {
    const nowTime = Date.now();
    const foo = fn.bind(this, ...rest);

    if (immediate) {
      if (nowTime - preTime >= delay) {
        foo();
        preTime = nowTime;
      }
    } else {
      if (timer) return;

      timer = setTimeout(() => {
        foo();
        timer = null;
      }, delay);
    }
  }

  wrap.cancel = function () {};

  return wrap;
}

const t = throttle(getUserAction, 2000, true);

container.onmousemove = t;

document.querySelector("#cancel").addEventListener("click", () => {
  t.cancel();
});
