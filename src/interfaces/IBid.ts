import { IBidSchema } from "@/lib/models/BidModel";

export interface IBid
  extends Pick<
    IBidSchema,
    | "property"
    | "bidBy"
    | "title"
    | "bidderBid"
    | "description"
    | "createdAt"
    | "status"
  > {
  id: string;
}
