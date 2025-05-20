// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // or wherever your auth context is

export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // User is not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  return children;
}
