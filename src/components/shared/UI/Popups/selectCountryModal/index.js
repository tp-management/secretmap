import React, { useEffect, useState } from 'react'
import styles from "./selectCountryModal.module.css";
import InsideBounce from "../../LoadingSpinner/InsideBounce";


const SelectCountryModal = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const [showContriesNames, setShowCountriesNames] = useState(false); 
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchCountriesData = async() => {

      try {
        //https://restcountries.com/v3.1/all
        const reqData = await fetch("https://countriesnow.space/api/v0.1/countries/flag/images");
        
        if(!reqData.ok)throw new Error("failed to fetch countries!");

        const rspJson = await reqData.json();
        
        if(rspJson.error || !rspJson.data){
          setIsLoading(false);
          throw new Error("Cannot get countries!"); 
        };

        setIsLoading(false);
        if(!rspJson.data)return
        setData(rspJson.data.reverse());

  
      } catch (error) {
        console.log("Cannot get countries")
      }
    }

    fetchCountriesData();
  }, [])

  const countryClickHandler = (country) => {
    return props.onSubmit(country, true);
  }
  
  const countriesList = data ? data
    .filter((country) => {
      if (searchTerm === '') return country
      else if (country.name.toLowerCase().includes(searchTerm.toLowerCase()))
        return country
    })
    .map((country) => 
    {
      return (
        <div key={country.name} onClick={countryClickHandler.bind(null,country)} className={`${styles.countries_container} ${showContriesNames ? styles.countries_container_extra_space : styles.countries_container_collapsed}`}>
          <img src={country.flag} alt=''/>
          {true && <h1>{country.name.slice(0,5)}..</h1>}
        </div>
      )
    }
    )
    : []

  

  return (
    <div className={styles.wrapper}>
      {
        isLoading 
        ? 
        <div className={styles.loading_container}>
          <InsideBounce />
        </div>
        :
        <div className={styles.modal_content}>
          <div className={styles.top_menu_container}>

            <div className={styles.search_container}>
              <input placeholder='Search by country name' onChange={(event) => setSearchTerm(event.target.value)} />
            </div>
            
          </div>
          {
            data && countriesList
          }
        </div>
      }
    </div>
  )
}

export default SelectCountryModal