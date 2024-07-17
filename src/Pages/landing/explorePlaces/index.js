import React from 'react'
import styles from "./explorePlaces.module.css";
import Button from '../../../components/shared/UI/button/Button';

import share_icon from "../../../assets/landing/share_icon.png";
import exploe_icon from "../../../assets/landing/explore_icon.png";
import { useNavigate } from 'react-router-dom';

const ExplorePlaces = () => {


    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src={share_icon} alt=""/>
                    <p>
                        Upload photos and create a visual tapestry of your favorite spots, inviting fellow explorers to experience the world through your lens.
                    </p>
                    <div className={styles.btn_wrapper}>
                        <Button height="auto" color="#EE7D15" onSubmit={()=>{navigate("/uploads")}}>
                            <h1>Share</h1>
                        </Button>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src={exploe_icon} alt=""/>
                    <p>
                        Embark on a global exploration with TripWhoop. Discover hidden places, iconic landmarks, and local treasures shared by our community.
                    </p>
                    <div className={styles.btn_wrapper}>
                        <Button height="auto" color="#EE7D15" onSubmit={()=>{navigate("/explore")}}>
                            <h1>Explore</h1>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExplorePlaces