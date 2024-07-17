import React, { useEffect, useState, useContext } from 'react';
import NavHeader from './NavHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from '../shared/UI/Backdrop';
import styles from './navigation.module.css';
import {AuthContext} from "../../contextAPI/AuthContext"
import socket from '../utils/SocketService';
import { notify } from '../shared/UI/toast';
import { useLocation } from 'react-router-dom';


const MainNavigation = props => {

  const updateUser = useContext(AuthContext);
  const Auth = updateUser.authenticatedUser;
  const location = useLocation();
  const [notifications, setNotifications] = useState(null);

  useEffect(() => {

    socket.on('notifications', (data) => {
      
      if(Auth && Auth.data._id === data.uid){
        if(data.updated_user){ // needs to be reviewed and fixed (WTF..)
          updateUser.update({
            data: data.updated_user, 
            token: 
            {
              access_token: data.updated_user.access_token,
              refresh_token: data.updated_user.refresh_token
            } 
          });
        }
        setNotifications(data.notifications.messages)
        if(data.delete)return;
        notify("New notification", "success")
      }
    });

    // // Clean up the socket event listeners when the component unmounts
    return () => {
      socket.off('notifications');
    };
  
  });
  
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };


  return (
    <>
    { location.pathname !== "/new-member" &&
      <div className={styles.navContainer}>
      
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <NavLinks />
        </SideDrawer>

        <NavHeader notifications={notifications || (Auth && Auth.data.notifications.messages)} onMobile={openDrawerHandler} />

      </div>
    }
    </>
  );
};

export default MainNavigation;
