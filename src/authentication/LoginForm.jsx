import React from 'react'

const LoginForm = () => {
  return (
    <>
        <form className='bg-gray-200 '> 
            <div>
                <h1>User Name</h1>
                <input type="text" placeholder="Your name"  className='text-gray-600 italic border-gray-400 border-2 '/>
            </div>

            <div>
            <h1>Password</h1>
                <input type="text" placeholder="Your password" className="text-gray-600  border-gray-400 border-2  " />
            </div>

            <button className='text-white bg-purple-500 '>Login</button>
            
        </form>
    </>
  )
}

export default LoginForm