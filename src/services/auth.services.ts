import {
  FORGOT_PASSWORD,
  LOGIN,
  SIGN_UP,
  SIGN_UP_AND_LOGIN_GOOGLE,
} from "@/constants/api.routes";
import { ISignUp } from "@/interfaces/api";
import { makeApiRequest } from "@/utils/servicesHelper";

export const signUp = (data: ISignUp) => {
  return makeApiRequest({
    method: "POST",
    url: SIGN_UP,
    data,
  });
};

export const signUpAndLoginGoogle = (data: {
  email: string;
  idToken: string;
}) => {
  return makeApiRequest({
    method: "POST",
    url: SIGN_UP_AND_LOGIN_GOOGLE,
    data,
  });
};

export const login = (data: {
  email: string;
  idToken: string;
  uid: string;
}) => {
  return makeApiRequest({
    method: "POST",
    url: LOGIN,
    data,
  });
};

export const forgotPassword = (email: string) => {
  return makeApiRequest({
    method: "POST",
    url: FORGOT_PASSWORD,
    data: { email },
  });
};
