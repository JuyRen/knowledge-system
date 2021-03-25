{
  // Promise 是个立即执行的构造函数， 先执行resolve， reject前后所有的代码， 再将resolve存入微任务队列
  const p1 = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("执行p1");
      rej("p1 报错");
    }, 1000);
  });

  const p2 = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("执行p2");
      res("p2 成功");
    }, 1500);
  });

  Promise.all([p1, p2, true])
    .then((res) => {
      console.log("res: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
}

{
  /**
   * 手写一个Promise.all
   * 1. 传参类型的判断
   * 2. 返回参数，顺序的一致
   * 3. 何时resolve
   */
  function PromiseAll(array) {
    return new Promise((resolve, reject) => {
      const result = [];
      let count = 0;
      for (let i = 0, len = array.length; i < len; i++) {
        const item = array[i];

        Promise.resolve(item)
          .then((res) => {
            // result.push(res); // push不能保证顺序的一致，因为它在微任务中执行，可能任务慢，排在队列的后面
            result[i] = res;
            count++;

            if (count === len) {
              resolve(result);
            }
          })
          .catch(reject);
      }
    });
  }

  const p1 = new Promise((res, rej) => {
    setTimeout(() => {
      res("p1");
    }, 1000);
  });

  const p2 = new Promise((res, rej) => {
    setTimeout(() => {
      res("p2");
    }, 500);
  });

  const p3 = new Promise((res, rej) => {
    setTimeout(() => {
      res("p3");
    }, 3000);
  });

  PromiseAll([p1, p2, p3])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

{
  function PromiseRace(arr) {
    return new Promise((resolve, reject) => {
      for (let i = 0, len = arr.length; i < len; i++) {
        const item = arr[i];

        Promise.resolve(item).then(resolve, reject);
      }
    });
  }

  const p1 = new Promise((res, rej) => {
    setTimeout(() => {
      rej("rej p1");
    }, 2000);
  });

  const p2 = new Promise((res, rej) => {
    setTimeout(() => {
      res("res p2");
    }, 1500);
  });

  PromiseRace([p1, p2]).then(
    (res) => {
      console.log("race");
      console.log(res);
    },
    (err) => {
      console.log("race");
      console.log(err);
    }
  );
}

{
  // promise 不会以初始状态决定最终状态， 而是已前一个状态决定后一个状态
  // 在promise链式调用中更加能体现

  const promise1 = new Promise((resolve, reject) => reject());

  const promise2 = promise1.then(null, function () {
    return 123;
  });

  promise2.then(
    () => {
      console.log("完成");
    },
    () => {
      console.log("拒绝");
    }
  );
}

{
  // allSettled { status: 'fulfilled' | 'rejected', value: xxx if fulfilled, reason: xxxx if rejected}
  const p1 = Promise.resolve(10);
  const p2 = new Promise((resolve, reject) => setTimeout(reject, 1000));
  Promise.allSettled([p1, p2]).then((res) => {
    console.log(res);
  });
}
