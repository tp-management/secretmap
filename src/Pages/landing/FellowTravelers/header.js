import header_logo from "../../../assets/landing/about_us_text_decoration.png";
import styles from "./header.module.css";
import React from 'react'


const Header = () => {
  return (
    <>
    <div className={styles.header_container}>
        <div className={styles.header_wrapper}>
          <img src={header_logo} alt='' />
          <div>
            <h1>Companions</h1>
            <hr />
          </div>
        </div>
      </div>

      <h1 className={styles.main_header}>
        Where interests become friendships
      </h1>
    </>
  )
}

export default Header