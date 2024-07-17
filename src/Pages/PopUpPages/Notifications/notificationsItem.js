import React from 'react'
import styles from "./notificationsItem.module.css";
import icon from "../../../assets/friends_inviting_icon.png"

const NotificationsItem = ({item}) => {
    return (
    <div className={styles.container}>
        <img src={item.icon || icon} alt='' />
        <p>{item.text}</p>
    </div>
  )
}

export default NotificationsItem