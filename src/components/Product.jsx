import React from "react";
import { add} from "../features/Slice";
import {useSelector, useDispatch} from "react-redux";
import {store} from "../redux/ReduxStore";
import CartItem from "./CartItem";

const Product = ({item})=>{
  const {cart} = useSelector((state)=>state);
  //const {choosenItems}=useSelector((state)=>state.cart)
  const dispatch = useDispatch();
  const addToCart = ()=>{
    dispatch(add(item))
  }
  return (
    <div>
        <div>
            <img src={item.image} />
        </div>

        <div>
            <p>{item.name}</p>
        </div>
        
        <div>
            <p>{item.price}</p>
        </div>

        <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}
export default Product;

