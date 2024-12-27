import axios, { AxiosError } from "axios";
import { internalApi } from "./config";
import { toast } from "react-toastify";

const InternalApi = () => {
  const axiosInstance = axios.create({
    baseURL: internalApi,
  });

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error.response.status === 400) {
        if (error.response.data.username) {
          toast.error("Username already exists");
        }
      }

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
