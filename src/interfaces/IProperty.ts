import { IPropertySchema } from "@/lib/models/propertyModel";

export interface IPropertyFeatures {
  basicFeatures: IPropertyFeature[];
  facilities: IPropertyFeature[];
  nearbyPlaces: IPropertyFeature[];
  secondaryFeatures: IPropertyFeature[];
}

export interface IPropertyFeature {
  title: string;
  count: number;
  icon: any;
  tab: string;
  pathFill?: boolean;
  time: number;
}

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
  createdBy?: string;
  id?: string;
  images:
    | {
        public_id: string;
        url: string;
        delete?: boolean;
      }[]
    | [];
  features: IPropertyFeatures;
}
