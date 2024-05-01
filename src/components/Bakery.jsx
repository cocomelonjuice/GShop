import { productList } from "../ProductData"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Product from "./Product"

export default function Bakery () {
  const listBakery = (productList.filter(item=>item.type=="Bakery"));
  //const listCoffee = (productList.filter(item=>item.type=="Coffee")).map(item=> <li>{item.name}<img src={item.image}></img></li>)
  return (
    <div className="">
      <Navbar />     
      {/*{<ul>{listCoffee}</ul>}*/}
      <div className="flex flex-row flex-wrap gap-4 ml-40 mb-2 mt-36">{listBakery.map((item)=>{   //flex-wrap flex items-center flex-row gap-2
          return <Product key={item.id} item={item} />
        })}
      </div>
      <div className="fixed w-full mb-0 bottom-0">
        <Footer/>
      </div>
    </div>
    )
}

