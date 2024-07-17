import React from 'react'
import styles from "./filter.module.css";
import Button from '../../../../components/shared/UI/button/Button';
import { useNavigate } from 'react-router-dom';
// logos
import globe_logo from "../../../../assets/explore/filter/globe.png";
import popularity_logo from "../../../../assets/explore/filter/popularity.png";
import input_sign_logo from "../../../../assets/landing/expanded_logo.png";
import add_new_place_logo from "../../../../assets/signs/plus.png";
import { useState } from 'react';

import Modal from "../../../../components/shared/UI/Modal";
import SelectCountryModal from "../../../../components/shared/UI/Popups/selectCountryModal";
import SelectTypesModal from "../../../../components/shared/UI/typesOfPlaces";


const Filter = (props) => {

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const [countryValue, setCountryValue] = useState(props.CountryValue);
  const [showCountryModal, setShowCountryModal] = useState(false);

  const [typesValue, setTypesValue] = useState(props.typeValue);
  const [showTypesModal, setShowTypesModal] = useState(false);

  const closeAllModals = () => {
    setShowModal(false);
    setShowCountryModal(false);
    setShowTypesModal(false)
  }

  const submitCountryHandler = (value) => {
    closeAllModals();
    setCountryValue(value.name);
    return
  }

  const submitTypesHandler = (types) => {
    if(types.length < 1)return;

    closeAllModals();
    setTypesValue(types[0].value);
    return
  }

  const onOpenCountryModalHandler = () => {
    setShowModal(true)
    setShowCountryModal(true);
  }

  const onOpenTypesModalHandler = () => {
    setShowModal(true)
    setShowTypesModal(true);
  }

  const onSubmitFilter = () => {
    console.log("submiting filter: ", countryValue, " | ", typesValue);
    if(countryValue && props.onFilterByCountry)props.onFilterByCountry(countryValue);
    if(typesValue && props.onFilterByType)props.onFilterByType(typesValue);
    return
  }


  return (
    <div className={styles.container}>

      
      <Modal
        show={showModal}
        onClose={closeAllModals}
      >
        {showCountryModal && <SelectCountryModal onSubmit={submitCountryHandler} />}
        {showTypesModal && 
        <div className={styles.types_container}>
          <SelectTypesModal onChangeState={submitTypesHandler} />
        </div>
        }
      </Modal>

      <div className={styles.btn_container}>
        <Button height="auto" color="#EE7D15" onSubmit={onSubmitFilter}>
          <h1>Search</h1>
        </Button>
      </div>

      <div className={styles.filter_body}>

        <div onClick={onOpenCountryModalHandler} className={styles.filter_option}>
          <h2>Country</h2>

          <div >
            <img src={globe_logo} alt='globe' />
            <p>{countryValue ? countryValue : "Where to"}</p>
            <img style={{ width: "1.5rem ", alignSelf: "center"}} src={input_sign_logo} alt='input' />
          </div>
        </div>

        <div onClick={onOpenTypesModalHandler} className={styles.filter_option}>
          <h2>Travel type</h2>

          <div>
            <img src={popularity_logo} alt='vacation' />
            <p>{typesValue ? typesValue : "Vacation"}</p>
            <img style={{ width: "1.5rem ", alignSelf: "center"}} src={input_sign_logo} alt='input' />
          </div>
        </div>


        
      </div>

      <div onClick={()=>navigate("/uploads")} className={styles._add}>
        {/* <p>If you dont find anything, share your experience if us!</p> */}
        <p>Discover something interesting around you, share it, and earn money</p>
        <img src={add_new_place_logo} alt='plus' />

        <h1>Share your place</h1>
      </div>

    </div>
  )
}

export default Filter