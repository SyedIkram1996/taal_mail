import { IUserSchema } from "@/lib/models/userModel";

import { AxiosError, AxiosResponse, Method } from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export interface IAPIRequest {
  method: Method;
  url: string;
  data?: object;
  headers?: object;
  formData?: boolean;
  token?: RequestCookie;
  uploadProgress?: object;
  timeout?: number;
}

export interface ISignUp
  extends Pick<IUserSchema, "name" | "email" | "phoneNo"> {
  password: string;
  confirmPassword: string;
}

export interface ILogin extends Pick<IUserSchema, "email"> {
  password: string;
}

export interface ISendEmail {
  subject: string;
  body: string;
  sentTo: string;
}

export type TServiceResponse = [null | AxiosResponse, AxiosError | null];

export interface IJWT {
  email: string;
  id: string;
  role: string;
}
