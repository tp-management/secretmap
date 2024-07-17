import Button from '../../../../components/shared/UI/button/Button';
import React, { useState } from 'react'
import Header from "../header";
import TypesOfInterests from '../../../../components/shared/UI/typesOfPlaces';

const UserInterests = (props) => {

  const [selectedInterests, setSelectedInterests] = useState([]);


  const submitHandler = () => {
    if(selectedInterests.length < 3)return

    return props.onSubmit(selectedInterests)
  }


  const stateChangeHandler = (array) => {
    setSelectedInterests(array);
  }

  


  return (
    <div>
      
      <Header 
        mainText={"Interests"} 
        subText={"Pick 3 or more things you'd like to see and explore"} 
        page={1}
      />

      <TypesOfInterests selected_types={props.selectedInterests} onChangeState={stateChangeHandler} />
      

      <div style={{ width: "30%", margin: "14px auto"}}>
        <Button
          height="auto"  
          onSubmit={submitHandler} 
          color={`${selectedInterests.length < 3 ? "white" : "#EE7D15"}`} 
          border={`${selectedInterests.length < 3 ? "1px solid rgba(44, 60, 77, 1)" : "none"}`}
        >
          <h1 style={{ padding: "0.7rem", color: `${selectedInterests.length < 3 ? "#2C3C4D" : "white"}` }}>Continue</h1>
        </Button>
      </div>

    </div>

  )
}


export default UserInterests