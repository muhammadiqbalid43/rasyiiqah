import { useGalleryItem, useUpdateGallery } from "@/queries/gallery-queries";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ImageIcon, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";

const API_IMAGE_URL = process.env.NEXT_PUBLIC_API_IMAGE_URL;

const galleryFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  image: z.union([
    z
      .instanceof(File)
      .refine((file) => file.size > 0, "Image is required")
      .refine(
        (file) => ["image/jpeg", "image/png", "image/gif"].includes(file.type),
        "Only JPEG, PNG, and GIF images are allowed"
      ),
    z.string().min(1, "Image is required"),
  ]),
});

export type GalleryFormValues = z.infer<typeof galleryFormSchema>;

interface UpdateGalleryDialogProps {
  galleryId: number;
  children: React.ReactNode;
}

const UpdateGalleryDialog = ({
  galleryId,
  children,
}: UpdateGalleryDialogProps) => {
  const [open, setOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { data: galleryItem, isLoading: isLoadingItem } =
    useGalleryItem(galleryId);
  const { mutate: updateGallery, isPending } = useUpdateGallery();

  const form = useForm<GalleryFormValues>({
    resolver: zodResolver(galleryFormSchema),
  });

  const fileRef = form.register("image");

  useEffect(() => {
    if (galleryItem && open) {
      form.reset({
        title: galleryItem.data.title,
        image: galleryItem.data.imageUrl, // Default value
      });
      setPreviewUrl(galleryItem.data.imageUrl);
    }
  }, [galleryItem, open, form]);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        form.setValue("image", file, { shouldValidate: true });
        setPreviewUrl(URL.createObjectURL(file));

        // Clear file input jika ingin mengizinkan memilih file yang sama lagi
        e.target.value = "";
      }
    },
    [form]
  );

  const handleDialogChange = (open: boolean) => {
    setOpen(open);
    if (!open && galleryItem) {
      setPreviewUrl(galleryItem.data.image_url);
    }
  };

  async function onSubmit(values: GalleryFormValues) {
    await updateGallery({ id: galleryId, data: values });
    setOpen(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Foto Galeri</DialogTitle>
          <DialogDescription>
            Upload kenangan indah selama umroh
          </DialogDescription>
        </DialogHeader>

        {isLoadingItem ? (
          <div className="flex justify-center py-8">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
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
                    <FormLabel>Image</FormLabel>
                    <div className="space-y-2">
                      {previewUrl ? (
                        <div className="relative group">
                          <Image
                            src={`${API_IMAGE_URL}/storage/${previewUrl}`}
                            alt="Preview"
                            width={192}
                            height={192}
                            className="object-cover w-full h-48 rounded-md"
                          />
                          <div className="absolute inset-0 flex items-center justify-center transition-all bg-black bg-opacity-0 group-hover:bg-opacity-20">
                            <ImageIcon className="text-white opacity-0 group-hover:opacity-100" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-48 border-2 border-dashed rounded-md">
                          <ImageIcon className="w-12 h-12 text-gray-400" />
                        </div>
                      )}
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          {...fileRef}
                          onChange={handleImageChange}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isPending}>
                  {isPending ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : null}
                  {isPending ? "Updating..." : "Update"}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UpdateGalleryDialog;
