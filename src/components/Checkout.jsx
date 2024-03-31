import React from 'react'
//import Cart from './Cart'
//import CartItem from './CartItem'

const Checkout = () => {
  return (
    <div className="border-red-600 border-4 bg-teal-200 m-auto inset-0 absolute w-1/2 h-1/4 ">    
      <div>Delivery to:</div>
      <select >
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

      <div>Payment method</div> 
      <select>
        <option hidden></option>
        <option value="Cash">Cash</option>
        <option value="MOMO">MOMO</option>        
        <option value="Credit Card/ Debit Card">Credit Card/ Debit Card</option>        
      </select>     
      <div>Shipping type</div> 
      <select>
        <option hidden></option>
        <option value="Fast Shipping">Fast Shipping</option>
        <option value="Standard Shipping">Standard Shipping</option>
      </select>   
      <div>Coupon</div>    
      <input type="text"></input>
      <div>
        <div>Order summary</div>
        {/* show item list with price, numbers, and shipping fee */}
        <div>Order total price:</div>
      </div>

      <button className='m-auto border-red-600 w-20'>CONFIRM ORDER</button>
    </div>
  )
}

export default Checkout;