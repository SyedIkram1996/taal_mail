import { number, object, string } from "zod";

export const bidSchema = object({
  property: string().optional(),
  title: string(),
  bidderBid: object({
    price: string().or(number()),
    currency: string(),
  }),
  description: string(),
});
