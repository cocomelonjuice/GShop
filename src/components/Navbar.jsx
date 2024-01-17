import mainLogo from '../assets/image/ShopG_image.png'
import {Link} from "react-router-dom"
import { TfiAlignJustify, TfiSearch, TfiUser, TfiShoppingCartFull  } from "react-icons/tfi";
import { useState } from 'react';
import Dropdown from './Dropdown';


export default function Navbar () {
  const [isOpen,setOpen] = useState(false);

  return (
    
    <div className='fixed top-0 w-screen left-0 right-0 flex flex-row justify-evenly bg-blue-800 text-white '>
      <Link to="/"> 
        <button className='w-12 h-12 mt-1 '><img src={mainLogo}/></button>
      </Link>

      <button className='flex flex-col mr-24 mt-2' onClick={()=>setOpen((prev)=>!prev)} >
        <TfiAlignJustify size={24} className='m-auto' />
        <div className='content-center text-md '>Menu</div>

        {isOpen && <Dropdown />}

      </button>

      <div className=" flex flex-row justify-evenly h-8 gap-2">
        <input type="text" placeholder=' Search for drinks' className='w-46 border-2 border-black rounded mt-2.5 h-10'/>
        <button className='mt-5'>
        <TfiSearch />
        </button>
      </div>

      
      <Link>
        <div className="mt-3">
          <TfiUser size={24}/>
        </div>
      </Link>
      
      <Link to="/Cart">
        <div className="mt-3">
          <TfiShoppingCartFull size={28}/>

        </div>
      </Link>


    </div>
  )
}

