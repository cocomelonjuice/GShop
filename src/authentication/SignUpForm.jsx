import { useState } from "react";
import { useForm } from "react-hook-form";

//fix : react hook form error not showing

function SignUpForm (){
  const {register, formState, getValues, handleSubmit, formState: { errors },}= useForm();
  //const {errors}= formState;

  function onSubmit(data){
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='bg-gray-200 mt-52 flex flex-col gap-4 p-4 max-w-fit m-auto'>
            
            <h1 className='text-xl mb-6'>
            CREATE NEW ACCOUNT
            </h1>
           
            <div error={errors?.userName?.message}  className='flex flex-row m-auto gap-4'>
                <h1>Username</h1>
                <input type="text" id="userName" {...register("userName", {required: "This field is required"})}  className='text-gray-600 italic border-gray-400 border-2 rounded-md '/>
            </div>

            <div error={errors?.email?.message}  className='flex flex-row m-auto gap-5'>
                <h1>Email Address</h1>
                <input type="email" id="email" {...register("email", {required: "This field is required", pattern:{ value: /\S+@\S+\.\S+/, message: "Enter valid email address"}})} className="text-gray-600 italic  border-gray-400 border-2  rounded-md" /> {/*regex email validation */}
            </div>

            <div   className='flex flex-row m-auto gap-5'>
                <h1>Password</h1>
                <input type="password" id="password" {...register("password", {required: "This field is required", minLength: { value:8, message: "Minimum 8 characters"}})} className="text-gray-600 italic  border-gray-400 border-2  rounded-md" />
            <p className="text-red-500">{errors.password?.message}</p>

            </div>
 

            <div error={errors?.passwordConfirm?.message}  className='flex flex-row m-auto gap-5'>
                <h1>Repeat Password</h1>
                <input type="password"  id="passwordConfirm" {...register("passwordConfirm", {required: "This field is required",validate:(value)=>value===getValues().password||"Repeat your password" })} className="text-gray-600 italic  border-gray-400 border-2  rounded-md" />
            </div>
          
            <button stype="submit" className='text-white bg-purple-500 max-w-fit m-auto p-1 rounded-md mt-4'>Complete</button>
      </form>
    </>
  )
}

export default SignUpForm;