import ForgotPassword from "@/components/ui/ForgotPassword/ForgotPassword";
import { Stack } from "@mui/material";

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
