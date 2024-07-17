import React from 'react';
import styles from './benefits.module.css';
import Modal from "../../components/shared/UI/Modal";
import { useState } from 'react';
import UploadsModal from './modals/uploadsModal';
import InvitingsModal from './modals/invitingsModal';
import Levels from './Levels';
import BonusPoints from './BonusPoints';
import Card from "../../components/shared/UI/Card"

const Benefits = () => {

  const [showInvitingsModal, setShowInvitingsModal] = useState(false);
  const [showUploadsModal, setShowUploadsModal] = useState(false);

  const onCloseModalHandler = () => {
    setShowInvitingsModal(false);
    setShowUploadsModal(false);
  }

  return (
    <Card>
      
      <Levels />

      <BonusPoints 
        setShowUploadsModal={()=>{setShowUploadsModal(true)}} 
        setShowInvitingsModal={()=>{setShowInvitingsModal(true)}} 
      />
      {
        <Modal
          show={showUploadsModal || showInvitingsModal}
          onClose={onCloseModalHandler}
        >
          <div className={styles.modal_wrapper}>
            {showUploadsModal && <UploadsModal onClose={onCloseModalHandler}/>}
            {showInvitingsModal && <InvitingsModal onClose={onCloseModalHandler} />}
          </div>
        </Modal>
      }
      
    </Card>
  )
}

export default Benefits