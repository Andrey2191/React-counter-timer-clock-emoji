import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  onClickPlus = () => {
    this.setState({
      count: ++this.state.count,
    });
  };

  onClickMinus = () => {
    this.setState({
      count: --this.state.count,
    });
  };

  onClickRefresh = () => {
    this.setState({
      count: (this.state.count = 0),
    });
  };

  render() {
    return (
      <div className="counterWrap">
        <div className="counter">{this.state.count}</div>
        <div className="buttons">
          <button onClick={this.onClickPlus} className="btn btnPlus">
            +
          </button>
          <button onClick={this.onClickRefresh} className="btn btnNullify">
            &#11119;
          </button>
          <button onClick={this.onClickMinus} className="btn btnMinus">
            -
          </button>
        </div>
      </div>
    );
  }
}
