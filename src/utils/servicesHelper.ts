import { IAPIRequest } from "@/interfaces/api";
import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";

export const makeApiRequest = async <T>(params: IAPIRequest) => {
  const { method, url, data, headers, serverToken, uploadProgress, timeout } =
    params;

  const token = "";

  const defaultHeaders: RawAxiosRequestHeaders = {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : undefined,
    ...headers,
  };

  const config: AxiosRequestConfig = {
    method,
    maxBodyLength: Infinity,
    url,
    headers: defaultHeaders,
    timeout,
    data: data ? (params.formData ? data : JSON.stringify(data)) : undefined,
    ...uploadProgress,
  };

  try {
    return await axios.request<T>(config);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return Promise.reject({
        message: error.response?.data?.message || "API Request Failed",
        status: error.response?.status,
        data: error.response?.data,
      });
    } else {
      return Promise.reject({
        message: error.message || "An unknown error occurred",
      });
    }
  }
};
