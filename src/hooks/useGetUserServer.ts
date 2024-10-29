import { BASE_URL } from "@/constants/environment";
import { IUser } from "@/interfaces/IUser";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const useGetUserServer = async (session: RequestCookie | undefined) => {
  let data: IUser | null = null;

  if (session) {
    const res = await fetch(`${BASE_URL}/user`, {
      cache: "no-store",
      // headers: {
      //   Authorization: `Bearer ${session}`,
      //   "Content-Type": "application/json",
      // },
    });

    if (res.ok) {
      data = await res.json();
    }
  }

  return { data };
};
