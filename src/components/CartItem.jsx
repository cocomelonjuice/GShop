import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { remove } from "../features/Slice";
//import { increaseAmount,decreaseAmount, removeItem, updateTotal } from '../features/Slice';

const CartItem = ({item}) => {

  const {cart} = useSelector ((state)=>state);
  const dispatch = useDispatch();
  const removeItemFromCart = ()=>{
    dispatch(remove(item.id));
  }

  return (
    <div>
      <img src={item.image} />
      <div>{item.title}</div>
      <div>{item.price}</div>
      <button onClick={removeItemFromCart}>Delete</button>
    </div>
    
    
  )
}

export default CartItem;