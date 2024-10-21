import { useNavigate } from "react-router-dom";
import { useUser } from "../authentication/useUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser;

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
