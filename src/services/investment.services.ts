import { INVESTMENT } from "@/constants/api.routes";
import { IInvestment } from "@/interfaces/IInvestment";
import { makeApiRequest } from "@/utils/servicesHelper";

export const addInvestment = (data: IInvestment) => {
  return makeApiRequest({
    method: "POST",
    url: INVESTMENT,
    data,
  });
};
