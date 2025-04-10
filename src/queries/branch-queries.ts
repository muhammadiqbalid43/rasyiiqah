import { createBranch, getBranches } from "@/services/branch-service";
import { PaginationParams } from "@/types/branch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useBranches = (params?: PaginationParams) => {
  return useQuery({
    queryKey: ["branches", params],
    queryFn: () => getBranches(params),
  });
};

export const useCreateBranch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (formData: FormData) => createBranch(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["branches"] });
    },
  });
};
