/**
 * ts中的匹配需要用到infer
 * 字符串灵活运用字符拼接
 * 数组灵活使用...
 */

type PromiseType<T> = T extends Promise<infer A> ? A : never;

type Pop<T> = T extends [...infer B, any] ? B : never;

type Shift<T extends any[]> = T extends [any, ...infer B] ? B : never;

type TrimLeft<T extends string> = T extends `${" " | "\t" | "\n"}${infer R}`
  ? TrimLeft<R>
  : T;
type TrimRight<T extends string> = T extends `${infer R}${" " | "\t" | "\n"}`
  ? TrimRight<R>
  : T;

type Trim<T extends string> = TrimRight<TrimLeft<T>>;

type Replace<
  T extends string,
  O extends string,
  N extends string
> = T extends `${infer A}${O}${infer B}` ? `${A}${N}${B}` : T;
