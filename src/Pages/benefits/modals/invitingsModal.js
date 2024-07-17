import React, { useContext, useState } from 'react'
import { MdGroups } from 'react-icons/md';
import BenefitsModalHeader from './header';
import styles from "./invitings.module.css";
import FormInput from "../../../components/shared/UI/formInput";
import Button from '../../../components/shared/UI/button/Button';
import submitedIcon from "../../../assets/submit-logo.png";
import {AuthContext} from "../../../contextAPI/AuthContext";
import {notify} from "../../../components/shared/UI/toast";
import {Friends} from "../../../components/utils/benefits/friends";
import Envelope from '../../../assets/benefits/envelope.png';


const InvitingsModal = (props) => {

    const [emailValue, setEmailValue] = useState("");
    const [isSubmited, setIsSubmited] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const Auth = useContext(AuthContext)

    const onSubmitHandler = async() => {
        if(!Auth.isLoggedIn) return notify("Please Sign In", "warning")
        setIsLoading(true)

        try {
            const friendsReq = await Friends({email: emailValue},Auth.authenticatedUser.token.access_token);
            if(!friendsReq.status)throw new Error(friendsReq.message);
            notify(friendsReq.message, "success");
            setIsLoading(false);
            return setIsSubmited(true);
        } catch (error) {
            setIsLoading(false);
            return notify(error.message || "Please try another email", "error");
        }
    };

    const onBackHandler = () => {
        setEmailValue("");
        setIsSubmited(false);
    }

  return (
    <div>
        {
            !isSubmited ?
            <>
                <BenefitsModalHeader header="Get Points By Inviting Your Friends">
                    <img src={Envelope} alt='Invite friends'/>
                </BenefitsModalHeader>
                

                <div className={styles.list_container}>
                    <div className={styles.subheader}>
                        <p style={{ lineHeight:"normal" }}>Don't miss opportunity to earn extra rewards and enhance your experience on our platform. Start inviting your friends today and unlock a world of possibilities!</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.enter_email}>
                            <h1>Enter your friend's email address:</h1>
                            <div className={styles.card_input}>
                                <FormInput value={emailValue} onChange={(inp)=>setEmailValue(inp)} name="email" isValid={true}>
                                    <div style={{ padding:"5px" }} />
                                </FormInput>
                            </div>
                            <div className={styles.card_btn}>
                                <Button onSubmit={onSubmitHandler} height="auto" color="#F08D32">
                                    <h1>{isLoading ? "Loading..." : "Invite"}</h1>
                                </Button>
                            </div>
                            
                        </div>
         
                        <p className={styles.footer}>

                        </p>
                    </div>
                </div>
            </>
            :
            <>
                <img className={styles.submited_icon} src={submitedIcon} alt='' />
                <h1 className={styles.submited_header}>Invited!</h1>
                                
                <p className={styles.note}>
                    <span>Note</span>
                    {`You will receive 5 bonus points to your balance as soon as ${emailValue} will join TripWhoop.`}
                </p> 

                <div className={styles.submited_btns}>
                    <div className={styles.submt_button}>
                        <Button onSubmit={onBackHandler} height="auto" color="#F08D32" >
                            <h1>Invite next</h1>
                        </Button>
                    </div>

                    <div style={{ marginLeft: "5px" }} className={styles.submt_button}>
                        <Button onSubmit={props.onClose} height="auto" color="#F08D32">
                            <h1>Close</h1>
                        </Button>
                    </div>
                </div>

            </>
        }
    </div>
)
}

export default InvitingsModal