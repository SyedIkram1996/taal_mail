import MyOffers from "@/components/ui/Profile/MyOffers/MyOffers";
import { buyRentProperties } from "@/constants/buyRent";
import { LOGIN } from "@/constants/page.routes";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "My Offers | Taal Mail",
};

export default function MyOffersPage() {
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
      <MyOffers data={data} />
    </Stack>
  );
}
