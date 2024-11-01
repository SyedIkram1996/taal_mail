import MyBids from "@/components/ui/Profile/MyBids/MyBids";
import { MY_BIDS } from "@/constants/api.routes";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "My Bids | Taal Mail",
};

export default async function MyBidsPage() {
  const token = cookies().get("token");

  const response = await fetch(MY_BIDS, {
    cache: "no-store",
    headers: {
      Authorization: token ? `Bearer ${token.value}` : "",
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();

  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {!res.error && <MyBids data={res.data.bids} token={token} />}
    </Stack>
  );
}
