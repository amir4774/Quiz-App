import axios from "axios";
import {apiKey, apiUrl} from "./config";

const Api = () => {
  const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
      'X-Api-Key': apiKey
    }
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
