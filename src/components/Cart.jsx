import Navbar from "./Navbar";
/*import CartItem from "./CartItem";
import {useSelector, useDispatch} from "react-redux";
import { updateTotal } from "../features/Slice";
import { useState,useEffect } from "react";*/

const Cart = () => {

  /*const [totalAmount, setTotalAmount] = useState (0);
  const {cart}=useSelector((state)=>state.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(updateTotal())
  },[cart, dispatch])*/


  return (
    <div>
      <div><Navbar /></div>
      <div className="mt-7 flex content-center justify-center">Your Cart is empty</div>
    </div>
    
  )
}
export default Cart;

{/*đang tới đây, fix lỗi các dòng có comment: file Cart.jsx */}