import React, { useEffect, useState } from 'react'
import Card from "../../components/shared/UI/Card";
import styles from "./explore.module.css";
import PlaceList from "./placeList";
import Filter from "./filter";
import MainHeader from "../../components/shared/UI/pagesHeaders/index";
import { fetchAllPlaces } from '../../components/utils/places/fetchPlaces';
import { notify } from "../../components/shared/UI/toast";
import LoadingSpinner from '../../components/shared/UI/LoadingSpinner';
import { useParams } from 'react-router-dom';
import BottomNavigation from './bottom_nav';

const Explore = (props) => {

  let { type } = useParams();
  const [filterByType, setFilterByType] = useState(type);
  const [filterByCountry, setFilterByCountry] = useState(null);

  const onFilterByType = (value) => {
    if(value)setFilterByType(value);
  }

  const onFilterByCountry = (value) => {

    if(value)setFilterByCountry(value);
    return
  }

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {

    window.scrollTo(0, 0);

    const fetchData = async() => {
      setIsLoading(true)
      const placesData = await fetchAllPlaces();
      setIsLoading(false);
      if(!placesData.status)return notify(placesData.message, "error")

      if(!placesData.data || !placesData.data.reverse)return notify("No places found", "warning")

      const filteredPlaces = placesData.data.reverse().filter(place => {


        if(filterByCountry && filterByType)return place.type === filterByType && place.country === filterByCountry

        if(filterByCountry)return place.country === filterByCountry

        if(filterByType) return place.type === filterByType

        else return place

      });

      setData(filteredPlaces);
    }


    fetchData();
  }, [filterByType, filterByCountry])


  return (
    <Card>
      { isLoading ? 
        <LoadingSpinner />
        :
        <div className={styles.container}>


          <div className={styles.pc_header}>
            <MainHeader 
              header="Explore Places"
              paragraph="Travel around the world has become much easier with this community"
            />
          </div>
          
          <div className={styles.filter_container}>
            <Filter 
              typeValue={filterByType}
              onFilterByType={onFilterByType}
              CountryValue={filterByCountry}
              onFilterByCountry={onFilterByCountry}
            />
          </div>

          <div className={styles.main_content}>
            <BottomNavigation />
            {data && !isLoading && <PlaceList data={data} />}
          </div>
          

        </div>
      }
    </Card>
  )
}

export default Explore