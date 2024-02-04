import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { add,remove } from "../features/Slice";
//import { increaseAmount,decreaseAmount, removeItem, updateTotal } from '../features/Slice';
import {store} from "../redux/ReduxStore"

const CartItem = ({item}) => {

  
  //const {cart} = useSelector ((state)=>state);
  const dispatch = useDispatch();

  const {choosenItems} = useSelector ((state)=>state.cart);

  /*const removeItemFromCart = ()=>{
    dispatch(remove(item.id));
  }*/

  const increaseItem = (item)=>{
    dispatch(add(item));
  }


  return (
    <div>
      <img src={item.image} />
      <div>{item.title}</div>
      <div>{item.price}</div>
      <button onClick=/*{removeItemFromCart}*/{(item)=>dispatch(remove(item))}>- or Delete</button>
      <br />
      <button onClick={item=>increaseItem(item)}>+</button>
      <div>Quantity {item.qty}</div>
      


    </div>
    
    
  )
}

export default CartItem;