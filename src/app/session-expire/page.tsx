import SessionExpire from "@/components/ui/SessionExpire/SessionExpire";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Session | Taal Mail",
};

export default function SessionExpirePage() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <SessionExpire />
    </Stack>
  );
}
