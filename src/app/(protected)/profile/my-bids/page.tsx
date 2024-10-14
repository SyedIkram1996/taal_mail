import TextXl from "@/components/common/Text/TextXl";
import { LOGIN } from "@/constants/page.routes";
import { Stack } from "@mui/material";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function MyBidsPage() {
  const user = cookies().get("user");
  if (!user) {
    redirect(LOGIN);
  }

  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <TextXl text="MY BIDS" />
    </Stack>
  );
}
