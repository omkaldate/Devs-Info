import React, { useEffect } from "react";
import HomeNavbar from "../../Components/homePage/HomeNavbar";
import SigninComponent from "../../Components/userLogin/SigninComponent";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  if (
    localStorage.getItem("uid") ||
    localStorage.getItem("token") ||
    localStorage.getItem("u_name") ||
    localStorage.getItem("admin_token") ||
    localStorage.getItem("aid")
  ) {
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
      <HomeNavbar />
      <SigninComponent />
    </>
  );
}

export default Signin;
