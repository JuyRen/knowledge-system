function Person() {
  this.hobbies = [];
}

Person.prototype.getInfo = function () {
  const info = `我是${this.name},今年${this.age}岁`;
  console.log(info);
};

function Men(name, age, dickLength) {
  this.name = name;
  this.age = age;
  this.gender = "男";
  this.dickLength = dickLength;
}

function Girl(name, age, cup) {
  this.name = name;
  this.age = age;
  this.gender = "女";
  this.cup = cup;
}

Men.prototype = new Person();
Girl.prototype = new Person();

const men1 = new Men("Jack", 21, 18);
const men2 = new Men("Tom", 28, 12);
men1.hobbies.push("basketball");

console.log("men1: ", men1);
console.log("men2: ", men2);

const girl1 = new Girl("Rose", 20, "C");
const girl2 = new Girl("Lucy", 22, "D");
console.log("girl1: ", girl1);
console.log("girl2: ", girl2);
