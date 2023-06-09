import axios, { InternalAxiosRequestConfig } from "axios";
export const api = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accesstoken = localStorage.getItem("access_token");
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accesstoken}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
