import React from "react";
import SkillSetComponent from "../../../Components/userDashboard/UserSkillSetComponent";
import profile from "../../../assets/images/profile.jpeg";

function UserDescriptionCard({ user }) {
  return (
    <div class="mb-4 input-border">
      <div>
        <div class="row">
          <div class="col-lg-9 col-sm-8">
            <div class="p-4">
              <h3 class="text-primary">{user.full_name}</h3>
              <p>{user.u_description}</p>

              <div class="skill-set-container">
                {user.skills.length === 0 ? "Enter Your Skill set" : ""}
                {user.skills.map((res) => {
                  return <SkillSetComponent title={res} />;
                })}
              </div>
            </div>

            <div className="description-bottom-container">
              <div className="description-bottom">
                <span>
                  <i
                    class="dripicons-location me-1"
                    style={{ fontSize: "15px" }}
                  ></i>
                </span>
                {user.u_city}, {user.u_country}
              </div>
              <div className="description-bottom">
                <span>
                  <i
                    class="bx bx-buildings me-2"
                    style={{ fontSize: "15px" }}
                  ></i>
                </span>
                <span className="me-1">{user.u_company_name} </span>
              </div>
              <div className="description-bottom">
                <span>
                  <i class="bx bx-upvote me-2" style={{ fontSize: "15px" }}></i>
                </span>
                <span className="me-1">Experience - </span>{" "}
                <span>{user.u_work_experience} Yrs</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-4 align-self-center">
            <img src={user.u_image} alt="" className="profile-container" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDescriptionCard;
