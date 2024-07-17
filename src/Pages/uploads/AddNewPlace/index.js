import React, { useState } from 'react'
import styles from "./addNewPlace.module.css";

import plus_logo from "../../../assets/plus.png";
import view_places_logo from "../../../assets/your-trip/places_view_icon.png"
import view_count_logo from "../../../assets/your-trip/places_count_icon.png"

import Modal from "../../../components/shared/UI/Modal";

// importing modals: 
import CreateTrip from "../modals/createTrip";
import Desktop from './desktop';
import Button from '../../../components/shared/UI/button/Button';


const  ClientTrips = (props) => {

  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const onHideModalHandler = () => {
    if(isProcessing){
      console.log("In process!");
      return
    }
    setShowModal(false);
    setShowCreateModal(false);
  }

  const onOpenModalHandler = () => {
    setShowCreateModal(true);
    setShowModal(true); 
  }

  const onTripSubmitProcessChange = status => setIsProcessing(status);

  

  return (
    <div className={styles.container}>
      
      {/* <Modal        
        onClose={onHideModalHandler}
        show={showModal} 
      >
        {
          showCreateModal && <CreateTrip onClose={onHideModalHandler} onProcessChange={onTripSubmitProcessChange}/>
        }
      </Modal> */}

      <div className={styles.desktop}>
        <Desktop />
      </div>

      <div className={styles.mobile}>
        
      </div>

      <div className={styles.btn_wrapper}>
        <Button color="#EE7D15">
          <h1>Submit</h1>
        </Button>
      </div>
      
    </div>
  )
}

export default ClientTrips