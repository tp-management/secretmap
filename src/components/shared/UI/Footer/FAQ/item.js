import React from 'react'
import styles from "./item.module.css";
import expand_logo from "../../../../../assets/landing/expand_logo.png";
import expanded_logo from "../../../../../assets/landing/expanded_logo.png";
import { useState } from 'react';

const FaqItem = ({obj}) => {

    const [showBody, setShowBody] = useState(false)

    const headerClickHandler = () => {
        setShowBody(!showBody);  
    }

  return (
    <div onClick={headerClickHandler} className={`${styles.box} ${showBody && styles.active_box}`}>
        <div className={styles.header} >
            <h1>{obj.question}</h1>
            {
                showBody ?  <img src={expanded_logo} alt='' /> :  <img src={expand_logo} alt='' />
            }
            
        </div>

        <div className={`${styles.body} ${showBody && styles.active_body}`}>
            <p>
                {obj.answer}
            </p>
        </div>
    </div>
  )
}

export default FaqItem