import MyOffers from "@/components/ui/Profile/MyOffers/MyOffers";
import { MY_OFFERS } from "@/constants/api.routes";
import { META_DATA } from "@/utils/seo";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  ...META_DATA({
    title: "My Offers | Taal Mail",
    description:
      "View and manage all your property offers. Check offer statuses, track history, and make new offers on listed properties.",
  }),
  keywords: [
    "my property offers",
    "view my offers",
    "offer history",
    "submitted offers",
    "property offers tracker",
  ],
};

export default async function MyOffersPage() {
  const token = cookies().get("token");

  const response = await fetch(MY_OFFERS, {
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
      {!res.error && <MyOffers data={res.data.offers} token={token} />}
    </Stack>
  );
}
