// 对象属性的排序
// 一般来说按照书写的顺序排
// 但是碰到整数 key时， 会按整数大小进行排序

{
  let a = {
    name: "任均阳",
    49: "Germany",
    41: "Switzerland",
    44: "Great Britain",
    1: "USA",
  };

  for (let key in a) {
    console.log(key);
  }
}
