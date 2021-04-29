var count = 1;
var container = document.getElementById("container");

function getUserAction(e) {
  console.log("e: ", e);
  console.log("this: ", this);
  this.innerHTML = count++;
}

function debounce(fn, delay = 500, immediate) {
  let timer = null;

  var debounced = function (...rest) {
    const foo = fn.bind(this, ...rest);

    if (timer) clearTimeout(timer);

    if (immediate) {
      if (!timer) foo();
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    } else {
      timer = setTimeout(() => {
        foo();
      }, delay);
    }
  };

  debounced.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };

  return debounced;
}

const t = debounce(getUserAction, 500);

container.onmousemove = t;

document.querySelector("#cancel").addEventListener("click", () => {
  t.cancel();
});
