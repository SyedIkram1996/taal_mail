import SignUp from "@/components/ui/SignUp/SignUp";
import { META_DATA } from "@/utils/seo";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...META_DATA({
    title: "SignUp | Taal Mail",
    description:
      "Create an account to buy, sell, or rent properties. Join our community to explore exclusive real estate listings and opportunities.",
  }),
  keywords: [
    "sign up for real estate",
    "create property account",
    "register to buy or sell property",
    "property portal registration",
  ],
};

export default function LoginPage() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <SignUp />
    </Stack>
  );
}
