import React from 'react'
import { useState } from 'react';
import styles from "./placeItem.module.css";
import Body from "./body";
import ViewOnMap from '../../../components/shared/UI/viewOnMap';
import PlaceImage from './placeImage';
import MainContent from './mainContent';


const PlaceItem = (props) => {

  const [showMap, setShowMap] = useState(false);
  const [hovered, setHovered] = useState(undefined);

  const onShowMapHandler = () => {
    setShowMap(true)
    
  }

  if(!props.item.user_id)return
  
  return (
    <div 
      style={{ backgroundImage:`url(${props.item.image})` }} 
      className={`${styles.container} ${"box effect2"}`}
    >

      <div className={styles.filter}></div>

      <div className={styles.wrapper}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered !== undefined && <MainContent onClose={()=>setHovered(false)} onShowMap={onShowMapHandler} item={props.item}/>}
        <PlaceImage hovered={hovered} item={props.item}/>
      </div>


      <div className={styles.body_container}>
        <Body item={props.item} onFilter={props.onFilter} onShowMap={onShowMapHandler}/>
      </div>
      
      {showMap && <ViewOnMap item={props.item} onClose={()=>{setShowMap(false)}}/> }

    </div>
  )
}

export default PlaceItem