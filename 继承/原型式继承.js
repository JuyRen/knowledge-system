function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getInfo = function () {
  const info = `我是${this.name},今年${this.age}岁`;
  console.log(info);
};

function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

const obj = createObj({ name: "jack" });
console.log("obj: ", obj);
