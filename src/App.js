import Routing from './routers';
import React from "react";
import {AuthContext} from "./contextAPI/AuthContext";
import { useState, useCallback } from 'react'
import MainNavigation from "./components/navigation";
import { ToastContainer } from 'react-toastify';
import Footer from './components/shared/UI/Footer';
import ReactGA from "react-ga4";
import { useEffect } from 'react';
import socket from './components/utils/SocketService';
import Modal from './components/shared/UI/Modal';
import Congratulations from './components/shared/UI/Popups/Congratulations';



function App() {

  // const TRACKING_ID = 'G-E4QLGDLHF8'; 

  // ReactGA.initialize(TRACKING_ID);
  ReactGA.send("pageview");
  const [showPopUp, setShowPopUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authenticatedUser, setAuthenticatedUser] = useState();
  const [registrationData, setRegistrationData] = useState();



  const login = useCallback((user) => {
    if(!user.status === "success"){
      setIsLoggedIn(false);
      return;
    }
    const {response, token} = user.data;
    setIsLoggedIn(true)
    if(response.popups)setShowPopUp(true)
    setAuthenticatedUser({data: response, token: token})
  }, [])

  const signup = useCallback((user) => {
    if(!user.status === "success"){
      setIsLoggedIn(false);
      return;
    }
    const {response, token} = user.data;

    setRegistrationData({data: response, token: token})
  }, [])

  const update = useCallback(user => {
    const {data, token} = user;
    if(!data || !token){
      setIsLoggedIn(false);
      return;
    }
    setAuthenticatedUser({data, token})
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setAuthenticatedUser(null);
    setIsLoggedIn(false)
  }, [])


  useEffect(() => {

    if(!isLoggedIn || !authenticatedUser.data)return
    socket.on('popups', (data) => {
      if(authenticatedUser.data._id === data.user._id){
        update({
          data: data.user, 
          token: 
          {
            access_token: data.user.access_token,
            refresh_token: data.user.refresh_token
          } 
        })

        setShowPopUp(true)
      }
    });

    // // Clean up the socket event listeners when the component unmounts
    return () => {
      socket.off('popups');
    };
  
  }, [isLoggedIn]);


  return (
    <AuthContext.Provider value={{ isLoggedIn, authenticatedUser, registrationData, login, signup, logout, update }}>
      <MainNavigation />
      <Routing />
      <Footer />
      {authenticatedUser && authenticatedUser.data.popups.length > 0 &&
        <Modal 
          show={showPopUp}
          onClose={false}
        >
          <Congratulations onClose={()=>setShowPopUp(false)} message={authenticatedUser.data.popups[0]} />
        </Modal>
      }
      <ToastContainer />
    </AuthContext.Provider>
  )
}

export default App

