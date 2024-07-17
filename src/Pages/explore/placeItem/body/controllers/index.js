import React, {useContext, useState} from 'react'
import Like from '../../../../../components/shared/UI/Ratings/like';
import styles from "./controllers.module.css";
import Ripple from '../../../../../components/shared/UI/ripple';
import AuthRequired from '../../../../../components/shared/layouts/AuthRequired';
import { AuthContext } from '../../../../../contextAPI/AuthContext';
import gift_icon from "../../../../../assets/gift_icon.png"
import GiftsPopUp from './giftsPopUp';
import delete_icon from "../../../../../assets/explore/delete_icon.png";
import { deletePlaceById } from '../../../../../components/utils/places/delete';
import { notify } from '../../../../../components/shared/UI/toast';
import qr_logo from "../../../../../assets/qr_logo.png"
import QRIcon from './QRIcon';


const Controllers = (props) => {
  const Auth = useContext(AuthContext).authenticatedUser;
  const [showGiftsPopUp, setShowGiftsPopUp] = useState(false);

  const onDeletePlaceHandler = async() => {
    if(!Auth)return
    
    try {
      const deletePlaceReq = await deletePlaceById(props.item._id, Auth.token.access_token);
      if(!deletePlaceReq.status) throw new Error(deletePlaceReq.message);
      notify("Place deleted", "success")
      return props.onFilter ? props.onFilter(props.item._id) : null;

    } catch (error) {
      return notify(error.message || "Cannot delete place", "error");
    }
  }

  const item = props.item;

  const showOnMapHandler = () => {
    if(!Auth)return
    return props.onShowMap && props.onShowMap(true)
  }

  return (
    <div className={styles.container}>
      {/* <AuthRequired>
        <Like 
          item={item}
        />
      </AuthRequired> */}
      <QRIcon />
      {/* <img onClick={()=>{setShowGiftsPopUp(true)}} alt='' className={styles.gift_icon} src={qr_logo} /> */}

      <div className={styles.map_btn_container} >
        <AuthRequired>
          <button onClick={showOnMapHandler} className={styles.map_btn}>
            <div className={styles.map_btn_content}>
              <div className={styles.btn_icon}>
                <div className={styles.icon_ripple}>
                  <Ripple bright={true} />
                </div>
              </div>
              <h1>Location</h1>
            </div>
          </button>
        </AuthRequired>
      </div>


      {
        Auth && Auth.data && Auth.data._id === props.item.user_id._id ?
        <img onClick={onDeletePlaceHandler} alt='' className={styles.gift_icon} src={delete_icon} />
        :
        <img onClick={()=>{setShowGiftsPopUp(true)}} alt='' className={styles.gift_icon} src={gift_icon} />
      }

      <GiftsPopUp 
        item={props.item}
        show={showGiftsPopUp}
        onClose={()=>{setShowGiftsPopUp(false)}}
      />
    </div>
  )

}

export default Controllers