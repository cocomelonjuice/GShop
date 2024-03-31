import Navbar from "./Navbar.jsx";
import CartItem from "./CartItem.jsx";
import {useSelector} from "react-redux";
import React, { useState,useEffect } from "react";
import {store} from "../redux/ReduxStore"
import { add,removeFromCart,decreaseCart, getTotals } from "../features/Slice.jsx";
import { useDispatch } from "react-redux";

import Checkout from "./Checkout.jsx";

const Cart = ({item}) => {

  const {cart,choosenItems, cartTotalAmount}=useSelector((state)=>state.cart);
  const {cartTotalQuantity} = useSelector((state)=>state.cart)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [choosenItems, dispatch]);

  return (
    <div className="relative">
      <div><Navbar /></div>
      { choosenItems?.length > 0 ? (
        <div >
            <div><Checkout /></div>
          {choosenItems.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
              <br />
              <br />
              <div>-------------------YOUR CART----------------</div>
              <div>Total Distinct Item: {choosenItems.length}</div>
              <div>Cart total quantity: {cartTotalQuantity}</div>
              <div>Sub Total Price:$ {cartTotalAmount}</div>
              <button onClick={Checkout}>CHECKOUT</button>
              
        </div>
      ):(
        <div className="mt-20 text-black flex content-center justify-center">Your Cart is empty</div>
      )}
    </div>
  )
}
export default Cart;

