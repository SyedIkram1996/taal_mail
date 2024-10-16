import MyInfo from "@/components/ui/Profile/MyInfo/MyInfo";
import { LOGIN } from "@/constants/page.routes";
import { Stack } from "@mui/material";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function MyInfoPage() {
  const user = cookies().get("user");
  if (!user) {
    redirect(LOGIN);
  }

  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
        paddingX: "1rem",
      }}
    >
      <MyInfo />
    </Stack>
  );
}
