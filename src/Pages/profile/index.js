import React, { useState, useContext, useEffect } from 'react'
import Card from '../../components/shared/UI/Card';
import {AuthContext} from "../../contextAPI/AuthContext";
import LoadingSpinner from "../../components/shared/UI/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../components/shared/UI/toast";
import { fetchUserPlaces } from '../../components/utils/places/fetchPlaces';
import ProfileComponet from './profileContent';
import { useParams } from 'react-router-dom';



const Profile = () => {
    const Auth = useContext(AuthContext);
    const [authPlaces, setAuthPlaces] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async() => {


            if(!Auth.authenticatedUser || !(Auth.authenticatedUser && Auth.authenticatedUser.token))return navigate("/");
            const Auth_places = await fetchUserPlaces(Auth.authenticatedUser.token.access_token)

            if(!Auth_places.status){
                notify(Auth_places.message, "error");
                Auth.logout();
                return navigate("/");
            }

            setAuthPlaces(Auth_places.data)


            setIsLoading(false);
        }

        fetchUserProfile();
    }, [])

    return (
        <>
        {
            (authPlaces && ! isLoading)  ?
            <Card>
                <ProfileComponet Auth={Auth.authenticatedUser}/>
            </Card>
            :
            <LoadingSpinner />
            
        }
        </>
    )
}

export default Profile