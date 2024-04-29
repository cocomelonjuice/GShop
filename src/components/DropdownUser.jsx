import { useNavigate } from "react-router-dom"
import LoginForm from "../authentication/LoginForm";
import LogOut from "../authentication/LogOut";
import SignUpForm from "../authentication/SignUpForm";
import {toast} from "react-hot-toast";


export default function DropdownUser (){

  let authUser= localStorage.getItem("sb-gizwpeatbfldniwqrmel-auth-token");//get item for any user, not just only this user

  const navigate = useNavigate();

  function handleNavigateLogin(){
    if (authUser){
      toast.success(
        "You have already logged in"
    );
    }else {
      navigate("/authentication/LoginForm");
    }
  }

  function handleNavigateSignup(){
    if (authUser){
      toast.success(
        "Want another account ? Log out then sign up again"
    );
    }else {
      navigate("/authentication/SignUpForm");
    }
  }

  function handleNavigateLogout(){
    navigate("/authentication/LogOut");
  }

  return (
    <>      
    <div className="absolute border-solid  border-b-8 border-x-transparent border-x-8 border-t-0 border-gray-400 mt-5 mr-96 "></div>
            <div className="absolute border-2 border-gray-400 w-32 mt-7 mr-80  shadow-2xl rounded-lg rounded-tl-none text-black bg-white  ">
                <ul onClick={handleNavigateLogin} className='m-0  hover:bg-blue-400 hover:border-blue-400'>Login</ul>
                <ul onClick={handleNavigateSignup} className='m-0  hover:bg-blue-400 hover:border-blue-400'>Sign Up</ul> 
                <ul onClick={handleNavigateLogout} className='m-0  hover:bg-blue-400 hover:border-blue-400'>Log Out</ul>
            </div>
    </>
  )
}

