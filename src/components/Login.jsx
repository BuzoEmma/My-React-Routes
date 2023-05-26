import React, { useState } from "react";
import { useAuth } from "./Auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [User, setUser] = useState("");
  
  const Auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";


  const handleLogin = () => {
    Auth.login(User);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <label htmlFor="login">
        Username
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
