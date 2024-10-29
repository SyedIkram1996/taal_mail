import MyOffers from "@/components/ui/Profile/MyOffers/MyOffers";
import { buyRentProperties } from "@/constants/buyRent";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Offers | Taal Mail",
};

export default function MyOffersPage() {
  const data = buyRentProperties;

  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <MyOffers data={data} />
    </Stack>
  );
}
