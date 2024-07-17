import React, { useEffect, useState } from 'react'
import Modal from '../../../../components/shared/UI/Modal';
import SelectCountryModal from '../../../../components/shared/UI/Popups/selectCountryModal';
import GenderSelector from '../../../../components/shared/UI/Popups/GenderSelector';
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../../../components/shared/UI/toast";
import Button from '../../../../components/shared/UI/button/Button';
import styles from "./defineUserSettings.module.css";
import Header from '../header';
import ConfettiExplosion from 'react-confetti-explosion';

const DefineUserSettings = (props) => {

  const [isModalActive, setIsModalActive] = useState(false);

  const [genderValue, setGenderValue] = useState(null);
  const [openGenderModalActive, setOpenGenderModalActive] = useState(false);

  const [countryValue, setCountryValue] = useState(null);
  const [openCountryModalActive, setOpenCountryModalActive] = useState(false);

  const [fellowValue, setFellowValue] = useState(false);
  const [homeStayValue, setHomeStayValue] = useState(false);

  const [isFinished, setIsFinished] = React.useState(false);


  const GenderInputActivateHandler = () => {
    setIsModalActive(true);
    setOpenGenderModalActive(true);
  }

  const SubmitGenderModal = (gender) => {
    closeModalHandler();
    setGenderValue(gender)
  }



  const CountryInputActivateHandler = () => {
    setIsModalActive(true);
    setOpenCountryModalActive(true);
  }

  const SubmitCountryModal = (country, status) => {
    closeModalHandler();
    if(!status)console.log("err");
    setCountryValue({
      flag: country.flag,
      name: country.name
    })
  }


  const closeModalHandler = () => {
    setIsModalActive(false)
    setOpenCountryModalActive(false);
    setOpenGenderModalActive(false);
  }

  const onSubmitHandler = (e) => {
    if(e)e.preventDefault();

    if(!genderValue) return notify("Please define your gender", "error")
    if(!countryValue) return notify("Please define your country", "error")

    setIsFinished(true)
    
  }

  useEffect(()=>{

    const onCompleteHandler = () => {
      if(genderValue && countryValue)return props.onSubmit(
        {
          gender: genderValue, 
          country: countryValue, 
          settings: {
            looking_followed_travelers: fellowValue, 
            home_stay_programs: homeStayValue, 
            booking_opportunities: true
          }
        }
      )
      return
    }

    if(isFinished){
      setTimeout(() => {
        onCompleteHandler();
      }, 1000);

    }

  }, [isFinished]);




  return (
    <div className={styles.wrapper}>
      <Header 
        mainText={"About you"}
        subText={"Tell us about yourself to start building your profile"}
      />

      <form className={styles.form_container} onSubmit={onSubmitHandler}>
        
        <div className={styles.type_input} onClick={GenderInputActivateHandler}>
          {genderValue ? genderValue : "Gender"}
        </div>

        <div className={styles.type_input} onClick={CountryInputActivateHandler} >
          {countryValue ? countryValue.name : "Country"}
        </div>

        <Modal
          show={isModalActive}
          onClose={()=> {closeModalHandler()}}
        >
          {openCountryModalActive &&
            <SelectCountryModal onSubmit={SubmitCountryModal} onClose={closeModalHandler} /> 
          }

          {openGenderModalActive &&
            <GenderSelector onSubmit={SubmitGenderModal} onClose={closeModalHandler} /> 
          }
        </Modal>

        <div className={styles.settings}> 
            <div>
                <label htmlFor="fellow">I am looking for travel buddy</label>
                <input type="checkbox" name="IsAccepted" id="fellow" onChange={(el)=>{setFellowValue(el.target.checked)}} />
            </div>

            <div>
                <label htmlFor="homestay">I am interesting in Homestay program</label>
                <input type="checkbox" name="IsAccepted" id="homestay" onChange={(el)=>{setHomeStayValue(el.target.checked)}}/>
            </div>

        </div>

        <div style={{ margin: "14px auto"}}>
          <Button
              height="auto"  
              onSubmit={onSubmitHandler} 
              color="#EE7D15" 
            >
            <h1 style={{ padding: "0.7rem", color: "white" }}>Finish</h1>
          </Button>
        </div>

      </form>


      { isFinished &&
        <div className={styles.congrats}>
          {true && <ConfettiExplosion zIndex={5} />}
        </div>
      }
    </div>
  )
}

export default DefineUserSettings