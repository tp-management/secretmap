import React, {useState}from 'react';
import Button from "../../components/shared/UI/button/Button";
import styles from './profileContent.module.css';
import MainHeader from "../../components/shared/UI/pagesHeaders/index";
import { AiFillEdit } from 'react-icons/ai';
import UserPanel from './userPanel';

const ProfileComponet = (props) => {

  const [description, setDescription] = useState('The user has not provided an introduction yet');
  const [editMode, setEditMode] = useState(false);
  const Auth = props.Auth && props.Auth.data;

  if(!Auth)return

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation before updating the description state
    const newDescription = e.target.elements.description.value;
    setDescription(newDescription);
    setEditMode(false);
  };

  return (
    <div className={styles.main_container}>
        
      <MainHeader header="Profile"/>
        
      <UserPanel user={props.Auth.data} />
           
      <div className={styles.about_section}>
        <div className={styles.about_box}>
        <h1>About</h1> 
        <span onClick={handleEditClick}><AiFillEdit/></span>
        </div>
        {
          editMode ? (
            <form onSubmit={handleFormSubmit}>
            <textarea 
            className={styles.textbox} 
            name="description" 
            placeholder='description'
            value={description} 
            onChange={(e) => setDescription(e.target.value)} required />

            <div className={styles.save_btn}>
              <Button color="#EE7D15" height="auto" onSubmit={handleFormSubmit}>
                <h1>Save</h1>
              </Button>
            </div>
          </form>
          ):(
            
        <p style={{ color:"#EE7D15", fontSize: "17px" }}>
          {description}
        </p>
          )
        }
      </div>

      <div className={styles.living_place}>
        <h1 style={{ fontSize: "22px" , color:"#4a4a4a" }}>Living in <span style={{ display: "flex", color:"#EE7D15", fontSize: "17px", paddingTop:"10px" }}>
          <img style={{ borderRadius:"11px", width: "40px", marginRight: "1rem" }} src={Auth.country.flag} alt='' />
          {Auth.country.name}  
        </span></h1>
      </div>


      
      <div className={styles.hobbies_section}>
        <h1>Hobbies</h1>

        <div className={styles.interest}>
          {
            Auth.interests && Auth.interests.interests.map(interest => {
              return <p key={interest._id}>
                {interest.value}
              </p>
            })
          }
        </div>
      </div>
     
    </div>
  )
}

export default ProfileComponet
