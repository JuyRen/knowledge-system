{
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
  count(815); //815
  count(); //816
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
