// 请实现一个mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中

function mergePromise(arr) {
  return new Promise((resolve, reject) => {
    let data = [];
    let sequence = Promise.resolve();
    let count = 0;

    for (let i = 0, len = arr.length; i < len; i++) {
      const item = arr[i];
      sequence = sequence // 将pending状态通过赋值给自身， 进行传递
        .then(item)
        .then((res) => {
          data.push(res);
          count++;
          if (count === arr.length) resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

function ajax(time, name, failed = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (failed) reject("失败了，" + name);

      resolve("成功了," + name);
    }, time);
  });
}

function red() {
  return "red";
}

function a1() {
  return ajax(1000, "a1");
}

function a2() {
  return ajax(4000, "a2");
}

function a3() {
  return ajax(2000, "a3");
}

const arr = [a1, red, a2, a3];

mergePromise(arr).then(
  (res) => {
    console.log("res:" + res);
  },
  (err) => {
    console.log("err: ", err);
  }
); // 成功了, a1; red; 成功了, a2; 失败了,a3
