import axios from "axios";
import { baseURL } from "./config";

export const addProject = async (payload) => {
  const token = localStorage.getItem("token");

  return await axios({
      method: "post",
      url: `${baseURL}/addproject`,
      headers: { "Content-Type": "multipart/form-data", Authorization: token },
      data: payload,
    })
    .then((res) => res)
    .catch((err) => err);
};

// get all projects of user (Protected API)
export const getProject = async (uid) => {
  const token = localStorage.getItem("token");

  return await axios
    .get(`${baseURL}/getallprojectsbyid/${uid}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res)
    .catch((err) => err);
};

// get all projects by user id (PUBLIC API)
export const getAllProjectsByUserId = async (uid) => {
  return await axios
    .get(`${baseURL}/getallprojectsbyuserid/${uid}`)
    .then((res) => res)
    .catch((err) => err);
};

// pagination
export const getProjectPagination = async (page) => {
  const token = localStorage.getItem("token");

  return await axios
    .get(`${baseURL}/getallprojectbyid-pagination/${page}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res)
    .catch((err) => err);
};

// project search pagination
export const getProjectSearch = async ({ project_name, project_domain }) => {
  const token = localStorage.getItem("token");

  return await axios
    .post(
      `${baseURL}/searchallprojects`,
      { project_name, project_domain },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((res) => res)
    .catch((err) => err);
};

// get one project by uid and pid
export const getProjectByIdAndPid = async ({ uid, pid }) => {
  const token = localStorage.getItem("token");

  return await axios
    .get(`${baseURL}/getprojectbyid/${uid}/${pid}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res)
    .catch((err) => err);
};

export const addLike = async (pid) => {
  const token = localStorage.getItem("token");

  return await axios
    .put(
      `${baseURL}/updateprojectlike/${pid}`,
      {},
      {
        headers: { Authorization: token },
      }
    )
    .then((res) => res)
    .catch((err) => err);
};

// update project
export const updateProjectById = async (payload) => {
  const token = localStorage.getItem("token");

  return await axios
    .put(`${baseURL}/updateprojectbyid`, payload, {
      headers: { Authorization: token },
    })
    .then((res) => res)
    .catch((err) => err);
};

export const deleteProjectById = async (pid) => {
  const token = localStorage.getItem("token");

  return await axios.delete(`${baseURL}/deleteprojectbyid/${pid}`, {
    headers: { Authorization: token },
  });
};
