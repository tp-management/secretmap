import React from 'react'
import styles from "./Button.module.css";
import ReactGA from 'react-ga4';

const Button = (props) => {


  const onClickHandler = () => {

    if(props.label)
    {
      console.log("label: ", props.label)
      ReactGA.event({
        category: 'User',
        action: 'Clicked the button',
        label:props.label
      });
    }

    return props.onSubmit();
  }

  return <div className={styles.wrapper}>
    <div 
      style={{ border: props.border }} 
      className={styles.container}
    >
      <button
        onClick={onClickHandler} 
        style={{ backgroundColor:props.color, height: props.height}} 
        className={styles.btn}
        type="submit"
      >
        {props.children}
      </button>
    </div>
  </div>
}


export default Button