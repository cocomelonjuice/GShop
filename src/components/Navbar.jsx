import mainLogo from '../assets/image/ShopG_image.png'
import {Link} from "react-router-dom"
import { TfiAlignJustify, TfiSearch, TfiUser, TfiShoppingCartFull  } from "react-icons/tfi";
import { useState } from 'react';
import Dropdown from './Dropdown';
import {useSelector} from "react-redux";


export default function Navbar () {
  const {cart}= useSelector((state)=>state);
  const [isOpen,setOpen] = useState(false);
  
  return (
    
    <div className='fixed top-0 w-screen left-0 right-0 flex flex-row justify-evenly bg-blue-800 text-white'>
      <Link to="/"> 
        <button className='w-12 h-12 mt-1 '><img src={mainLogo}/></button>
      </Link>

      <button className='flex flex-col mr-24 mt-2' onClick={()=>setOpen((prev)=>!prev)} >
        <TfiAlignJustify size={24} className='m-auto' />
        <div className='content-center text-md '>Menu</div>

        {isOpen && <Dropdown />}

      </button>

      <div className=" flex flex-row justify-evenly h-8 gap-2">
        <input type="text" placeholder=' Search for drinks' className='w-80 border-2 border-black rounded mt-2.5 h-10 text-black p-1'/>
        <button className='mt-5'>
        <TfiSearch />
        </button>
      </div>

      
      <Link>
        <div className="mt-3">
          <TfiUser size={24}/>
        </div>
      </Link>
      
      {/* add logic: only show number of item in cart when item.length>0 , and when item.length>99, show 99+ to not overstretch the icon*/ }
      <Link to="/Cart">
        <div className="relative  mt-3 ">
          <TfiShoppingCartFull size={28}/>
          <div className="absolute  text-xs flex justify-center items-center animate-bounce -top-1 left-6 rounded-full w-5 h-5 bg-red-600 p-2.5 ">{cart.length}</div>

        </div>
      </Link>


    </div>
  )
}

