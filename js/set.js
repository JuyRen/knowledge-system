// Set 构造函数，类似数组， 保存一组不重复的数据
// 使用new Set(), 接受一个具有iterable接口的数据结构

const s1 = new Set([1, 2, 3]);
console.log("s1: ", s1);

const s2 = new Set("123123");
// size: 获取set长度
console.log(s2.size);

// add: 向set中添加元素
const a = [11];
s2.add(a);
console.log(s2.has(a));
// delete: 删除set元素, 基本类型和引用地址
s2.delete(a);
// has: 判断是否有该元素
console.log(s2.has(a));
// clear: 清空set
s2.clear();
console.log("s2: ", s2);

const s3 = new Set([1, 2, 3, 4, 5]);

// 对set数据结构， 可以进行 ...， for...of操作， 因为它默认 iterable函数（遍历器生成函数） 就是value方法
// ... 可以将set变成数组 [...set]
console.log([...s3].map((item) => item === 1));

// --------------------------------------------------------------------
