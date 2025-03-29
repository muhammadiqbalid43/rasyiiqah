import {
  createBranch,
  deleteBranch,
  fetchBranches,
  updateBranch,
} from "@/services/branch-service";
import { PaginatedBranches } from "@/types/branch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreateBranch = () => {
  return useMutation({
    mutationFn: (formData: FormData) => createBranch(formData),
  });
};

export const useReadBranch = (page: number) => {
  return useQuery<PaginatedBranches, Error>({
    queryKey: ["branches", page],
    queryFn: () => fetchBranches(page),
    placeholderData: (prevData) => prevData,
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

export const useUpdateBranch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, formData }: { id: number; formData: FormData }) =>
      updateBranch(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["branches"] });
    },
  });
};
