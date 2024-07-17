import React from 'react'
import styles from "./mobile.module.css";

const MobileNavButton = (props) => (
    <button className={styles.container} onClick={props.onClick}>
      <div className={styles.lines}>
        <div></div>
        <div style={{ width: "80%", marginRight: "auto" }}></div>
        <div></div>
      </div>
    </button>
  )

export default MobileNavButton