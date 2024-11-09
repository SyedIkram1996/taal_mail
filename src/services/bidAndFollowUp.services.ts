import { BID_AND_FOLLOW_UP } from "@/constants/api.routes";
import { makeApiRequest } from "@/utils/servicesHelper";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const updateFollowUp = (
  meeting: number,
  bidId: string,
  token?: RequestCookie,
) => {
  return makeApiRequest({
    method: "PUT",
    url: `${BID_AND_FOLLOW_UP}?id=${bidId}`,
    token,
    data: { meeting },
  });
};
