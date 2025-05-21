import React from "react";

function ViewProjectCommentsCard({ u_name, comment_description }) {
  return (
    <>
      <div>
        <div class="d-flex py-3">
          <div class="flex-shrink-0 me-3">
            <div class="avatar-xs">
              <div class="avatar-title rounded-circle bg-light text-primary">
                <i class="bx bxs-user"></i>
              </div>
            </div>
          </div>
          <div class="flex-grow-1">
            <h5 class="font-size-14 mb-1">
              {u_name}
              {/* <small class="text-muted float-end">1 hr Ago</small> */}
            </h5>
            <p class="text-muted">{comment_description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProjectCommentsCard;
