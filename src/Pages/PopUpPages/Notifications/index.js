import React from 'react'
import styles from "./notifications.module.css";
import Modal from "../../../components/shared/UI/Modal";
import notifications_logo from "../../../assets/dropDown/notifications.png";
import NotificationsList from "./notificationsList";
import { Remove } from '../../../components/utils/Notifications/remove';
import { useContext } from 'react';
import {AuthContext} from "../../../contextAPI/AuthContext";
import {notify} from "../../../components/shared/UI/toast"

const Notifications = (props) => {

  const Auth = useContext(AuthContext).authenticatedUser;

  const onCloseHandler = () => {
    props.onClose();
    const deleteAllNotifications = async()=>{
      if(!Auth || !Auth.token)return;
      try {
        const CleanNotifications = await Remove(Auth.token.access_token)
        if(!CleanNotifications.status)throw new Error(CleanNotifications.message);
      } catch (error) {
       return notify(error.message || "Cannot read notifications", "warning");
      }
    }
    
    deleteAllNotifications();
  }

  return (
    <Modal 
      show={props.show}
      onClose={onCloseHandler}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <img className={styles.logo} src={notifications_logo} alt='' />
          </div>
        </div>
        <NotificationsList data={props.notifications} />
      </div>
    </Modal>
  )
}

export default Notifications