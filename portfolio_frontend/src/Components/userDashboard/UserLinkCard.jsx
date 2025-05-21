import React from "react";
import { NavLink } from "react-router-dom";

function UserLinkCard({ image, title, link }) {
  return (
    <div class="card mini-stats-wid my-project-card-container input-border">
      <div class="card-body">
        <div class="d-flex flex-wrap">
          <div class="flex pointer">
            <div className="icon mr-5">
              <img src={image} alt="" height="20" className="" />
            </div>
            <div>
              <div
                onClick={() => {
                  window.location.href = link
                }}
              >
                <h5 class="mb-0">{title}</h5>
              </div>

              {/* <p class="text-muted mb-2">{description}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLinkCard;
