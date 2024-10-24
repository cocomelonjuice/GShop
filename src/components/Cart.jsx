import Navbar from "./Navbar.jsx";
import CartItem from "./CartItem.jsx";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { store } from "../redux/ReduxStore";
import {
  add,
  removeFromCart,
  decreaseCart,
  getTotals,
} from "../features/Slice.jsx";
import { useDispatch } from "react-redux";

import Checkout from "./Checkout.jsx";
import Footer from "./Footer.jsx";

const Cart = ({ item }) => {
  const { cart, choosenItems, cartTotalAmount } = useSelector(
    (state) => state.cart
  );
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [checkOut, openCheckOut] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [choosenItems, dispatch]);

  return (
    <div className="relative">
      <div>
        <Navbar />
      </div>
      {choosenItems?.length > 0 ? (
        <div className="grid grid-cols-2 justify-center  mb-6">
          <div className="flex flex-col gap-4 mb-2 mt-20 ml-52">
            {choosenItems.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>
          <div className=" flex flex-col mt-20 ml-40 bg-yellow-100 w-2/3 rounded-2xl gap-2 pt-6 h-44">
            <div>Total Quantity: {cartTotalQuantity}</div>
            <div className="mt-5">Total Price: {cartTotalAmount}</div>
            <button
              className="mt-5 bg-blue-600 text-white rounded-lg w-fit px-2 py-2 mx-auto hover:bg-green-600"
              onClick={() => openCheckOut((prev) => !prev)}
            >
              CHECKOUT
            </button>
            {checkOut && <Checkout />}
          </div>
        </div>
      ) : (
        <div className="mt-20 text-black flex content-center justify-center">
          Your Cart is empty
        </div>
      )}
      <Footer className="mt-auto" />
    </div>
  );
};
export default Cart;
