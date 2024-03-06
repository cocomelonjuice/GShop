import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";

export function useLogin(){
   const navigate = useNavigate();

   const {mutate: login, isLoading}=  useMutation({
        mutationFn : ({email,password})=>loginApi({email, password}),
        onSuccess: (user)=>{
           //console.log(user);
           navigate("/");
           toast.success("Login successful")
        },
        onError: (err)=>{
            //console.log("ERROR", err);
            toast.error("Wrong email or password")
        },
    });
    return {login, isLoading};
}