function myCall(fn, thisArg, ...rest) {
  if (thisArg) {
    thisArg.fn = fn;
    thisArg.fn(...rest);
    delete thisArg.fn;
  } else {
    fn(...rest);
  }
}

// function myBind(fn, thisArg, ...rest) {
//   thisArg.fn = fn;
// }

function foo(name, age, sex) {
  console.log("sex: ", sex);
  console.log("age: ", age);
  console.log("name: ", name);

  console.log(this.money);
}

const money = 40000;
const obj = {
  money: 2000,
};

// const bar = foo.call(obj, "任均阳", 2, "男");

// bar("男");

const c = myCall(foo, null, "任均阳", 2, "男");
