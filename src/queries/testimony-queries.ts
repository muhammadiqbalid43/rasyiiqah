import {
  createTestimony,
  deleteTestimony,
  getTestimonies,
} from "@/services/testimony-service";
import { TestimonyCreatePayload } from "@/types/testimony";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";

export function useTestimonies(params?: { page?: number; per_page?: number }) {
  return useQuery({
    queryKey: ["testimonies", params],
    queryFn: () => getTestimonies(params),
  });
}

export function useCreateTestimony() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: TestimonyCreatePayload) => createTestimony(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testimonies"] });
    },
  });
}

export const useDeleteTestimony = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTestimony,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testimonies"] });
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
