import React from 'react'
import styles from "./userPanel.module.css";
import { useContext } from 'react';
import { AuthContext } from '../../contextAPI/AuthContext';
import points_icon from "../../assets/profile/points_icon.png";

const UserPanel = ({user}) => {

    const Auth = useContext(AuthContext).authenticatedUser;
    console.log("Auth [Profile]: ", Auth);

    if(!user || !user.name)return;
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.user_content}>
                <div className={styles.user_avatar}>
                    <img src={user.avatar} alt='Profile'/>
                    {/* <p style={{ textAlign: "center" }}>Edit</p> */}
                </div>
                
                <div className={styles.profile_name_email}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            </div>
            
            <div className={styles.country}>
                <img src={user.country.flag} alt=''/>
                <h1><span>{user.country.name}</span></h1>
            </div>

        </div>
    )
}

export default UserPanel