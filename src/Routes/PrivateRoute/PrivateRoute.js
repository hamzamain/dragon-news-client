import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

/* 
1. only allow authenticated user to visite the route
2.
3.Redirect user to the route they wanted to go before login
*/
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  //if loading === true --> spiner will show
  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  //after loading is false : if don't have user then go to login page
  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
