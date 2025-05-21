import React from "react";
import { NavLink } from "react-router-dom";

function Panel() {
  return (
    <>
      <div class="topnav">
        <div class="container-fluid">
          <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
            <div
              class="collapse main_nav navbar-collapse"
              id="topnav-menu-content"
            >
              <ul class="navbar-nav">
                {/* section 1 */}
                <NavLink to="/dashboard/home">
                  <li class="nav-item dropdown" style={{ marginRight: "20px" }}>
                    <span
                      class="nav-link dropdown-toggle arrow-none"
                      id="topnav-dashboard"
                      role="button"
                    >
                      <i class="bx bx-home-circle me-2"></i>
                      <span key="t-dashboards">Dashboard</span>{" "}
                      {/* <div class="arrow-down"></div> */}
                    </span>
                  </li>
                </NavLink>

                {/* section 2 */}
                <NavLink to="/dashboard/themes">
                  <li class="nav-item dropdown" style={{ marginRight: "20px" }}>
                    <span
                      class="nav-link dropdown-toggle arrow-none"
                      id="topnav-uielement"
                      role="button"
                    >
                      <i class="bx bx-briefcase me-2"></i>
                      <span key="t-ui-elements">Themes</span>
                    </span>
                  </li>
                </NavLink>

                {/* section 3 */}
                <NavLink to="/dashboard/search">
                  <li
                    class="nav-item dropdown"
                    style={{ marginRight: "20px", cursor: "pointer" }}
                  >
                    <a
                      class="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-dashboard"
                      role="button"
                    >
                      <i class="bx bx-user-check me-2"></i>
                      <span key="t-dashboards">Search</span>{" "}
                    </a>
                  </li>
                </NavLink>

                {/* section 4 */}
                <NavLink to="/dashboard/projects">
                  <li class="nav-item dropdown" style={{ marginRight: "20px" }}>
                    <a
                      class="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-dashboard"
                      role="button"
                    >
                      <i class="bx bx-adjust me-2"></i>
                      <span key="t-dashboards">Projects</span>{" "}
                    </a>
                  </li>
                </NavLink>

                <NavLink to="/dashboard/mynetwork/followers">
                  <li class="nav-item dropdown" style={{ marginRight: "20px" }}>
                    <a
                      class="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-dashboard"
                      role="button"
                    >
                      <i class="bx bx-user-pin me-2"></i>
                      <span key="t-dashboards">My Network</span>{" "}
                    </a>
                  </li>
                </NavLink>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Panel;
