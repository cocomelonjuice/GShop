import React from 'react'

const LoginForm = () => {
  return ( 
    <>
        <form className='bg-gray-200 mt-52 flex flex-col gap-2 p-4'> {/*flex justify-center items-center mx-24 my-48  */} {/*grid place-content-center m-auto w-1/2 h-1/2  */}
            <div className='flex flex-row m-auto gap-2'>
                <h1>User Name</h1>
                <input type="text" placeholder="Your name"  className='text-gray-600 italic border-gray-400 border-2 '/>
            </div>

            <div className='flex flex-row m-auto gap-2'>
                <h1>Password</h1>
                <input type="text" placeholder="Your password" className="text-gray-600  border-gray-400 border-2  " />
            </div>

            <button className='text-white bg-purple-500 max-w-fit m-auto p-1'>Login</button>
            
        </form>
    </>
  )
}

export default LoginForm