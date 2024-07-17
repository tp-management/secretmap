import React, { useEffect, useState } from 'react'
import styles from "./bottom_nav.module.css";
import { useNavigate } from 'react-router-dom';
import filter_places_logo from "../../../assets/signs/filter.png";
import add_new_place_logo from "../../../assets/signs/plus.png";
import new_friends_logo from "../../../assets/signs/friends.png";
import Backdrop from '../../../components/shared/UI/Backdrop';
import ScrollDown from './scroll_down';
import SideDrawer from '../../../components/shared/UI/SideDrawer';
import Filter from '../filter/mobile';
import Button from '../../../components/shared/UI/button/Button';

const BottomNavigation = (props) => {

    const navigate = useNavigate();

    const [showFilterDrawer, setShowFilterDrawer] = useState(false);
    const [showArrow, setShowArrow] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowArrow(false);
        } else {
            setShowArrow(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.fixed_add_icon}>

            {showFilterDrawer && <Backdrop onClick={()=>setShowFilterDrawer(false)} />}

            <SideDrawer color="rgba(255, 255, 255, 1)" show={showFilterDrawer} >
                <Filter onClick={()=>setShowFilterDrawer(false)}/>
            </SideDrawer>

            <div className={styles.filter_section_button}>
                <Button height="auto" color="#EE7D15" onSubmit={()=>{navigate("/uploads")}}>
                    <h1 style={{ color:"white", padding: "1rem 0" }}>Share new place</h1>
                </Button>
            </div>

            {
                showArrow ? 
                <div className={styles.scrollDown_logo}> 
                    <ScrollDown />
                </div>
                :
                <div className={styles.controll_logos}>
                    <img style={{ marginRight:"12px" }} onClick={()=>setShowFilterDrawer(true)} alt='' src={filter_places_logo} />
                    <img onClick={()=>{navigate("/uploads")}} style={{ marginRight:"12px" }} src={add_new_place_logo} alt=''/>
                    <img onClick={()=>{navigate("/social")}} src={new_friends_logo} alt=''/>
                </div>
            }
        </div>
    )
}

export default BottomNavigation