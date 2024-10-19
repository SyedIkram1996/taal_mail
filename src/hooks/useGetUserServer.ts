import { IUser } from "@/interfaces/IUser";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const useGetUserServer = async (session: RequestCookie | undefined) => {
  let data: IUser | null = null;

  if (session) {
    const res = await fetch("http://localhost:3000/api/v1/user", {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${session}`,
        "Content-Type": "application/json",
      },
    });

    data = await res.json();
  }

  return { data };
};
