import { useNavigate } from "react-router-dom"
import LoginForm from "../authentication/LoginForm";
import LogOut from "../authentication/LogOut";
import SignUpForm from "../authentication/SignUpForm";


export default function DropdownUser (){

  const navigate = useNavigate();

  function handleNavigateLogin(){
    navigate("/authentication/LoginForm");
  }

  function handleNavigateSignup(){
    navigate("/authentication/SignUpForm");
  }

  function handleNavigateLogout(){
    navigate("/authentication/LogOut");
  }

  return (
    <>      
    <div className="absolute border-solid  border-b-8 border-x-transparent border-x-8 border-t-0 border-gray-400 mt-14 mr-96 "></div>
            <div className="absolute border-2 border-gray-400 w-32 mt-16 mr-80  shadow-2xl rounded-lg rounded-tl-none text-black  ">
                <ul className='m-0 text-white hover:bg-blue-400 hover:border-blue-400'><LoginForm /></ul>
                <ul className='m-0 text-white hover:bg-blue-400 hover:border-blue-400'><SignUpForm /></ul>
                <ul className='m-0 text-white hover:bg-blue-400 hover:border-blue-400'><LogOut /></ul>
            </div>
    </>
  )
}

