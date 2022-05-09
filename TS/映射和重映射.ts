type Person = {
  name: string;
  age: number;
  adult: boolean;
};

// 映射， 对原先类型进行处理，构造出新的类型

type MRecord<T extends string | number | symbol, K> = {
  [k in T]: K;
};

type RecordPerson = MRecord<
  keyof Person,
  {
    value: string;
    writable: boolean;
  }
>;

type MReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type MPartial<T> = {
  [K in keyof T]?: T[K];
};

type MRequired<T> = {
  [K in keyof T]-?: T[K];
};

type NotReadonly<T> = {
  -readonly [K in keyof T]: T[K];
};

// 重映射,  在索引后面加一个 as， 表明索引转换成什么, 再对索引使用 extends + never （ extends string ？ Key : never）, 实现过滤

type FilterString<T> = {
  [Key in keyof T as T[Key] extends string ? Key : never]: T[Key];
};

type P = FilterString<Person>;
