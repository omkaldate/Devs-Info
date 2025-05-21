import React, { useEffect, useState } from "react";
import { updateAccountDetails, getUserAccountDetails } from "../../api/UserApi";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";

function AccountForm() {
  const notify = (msg) => toast(msg);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [buttonState, setButtonState] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await getUserAccountDetails();
      const data = result.data;
      if (data != null && data.success) {
        const user = data.data;
        setUsername(user.u_name);
        setPassword(user.u_password);
        setCPassword(user.u_password);
      } else {
        if (data !== undefined) {
          notify(data.message);
        } else {
          notify("Some error ocurred");
        }
      }
    })();
  }, []);

  // check empty fields
  function checkEmptyFields() {
    if (!username || !password || !password) {
      return true;
    } else {
      return false;
    }
  }

  async function submitForm() {
    setButtonState(true);

    // check empty fields
    if (checkEmptyFields()) {
      notify("Please fill all fields");
      setButtonState(false);
      return;
    }
    // check if password matches
    if (password != cpassword) {
      notify("Password does not match");
      setButtonState(false);
      return;
    }

    // submit form
    const result = await updateAccountDetails({
      u_name: username,
      u_password: password,
    });
    const data = result.data;
    if (data != null && data.success) {
      notify(data.message);
      setButtonState(false);
    } else {
      if (result) {
        notify(result.data.message);
      } else {
        notify("Some error occured while updating");
      }
      setButtonState(false);
    }
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
          <div class="mb-3">
            <label for="formrow-firstname-input" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control input-border"
              id="formrow-firstname-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-email-input" class="form-label">
                  Password
                </label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="form-control input-border"
                  id="formrow-email-input"
                  placeholder="Enter Your Full Name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-password-input" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="text"
                  value={cpassword}
                  onChange={(e) => setCPassword(e.target.value)}
                  class="form-control input-border"
                  id="formrow-password-input"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
          </div>

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

export default AccountForm;
