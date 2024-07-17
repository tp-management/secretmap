import React, { useEffect } from 'react'
import Modal from '../../../../../../components/shared/UI/Modal'
import styles from "./giftsPopUp.module.css";
import header_icon from "../../../../../../assets/explore/gifts_header.png";
import Balance from './balance';
import Button from '../../../../../../components/shared/UI/button/Button';
import donate_icon from "../../../../../../assets/explore/donate_icon.png";
import active_bonus_star from "../../../../../../assets/explore/active_star.png"
import not_active_bonus_star from "../../../../../../assets/explore/not_active_star.png"

import { useState } from 'react';
import { Donate } from '../../../../../../components/utils/places/donate';
import { useContext } from 'react';
import { AuthContext } from '../../../../../../contextAPI/AuthContext';
import { notify } from '../../../../../../components/shared/UI/toast';
import ConfettiExplosion from 'react-confetti-explosion';

const GiftsPopUp = (props) => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [isSelected, setIsSelected] = useState(1);
  const [notEnoughPoints, setNotEnoughPoints] = useState(false);
  const options = [4,9,13,17]
  const Auth = useContext(AuthContext);
  const token = Auth.isLoggedIn ? Auth.authenticatedUser.token.access_token : null

  const SubmitDonation = async() => {
    if(!token || !props.item.user_id._id)return
    if(options[isSelected] > Auth.authenticatedUser.data.points)return setNotEnoughPoints(true)
    setNotEnoughPoints(false);

    return setIsSubmited(true);

  }

  useEffect(()=>{

    const onCompleteHandler = async()=>{

      const create_new_donation = await Donate({
        donating_to: props.item.user_id._id,
        amount: options[isSelected]
      }, token)
  
      if(!create_new_donation.status)return notify(create_new_donation.message, "error")
      notify(create_new_donation.message, "success")
      
      Auth.update({
        data: create_new_donation.data, 
        token: 
        {
          access_token: create_new_donation.data.access_token,
          refresh_token: create_new_donation.data.refresh_token
        } 
      })
    }

    if(isSubmited){
      setTimeout(() => {
        onCompleteHandler();
        setIsSubmited(false)
        return props.onClose()
    }, 1000)};
  })

  const DonateOptions = ({options}) => {
    return <div className={styles.options_container}>
      {options &&
        options.map((option, key) => {
          return <div 
            key={key} 
            onClick={()=>setIsSelected(key)}
            className={styles.option_item}
            style={{ backgroundImage:`url(${isSelected===key ? active_bonus_star : not_active_bonus_star})` }}
          >
            <p style={{ color:`${isSelected===key ? "white":"#7a7a7a"}` }}>{option}</p>
          </div>
        })
      }
    </div>
  }

  return (
    <>
        <Modal 
          show={props.show}
          onClose={props.onClose}
        >
          <div className={styles.container}>
            <div className={styles.header}>
              <img src={header_icon} alt=''/>
              <h1>Make an impact!</h1>
            </div>

            {isSubmited && !notEnoughPoints && <ConfettiExplosion zIndex={5} />}

            <div className={styles.paragraph}>
              <p>
                By donating bonus points, you're not only showing appreciation but also helping creators reach new levels of activeness              </p>
            </div>

            <Balance error={notEnoughPoints} />

            
            <div className={styles.paragraph}>
              <p>
                Decide which amount to donate:
              </p>
            </div>

            <DonateOptions options={options} />

            <Button onSubmit={SubmitDonation} height="auto" color="#EE7D15">
              <div className={styles.donate_btn_container}>
                <img src={donate_icon} style={{ width: "28px", height: "28px" }} alt='' />
                <h1>Donate</h1>
              </div>
            </Button>

          </div>
        </Modal>
    </>
  )
}

export default GiftsPopUp