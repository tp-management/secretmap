import NewUser from '../PopUpPages/newUserModal';
import React, { useState } from 'react'

import Destinations from "./destinations";
import AboutUs from './aboutUs';

import Authentication from '../PopUpPages/Authentication';
import FellowTravelers from './FellowTravelers';
import ScrollToTop from '../../components/shared/UI/ScrollToTop/ScrollToTop';
import ExplorePlaces from './explorePlaces';
import ShareNewPlace from '../PopUpPages/ShareNewPlace';


const LandingMain = (props) => {

    const [showAuthenticationForm, setShowAuthenticationForm] = useState(false);

    return (
        <div>

            {
                props.signup_modal &&
                <NewUser />
            }

            {
                props.uploads_modal && <ShareNewPlace />
            }

            <Destinations/>
            <div style={{ backgroundColor:"rgba(242, 87, 26, 0.05)" }}>
                <ExplorePlaces />
                <FellowTravelers />
                <AboutUs />
            </div>

            {
                showAuthenticationForm &&
                <Authentication 
                    signup 
                    show 
                    onClose={()=>setShowAuthenticationForm(false)}
                />
            }
            <div>   
                <ScrollToTop/>
            </div>
            
        </div>
    )
}

export default LandingMain