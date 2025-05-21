import axios from "axios";
import { baseURL } from "./config";

export const getAllThemes = async (uid) => {
  const token = localStorage.getItem("token");

  return await axios
    .get(`${baseURL}/getallthemes`, {
      headers: { Authorization: token },
    })
    .then((res) => res)
    .catch((err) => err);
};


export const updateUserThemeById = async (theme_no) => {
  const token = localStorage.getItem("token");

  return await axios
    .put(`${baseURL}/updateusertheme`, {theme_no}, {
      headers: { Authorization: token },
    })
    .then((res) => res)
    .catch((err) => err);
};
