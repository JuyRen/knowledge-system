// dom事件流

{
  const parent = document.querySelector("#parent");
  const son = document.querySelector("#son");
  const grandson = document.querySelector("#grandson");

  document.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
      alert("无法执行后续的点击");
    },
    true
  );

  parent.addEventListener("click", () => {
    console.log("click parent");
  });

  son.addEventListener("click", () => {
    console.log("click son");
  });

  grandson.addEventListener("click", () => {
    console.log("click grandson");
  });
}

{
  /**
   *  window.addEventListener 监听什么阶段的事件
   */
  window.addEventListener("click", () => {
    console.log(1);
  });
  window.addEventListener(
    "click",
    () => {
      console.log(2);
    },
    true
  );
}

// 应用
{
  const ul = document.getElementById("ul-list");
  ul.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === "li") {
      const liList = document.querySelectorAll("li");
      const index = Array.prototype.indexOf.call(liList, target);
      alert(`内容为：${target.innerHTML}, 索引为${index}`);
    }
  });
}
