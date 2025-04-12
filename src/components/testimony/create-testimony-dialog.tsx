import { useCreateTestimony } from "@/queries/testimony-queries";
import { TestimonyCreatePayload } from "@/types/testimony";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";

const formSchema = z
  .object({
    type: z.enum(["image", "video"], {
      required_error: "Please select a type",
    }),
    file: z
      .instanceof(File)
      .optional()
      .superRefine((file, ctx) => {
        if (!file) return;
        const validTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!validTypes.includes(file.type)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Only JPEG, JPG, and PNG files are allowed",
          });
        }
        if (file.size > 5 * 1024 * 1024) {
          // 5MB
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "File size must be less than 5MB",
          });
        }
      }),
    url: z.string().url("Please enter a valid URL").optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === "image" && !data.file) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Image file is required",
        path: ["file"],
      });
    }
    if (data.type === "video" && !data.url) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Video URL is required",
        path: ["url"],
      });
    }
  });

const CreateTestimony = () => {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "image",
    },
  });

  const watchType = form.watch("type");

  const { mutate: createTestimony, isPending } = useCreateTestimony();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const payload: TestimonyCreatePayload = {
        type: values.type,
      };

      if (values.type === "image" && values.file) {
        payload.image = values.file;
      } else if (values.type === "video" && values.url) {
        payload.url = values.url;
      }

      await createTestimony(payload, {
        onSuccess: () => {
          toast({
            title: "Success",
            description: "Testimony created successfully",
          });
          form.reset();
          setOpen(false);
        },
        onError: (error: unknown) => {
          const message =
            error instanceof Error
              ? error.message
              : "Failed to create testimony";
          toast({
            title: "Error",
            description: message,
            variant: "destructive",
          });
        },
      });
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Tambah Testimoni</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Testimony</DialogTitle>
          <DialogDescription>
            Add a new testimony by filling out the form below.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="image">Image</SelectItem>
                      <SelectItem value="video">Video</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {watchType === "image" && (
              <FormField
                control={form.control}
                name="file"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Image File</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => onChange(e.target.files?.[0])}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {watchType === "video" && (
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter video URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button type="submit" disabled={isPending} className="w-full">
              {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {isPending ? "Creating..." : "Create Testimony"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTestimony;
