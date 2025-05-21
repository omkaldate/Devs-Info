import React, { useState, useEffect } from "react";
import user from "../../assets/images/users/avatar-1.jpg";
import UserMyNetworkMessage from "./UserMyNetworkMessage";
import { getFollowing } from "../../api/UserApi";
import UserCard from "./UserCard";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";

function FollowingComponent() {
  const [followerState, setFollowerState] = useState(false);
  const [userData, setUsers] = useState([]);

  const notify = (msg) => toast(msg);

  useEffect(() => {
    const uid = localStorage.getItem("uid");

    (async () => {
      const result = await getFollowing(uid);
      const data = result.data;
      if (data != null && data.success) {
        setUsers(data.data);
        setFollowerState(true);
        console.log(data.data);
      } else {
        // console.log(result);
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
                return <UserCard key={index} user={user} result={result.uid} />;
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

export default FollowingComponent;
