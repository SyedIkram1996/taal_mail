"use server";

import { HOME, MY_PROPERTY } from "@/constants/page.routes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = ({
  redirectLink,
}: {
  redirectLink: string | null;
}) => {
  cookies().set(
    "session",
    JSON.stringify({ name: "Ikram", email: "ikram96211@gmail.com" }),
  );
  redirect(redirectLink ? redirectLink : MY_PROPERTY);
};

export const logoutAction = () => {
  cookies().delete("session");
  redirect(HOME);
};
