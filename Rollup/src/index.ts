import answer from "the-answer";
import _ from "lodash";
import util from "./util";

function myModule() {
  const arr = [1, 2, 3];
  console.log(arr.includes(2));
  console.log(_.isArray([arr]));
  console.log("the answer is: ", answer);
}

class Person {
  name: string;
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

console.log(Person);

async function fn() {
  const res = await Promise.resolve("hhh");
  console.log(res);
}

fn();
util();
export default myModule;
