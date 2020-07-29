// 拦截数据读取操作
// 如Object[key], Array[index]

{
  var student = {
    name: "JUY",
    age: 250,
    gender: "male",
  };

  for (let key in student) {
    console.log(student[key]);
  }

  const proxy = new Proxy(student, {
    get(target, propertyKey) {
      if (Reflect.has(target, propertyKey)) {
        if (propertyKey === "age" && target.age > 200) {
          throw `你不可能活了${target.age}岁?`;
        }

        return target[propertyKey];
      } else {
        throw `${propertyKey}不存在`;
      }
    },
  });

  try {
    for (let key in proxy) {
      console.log(proxy[key]);
    }
  } catch (err) {
    console.log(err);
  }

  try {
    proxy.weight;
  } catch (err) {
    console.log(err);
  }
}

{
  // 数组的拦截, propertyKey为下标, 是字符串类型

  const arr = [11, 22, 33];

  const arrProxy = new Proxy(arr, {
    get(target, propertyKey) {
      console.log(`数组下标:`, propertyKey);
      return target[propertyKey];
    },
  });

  console.log(arrProxy[0]);
}
