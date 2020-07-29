{
  //   1. 数组读取负数的索引
  //   2. 当数组下标大于数组长度, 让数组返回指定下标元素
  const arr = [11, 22, 33, 44];

  const arrProxy = new Proxy(arr, {
    get(target, propertyKey) {
      let index = +propertyKey;
      if (index < 0) {
        propertyKey = target.length + index;
      }

      if (index > target.length - 1) {
        propertyKey = target.length - 1;
      }

      return target[propertyKey];
    },
  });

  console.log(arrProxy[-2]);
  console.log(arrProxy[10]);
}
