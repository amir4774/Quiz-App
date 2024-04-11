import axios from "axios";
import { apiUrl } from "./config";

const Api = () => {
  const axiosInstance = axios.create({
    baseURL: apiUrl,
  });

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default Api;
