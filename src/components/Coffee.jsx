import { productCoffee } from "../ProductData"


export default function Coffee () {
  
  const listCoffee = productCoffee.map(item=><li>{item.name}</li>);
  
  return (
    <div>
        <ul>{listCoffee}</ul>
    </div>
  )
}

