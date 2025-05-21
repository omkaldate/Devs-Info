import React, { useState, useEffect } from "react";
import UserDescriptionCard from "../../Components/UserProfilePageComponents/UserDescriptionCard";
import UserGithubChartSection from "../../Components/UserProfilePageComponents/UserGithubChartSection";
import UserProjectSection from "../../Components/UserProfilePageComponents/UserProjectSection";
import UserLinkSection from "../../Components/UserProfilePageComponents/UserLinkSection";
import UserPageHeader from "../../Components/userProfilePage/UserPageHeader";
import back from "../../assets/icons/back.png";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../api/UserApi";
import { ThreeDots } from "react-loader-spinner";

function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userState, setUserState] = useState(false);
  const [user, setUser] = useState(null);

  // alert(uid)
  useEffect(() => {
    (async () => {
      const result = await getUser(id);
      const data = result.data;
      if (data != null && data.success === true) {
        setUser(data.data);
        setUserState(true);
      } else {
        // navigate to home later while fixing bug
        alert("Some error occured while fetching user data");
        localStorage.clear();
        navigate("/");
      }
    })();
  }, []);

  return (
    <>
      <UserPageHeader back={back} title={"User Profile"} />
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
        <UserProjectSection uid={id} />
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

export default UserPage;
