import axios from "axios";
import { baseURL } from "./config";

export const addComment = async ({ pid, comment_description }) => {
  const token = localStorage.getItem("token");
  const u_name = localStorage.getItem("u_name");

  return await axios
    .post(
      `${baseURL}/addprojectcomment/${pid}`,
      { u_name, comment_description },
      {
        headers: { Authorization: token },
      }
    )
    .then((res) => res)
    .catch((err) => err);
};

export const getComment = async (pid) => {
  const token = localStorage.getItem("token");
  return await axios
    .get(`${baseURL}/getprojectcommentsbyid/${pid}`, {
      headers: { Authorization: token },
    })
    .then((res) => res)
    .catch((err) => err);
};
