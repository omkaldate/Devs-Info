import React from "react";

function UserProjectSearchBar({
  projectName,
  setProjectName,
  projectDomain,
  setProjectDomain,
  submitSearch,
  resetState,
  setResetState,
}) {
  return (
    <>
      <div className="flex mb-2 project-searchbar-container">
        <div class="mb-3 mr-20 project-searchbar-text">
          <div class="input-border">
            <input
              class="form-control"
              type="text"
              placeholder="Project Title"
              id="example-text-input"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
        </div>

        <div class="mb-3 row mr-8 project-searchbar-text">
          <div class="input-border">
            <input
              class="form-control"
              type="text"
              placeholder="Domain of Project"
              id="example-text-input"
              value={projectDomain}
              onChange={(e) => setProjectDomain(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="btn btn-primary w-md mr-5"
            onClick={submitSearch}
          >
            Search
          </button>
        </div>
        <div>
          <button
            type="submit"
            class="btn btn-danger w-md"
            onClick={() => setResetState(!resetState)}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default UserProjectSearchBar;
