import React, { useState, useContext } from 'react'
import styles from "./createTrip.module.css";
import Modal from '../../../components/shared/UI/Modal';
import { Create } from '../../../components/utils/places/create';
import Button from '../../../components/shared/UI/button/Button';
import { AuthContext } from '../../../contextAPI/AuthContext';
import InsideBounce from '../../../components/shared/UI/LoadingSpinner/InsideBounce';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../components/shared/UI/toast";
import AuthRequired from "../../../components/shared/layouts/AuthRequired";

// icons
// import map_icon from "../../../assets/map_icon.png";
// import photo_icon from "../../../assets/photo_icon_2.png";
import map_icon from "../../../assets/uploads/map_valid.png";
import income_icon from "../../../assets/uploads/income_valid.png";
import photo_icon from "../../../assets/uploads/camera_valid.png";

// submodals
import Location from '../../../components/shared/UI/map/location';
import ImageUpload from "./uploadImage";
import FormInput from '../../../components/shared/UI/formInput';
import DefineType from './defineType';
import axios from 'axios';


const CreateTrip = (props) => {

  const navigate = useNavigate();
  const [preparingImageUrl, setPreparingImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const Auth = useContext(AuthContext);
  const token = Auth.isLoggedIn ? Auth.authenticatedUser.token.access_token : null

  const [countryModal, setCountryModal] = useState(false);
  const [typesModal, setTypesModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const parentModalHidden = countryModal || locationModal || imageModal || typesModal;

  const onModalHide = () => {setCountryModal(false);setLocationModal(false);setImageModal(false);setTypesModal(false)}
  const onOpenTypesModal = () => setTypesModal(true);
  const onOpenLocationModal = () => {setLocationModal(true)};  
  const onOpenImageModal = () => setImageModal(true);

  // states and functions for validation
  const [typeInputError, setTypeInputError] = useState(false);
  const [locationInputError, setLocationInputError] = useState(false);
  const [imageInputError, setImageInputError] = useState(false);
  
  // states and functions for storing values
  const [typeValue, setTypeValue] = useState(null);
  const [descriptionValue, setDescriptionValue] = useState("");
  const [locationValue, setLocationValue] = useState(null);
  const [imageValue, setImageValue] = useState(null);

  // handlers for states
  const onSubmitType = (value) => {
    setTypeValue(value)
  };

  const onSubmitDescription = (value) => setDescriptionValue(value);
  const onSubmitLocationModal = (results) => {
    setLocationValue(results); 
    onModalHide()
  }
  const onSubmitImageModal = async(compressed, origin) => {
    setImageValue(compressed); 
    return onModalHide();
  }

  const onFormSubmitHandler = async() => {

    setTypeInputError(false);
    setLocationInputError(false);
    setImageInputError(false);
    if(!typeValue){setTypeInputError(true);return}
    if(!descriptionValue){return notify("Enter description", "warning")}    
    if(!locationValue){setLocationInputError(true);return}
    if(!imageValue){setImageInputError(true);return}
    if(!token)return notify("Please login", "warning")

    const {lat, lng} = locationValue;
    if(!lat || !lng){
      return notify("Please contact support team", "warning");
    }

    setPreparingImageUrl(true);
    setIsLoading(true)
    props.onProcessChange(true);

    const country_request = await (await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=en`)).json()
    const countryValue = country_request && country_request.address && country_request.address.country;

    if(!countryValue) {
      setLocationInputError(true);
      setLocationValue(null)
      return notify("Incorrect location", "warning");
    }

    const formData = new FormData()
    formData.append('file', imageValue)
    formData.append('upload_preset', 'e0rbdj0k')

    try {
      const getImageUrl = await axios.post("https://api.cloudinary.com/v1_1/dvmptmthb/upload", formData)
      if(!getImageUrl.data.secure_url)return notify(`Cannot verify image`, "warning")
      setPreparingImageUrl(false)

      const create_new_place = await Create({
        type: typeValue[0].value,
        description:descriptionValue,
        country:countryValue,
        lat:lat,
        lng:lng,
        image:getImageUrl.data.secure_url,
      },token);

      if(!create_new_place.status)throw new Error(create_new_place.message)
      navigate("/explore");
      return props.onClose();
      
    } catch (error) {
      return notify(error.message || "Please try again!", "error");
    }

  }


  return (
    <>
      <Modal 
        // bgColor="transparent"
        onClose={onModalHide}
        show={locationModal || imageModal || typesModal} 
      >
        {typesModal && <DefineType onClose={onModalHide} onSubmit={onSubmitType} />}
        {
          locationModal && 
            <Location 
              onSubmit={onSubmitLocationModal} 
              onClose={onModalHide}
            />
        }
        {imageModal && <ImageUpload curr_image={imageValue} onClose={onModalHide} onSubmit={onSubmitImageModal} />}

      </Modal>

      
      <div className={`${styles.container} ${parentModalHidden && styles.hidden}`}>
        {
          isLoading ?
          <>
            {
              preparingImageUrl ? 
              <div className={styles.preparing_url}>
                <h1>Veryfying...</h1>
                <p>This will take up to 20 seconds</p>
              </div>
              :
              <div className={styles.almost_there}>
                <div className={styles.almost_there_loader}>
                  <InsideBounce />
                </div>
                <h1>We are almost there...</h1>
              </div>

            }
          </>
          :

          <>
            <h1 className={styles.login_form_title}>Share Your Adventures</h1>

            <div className={styles.form_content}>
              <div onClick={onOpenTypesModal} style={{ border: `${typeInputError ? "2px solid rgb(209, 127, 127)" : "2px solid rgba(48, 47, 47, 0.3)"}` }} className={styles.select_type}>
                {typeValue ? 
                  <div> 
                    <img className={styles.input_icon} src={typeValue[0].icon} alt='' />
                    <span>{typeValue[0].value}</span>
                  </div>
                  :
                  <p style={{ padding: "10px" }}>Select type</p>
                }
              </div>

              <FormInput 
                isValid={true}
                type="description"
                name="Tell us about this place"
                value={descriptionValue}
                onChange={onSubmitDescription}
              >
                <div style={{ paddingLeft: "10px" }}></div>
              </FormInput>
                

              <div className={styles.logo_menu}>
                <img className={`${locationInputError && styles.icon_invalid} ${locationValue && styles.icon_valid}`} onClick={onOpenLocationModal} src={map_icon} alt="" />
                <img className={`${locationInputError && styles.icon_invalid} ${locationValue && styles.icon_valid}`} onClick={onOpenLocationModal} src={income_icon} alt="" />
                <img className={`${imageInputError && styles.icon_invalid} ${imageValue && styles.icon_valid}`} onClick={onOpenImageModal} src={photo_icon} alt="" />
              </div>
            </div>

            <div className={styles.btn_container} >
              <AuthRequired>
                <Button height="auto" onSubmit={onFormSubmitHandler} color={"rgba(238, 125, 21, 1)"}>
                  <h1>Continue</h1>
                </Button>
              </AuthRequired>
            </div>
          </>
        }
        

      </div>
    </>
  )
}

export default CreateTrip