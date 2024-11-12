import ForgotPassword from "@/components/ui/ForgotPassword/ForgotPassword";
import { META_DATA } from "@/utils/seo";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...META_DATA({
    title: "Forgot Password | Taal Mail",
    description:
      "Forgot your password? Reset it here to regain access to your property account and manage your listings and offers.",
  }),
  keywords: [
    "forgot password",
    "reset account password",
    "account recovery",
    "password assistance",
    "property portal access recovery",
  ],
};

export default function page() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <ForgotPassword />
    </Stack>
  );
}
