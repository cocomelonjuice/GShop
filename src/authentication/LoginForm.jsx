import React from 'react'
import { useState } from 'react';
import { login } from '../services/apiAuth';

const LoginForm = () => {

  const[email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  function handleSubmit (e){
    e.preventDefault();
    if (!email || !password) return;

    login({email, password}); // pass in an object {email, password}  inside a function login
  }

  return ( 
    <>
        <form onSubmit={handleSubmit} className='bg-gray-200 mt-52 flex flex-col gap-4 p-4 max-w-fit m-auto'> {/*flex justify-center items-center mx-24 my-48  */} {/*grid place-content-center m-auto w-1/2 h-1/2  */}
            <h1 className='text-xl mb-6'>
              Sign in to ShopG
            </h1>
           
            <div className='flex flex-row m-auto gap-4'>
                <h1>Username</h1>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your name"  className='text-gray-600 italic border-gray-400 border-2 rounded-md '/>
            </div>

            <div className='flex flex-row m-auto gap-5'>
                <h1>Password</h1>
                <input type="password" value ={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Your password" className="text-gray-600 italic  border-gray-400 border-2  rounded-md" />
            </div>
          
            <button stype="submit" className='text-white bg-purple-500 max-w-fit m-auto p-1 rounded-md mt-4'>Login</button>
            
        </form>
    </>
  )
}

export default LoginForm