import React, { useEffect, useState } from "react";
import user from "../../assets/images/users/avatar-1.jpg";
import UserCard from "./UserCard";
import UserMyNetworkMessage from "./UserMyNetworkMessage";
import { getFollowers } from "../../api/UserApi";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";

function FollowerComponent() {
  const [followerState, setFollowerState] = useState(false);
  const [userData, setUsers] = useState([]);

  const notify = (msg) => toast(msg);

  useEffect(() => {
    const uid = localStorage.getItem("uid");

    (async () => {
      const result = await getFollowers(uid);
      const data = result.data;
      if (data != null && data.success) {
        setUsers(data.data);
        setFollowerState(true);
      } else {
        notify("Some error occured");
      }
    })();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {followerState ? (
        userData.length > 0 ? (
          <div className="">
            {/* <PeersComponentSearchBar /> */}

            <div className="row user-search-container mt-3">
              {userData.map((result, index) => {
                return (
                  <UserCard
                    key={index}
                    user={user}
                    result={result.follower_id}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <UserMyNetworkMessage title={"You dont't have any followers yet"} />
          </div>
        )
      ) : (
        <div className="mt-4 flex center">
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
    </>
  );
}

export default FollowerComponent;
