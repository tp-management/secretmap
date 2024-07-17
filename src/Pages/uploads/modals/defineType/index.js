import React from 'react'
import styles from "./defineType.module.css";
import FlexBox from '../../../../components/shared/UI/typesOfPlaces';

const DefineType = (props) => {

  const onChangeState = (value) => {
    if(!value.length > 0)return;
    props.onSubmit(value);
    return props.onClose ? props.onClose() : null;
  }

  return (
    <div className={styles.wrapper}>
      <FlexBox onChangeState={onChangeState} />
    </div>
  )
}

export default DefineType