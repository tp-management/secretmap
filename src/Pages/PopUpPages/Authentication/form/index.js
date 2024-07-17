import React, { useState } from 'react'
import styles from "./form.module.css"
import FormBody from './formBody'

const Form = (props) => {

	

	return (

		<div className={`${styles.wrapper}`}>

			<div className={`${styles.form_container}`}>

				<FormBody {...props} />

			</div>

			<div className={styles.background}>
				<div className={styles.inner_image}></div>
				<div className={styles.background_filter}></div>
			</div>
		</div>
	)
}

export default Form