import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = localStorage.getItem("sb-gizwpeatbfldniwqrmel-auth-token");
  return auth ? <Outlet /> : <Navigate to="/authentication/LoginForm" />;
};

export default PrivateRoutes;
