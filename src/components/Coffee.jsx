import { productList } from "../ProductData"
import Navbar from "./Navbar"


export default function Coffee () {
  const listCoffee = (productList.filter(item=>item.type=="Coffee")).map(item=> <li>{item.name}</li>)
  return (
    <div>
      <Navbar></Navbar>
        {<ul>{listCoffee}</ul>}
    </div>
    )
}

