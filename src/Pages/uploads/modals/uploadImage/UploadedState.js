import React from 'react'
import styles from "./styles.module.css";
import Button from "../../../../components/shared/UI/button/Button";

const UploadedState = ({imageResetHandler, imageSubmitHandler, file}) => {

  return (
    <React.Fragment>
      <div>
        <div className={styles.controllers}>
          <div className={styles.controllers_btn}>
            <Button onSubmit={imageResetHandler} height="auto" color="#EE7D15">
              <h1>Retake</h1>
            </Button>
          </div>

          <div className={styles.controllers_btn}>
            <Button onSubmit={imageSubmitHandler} height="auto" color="#EE7D15">
              <h1>Next</h1>
            </Button>
          </div>
        </div>
        <img
          onClick={imageSubmitHandler}
          className={styles.media}
          src={file}
          alt=""
        />
      </div>
    </React.Fragment>
  );
}

export default UploadedState