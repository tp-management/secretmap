import React from 'react'
import styles from './footerModal.module.css';
import Background from '../../../../../assets/footerSection/Vector.png'

const FooterModal = () => {

  return (
  <>
    <img className={styles.top_background_image} src={Background} alt=''/>
      <div className={styles.container}>
        <div className={styles.column_about}>
          <div className={`${styles.header_text}`}>
              <h1><span>Trip</span>Whoop<span>!</span></h1>
          </div>
        </div>
        <div className={styles.links_box}>
          <div className={styles.column_links}>
            <h1>Quick Links</h1>
                            
            <ul className={styles.links}>
              <li>How it works</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className={styles.column_links}>
            <h1>About</h1>
                            
            <ul className={styles.links}>
              <li>frequently asked questions</li>
              <li>About us</li>
            </ul>
          </div>
        </div>
    </div>
  </>  
  )
}

export default FooterModal
