import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  handleIncrement = product => {
    this.setState({
      value: this.state.value + 1
    });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatvalue()} </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatvalue() {
    let c = this.state.value;
    if (c === 0) return "Zero";

    return c;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";

    return classes;
  }
}

export default Counter;
