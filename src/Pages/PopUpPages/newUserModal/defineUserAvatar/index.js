import React from 'react'
import Header from '../header';
import { MixAvatarApearance } from '../../../../components/shared/UI/avataars/Appearance';

const UserAvatar = (props) => {

  const submitHandler = (url) => {
    props.onSubmit(url);
  }

  return (
    <div style={{ display:"flex", flexDirection: "column" }}>
      <Header 
        mainText={"Style your avatar"}
        subText={"This is how people will see you on TripWhoop. You can change it later if you'd like"}
      />
      <MixAvatarApearance onSubmit={submitHandler} />
    </div>
  )
}
export default UserAvatar