import React from "react";
import back from "../../assets/icons/back.png";
import { useNavigate } from "react-router-dom";
function StuffHeader({ title, url }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex stuff-header-container mb-3">
        <div
          className="mr-10 pointer"
          onClick={() => {
            if (url != "") {
              navigate(url);
            }
            else {
              navigate(-1);
            }
          }}
        >
          <img src={back} height="20" alt="" />
        </div>
        <div className="mt-2">
          <h5>{title}</h5>
        </div>
      </div>
    </>
  );
}

export default StuffHeader;
