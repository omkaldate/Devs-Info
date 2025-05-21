import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { deleteProjectById } from "../../api/projectApi";
import {ThreeDots} from "react-loader-spinner";

function UserProjectCard({ projects, state, deleteState, setDeleteState }) {
  const [deleteLoading, setDeleteLoading] = useState(false);

  async function deleteProject() {
    setDeleteLoading(true);
    const result = await deleteProjectById(projects._id);

    if (result) {
      setDeleteState(!deleteState);
      setDeleteLoading(false);
    } else {
      alert("Some error occured while deleting project");
    }
  }

  return (
    <>
      <div class="col-xl-4 col-sm-6">
        <div class="card shadow-none border">
          <div class="card-body p-3">
            <div class="">
              <div class="float-end ms-2">
                <div class="dropdown mb-2 flex">
                  {state ? (
                    <>
                      {/* delete project */}
                      {deleteLoading ? (
                        <ThreeDots
                          height="20"
                          width="20"
                          radius="9"
                          color="gray"
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{marginRight: "15px"}}
                          wrapperClassName=""
                          visible={true}
                        />
                      ) : (
                        <div
                          style={{ marginRight: "10px" }}
                          onClick={deleteProject}
                        >
                          <div>
                            <i class="dripicons-trash font-size-15"></i>
                          </div>
                        </div>
                      )}

                      <NavLink
                        to={`/dashboard/editproject/${projects.uid}/${projects._id}`}
                      >
                        <div style={{ marginRight: "10px" }}>
                          <div>
                            <i class="dripicons-document-edit font-size-15"></i>
                          </div>
                        </div>
                      </NavLink>
                    </>
                  ) : (
                    ""
                  )}

                  <div class="font-size-16 text-muted">
                    <span
                      onClick={() => {
                        window.location.href = projects.github_repo;
                      }}
                    >
                      <i class="bx bx-share-alt"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="avatar-xs me-3 mb-3">
                <div class="avatar-title bg-transparent rounded">
                  <i class="bx bxs-folder font-size-24 text-warning"></i>
                </div>
              </div>
              <div class="d-flex">
                <div class="overflow-hidden me-auto">
                  <NavLink
                    to={`/dashboard/projects/${projects.uid}/${projects._id}`}
                  >
                    <div className="pointer">
                      <h5 class="font-size-14 text-truncate mb-1">
                        <a class="text-body">{projects.project_name}</a>
                      </h5>
                    </div>
                  </NavLink>

                  <p class="text-muted text-truncate mb-0">
                    {projects.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProjectCard;
