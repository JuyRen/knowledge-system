// 3. 浏览器事件循环
{
  console.log("start");
  setTimeout(() => {
    console.log("children2");
    Promise.resolve().then(() => {
      console.log("children3");
    });
  }, 0);

  new Promise(function (resolve, reject) {
    console.log("children4");
    setTimeout(function () {
      console.log("children5");
      resolve("children6");
    }, 0);
  }).then((res) => {
    console.log("children7");
    setTimeout(() => {
      console.log(res);
    }, 0);
  });
}

{
  const p = function () {
    return new Promise((resolve, reject) => {
      resolve(4);

      console.log(3);

      const p1 = function () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(1);
            console.log(11);
          }, 3000);
          resolve(2);
        });
      };

      p1().then((res) => {
        console.log(res);
      });
    });
  };

  const fn = function () {
    console.log("fn func");

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("resolve fn");
        console.log("fnfnfn");
      }, 2000);
    });
  };

  p().then((res) => {
    console.log(res);
  });

  fn().then((res) => {
    console.log(res);
  });

  console.log("end");
}
