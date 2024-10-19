import Login from "@/components/ui/Login/Login";
import { HOME } from "@/constants/page.routes";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login | Taal Mail",
};

export default function LoginPage() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Login />
    </Stack>
  );
}
