import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import homeLinkLogo from "../../../assets/home-link-logo.png"
import styles from './NavLinks.module.css';
import "./onFocusStyles.css"
import ShareNewPlace from '../../../Pages/PopUpPages/ShareNewPlace';


const NavLinks = (props) => {

  const [showUploadsModal, setShowUploadsModal] = useState(false);

  return <ul className={styles.nav_links_container}>

    <li className={`onFocus ${styles.home_start}`}>
      <NavLink to="/" >
        <img alt='home-logo' src={homeLinkLogo} />
      </NavLink>
    </li>

    <li className="onFocus">
      <NavLink to="/explore" >
        Places
        <hr />
      </NavLink>
    </li>

    
    {
      showUploadsModal && <ShareNewPlace onClose={()=>setShowUploadsModal(false)} />
    }

    <li className="uploads">
      <NavLink onClick={()=>setShowUploadsModal(true)}>
        Uploads
        <hr />
      </NavLink>
    </li>

    <li className="onFocus">
      <NavLink  to="/social" >
        Social
        <hr />
      </NavLink>
    </li>

    {/* <li className="onFocus">
      <NavLink  to="/about" >
        AboutUs
        <hr />
      </NavLink>
    </li> */}

    <li className="onFocus">
      <NavLink  to="/rewards" >
        Rewards
        <hr />
      </NavLink>
    </li>

  </ul>
};

export default NavLinks;