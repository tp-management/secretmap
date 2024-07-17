import React from 'react'
import { useState } from 'react';
import styles from "./formInput.module.css"


const FormInput = (props) => {

    const [isTouched, setIsTouched] = useState(false);

    const onInputChangeHanlder = (e) => {
        props.onChange(e.target.value);
    }



    return (
        <div className={styles.wrapper}>
            {props.children}

            <div 
                className =
                {
                    `
                        ${styles.container}
                        ${(!props.isValid && styles.alert_validate) || (!props.value && !props.no_errors && isTouched && styles.alert_validate)}
                        ${styles.validate_input}
                    `
                }
                data-validate={props.message || "Required"}
            >


                {   props.type === "description" ? 
                    <textarea 
                        autoCapitalize="off"
                        style={{ minHeight: "6rem", paddingTop: "10px" }}
                        className={`${styles.input} ${props.value && styles.has_val}`}
                        onChange={onInputChangeHanlder} 
                        onBlur={()=>{setIsTouched(true)}}
                        value={props.value}
                    ></textarea>
                    :
                    <input 
                    
                        autoCapitalize="off"
                        onChange={onInputChangeHanlder} 
                        className={`${styles.input} ${props.value && styles.has_val}`} 
                        type={props.type || "text"}
                        onBlur={()=>{setIsTouched(true)}}
                        value={props.value}
                    />
                }

                <span 
                    className={styles.focus_input} 
                    data-placeholder={props.type==="date" ? null : (props.name || "Password")}
                >
                </span>


            </div>
        </div>
    )
}

export default FormInput