import React, { useEffect, useState } from "react";
import logo from "../../assets/images/profile-img.png";

// import images
import profile from "../../assets/icons/profile.png";
import { getFollowers } from "../../api/UserApi";
import { getProject } from "../../api/projectApi";
import { NavLink } from "react-router-dom";

function UserWelcomeBackCard() {
  const uid = localStorage.getItem("uid");

  const [followers, setFollowers] = useState(0);
  const [project, setProject] = useState(0);

  // fetch followers of user
  useEffect(() => {
    (async () => {
      const result = await getFollowers(uid);
      const data = result.data;
      if (data != null && data.success) {
        setFollowers(data.data.length);
      }
    })();
  }, []);

  // fetch projects done by user
  useEffect(() => {
    (async () => {
      const result = await getProject(uid);
      const data = result.data;
      if (data != null && data.success) {
        setProject(data.data.length);
      }
    })();
  }, []);

  return (
    <div class="card overflow-hidden">
      <div class="bg-primary bg-soft">
        <div class="row">
          <div class="col-7">
            <div class="text-primary p-3">
              <h5 class="text-primary">Welcome Back !</h5>
              <p>Skote Dashboard</p>
            </div>
          </div>
          <div class="col-5 align-self-end">
            <img src={logo} alt="" class="img-fluid" />
          </div>
        </div>
      </div>
      <div class="card-body pt-0">
        <div class="row">
          <div class="col-sm-4">
            <div class="avatar-md profile-user-wid mb-4">
              <img src={profile} alt="" class="img-thumbnail rounded-circle" />
            </div>
            Logged-In As:{" "}
            <h5 class="font-size-15 text-truncate">
              {localStorage.getItem("u_name")}
            </h5>
          </div>

          <div class="col-sm-8">
            <div class="pt-4">
              <div class="row">
                <div class="col-6">
                  <h5 class="font-size-15">{project}</h5>
                  <p class="text-muted mb-0">Projects</p>
                </div>
                <div class="col-6">
                  <h5 class="font-size-15">{followers}</h5>
                  <p class="text-muted mb-0">Followers</p>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <NavLink to={`/${localStorage.getItem("u_name")}`}>
              <span
                class="btn btn-primary waves-effect waves-light btn-sm"
                >
                View Profile <i class="mdi mdi-arrow-right ms-1"></i>
              </span>
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserWelcomeBackCard;
