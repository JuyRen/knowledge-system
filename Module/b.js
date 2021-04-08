module.exports.b = 11;
var a = require("./a"); // { a: 1}
console.log(a);
module.exports.b = 22;
