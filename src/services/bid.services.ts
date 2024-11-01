import { MY_BID } from "@/constants/api.routes";
import { IBid } from "@/interfaces/IBid";
import { makeApiRequest } from "@/utils/servicesHelper";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const addBid = (
  data: Pick<IBid, "title" | "bidderBid" | "description">,
  token?: RequestCookie,
) => {
  return makeApiRequest({
    method: "POST",
    url: MY_BID,
    token,
    data,
  });
};
