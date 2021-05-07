var count = 1;
var container = document.getElementById("container");

function getUserAction(e) {
  console.log("e: ", e);
  console.log("this: ", this);
  this.innerHTML = count++;
}

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

const t = throttle(getUserAction, 2000, false);

container.onmousemove = t;

document.querySelector("#cancel").addEventListener("click", () => {
  t.cancel();
});
