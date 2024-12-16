import React, { useState } from 'react'
import styles from "./progressBar.module.css";
import false_icon from "../../../../../../assets/benefits/false.png";
import true_icon from "../../../../../../assets/benefits/true.png";

const ProgressBar = (props) => {

    const [ShowRule, setShowRule] = useState(props.rules[0]);

    return (

    <div className={styles.container}>
        <ul className={styles.progressbar}>

            {
                props.rules.map((obj, index) => {

                    return(
                        <li 
                            onClick={()=>{setShowRule(obj)}} 
                            className={`${obj.status && styles.active}`} 
                            style={{ flex: `${index === 0 ? 0 : 1}` }}
                        >
                            <span className={styles.line}></span>
                            <div className={styles.counter}>{index + 1}</div>
                        </li>
                    )
                })
            }

        </ul>

        <div className={styles.show_rule}>
            <img src={ShowRule.status? true_icon : false_icon} alt='' />
            <p>
                {
                    ShowRule.rule
                }
            </p>
        </div>
    </div>
  )
}

export default ProgressBar