import { EPropertyClassification } from "@/enums/enums";
import { BASE_URL } from "./environment";

const { RESIDENTIAL_VALUE } = EPropertyClassification;

export const SIGN_UP = `${BASE_URL}/sign-up`;
export const LOGIN = `${BASE_URL}/login`;
export const PROPERTY = `${BASE_URL}/property`;
export const PROPERTIES = `${BASE_URL}/properties`;
export const SEARCH_PROPERTIES_BY_LOCATION = `${BASE_URL}/properties/search-by-location`;

export const MY_PROPERTIES = (classification: string) =>
  `${BASE_URL}/profile/my-properties?classification=${classification ?? RESIDENTIAL_VALUE}`;
export const MY_PROPERTY = `${BASE_URL}/profile/my-property`;
export const MY_BID = `${BASE_URL}/property/bid`;
export const MY_INFO = `${BASE_URL}/profile/my-info`;
