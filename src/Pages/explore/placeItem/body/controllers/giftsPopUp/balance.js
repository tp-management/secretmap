import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../../../../contextAPI/AuthContext'
import styles from "./balance.module.css";
import boost_icon from "../../../../../../assets/explore/gifts_boost.png";
import { useNavigate } from 'react-router-dom';

const Balance = ({error}) => {

    const Auth = useContext(AuthContext).authenticatedUser;
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h1 style={{ color: error && "red" }}  className={styles.balance_header}>My bonus points:</h1>
            <div className={styles.auth_info}>
                <span style={{ color: error && "red" }} >{Auth ? Auth.data.points : 0}</span>
                <button onClick={()=>{navigate("/benefits")}} className={styles.btn_wrapper} color="#EE7D15">
                    <div className={styles.boost_btn}>
                        <div className={styles.boost_icon_wrapper}>
                            <img src={boost_icon} alt='' />
                        </div>
                        <div className={styles.options}>
                        </div>
                        <h1 style={{ color:"white"}}>Boost</h1>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Balance