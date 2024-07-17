import React, { useState } from 'react'
import styles from "./fellowTravelers.module.css";
import card_image_1 from "../../../assets/your-trip/card_image_1.png";
import card_image_2 from "../../../assets/your-trip/card_image_2.png";
import Header from './header';
import { useNavigate } from 'react-router-dom';

const FellowTravelers = () => {

  const [showFirstContent, setShowFirstContent] = useState(false)
  const [showSecondContent, setShowSecondContent] = useState(false)
  const navigate = useNavigate();

  const onNavigate = () => {
    return navigate("/social");
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.representing_cards}>

        <div className={styles.child_card} onClick={()=>onNavigate()}>
          <img src={card_image_1} alt='' />
          <h1>Join a group</h1>
        </div>

        <div className={styles.child_card} onClick={()=>onNavigate()}>
          <img src={card_image_2} alt='' />
          <h1>Start a group</h1>
        </div>                

      </div>
    </div>
  )
}

export default FellowTravelers