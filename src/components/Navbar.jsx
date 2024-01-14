import mainLogo from '../assets/image/ShopG_image.png'
import {Link} from "react-router-dom"
import { TfiAlignJustify, TfiSearch, TfiUser, TfiShoppingCartFull  } from "react-icons/tfi";
import { useState } from 'react';
import Dropdown from './Dropdown';


export default function Navbar () {
  const [isOpen,setOpen] = useState(false);

  return (
    
    <div className='flex flex-row justify-evenly bg-blue-800 text-white'>
      <Link to="/"> 
        <button className='w-12 h-12 '><img src={mainLogo}/></button>
      </Link>

      <button className='flex flex-col mr-24' onClick={()=>setOpen((prev)=>!prev)} >
        <TfiAlignJustify size={28} className='m-auto' />
        <div className='content-center '>Menu</div>

        {isOpen && <Dropdown />}

      </button>

      <div className=" flex flex-row justify-evenly">
        <input type="text" placeholder=' Search for drinks' className='border-2 border-black rounded '/>
        <button>
        <TfiSearch />
        </button>
      </div>

      
      <Link>
        <div>
          <TfiUser />
        </div>
      </Link>
      
      <Link to="/Cart">
        <div>
          <TfiShoppingCartFull />
        </div>
      </Link>
    </div>
  )
}

