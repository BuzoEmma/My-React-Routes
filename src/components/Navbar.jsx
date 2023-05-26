import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

const Navbar = () => {
  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoderation: isActive ? "none" : "underline",
    };
  };

  const Auth = useAuth();

  return (
    <nav className="primary-nav">
      <NavLink style={activeStyle} to={"/"}>
        Home
      </NavLink>
      <NavLink style={activeStyle} to={"/about"}>
        About
      </NavLink>
      <NavLink style={activeStyle} to={"/products"}>
        Products
      </NavLink>
      <NavLink style={activeStyle} to={"/user"}>
        User
      </NavLink>
      <NavLink style={activeStyle} to={"/profile"}>
        Profile
      </NavLink>
      {!Auth.User && (
        <NavLink style={activeStyle} to={"/login"}>
          Login
        </NavLink>
       
      )}
    </nav>
  );
};

export default Navbar;
