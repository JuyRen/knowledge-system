// Conditional Types

type IsString<T> = T extends string ? true : false;

// 分发
type GetSomeType<T> = T extends string ? "I am string" : "I am number";

type A = GetSomeType<"NAME">;
type B = GetSomeType<1>;
type C = GetSomeType<"NAME" | 1>; // GetSomeType<'NAME'> | GetSomeType<1>

// never 如果出现在联合类型中，会被忽略
type MyExclude<T, K extends T> = T extends K ? never : T;

/**
 * MyExclude<"name", "name" | "gender">  // never
 * | MyExclude<"age", "name" | "gender">  // age
 * | MyExclude<"gender", "name" | "gender"> // never
 */
type D = MyExclude<"name" | "age" | "gender", "name" | "gender">;

type MyExtract<T, K extends T> = T extends K ? T : never;

type E = MyExtract<"name" | "age" | "gender", "name" | "gender">;
