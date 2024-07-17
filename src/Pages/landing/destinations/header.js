import React from 'react'
import styles from "./header.module.css";

const MainHeader = () => {


  return (

    <div className={styles.container}> 
        <div className={styles.header}>
          <p>Your</p>
          <div>
            <p>Journey</p>
            <hr style={{ marginLeft: "7%", bottom: "5px" }} />
            <hr />
          </div>
          <p>Starts</p>
          <p className={styles.flex_}>Here</p>
        </div>

        <div className={styles.subheader}>
          <p>
            Share unique places, make money and meet new friends
          </p>
        </div>

    </div>
    
  )
}

export default MainHeader