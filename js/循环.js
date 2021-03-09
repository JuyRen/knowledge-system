// while , for

// 内联变量声明
// i 在循环体中声明, 外部无法引用
for (let i = 0; i < 10; i++) {
  // console.log(i);
}

// console.log(i); // 报错

// 跳出循环 break
// 跳出本次循环， 进入下一次 continue

let i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 0) break;
  console.log(i);
}
