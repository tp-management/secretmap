import React from 'react'
import styles from "./desktop.module.css";

import type_icon from "../../../../assets/uploads/type_icon.png"
import price_icon from "../../../../assets/uploads/income_valid.png"
import map_icon from "../../../../assets/uploads/map_valid.png"
import image_icon from "../../../../assets/uploads/camera_valid.png"
import Button from '../../../../components/shared/UI/button/Button';
import ImageUpload from '../../modals/uploadImage';

const Desktop = () => {
  return (
    <div className={styles.container}>

      <div className={styles.inputs_wrapper}>
        <div className={styles.inputs}>
          <div className={styles.inputs_type}>
            <img src={type_icon} alt='' />
            <label>Select type</label>
          </div>

          <div style={{ marginLeft:"10px" }} className={styles.inputs_type}>
            <img src={map_icon} alt='' />
            <label>Set location</label>
          </div>
        </div>

          <textarea className={styles.description}>
            Tell us more about this place
          </textarea>
      </div>

      <div className={styles.inputs_wrapper}>
        <div className={styles.inputs}>
          <div className={styles.inputs_type}>
          <img src={map_icon} alt='' />
          <label>Set price per every view</label>
          </div>
        </div>

        <div className={styles.images_wrapper}>
          <ImageUpload controllers={false} />
        </div>
      </div>

    </div>
  )
}

export default Desktop