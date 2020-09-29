const arr = [1, 2, 3];

arr.map((item) => {
  console.log(item);
});

Promise.resolve().finally();

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  getName() {
    console.log(this.name);
  }

  static setName(name) {
    this.name = name;
  }
}

async function fn() {
  const time = await Promise.resolve("你好");
  console.log(time);
}
