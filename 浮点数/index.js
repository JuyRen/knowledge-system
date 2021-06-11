// 1. JavaScript 如何存储小数
var a = 0.1;
var b = a.toPrecision(21);
console.log("b: ", b);

function n(number, precision = 12) {
  return parseFloat(number.toPrecision(precision));
}

var c = 0.1;
var d = 0.2;
var e = c + d;
var f = n(e);
console.log("e: ", e);
console.log("f: ", f);
