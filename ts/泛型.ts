// 泛型：  函数可以适用于任何特定的类型
// 换成any， 无法判断类型并且失去了保护作用
interface Result<V, M> {
  value: V;
  message: M;
}
function identity<T, U>(value: T, message: U): Result<T, U> {
  return {
    value,
    message,
  };
}

identity(100, "泛型");

interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person;
type K2 = keyof Person[]; // number | "length" | "push" | "concat" | ...
type K3 = keyof { [x: string]: Person }; // string | number

function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

{
  type Key = "systemOrder" | "ctripOrder" | "partnerOrder";

  interface Order {
    id: number;
    orderNo: string;
  }

  // 将T变为可选
  type MyPartial<T> = {
    [k in keyof T]?: T[k];
  };

  type MyRecord<K extends keyof any, T> = {
    [k in K]: T;
  };

  type MyPick<T, K extends keyof T> = {
    [k in K]: T[k];
  };

  type MyExclude<T, U> = T extends U ? never : T; // // 返回key值

  type MyOmit<T, K extends keyof T> = Pick<T, MyExclude<keyof T, K>>;

  type Partial_Order = MyPartial<Order>;

  type Record_Order = MyRecord<Key, Order>;

  type Pick_Order = MyPick<Order, "id">;

  type Exclude_Order = MyExclude<keyof Order, "id">;

  type Omit_Order = MyOmit<Order, "orderNo">;
}
