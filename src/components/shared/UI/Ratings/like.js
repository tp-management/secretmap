import { AuthContext } from '../../../../contextAPI/AuthContext.js';
import { Like_ } from '../../../utils/places/like.js';
import React, { useState, useContext, useEffect } from 'react'
import "./like.css"
import { notify } from '../toast.js';
import socket from '../../../utils/SocketService.js';

const Like = (props) => {

  const Auth = useContext(AuthContext);
  const [likes, setLikes] = useState(props.item.likes.length);
  const [liked, setLiked] = useState(props.item.likes.includes(Auth.authenticatedUser && Auth.authenticatedUser.data._id));
  useEffect(() => {

    // Listen for 'like' and 'unlike' events from the server
    socket.on('place_like_unlike', (data) => {
      if(data.place._id === props.item._id){
        setLiked(data.place.likes.includes(Auth.authenticatedUser && Auth.authenticatedUser.data._id))
        setLikes(data.place.likes.length)
      }
    });

    // Clean up the socket event listeners when the component unmounts
    return () => {
      socket.off('place_like_unlike');
    };


  }, [liked]);


  const onLikeHandler = async() => {

    if(!Auth.authenticatedUser)return
    setLikes(!liked ? likes + 1 : likes - 1);
    setLiked(!liked)

    try {
      const fetch_like = await Like_(props.item._id, Auth.authenticatedUser.token.access_token);

      if(fetch_like.message === "Unauthorized")return Auth.logout();
      if(!fetch_like.status)throw new Error(fetch_like.message)

      if(fetch_like.data.likes)setLikes(fetch_like.data.likes.length)

      setLiked(fetch_like.data.likes.includes(Auth.authenticatedUser && Auth.authenticatedUser.data._id));
    } catch (err) {
      return notify(err.message || "Please try again")
    }

  }

  return (
    <p onClick={onLikeHandler} className={`like-button ${liked && 'liked'}`}>
      <span className='like-icon'>
        <span className='heart-animation-1'></span>
        <span className='heart-animation-2'></span>
      </span>
      {likes | 0}
    </p>
)
}

export default Like;