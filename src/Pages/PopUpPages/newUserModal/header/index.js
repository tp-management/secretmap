import React from 'react'
import logo from "../../../../assets/landing/about_us_text_decoration.png";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div className={styles.about_container}>
      <div className={styles.header_container}>
        <div className={styles.header_wrapper}>
          <img src={logo} alt='' />
          <div>
            {props.mainText || "Main text"}
            <hr />
          </div>
        </div>
      </div>
      
      <p className={styles.paragraph}>{props.subText || "Sub text"}</p>
    </div>

  )
}

export default Header