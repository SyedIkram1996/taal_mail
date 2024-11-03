import ForgotPassword from "@/components/ui/ForgotPassword/ForgotPassword";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Taal Mail",
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
