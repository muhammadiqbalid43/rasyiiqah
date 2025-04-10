import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useRouter } from "next/router";
import { useCreateBranch } from "@/hooks/use-branch-queries";
import { toast } from "@/hooks/use-toast";
import BranchForm from "../branch/branch-form";
import { useState } from "react";

const CabangButton = () => {
  const router = useRouter();
  const createMutation = useCreateBranch();
  const [open, setOpen] = useState(false);

  const handleSubmit = (data: FormData) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Branch created successfully",
          variant: "default",
        });
        setOpen(false);
        router.push("/dashboard/branch");
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
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Cabang
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Cabang</DialogTitle>
          <DialogDescription>
            Isi detail Form Cabang Anda di bawah ini.
          </DialogDescription>
        </DialogHeader>

        <BranchForm
          onSubmit={handleSubmit}
          isSubmitting={createMutation.isPending}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CabangButton;
