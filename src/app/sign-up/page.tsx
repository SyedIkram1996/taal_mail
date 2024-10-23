import SignUp from "@/components/ui/SignUp/SignUp";
import { Stack } from "@mui/material";
import { Metadata } from "next";

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
      <SignUp />
    </Stack>
  );
}
