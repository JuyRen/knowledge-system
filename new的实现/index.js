function Person(name, age) {
  this.name = name;
  this.age = age;

  return [];
}

Person.prototype.getInfo = function () {
  console.log(this.name + ":" + this.age);
};

function myNew(fn, ...rest) {
  const obj = Object.create(null);

  const res = fn.apply(obj, rest); // 1.改变fn的this指向, 使新对象获取函数的属性

  // ! 针对fn有返回值的情况
  // ! 如果res返回了对象类型,那么直接return这个返回值

  if (typeof res === "object" && res !== null) {
    return res;
  }

  obj.__proto__ = fn.prototype; // 2. 新对象obj原型对象赋值，使新对象获取到fn的原型上的方法和属性

  return obj;
}

const p = myNew(Person, "jack", "21");
const p1 = new Person("tom", "24");

console.log("p: ", p);
console.log("p1: ", p1);
