import React from 'react'
import styles from "./placeImage.module.css"
import more_logo from "../../../../assets/signs/about.png";
import members_icon from "../../../../assets/explore/members_icon.png"

const PlaceImage = (props) => {


    const place_image = props.item.image
  
    return (
    <>
        { place_image &&
            <div className={`${styles.image_container} ${props.hovered !== undefined && (props.hovered ? styles.hidden : styles.visible)}`}>
                {   
                    !props.hovered &&
                    <div className={styles.top_bar}>
                        <img  
                            className={styles.top_bar_icon}
                            src={more_logo}
                            alt=''
                        />

                        <div>
                            <img 
                                src={members_icon}
                                alt=''
                            />
                            <p>{props.item.location_views}</p>
                        </div>
                    </div>
                }
                <img 
                    className={styles.item_image} 
                    src={place_image} 
                    alt="" 
                />
            </div>
        }
    </>
    )
}

export default PlaceImage