import React from 'react';
import styles from './ShopItem.module.css';

const ShopItem = ({product, addToCart}) => {


  return (
    <div className={styles.box} key={product.id}>
      <div className={styles.image}>
        <img src={product.image} alt={product.name}/>
      </div>
      <div className={styles.name}>{product.name}</div>
      <p> {product.description}.</p>
      <p>Tripwhoop: Extra 5% off with bonus points $10</p>
      <p>Amazon: $12</p>
      <p>Ebay: $15</p>
      
      <div className={styles.btns}>
        <button onClick={()=> addToCart(product.id)} >
          Add To Cart
          </button>
      </div>
    </div>
  )
}

export default ShopItem
