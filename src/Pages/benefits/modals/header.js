import React from 'react'
import styles from "./header.module.css";

const BenefitsModalHeader = (props) => {

    
  return (
    <div>
      <div className={styles.icon_wrapper}>
        <div className={styles.icon_wrapper}>
          {props.children}
        </div>
        </div>
        <h3 className={styles.earn_point}>{props.header}</h3>
    </div>
  )
}

export default BenefitsModalHeader