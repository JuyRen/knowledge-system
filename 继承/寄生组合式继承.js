function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getInfo = function () {
  const info = `我是${this.name},今年${this.age}岁`;
  console.log(info);
};

function Men(name, age, dickLength) {
  Person.call(this, name, age); // 看这里

  this.gender = "男";
  this.dickLength = dickLength;
}

// function creatObj(o) {
//   function Fn() {}
//   Fn.prototype = o;
//   return new Fn();
// }

// function extendsPrototype(Parent, config) {
//   const d = creatObj(Parent.prototype);
//   d.constructor = config.constructor;
//   return d;
// }

// Men.prototype = extendsPrototype(Person, {
//   constructor: Men,
// });

Men.prototype = Object.create(Person.prototype, {
  constructor: {
    value: Men,
  },
});

Men.prototype.getDisk = function () {
  console.log(this.dickLength);
};

const men1 = new Men("Jack", 21, 18);

console.log("men1: ", men1);
