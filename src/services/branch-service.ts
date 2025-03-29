import { toast } from "@/hooks/use-toast";
import { Branch, PaginatedBranches } from "@/types/branch";
import axios from "axios";

export const API_BASE_URL = "http://103.127.139.176:8082/api/v1";
export const API_IMAGE_URL = "http://103.127.139.176:8082/storage";

export const createBranch = async (formData: FormData): Promise<Branch> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/branches`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to create branch"
      );
    }
    throw new Error("Failed to create branch");
  }
};

export const fetchBranches = async (
  page: number = 1
): Promise<PaginatedBranches> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/branches`, {
      params: { page },
    });
    console.log(response);
    return {
      data: response.data.data,
      total: response.data.data.length * 10,
      page,
      per_page: response.data.data.length,
    };
  } catch (error) {
    const errorMessage =
      axios.isAxiosError(error) && error.response?.data?.message
        ? error.response.data.message
        : "Failed to fetch branches";

    toast({
      variant: "destructive",
      title: "Error",
      description: errorMessage,
    });

    throw new Error(errorMessage);
  }
};

export const deleteBranch = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/branches/${id}`);
  } catch (error) {
    const errorMessage =
      axios.isAxiosError(error) && error.response?.data?.message
        ? error.response.data.message
        : "Failed to fetch branches";

    toast({
      variant: "destructive",
      title: "Error",
      description: errorMessage,
    });

    throw new Error(errorMessage);
  }
};

export const updateBranch = async (
  id: number,
  formData: FormData
): Promise<Branch> => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/branches/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      axios.isAxiosError(error) && error.response?.data?.message
        ? error.response.data.message
        : "Failed to fetch branches";

    toast({
      variant: "destructive",
      title: "Error",
      description: errorMessage,
    });

    throw new Error(errorMessage);
  }
};
