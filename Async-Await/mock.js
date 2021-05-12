function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

function* fn() {
  const data = yield getData("data");
  console.log("data: ", data);

  const data2 = yield getData("data2");
  console.log("data2: ", data2);

  return "success";
}

function myAsync(fn) {
  return new Promise((resolve, reject) => {
    const g = fn(); // 生成一个迭代器

    function loop(val) {
      const { done, value } = g.next(val);

      if (done) {
        resolve(value);
      } else {
        loop(value);
      }
    }

    loop();
  });
}
