import MyInfo from "@/components/ui/Profile/MyInfo/MyInfo";
import { MY_INFO } from "@/constants/api.routes";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "My Info | Taal Mail",
};

export default async function MyInfoPage() {
  const token = cookies().get("token");
  const response = await fetch(MY_INFO, {
    cache: "no-store",
    headers: {
      Authorization: token ? `Bearer ${token.value}` : "",
      "Content-Type": "application/json",
    },
    next: { tags: ["myInfo"] },
  });

  const data = await response.json();

  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
        paddingX: "1rem",
      }}
    >
      {data.user && <MyInfo user={data.user} token={token} />}
    </Stack>
  );
}
