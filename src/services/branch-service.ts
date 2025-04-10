import { PaginationParams } from "@/types/branch";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getBranches = async (params?: PaginationParams) => {
  const response = await axios.get(`${API_BASE_URL}/branches`, { params });
  return response.data;
};

export const createBranch = async (formData: FormData) => {
  const response = await axios.post(`${API_BASE_URL}/branches`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
