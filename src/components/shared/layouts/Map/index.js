import styles from "./map.module.css";
import React, { useRef, useEffect, useState, useContext } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import Ripple from "../ripple";

const MapLayout = (props) => {
    
  console.log("props: ", props)

//   const [isLoading, setIsLoading] = useState(true);
  const access_token = 'pk.eyJ1IjoiZG9tYnViMSIsImEiOiJjbGR4N3M5ZWowZW1jM29yeHR6ZDZ4a2Z2In0.Nvxa1Vv6L-7YlWhT5CW47w'

  mapboxgl.accessToken = access_token; 

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {

    
    if (map.current && !zoomed) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/dombub1/cle3ugc4t000601p8afbwwb9t?optimize=true",
    });

  }, [zoomed]);

//   useEffect(() => {

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//   }, [])
    
  
  return (
    <>
      {/* {
        isLoading &&
        <div className={styles.loading__}>
          <div className={styles.loading__icon}>
            <Ripple bright={true} />
          </div>
        </div>
      } */}

      <div className={styles.globe} style={{ position: "relative" }}>
        <div ref={mapContainer} className={styles.map_container} />
        
        <div className={styles.footer} onClick={props.onClose}>
          
        </div>
      </div>
    </>
  )
}

export default MapLayout



