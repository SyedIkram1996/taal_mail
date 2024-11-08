import { EPropertyClassification } from "@/enums/enums";
import { BASE_URL } from "./environment";

const { RESIDENTIAL_VALUE } = EPropertyClassification;

export const SIGN_UP = `${BASE_URL}/sign-up`;
export const LOGIN = `${BASE_URL}/login`;
export const FORGOT_PASSWORD = `${BASE_URL}/forgot-password`;
export const PROPERTY = `${BASE_URL}/property`;
export const PROPERTIES = `${BASE_URL}/properties`;
export const INVESTMENT = `${BASE_URL}/investment`;
export const INVESTMENTS = `${BASE_URL}/admin/investments`;
export const USERS = `${BASE_URL}/admin/users`;
export const USER = `${BASE_URL}/admin/user`;
export const USER_PROPERTIES = `${BASE_URL}/admin/user/properties`;
export const BIDS_AND_FOLLOW_UPS = `${BASE_URL}/admin/bids-follow-ups`;
export const FEATURED_PROPERTIES = `${BASE_URL}/properties/featured`;
export const SEARCH_PROPERTIES_BY_LOCATION = `${BASE_URL}/properties/search-by-location`;

export const MY_PROPERTIES = (classification: string) =>
  `${BASE_URL}/profile/my-properties?classification=${classification ?? RESIDENTIAL_VALUE}`;
export const MY_PROPERTY = `${BASE_URL}/profile/my-property`;
export const BID = `${BASE_URL}/property/bid`;
export const MY_BIDS = `${BASE_URL}/profile/my-bids`;
export const MY_OFFERS = `${BASE_URL}/profile/my-offers`;
export const MY_BID = `${BASE_URL}/profile/my-bid`;
export const MY_INFO = `${BASE_URL}/profile/my-info`;
export const MY_INFO_AVATAR = `${BASE_URL}/profile/my-info/avatar`;
