import { IInvestmentSchema } from "@/lib/models/investmentModel";

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

export interface IInvestment
  extends Pick<
    IInvestmentSchema,
    | "username"
    | "email"
    | "area"
    | "bedrooms"
    | "bathrooms"
    | "features"
    | "description"
    | "phoneNo"
    | "city"
  > {
  price: {
    minPrice: string;
    maxPrice: string;
    currency: string;
  };
  features: IPropertyFeatures;
}
