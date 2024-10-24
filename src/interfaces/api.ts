import { IUserSchema } from "@/lib/models/userModel";

import { AxiosError, AxiosResponse, Method } from "axios";

export interface IAPIRequest {
  method: Method;
  url: string;
  data?: object;
  headers?: object;
  formData?: boolean;
  serverToken?: string;
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
