// 闭包： 能够使用外部函数变量的函数
{
  function foo() {
    var a = 1;
  }

  // console.log(a); // 无法从外部读取函数内部的变量

  // 如何从外部读取局部变量？

  function updateCount() {
    var count = 0;
    function getCount(val) {
      if (val) {
        count = val;
      }
      console.log(count);
    }
    return getCount; //外部函数返回
  }

  var count = updateCount();
  count(815); //815  在外部调用了count
}

{
  var name = "The Window";

  var object = {
    name: "My Object",

    getNameFunc: function () {
      return function () {
        return this.name;
      };
    },
  };

  console.log(object.getNameFunc()());
}

{
  var name = "The Window";

  var object = {
    name: "My Object",

    getNameFunc: function () {
      var that = this;
      return function () {
        return that.name;
      };
    },
  };

  console.log(object.getNameFunc()());
}
