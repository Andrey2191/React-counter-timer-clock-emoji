import React from "react";
import styles from "./Timer.module.css";

import { TimerButton } from "./TimerBtn";

export class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  startTimer = () => {
    this.time = setInterval(
      () => this.setState({ value: ++this.state.value }),
      1000
    );
  };

  stopTimer = () => {
    clearInterval(this.time);
  };

  resetTimer = () => {
    this.setState({ value: 0 });
    this.stopTimer();
  };

  render() {
    return (
      <div className={styles.timerWrapp}>
        <div className={styles.timerValue}>{this.state.value}</div>
        <div className={styles.timerBtnWrapp}>
          <TimerButton text="Start" onClick={this.startTimer} />
          <TimerButton text="Stop" onClick={this.stopTimer} />
          <TimerButton text="Reset" onClick={this.resetTimer} />
        </div>
      </div>
    );
  }
}
