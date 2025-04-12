import {
  createGallery,
  deleteGallery,
  getGalleries,
  getGalleryById,
  updateGallery,
} from "@/services/gallery-service";
import { GalleryResponse, GetGallery } from "@/types/gallery";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";

type GalleryFormValues = {
  title: string;
  image: string | File;
};

export const useCreateGallery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => createGallery(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["legalities"] });
    },
  });
};

export const useGallery = (page: number = 1, per_page: number = 10) => {
  return useQuery<GalleryResponse | GetGallery>({
    queryKey: ["galleries", { page, per_page }],
    queryFn: () => getGalleries(page),
  });
};

export const useUpdateGallery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: GalleryFormValues }) =>
      updateGallery(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["galleries"] });
      queryClient.invalidateQueries({ queryKey: ["gallery", variables.id] });
      toast({
        title: "Success",
        description: "Gallery item updated successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update gallery item",
        variant: "destructive",
      });
    },
  });
};

export const useGalleryItem = (id: number) => {
  return useQuery({
    queryKey: ["gallery", id],
    queryFn: () => getGalleryById(id),
    enabled: !!id,
  });
};

export const useDeleteGallery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteGallery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["legalities"] });
      toast({
        title: "Success",
        description: "Legality deleted successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete legality",
        variant: "destructive",
      });
    },
  });
};
