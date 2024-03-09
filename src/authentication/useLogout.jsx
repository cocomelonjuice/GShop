import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logout as logoutApi} from "../services/apiAuth";
import { useNavigate } from "react-router-dom";


export function useLogout(){
  const navigate= useNavigate();
  const queryClient=useQueryClient();

  const {mutate: logout, isLoading}= useMutation({
    mutationFn: logoutApi,
    onSuccess: ()=>{
        queryClient.removeQueries();// remove all user from server and local storage, but the user is still store in cache
        navigate("/authentication/LoginForm", {replace: true})
    },
  });
  return {logout, isLoading}
}

export default useLogout