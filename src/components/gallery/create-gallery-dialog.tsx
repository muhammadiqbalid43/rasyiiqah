import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Image is required"),
});

type FormValues = z.infer<typeof formSchema>;

import React, { useState } from "react";
import { useCreateGallery } from "@/queries/gallery-queries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const CreateGalleryDialog = () => {
  const [open, setOpen] = useState(false);
  const { mutate: createLegality, isPending } = useCreateGallery();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      image: undefined,
    },
  });

  const onSubmit = (values: FormValues) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("image", values.image);

    createLegality(formData, {
      onSuccess: () => {
        toast({
          title: "Success",
          description: "Legality created successfully",
        });
        form.reset();
        setOpen(false);
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to create legality",
          variant: "destructive",
        });
      },
    });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Tambah Galeri</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Galeri</DialogTitle>
          <DialogDescription>Upload foto-foto umroh</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Judul</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gambar</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        field.onChange(
                          e.target.files ? e.target.files[0] : null
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? "Menambahkan..." : "Tambah"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateGalleryDialog;
