import { object, string } from "zod";

export const contactUsSchema = object({
  email: string().email("Invalid email address"),
  feedback: string(),
});
