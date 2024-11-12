import AddPropertyBanner from "@/components/ui/Property/Sell/AddPropertyBanner";
import AddPropertyDetails from "@/components/ui/Property/Sell/AddPropertyDetails";
import { SELL_PLOT } from "@/constants/page.routes";
import { EPropertyType } from "@/enums/enums";
import { META_DATA } from "@/utils/seo";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const { PLOT, HOUSE } = EPropertyType;

export const metadata: Metadata = {
  ...META_DATA({
    title: "Sell | Taal Mail",
    description:
      "Sell your house with ease. Create a listing, add property details, and connect with interested buyers on our platform.",
  }),
  keywords: [
    "sell a house",
    "list residential house for sale",
    "home listings for sale",
    "real estate selling",
    "sell property online",
    "sell residential plot",
    "plot for sale",
    "list your property",
    "sell real estate",
    "plot listings",
  ],
};

interface Params {
  params: { plotHouse: string };
}

export default function SellPage({ params }: Params) {
  if (
    params.plotHouse.toLowerCase() === PLOT ||
    params.plotHouse.toLowerCase() === HOUSE
  ) {
  } else {
    redirect(SELL_PLOT);
  }

  const token = cookies().get("token");

  return (
    <Stack
      sx={{
        alignItems: "center",
        mt: { md: "6.5rem" },
      }}
    >
      <AddPropertyBanner />
      <AddPropertyDetails token={token} />
    </Stack>
  );
}
