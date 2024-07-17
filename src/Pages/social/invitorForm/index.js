import React, {Fragment, useContext} from 'react';
import { useState } from 'react';
import Input from "../../../components/shared/UI/formInput";
import styles from "./invitorForm.module.css";
import Button from "../../../components/shared/UI/button/Button";
import { Create } from '../../../components/utils/invitings/create';
import { AuthContext } from '../../../contextAPI/AuthContext';
import where_input_icon from "../../../assets/social/where_input_icon.png";
import gender_icon from "../../../assets/social/gender_icon.png";
import about_input_icon from "../../../assets/social/about_input_icon.png";
import { useEffect } from 'react';
import InsideBounce from '../../../components/shared/UI/LoadingSpinner/InsideBounce';
import Modal from "../../../components/shared/UI/Modal";
import SelectCountry from "../../../components/shared/UI/Popups/selectCountryModal";
import GenderSelector from "../../../components/shared/UI/Popups/GenderSelector"

const InvitorForm = (props) => {

  const Auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [transparentModal, setTransparentModal] = useState(false);
  const token = Auth.isLoggedIn ? Auth.authenticatedUser.token.access_token : null  // for storing date value

  // for storing FinalPlaceValue value
  const [destinationValue, setDestinationValue] = useState("");
  const [genderValue, setGenderValue] = useState(null);
  const [openCountryModal, setOpenCountryModal] = useState(false);
  const [openGenderModal, setOpenGenderModal] = useState(false);

  const onDestinationChangeHandler = (value) => {
    setDestinationValue({
      flag: value.flag,
      name: value.name
    })

    setOpenCountryModal(false)
    setTransparentModal(false);
  }

  const onGenderChangeHandler = (value) => {
    setGenderValue(value);
    setOpenGenderModal(false)
    setTransparentModal(false);
  }

  const onOpenCountryModal = () => {
    setTransparentModal(true);
    setOpenCountryModal(true);
  }

  const onOpenGenderModal = () => {
    setTransparentModal(true);
    setOpenGenderModal(true);
  }
 
  // for storing about value
  const [aboutValue, setAboutValue] = useState("")
  const onAboutChangeHandler = (value) => setAboutValue(value)


  useEffect(() => {

    if(isLoading){
      setTimeout(() => {
        setIsLoading(false);
      }, 1300);

    }

  }, [isLoading])

  const handleSubmitShedule = async() => {

    if(!token) {
      return props.onSignUp()
    }
    if(!destinationValue || !aboutValue)return alert("Please fill out the form below")
    
    setIsLoading(true)
    try {
      
      const create_new_inviting = await Create(
        {
          destination: {
            flag: destinationValue.flag,
            name: destinationValue.name,
          },
          gender: "Man",
          about: aboutValue,
        },
        token
      );

      if(!create_new_inviting.status)return alert(create_new_inviting.message);

      return props.onClose();

    } catch (error) {
      console.log("error occured: ", error);
    }
  }
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div>
          <form className={`${styles.container} ${transparentModal && styles.transparent}`} onSubmit={(e) => {e.preventDefault()}}>

            <p className={styles.intro_paragraph}>
              Let's find the perfect companion for our upcoming odyssey!
            </p>

            <div className={styles.inputs_container}>
              <div className={styles.madal_icons}>
                <div onClick={onOpenCountryModal} className={styles.select_country}>
                  <img style={{ borderRadius: "10px", margin: "0 10px" }} src={where_input_icon} alt='' /> 
                  <p>{destinationValue ? `Going to ${destinationValue.name}` : "Where are you going?"}</p>
                </div>

                {/* <div onClick={onOpenGenderModal} className={styles.select_country}>
                  <img style={{ margin: "0 10px" }} src={gender_icon} alt='' /> 
                  <p>{genderValue ? `Looking for ${genderValue}` : "prefered gender?"}</p>
                </div> */}

              </div>

              <Modal
                show={openCountryModal || openGenderModal}
                onClose={() => {
                  setTransparentModal(false);
                  setOpenCountryModal(false);
                  setOpenGenderModal(false);
                }}
                bgColor="transparent"
              > 
                {openCountryModal &&
                  <SelectCountry onSubmit={onDestinationChangeHandler}/>
                }

                {openGenderModal &&
                  <GenderSelector onSubmit={onGenderChangeHandler}/> 
                }
              </Modal>

              <Input 
                type="description"
                value={aboutValue}
                isValid={true} 
                name="Tell us more!"
                onChange={onAboutChangeHandler}
              >
                <img style={{ width: "10px", visibility: "hidden"}} src={about_input_icon} alt='' />
              </Input>
            </div>

            
            <div className={styles.submit_btn}>
              <Button color="#EE7D15" onSubmit={handleSubmitShedule}>
                <h1 style={{ color: "white" }}>{`${token ? "Shedule" : "Login"}`}</h1>
              </Button>
            </div>

          </form>
        </div>
        {
          isLoading && 
          <InsideBounce />
        }
      </div>
    </Fragment>
  ) 
}

export default InvitorForm