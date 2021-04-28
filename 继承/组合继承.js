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

function Girl(name, age, cup) {
  Person.call(this, name, age); // 看这里

  this.gender = "女";
  this.cup = cup;
}

Men.prototype = new Person(); // 看这里
Girl.prototype = new Person(); // 看这里

const men1 = new Men("Jack", 21, 18);
const men2 = new Men("Tom", 28, 12);

const girl1 = new Girl("Rose", 20, "C");
const girl2 = new Girl("Lucy", 22, "D");

men1.getInfo();
