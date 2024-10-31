"use server";

import { HOME, MY_PROPERTIES_PAGE } from "@/constants/page.routes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = ({
  redirectLink,
  token,
}: {
  redirectLink?: string | null;
  token: string;
}) => {
  const expiresIn = 60 * 60 * 24 * 15;
  const options = {
    maxAge: expiresIn,
    httpOnly: true,
    secure: true,
    // path: "/",
  };
  cookies().set("token", token, options);
  redirect(redirectLink ? redirectLink : MY_PROPERTIES_PAGE());
};

export const logoutAction = () => {
  cookies().delete("token");
  redirect(HOME);
};

export const deleteCookie = () => {
  cookies().delete("token");
};
