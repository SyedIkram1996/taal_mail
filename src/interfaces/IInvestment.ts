import { IInvestmentSchema } from "@/lib/models/investmentModel";
import { IPropertyFeatures } from "./IProperty";

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
    | "followUps"
  > {
  price: {
    minPrice: string;
    maxPrice: string;
    currency: string;
  };
  features: IPropertyFeatures;
}
