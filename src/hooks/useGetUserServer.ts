import { BASE_URL } from "@/constants/environment copy";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const useGetUserServer = async (session: RequestCookie | undefined) => {
  let res: Response | null = null;

  if (session) {
    res = await fetch(`${BASE_URL}/user`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${session}`,
        // "Content-Type": "application/json",
      },
    });
  }

  return { res };
};
