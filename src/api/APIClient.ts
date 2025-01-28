/* eslint-disable @typescript-eslint/no-explicit-any */
import { clearUserDetailsLocalStorage } from "@/utils/authUtils";
import axios from "axios";
import queryString from "query-string";

const baseUrl =
  "https://localhost:44310/api";
const getToken = () => localStorage.getItem("token");

const axiosClient = axios.create({
  baseURL: baseUrl,
  paramsSerializer: (params) => queryString.stringify({ params }),
});
export const axiosAuthClient = axios.create({
  baseURL: baseUrl,
  paramsSerializer: (params) => queryString.stringify({ params }),
});

axiosAuthClient.interceptors.request.use(async (config: any) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
});

axiosClient.interceptors.request.use(async (config: any) => {
  if (
    !getToken() ||
    getToken() === null ||
    getToken() === undefined ||
    getToken() === "undefined"
  ) {
    clearUserDetailsLocalStorage();
    const pathname = window.location.pathname;
    window.location.href = "/auth/login?redirect=" + pathname;
  }
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      accessToken: `${getToken()}`,
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response?.data?.HttpStatus === "Unauthorized") {
      clearUserDetailsLocalStorage();
      window.location.reload();
    }
    if (
      response &&
      (response?.data?.Result?.Status === 401 ||
        response?.data?.Result?.Status === 404)
    ) {
      window.location.reload();
    } else if (response && response.data) return response;
    return response;
  },
  (err) => {
    if (!err.response) {
      return alert(err);
    }
    throw err.response;
  }
);

export default axiosClient;