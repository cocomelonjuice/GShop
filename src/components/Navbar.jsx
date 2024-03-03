import mainLogo from "../assets/image/ShopG_image.PNG"
import {Link} from "react-router-dom"
import { TfiAlignJustify, TfiSearch, TfiUser, TfiShoppingCartFull  } from "react-icons/tfi";
import { useState } from 'react';
import Dropdown from './Dropdown';
import {useSelector} from "react-redux";
import {store} from "../redux/ReduxStore"
import LoginForm from '../authentication/LoginForm';

import FilterableList from "./Searchbar"

export default function Navbar () {
  //const {cart}= useSelector((state)=>state);
  const {choosenItems}=useSelector((state)=>state.cart)
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

      {/*<div className=" flex flex-row relative justify-evenly h-8 gap-2">
        <input type="text" placeholder=' Search for drinks' className='w-80 border-2 border-black rounded mt-2.5 h-10 text-black p-1'/>
        <button className='mt-5 absolute right-0 top-0 mr-2  text-black font-bold   w-5 h-5 content-center p-0.5'>
        <TfiSearch />
        </button>
      </div>*/}
      

      
      <div className=" flex flex-row relative justify-evenly h-8 gap-2">
      {<FilterableList ></FilterableList>}
        <button className='mt-5 absolute right-0 top-0 mr-2  text-black font-bold   w-5 h-5 content-center p-0.5'>
        <TfiSearch />
        </button>
      </div>
        

 
      
      <Link to="/authentication/LoginForm">
        <div className="mt-3">
          <TfiUser size={24}/>
        </div>
      </Link>
      
      {/* add logic: only show number of item in cart when item.length>0 , and when item.length>99, show 99+ to not overstretch the icon*/ }
      <Link to="/Cart">
        <div className="relative  mt-3 ">
          <TfiShoppingCartFull size={28}/>
          {choosenItems?.length > 0 && (
            <div className="absolute  text-xs flex justify-center items-center animate-bounce -top-1 left-6 rounded-full w-5 h-5 bg-red-600 p-2.5 ">{/*{cart.length}*/}{choosenItems.length}</div>
          )}
          

        </div>
      </Link>


    </div>
  )
}

