import { createPackage, readPackages } from "@/services/package-service";
import { PackageData } from "@/types/package";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useReadPackages = () => {
  return useQuery({
    queryKey: ["packages"],
    queryFn: readPackages,
  });
};

export const useCreatePackage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: PackageData) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("cover_image", data.cover_image);
      formData.append("type", data.type);
      formData.append("duration", data.duration);
      formData.append("quota", data.quota.toString());
      formData.append("departure_location", data.departure_location);
      formData.append("departure_date", data.departure_date);
      formData.append("content", data.content);

      return createPackage(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["packages"] });
    },
  });
};
