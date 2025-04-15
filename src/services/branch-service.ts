import { PaginationParams } from "@/types/branch";
import { http } from "@/services/http";

export const getBranches = async (params?: PaginationParams) => {
  const response = await http.get("branches", { params });
  return response.data;
};

export const createBranch = async (formData: FormData) => {
  const response = await http.post("branches", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateBranch = async (formData: FormData) => {
  formData.append("_method", "PUT");

  const response = await http.post(`branches/${formData.get("id")}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deleteBranch = async (id: number) => {
  const response = await http.delete(`branches/${id}`);
  return response.data;
};
