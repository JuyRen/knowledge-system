function red() {
  console.log("red");
}

function yellow() {
  console.log("yellow");
}

function green() {
  console.log("green");
}

function myLight() {
  function time(cb, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        cb();
        resolve();
      }, time);
    });
  }

  function loop() {
    time(red, 3000)
      .then(() => {
        return time(yellow, 2000);
      })
      .then(() => {
        return time(green, 1000);
      })
      .then(() => {
        loop();
      });
  }

  loop();
}

myLight();
