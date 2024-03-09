import { useNavigate } from "react-router-dom";
import { useUser } from "../authentication/useUser";
import { useEffect } from "react";

function ProtectedRoute({children})  {

    const navigate = useNavigate()

    //1. Load the authenticated user
    const { isLoading, isAuthenticated} = useUser;
   
    //2. If there's no authenticated user, redirect page to the /login
    useEffect(function(){
        if(!isAuthenticated && !isLoading) navigate("/");
    }, [isAuthenticated, isLoading, navigate]);

     //3. while loading, show a spinner

    //4. If there's a user, reder app
    if (isAuthenticated)return children;
}

export default ProtectedRoute