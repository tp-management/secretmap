import React, { useState } from 'react'
import styles from "./body.module.css";

import header_logo from "../../../../assets/landing/about_us_text_decoration.png";
import username_icon from "../../../../assets/authentication/username_icon.png";
import email_icon from "../../../../assets/authentication/email_icon.png";
import password_icon from "../../../../assets/authentication/password_icon.png";
import save_icon from "../../../../assets/safe_icon.png";

import Button from '../../../../components/shared/UI/button/Button';
import FormInput from '../../../../components/shared/UI/formInput';


const FormBody = (props) => {

	const [nameValue, setNameValue] = useState("");
	const onCHageNameValueHandler = (value) => setNameValue(value);

	const [emailValue, setEmailValue] = useState("");
	const onCHageEmailValueHandler = (value) => setEmailValue(value);

	const [passwordValue, setPasswordValue] = useState("");
	const onCHagePasswordValueHandler = (value) => setPasswordValue(value);

	const formSubmitHandler = () => {
		props.onSubmit(props.isLoginMode ? {email: emailValue, password: passwordValue} : {email: emailValue, password: passwordValue, name: nameValue})
	}

	// Validations
	const ValidName = props.errors && props.errors.name ? false : true
	const ValidEmail = props.errors && props.errors.email ? false : true
	const ValidPassword = props.errors && props.errors.password ? false : true

	return (
		<div className={styles.container}>

			<div className={`${styles.header_wrapper} ${props.isLoginMode && styles.extra_header_space}`}>
				<img src={header_logo} alt='' />
				<div>
					<h1>{props.isLoginMode ? "Welcome back" : "SignUp"}</h1>
				</div>
			</div>

			{ 	!props.isLoginMode &&

				<p className={styles.sub_header}>
					Unlock a World of Benefits
					<br />
					Join Our Free Membership Program Today!
				</p>
			}

			<div className={styles.inputs_container}> 

				{ 	!props.isLoginMode &&

					<FormInput 
						value={nameValue}
						isValid={ValidName}
						name="Username"
						message={(!ValidName && ((props.errors && props.errors.name) || "Error")) || null}
						onChange={onCHageNameValueHandler}
					>
						<img style={{ margin: "0 1rem" }} src={username_icon} alt='' />
					</FormInput>
				}

				<FormInput 
					value={emailValue}
					isValid={ValidEmail}
					name="Email Address"
					message={(!ValidEmail && ((props.errors && props.errors.email) || "Error")) || null}
					onChange={onCHageEmailValueHandler}
				>
					<img style={{ margin: "0 1rem" }} src={email_icon} alt='' />
				</FormInput>

				<FormInput 
					value={passwordValue}
					isValid={ValidPassword}
					type="password"
					name="Password"
					message={(!ValidPassword && ((props.errors && props.errors.password) || "Error")) || null}
					onChange={onCHagePasswordValueHandler}
				>
					<img style={{ margin: "0 1rem" }} src={password_icon} alt='' />
				</FormInput>
				
			</div>			

			<div className={styles.btn_container}>
				<Button onSubmit={formSubmitHandler} color="#EE7D15" height="auto">
					<h1>{props.isLoginMode ? "Login" : "SignUp"}</h1>
				</Button>
			</div> 

			{
				props.isLoginMode ? 
				<p onClick={props.onSwithChMode} className={styles.footer}>Don't have an account? <span>Sign up</span></p> 
				:
				<p onClick={props.onSwithChMode} className={styles.footer}>Already a member? <span>Login</span></p>
			}

			{
				props.isLoginMode &&
				<div className={styles.safe_content}>
					<img src={save_icon} alt='' />
					<h1>This website is safe</h1>
				</div>
			}
			

		</div>
	)
}

export default FormBody

