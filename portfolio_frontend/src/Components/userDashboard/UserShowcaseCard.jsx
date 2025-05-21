import React from "react";
import { useNavigate } from "react-router-dom";

function UserShowcaseCard({ image, title, description, url }) {
  const navigate = useNavigate();

  return (
    <>
      <div class="card mini-stats-wid my-project-card-container input-border">
        <div class="card-body">
          <div class="d-flex flex-wrap">
            <div class="flex">
              <div className="icon mr-5">
                <img src={image} alt="" height="35" className="" />
              </div>
              <div>
                <h5 class="mb-0">{title}</h5>
                <p class="text-muted mb-2">{description}</p>
              </div>
            </div>

            <div class="avatar-sm ms-auto">
              <div
                class="avatar-title bg-light rounded-circle text-primary font-size-20 pointer"
                onClick={() => {
                  if (url != "") {
                    navigate(url);
                  }
                }}
              >
                <i class="bx bx-plus-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserShowcaseCard;
