import React, {useContext, useRef} from 'react';
import styles from "./popup.module.css";
import commentsLogo from "../../../../../assets/explore/send_vector.png";
import CloseCommentsLogo from "../../../../../assets/explore/close_comments_logo.png";
import InsideBounce from "../../../../../components/shared/UI/LoadingSpinner/InsideBounce";
import { useState } from 'react';
import { useEffect } from 'react';
import AuthRequired from '../../../../../components/shared/layouts/AuthRequired';
import { AuthContext } from '../../../../../contextAPI/AuthContext';


const Popup = (props) => {

  const commentsTopRef = useRef(null);
  const Auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    if(isLoading){
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);

    }

  })
 
  const onSubmitHandler = () => {
    const executeScroll = () => commentsTopRef.current ? commentsTopRef.current.scrollIntoView() : null;
    executeScroll();
    if(!Auth.authenticatedUser)return;
    return props.onSubmit(props.item._id);
  }

  
  return (
    <div className={styles.container} >
      {
        isLoading && 
        <InsideBounce />
      }
      <div className={styles.popup_header}>
        <div style={{ display: "flex" }}>
          <p style={{ marginRight: "1rem" }}>{props.likes} likes</p>
          <p>{props.comments} comments</p>
        </div>
        <img onClick={props.onClose} src={CloseCommentsLogo} alt='' />
      </div>

      <div className={styles.comments_list}>
        {props.data.length>0 ? props.data.map((comment, key) => 
          {
            return <div ref={commentsTopRef} key={key} className={styles.comment_item}>
              <img src={comment.user_avatar} alt="avatar" />
              <div className={styles.comment_body}>
                <h1>{comment.username}</h1>
                <p>{comment.text}</p>
              </div>
            </div>
          }
        ):
        <h1 className={styles.no_comments}>No comments yet</h1>
      }
        
      </div>

      <div className={styles.input_container}>
        <input 
          value={props.currCommentValue} 
          onChange={props.onChange} 
          className={styles.input} 
          placeholder='Write your comment' 
        />
        <AuthRequired>
          <img onClick={onSubmitHandler} src={commentsLogo} alt='' />
        </AuthRequired>
      </div>

    </div>
  )
}

export default Popup