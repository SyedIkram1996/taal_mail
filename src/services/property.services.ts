import {
  MY_PROPERTY,
  SEARCH_PROPERTIES_BY_LOCATION,
} from "@/constants/api.routes";
import { IProperty } from "@/interfaces/IProperty";
import { makeApiRequest } from "@/utils/servicesHelper";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const addProperty = (data: IProperty, token?: RequestCookie) => {
  return makeApiRequest({
    method: "POST",
    url: MY_PROPERTY,
    token,
    data,
  });
};

export const updateProperty = (data: IProperty, token?: RequestCookie) => {
  return makeApiRequest({
    method: "PUT",
    url: MY_PROPERTY,
    token,
    data,
  });
};
export const deleteProperty = (id?: string, token?: RequestCookie) => {
  return makeApiRequest({
    method: "DELETE",
    url: `${MY_PROPERTY}?id=${id}`,
    token,
  });
};

export const searchPropertiesByLocation = (location: string) => {
  if (!location) {
    return null;
  }
  return makeApiRequest({
    method: "GET",
    url: `${SEARCH_PROPERTIES_BY_LOCATION}?location=${location}`,
  });
};
