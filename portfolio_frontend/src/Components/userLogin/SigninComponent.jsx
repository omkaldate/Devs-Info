import { React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/homePageAssets/hexagon.png";
import background from "../../assets/images/profile-img.png";
import { LoginUser } from "../../api/AuthApi";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SigninComponent() {
  const navigate = useNavigate();
  const notify = (msg) => toast(msg);

  const [userCred, setUserCred] = useState({
    u_name: "",
    u_password: "",
  });

  async function submitForm() {
    console.log("Loging in");
    const res = await LoginUser(userCred);
    if (res.data != null && res.data.success) {
      const { token, u_name, uid } = res.data;

      // set token and username
      localStorage.setItem("token", token);
      localStorage.setItem("u_name", u_name);
      localStorage.setItem("uid", uid);
      console.log(res.data);
      navigate("/dashboard/home");
    } else {
      if (res.data != null) {
        notify(res.data.message);
      }
    }
  }

  return (
    <div class="account-pages my-5 pt-sm-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
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
            <div class="card overflow-hidden">
              <div class="bg-primary bg-soft">
                <div class="row">
                  <div class="col-7">
                    <div class="text-primary p-4">
                      <h5 class="text-primary">Welcome Back !</h5>
                      <p>Sign in to continue to Skote.</p>
                    </div>
                  </div>
                  <div class="col-5 align-self-end">
                    <img src={background} alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="card-body pt-0">
                <div class="auth-logo">
                  <a class="auth-logo-dark">
                    <div class="avatar-md profile-user-wid mb-4">
                      <span class="avatar-title rounded-circle bg-light">
                        <img
                          src={logo}
                          alt=""
                          class="rounded-circle"
                          height="34"
                        />
                      </span>
                    </div>
                  </a>
                </div>
                <div class="p-2">
                  <form class="form-horizontal">
                    <div class="mb-3">
                      <label for="username" class="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        class="form-control border"
                        id="username"
                        value={userCred.u_name}
                        onChange={(e) =>
                          setUserCred({ ...userCred, u_name: e.target.value })
                        }
                        placeholder="Enter username"
                      />
                    </div>

                    <div class="mb-3">
                      <label class="form-label">Password</label>
                      <div class="input-group auth-pass-inputgroup">
                        <input
                          type="password"
                          class="form-control border"
                          placeholder="Enter password"
                          aria-label="Password"
                          aria-describedby="password-addon"
                          value={userCred.u_password}
                          onChange={(e) =>
                            setUserCred({
                              ...userCred,
                              u_password: e.target.value,
                            })
                          }
                        />
                        <button
                          class="btn btn-light"
                          type="button"
                          id="password-addon"
                        >
                          <i class="mdi mdi-eye-outline"></i>
                        </button>
                      </div>
                    </div>

                    <div class="mt-3 d-grid">
                      <button
                        class="btn btn-primary waves-effect waves-light"
                        type="button"
                        onClick={submitForm}
                      >
                        Log In
                      </button>
                    </div>

                    <div class="mt-4 text-center">
                      {/* <a href="auth-recoverpw.html" class="text-muted">
                        <i class="mdi mdi-lock me-1"></i> Forgot your password?
                      </a> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="mt-5 text-center">
              <div>
                <p>
                  Don't have an account ?{" "}
                  <a class="fw-medium text-primary">
                    {" "}
                    <NavLink to="/signup">Signup now </NavLink>
                  </a>{" "}
                </p>
                <p>© 2023 • Devsinfo.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninComponent;
