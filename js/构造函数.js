{
  function Person() {}

  Person.prototype.name = "Kevin";

  var person1 = new Person();
  var person2 = new Person();

  /*
  问：Person 这个构造函数的 prototype 指向什么？是这个函数的原型吗？
  答：1. Person.prototype 指向一个对象， 这个对象是由Person创建的实例的原型。  2. 不是
*/

  /**
   * 问：该怎么表示实例与实例原型?
   * 答： __proto__, Object.getPrototypeOf()
   */

  console.log(Person.prototype === person1.__proto__);
  console.log(Object.getPrototypeOf(person1) === Person.prototype);

  /**
   * 问：原型怎么指向构造函数？ 原型怎么指向实例?
   * 答：1. constructor 2. 原型不能指向实例, 因为一个原型能创造多个实例
   */

  console.log(Person.prototype.constructor);

  /**
   * 问： 实例和原型的关系？
   * 答： 实例上面读取不到的属性或方法， 会从原型（原型的原型直到为null）上去找
   */

  console.log(person1.constructor); // person1上没有constructor, 会从原型上找 person1.__proto__.constructor === Person

  /**
   * 问：什么是原型链
   * 答：相互关联的原型组成原型链， 实例获取属性或方法从原型链上一直查找
   */
}

{
  function Animal() {
    this.name = "Cat";
  }

  Animal.prototype.getName = function () {
    console.log(this.name);
  };

  Animal.prototype.age = 21;

  // ******************* 继承 *******************

  /**
   * 1. 组合继承
   *
   * 组合继承最大的缺点，调用两次父构造函数
   */

  function Dog() {
    Animal.call(this);
    this.name = "Keinv";
  }

  // Dog.prototype = new Animal();

  /**
   * 2. 寄生组合式继承
   * 思路， 少一次调用父构造函数， 间接让Dog.prototype = Animal.prototype, 同时需要重新指正Dog.prototype.constructor
   */
  Dog.prototype = Animal.prototype;
  Dog.prototype.constructor = Dog;
  console.log("Dog.prototype: ", Dog.prototype.constructor);

  var dog1 = new Dog();
  console.log(dog1.age);
  dog1.getName();
}

{
  /**
   * 问： new 的具体过程？
   * 答：
   *      1. 创建一个空对象a， Object.create(null)
   *      2. 将a.__proto__ 指向 构造函数fn.prototype
   *      3. 将构造函数显式绑定到a对象上, 使用apply fn.apply(a, arguments)
   *      4. 返回该对象
   *
   *  如何获取fn, 以及参数
   *  1. [].shift.call(arguments) ...Arg// 将arguments第一个元素截取，并返回
   *  2. arguments // 剩下的arguments就是参数
   */
  function myNew(fn, ...rest) {
    const obj = Object.create(null);

    obj.__proto__ === fn.prototype;

    fn.apply(obj, rest);

    return obj;
  }
}
