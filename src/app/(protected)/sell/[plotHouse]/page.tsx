import AddPropertyBanner from "@/components/ui/Property/Sell/AddPropertyBanner";
import AddPropertyDetails from "@/components/ui/Property/Sell/AddPropertyDetails";
import { SELL_PLOT } from "@/constants/page.routes";
import { EPropertyType } from "@/enums/enums";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const { PLOT, HOUSE } = EPropertyType;

export const metadata: Metadata = {
  title: "Sell | Taal Mail",
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
