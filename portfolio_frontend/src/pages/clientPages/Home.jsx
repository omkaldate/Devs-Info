import React, { useState } from "react";
import HomeNavbar from "../../Components/homePage/HomeNavbar";
import { NavLink } from "react-router-dom";
import "../../assets/css/homePage.css";
import go from "../../assets/icons/right.png";

function Home() {
  const [u_name, setUname] = useState("");

  return (
    <>
      <HomeNavbar />
      <div className="landing_container">
        <div className="l_heading">The dev's info</div>
        <div className="sub_title">
          Create your dev profile and show off your skills
        </div>

        <div className="">
          <div class="flex">
            <div class="mr-10" style={{ width: "100%" }}>
              <input
                type="text"
                class="form-control search-user-input"
                id="formrow-email-input"
                placeholder="Search user"
                autoComplete="off"
                value={u_name}
                onChange={(e) => setUname(e.target.value)}
              />
            </div>
            <div
              className="pointer"
              onClick={() => {
                window.location.href = u_name;
              }}
            >
              <img src={go} height="38" alt="" />
            </div>
          </div>
        </div>

        {localStorage.getItem("token") ? (
          <>
            <div className="or"></div>
            <NavLink to="/dashboard/home" style={{ textDecoration: "none" }}>
              <div className="sign_email">Go to / Dashboard</div>
            </NavLink>
          </>
        ) : (
          <>
            <div className="mt-5"></div>
            <NavLink to="/signup" style={{ textDecoration: "none" }}>
              <span className="l_button">
                {/* <img src={google} className="login_google" height="20" /> */}
                <span style={{ fontWeight: "500" }}>New user? Sign up</span>
              </span>
            </NavLink>
            <div className="or">or</div>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <div className="sign_email">login w/ username</div>
            </NavLink>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
