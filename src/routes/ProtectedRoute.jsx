import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = localStorage.getItem("user");
    
  if (isLoggedIn) {
    return <Outlet />;
  }


  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
