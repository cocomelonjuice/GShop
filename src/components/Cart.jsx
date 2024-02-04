import Navbar from "./Navbar.jsx";
import CartItem from "./CartItem.jsx";
import {useSelector} from "react-redux";
//import { updateTotal } from "../features/Slice";
import React, { useState,useEffect } from "react";
import {store} from "../redux/ReduxStore"


const Cart = () => {

  const [totalAmount, setTotalAmount] = useState (0);
  const {choosenItems}=useSelector((state)=>state.cart);

  /*useEffect(()=>{
    setTotalAmount(choosen?.reduce((acc, curr)=>acc+ curr.price, 0));
  }, [cart]);*/
  useEffect(()=>{
    //setTotalAmount(choosenItems?.reduce((acc, curr)=>acc+ curr.price, 0));
    setTotalAmount(choosenItems?.reduce((acc, curr)=>acc+ curr.sum, 0));
  }, [choosenItems]);

  

  return (
    <div>
      <div><Navbar /></div>
      { choosenItems?.length > 0 ? (
        <div>
          {choosenItems.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
              <br />
              <div>-------------------YOUR CART----------------</div>
              <div>Total Item: {choosenItems.length}</div>
              <div>Total Amount: {totalAmount}</div>
              <button>CHECKOUT</button>
        </div>
      ):(
        <div className="mt-7 flex content-center justify-center">Your Cart is empty</div>
      )}
      
    </div>
    
  )
}
export default Cart;

