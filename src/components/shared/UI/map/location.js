import styles from "./location.module.css";
import Button from "../button/Button";
import React, { useRef, useEffect, useState, useContext } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import closeIcon from "../../../../assets/close-logo.png";
import submitIcon from "../../../../assets/submit-logo.png";
import Ripple from "../ripple";
import {AuthContext} from "../../../../contextAPI/AuthContext";
import Modal from "../Modal";
import FormInput from "../formInput";
import { SendCoordinatesMessage } from "../../../utils/message";
import {notify} from "../toast";

const Location = (props) => {
  console.log("props: ", props)

  const [isLoading, setIsLoading] = useState(true);
  const access_token = 'pk.eyJ1IjoiZG9tYnViMSIsImEiOiJjbGR4N3M5ZWowZW1jM29yeHR6ZDZ4a2Z2In0.Nvxa1Vv6L-7YlWhT5CW47w'

  mapboxgl.accessToken = access_token; 

  const [coords, setCoords] = useState( props.show_location || [ 32.29650083636824, 23.670783991562146 ] );
  const [showEmailInput, setShowEmailInput] = useState(false);
  const Auth = useContext(AuthContext).authenticatedUser;
  const [emailValue, setEmailValue] = useState((Auth && Auth.data && Auth.data.email) || "");
  const [sendingEmail, setSendingEmail] = useState(false);

  const onOpenCoordinatesHandler = () => setShowEmailInput(true);

  const sendCoordinatesHandler = async() => {
    setSendingEmail(true);
    try {
      const messageRes = await SendCoordinatesMessage({email: emailValue, coordinates: coords});
      if(!messageRes.status)throw new Error(messageRes.message);
      setSendingEmail(false);
      setShowEmailInput(false);
      return notify(<div className={styles.notify_message}>
        <h1>{messageRes.data || "Sent!"}</h1>
        <h2><span>Note:</span>check spam section</h2>
      </div >, "success");
    } catch (error) {
      setSendingEmail(false);
      return notify(error.message || "Cannot send coords to this email", "error");
    }
  }

  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = new mapboxgl.Marker() // position [lng, lat]
  const [activeButton, setActiveButton] = useState(false)
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {

    
    if (map.current && !zoomed) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/dombub1/cle3ugc4t000601p8afbwwb9t?optimize=true",
      center: coords,
    });

    if(!props.show_location){
      map.current.on('click', (e) => {
        onUpdateLocation(e.lngLat)
      });
    }

    map.current.on("load", () => {
      marker.setLngLat(coords).addTo(map.current);
    })

    if(zoomed){
      map.current.flyTo({
        center: coords,
        zoom: 18,
        essential: true,
        duration: 23000
      });
    }      



  }, [zoomed]);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  }, [])
    
  
  const onUpdateLocation = (obj) => {
    const {lat,lng} = obj;
    const coords = {lng: lng, lat: lat}
    marker.setLngLat(coords);
    setCoords(coords);
    setActiveButton(true);
  }

  const onSubmitHandler = async() => {
    const {lat, lng} = coords;
    if(!props.show_location)return props.onSubmit({lat,lng}); // cords[lng, lat]
    else return props.onClose();
  }

  return (
    <>
      {
        isLoading &&
        <div className={styles.loading__}>
          <div className={styles.loading__icon}>
            <Ripple bright={true} />
          </div>
        </div>
      }

      <div className={styles.globe} style={{ position: "relative" }}>
        <div ref={mapContainer} className={styles.map_container} />
        {
          <Modal
            show={showEmailInput}
            onClose={()=>setShowEmailInput(false)}
            bgColor="transparent"
          >
            <div className={styles.email_popup}>
              <h1 className={styles.email_header}>Discover Location Coordinates</h1>
              <FormInput onChange={(val)=>setEmailValue(val)} value={emailValue} isValid={true} name="Enter your email"><div style={{ width: "10px" }}></div></FormInput>
              <div className={styles.email_btn}>
                <Button onSubmit={sendCoordinatesHandler} color="#F08D32" height="auto">
                  <h1>{sendingEmail ? "Sending..." : "Send"}</h1>
                </Button>
              </div>
            </div>
          </Modal>
        }
        { ((!props.show_location && activeButton) || props.show_location) && !showEmailInput &&
          <div className={styles.controllers}>
            <div className={styles.controllers_insider}>
              <Button color="rgba(0, 0, 0, 0.5)" border="2px solid white" onSubmit={() => setZoomed(!zoomed)}>
                <h1 className={styles.btn_text}>Zoom</h1>
              </Button>

              <Button color="rgba(0, 0, 0, 0.6)" border="2px solid white" onSubmit={onSubmitHandler}>
                <div className={styles.btn_content}>
                  <h1 className={styles.btn_text}>{!props.show_location ? "Submit" : "Close"}</h1>
                  <img src={!props.show_location ? submitIcon : closeIcon } alt="" />
                </div>
              </Button>
            </div>
          </div>
        }
        { props.show_location && !showEmailInput &&
          <div className={styles.get_coordinates}>
            <Button color="rgba(0, 0, 0, 0.5)" border="2px solid white" onSubmit={onOpenCoordinatesHandler}>
              <h1 className={styles.btn_text}>Get coordinates</h1>
            </Button>
          </div>
        }
        <div className={styles.footer} onClick={props.onClose}>
          
        </div>
      </div>
    </>
  )
}

export default Location



