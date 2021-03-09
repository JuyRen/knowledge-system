// +
// -
// *
// /
// %  取余
// ** 求幂

// 一元运算符优先级高于二元运算符
// = 优先级最低

{
  let a = (b = c = 2 + 2); // a 4, b 4, c 4
}

{
  // 自增++ / 自减--  运算符 优先级最高
  // 可用于变量前/后, 区别在于返回值的不同

  let counter = 5;
  let a = counter++;
  let b = ++counter;

  console.log(a); // 5
  console.log(b); // 7
  console.log(counter); // 7
}

// 空值合并运算符 ??
// a ?? b 返回结果为： a已定义（不是null或undefined）， 返回 a， 否则返回b
{
  let a = 0;
  let b = 1;
  let c = a ?? b;
  let d = a || b;
  console.log(c);
  console.log(d);
}
