import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
//import Dropdown from './components/Dropdown'
import { productList } from './ProductData'

export default function Home ()  {
  return (
    <div>
      <Navbar />
      <div>{productList.map((item)=>{
        return <Product key={item.id} item={item} />
      })}</div>
      
    </div>
    
  )
}

 