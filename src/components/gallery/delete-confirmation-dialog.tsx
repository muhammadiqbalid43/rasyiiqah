import { useDeleteLegality } from "@/queries/legality-queries";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface DeleteConfirmationDialogProps {
  id: number;
  children: React.ReactNode;
}

const DeleteConfirmationDialog = ({
  id,
  children,
}: DeleteConfirmationDialogProps) => {
  const [open, setOpen] = useState(false);
  const { mutate: deleteLegality, isPending } = useDeleteLegality();

  const handleDelete = () => {
    deleteLegality(id, {
      onSuccess: () => setOpen(false),
    });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Konfirmasi Hapus</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Apakah kamu yakin ingin menghapusnya?
        </DialogDescription>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Batal
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
