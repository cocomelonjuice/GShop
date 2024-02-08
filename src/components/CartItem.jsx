import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { add,remove } from "../features/Slice";
//import { increaseAmount,decreaseAmount, removeItem, updateTotal } from '../features/Slice';
import {store} from "../redux/ReduxStore"

const CartItem = ({item}) => {

  
  //const {cart} = useSelector ((state)=>state);

  const {choosenItems} = useSelector ((state)=>state.cart);
  const dispatch = useDispatch();


  /*const removeItemFromCart = ()=>{
    dispatch(remove(item.id));
  }*/

  /*const increaseItem = (item)=>{
    dispatch(add(item));
  }*/
    
  

  return (
    <div key={item.id}>
      <img src={item.image} />
      <div>{item.name}</div>
      <div>{item.price}</div>

      <button onClick={()=>dispatch(remove(item.id))}>- or Delete</button>

      <br />
      <button onClick={(item)=>dispatch(add(item))}>+</button>
      <div>Quantity {item.qty}</div>
      


    </div>
    
    
  )
}

export default CartItem;