import React, { useContext, useState } from 'react'
import styles from "./popup.module.css";
import { AuthContext } from '../../../../../contextAPI/AuthContext';
import ConfettiExplosion from 'react-confetti-explosion';

import close_icon from '../../../../../assets/benefits/close_popup.png';
import ControllerButton from './controllerButton';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './progressBar';

const Popup = (props) => {
    const navigate = useNavigate();

    const Auth = useContext(AuthContext).authenticatedUser;
    const [newLevelUnlocked, setNewLevelUnlocked] = useState(false);
    const isCurrentLevel = Auth && Auth.data.level === props.card.no;

    const onSubmitHandler = () => {
  
      if(isCurrentLevel)return navigate("/uploads");
      // if()
      setNewLevelUnlocked(true);
      return props.onUnlock();
    }
  

    return (
        <div className={styles.modal_content}>

           {
            newLevelUnlocked &&
            
            <div style={{ position:"absolute", margin: "0 auto", left: "0", right: "0", width:"2px", backgroundColor: "red" }}>
                l<ConfettiExplosion zIndex={5} />
            </div>}

            <div className={styles.icon_wrapper}>
                <img src={require(`../../../../../assets/benefits/${props.card.level.toLowerCase()}.png`)} alt='' />
            </div>

            <div className={styles.close_btn} onClick={props.onClose}>
                <img src={close_icon} alt='' />    
            </div>

            <div className={styles.level_header}>
                <h1>{props.card.level}</h1>
            </div>

            <div className={styles.caption}>
                <p style={{ marginBottom:"10px" }}>Turn every view into cash! </p>
                <p style={{ marginBottom:"8px" }}>Earn <span>{props.card.earnings}</span> every time others view locations you share. Your journey pays off with every click.</p>
                {/* <p><span>Start earning now!</span></p> */}
            </div>

            {   ! (props.unlocked || props.hidden || (Auth && Auth.data.level === props.card.no)) &&
                <>    
                    <div className={styles.purchase_container}>
                        <p>Follow these steps:</p>
                        <ProgressBar rules={props.card.rules} />
                    </div>

                </>
            }
            
            {
                (props.unlocked || props.hidden) &&
                <div className={styles.note_container}>
                    <span>Note:</span>
                    {props.unlocked && <p>You must unlock lower levels first</p>}
                    {props.hidden && <p>This level is not active</p>}
                </div>
            }

            {Auth && !props.unlocked && !props.hidden &&  <ControllerButton {...props} onSubmit={onSubmitHandler} />}

        </div>
    )
}

export default Popup