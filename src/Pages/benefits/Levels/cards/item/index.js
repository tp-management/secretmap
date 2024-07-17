import React, { useContext } from 'react'
import styles from "./item.module.css";
import Unlock from '../../../../../assets/benefits/unlock.png';
import share_place_icon from '../../../../../assets/benefits/location_2.png';
import Button from '../../../../../components/shared/UI/button/Button';
import {AuthContext} from "../../../../../contextAPI/AuthContext";

const CardItem = (props) => {

  const Auth = useContext(AuthContext).authenticatedUser
  const previousLevel = Auth && Auth.data && Auth.data.level > props.no

  return (
    <div 
      className={`
        ${styles.container_column}
        ${previousLevel && styles.non_active_column}
        ${props.hidden && props.no === 1 && styles.hide_last_column}
      `} 
      onClick={props.onSubmitModal}
    >
      <div className={`${styles.point_card} ${props.align_top && styles.align_top}`}>
        <div className={styles.icon_wrapper}>
          <img src={require(`../../../../../assets/benefits/${props.level.toLowerCase()}.png`)} alt='ProMaster'/>
        </div>
        <h3 className={styles.earn_point}>{props.level}</h3>
        <div className={styles.description}>
          {props.caption}
        </div>
        <div className={styles.controll_button} style={{ opacity: props.unlocked &&"0.3" }}>
          {
            Auth && Auth.data.level === props.no ?
            <Button height="auto" color="#EE7D15" onSubmit={()=>{}}>
              <div className={styles.innner_upgrade}>
                <img src={share_place_icon} alt='share'/>
                <h2 style={{ color:"white" }}>Details</h2>
              </div>
            </Button>
            :
            <Button height="auto" border="3px solid #EE7D15" onSubmit={()=>{}}>
              <div className={styles.innner_upgrade}>
                <img src={Unlock} alt='unlock'/>
                <h2>Unlock</h2>
              </div>
            </Button>
          }
        </div>
      </div>
    </div>
  )
}

export default CardItem