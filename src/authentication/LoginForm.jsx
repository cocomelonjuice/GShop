import React from "react";
import { useState } from "react";
import { useLogin } from "./useLogin";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("tienminh@example.com");
  const [password, setPassword] = useState("12345678");

  const { login, isLoading } = useLogin();

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/authentication/SignUpForm");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setPassword("");
        },
      }
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 rounded-xl mt-52 flex flex-col gap-4 p-4 max-w-fit m-auto"
      >
        <h1 className="text-xl mb-6">Sign in to ShopG</h1>

        <div className="flex flex-row m-auto gap-4">
          <h1>Username</h1>
          <input
            type="email"
            value={email}
            disabled={isLoading}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your name"
            className="text-gray-600 italic border-gray-400 border-2 rounded-md "
          />
        </div>

        <div className="flex flex-row m-auto gap-5">
          <h1>Password</h1>
          <input
            type="password"
            value={password}
            disabled={isLoading}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            className="text-gray-600 italic  border-gray-400 border-2  rounded-md"
          />
        </div>

        <button
          stype="submit"
          disabled={isLoading}
          className="text-white bg-purple-500 max-w-fit m-auto p-1 rounded-md mt-4"
        >
          Login
        </button>
      </form>

      <button className="underline" onClick={handleNavigate}>
        New here ? Create an account.
      </button>
    </>
  );
};

export default LoginForm;
