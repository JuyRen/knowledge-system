// 手动实现一个Promise.all

// 1. 将数组元素都变成Promise对象
// 2. 返回数组的元素顺序跟传入一样
// 3. 全部执行完之后，结束

function promiseAll(arr) {
  return new Promise((resolve, reject) => {
    let data = [];
    let count = 0;
    const len = arr.length;

    for (let i = 0; i < len; i++) {
      Promise.resolve(arr[i])
        .then((res) => {
          data[i] = res;
          count++;
          if (count === len) resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

const arr = [
  true,
  1,
  { name: "任均阳" },
  Promise.resolve("你好"),
  Promise.reject(1),
];

promiseAll(arr)
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err: ", err);
  });

// Promise.resolve(Promise.reject(1))
//   .then((res) => {
//     console.log("res: ", res);
//   })
//   .catch((err) => {
//     console.log("err: ", err); // 输出这个
//   });
