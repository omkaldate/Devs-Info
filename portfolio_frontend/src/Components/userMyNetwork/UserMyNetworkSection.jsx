import { React, useState } from "react";
import UserMyNetworkMessage from "./UserMyNetworkMessage";
import { NavLink, Route, Routes } from "react-router-dom";
import PeersComponent from "./PeersComponent";
import FollowingComponent from "./FollowingComponent";
import FollowerComponent from "./FollowerComponent";

function UserMyNetworkSection() {
  return (
    <>
    
      <div class="row">
        <div class="col-lg-12">
          <div class="card mynetwork-container">
            <div class="card-body">
              <h4 class="card-title mb-4">Activities</h4>

              <div>
                <ul class="nav nav-tabs nav-tabs-custom">
                  {/* <li class="nav-item">
                    <NavLink to="/dashboard/mynetwork/peers">
                      {({ isActive, isPending, isTransitioning }) => (
                        <a
                          className={isActive ? "nav-link active" : "nav-link color-black"}
                        >
                          Peers
                        </a>
                      )}
                    </NavLink>
                  </li> */}

                  <li class="nav-item">
                    <NavLink to="/dashboard/mynetwork/followers">
                      {({ isActive, isPending, isTransitioning }) => (
                        <a
                          className={isActive ? "nav-link active" : "nav-link color-black"}
                        >
                          Followers
                        </a>
                      )}
                    </NavLink>
                  </li>

                  <li class="nav-item">
                    <NavLink to="/dashboard/mynetwork/following">
                      {({ isActive, isPending, isTransitioning }) => (
                        <a
                          className={isActive ? "nav-link active" : "nav-link color-black"}
                        >
                          Following
                        </a>
                      )}
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* Route body */}
              <div>
                <Routes>
                  {/* <Route path="/peers" element={<PeersComponent />} /> */}
                  <Route path="/followers" element={<FollowerComponent />} />
                  <Route path="/following" element={<FollowingComponent />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserMyNetworkSection;
