import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
//import Dropdown from './components/Dropdown'
import { productList } from './ProductData'
import Footer from './components/Footer'


  

export default function Home ()  {

  return (
    <div className="" >

      <Navbar />

      <div className="flex flex-row flex-wrap ">{productList.map((item)=>{   //flex-wrap flex items-center flex-row gap-2
          return <Product key={item.id} item={item} />
        })}
      </div>

      <Footer />

    </div>
    
  )
} 

  