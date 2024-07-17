import React from 'react';
import styles from './destinations.module.css';
import CarouseleList from '../../../components/shared/UI/carouseleList';
import { fetchAllPlaces } from '../../../components/utils/places/fetchPlaces';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../../components/shared/UI/toast";
import { useState } from 'react';
import Header from './header';
import backgroundImage from "../../../assets/header_image.png";

import {PlacesData} from "./Data"
import BottomBar from './Navi/bottomBar';


const Destinations = () => {
  const [currPlaceType, setCurrPlaceType] = useState("Abandoned places")
  
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const fetchData = async() => {

  //     setIsLoading(true)
      
  //     const placesData = await fetchAllPlaces();
  //     setIsLoading(false);
  //     if(!placesData.status)notify("Website under maintenance ", "warning")
  //   }


  //   fetchData();
  // }, [])

  
  return (
    <div className={styles.container}>

      <div className={styles.header_wrapper}>
        <div className={styles.text}>
          <Header />
        </div>

        <div className={styles.background}>
          <img src={backgroundImage} alt='' />
        </div>
      </div>

      <div className={styles.places_list}>
        <BottomBar currPlaceType={currPlaceType} />

        <div className={styles.carousele}>
          <CarouseleList callback={(data)=>{setCurrPlaceType(data)}} data={PlacesData}/>
        </div>
      </div>
        
    </div>

      
    
  )
}

export default Destinations

  