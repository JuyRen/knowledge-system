import React from "react";

function Son(props) {
  const { grandRef } = props;

  return (
    <div>
      <div> i am juy</div>
      <span ref={grandRef}>这个是我想要的元素</span>
    </div>
  );
}

class Father extends React.Component {
  render() {
    return (
      <div>
        <Son grandRef={this.props.grandRef} />
      </div>
    );
  }
}

// const NewFather = React.forwardRef((props, ref) => (
//   <Father grandRef={ref} {...props} />
// ));

export default class GrandFather extends React.Component {
  constructor(props) {
    super(props);

    this.nodeRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.nodeRef);
  }

  render() {
    return (
      <div>
        <Father grandRef={this.nodeRef} />
      </div>
    );
  }
}
