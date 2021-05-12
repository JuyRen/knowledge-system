import React from "react";
import RefComp from "./components/RefComp";
import PureComponentComp from "./components/PureComponentComp";
import CloneElement from "./components/CloneElement";
import ContextComp from "./components/Context";

function App() {
  return (
    <div>
      <RefComp />
      <PureComponentComp />
      <CloneElement>
        <div>我是克隆的</div>
      </CloneElement>
      <ContextComp />
    </div>
  );
}

export default App;
