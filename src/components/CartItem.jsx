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
    <div key={item.id} className=" rounded-xl shadow-2xl hover:bg-teal-200 max-h-max flex flex-row">
      <img  src={item.image} className="m-auto h-52 w-52 " /> {/*mix-blend-multiply causes transparent between item and navbar */}
      <div className="mt-6 ml-2 ">{item.name}</div>
      <div className="mt-6 ml-12 mr-4">
        <div>Price: {item.price * item.cartQuantity}</div>
        {/*<button onClick={() => handleRemoveFromCart(item) } className="rounded-full border-red-600 border-2 bg-red-600 text-white px-1 hover:bg-red-400">Remove</button>*/}
        <div className="mt-28 flex gap-4">
          <button onClick={()=>handleAddToCart(item)} className="rounded-full border-black border-2 text-black text-xs px-2.5  hover:bg-blue-400 hover:text-white bg-white">+</button> 
          <div className="text-lg">{item.cartQuantity}</div>
          <button onClick={() => handleDecreaseCart(item)} className="rounded-full border-black border-2  text-black px-2.5 text-lg hover:bg-red-400 hover:text-white bg-white">-</button>
        </div>
      </div>
    </div>   
    )
}

export default CartItem;