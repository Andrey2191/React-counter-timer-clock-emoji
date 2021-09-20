import React from "react";
import styles from "./Timer.module.css";

export class TimerButton extends React.Component {
  render() {
    const text = this.props.text;
    const onClick = this.props.onClick;

    return (
      <button className={styles.timerBtn} onClick={onClick}>
        {text}
      </button>
    );
  }
}
