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

export const bidFollowUpSchema = object({
  title: string(),
  sellerOffer: string({ message: "Required" }).or(
    number({ message: "Required" }),
  ),
  bidderBid: string({ message: "Required" }).or(
    number({ message: "Required" }),
  ),
});
