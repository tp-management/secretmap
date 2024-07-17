import React,{useContext, useState} from 'react'
import Input from '../../../UI/formInput';
import Button from "../../../UI/button/Button";
import styles from "./contact.module.css";
import {AuthContext} from "../../../../../contextAPI/AuthContext";
import header_logo from "../../../../../assets/landing/about_us_text_decoration.png";
import {SendMessage} from "../../../../utils/message"
import { notify } from '../../toast';

const ContactUs = (props) => {
  
  const Auth = useContext(AuthContext);

  const [emailValue, setEmailValue] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [messageValue, setMessageValue] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);

  const handleMessageChange = inp => setMessageValue(inp)
  const handleEmailChange = inp => setEmailValue(inp)

  const handleSubmit = async()=>{
    if(!Auth.authenticatedUser){
      if(!emailValue.includes("@"))setIsEmailValid(false);
      else setIsEmailValid(true)
    }

    try {
      setIsSubmited(true);

      const message_response = await SendMessage({email: emailValue, text: messageValue},(Auth.authenticatedUser && Auth.authenticatedUser.token.access_token) || null);
      if(!message_response.status)throw new Error(message_response.message);
      notify(message_response.message, "success");
      return props.onClose();
    } catch (error) {
      setIsSubmited(false)
      return notify(error.message || "Cannot send message","error");
    }

  }
  

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <div className={styles.header_wrapper}>
          <img src={header_logo} alt='' />
          <div>
            <h1>Contact Us</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className={styles.auth_header}>
        <p>
          {
            Auth.authenticatedUser ? 
            "Your feedback matters. We're listening and ready to assist you. Contact us and let's make a difference."
            :
            "Reach out to our team for assistance!"
          }
        </p>
      </div>
      

      <form className={styles.contact_form} onSubmit={(e)=>e.preventDefault()}>
        {
          !Auth.authenticatedUser && !isSubmited &&
          <Input type="email" name="Your email" value={emailValue} onChange={handleEmailChange} isValid={isEmailValid}>
            <img src='https://www.svgrepo.com/show/39559/message.svg' alt='' style={{ width: "1rem", visibility: "hidden" }} />
          </Input>
        
        }

        {
          !isSubmited &&
          <Input name="Your Message" type="description" value={messageValue} onChange={handleMessageChange} isValid={true}>
            <img src='https://www.svgrepo.com/show/39559/message.svg' alt='' style={{ width: "1rem", visibility: "hidden" }} />
          </Input>
        }

        <div className={styles.form_submit_btn}>
          <Button onSubmit={handleSubmit} height="auto" color={"#F08D32"}>
            <h1 style={{ color:"white", padding: "10px 5px" }}>{isSubmited ? "Sending..." : "Send"}</h1>
          </Button>
        </div>

      </form>

    </div>
  )
}

export default ContactUs