/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useCreateBranch, useUpdateBranch } from "@/queries/branch-queries";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Schema, schema } from "./schema";
import { baseUrl, getBaseURL } from "@/lib/utils";
import { BASE_URL } from "@/lib/constants";

interface Props {
  children: React.ReactNode;
  branch?: Branch.Root;
}

export const FormDialog = ({ children, branch }: Props) => {
  const [open, setOpen] = React.useState(false);
  const closeDialog = () => setOpen(false);

  const createBranch = useCreateBranch();
  const updateBranch = useUpdateBranch();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: branch?.name || "",
      phone: branch?.phone || "",
      address: branch?.address || "",
      map_url: branch?.mapUrl || "",
    },
  });

  //   const fileRef = form.register("image");

  const onSubmit: SubmitHandler<Schema> = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("address", values.address);
    formData.append("map_url", values.map_url);

    if (values.image instanceof File) {
      formData.append("image", values.image, values.image.name);
    }

    const onSuccess = () => {
      toast({
        title: "Berhasil",
        description: `Cabang berhasil ${branch ? "diupdate" : "dibuat"}.`,
      });

      form.reset();
      closeDialog();
    };

    const onError = () => {
      toast({
        title: "Gagal",
        description: `Cabang gagal ${branch ? "diupdate" : "dibuat"}.`,
        variant: "destructive",
      });
    };

    if (branch) {
      formData.append("id", branch.id.toString());
      updateBranch.mutate(formData, { onSuccess, onError });
    } else {
      createBranch.mutate(formData, { onSuccess, onError });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Buat Cabang Baru</DialogTitle>

          <DialogDescription>
            Isi form berikut untuk membuat cabang baru
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>No. HP</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>Alamat</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>Link Google Map</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>Foto</FormLabel>
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

            {branch?.imageUrl && (
              <img
                src={`${BASE_URL}/storage/${branch.imageUrl}`}
                alt={`Branch ${branch.name}`}
                className="h-24"
              />
            )}

            <Button disabled={createBranch.isPending} type="submit">
              {createBranch.isPending ? "Menyimpan..." : "Simpan"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
