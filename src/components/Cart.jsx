import Navbar from "./Navbar.jsx";
import CartItem from "./CartItem.jsx";
import {useSelector} from "react-redux";
import React, { useState,useEffect } from "react";
import {store} from "../redux/ReduxStore"
import { add,removeFromCart,decreaseCart, getTotals } from "../features/Slice.jsx";
import { useDispatch } from "react-redux";

import Checkout from "./Checkout.jsx";
import Footer from "./Footer.jsx";

const Cart = ({item}) => {

  const {cart,choosenItems, cartTotalAmount}=useSelector((state)=>state.cart);
  const {cartTotalQuantity} = useSelector((state)=>state.cart)
  const [checkOut, openCheckOut]=useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [choosenItems, dispatch]);

  return (
    <div className="relative">
      <div><Navbar /></div>
      { choosenItems?.length > 0 ? (
        <div className="flex flex-row">
        <div className="flex flex-col gap-4 mb-2 mt-20 ml-52" >
          {choosenItems.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
              
        </div>
        <div className="mt-20 ml-40 bg-yellow-100 w-1/3">
              <div>Your cart</div>
              <div>Total Distinct Item: {choosenItems.length}</div>
              <div>Cart total quantity: {cartTotalQuantity}</div>
              <div>Sub Total Price:$ {cartTotalAmount}</div>
              <button onClick={()=> openCheckOut((prev)=>!prev)}>CHECKOUT</button> 
              {checkOut && <Checkout />}
        </div>
        
      </div> 
      ):(
        <div className="mt-20 text-black flex content-center justify-center">Your Cart is empty</div>
      )}
    <Footer className="mt-auto"/>
    </div>
  )
}
export default Cart;

