import React, { useState } from 'react'
import styles from "./mainContent.module.css"
import UserPanel from '../userPanel'
import Button from "../../../../components/shared/UI/button/Button";
import ExpandImage from "./expandImage";

const MainContent = (props) => {

  const [showImage, setShowImage] = useState(false);

  return (
    <div className={styles.container}>
      <UserPanel 
        user={props.item.user_id}
        place={props.item}
      />
      {
        showImage &&
        <ExpandImage 
          expandedImage={showImage}
          onClose={() => setShowImage(false)}
          item={props.item}
        />
      }
      <div className={styles.description}>
        <p>
          {props.item.description}
        </p>
      </div>

      <div className={styles.controllers}>
        <Button onSubmit={() => {
            setShowImage(true)
            props.onClose()
          }} color="#EE7D15" height="auto"> 
          <h1 style={{ color: "white", padding: "5px 10px" }}>View image</h1>
        </Button>
      </div>
    </div>
  )
}

export default MainContent