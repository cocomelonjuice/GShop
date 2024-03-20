import React from "react";
import { add} from "../features/Slice";
import {useSelector, useDispatch} from "react-redux";
import {store} from "../redux/ReduxStore";
import CartItem from "./CartItem";

const Product = ({item})=>{
  const {cart} = useSelector((state)=>state.cart);

  const dispatch = useDispatch();
  const addToCart = ()=>{
    dispatch(add(item))
  }
  return (
    <>
      <div>
        <div className="rouned-md border-8 border-red-600 ">
          <img src={item.image} />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
        <button onClick={addToCart} className=" rounded-b-lg  border-red-600 border-2 bg-red-600 text-white px-1 hover:bg-red-400 ">Add to Cart</button>
      </div>
    </>
  )
}
export default Product;

