async function util() {
  const res = await Promise.resolve("util");
  console.log(res);
}

export default util;
