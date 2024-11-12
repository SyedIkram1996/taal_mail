"use server";

import {
  ADMIN_USERS_PAGE,
  HOME,
  MY_PROPERTIES_PAGE,
} from "@/constants/page.routes";
import { ERoles } from "@/enums/enums";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const { ADMIN, USER } = ERoles;

export const loginAction = ({
  redirectLink,
  token,
  role,
}: {
  redirectLink?: string | null;
  token: string;
  role: string;
}) => {
  const expiresIn = 60 * 60 * 24 * 15;
  const options = {
    maxAge: expiresIn,
    httpOnly: true,
    secure: true,
    // path: "/",
  };
  cookies().set("token", token, options);
  if (role === ADMIN) {
    redirect(ADMIN_USERS_PAGE);
  } else {
    redirect(redirectLink ? redirectLink : MY_PROPERTIES_PAGE());
  }
};

export const logoutAction = (pathname: string) => {
  cookies().delete("token");

  if (
    pathname.startsWith("/sell") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/admin")
  ) {
    redirect(HOME);
  } else {
    redirect(pathname);
  }
};

export const deleteCookie = () => {
  cookies().delete("token");
};
export const revalidatePage = (path: string) => {
  revalidatePath(path, "page");
};
