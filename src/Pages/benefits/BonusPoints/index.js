import React from 'react'
import styles from "./bonuspoints.module.css";
import PlaceIcon from '../../../assets/benefits/location.png';
import Envelope from '../../../assets/benefits/envelope.png';
import Carlendar from '../../../assets/benefits/carlendar.png';
import Button from '../../../components/shared/UI/button/Button';
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';
import AuthRequired from '../../../components/shared/layouts/AuthRequired';

const BonusPoints = (props) => {

  const Auth = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div className={styles.section_heading}>
        <h2>Ways To Get Points</h2>
        <p>Use these bonus points to explore basic locations, unlock new income levels, and connect with contacts from fellow travelers</p>
      </div>
      
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.icon_wrapper}>
            <img src={PlaceIcon} alt='share place'/>
          </div>
          <h3 className={styles.point_header}>Share unique places</h3>
          <div className={styles.point_description}>
            <p>Get 4 points every time when you share new place</p>
          </div> 
          <div className={styles.btn_wrapper}>
            <Button height="auto" onSubmit={()=>props.setShowUploadsModal()} color="#EE7D15">
              <h2>Share Place</h2>
            </Button> 
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.icon_wrapper}>
            <img src={Envelope} alt='invite people'/>
          </div>
          <h3 className={styles.point_header}>Invite new people</h3>
          <div className={styles.point_description}>
            <p>Get points for inviting new people to join <span>HiddenWorld.org</span></p>
          </div>
          <div className={styles.btn_wrapper}>
            <Button height="auto" onSubmit={()=>props.setShowInvitingsModal()} color="#EE7D15">
              <h2>Invite Friends</h2>
            </Button> 
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.icon_wrapper}>
            <img src={Carlendar} alt='login Everyday'/>
          </div>
          <h3 className={styles.point_header}>Login every day</h3>
          <div  className={styles.point_description}>
            <p>Get 1 bonus point every day when logging in</p>
          </div>
      
          <div className={styles.btn_wrapper}>
            <AuthRequired>
              <Button 
                height="auto"
                onSubmit={
                  ()=>
                  {
                    if(Auth.isLoggedIn)return Auth.logout();
                  }
                } 
                color="#EE7D15"
              >
                <h2>{Auth.isLoggedIn ? "Logout" : "login Now"}</h2>
              </Button> 
            </AuthRequired>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default BonusPoints