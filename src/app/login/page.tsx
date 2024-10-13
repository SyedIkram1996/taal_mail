import Login from "@/components/ui/Login/Login";
import { HOME } from "@/constants/page.routes";
import { Stack } from "@mui/material";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const user = cookies().get("user");
  if (user) {
    redirect(HOME);
  }

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
