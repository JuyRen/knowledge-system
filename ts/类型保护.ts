function isFile(val: unknown): val is File {
  return val instanceof File;
}

function doSomething(val: unknown) {
  if (isFile(val)) {
    val.name; // ! 看这里，不会报类型错误
  }
}
