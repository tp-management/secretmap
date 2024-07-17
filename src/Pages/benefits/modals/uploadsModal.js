import React from 'react'
import BenefitsModalHeader from "./header";
import styles from "./modals.module.css";
import Button from "../../../components/shared/UI/button/Button";
import { useNavigate } from 'react-router-dom';
import PlaceIcon from '../../../assets/benefits/location.png';

const UploadsModal = (props) => {
    const navigate = useNavigate();


    return (
        <>
            <BenefitsModalHeader header="Get Points by sharing">
                <img src={PlaceIcon} alt='share place'/>
            </BenefitsModalHeader>

            <div className={styles.list_container}>
                <div className={styles.list_item}>
                    <div className={styles.points_item_header}>
                        <span />
                        <h1>Uploads</h1>
                    </div>
                    <div>
                        <p>Get 4 bonus points every time you share unique place</p>
                    </div>
                </div>

                <div className={styles.list_item}>
                    <div className={styles.points_item_header}>
                        <h1>Donations</h1>
                    </div>
                    <div>
                        <p>Get bonus points when people donates on places you shared!</p>
                    </div>
                </div>


                <div className={styles.list_btn}>
                    <Button onSubmit={()=>navigate("/uploads")} height="auto" color="#F08D32">
                        <h1 style={{ color: "white", padding: "10px 5px" }}>
                            Share place
                        </h1>
                    </Button>
                </div>

                <div style={{ marginLeft: "1rem" }} className={styles.list_btn}>
                    <Button onSubmit={props.onClose} height="auto" color="#e82c5b">
                        <h1 style={{ color: "white", padding: "10px 5px" }}>
                            Close
                        </h1>
                    </Button>
                </div>
                
            </div>

        </>
    )
}

export default UploadsModal