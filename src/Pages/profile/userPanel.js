import React from 'react'
import styles from "./userPanel.module.css";
import { useContext } from 'react';
import { AuthContext } from '../../contextAPI/AuthContext';
import points_icon from "../../assets/profile/points_icon.png";

const UserPanel = ({user}) => {

    const Auth = useContext(AuthContext).authenticatedUser;

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
            
            <div className={styles.points}>
                <img src={points_icon} alt=''/>
                <h1>Active Points <span>{user.points}</span></h1>
            </div>

        </div>
    )
}

export default UserPanel