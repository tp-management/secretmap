import React from 'react'
import styles from "./pagesHeaders.module.css";

const MainHeader = (props) => {


  return (

    <div className={styles.wrapper}>
         <div className={styles.header_container}>
            <div className={styles.main_header}>
                <h1>{props.header || "Your header"}</h1>
                <hr />
            </div>

            {
                props.paragraph && <div className={styles.header_paragraph}>
                    <p>
                        {
                            props.paragraph || "your paragraph"
                        }
                    </p>
                </div>
            }
        </div>
    </div>
  )
}

export default MainHeader