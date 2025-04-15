import { z } from "zod";

export const schema = z.object({
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

export type Schema = z.infer<typeof schema>;
