function fn1() {
  debugger;
  let age = 21;
  fn2(age);
}

function fn2(age) {
  console.log(age);

  fn3().then((res) => {
    console.log("res: ", res);
  });

  // fn4();
}

function fn4() {
  console.log("fn4");
}

function fn3() {
  return new Promise((resolve, reject) => {
    let name = "任均阳";
    resolve(name);

    console.log("f3:", name);
  });
}

fn1();
