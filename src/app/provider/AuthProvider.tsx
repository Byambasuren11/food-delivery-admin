import React, { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";

const AuthProvider = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const { decodedToken, isExpired } = useJwt(token);
  const navigate = useNavigate(); // useNavigate replaces useHistory in React Router v6

  useEffect(() => {
    if (!token || isExpired) {
      navigate("/login"); // Redirect to login page if no token or token is expired
    }
  }, [token, isExpired, navigate]);

  if (isExpired) {
    return <div>Your session has expired. Please log in again.</div>;
  }

  if (!decodedToken) {
    return <div>Invalid token. Please log in again.</div>;
  }

  return <div>Welcome {decodedToken.name}!</div>;
};

export default AuthProvider;
