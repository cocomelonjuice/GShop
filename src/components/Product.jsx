import React from "react";
import { add} from "../features/Slice";
import {useSelector, useDispatch} from "react-redux";
import {store} from "../redux/ReduxStore";
import CartItem from "./CartItem";

import { Link } from "react-router-dom";

const Product = ({item})=>{
  const {cart} = useSelector((state)=>state.cart);
  let authUser= localStorage.getItem("sb-gizwpeatbfldniwqrmel-auth-token");
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
        {
          authUser?<button onClick={addToCart} className=" rounded-b-lg  border-red-600 border-2 bg-red-600 text-white px-1 hover:bg-red-400 ">Add to Cart</button>:<Link to="/authentication/LoginForm"><button className=" rounded-b-lg  border-red-600 border-2 bg-red-600 text-white px-1 hover:bg-red-400 ">Add to Cart</button></Link>
        }
       {/**logic: nếu auth === true : onClick sẽ thực hiện add to cart, nếu sai thì Navigate về Login page */}
       {/*cách hiểu khác: conditional render: auth === true? render button add to cart: render button link to login page */}
      </div>
    </>
  )
}
export default Product;

