import React from "react";
import avtar from "../../assets/icons/logout.png";
import logo from "../../assets/homePageAssets/hexagon.png"
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header id="page-topbar">
        <div class="navbar-header">
          <div class="d-flex">
            <NavLink to="/">
              <div class="navbar-brand-box">
                <a class="logo logo-light">
                  <span class="logo-sm">Dev's Info</span>
                  <span class="logo-lg font_size_20px color-white">
                    <span><img src={logo} alt="" height="30" className="mr-5"/></span>
                    Dev's Info
                  </span>
                </a>
              </div>
            </NavLink>

            <button
              type="button"
              class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
            >
              <i class="fa fa-fw fa-bars"></i>
            </button>

            {/* <form class="app-search d-none d-lg-block">
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
                <span class="bx bx-search-alt"></span>
              </div>
            </form> */}
          </div>

          <div class="d-flex">
            <div class="dropdown d-inline-block">
              <img
                src={avtar}
                height="30"
                alt="Header Avatar"
              />
              <span
                class="d-none pointer d-xl-inline-block ms-1 color-white font-weight-500"
                key="t-henry"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
