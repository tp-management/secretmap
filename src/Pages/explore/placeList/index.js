import React, { useEffect, useState } from 'react'
import styles from "./index.module.css";
import PlaceItem from "../placeItem";
import { useNavigate } from 'react-router-dom';
import Grid from "../../../components/shared/layouts/Grid";

const PlaceList = ({data}) => {

  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState(data) 

  const onFilterHandler = (pid) => {

    if(!pid)return;
    setFilteredData(
      filteredData.filter(place => {
        return place._id !== pid
      } )
    )
  }
  
  const ListItemElement = () => (
    <Grid>
      {
        filteredData && filteredData.length > 0?
        filteredData.map(item => <PlaceItem onFilter={onFilterHandler} key={item._id} item={item} />)
        :
        <div className={styles.no_places}>
          <h1>Share your places, earn bonus points, and inspire fellow travelers!</h1>
          <p onClick={()=>navigate("/uploads")}>Create place</p>
        </div>
      }
    </Grid>
  )

  return (
    <>
      <div className={styles.places_list_container}>
        <ListItemElement />
      </div>
    </>
  )
}

export default PlaceList