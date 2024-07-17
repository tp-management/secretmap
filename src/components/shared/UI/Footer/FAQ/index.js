import React from 'react'
import styles from "./faq.module.css";
import {DummyData} from "./Data"
import FaqItem from './item';


const Faq = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>Frequently Asked Questions</header>

        {DummyData.map((item, key) => <FaqItem key={key} obj={item}/>)}

      </div>
    </div>
  )
}

export default Faq