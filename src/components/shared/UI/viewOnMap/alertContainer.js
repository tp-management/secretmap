import React, { useContext, useState } from 'react'
import styles from "./alertContainer.module.css"
import Button from '../button/Button';

import close_icon from '../../../../assets/benefits/close_popup.png';
import gift_icon from "../../../../assets/gift_icon.png";

import alert_submited_logo from "../../../../assets/map_alert_logo.png";
import { AuthContext } from '../../../../contextAPI/AuthContext';
import { useNavigate } from 'react-router-dom';
import { notify } from '../toast';

const AlertContainer = (props) => {
    const Auth = useContext(AuthContext).authenticatedUser;
    const navigate = useNavigate();
    const [submited, setSubmited] = useState(false);

    console.log("props: ", props)

    const onGoHandler = async() => {
        if(!Auth)return;
        if(Auth.data.points < 3) {
            notify("Get more bonus points", "warning")
            return navigate("/benefits");
        }
        setSubmited(true);

        return props.onGo();
        // const timer = setTimeout(() => {
        // }, 1200);

        // return timer
    }
    
    return (
    <div className={styles.modal_content}>

            <div className={styles.icon_wrapper}>
                <img src={require(`../../../../assets/benefits/advanced.png`)} alt='' />
            </div>

            <div className={styles.close_btn} onClick={props.onClose}>
                <img src={close_icon} alt='' />    
            </div>

            <>    
                <div className={styles.purchase_container}>
                    <p>This review is rated: </p>
                    <img src={gift_icon} alt='' />
                    <p>
                        32 bonuses
                    </p>
                </div>

                <div className={styles.balance_container} style={{ marginTop:Auth ? "0" : "1rem" }}>
                    <p style={{ marginRight:!Auth && "8px" }}>My Bonuses: 
                    {
                        Auth && <span>{Auth.data.points}</span>
                    }
                    </p>

                </div>
            </>

            <div className={styles.btn_wrapper}>
                <Button height="auto" color="#F08D32" onSubmit={()=>{onGoHandler()}}>
                    <h1>continue</h1>
                </Button> 
            </div>
            
            {/* {Auth && !props.unlocked && !props.hidden &&  <ControllerButton {...props} onSubmit={onSubmitHandler} />} */}

        </div>
  )
}

export default AlertContainer