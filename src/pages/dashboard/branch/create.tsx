import BranchForm from "@/components/branch/branch-form";
import { useCreateBranch } from "@/hooks/use-branch-queries";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/router";

const CreateBranch = () => {
  const router = useRouter();
  const createMutation = useCreateBranch();

  const handleSubmit = (data: FormData) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Branch created successfully",
          variant: "default",
        });
        router.push("/branches");
      },
      onError: () => {
        toast({
          title: "Error creating branch",
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Branch</h1>
      <BranchForm
        onSubmit={handleSubmit}
        isSubmitting={createMutation.isPending}
      />
    </div>
  );
};

export default CreateBranch;
