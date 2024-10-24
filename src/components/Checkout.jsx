import React from "react";
import { useState } from "react";
import Cart from "./Cart";
import { store } from "../redux/ReduxStore";
import Product from "./Product";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { cart, choosenItems, cartTotalAmount } = useSelector(
    (state) => state.cart
  );
  return (
    <div className="bg-teal-200 rounded-xl mt-8 mr-96 w-full h-fit pt-6 pb-4 ">
      <h1>CHECKOUT</h1>
      <div className="grid grid-cols-2 mt-6 pr-6">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="">Address</div>
          <select className="border-2 rounded-md border-black">
            <option hidden></option>
            <option value="District 1">District 1</option>
            <option value="District 2">District 2</option>
            <option value="District 3">District 3</option>
            <option value="District 4">District 4</option>
            <option value="District 5">District 5</option>
            <option value="District 6">District 6</option>
            <option value="District 7">District 7</option>
            <option value="District 8">District 8</option>
            <option value="District 9">District 9</option>
            <option value="District 10">District 10</option>
          </select>
          <div className="">Payment</div>
          <select className="border-2 rounded-md border-black">
            <option hidden></option>
            <option value="Cash">Cash</option>
            <option value="MOMO">MOMO</option>
            <option value="Credit Card/ Debit Card">
              Credit Card/ Debit Card
            </option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4 ">
          <div>Shipping</div>
          <select className="border-2 rounded-md border-black">
            <option hidden></option>
            <option value="Fast Shipping">Fast Shipping</option>
            <option value="Standard Shipping">Standard Shipping</option>
          </select>
          <div>Coupon</div>
          <input
            className="border-2 rounded-md border-black"
            type="text"
          ></input>
        </div>
      </div>

      <div>
        <div className="mt-2">Order total price: {cartTotalAmount}</div>
      </div>
      <button className="m-auto mt-2 hover:bg-red-600 bg-red-400 w-fit px-2 py-2 rounded-lg text-white">
        CONFIRM ORDER
      </button>
    </div>
  );
};
export default Checkout;
