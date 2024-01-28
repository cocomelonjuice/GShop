import Navbar from "./Navbar.jsx";
import CartItem from "./CartItem.jsx";
import {useSelector} from "react-redux";
//import { updateTotal } from "../features/Slice";
import { useState,useEffect } from "react";

const Cart = () => {

  const [totalAmount, setTotalAmount] = useState (0);
  const {cart}=useSelector((state)=>state.cart);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, curr)=>acc+ curr.price, 0));
  }, [cart]);

  return (
    <div>
      <div><Navbar /></div>
      { cart.length > 0 ? (
        <div>
          {cart.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
              <div>YOUR CART</div>
              <div>Total: {cart.length}</div>
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

