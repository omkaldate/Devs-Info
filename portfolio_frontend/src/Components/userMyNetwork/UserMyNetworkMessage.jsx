import React from "react";
import message from "../../assets/icons/message.png";

function UserMyNetworkMessage({title}) {
  return (
    <>
      <div class="mt-4">
        <div className="mynetwork-bar-container">
        <div className="mb-3">
          <img src={message} height="80" alt="" />
        </div>
          <div>
            <span className="font-weight-600">No one here yet.</span>
          </div>
          <div>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserMyNetworkMessage;
