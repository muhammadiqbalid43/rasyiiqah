interface DeleteConfirmationDialogProps {
  id: number;
  title: string;
  children: React.ReactNode;
}

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

const DeleteConfirmationDialog = ({
  id,
  title,
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
          <DialogTitle>Confirm Deletion</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete &quot;{title}&quot;? This action
          cannot be undone.
        </DialogDescription>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
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
