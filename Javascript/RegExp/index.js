// ^ $ * + ? .

// x(?=y) 先行断言，
// 1. 匹配x
// 2. 仅当x后面跟着y
{
  const reg = /Ren(?=Juy)/;
  const string = "RenJuy";
  const res = string.match(reg);
}

// (?<=y)x 后行断言
// 1. 匹配x
// 2. 仅当x之前跟着y
{
  const reg = /(?<=Juy)Ren/;
  const string = "JuyRen";
  const res = string.match(reg);
}

// x(?!y) (?<!y)x
{
  const reg = /(?<!i)Ren(?!Juy)/;
  const string = "iRenJuy";
  const string2 = "IRenTuy";
  reg.exec(string);
  reg.exec(string2);
}

// {n} {n,} {n,m}
{
  const reg = /w{2,2}/;
  const string = "https:/ww.yipiaoyun.cn";
}

// 字符集合 [] 匹配方括号中的任意字符
// 对于点（.）和星号（*）这样的特殊符号在一个字符集中没有特殊的意义
{
  const reg = /[0-9^$]/;
  const string = "^3";
}

// \b 词的边界
{
  const reg = /\by\b/;
  const string = "hyesterday y es";
}

// \d 数字

// \D 非数字

// \s 空白字符

// \S 非空白字符

// \w [a-zA-Z0-9_]
{
  const reg = /\w/;
  const string = "2$";
}

{
  const reg = /[a-z]*/g;
  const string = "The car parked in the garage #21.";
}

// 我们想要获得所有跟在 $ 符号后的数字
{
  const reg = /(?<=\$x)\d*/;
  const string = "$x13213";
  console.log(string.match(reg));
}

// 我们想要获得所有不跟在 $ 符号后的数字
{
  const reg = /(?<!$)\d*/;
  const string = "213131$123123";
  console.log(string.match(reg));
}

{
  const reg = /\s*/g;
  const string = " 1234 abcd 5678";
  console.log(string);
  console.log(string.replace(reg, ""));
}

// 贪婪匹配 默认
{
  const reg = /(.*at)/;
  const string = "The fat cat sa2t on the ma3t. ";
  console.log(string.match(reg));
}
