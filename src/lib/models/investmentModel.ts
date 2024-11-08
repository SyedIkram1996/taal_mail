import { IPropertyFeature } from "@/interfaces/IProperty";
import { Document, model, Model, models, Schema } from "mongoose";

export interface IInvestmentSchema extends Document {
  username: string;
  email: string;
  phoneNo: string;
  city: string;
  area: {
    type: string;
    totalArea: string;
  };
  price: {
    minPrice: number;
    maxPrice: number;
    currency: string;
  };
  description: string;
  bedrooms: string;
  bathrooms: string;
  features: {
    basicFeatures: Pick<IPropertyFeature, "title" | "count">[];
    facilities: Pick<IPropertyFeature, "title" | "count">[];
    nearbyPlaces: Pick<IPropertyFeature, "title" | "count">[];
    secondaryFeatures: Pick<IPropertyFeature, "title" | "count">[];
  };
}

const investmentSchema: Schema<IInvestmentSchema> = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  phoneNo: {
    type: String,
    required: [true, "phoneNo is required"],
  },
  city: {
    type: String,
    required: [true, "city is required"],
  },
  area: {
    type: {
      type: String,
      required: [true, "Area type is required"],
    },
    totalArea: {
      type: String,
      required: [true, "Total area is required"],
    },
  },
  price: {
    minPrice: {
      type: Number,
      required: [true, "minPrice is required"],
    },
    maxPrice: {
      type: Number,
      required: [true, "maxPrice is required"],
    },
    currency: {
      type: String,
      required: [true, "Currency is required"],
    },
  },

  bedrooms: {
    type: String,
    required: [true, "Bedrooms is required"],
  },
  bathrooms: {
    type: String,
    required: [true, "Bathrooms is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  features: {
    basicFeatures: Array<{ title: String; count: Number }>,
    facilities: Array<{ title: String; count: Number }>,
    nearbyPlaces: Array<{ title: String; count: Number }>,
    secondaryFeatures: Array<{
      title: String;
      count: Number;
    }>,
  },
});

investmentSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const InvestmentModel =
  (models.Investment as Model<IInvestmentSchema>) ||
  model("Investment", investmentSchema);

export default InvestmentModel;
