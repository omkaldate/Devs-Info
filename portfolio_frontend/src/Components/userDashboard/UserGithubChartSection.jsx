import React from "react";
import image from "../../assets/icons/notfound.png";
import GitHubCalendar from "react-github-calendar";

function UserGithubChartSection({ github_user_name }) {
  return (
    <>
      <div className="mb-4">
        <h6 className="mb-3">Github contributions : </h6>
        {github_user_name.length == 0 ? (
          <div className="github-contributions-container flex-center">
            <div className="flex flex-column flex-center">
              <div>
                {" "}
                <img src={image} alt="" height="50" />
              </div>
              <div className="mt-1">
                <b>Nothing here</b>
              </div>
              <div className="font-size-10">
                Please connect your github account
              </div>
            </div>
          </div>
        ) : (
          <div>
            <GitHubCalendar username={`${github_user_name}`} />
          </div>
        )}
      </div>
    </>
  );
}

export default UserGithubChartSection;
