import axios from "axios";
import { baseURL } from "./config";

// fetch user by id API
export const getUser = async (uid) => {
  const token = localStorage.getItem("token");

  return await axios
    .get(`${baseURL}/getuserbyid/${uid}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

// fetch user account details
export const getUserAccountDetails = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  return await axios
    .get(`${baseURL}/getaccountdetailsbyid/${uid}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res)
    .catch((err) => err);
};

// update personal details API
export const addPersonalDetails = async ({
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
}) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");
  return await axios
    .put(
      `${baseURL}/updatepersonaldetailsbyid/${uid}`,
      {
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
      },
      { headers: { Authorization: token } }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

// update account details
export const updateAccountDetails = async ({ u_name, u_password }) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  return await axios
    .put(
      `${baseURL}/updateaccountdetailsbyid/${uid}`,
      { u_name, u_password },
      { headers: { Authorization: token } }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

// signup API
export const signUp = async (payload) => {
  return await axios
    .post(`${baseURL}/signup`, payload)
    .then((res) => res)
    .catch((err) => err);
};

export const getAllUsersPagination = async ({ uid, page }) => {
  const token = localStorage.getItem("token");

  return await axios
    .get(`${baseURL}/getallusers/${uid}/${page}`, {
      headers: { Authorization: token },
    })
    .then((res) => res)
    .catch((err) => err);
};

// follow user API
export const followUser = async ({ follower_id, uid }) => {
  const token = localStorage.getItem("token");

  return await axios
    .post(
      `${baseURL}/follow`,
      { follower_id, uid },
      {
        headers: { Authorization: token },
      }
    )
    .then((res) => res)
    .catch((err) => err);
};

// get followers of user API
export const getFollowers = async (uid) => {
  const token = localStorage.getItem("token");

  return await axios
    .get(`${baseURL}/getfollowers/${uid}`, {
      headers: { Authorization: token },
    })
    .then((res) => res)
    .catch((err) => err);
};

// get following of user API
export const getFollowing = async (uid) => {
  const token = localStorage.getItem("token");

  return await axios
    .get(`${baseURL}/getfollowing/${uid}`, {
      headers: { Authorization: token },
    })
    .then((res) => res)
    .catch((err) => err);
};

// get user by name API
export const getUserName = async (uname) => {
  return await axios
    .get(`${baseURL}/getuserbyname/${uname}`, {})
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

// update profile picture
export const updateProfileImage = async (payload) => {
  const token = localStorage.getItem("token");

  return axios({
    method: "put",
    url: `${baseURL}/updateprofileimage`,
    headers: { "Content-Type": "multipart/form-data", Authorization: token },
    data: payload,
  })
    .then((res) => res)
    .catch((err) => err);
};

export const getUsersSearch = async ({ u_name, u_company_name, uid }) => {
  const token = localStorage.getItem("token");

  return await axios
    .post(
      `${baseURL}/searchallusers`,
      { u_name, u_company_name, uid },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((res) => res)
    .catch((err) => err);
};


// update github
export const updateGithub = async ({uid, user_name}) => {
  const token = localStorage.getItem("token");

  return await axios
    .put(
      `${baseURL}/updategithub/${uid}`,
      { user_name },
      { headers: { Authorization: token } }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};