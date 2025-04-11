import {
  createLegality,
  deleteLegality,
  getLegalities,
  updateLegality,
} from "@/services/legality-service";
import { LegalityResponse } from "@/types/legality";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";

export const useCreateLegality = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => createLegality(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["legalities"] });
    },
  });
};

export const useLegalities = (page: number = 1, per_page: number = 10) => {
  return useQuery<LegalityResponse>({
    queryKey: ["legalities", { page, per_page }],
    queryFn: () => getLegalities(page),
  });
};

export const useUpdateLegality = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, formData }: { id: number; formData: FormData }) =>
      updateLegality(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["legalities"] });
      toast({
        title: "Success",
        description: "Legality updated successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update legality",
        variant: "destructive",
      });
    },
  });
};

export const useDeleteLegality = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteLegality,
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
