import mainLogo from '../assets/image/ShopG_image.png'
import {Link} from "react-router-dom"

export default function Navbar () {
  return (
    <div className='flex flex-row justify-evenly '>
      <Link to="/"> 
        <button className='w-12 h-12 '><img src={mainLogo}/></button>
      </Link>

      <span class="space-y-2">
        <div class="w-8 h-0.5 bg-gray-800 "></div>
        <div class="w-8 h-0.5 bg-gray-800 "></div>
        <div class="w-8 h-0.5 bg-gray-800 "></div>
        <div className='text-xs font-bold'>Menu</div>
      </span>

      <div className=" flex flex-row justify-evenly">
        <input type="text" placeholder=' Search for drinks' className='border-2 border-black rounded '/>
        <button>🔎</button>
      </div>

      <Link>
        <div>😎</div>
      </Link>
      
      <Link to="/Cart">
        <div>🛒</div>
      </Link>
    </div>
  )
}

