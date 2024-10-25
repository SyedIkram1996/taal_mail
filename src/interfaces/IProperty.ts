import { IPropertySchema } from "@/lib/models/propertyModel";

export interface IProperty
  extends Pick<
    IPropertySchema,
    | "purpose"
    | "classification"
    | "type"
    | "duesCleared"
    | "status"
    | "city"
    | "location"
    | "area"
    | "price"
    | "bedrooms"
    | "bathrooms"
    | "features"
    | "name"
    | "description"
    | "images"
    | "allotmentLetter"
  > {
  id: string;
  images:
    | {
        public_id: string;
        url: string;
      }[]
    | [];
}
