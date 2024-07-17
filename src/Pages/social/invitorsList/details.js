import React, { useContext, useEffect, useState } from 'react'
import Button from "../../../components/shared/UI/button/Button";
import { AuthContext } from '../../../contextAPI/AuthContext';
import styles from "./details.module.css";
import earth_logo from "../../../assets/ripple.png";
import {deleteInviteById} from "../../../components/utils/invitings/delete";
import InsideBounce from '../../../components/shared/UI/LoadingSpinner/InsideBounce';
import delete_icon from "../../../assets/social/delete_icon.png";
import Modal from '../../../components/shared/UI/Modal';
import ShowContactsAlert from "./showContactsAlert";
import { notify } from '../../../components/shared/UI/toast';
import {ShowContacts} from "../../../components/utils/invitings/contacts"

const InvitingDetails = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [showContacts, setShowContact] = useState(false);

  useEffect(() => {

    if(isLoading){
      setTimeout(() => {
        setIsLoading(false);
      }, 1100);

    }

  }, [isLoading])

  const Auth = useContext(AuthContext);
  const token = Auth && Auth.authenticatedUser && Auth.authenticatedUser.token.access_token;
  if(!props.invite)return;
  const isCreator = (Auth.authenticatedUser && Auth.authenticatedUser.data._id) === props.invite.user_id._id;

  const submitAlertHandler = async() => {
    setShowAlert(false);
    setShowContact(true);
  
    const showContectsReq = await ShowContacts({inviting_id: props.invite._id}, token);
    if(!showContectsReq.status){
      notify(showContectsReq.message || "Please contact us", "error")
      return setShowContact(false);
    }

    const {user} = showContectsReq.data;
    if(!user)return notify("Cannot update user automatically", "error");

    Auth.update({
      data: user, 
      token: 
      {
        access_token: user.access_token,
        refresh_token: user.refresh_token
      } 
    })
    
  }

  const SubmitButtonHandler = async() => {

    if(!Auth.authenticatedUser)return props.onSignUp();

    if(isCreator){
      setIsLoading(true)

      try {
        const deleteInviting = await deleteInviteById(props.invite._id, Auth.authenticatedUser.token.access_token);
        if(!deleteInviting.status){

          if(deleteInviting.message === "Unauthorized")Auth.logout();
          props.onClose();
          return alert(deleteInviting.message);
        }
      } catch (error) {
        alert(error)
      }
    }
    else{
      if(!token)return;
      setShowAlert(true);
    }
  }

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <div className={styles.user_bar}>
          <img src={`${props.invite.user_id.avatar}`} alt='' />

          <div className={styles.name_country}>
            <h1>{`${props.invite.user_id.name}`}</h1>
            <div className={styles.user_country}>
              <img src={props.invite.user_id.country.flag} alt='flag'/>
              <p>{props.invite.user_id.country.name}</p>
            </div>
          </div>
        </div>

        <div className={styles.destination}>
          <img src={earth_logo} alt='' />
          <h1>GOING TO: <span>{`${props.invite.destination.name}`.toUpperCase()}</span></h1>
        </div>
      </div>

      {/* <div className={styles.gender_content}>
        <h1>Looking for {props.invite.gender}</h1>
      </div> */}

      <div className={styles.description}>
        <p>
          {props.invite.about}
        </p>
      </div>

      {
        !showContacts &&
        <div className={styles.btn_wrapper}>
          <Button 
            height="auto"
            color={`${isCreator ? "white" : "#EE7D15"}`} 
            onSubmit={SubmitButtonHandler}
          >
            
            {
              isCreator ? 
              <img src={delete_icon} alt='' />
              :
              <h1 style={{ color: "white"}}>
                Show Contacts
              </h1>
            }
          </Button>
        </div>
      }
      
      { 
        showContacts && Auth.authenticatedUser &&
        <div className={styles.contacting_information}>
          <h1>Email address <span>{props.invite.user_id.email}</span></h1>
        </div>
      }

      <Modal 
        onClose={()=>{setShowAlert(false)}}
        show={showAlert} 
      >
        <ShowContactsAlert onGo={submitAlertHandler} />
      </Modal>

      {
        isLoading && 
        <InsideBounce />
      }
    </div>
  )
}

export default InvitingDetails