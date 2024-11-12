import { BASE_URL } from "@/constants/environment";
import { HOME, PROFILE, SELL, SESSION_EXPIRE } from "@/constants/page.routes";
import { IUser } from "@/interfaces/IUser";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const useGetUserServer = async (token: RequestCookie | undefined) => {
  let data: IUser | null = null;
  if (token) {
    const res = await fetch(`${BASE_URL}/user`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      data = await res.json();
      const headersList = headers();
      const pathname = headersList.get("x-pathname") || "";

      //@ts-ignore
      if (data && !data.user) {
        if (
          pathname &&
          pathname !== SESSION_EXPIRE &&
          (pathname.includes(PROFILE) || pathname.includes(SELL))
        ) {
          redirect(SESSION_EXPIRE);
        }
      } else if (
        data &&
        //@ts-ignore
        data.user &&
        //@ts-ignore
        ((data.user.role === "User" && pathname.includes("/admin")) ||
          //@ts-ignore
          (data.user.role === "Admin" && pathname.includes("/profile")))
      ) {
        redirect(HOME);
      }
    }
  }

  return { data };
};
