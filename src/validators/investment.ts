import { array, number, object, string } from "zod";

export const investmentSchema = object({
  username: string(),
  email: string().email("Invalid email address"),
  phoneNo: string(),
  city: string(),
  area: object({
    type: string(),
    totalArea: string(),
  }),
  price: object({
    minPrice: string({ message: "Required" }).or(
      number({ message: "Required" }),
    ),
    maxPrice: string({ message: "Required" }).or(
      number({ message: "Required" }),
    ),
    currency: string(),
  }),
  description: string(),
  bedrooms: string(),
  bathrooms: string(),
  features: object({
    basicFeatures: array(object({ title: string(), count: number() })),
    facilities: array(object({ title: string(), count: number() })),
    nearbyPlaces: array(object({ title: string(), count: number() })),
    secondaryFeatures: array(object({ title: string(), count: number() })),
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
});
