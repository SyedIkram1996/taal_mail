import { PROPERTIES } from "@/constants/api.routes";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { any, equals } from "ramda";

export function parseJson(data: unknown) {
  if (data) {
    return JSON.parse(JSON.stringify(data));
  }
}

export const arrayContainObject = (
  arr: any,
  targetObject: any,
  targetKey: any,
) => {
  return any(
    (obj: any) => equals(obj[targetKey], targetObject[targetKey]),
    arr,
  );
};

export const queryKeyValue = (key: string, value: string) => {
  return `${key}=${value}`;
};

export const getBuyRentUrl = ({
  headersList,
  searchParams,
}: {
  headersList: ReadonlyHeaders;
  searchParams?: {
    location: string;
    minPrice: string;
    maxPrice: string;
    totalArea: string;
    areaType: string;
    classification: string;
    type: string;
    keyword: string;
    bedrooms: string;
    bathrooms: string;
    page: string;
  };
}) => {
  let purpose = "";

  const pathname = headersList.get("x-pathname");
  if (pathname) {
    purpose = pathname?.includes("/buy") ? "sell" : "rent";
  }

  let url = `${PROPERTIES}?${queryKeyValue("purpose", purpose)}&${queryKeyValue("page", "1")}`;

  if (searchParams?.location) {
    url += `&${queryKeyValue("location", searchParams.location)}`;
  }

  if (searchParams?.minPrice) {
    url += `&${queryKeyValue("minPrice", searchParams.minPrice)}`;
  }

  if (searchParams?.maxPrice) {
    url += `&${queryKeyValue("maxPrice", searchParams.maxPrice)}`;
  }

  if (searchParams?.classification) {
    url += `&${queryKeyValue("classification", searchParams.classification)}`;
  }

  if (searchParams?.type) {
    url += `&${queryKeyValue("type", searchParams.type)}`;
  }

  if (searchParams?.keyword) {
    url += `&${queryKeyValue("keyword", searchParams.keyword)}`;
  }

  if (searchParams?.bedrooms) {
    url += `&${queryKeyValue("bedrooms", searchParams.bedrooms)}`;
  }

  if (searchParams?.bathrooms) {
    url += `&${queryKeyValue("bathrooms", searchParams.bathrooms)}`;
  }

  if (searchParams?.totalArea) {
    url += `&${queryKeyValue("totalArea", searchParams.totalArea)}`;
  }

  if (searchParams?.areaType) {
    url += `&${queryKeyValue("areaType", searchParams.areaType)}`;
  }
  return url;
};
