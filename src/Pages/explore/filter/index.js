import React from 'react'
import styles from "./filter.module.css";
import Button from '../../../components/shared/UI/button/Button';
import { useNavigate } from 'react-router-dom';
// logos
import country_logo from "../../../assets/explore/filter/country_logo.png";
import types_logo from "../../../assets/explore/filter/travel_type.png";
import input_sign_logo from "../../../assets/landing/expanded_logo.png";
import { useState } from 'react';

import Modal from "../../../components/shared/UI/Modal";
import SelectCountryModal from "../../../components/shared/UI/Popups/selectCountryModal";
import SelectTypesModal from "../../../components/shared/UI/typesOfPlaces";


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


      <div className={styles.filter_body}>

        <div onClick={onOpenCountryModalHandler} className={styles.filter_option}>
          <img src={country_logo} alt='globe' />
          <h1>Country</h1>

          <div >
            <p >{countryValue ? countryValue : "Where to"}</p>
            <img style={{ marginLeft:"5px", width: "1rem ", alignSelf: "center", opacity: "0.6"}} src={input_sign_logo} alt='input' />
          </div>
        </div>

        <div onClick={onOpenTypesModalHandler} className={styles.filter_option}>
          
          <img src={types_logo} alt='vacation' />
          <h1>Travel type</h1>

          <div>
            <p>{typesValue ? typesValue : "Vacation"}</p>
            <img style={{ marginLeft:"5px", width: "1rem ", alignSelf: "center", opacity: "0.6"}} src={input_sign_logo} alt='input' />
          </div>
        </div>

        <Button onSubmit={onSubmitFilter} height="auto" color="#EE7D15">
          <h1 style={{ color:"white", padding: "10px 0" }}>Search</h1>
        </Button>
        
      </div>

      <div className={styles.new_place_btn}>
        <Button height="auto" color="#EE7D15" onSubmit={()=>{navigate("/uploads")}}>
          <h1 style={{ color:"white", padding: "1rem 0" }}>Share new place</h1>
        </Button>
      </div>

    </div>
  )
}

export default Filter