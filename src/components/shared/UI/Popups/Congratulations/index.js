import React, { useContext, useState } from 'react'
import styles from "./congratulations.module.css";
import { notify } from '../../toast';
import { useEffect } from 'react';
import { AuthContext } from '../../../../../contextAPI/AuthContext';
import ConfettiExplosion from 'react-confetti-explosion';
import congrats_icon from "../../../../../assets/congrats.png"

const Congratulations = (props) => {

    const [timeLine, setTimeLine] = useState(4);
    const Auth = useContext(AuthContext);

    useEffect(()=>{

        const onCompleteHandler = async()=>{
      
        //   if(!create_new_donation.status)return notify(create_new_donation.message, "error")

          
        // Auth.update({
        //     data: create_new_donation.data, 
        //     token: 
        //     {
        //       access_token: create_new_donation.data.access_token,
        //       refresh_token: create_new_donation.data.refresh_token
        //     } 
        //   })
        }
    
        setTimeout(() => {
            if(timeLine === 4){
                onCompleteHandler();
            }
            setTimeLine(timeLine - 1);
            if(timeLine === 2){
                // setTimeLine(4)
                return props.onClose()
            }
        }, 450)
      })

    return (
        <div className={styles.container}>
            <div className={styles.middle_anime}>
                <ConfettiExplosion zIndex={5} />
            </div>
            <img src={congrats_icon} alt='' />
            <div className={styles.content_body}>
                <p>
                    {props.message}
                </p>
                <p className={styles.close_label}>
                    Closes after <span>{timeLine}</span> seconds..
                </p>
            </div>
        </div>
    )
}

export default Congratulations