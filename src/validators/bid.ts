import { object, string } from "zod";

export const bidSchema = object({
  title: string(),
  bidderBid: object({
    price: string(),
    currency: string(),
  }),
  description: string(),
});
