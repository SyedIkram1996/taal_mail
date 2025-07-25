import { IPropertyFeature } from "@/interfaces/IProperty";
import { Document, model, Model, models, Schema, Types } from "mongoose";

export interface IPropertySchema extends Document {
  createdBy: any;
  purpose: string;
  classification: string;
  type: string;
  duesCleared: string;
  status: string;
  city: string;
  location: string;
  area: {
    type: string;
    totalArea: string;
  };
  price: {
    askingPrice: number;
    currency: string;
  };
  bedrooms: string;
  bathrooms: string;
  features: {
    basicFeatures: Pick<IPropertyFeature, "title" | "count">[];
    facilities: Pick<IPropertyFeature, "title" | "count">[];
    nearbyPlaces: Pick<IPropertyFeature, "title" | "count">[];
    secondaryFeatures: Pick<IPropertyFeature, "title" | "count">[];
  };
  name: string;
  description: string;
  images: {
    public_id: string;
    url: string;
    coverImage: boolean;
  }[];
  allotmentLetter: {
    public_id: string;
    url: string;
  };
  createdAt: Date;
}

const propertySchema: Schema<IPropertySchema> = new Schema({
  createdBy: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  purpose: {
    type: String,
    required: [true, "Purpose is required"],
  },
  classification: {
    type: String,
    required: [true, "Classification is required"],
  },
  type: {
    type: String,
    required: [true, "Type is required"],
  },
  duesCleared: {
    type: String,
    required: [true, "Dues cleared is required"],
  },
  status: {
    type: String,
    required: [true, "Status is required"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
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
    askingPrice: {
      type: Number,
      required: [true, "Price is required"],
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
  features: {
    basicFeatures: Array<{ title: String; count: Number }>,
    facilities: Array<{ title: String; count: Number }>,
    nearbyPlaces: Array<{ title: String; count: Number }>,
    secondaryFeatures: Array<{
      title: String;
      count: Number;
    }>,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  images: Array<{
    public_id: String;
    url: String;
    coverImage: Boolean;
  }>,
  allotmentLetter: {
    public_id: String,
    url: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

propertySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const PropertyModel =
  (models.Property as Model<IPropertySchema>) ||
  model("Property", propertySchema);

export default PropertyModel;
