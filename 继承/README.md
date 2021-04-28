## 继承

### 1. 原型链继承

```
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

  Men.prototype = new Parent(); // 看这里
  Girl.prototype = new Parent(); // 看这里

  const men1 = new Men("Jack", 21, 18);
  const men2 = new Men("Tom", 28, 12);

  const girl1 = new Girl("Rose", 20, "C");
  const girl2 = new Girl("Lucy", 22, "D");
```

缺点:

1. Men，Girl 中相同的初始化属性 name, age 需要反复书写
2. new Men 生成的实例共享 Person 中的引用类型

### 2. 借用构造函数

```
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

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

```

解决了，原型链继承中：重复书写属性，共享引用类型的缺点

缺点:

1. 无法继承 Person 原型链上的方法

### 3.组合继承

> 原型链继承 + 借用构造函数继承

```
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  function Men(name, age, dickLength) {
    Person.call(this, name, age); // 看这里

    this.gender = "男";
    this.dickLength = dickLength;
  }

  Men.prototype = new Person()
```

缺点：

1. 调用两次 Person
2. 第二次， new Person()的时候，创建了一个实例，把实例属性方法再次继承（这个继承在借用构造函数步骤已经完成），同时没有传属性，其实例属性值都是 undefined

### 寄生组合式继承

> 解决 Person 调用两次的问题

1. 不能直接使用`Men.prototype = Person.prototype` 这个是赋值，不是继承

```
  // 创建一个空对象，它的原型对象为传入的obj
  function createObj(obj, config) {
    function Fn() {}
    Fn.prototype = obj
    const newObj = new Fn()
    if (config) {
        Object.defineProperties(newObj, config)
    }
    return newObj
  }

  // obj是一个只包含constructor的对象，它的原型对象为Person.prototype
  Men.prototype = createObj(obj, {
    constructor: {
      value: Men
    }
  })
```
