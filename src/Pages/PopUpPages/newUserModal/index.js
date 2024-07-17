import { Update, UpdateSettings, UpdateInterests } from '../../../components/utils/user/update';
import LoadingSpinner from '../../../components/shared/UI/LoadingSpinner';
import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../../contextAPI/AuthContext';
import { notify } from "../../../components/shared/UI/toast";
import Modal from "../../../components/shared/UI/Modal";
import DefineUserSettings from './defineUserSettings';
import UserAvatar from "./defineUserAvatar/index";
import UserInterests from './defineUserInterests';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import styles from "./wrapper.module.css";



const NewUser = () => {
    const Auth = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!Auth.registrationData){
            notify("You do not have permission for this", "error");
            Auth.logout();
            return navigate("/");
        }
    })

    const [isLoading, setIsLoading] = useState(false);

    // declared states for showing or hiding modals
    const [showInterestsModal, setShowInterestsModal] = useState(true);
    const [showAvatarModal, setShowAvatarModal] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false);

    // declared states for storing data
    const [selectedInterestsData, setSelectedInterestsData] = useState([]);
    const [selectedAvatarData, setSelectedAvatarData] = useState(null);


    const backHandler = (page_number) => {
        if(page_number === 1){
            setShowAvatarModal(false);
            setShowInterestsModal(true);
        }

        if(page_number === 2){
            setShowSettingsModal(false);
            setShowAvatarModal(true);
        }
    }

    const onInterestsModalSubmit = (data) => {
        setShowInterestsModal(false);
        setShowAvatarModal(true);
        setSelectedInterestsData(data);
    }

    const onAvatarModalSubmit = (data) => {
        setShowSettingsModal(true);
        setShowAvatarModal(false);
        setSelectedAvatarData(data);
    }

    const onSettingsModalSubmit = (data) => {
        setShowSettingsModal(false);
        onRegistrationSubmit(data)
    }

    const onRegistrationSubmit = async (lastmodal) => {

        const {looking_followed_travelers,home_stay_programs,booking_opportunities} = lastmodal.settings;


        setIsLoading(true);

        const submit_settings_data = await UpdateSettings(
            {
                settings: 
                {
                    looking_followed_travelers,
                    home_stay_programs,
                    booking_opportunities
                }
            },
            Auth.registrationData.token.access_token
        )

        const submit_interests_data = await UpdateInterests(
            {
                interests: 
                selectedInterestsData
            },
            Auth.registrationData.token.access_token
        )

        const submit_update_data = await Update(
            {
                country:lastmodal.country,
                avatar: selectedAvatarData,
                gender:lastmodal.gender,
            },
            Auth.registrationData.token.access_token
        )

        if(!submit_update_data.status || !submit_settings_data.status || !submit_interests_data.status){
            setIsLoading(false);
            notify(submit_update_data.message || "please try again", "error");
            setShowInterestsModal(true);
            return
        }

        
        else if(submit_settings_data.status && submit_update_data.status && submit_interests_data.status){
            const user = {data: submit_update_data.data,token: Auth.registrationData.token};
            notify(submit_update_data.message, "success");
            console.log("created user: ", user)
            Auth.update(user);
            navigate("/")
        }

        return

    }
  
    return (
        <>
            <Modal
                show={true}
            >
                {
                    isLoading ? <LoadingSpinner /> :
                    <div className={styles.modal_content}>
                        {showInterestsModal && <UserInterests existing_data={selectedInterestsData || []} onSubmit={onInterestsModalSubmit} />}
                        {showAvatarModal && <UserAvatar onPrev={backHandler.bind(null, 1)} onSubmit={onAvatarModalSubmit} />}
                        {showSettingsModal && <DefineUserSettings onPrev={backHandler.bind(null, 2)} onSubmit={onSettingsModalSubmit} />}
                    </div>
                }
                
            </Modal>
        </>
    )
}

export default NewUser