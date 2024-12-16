import React, { useEffect, useState } from 'react'
import styles from "./shareNewPlace.module.css";

import plus_logo from "../../../assets/plus.png";
import view_places_logo from "../../../assets/your-trip/places_view_icon.png"
import view_count_logo from "../../../assets/your-trip/places_count_icon.png"

import Modal from "../../../components/shared/UI/Modal";

// importing modals: 
import CreateTrip from "../../uploads/modals/createTrip";
import { useNavigate } from 'react-router-dom';

const  ShareNewPlace = (props) => {


  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);

  const onHideModalHandler = () => {
    if(isProcessing){
      console.log("In process!");
      return
    }
    props.onClose()
  }


  const onTripSubmitProcessChange = status => setIsProcessing(status);

  

  return (
    <div className={styles.container}>
      
      <Modal        
        onClose={onHideModalHandler}
        show={true} 
      >
        {
          <CreateTrip onClose={onHideModalHandler} onProcessChange={onTripSubmitProcessChange}/>
        }
      </Modal>
      
    </div>
  )
}

export default ShareNewPlace