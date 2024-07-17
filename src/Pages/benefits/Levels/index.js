import React, {useState} from 'react'
import styles from './level.module.css';
import CardList from './cards';


const Levels = () => {

    return(
    <>
        <div className={styles.text_heading}>
            <h2 >Make Money with <span>Hidden</span>World</h2>
            <p>There is always something interesting near you. Share unique place and get money for every view</p>
        </div>
        <CardList />
    </>
    )
}

export default Levels