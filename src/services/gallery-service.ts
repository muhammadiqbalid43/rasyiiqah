import { Gallery, GalleryResponse, GetGallery } from "@/types/gallery";
import axios from "axios";

type GalleryFormValues = {
  title: string;
  image: string | File;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createGallery = async (formData: FormData): Promise<Gallery> => {
  const response = await axios.post(`${API_BASE_URL}/galleries`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const getGalleries = async (
  page: number = 1
): Promise<GalleryResponse> => {
  const response = await axios.get(`${API_BASE_URL}/galleries`, {
    params: { page, per_page: 10 },
  });
  return response.data;
};

export const updateGallery = async (
  id: number,
  data: GalleryFormValues
): Promise<GetGallery> => {
  const formData = new FormData();
  formData.append("_method", "PUT");
  formData.append("title", data.title);

  if (data.image instanceof File) {
    formData.append("image", data.image);
  }
  const response = await axios.post(
    `${API_BASE_URL}/galleries/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const getGalleryById = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/galleries/${id}`);
  return response.data;
};

export const deleteGallery = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/galleries/${id}`);
};
