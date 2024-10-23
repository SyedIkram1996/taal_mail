import { SIGN_UP } from "@/constants/api.routes";
import { ISignUp } from "@/interfaces/api";
import { makeApiRequest } from "@/utils/servicesHelper";

export const signUp = (data: ISignUp) => {
  return makeApiRequest({
    method: "POST",
    url: SIGN_UP,
    data,
  });
};
