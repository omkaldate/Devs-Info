import React, { useState, useEffect } from "react";
import UserSearchCard from "./UserSearchCard";
import UserSearchBar from "./UserSearchBar";
import { getAllUsersPagination, getUsersSearch } from "../../api/UserApi";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

function UserSearchSection() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);
  const [message, setMessage] = useState(false);

  // follow button states
  const [followState, setFollowState] = useState(false);

  // usearch search bar state
  const [u_name, setUname] = useState("");
  const [u_company_name, setCompany] = useState("");
  const [resetState, setResetState] = useState(false);

  // grab user id
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    setState(false);
    setMessage(false);
    setUname("");
    setCompany("");

    (async () => {
      const result = await getAllUsersPagination({ uid, page });
      const data = result.data;
      if (data != null && data.success) {
        setPageCount(data.pageCount);
        setData(data.data);
        setState(true);
      }
    })();
  }, [page, followState, resetState]);

  // search function
  async function submitSearchForm() {
    setState(false);
    setMessage(false);

    const result = await getUsersSearch({ u_name, u_company_name, uid });
    const data = result.data;
    if (data != null && data.success) {
      setPageCount(1);
      setData(data.data);
      setState(true);
      console.log(data.data);

      if (data.data.length == 0) {
        setMessage(true);
      }
    } else {
      alert("Some error occured while searching");
      localStorage.clear();
      navigate("/");
    }
  }

  return (
    <>
      <div className="user-project-container">
        <h5 className="title-border">Search</h5>
        <UserSearchBar
          u_name={u_name}
          setUname={setUname}
          u_company_name={u_company_name}
          setCompany={setCompany}
          submitSearchForm={submitSearchForm}
          resetState={resetState}
          setResetState={setResetState}
        />

        {/* Pagination starts */}
        <div class="pagination-container">
          <ul class="pagination justify-content-center pagination-rounded">
            <li className={page == 1 ? `page-item disabled` : `page-item`}>
              <span
                class="page-link"
                onClick={() => {
                  if (page == 1) {
                    return;
                  }
                  setPage(page - 1);
                  setData([]);
                  setState(false);
                }}
              >
                <i class="mdi mdi-chevron-left"></i>
              </span>
            </li>

            {Array(pageCount)
              .fill(null)
              .map((_, index) => {
                return (
                  <span>
                    <li
                      class={`page-item ${page == index + 1 ? "active" : ""}`}
                    >
                      <span class="page-link">{index + 1}</span>
                    </li>
                  </span>
                );
              })}

            <li class={page == pageCount ? `page-item disabled` : `page-item`}>
              <span
                class="page-link"
                onClick={() => {
                  if (page == pageCount) {
                    return;
                  }
                  setPage(page + 1);
                  setData([]);
                  setState(false);
                }}
              >
                <i class="mdi mdi-chevron-right"></i>
              </span>
            </li>
          </ul>
        </div>

        {/* Pagination ends */}

        <div className="row user-search-container">
          {message ? <div className="flex center">No users to show</div> : ""}
          {state ? (
            data.map((result, index) => {
              if (result._id == localStorage.getItem("uid")) {
                return;
              }
              return (
                <UserSearchCard
                  key={index}
                  uid={result._id}
                  name={result.u_name}
                  description={result.u_description}
                  followState={followState}
                  setFollowState={setFollowState}
                  image={result.u_image}
                />
              );
            })
          ) : (
            <div className="flex center">
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
      </div>
    </>
  );
}

export default UserSearchSection;
