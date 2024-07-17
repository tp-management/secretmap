import React from 'react'
import styles from "./grid.module.css";

const Grid = (props) => (
  <div className={styles.container}>
    {props.children} 
  </div>
)

export default Grid