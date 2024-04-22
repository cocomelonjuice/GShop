import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { productList } from './ProductData'
import Footer from './components/Footer'

import { useState } from 'react'
import SortByPrice from './components/SortByPrice'

export default function Home ()  {
  const[item,itemSort]=useState(productList);

  return (
    <div className="">
      <Navbar />
      <SortByPrice itemSort={itemSort} item={item} /> {/* render the item here (use the sort list from SortByPrice), dont create another render component */}
      {/*<div className="flex flex-row flex-wrap ">{productList.map((item)=>{   //flex-wrap flex items-center flex-row gap-2
          return <Product key={item.id} item={item} />
        })}
      </div>*/}

      <div className="flex flex-row flex-wrap ">{item.map((item)=>{   //flex-wrap flex items-center flex-row gap-2
          return <Product key={item.id} item={item} />
        })}
      </div>

      {/*<div className="flex flex-row flex-wrap ">{productList.map((item)=>{   //flex-wrap flex items-center flex-row gap-2
          return <Product key={item.id} item={item} />
        })}
      </div>*/}

      <Footer className="mt-auto"/>
    </div>
  )
} 

  