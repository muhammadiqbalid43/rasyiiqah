import {
  Testimony,
  TestimonyCreatePayload,
  TestimonyResponse,
} from "@/types/testimony";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createTestimony = async (
  payload: TestimonyCreatePayload
): Promise<Testimony> => {
  const formData = new FormData();
  formData.append("type", payload.type);

  if (payload.type === "image" && payload.image) {
    formData.append("image", payload.image);
  } else if (payload.type === "video" && payload.url) {
    formData.append("url", payload.url);
  }

  const response = await axios.post<Testimony>(
    `${API_BASE_URL}/testimonies`,
    formData
  );
  return response.data;
};

export const getTestimonies = async (params?: {
  page?: number;
  per_page?: number;
}): Promise<TestimonyResponse> => {
  const response = await axios.get<TestimonyResponse>(
    `${API_BASE_URL}/testimonies`,
    {
      params,
    }
  );
  return response.data;
};

export const deleteTestimony = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/testimonies/${id}`);
};
