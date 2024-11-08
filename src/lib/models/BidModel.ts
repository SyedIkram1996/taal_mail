import { Document, model, Model, models, Schema, Types } from "mongoose";

export interface IBidSchema extends Document {
  property: any;
  bidBy: any;
  title: string;
  bidderBid: {
    price: string;
    currency: string;
  };
  description: string;
  status: string;
  createdAt: Date;
}

const bidSchema: Schema<IBidSchema> = new Schema({
  property: {
    type: Types.ObjectId,
    ref: "Property",
    required: true,
  },
  bidBy: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  bidderBid: {
    price: {
      type: String,
      required: [true, "Price is required"],
    },
    currency: {
      type: String,
      required: [true, "Currency is required"],
    },
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },

  status: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

bidSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const BidModel = (models.Bid as Model<IBidSchema>) || model("Bid", bidSchema);

export default BidModel;
