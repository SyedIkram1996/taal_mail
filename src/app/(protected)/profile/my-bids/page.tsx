import MyBids from "@/components/ui/Profile/MyBids/MyBids";
import { buyRentProperties } from "@/constants/buyRent";
import { LOGIN } from "@/constants/page.routes";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "My Bids | Taal Mail",
};

export default function MyBidsPage() {
  const user = cookies().get("user");
  if (!user) {
    redirect(LOGIN);
  }

  const data = buyRentProperties;

  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <MyBids data={data} />
    </Stack>
  );
}
