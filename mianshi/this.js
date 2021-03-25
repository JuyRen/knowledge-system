{
  var name = 222;
  var a = {
    name: 111,
    say: function () {
      console.log(this.name);
    },
  };
  var fun = a.say;
  fun(); // fun.call(window) 222
  a.say(); // a.say.call(a) 111

  var b = {
    name: 333,
    say: function (fun) {
      fun(); // fun.call(window)
    },
  };

  b.say.call(a, a.say);

  b.say = a.say;
  b.say(); // b.say.call(b)
}

{
  // 箭头函数
  // this继承父上下文执行当中的this

  var x = 11;
  var b = {
    x: 22,
    say: () => {
      console.log(this.x);
    },
  };

  b.say();

  var birth = 2000;
  var obj = {
    birth: 1990,
    getAge() {
      var b = this.birth;
      console.log("b: ", b);
      var fn = () => new Date().getFullYear() - this.birth;
      return fn();
    },
  };

  console.log(obj.getAge.call(window));
}

{
  var name = "window";
  var person1 = {
    name: "person1",
    show() {
      return function () {
        console.log(this.name);
      };
    },
  };
  person1.show()();
}
