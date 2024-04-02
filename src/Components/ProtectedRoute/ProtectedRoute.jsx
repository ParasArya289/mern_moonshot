import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useEcommerceData } from "../../Context/EcommmerceContext";

const token = false;
function ProtectedRoute({ children }) {
  const {user} = useEcommerceData();
  const location = useLocation();
  return user?.email ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location?.pathname }} replace />
  );
}

export default ProtectedRoute;
