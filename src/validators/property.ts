import { array, object, string } from "zod";

export const propertySchema = object({
  purpose: string(),
  classification: string(),
  type: string(),
  duesCleared: string(),
  status: string(),
  city: string(),
  location: string(),
  area: object({
    type: string(),
    totalArea: string(),
  }),
  price: object({
    askingPrice: string(),
    currency: string(),
  }),
  bedrooms: string(),
  bathrooms: string(),
  features: object({
    basicFeatures: array(string()),
    facilities: array(string()),
    nearbyPlaces: array(string()),
    secondaryFeatures: array(string()),
  }),
  name: string(),
  description: string(),
  images: array(
    object({
      public_id: string(),
      url: string(),
    }),
  ),
  allotmentLetter: object({
    public_id: string(),
    url: string(),
  }),
});
