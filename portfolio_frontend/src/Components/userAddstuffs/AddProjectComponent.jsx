import React, { useState } from "react";
import StuffHeader from "./StuffHeader";
import { addProject } from "../../api/projectApi";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";

// validations
import { urlValidation } from "../../validations/AddProjectValidation";

function AddProjectComponent() {
  const notify = (msg) => toast(msg);

  const [project_name, setProjectName] = useState("");
  const [tagline, setTagline] = useState("");
  const [github_repo, setGithubRepo] = useState("");
  const [project_url, setProjectUrl] = useState("");
  const [description, setDescription] = useState("");
  const [project_domain, setProjectDomain] = useState("");
  const [file, setFile] = useState(null);
  const [buttonState, setButtonState] = useState(false);

  function toggleFile(e) {
    e.preventDefault();
    setFile(e.target.files[0]);
  }

  function checkFormEmpty() {
    if (
      !project_name ||
      !tagline ||
      !github_repo ||
      !project_url ||
      !description ||
      !project_domain ||
      !file
    ) {
      return true;
    }
    return false;
  }

  async function submitForm() {
    setButtonState(true);

    if (checkFormEmpty()) {
      notify("Please fill all fields");
      setButtonState(false);
      return;
    }

    const uid = localStorage.getItem("uid");
    const payload = {
      uid,
      project_name,
      project_domain,
      tagline,
      github_repo,
      project_url,
      description,
      image: file,
      u_name: localStorage.getItem("u_name")
    };
    const result = await addProject(payload);
    const data = result.data;
    if (data != null && data.success) {
      notify(data.message);
      setProjectName("");
      setTagline("");
      setFile(null);
      setGithubRepo("");
      setProjectUrl("");
      setDescription("");
      setProjectDomain("");
      setButtonState(false);
    } else {
      setButtonState(false);
      notify("Some error occured");
    }
  }

  return (
    <>
      <div class="row" style={{ width: "80%" }}>
        <div class="col-lg-12">
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
          <div class="card">
            <div class="card-body">
              <StuffHeader title={"Add Projects"} url={""} />
              {/* Route body */}
              <div>
                <form>
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      Project name
                    </label>
                    <input
                      type="text"
                      class="form-control input-border"
                      id="formrow-firstname-input"
                      placeholder="Enter Project Name"
                      value={project_name}
                      onChange={(e) => setProjectName(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      Tagline
                    </label>
                    <input
                      type="text"
                      class="form-control input-border"
                      id="formrow-firstname-input"
                      placeholder="Enter tagline"
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                    />
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="formrow-email-input" class="form-label">
                          Project Domain
                        </label>
                        <input
                          type="text"
                          class="form-control input-border"
                          id="formrow-email-input"
                          placeholder="Enter Project Domain"
                          value={project_domain}
                          onChange={(e) => setProjectDomain(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="formrow-email-input" class="form-label">
                          Cover Image
                        </label>
                        <input
                          type="file"
                          onChange={toggleFile}
                          class="form-control input-border"
                          id="resume"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="formrow-email-input" class="form-label">
                          Github repo
                        </label>
                        <input
                          type="text"
                          class="form-control input-border"
                          id="formrow-email-input"
                          placeholder="Enter Your Full Name"
                          value={github_repo}
                          onBlur={() => urlValidation(github_repo, setGithubRepo)}
                          onChange={(e) => setGithubRepo(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="formrow-password-input" class="form-label">
                          Project URL
                        </label>
                        <input
                          type="text"
                          class="form-control input-border"
                          id="formrow-password-input"
                          value={project_url}
                          onBlur={() => urlValidation(project_url, setProjectUrl)}
                          onChange={(e) => setProjectUrl(e.target.value)}
                          placeholder="Enter live project URL"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Description</label>
                    <div>
                      <textarea
                        required
                        class="form-control input-border"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onBlur={() => {
                          if (description.length > 500) {
                            notify("Description can contain 500 characters only");
                            return;
                          }
                        }}
                      ></textarea>
                    </div>
                  </div>

                  {/* </div> */}
                  {buttonState ? (
                    <ThreeDots 
                    height="20" 
                    width="20" 
                    radius="9"
                    color="gray" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                     />
                  ) : (
                    <div className="">
                      <input
                        data-repeater-create
                        type="button"
                        class="btn btn-success mt-3 mt-lg-0"
                        value="Save"
                        onClick={submitForm}
                      />
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProjectComponent;
