import { productList } from "../ProductData"
import Navbar from "./Navbar"


export default function Coffee () {
  const listCoffee = (productList.filter(item=>item.type=="Coffee")).map(item=> <li>{item.name}<img src={item.image}></img></li>)
  return (
    <div>
      <Navbar></Navbar>
        {<ul className="mt-6">{listCoffee}</ul>}
    </div>
    )
}

