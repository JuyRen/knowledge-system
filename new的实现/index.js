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

  const d = fn.apply(obj, rest); // 使obj能访问到属性

  if ((typeof d === "object") & (d !== null)) {
    return d;
  }

  obj.__proto__ = fn.prototype; // 使obj能访问到prototype

  return obj;
}

const p = myNew(Person, "jack", "21");
const p1 = new Person("tom", "24");

console.log("p: ", p);
console.log("p1: ", p1);
