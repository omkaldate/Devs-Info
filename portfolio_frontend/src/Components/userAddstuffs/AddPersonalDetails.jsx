import React from "react";
import StuffHeader from "./StuffHeader";
import { NavLink, Routes, Route } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import AccountForm from "./AccountForm";

function AddPersonalDetails() {


  return (
    <>
      <div class="row" style={{ width: "80%" }}>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              {/* <h4 class="card-title mb-4">Activities</h4> */}
              <StuffHeader
                title={"Add Personal Details"}
                url={"/dashboard/home"}
              />
              <div className="mb-3">
                <ul class="nav nav-tabs nav-tabs-custom">
                  <li class="nav-item">
                    <NavLink to="/dashboard/addpersonaldetails/profile">
                      {({ isActive, isPending, isTransitioning }) => (
                        <a
                          className={
                            isActive
                              ? "nav-link active"
                              : "nav-link color-black"
                          }
                        >
                          Profile
                        </a>
                      )}
                    </NavLink>
                  </li>

                  <li class="nav-item">
                    <NavLink to="/dashboard/addpersonaldetails/account">
                      {({ isActive, isPending, isTransitioning }) => (
                        <a
                          className={
                            isActive
                              ? "nav-link active"
                              : "nav-link color-black"
                          }
                        >
                          Account
                        </a>
                      )}
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* Route body */}
              <div>
                <Routes>
                  <Route path="/profile" element={<ProfileForm />} />
                  <Route path="/account" element={<AccountForm />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPersonalDetails;
