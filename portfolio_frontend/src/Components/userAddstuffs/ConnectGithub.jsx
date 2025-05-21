import React, { useState } from "react";
import StuffHeader from "./StuffHeader";
import { updateGithub } from "../../api/UserApi";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ConnectGithub() {
  const notify = (msg) => toast(msg);
  const [user_name, setUserName] = useState("");

  async function submitForm() {
    const uid = localStorage.getItem("uid");
    const result = await updateGithub({ uid, user_name });
    const data = result.data;

    if (data != null && data.success) {
      notify(data.message);
    } else {
      notify("Account not connected");
    }
  }

  return (
    <>
      <div class="row" style={{ width: "80%" }}>
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
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              {/* <h4 class="card-title mb-4">Activities</h4> */}
              <StuffHeader title={"Connect Github"} url={"/dashboard/home"} />

              <div class="col-md-8">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">
                    Github Username
                  </label>
                  <input
                    type="text"
                    class="form-control input-border"
                    id="formrow-email-input"
                    value={user_name}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Github Username"
                  />
                  <p className="font-size-10 mt-1">Keep field blank and press delete in order to disconnect your github account</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-5">
                  <button
                    type="button"
                    class="btn btn-primary waves-effect waves-light"
                    onClick={submitForm}
                  >
                    Submit
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-danger waves-effect waves-light"
                    onClick={submitForm}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectGithub;
