import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Backdrop.module.css';



const Backdrop = props => {
  
  const onClickHandler = () => {
    return props.onClick ? props.onClick() : null;
  }

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={onClickHandler}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
