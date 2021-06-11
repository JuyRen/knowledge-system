const tree = [
  {
    id: 1,
    name: "张三",
    children: [
      {
        id: 2,
        name: "李四",
        children: [
          {
            id: 5,
            name: "张五",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "玛丽",
  },
];

// 测试用例：

// 1. 生成一颗新树，将所有节点的id，加1
// 2. 老树不变
console.log(
  treeMap(tree, (node) => {
    let newNode = { ...node };
    newNode.id = node.id + 1;
    return newNode;
  })
);

// 2. 打印每个节点的id
treeMap(tree, (node) => {
  console.log(node.id); // 应打印顺序应该是： 5，2，1，6
  return node;
});

function treeMap(tree, cb) {
  const newTree = [];

  if (typeof cb !== "function") {
    return tree;
  }

  if (Array.isArray(tree)) {
    for (let i = 0, treeLen = tree.length; i < treeLen; i++) {
      const item = tree[i];
      const obj = Object.assign({}, item);

      if (item.hasOwnProperty("children")) {
        obj.children = treeMap(item.children, cb);
      }

      newTree.push(cb(obj));
    }
  }

  return newTree;
}
