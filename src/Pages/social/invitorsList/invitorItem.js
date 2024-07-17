import Button from '../../../components/shared/UI/button/Button'
import earthLogo from "../../../assets/your-trip/earth_logo.png"
import styles from "./item.module.css";
import React, {useState} from 'react'
import InvitingDetails from "./details";
import Authentication from "../../PopUpPages/Authentication/index";
import Modal from "../../../components/shared/UI/Modal";


const InvitorItem = (props) => {

  const [showDetails, setShowDetails] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  // console.log("item: ", props.invite)

  return (
    <div>

      <div className={styles.item_container}>
          
          <div className={styles.user_info}>
            <img className={styles.user_image} src={props.invite.user_id.avatar} alt="" />
            <div className={styles.user_content}>
              <h1>{props.invite.user_id.name}</h1>
              { props.invite.user_id.country && props.invite.user_id.country.name &&
                <div className={styles.user_country}>
                  <img src={props.invite.user_id.country.flag} alt='flag'/>
                  <p>{props.invite.user_id.country.name}</p>
                </div>
              }

            </div>
          </div>

          <div className={styles.details}>
            <img src={earthLogo} alt="" />
            <h1 className={styles.directions_header}>GOING TO: <span style={{ color: "#EE7D15", paddingLeft: "5px" }}>{`${props.invite.destination.name}`.toUpperCase()}</span></h1>
            <div className={styles.details_btn}>
              <Button height="auto" onSubmit={()=>setShowDetails(true)} color="#2C2B2A">
                <h1>Details</h1>
              </Button>

              <Authentication show={showSignUpForm} no_redirect onClose={()=>{setShowSignUpForm(false); setShowDetails(true)}}/>

              <Modal
                show={showDetails}
                onClose={()=>setShowDetails(false)}
              >
                <InvitingDetails 
                  invite={props.invite} 
                  onClose={()=>setShowDetails(false)} 
                  onSignUp={()=>{setShowDetails(false); 
                  setShowSignUpForm(true)}} 
                />
              </Modal>
            </div>
          </div>
      </div>

    </div>
  )
}

export default InvitorItem