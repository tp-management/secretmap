import React, { useState } from 'react'
import styles from "./controllers.module.css";
import Button from '../../../components/shared/UI/button/Button';
import InvitorForm from '../invitorForm';
import Modal from "../../../components/shared/UI/Modal";
import Authentication from "../../PopUpPages/Authentication";


const Controllers = () => {

  const [openInviteForm, setOpenInviteForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  return (


    <div className={styles.controllers}>
        <Button onSubmit={()=>setOpenInviteForm(true)} color="#EE7D15">
            <h1 className={styles.btn_text}>Become invitor</h1>
        </Button>

        <div className={styles.middle_content}>
            <hr />
            <h1>Or</h1>
            <hr />
        </div>

        <Button color="#2C2B2A">
            <h1 className={styles.btn_text}>Join others</h1>
        </Button>

        <Authentication show={showSignUpForm} no_redirect onClose={()=>{setShowSignUpForm(false); setOpenInviteForm(true)}}/>

        <Modal
          show={openInviteForm}
          onClose={()=>setOpenInviteForm(false)}
        >
          <InvitorForm onClose={()=>setOpenInviteForm(false)} onSignUp={()=>{setOpenInviteForm(false); setShowSignUpForm(true)}} />
        </Modal>
    </div>
  )
}

export default Controllers