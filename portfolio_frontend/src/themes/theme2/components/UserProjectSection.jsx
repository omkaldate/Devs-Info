import React, { useState, useEffect } from "react";
import UserProjectCard from "../../../Components/userProjects/UserProjectCard"
import { getAllProjectsByUserId } from "../../../api/projectApi";

function UserProjectSection({uid}) {
  // project state
  const [projectState, setProjectState] = useState(false);
  const [projects, setProject] = useState([]);
  const [deleteState, setDeleteState] = useState(false);

  // get project data
  useEffect(() => {
    (async () => {
      const result = await getAllProjectsByUserId(uid);
      const data = result.data;
      if (data != null && data.success === true) {
        setProject(data.data);
        setProjectState(true);
      } else {
        // navigate to home later while fixing bug
        alert("Some error occured while fetching projects");
      }
    })();
  }, [deleteState]);

  return (
    <>
      <div className="">
        <h6 className="mb-3">My Projects : </h6>
        <div className="row">
          {/* <UserProjectCard /> */}
          {projects.length == 0 ? (
            <div className="mb-4">No Projects to show</div>
          ) : (
            ""
          )}
          {projectState
            ? projects.map((result, index) => {
                return (
                  <UserProjectCard
                    key={index}
                    projects={result}
                    state={false}
                    deleteState={deleteState}
                    setDeleteState={setDeleteState}
                  />
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}

export default UserProjectSection;
