import { BID, MY_BID } from "@/constants/api.routes";
import { IBid } from "@/interfaces/IBid";
import { makeApiRequest } from "@/utils/servicesHelper";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const addBid = (
  data: Pick<IBid, "title" | "bidderBid" | "description" | "property">,
  token?: RequestCookie,
) => {
  return makeApiRequest({
    method: "POST",
    url: BID,
    token,
    data,
  });
};

export const cancelBid = (id: string, token?: RequestCookie) => {
  return makeApiRequest({
    method: "DELETE",
    url: `${MY_BID}?id=${id}`,
    token,
  });
};
