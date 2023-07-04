import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
if(!loading ){
  if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  }

  // if (isAdmin === true && user.role !== "admin") {
  //   return <Navigate to="/login" />;
  // }

  return <Outlet/>;
}};

export default ProtectedRoute;
