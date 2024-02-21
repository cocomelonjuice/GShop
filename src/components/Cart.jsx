import Navbar from "./Navbar.jsx";
import CartItem from "./CartItem.jsx";
import {useSelector} from "react-redux";
import React, { useState,useEffect } from "react";
import {store} from "../redux/ReduxStore"
import { add,removeFromCart,decreaseCart, getTotals } from "../features/Slice.jsx";
import { useDispatch } from "react-redux";

const Cart = ({item}) => {

  const {cart,choosenItems, cartTotalAmount}=useSelector((state)=>state.cart);
  const {cartTotalQuantity} = useSelector((state)=>state.cart)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [choosenItems, dispatch]);

  return (
    <div>
      <div><Navbar /></div>
      { choosenItems?.length > 0 ? (
        <div >
          {choosenItems.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
              <br />
              <br />
              <div>-------------------YOUR CART----------------</div>
              <div>Total Distinct Item: {choosenItems.length}</div>
              <div>Cart total quantity: {cartTotalQuantity}</div>
              <div>Sub Total Price:$ {cartTotalAmount}</div>
              <button>CHECKOUT</button>
        </div>
      ):(
        <div className="mt-7 flex content-center justify-center">Your Cart is empty</div>
      )}
    </div>
  )
}
export default Cart;

