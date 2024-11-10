import MyBids from "@/components/ui/Profile/MyBids/MyBids";
import { MY_BIDS } from "@/constants/api.routes";
import { META_DATA } from "@/utils/seo";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  ...META_DATA({
    title: "My Bids | Taal Mail",
    description:
      "View your active and past bids on properties. Track bid statuses, review bidding history, and manage offers with ease.",
  }),
  keywords: [
    "my property bids",
    "real estate bidding history",
    "track property bids",
    "view my bids",
    "property bid status",
  ],
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
