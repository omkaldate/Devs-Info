import React from "react";

function UserSearchBar({
  u_name,
  setUname,
  u_company_name,
  setCompany,
  submitSearchForm,
  resetState,
  setResetState,
}) {
  return (
    <>
      <div className="flex mb-2 peers-searchbar">
        <div class="mb-3 mr-10" style={{ width: "100%" }}>
          <div class="input-border">
            <input
              class="form-control"
              type="text"
              placeholder="Username"
              id="example-text-input"
              value={u_name}
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
        </div>

        <div class="mb-3 mr-10" style={{ width: "100%" }}>
          <div class="input-border">
            <input
              class="form-control"
              placeholder="Company name"
              type="text"
              value={u_company_name}
              onChange={(e) => setCompany(e.target.value)}
              id="example-text-input"
            />
          </div>
        </div>

        <div className="mr-5">
          <button
            type="button"
            class="btn btn-primary w-md"
            onClick={submitSearchForm}
          >
            Search
          </button>
        </div>
        <div>
          <button
            type="button"
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

export default UserSearchBar;
