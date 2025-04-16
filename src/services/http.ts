import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
