import { Document } from "mongoose";

export interface IBidSchema extends Document {
  property: string;
  bidBy: string;
  title: string;
  bidderBid: {
    price: {
      type: String;
      required: [true, "Price is required"];
    };
    currency: {
      type: String;
      required: [true, "Currency is required"];
    };
  };
  description: string;
  createdAt: Date;
}
