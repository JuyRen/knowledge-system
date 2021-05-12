import React from "react";

export default class Index extends React.Component {
  render() {
    const clonedChildren = React.cloneElement(this.props.children, {
      className: "clone-element",
    });
    return <div>{clonedChildren}</div>;
  }
}
