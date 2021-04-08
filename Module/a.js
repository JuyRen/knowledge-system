module.exports.a = 1;
var b = require("./b"); // {b: 22}
console.log(b);
module.exports.a = 2;
