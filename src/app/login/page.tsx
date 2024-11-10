import Login from "@/components/ui/Login/Login";
import { META_DATA } from "@/utils/seo";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...META_DATA({
    title: "Login | Taal Mail",
    description:
      "Sign in to your account to manage property listings, bids, and inquiries. Access your personalized real estate dashboard.",
  }),
  keywords: [
    "user login",
    "property account login",
    "sign in to buy property",
    "real estate portal access",
    "login to view properties",
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
      <Login />
    </Stack>
  );
}
