import React, {useContext} from 'react';
import Card from '../../../components/shared/UI/Card';
import {TravelData} from '../../Shop/Products';
import styles from './ShoppingCart.module.css';
import { ShopContext } from '../../../contextAPI/shopContext/ShopContextProvider';
import ShoppingCartItem from './ShoppingCartItem';
import {useNavigate} from 'react-router-dom';

const ShoppingCart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const total = getTotalCartAmount();

  const navigate = useNavigate
  return (
    <Card >
      {/* <div>
      <h1>Cart Items</h1>
      </div>
       */}
      <div className={styles.cart_items}>
        {TravelData.map((product)=>{
          if(cartItems[product.id] !== 0){
            return<ShoppingCartItem key={product.id} data = {product}/>
          }
        })}
      </div>

      {total > 0 ?
      <div className={styles.checkout}>
        <p>SubTotal: ${total}</p>
        <button onClick={()=>navigate("/shop")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
   : <h1 className={styles.empty}>Your Cart is Empty</h1>}
    </Card>
  )
}

export default ShoppingCart
