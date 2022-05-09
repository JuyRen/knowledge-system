const intersectionObserver = new IntersectionObserver(
  function (entires) {
    console.log("info:");

    entires.forEach((item) => {
      console.log(item.target, item.intersectionRatio);
    });
  },
  {
    threshold: [0.5, 1],
  }
);

intersectionObserver.observe(document.querySelector("#box1"));
intersectionObserver.observe(document.querySelector("#box2"));
