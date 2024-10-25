import { Document } from "mongoose";

export interface IPropertySchema extends Document {
  purpose: string;
  classification: string;
  type: string;
  duesCleared: boolean;
  status: boolean;
  city: string;
  location: string;
  area: {
    type: string;
    totalArea: string;
  };
  price: {
    askingPrice: string;
    currency: string;
  };
  bedrooms: string;
  bathrooms: string;
  features: {
    basicFeatures: string[];
    facilities: string[];
    nearbyPlaces: string[];
    secondaryFeatures: string[];
  };
  name: string;
  description: string;
  images: {
    public_id: String;
    url: String;
  }[];
  allotmentLetter: {
    public_id: String;
    url: String;
  };
}
