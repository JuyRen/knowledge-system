// 传统Object的key-value， key只能为字符串或symbol

// map, 解决了key的类型问题，可以不限于传统的key类型

const key = { name: "key" };

const key2 = { age: 21 };
const obj = {
  [key]: 1,
  [key2]: 2,
};
// 因为key是一个对象，
// 用做传统object的key时，会转义成类型'[object Object]',
// 覆盖同类型的value
console.log("obj: ", obj);

const m1 = new Map([[key, 1]]);

m1.set(key2, 2);
console.log("m1: ", m1);

console.log(m1.get(key));

// map实例具有
// size
console.log("size", m1.size);
// has
console.log(m1.has(key2));
// delete
// clear

// keys, values, entries

// WeakMap, 只能接受引用类型作为key值
let wm = new WeakMap();
// wm.set(1, 2); // Invalid value used as weak map key

wm.set([1], 2);
wm.set(
  {
    name: 1,
  },
  3
);

// 只能使用delete, has, get, set

// 无法被遍历
// for (let [key] of wm) {
//   console.log(key); // wm is not iterable
// }

// 用WeakMap部署私有属性

const _counter = new WeakMap();
const _action = new WeakMap();

class CountDown {
  constructor(counter, action) {
    _counter.set(this, counter);
    _action.set(this, action);
  }

  dec() {
    let counter = _counter.get(this);

    if (counter < 1) return;

    counter--;

    _counter.set(this, counter);
    if (counter === 0) {
      _action.get(this)();
    }
  }
}

const c = new CountDown(2, () => {
  console.log("DONE");
});

c.dec();
c.dec();
