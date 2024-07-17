import React, { useContext } from 'react'
import Grid from '../../../components/shared/layouts/Grid'
import ShopItem from "./ShopItem";
import Card from '../../../components/shared/UI/Card';
import styles from './ShopItem.module.css';
import { ShopContext } from '../../../contextAPI/shopContext/ShopContextProvider';

const ShopList = ({TravelData}) => {
  
  const {addToCart} = useContext(ShopContext);

  //condition to check if products item exist or not
  if(TravelData.length ===0){
    return( <div className={styles.center}>
      <Card>
      <h2>No Product found</h2>
      </Card>
    </div> 
    );
  }
  
  return <Grid>
    {
      TravelData.map(
        (product)=>(<ShopItem product={product} addToCart={addToCart} />)
      )
    }
  </Grid>
}

export default ShopList