import { useCreateBranch } from "@/queries/branch-queries";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone must be at least 10 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  map_url: z.string().url({
    message: "Map URL must be a valid URL.",
  }),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, "File tidak boleh kosong") // Optional validation
    .optional(),
});

type Props = {
  open: boolean;
  onClose: () => void;
};

const BranchCreateDialog = ({ open, onClose }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync: createBranch } = useCreateBranch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      map_url: "",
    },
  });

  // const fileRef = form.register("image");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("phone", values.phone);
      formData.append("address", values.address);
      formData.append("map_url", values.map_url);

      if (values.image instanceof File) {
        // ✅ Pastikan benar-benar File
        formData.append("image", values.image, values.image.name); // Tambahkan filename
      }

      await createBranch(formData);

      toast({
        title: "Success",
        description: "Branch created successfully.",
      });
      onClose();
      form.reset();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Branch</DialogTitle>

          <DialogDescription>
            Fill the form to create a new branch location
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Branch name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Branch address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="map_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Map URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/map" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={() => (
                <FormItem>
                  <FormLabel>Branch Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          form.setValue("image", file, {
                            shouldValidate: true,
                          });
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Branch"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BranchCreateDialog;
