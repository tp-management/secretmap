import MainHeader from '../../components/shared/UI/pagesHeaders';
import React, { useState } from 'react'
import Card from "../../components/shared/UI/Card";
import "react-toastify/dist/ReactToastify.css";
import styles from "./uploads.module.css";
import AddNewPlace from './AddNewPlace';
import Button from '../../components/shared/UI/button/Button';
import MyPlaces from './MyPlaces';

const YoutTrip = () => {

  const [uploadMode, setUploadMode] = useState(true);


  return (
    <Card>
        <>
          <div className={styles.controllers}>
            <div className={styles.controller_wrapper}>
              <Button onSubmit={()=>setUploadMode(false)} color={!uploadMode ? "#EE7D15" : ""}>
                <h1 style={{ color:!uploadMode?"white":"#2C3C4D" }}>My places</h1>
              </Button>
            </div>

            <div className={styles.controller_wrapper}>
              <Button onSubmit={()=>setUploadMode(true)} color={uploadMode ? "#EE7D15" : ""}>
                <h1 style={{ color:uploadMode?"white":"#2C3C4D" }}>Share new place</h1>
              </Button>
            </div>
          </div>
          
          { uploadMode ?
            <>
              <MainHeader 
                header="Share New Place"
                paragraph="There is always something interested near you. Share unique places and make money 💰"
              />
              <AddNewPlace />
            </>
            :
            <>
              <MainHeader 
                header="My Places"
                paragraph="There you see places you shared with others. You can delete or update this list"
              />
              <MyPlaces />
          </>
          }

          
        </>      
    </Card>
  )
}

export default YoutTrip