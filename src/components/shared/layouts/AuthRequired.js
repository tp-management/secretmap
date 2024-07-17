import React, {useContext} from 'react'
import { AuthContext } from '../../../contextAPI/AuthContext'
import Authentication from '../../../Pages/PopUpPages/Authentication'
import { useState } from 'react'
import styles from "./AuthReaquired.module.css";
import { useEffect } from 'react';


const AuthRequired = (props) => {

    const Auth = useContext(AuthContext);
    const [showForm, setShowForm] = useState(false);

    const [securedContent, setSecuredContent] = useState(true);

    const clickHandler = () => {


        if(Auth.authenticatedUser){
            setSecuredContent(false);
            return props.onClick ? props.onClick() : null
        }

        if(!Auth.authenticatedUser){
            setSecuredContent(true)
            setShowForm(true);
        }

        return null;
    }


    const closeFormHandler = () => {
        setShowForm(false);
    }


    useEffect(()=>{
        if(Auth.authenticatedUser){
            setShowForm(false);
            setSecuredContent(false);
        }
    }, [securedContent, showForm])


    return (
        <>
            <div onClick={clickHandler} className={styles.props_wrapper}>
                {props.children}
                { 
                    securedContent &&
                    <div className={styles.props_secured}/>
                }
            </div>

            <Authentication
                signup
                show={showForm}
                onClose={closeFormHandler}
            />
        </>
    )
}

export default AuthRequired