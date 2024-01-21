import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import { increaseAmount,decreaseAmount, removeItem, updateTotal } from '../features/Slice';

const CartItem = ({item}) => {

  const {cart} = useSelector ((state)=>state);
  const dispatch = useDispatch();
  

  return (
    <div>{item.image}
      <div>{item.title}</div>
      <div>{item.price}</div>
    </div>
  )
}

export default CartItem