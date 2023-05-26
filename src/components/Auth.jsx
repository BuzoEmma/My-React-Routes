import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [User, setUser] = useState("");

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser("");
  };

  return (
    <AuthContext.Provider value={{ User, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
