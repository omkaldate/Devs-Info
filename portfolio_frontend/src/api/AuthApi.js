import axios from "axios";
import { baseURL } from "./config";

export const LoginUser = async (payload) => {
  return await axios
    .post(`${baseURL}/login`, payload)
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};
