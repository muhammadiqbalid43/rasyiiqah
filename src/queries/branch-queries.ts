import {
  createBranch,
  deleteBranch,
  getBranches,
  updateBranch,
} from "@/services/branch-service";
import { PaginationParams } from "@/types/branch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useBranches = (params?: PaginationParams) => {
  return useQuery<Branch.Response.Get>({
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

export const useUpdateBranch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (formData: FormData) => updateBranch(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["branches"] });
    },
  });
};

export const useDeleteBranch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteBranch(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["branches"] });
    },
  });
};
