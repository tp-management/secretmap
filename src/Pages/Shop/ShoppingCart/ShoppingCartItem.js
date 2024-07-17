import React, {useContext} from 'react'
import styles from './ShoppingCartItem.module.css';
import Card from '../../../components/shared/UI/Card'
import { ShopContext } from '../../../contextAPI/shopContext/ShopContextProvider';

const ShoppingCartItem = (props) => {
    const {id, image, name, price} = props.data
    const {cartItems, removeFromCart, addToCart, updateCartAmount} = useContext(ShopContext);
    
  return (
    <div className={styles.cartItem}>
        <img src={image}/>
        <div className={styles.description}>
           <p>{name}</p>
           <p>${price}</p>
           <div className={styles.countHandler}>
            <button className={styles.btn} onClick={()=>removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e)=> updateCartAmount(Number(e.target.value), id)}/>
            <button className={styles.btn} onClick={()=>addToCart(id)}>+</button>
           </div>
        </div>
    </div>
  )
}

export default ShoppingCartItem