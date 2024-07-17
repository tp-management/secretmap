import React, { useEffect, useState } from "react";
import styles from "./styles.module.css"
import InitialState from "./InitialState";
import UploadedState from "./UploadedState";
import imageCompression from 'browser-image-compression';
import { notify } from "../../../../components/shared/UI/toast";


const ImageUpload = (props) => {

  const [origImage, setOrigImage] = useState("");
  const [origImageFile, setOrigImageFile] = useState("");

  useEffect(()=>{
    if(props.curr_image){
      setOrigImage(props.curr_image)
      setOrigImageFile(URL.createObjectURL(props.curr_image));
    }
  }, [])

  const [mainState, setMainState] = useState(props.curr_image ? "uploaded" : "initial",) // initial, search, gallery, uploaded

  const handleUploadClick = async(event) => {
    const imageFile = event.target.files[0];
    setOrigImage(imageFile);
    setOrigImageFile(URL.createObjectURL(imageFile));
    setMainState("uploaded")

  };

  const imageResetHandler = () => {
    setMainState("initial");
    setOrigImage("");
    setOrigImageFile("");
  };

  const imageSubmitHandler = async() => {

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 800,
      useWebWorker: true,
      fileType: "image/jpeg"
    };

    if(options.maxSizeMB >= origImage / 1024){
      alert("Image is too small, can't be compressed");
      return 0;
    }


    imageCompression(origImage, options).then((x)=>{
      return props.onSubmit(x, origImage)
    })

    return 
    
  };

  return (
    <React.Fragment>
      <div className={styles.media_container}>
        {
          (
            mainState === "initial" && <InitialState onChangeFile={handleUploadClick}/>
          ) 
          ||
          (
            mainState === "uploaded" && origImageFile && <UploadedState imageResetHandler={imageResetHandler} imageSubmitHandler={imageSubmitHandler} file={origImageFile} />
          )
        }
      </div>
    </React.Fragment>
  )
}

export default ImageUpload;
