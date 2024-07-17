import React from 'react'
import styles from "./genderSelector.module.css";

const GenderSelector = (props) => {

  const genderList = [
    "Women", "Man", "Other"
  ]

  const genderClickHandler = (gender) => {
    return props.onSubmit(gender);
  }

  return (
    <>
      <div className={styles.modal_content}>
        <ul>
          {genderList.map(option => <h1 key={option} onClick={genderClickHandler.bind(null,option)}>{option}</h1>)}
        </ul>
      </div>
    </>
  )
}

export default GenderSelector