import MyBids from "@/components/ui/Profile/MyBids/MyBids";
import { buyRentProperties } from "@/constants/buyRent";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Bids | Taal Mail",
};

export default function MyBidsPage() {
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
