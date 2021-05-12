/**
 * 1. 调用函数
 * 2. 将函数this指向传入的对象
 * 3. 参数的传入
 */

Function.prototype.myCall = function (context) {
  context = context || window; // 传入null时，context为window

  var args = [];

  for (let i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]"); // 获取参数
  }

  context.fn = this;
  const result = eval("context.fn(" + args.toString() + ")");

  delete context.fn;

  return result;
};

var foo = {
  value: 1,
};

function bar(age, name) {
  console.log("age: ", age);
  console.log("name: ", name);
  console.log(this.value);
  return "12313123";
}

const res = bar.myCall(foo, 21, "任均阳");
console.log("res: ", res);
