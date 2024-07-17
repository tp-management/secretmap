import React, { createContext, useState } from 'react'
import { TravelData } from '../../Pages/Shop/Products';


export const ShopContext = createContext(null);

// check how many items are in the cart array already
const getDefaultCart = ()=>{
  let cart ={}
  for(let i = 1; i< TravelData.length + 1; i++){
    cart[i] = 0
  }
  return cart;
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  
  //get total cartamount 
  const getTotalCartAmount = ()=>{
    let totalAmount =0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemIfo = TravelData.find((product)=> product.id === Number(item));
        totalAmount += cartItems[item] * itemIfo.price
      }
    }
    return totalAmount;
  }
  //adding item to cart
  const addToCart =(itemId)=>{
    console.log("cart items: ", cartItems)
    setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] + 1}));
  };

  //remove item from cart
  const removeFromCart =(itemId)=>{
    setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] - 1}));
  };

  //mannually updating the cartitem quantity in the input field 
  const updateCartAmount = (newAmount, itemId)=>{
    setCartItems((prev)=>({...prev, [itemId]: newAmount}))
  }

  const contextValue ={cartItems, addToCart, removeFromCart, updateCartAmount, getTotalCartAmount};

  return<ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>
};