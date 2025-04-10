import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreatePackage } from "@/queries/package-queries";
import { PackageData } from "@/types/package";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const packageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  cover_image: z.instanceof(File),
  type: z.string().min(1, "Type is required"),
  duration: z.string().min(1, "Duration is required"),
  quota: z.number().min(1, "Quota must be at least 1"),
  deperature_location: z.string().min(1, "Departure location is required"),
  deperature_date: z.string().min(1, "Departure date is required"),
  content: z.string().min(1, "Content is required"),
});

const PackageForm = () => {
  const { mutate: createPackage, isPending } = useCreatePackage();

  const form = useForm<PackageData>({
    resolver: zodResolver(packageSchema),
    defaultValues: {
      name: "",
      type: "",
      duration: "",
      quota: 0,
      deperature_location: "",
      deperature_date: "",
      content: "",
    },
  });

  const onSubmit = (data: PackageData) => {
    createPackage(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Package name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cover_image"
          render={({ field: { value, onChange, ...field } }) => (
            <FormItem>
              <FormLabel>Cover Image</FormLabel>
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

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Input placeholder="Package type" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 3 days 2 nights" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quota"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quota</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Number of participants"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deperature_location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Departure Location</FormLabel>
              <FormControl>
                <Input placeholder="Departure location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deperature_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Departure Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Package details" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create Package"}
        </Button>
      </form>
    </Form>
  );
};

export default PackageForm;
