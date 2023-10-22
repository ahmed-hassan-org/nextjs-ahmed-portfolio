import Axios, { InternalAxiosRequestConfig } from "axios";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "",
});

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = localStorage.getItem("app-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers.Accept = "application/json";
  config.headers["accept-language"] = localStorage.getItem("app-lang") || "en";
  return config;
}
axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    throw error;
  }
);
