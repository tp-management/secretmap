import React from 'react'
import styles from "./insideBounce.module.css";
import { Bounce } from 'react-activity';

const InsideBounce = (props) => {
  return (
    <div style={{ backgroundColor: props.bgColor }} className={styles.loading}>
      <Bounce size="20px" color={props.color || "#EE7D15"} />
    </div>
  )
}

export default InsideBounce