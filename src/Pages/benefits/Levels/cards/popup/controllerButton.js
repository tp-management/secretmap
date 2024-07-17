import React, { useContext } from 'react'
import { AuthContext } from '../../../../../contextAPI/AuthContext'
import Button from '../../../../../components/shared/UI/button/Button';
import styles from "./controllerButton.module.css";
import { Bounce } from 'react-activity';
import unlock_icon from "../../../../../assets/benefits/unlock.png"
import share_icon from "../../../../../assets/benefits/location_2.png"

const ControllerButton = (props) => {

  const Auth = useContext(AuthContext).authenticatedUser;
  const isCurrentLevel = Auth && Auth.data.level === props.card.no;


  return (
    <div>
      <div className={styles.purchase_button_wrapper}>
        <Button onSubmit={props.onSubmit} color={isCurrentLevel && "#EE7D15"} height="auto" border={!props.isLoading&&"3px solid #EE7D15"}>
          <div className={styles.innner_upgrade}>
            {
              props.isLoading?
                <Bounce size="1.5rem" color="#EE7D15" />
                :
                <>
                  <img src={isCurrentLevel ? share_icon : unlock_icon} alt='unlock'/>
                  <h1 style={{ color: isCurrentLevel && "white" }}>{isCurrentLevel ? "Share place" : "Unlock"}</h1>
                </>
            }
          </div>
        </Button>
      </div>
    </div>
  )
 
}

export default ControllerButton