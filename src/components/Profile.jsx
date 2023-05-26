import React from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  
  const auth = useAuth();
  const navigation = useNavigate()

  const handleLogOut = () => {
    auth.logout();
    navigation("/")
  };

  return (
    <div>
      My Profile page {auth.User} <br /><br />
      <button onClick={handleLogOut}>logOut</button>
    </div>
  );
};

export default Profile;
