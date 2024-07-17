import React from 'react'
import Card from '../../components/shared/UI/Card';
import {TravelData} from '../Shop/Products'
import ShopList from './ShopList';

const Shop = () => {

  return (
    <Card>
      <ShopList TravelData={TravelData}/>
    </Card>
  )
}

export default Shop
