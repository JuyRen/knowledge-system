{
  // 正常模式, 非构造函数
  var foo = {
    value: 1,
  };

  function bar(age, name) {
    console.log("age: ", age);
    console.log("name: ", name);
    console.log(this.value);
    return "我";
  }

  // 返回了一个函数
  var bindFoo = bar.bind(foo, 21);
  const res = bindFoo("任均阳");
  console.log("bindFoo: ", res);

  /**
   * 1. 返回一个函数A
   * 2. 函数A返回 目标函数B的执行返回值, 使用apply改变this的指向 (B.apply(context))
   * 3. bind传参， 在B.bind的时候可以传， 在A调用的时候可以传
   *    * 在B.bind的时候，对参数做处理 获取传参数组， args = Array.prototype.splice.call(arguments, 1)
   *    * 在A调用的时候，也对arguments处理， args = Array.prototype.splice.call(arguments, 0)
   *    * 最后按顺序拼接参数，传给B.apply(context,args)
   */

  Function.prototype.myBind = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
      var fnArg = Array.prototype.slice.call(arguments, 0);
      return self.apply(context, args.concat(fnArg));
    };
  };

  var newBindFoo = bar.myBind(foo, 100);
  const res1 = newBindFoo("嗷嗷的");
  console.log("newBind: ", res1);
}

{
  console.log("+++++++++++++++++++++++++++++++++++++++++");
  // 当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 指向实例，但传入的参数依然生效

  var value = 200;
  var foo = {
    value: 100,
  };

  function bar(name, age) {
    this.habit = "shopping";
    console.log(this.value);
    console.log(name);
    console.log(age);
  }

  bar.prototype.friend = "kevin";

  var bindFoo = bar.bind(foo, "daisy");

  var obj = new bindFoo(18);
  console.log("obj: ", obj);

  console.log("+++++++++++++++++++++++++++++++++++++++++");

  Function.prototype.myBind = function (context) {
    const slice = Array.prototype.slice;

    if (typeof this !== "function") {
      throw new Error("不是一个函数，无法bind");
    }

    const self = this;

    const bindArgs = slice.call(arguments, 1);

    const fnBind = function () {
      const fnArgs = slice.call(arguments);

      return self.apply(
        this instanceof fnBind ? this : context, // ! 判断是否是构造函数获得的实例
        bindArgs.concat(fnArgs)
      );
    };

    return fnBind;
  };

  var newBindFoo = bar.myBind(foo, "daisy");

  var obj = new newBindFoo(18);
  console.log("obj: ", obj);
}
