import React from 'react'
import styles from "./notificationsList.module.css";
import NotificationItem from "./notificationsItem";

const NotificationsList = ({data}) => {

  return (
    <div className={styles.container}>
      {
        (data && data.map && data.length > 0) ? 
        data.reverse().map((item, key) =>   
          <NotificationItem key={key} item={item} />
        )
        :
        <h1 className={styles.no_notifications}>
          You don't have any notifications yet
        </h1>
      }
    </div>
  )
}

export default NotificationsList