import api from "@/lib/api";
import axios from "axios";

export const createPackage = async (formData: FormData) => {
  try {
    const response = await api.post(`/packages`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error details:", error.response?.data);
    }
    throw error;
  }
};

export const readPackages = async () => {
  const response = await api.get("/packages");
  return response.data;
};
