const data = {
  type: "div",
  props: {
    class: "data-1",
  },
  children: [
    {
      type: "div",
      props: {
        class: "data-1-1",
      },
      children: [
        {
          type: "img",
          props: {
            class: "data-1-1-1",
            alt: "img",
            src: "https://www.xxxxx",
          },
        },
        {
          type: "div",
          props: {
            class: "data-1-1-2",
          },
          children: {
            type: "p",
            props: {
              class: "data-1-1-2-1",
            },
            children: "我是p纯文本-1",
          },
        },
      ],
    },
    {
      type: "div",
      props: {
        class: "data-1-2",
      },
      children: [
        {
          type: "p",
          props: {
            class: "data-1-2-1",
          },
          children: "我是p纯文本-2",
        },
        {
          type: "div",
          props: {
            class: "data-1-2-2",
          },
          children: [
            {
              type: "p",
              props: {
                class: "data-1-2-2-1",
              },
              children: [
                {
                  type: "span",
                  props: {
                    class: "data-1-2-2-1-1",
                  },
                  children: "我是span纯文本呢-1",
                },
                {
                  type: "span",
                  props: {
                    class: "data-1-2-2-1-2",
                  },
                  children: "我是span纯文本呢-2",
                },
              ],
            },
            {
              type: "a",
              props: {
                class: "data-1-2-2-2",
                href: "https://www.baidu.com",
              },
            },
          ],
        },
      ],
    },
  ],
};

// 1.接受参数
// 2.返回处理后的数据
// 3.对children类型判断， 是数组，循环递归。 是对象，直接递归。 是string或number，直接返回
function DFS(target) {
  const { type, props, children } = target;
  const dom = document.createElement(type);
  if (props) {
    for (let key in props) {
      if (props.hasOwnProperty(key)) {
        dom.setAttribute(key, props[key]);
      }
    }
  }

  if (typeof children === "string" || typeof children === "number") {
    dom.innerHTML = children;
  }

  if (Object.prototype.toString.call(children) === "[object Object]") {
    dom.innerHTML = DFS(children);
  }

  if (Object.prototype.toString.call(children) === "[object Array]") {
    let subDom = document.createElement("div");
    console.log("subDom: ", subDom);
    for (let i = 0; i < children.length; i++) {
      subDom.appendChild(DFS(children[i]));
    }
    dom.innerHTML = subDom;
  }

  return dom;
}

document.body.appendChild(DFS(data));
