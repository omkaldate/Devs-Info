import React, { useEffect, useState } from "react";
import { addPersonalDetails, getUser } from "../../api/UserApi";
import { useNavigate } from "react-router-dom";
import { updateProfileImage } from "../../api/UserApi";
import { ThreeDots } from "react-loader-spinner";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// validations
import { urlValidation } from "../../validations/AddProjectValidation";

// need to worl on this section
function ProfileForm() {
  const navigate = useNavigate();
  const notify = (msg) => toast(msg);

  const [full_name, setFullName] = useState("");
  const [u_email, setEmail] = useState("");
  const [u_contact, setContact] = useState("");
  const [u_description, setDescription] = useState("");
  const [u_company_name, setCompanyName] = useState("");
  const [u_work_experience, setWorkExperience] = useState("");
  const [u_city, setCity] = useState("");
  const [u_country, setCountry] = useState("");
  const [leetcode, setLeetcode] = useState("");
  const [codeforces, setCodeforces] = useState("");
  const [gfg, setGFG] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [skillsArray, setSkillsArray] = useState([]);
  const [skills, setSkills] = useState("");
  const [u_resume, setResume] = useState("");
  const [file, setFile] = useState(null);
  const [fileState, setFileState] = useState(false);
  const [buttonState, setButtonState] = useState(false);

  // get user id
  const uid = localStorage.getItem("uid");

  // get all the data
  useEffect(() => {
    (async () => {
      const result = await getUser(uid);
      const data = result.data;
      if (data != null && data.success) {
        const user = data.data;
        setFullName(user.full_name);
        setEmail(user.u_email);
        setContact(user.u_contact);
        setDescription(user.u_description);
        setCompanyName(user.u_company_name);
        setWorkExperience(user.u_work_experience);
        setCity(user.u_city);
        setCountry(user.u_country);
        setLeetcode(user.leetcode);
        setCodeforces(user.codeforces);
        setGFG(user.gfg);
        setLinkedin(user.linkedin);
        setSkillsArray(user.skills);
        setResume(user.u_resume);
      } else {
        notify("Some error occured");
      }
    })();
  }, []);

  // validate all fields
  function checkEmptyFields() {
    if (
      !full_name ||
      !u_email ||
      !u_contact ||
      !u_description ||
      !u_company_name ||
      !u_work_experience ||
      !u_city ||
      !u_country ||
      !leetcode ||
      !codeforces ||
      !gfg ||
      !linkedin ||
      !u_resume
    ) {
      return true;
    } else {
      return false;
    }
  }

  function addSkills() {
    if (skills.length > 0) {
      skillsArray.push(skills);
      setSkillsArray(skillsArray);
    }
    setSkills("");
  }

  async function submitForm() {
    console.log("Submitting Form");
    setButtonState(true);

    // post data
    if (checkEmptyFields()) {
      notify("Please fill all fields");
      setButtonState(false);
      return;
    }
    const result = await addPersonalDetails({
      full_name,
      u_email,
      u_contact,
      u_description,
      u_company_name,
      u_work_experience,
      u_city,
      u_country,
      leetcode,
      gfg,
      linkedin,
      skillsArray,
      u_resume,
    });

    const data = result.data;
    if (data != null && data.success) {
      notify(data.message);
      setButtonState(false);
    } else {
      setButtonState(false);
      notify("Some error occured");
    }
  }

  function toggleChange(e) {
    e.preventDefault();
    setFile(e.target.files[0]);
  }

  async function submitProfilePicture() {
    setFileState(true);

    if (file === null) {
      notify("Please select file first");
      setFileState(false);
      return;
    }

    // API call
    const result = await updateProfileImage({ image: file, uid: uid });
    const data = result.data;
    if (data != null && data.success) {
      console.log(data);
      setFileState(false);
      notify(data.message);
    } else {
      console.log(result);
      setFileState(false);
      notify("Profile Image not updated");
    }
  }

  function deleteSkill(index) {
    let temp = skillsArray.filter((result, i) => index != i);
    console.log(temp);
    setSkillsArray(temp);
  }

  return (
    <>
      <div class="col-xl-12">
        {/* alert start */}
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
        {/* alert end */}
        <div className="mb-3"></div>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-email-input" class="form-label">
                  Full name
                </label>
                <input
                  type="text"
                  class="form-control input-border"
                  id="formrow-email-input"
                  value={full_name}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter Your Full Name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-password-input" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  value={u_email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control input-border"
                  id="formrow-password-input"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-email-input" class="form-label">
                  Company name
                </label>
                <input
                  type="text"
                  value={u_company_name}
                  onChange={(e) => setCompanyName(e.target.value)}
                  class="form-control input-border"
                  id="formrow-email-input"
                  placeholder="Enter Company name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-password-input" class="form-label">
                  Work Experience
                </label>
                <input
                  type="number"
                  value={u_work_experience}
                  onChange={(e) => setWorkExperience(e.target.value)}
                  class="form-control input-border"
                  id="formrow-password-input"
                  placeholder="Enter Work Experience"
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
                value={u_description}
                onChange={(e) => setDescription(e.target.value)}
                onBlur={() => {
                  if (u_description.length > 500) {
                    notify("Description can contain 500 characters only");
                    return;
                  }
                }}
              ></textarea>
            </div>
          </div>

          {/* skill set start */}
          <div className="mb-3">
            <label for="formrow-email-input" class="form-label">
              Skill Set
            </label>
            <div class="flex">
              <div class="mr-10" style={{ width: "100%" }}>
                <input
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  class="form-control input-border"
                  id="formrow-email-input"
                  placeholder="Enter your skills"
                />
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-primary waves-effect waves-light"
                  onClick={addSkills}
                >
                  Submit
                </button>
              </div>
            </div>
            {/* skills container */}
            <div className="pt-3 flex flex-wrap">
              {skillsArray.map((result, index) => {
                return (
                  <div
                    className="mr-5 skills-container border pointer"
                    key={index}
                    onClick={() => deleteSkill(index)}
                  >
                    {result}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skill set end */}

          <div class="row">
            <div class="col-lg-4">
              <div class="mb-3">
                <label for="formrow-inputCity" class="form-label">
                  Country
                </label>
                <input
                  type="text"
                  value={u_country}
                  onChange={(e) => setCountry(e.target.value)}
                  class="form-control input-border"
                  id="formrow-inputCity"
                  placeholder="Enter Your Living City"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <label for="formrow-inputCity" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  value={u_city}
                  onChange={(e) => setCity(e.target.value)}
                  class="form-control input-border"
                  id="formrow-inputCity"
                  placeholder="Enter Your Living City"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <label for="formrow-inputCity" class="form-label">
                  Contact
                </label>
                <input
                  type="text"
                  value={u_contact}
                  onChange={(e) => setContact(e.target.value)}
                  class="form-control input-border"
                  id="formrow-inputCity"
                  placeholder="Enter Your Living City"
                />
              </div>
            </div>

            {/* links */}
            {/* <div className="mt-4 mb-2">
              <h5 className="primary-color">Links</h5>
            </div> */}

            {/* <div class="row"> */}
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-email-input" class="form-label">
                  Leetcode
                </label>
                <input
                  type="text"
                  value={leetcode}
                  onChange={(e) => setLeetcode(e.target.value)}
                  onBlur={() => urlValidation(leetcode, setLeetcode)}
                  class="form-control input-border"
                  id="formrow-email-input"
                  placeholder="Leetcode link"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-password-input" class="form-label">
                  Codeforces
                </label>
                <input
                  type="text"
                  value={codeforces}
                  onChange={(e) => setCodeforces(e.target.value)}
                  class="form-control input-border"
                  id="formrow-password-input"
                  placeholder="Codeforces link"
                  onBlur={() => urlValidation(codeforces, setCodeforces)}
                />
              </div>
            </div>
            {/* </div> */}

            {/* <div class="row"> */}
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-email-input" class="form-label">
                  Geeks For Geeks
                </label>
                <input
                  type="text"
                  value={gfg}
                  onChange={(e) => setGFG(e.target.value)}
                  class="form-control input-border"
                  id="formrow-email-input"
                  placeholder="GFG link"
                  onBlur={() => urlValidation(gfg, setGFG)}
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-password-input" class="form-label">
                  LinkedIn
                </label>
                <input
                  type="text"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  class="form-control input-border"
                  id="formrow-password-input"
                  placeholder="Linkedin link"
                  onBlur={() => urlValidation(linkedin, setLinkedin)}
                />
              </div>
            </div>
            {/* </div> */}

            {/* <div class="row"> */}

            <div class="flex">
              <div class="mr-10 mb-3" style={{ width: "100%" }}>
                <label for="formrow-password-input" class="form-label">
                  Resume Link
                </label>
                <input
                  type="text"
                  value={u_resume}
                  onChange={(e) => setResume(e.target.value)}
                  class="form-control input-border"
                  id="formrow-email-input"
                  placeholder="Enter Resume Link"
                  onBlur={() => urlValidation(u_resume, setResume)}
                />
              </div>
            </div>

            <div className="mb-3">
              <label for="formrow-email-input" class="form-label">
                Profile Picture
              </label>
              <div class="flex">
                <div class="mr-10" style={{ width: "100%" }}>
                  <input
                    type="file"
                    class="form-control input-border"
                    id="formrow-email-input"
                    placeholder=""
                    onChange={toggleChange}
                  />
                </div>
                <div>
                  {fileState ? (
                    <ThreeDots
                      height="25"
                      width="25"
                      radius="9"
                      color="gray"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClassName=""
                      visible={true}
                    />
                  ) : (
                    <button
                      type="button"
                      class="btn btn-primary waves-effect waves-light"
                      onClick={submitProfilePicture}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
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
    </>
  );
}

export default ProfileForm;
