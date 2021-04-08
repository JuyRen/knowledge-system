function Person(name) {
  this.name = name;
}
Person.prototype.greeting = function () {
  console.log(this.name);
};
/**
 * Person构造函数
 *  {
 *      arguments: null
        caller: null
        length: 1
        name: "Person"
        prototype: {
            *    constructor: Person,
            *    greeting: function,
            *    __proto__: {
            *      constructor: Object,
            *      ...
            *    }
        }
        __proto__: ƒ ()
 *  }
 */

var p1 = new Person("任均阳");
console.log("p1: ", p1);
/**
 * p1 实例对象
 * Person {
 *  name: '任均阳',
 * __proto__:
 *  {
 *    constructor: Person,
 *    greeting: function,
 *    __proto__: {
 *      constructor: Object,
 *      ...
 *    }
 *  }
 * }
 */

function Teacher(name, age) {
  Person.call(this, name);

  this.age = age;
}

var a = Object.create({ name: "哈哈" });
/**
 * {
 *  __proto__: {
 *    name: '哈哈
 *  }
 * }
 */

function create(t) {
  let obj = {};

  obj.__proto__ = t;

  return obj;
}

Teacher.prototype = Person.prototype;
Teacher.prototype.constructor = Teacher;
Teacher.prototype.getAge = function () {
  console.log(this.age);
};

var t1 = new Teacher("奥迪", 21);
console.log("t1: ", t1);
t1.getAge();
t1.greeting();
