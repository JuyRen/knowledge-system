async function foo() {
  const a = await Promise.resolve(2);
  console.log("a: ", a);
  return a;
}

foo();
