import { EPropertyClassification } from "@/enums/enums";
const { RESIDENTIAL_VALUE } = EPropertyClassification;
export const HOME = "/";
export const SELL = "/sell";
export const SELL_PLOT = `${SELL}/plot`;
export const SELL_HOUSE = `${SELL}/house`;
export const BUY_PLOT = "/buy/plot";
export const BUY_HOUSE = "/buy/house";
export const RENT_APARTMENT = "/rent/apartment";
export const RENT_HOUSE = "/rent/house";
export const CONTACT_US = "/contact-us";
export const TERMS_AND_CONDITIONS = "/terms-and-conditions";
export const PROPERTY = "/property";
export const INVESTMENT = "/investment";

export const LOGIN = "/login";
export const ACCOUNT_MANAGEMENT = "/acctmgmt";
export const SIGN_UP = "/sign-up";
export const PROFILE = "/profile";
export const MY_BIDS = `${PROFILE}/my-bids`;
export const MY_INFO = `${PROFILE}/my-info`;
export const MY_PROPERTIES_PAGE = (
  classification?: EPropertyClassification,
) => {
  if (classification) {
    return `${PROFILE}/my-properties?classification=${classification}`;
  }

  return `${PROFILE}/my-properties?classification=${RESIDENTIAL_VALUE}`;
};
export const MY_OFFERS = `${PROFILE}/my-offers`;

export const SESSION_EXPIRE = "/session-expire";
