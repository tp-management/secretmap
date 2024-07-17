import React from 'react'
import styles from "./styles.module.css";
import camera_icon from "../../../../assets/uploads/camera_valid.png"

const InitialState = ({onChangeFile}) => {  
    
    return (
        <React.Fragment>
          <div>
            <input
              id="contained-button-file"
              accept=".jpg,.png,.jpeg"
              className={styles.input}
              onChange={onChangeFile}
              type="file"
            />
            <label htmlFor="contained-button-file">
              {/* <p className={styles.add_photo_header}>Add photo</p> */}
              <img className={styles.add_photo_icon} src={camera_icon} alt='' />
            </label>
          </div>
        </React.Fragment>
    );
}

export default InitialState