import React from "react";
import HomeNavbar from "../../Components/homePage/HomeNavbar";
import SignupComponent from "../../Components/userLogin/SignupComponent";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();
  
  if (
    localStorage.getItem("uid") &&
    localStorage.getItem("token") &&
    localStorage.getItem("u_name")
  ) {
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
      <HomeNavbar />
      <SignupComponent />
    </>
  );
}

export default Signup;
