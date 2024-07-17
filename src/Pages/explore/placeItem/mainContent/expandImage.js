import React from 'react'
import styles from "./expandImage.module.css";
import Modal from '../../../../components/shared/UI/Modal';

const ExpandImage = (props) => {
  return (
    <div>
      <Modal
        show={true}
        onClose={props.onClose}
        bgColor="rgba(237, 235, 235, 0.8)"
      >
        <div className={styles.expanded_image}>
          <img src={props.item.image} alt='' loading='lazy' />
          <div className={styles.expanded_btn} onClick={props.onClose}>
            <div>
              <h1>Close</h1>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ExpandImage