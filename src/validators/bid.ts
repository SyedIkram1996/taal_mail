import { object, string } from "zod";

export const bidSchema = object({
  property: string().optional(),
  title: string(),
  bidderBid: object({
    price: string(),
    currency: string(),
  }),
  description: string(),
});
