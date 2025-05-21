import React from 'react'

function PeersComponentSearchBar() {
  return (
    <>
        <div className="flex mb-2 peers-searchbar">
          <div class="mb-3 mr-10">
            <div class="input-border">
              <input
                class="form-control"
                type="text"
                placeholder="Username"
                id="example-text-input"
              />
            </div>
          </div>

          <div class="mb-3 mr-10">
            <div class="input-border">
              <input
                class="form-control"
                placeholder="Company name"
                type="text"
                id="example-text-input"
              />
            </div>
          </div>

          <div class="mb-3 mr-10">
            <div class="input-border">
              <input
                class="form-control"
                type="text"
                placeholder="Experience"
                id="example-text-input"
              />
            </div>
          </div>
          <div>
            <button type="submit" class="btn btn-primary w-md">
              Search
            </button>
          </div>
        </div>
    </>
  )
}

export default PeersComponentSearchBar