import React, { useEffect, useState } from "react";
import UserDescriptionCard from "./UserDescriptionCard";
import UserShowcaseSection from "./UserShowcaseSection";
import UserGithubChartSection from "./UserGithubChartSection";
import UserProjectSection from "./UserProjectSection";
import UserLinkSection from "./UserLinkSection";
import { getUser } from "../../api/UserApi";
import { ThreeDots } from "react-loader-spinner";

function UserDashborad() {
  // user state
  const [userState, setUserState] = useState(false);
  const [user, setUser] = useState(null);
  const uid = localStorage.getItem("uid");

  // get user data
  useEffect(() => {
    (async () => {
      const result = await getUser(uid);
      const data = result.data;
      if (data != null && data.success === true) {
        setUser(data.data);
        setUserState(true);
      } else {
        // navigate to home later while fixing bug
        alert("Some error occured while fetching user data");
      }
    })();
  }, []);

  return (
    <>
      <div className="user-dashboard-container">
        {userState ? (
          <UserDescriptionCard user={user} />
        ) : (
          <div>
            <ThreeDots
              height="30"
              width="30"
              radius="9"
              color="gray"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        )}
        <UserShowcaseSection />
        {userState ? (
          <UserGithubChartSection github_user_name={user.github_user_name} />
        ) : (
          <div>
            <ThreeDots
              height="30"
              width="30"
              radius="9"
              color="gray"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        )}
        <UserProjectSection />

        {userState ? (
          <UserLinkSection
            lc={user.leetcode}
            gfg={user.gfg}
            cf={user.codeforces}
            li={user.linkedin}
          />
        ) : (
          <div>
            <ThreeDots
              height="30"
              width="30"
              radius="9"
              color="gray"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default UserDashborad;
