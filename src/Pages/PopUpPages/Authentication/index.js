import React, { useState } from 'react'
import LoadingSpinner from '../../../components/shared/UI/LoadingSpinner';
import Modal from '../../../components/shared/UI/Modal'
import Form from './form'
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../../components/shared/UI/toast";

import { useContext } from "react";
import {AuthContext} from "../../../contextAPI/AuthContext";
import { Auth_Login, Auth_Signup } from "../../../components/utils/client/authenticate";
import { validate } from "./validators";


const Authentication = (props) => {

    const navigation = useNavigate();

    const User = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(props.signup ? false : true);
    const [errors, setErrors] = useState({});

    const FormSwitchHandler = () => {
        setIsLoginMode(!isLoginMode);
    }

    const FormCloseHandler = () => {
        setErrors({});
        return props.onClose ? props.onClose() : null;
    }


    const FormSubmitHandler = async(data) => {


        const email = data.email;
        const password = data.password;
        const name = data.name;

        setErrors(validate(data, (isLoginMode ? "login" : "signUp")));

        if(isLoginMode && (!email || !password))return;
        if(!isLoginMode && (!name || !email || !password))return;
    
        try {
            setIsLoading(true);
        
            const responseData = isLoginMode ? await Auth_Login(
                {
                    email: email,
                    password: password
                },
            ) : 
            await Auth_Signup(
                {
                    name: name,
                    email: email,
                    password: password
                },
            )
        
            if(!responseData.status){
            throw new Error(responseData.message)
            }
    
            
            if(isLoginMode)User.login(responseData);
            if(!isLoginMode)User.signup(responseData);
            
            setIsLoading(false);
            
            if(props.onClose)props.onClose();

            if(!isLoginMode) return navigation("/new-member")

            // notify("logged In", "success");

            if(props.redirect){
                return navigation("/my-places")
            }

            
            else return;            
            // // // some session method to store token
            // // // some session method to store refresh token
    
            
        } catch (error) {
            setIsLoading(false)
            notify(error.message, "error");
        }
            
        
    }

    return (
        <>
        
            {
                isLoading ? <LoadingSpinner /> :
                <Modal
                    show={props.show}
                    onClose={FormCloseHandler}
                >
                    <Form 
                        onSubmit={FormSubmitHandler}
                        onSwithChMode={FormSwitchHandler}
                        isLoginMode={isLoginMode}
                        errors={errors}
                    />

                </Modal>
            }
        </>
    )
}

export default Authentication