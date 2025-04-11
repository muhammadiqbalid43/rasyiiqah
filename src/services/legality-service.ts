import { Legality, LegalityResponse } from "@/types/legality";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createLegality = async (formData: FormData): Promise<Legality> => {
  const response = await axios.post(`${API_BASE_URL}/legalities`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const getLegalities = async (
  page: number = 1
): Promise<LegalityResponse> => {
  const response = await axios.get(`${API_BASE_URL}/legalities`, {
    params: { page, per_page: 10 },
  });
  return response.data;
};

export const updateLegality = async (
  id: number,
  formData: FormData
): Promise<LegalityResponse> => {
  const response = await axios.put(
    `${API_BASE_URL}/legalities/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const getLegalityById = async (id: number): Promise<Legality> => {
  const response = await axios.get(`${API_BASE_URL}/legalities/${id}`);
  return response.data;
};

export const deleteLegality = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/legalities/${id}`);
};
