// src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext"; // ✅ Default import (recommended)

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="text-white text-center mt-10 text-xl">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;