import React from "react";
import { add} from "../features/Slice";
import {useSelector, useDispatch} from "react-redux";
import {store} from "../redux/ReduxStore";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast";

const Product = ({item})=>{
  const {cart} = useSelector((state)=>state.cart);
  let authUser= localStorage.getItem("sb-gizwpeatbfldniwqrmel-auth-token");//get item for any user, not just only this user
  const dispatch = useDispatch();
  const addToCart = ()=>{
    dispatch(add(item))
    toast.success(
      "Added to your cart"
  );
  }

  return (
    <>
      <div>
        <div className="rounded-lg shadow-lg hover:border-blue-600 hover:shadow-2xl pb-2 pt-2 ">         
          <img className="h-72 w-72" src={item.image} />
          <p>{item.name}</p>
          <p>{item.price}</p>
           {
          authUser?<button onClick={addToCart} className=" rounded-b-lg rounded-t-lg  border-blue-600 border-2 bg-blue-600 text-white px-1 hover:bg-red-400 ">Add to Cart</button>:<Link to="/authentication/LoginForm"><button className=" rounded-b-lg  border-blue-600 border-2 bg-blue-600 text-white px-1 hover:bg-red-400 ">Add to Cart</button></Link>
          }
           {/**logic: nếu auth === true : onClick sẽ thực hiện add to cart, nếu sai thì Navigate về Login page */}
           {/*cách hiểu khác: conditional render: auth === true? render button add to cart: render button link to login page */}
        </div>
      </div>
    </>
  )
}
export default Product;

