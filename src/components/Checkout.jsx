import React from 'react'
//import Cart from './Cart'
//import CartItem from './CartItem'

const Checkout = () => {
  return (
    <>    
      <div>Delivery to:</div>
      {/* drop down selection shiping location address*/}

      <div>Payment method</div>       {/* drop down selection */}
      <div>Shipping type</div>    {/* drop down selection */}
      <div>Coupon</div>   {/* text input validate: fake coupon logic discount */} 
      <div>
        <div>Order summary</div>
        {/* show item list with price, numbers, and shipping fee */}
        <div>Order total price:</div>
      </div>

      <button className='m-auto border-red-600 w-20'>CONFIRM ORDER</button>
    </>
  )
}

export default Checkout;