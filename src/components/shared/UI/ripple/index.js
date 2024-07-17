import React from 'react'
import MapIcon from '../../../../assets/map_pin.png';
import styles from "./ripple.module.css";

const Ripple = (props) => {

  return (
    <div className={styles.container}>
      <div className={styles.map_icon}>
        <img src={MapIcon} alt='map_icon'/>
      </div>
      <div className={`${styles.pulse} ${props.bright && styles.pulse_custom_color}`}></div>
    </div>
  )
}

export default Ripple