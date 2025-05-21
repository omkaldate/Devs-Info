import React, { useEffect, useState } from "react";
import StuffHeader from "../userAddstuffs/StuffHeader";
import { addProject, updateProjectById } from "../../api/projectApi";
import { getProjectByIdAndPid } from "../../api/projectApi";
import { useParams } from "react-router-dom";

function UserEditProject() {
  const { uid, pid } = useParams();
  const [project_name, setProjectName] = useState("");
  const [tagline, setTagline] = useState("");
  const [image, setImage] = useState("image");
  const [github_repo, setGithubRepo] = useState("");
  const [project_url, setProjectUrl] = useState("");
  const [description, setDescription] = useState("");
  const [project_domain, setProjectDomain] = useState("");

  useEffect(() => {
    (async () => {
      const result = await getProjectByIdAndPid({ uid, pid });
      const data = result.data;
      if (data != null && data.success) {
        const project = data.data;
        setProjectName(project.project_name);
        setTagline(project.tagline);
        setGithubRepo(project.github_repo);
        setProjectUrl(project.project_url);
        setDescription(project.description);
        setProjectDomain(project.project_domain);
      }
    })();
  }, []);

  function checkFormEmpty() {
    if (
      !project_name ||
      !tagline ||
      !github_repo ||
      !project_url ||
      !description ||
      !project_domain
    ) {
      return true;
    }
    return false;
  }

  async function submitForm() {
    if (checkFormEmpty()) {
      alert("Please fill all fields");
      return;
    }

    const uid = localStorage.getItem("uid");
    const payload = {
      uid,
      pid,
      project_name,
      project_domain,
      tagline,
      github_repo,
      project_url,
      description,
    };
    const result = await updateProjectById(payload);
    const data = result.data;
    if (data != null && data.success) {
      alert(data.message);
    } else {
      alert(result.data);
    }
  }

  return (
    <>
      <div class="row" style={{ width: "80%" }}>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <StuffHeader title={"Edit Project"} url={""} />
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
                      placeholder="Enter Your User Name"
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
                      placeholder="Enter Your User Name"
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
                          placeholder="Enter Tagline"
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
                          onChange={(e) => setProjectUrl(e.target.value)}
                          placeholder="Enter Your Email"
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
                      ></textarea>
                    </div>
                  </div>

                  {/* </div> */}
                  <div className="">
                    <input
                      data-repeater-create
                      type="button"
                      class="btn btn-success mt-3 mt-lg-0"
                      value="Save"
                      onClick={submitForm}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserEditProject;
