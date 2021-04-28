function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getInfo = function () {
  const info = `我是${this.name},今年${this.age}岁`;
  console.log(info);
};

function Men(name, age, dickLength) {
  Person.call(this, name, age);

  this.gender = "男";
  this.dickLength = dickLength;
}

function Girl(name, age, cup) {
  Person.call(this, name, age);

  this.gender = "女";
  this.cup = cup;
}

const men1 = new Men("Jack", 21, 18);
const girl1 = new Girl("Rose", 20, "C");

// men1.getInfo(); // ! 报错
