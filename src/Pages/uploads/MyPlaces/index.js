import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../contextAPI/AuthContext'
import { fetchUserPlaces } from '../../../components/utils/places/fetchPlaces';
import { useNavigate } from 'react-router-dom';
import { Bounce } from 'react-activity';
import PlaceList from '../../explore/placeList';
import styles from "./myPlaces.module.css";
import Button from '../../../components/shared/UI/button/Button';
import AuthRequired from '../../../components/shared/layouts/AuthRequired';


const MyPlaces = () => {

    const [userPlaces, setUserPlaces] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const Author = useContext(AuthContext);
    const navigate = useNavigate();


    useEffect(() => {
    
        const fetchAuthPlaces = async() => {
          
          if(!Author.authenticatedUser || !Author.isLoggedIn) return 
            
          setIsLoading(true);
          const author_places = await fetchUserPlaces(Author.authenticatedUser.token.access_token)
    
          if(!author_places.status){
            Author.logout();
            return navigate("/");
          }
    
          setUserPlaces(author_places.data);
          setIsLoading(false);
        } 
    
    
        fetchAuthPlaces();
    
    
      }, [])


  return (
    <div className={styles.container}>
        { !Author.authenticatedUser &&
          <AuthRequired>
            <div className={styles.auth_btn}>
              <Button color="#EE7D15" onSubmit={()=>{}}>
                <h1 style={{ color:"white" }}>Login</h1>
              </Button>
            </div>
          </AuthRequired>
        }
        {
            isLoading ? 
            <Bounce size="2rem" color="#EE7D15" />
            :
            <>
                {userPlaces && !isLoading && <PlaceList data={userPlaces} />}
            </>

        }
    </div>
  )
}

export default MyPlaces