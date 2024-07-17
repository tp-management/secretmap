import React from 'react'
import phone_icon from "../../../../../../assets/explore/QRIcon/phone_icon.png";
import qr_icon from "../../../../../../assets/explore/QRIcon/qr_icon.png";
import styles from "./QRIcon.module.css";


const QRIcon = () => {

  return (
  
    <div className={styles.container}>
      <img src={phone_icon} alt='' className={styles.phone_icon} />
      <div className={styles.qr_icon_wrapper}>
        <div className={styles.qr_icon}>
          <div className={styles.scan_line}></div>
          <img src={qr_icon} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default QRIcon