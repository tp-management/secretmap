import React, { useState } from 'react'
import styles from "./slideItem.module.css";
import Ripple from "../ripple"
import Location from "../map/location";
import Modal from '../Modal';
import ReactGA from 'react-ga4';


const SlideItem = ({item, isActive, setType}) => {

  const [showMapModal, setShowMapModal] = useState(false);


  const showOnMap = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked the button',
      label: `${item.type} view on map`
    });
    setShowMapModal(true);
  }
  
  return (
    <div className={`${styles.slide_container} ${!isActive && styles.hidden_slide}`}>

      {
        isActive &&
        <button onLoad={()=>{setType(item.type)}} onClick={showOnMap} className={styles.map_btn}>
          <div className={styles.btn_icon}>
            <div className={styles.icon_ripple}>
              <Ripple bright={true} />
            </div>
          </div>
          <h1>Location</h1>
        </button>
      }

      <Modal
        show={showMapModal}
        onClose={() => {setShowMapModal(false)}}
      >
        <>
          <Location 
            onClose={() => {setShowMapModal(false)}}
            show_location={item.location}
          />
        </>
      </Modal>

      
    </div>
  )
}

export default SlideItem