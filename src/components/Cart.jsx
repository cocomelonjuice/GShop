import Navbar from "./Navbar";
import { useState,useEffect } from "react";

export default function Cart () {
  return (
    <div>
      <div><Navbar /></div>
      <div className="mt-7 flex content-center justify-center">Your Cart is empty</div>
    </div>
    
  )
}

