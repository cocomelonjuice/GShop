import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { add,removeFromCart,decreaseCart,getTotals} from "../features/Slice";
import {store} from "../redux/ReduxStore"



const CartItem = ({item}) => {
  
  const {choosenItems} = useSelector ((state)=>state.cart);
  const dispatch = useDispatch();
  
  const handleAddToCart = (item)=>{
    dispatch(add(item));
  };
  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  
  return (
    <div key={item.id}>
      <img src={item.image} />
      <div>{item.name}</div>
      <div>{item.price}</div>
      <br />
      <button onClick={()=>handleAddToCart(item)} className="rounded-full border-red-600 border-2 bg-red-600 text-white px-1 hover:bg-red-400">+</button>
      <button onClick={() => handleRemoveFromCart(item) } className="rounded-full border-red-600 border-2 bg-red-600 text-white px-1 hover:bg-red-400">Remove</button>
      <button onClick={() => handleDecreaseCart(item)} className="rounded-full border-red-600 border-2 bg-red-600 text-white px-1 hover:bg-red-400">-</button>
      <div>Quantity {item.cartQuantity}</div>
      <div>${item.price * item.cartQuantity}</div>
    </div>   
    )
}

export default CartItem;