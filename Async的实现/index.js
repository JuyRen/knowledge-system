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
    let g = fn();

    function recursive(val) {
      let { value, done } = g.next(val);

      if (done) {
        resolve(value);
      } else {
        return Promise.resolve(value).then(recursive);
      }
    }

    recursive();
  });
}

myAsync(fn).then(console.log);
