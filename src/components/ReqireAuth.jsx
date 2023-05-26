import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "./Auth";

export const RequiredAuth = ({ children }) => {
  const Auth = useAuth();
const location = useLocation()
  if (!Auth.User) {
    return <Navigate to="/login" state={{path: location.pathname}} />;
  }

  return children;
};
