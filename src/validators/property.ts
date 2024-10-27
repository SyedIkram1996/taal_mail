import { array, object, string } from "zod";

export const propertySchema = object({
  createdBy: string().optional(),
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
    basicFeatures: array(object({})),
    facilities: array(object({})),
    nearbyPlaces: array(object({})),
    secondaryFeatures: array(object({})),
  }).refine(
    (data) => {
      // Check if at least one of the arrays has a length greater than 0
      return (
        data.basicFeatures.length > 0 ||
        data.facilities.length > 0 ||
        data.nearbyPlaces.length > 0 ||
        data.secondaryFeatures.length > 0
      );
    },
    {
      message: "Required",
    },
  ),
  name: string(),
  description: string(),
  images: array(
    object({
      public_id: string().optional(),
      url: string(),
    }),
  ).nonempty("Required"),
  allotmentLetter: object({
    public_id: string().optional(),
    url: string().optional(),
  }),
});
