import { PROPERTY } from "@/constants/api.routes";
import { IProperty } from "@/interfaces/IProperty";
import { makeApiRequest } from "@/utils/servicesHelper";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const addProperty = (data: IProperty, token?: RequestCookie) => {
  return makeApiRequest({
    method: "POST",
    url: PROPERTY,
    token,
    data,
  });
};

export const updateProperty = (data: IProperty, token?: RequestCookie) => {
  return makeApiRequest({
    method: "PUT",
    url: PROPERTY,
    token,
    data,
  });
};
export const deleteProperty = (id?: string, token?: RequestCookie) => {
  return makeApiRequest({
    method: "DELETE",
    url: `${PROPERTY}?id=${id}`,
    token,
  });
};
