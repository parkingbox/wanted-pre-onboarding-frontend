import axios, { InternalAxiosRequestConfig } from "axios";

export const token = localStorage.getItem("access_token");
export const api = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
