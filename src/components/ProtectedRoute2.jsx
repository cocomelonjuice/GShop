import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ()=>{
    let auth= localStorage.getItem("sb-gizwpeatbfldniwqrmel-auth-token");//đây là tên trong local storage ->localhost -> tên Key
    //cần phải access được token của user đã login để có thể verfiy (nằm ở local storage ? supabase ?)
    return (
        auth? <Outlet/> : <Navigate to="/authentication/LoginForm"/>
    )
}

export default PrivateRoutes;
