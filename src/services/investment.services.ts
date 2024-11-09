import { ADMIN_INVESTMENT, INVESTMENT } from "@/constants/api.routes";
import { IInvestment } from "@/interfaces/IInvestment";
import { makeApiRequest } from "@/utils/servicesHelper";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const addInvestment = (data: IInvestment) => {
  return makeApiRequest({
    method: "POST",
    url: INVESTMENT,
    data,
  });
};

export const updateInvestmentFollowUp = (
  id: string,
  token?: RequestCookie,
  meeting?: number,
  followUp?: any,
) => {
  return makeApiRequest({
    method: "PUT",
    url: `${ADMIN_INVESTMENT}?id=${id}`,
    token,
    data: { meeting, followUp },
  });
};
