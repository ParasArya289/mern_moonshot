import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const token = false;
function ProtectedRoute({ children }) {
  const location = useLocation();
  // const {token} = useAuth();
  // console.log(token)
  return token ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location?.pathname }} replace />
  );
}

export default ProtectedRoute;
