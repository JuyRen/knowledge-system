import React, { useState } from "react";

class PureComponentComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "rjy",
        age: 21,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { data } = this.state;
    data.age++;
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    const { info } = this.props;

    return (
      <div>
        <div>{info.score}</div>
        <br />

        <div>名字: {data.name}</div>
        <div>姓名: {data.age}</div>
        <button onClick={this.handleClick}>age++</button>
      </div>
    );
  }
}

class Comp extends React.Component {
  constructor() {
    super();

    this.state = {
      age: 100,
      info: {
        score: 100,
      },
    };

    this.addScore = this.addScore.bind(this);
  }

  addScore() {
    const { info } = this.state;
    info.score++;
    this.setState({ info });

    let { age } = this.state;
    age++;

    this.setState({ age });
  }
  render() {
    return (
      <div>
        <button onClick={this.addScore}>add score</button>
        <PureComponentComp info={this.state.info} age={this.state.age} />
      </div>
    );
  }
}

// function Comp() {
//   const [data, setData] = useState({
//     info: {
//       score: 100,
//     },
//   });

//   return (
//     <div>
//       <button
//         onClick={() => {
//           const { info } = data;
//           info.score++;
//           setData({
//             info,
//           });
//         }}
//       >
//         add score
//       </button>
//       <PureComponentComp info={data.info} />
//     </div>
//   );
// }

// React.memo() 浅比较props， 第一个参数为组件(类和函数都可以)， 第二个参数为函数， 接受(prevProps, nextProps) 返回boolean， true的话不更新，false更新
PureComponentComp = React.memo(PureComponentComp, (prevProps, nextProps) => {
  console.log("prevProps: ", prevProps);
  console.log("nextProps: ", nextProps);

  // if (nextProps.age === 101) {
  //   return false;
  // }

  return true;
});

export default Comp;
