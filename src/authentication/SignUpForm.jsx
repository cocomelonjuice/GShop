import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const { signup, isLoading } = useSignup();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password });
  }

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-200 mt-24 rounded-xl flex flex-col justify-between gap-2 p-4 max-w-fit m-auto"
      >
        <h1 className="text-xl mb-6 ml-6">CREATE NEW ACCOUNT</h1>

        <div className="grid grid-cols-2">
          <div className="flex gap-5 flex-col">
            <h1 className="mr-7">Username</h1>
            <h1>Email Address</h1>
            <h1 className="mr-8">Password</h1>
            <h1 className="ml-5">Repeat Password</h1>
          </div>

          <div className="flex flex-col gap-4 ">
            <div className="flex gap-4">
              <input
                type="text"
                id="userName"
                {...register("userName", {
                  required: "This field is required",
                })}
                className="text-gray-600 italic border-gray-400 border-2 rounded-md "
              />
              <p className="text-red-600">{errors.userName?.message}</p>
            </div>

            <div className="flex gap-4">
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Enter valid email address",
                  },
                })}
                className="text-gray-600 italic  border-gray-400 border-2  rounded-md"
              />
              <p className="text-red-600">{errors.email?.message}</p>
            </div>

            <div className="flex gap-4">
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "This field is required",
                  minLength: { value: 8, message: "Minimum 8 characters" },
                })}
                className="text-gray-600 italic  border-gray-400 border-2  rounded-md"
              />
              <p className="text-red-600">{errors.password?.message}</p>
            </div>

            <div className="flex gap-4">
              <input
                type="password"
                id="passwordConfirm"
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().password || "Passwords do not match",
                })}
                className="text-gray-600 italic  border-gray-400 border-2  rounded-md"
              />
              <p className="text-red-600">{errors.passwordConfirm?.message}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-20 m-auto gap-0 ">
          <button
            type="submit"
            className="text-white bg-purple-500 max-w-fit m-auto p-1 rounded-md mt-4"
          >
            Complete
          </button>
          <button
            onClick={handleNavigate}
            className="text-white bg-purple-500 max-w-fit m-auto p-1 rounded-md mt-4"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
