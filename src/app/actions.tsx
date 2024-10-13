"use server";

import { HOME, MY_PROPERTY } from "@/constants/page.routes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = () => {
  cookies().set(
    "user",
    JSON.stringify({ name: "Ikram", email: "ikram96211@gmail.com" }),
  );
  redirect(MY_PROPERTY);
};

export const logoutAction = () => {
  cookies().delete("user");
  redirect(HOME);
};
