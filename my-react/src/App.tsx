import React from "react";
import http from "./server/http";

import "./App.css";

function App() {
  const getApi = () => {};

  const postApi = () => {
    http("post", "https://proxy.yipiaoyun.cn/kaipiao-app/getUserInfo").then(
      (res) => {
        console.log("res: ", res);
      }
    );
  };

  return (
    <div className="App">
      <button onClick={getApi}>get</button>
      <button onClick={postApi}>post</button>
    </div>
  );
}

export default App;
