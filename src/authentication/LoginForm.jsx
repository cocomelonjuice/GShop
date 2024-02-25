import React from 'react'

const LoginForm = () => {
  return (
    <>
        <form> 
            <div>
                <h1>User Name</h1>
                <input type="text" placeholder="Your name"  className='text-gray-600 italic '/>
            </div>

            <div>
            <h1>Password</h1>
                <input type="text" placeholder="Your password" className="text-gray-600 italic" />
            </div>

            <button>Login</button>
            
        </form>
    </>
  )
}

export default LoginForm