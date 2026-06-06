import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  subject: z.string().min(1, "Subject is required!"),
  email: z.string().min(1, "Email is required!").lowercase().email("Invalid email address!"),
  message: z.string().min(1, "Message is required!"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
