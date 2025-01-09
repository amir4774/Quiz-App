import axios from "axios";
import { internalApi } from "./config";

const InternalApi = () => {
  const axiosInstance = axios.create({
    baseURL: internalApi,
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

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );

  return axiosInstance;
};

export default InternalApi;
