import AddPropertyBanner from "@/components/ui/Property/AddPropertyBanner";
import AddPropertyDetails from "@/components/ui/Property/AddPropertyDetails";
import { LOGIN, SELL_PLOT } from "@/constants/page.routes";
import { EPropertyType } from "@/enums/enums";
import { Stack } from "@mui/material";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const { PLOT, HOUSE } = EPropertyType;

interface Params {
  params: { plotHouse: string };
  searchParams: { query?: string; page?: string };
}

export default function SellPage({ params, searchParams }: Params) {
  const user = cookies().get("user");
  if (!user) {
    redirect(LOGIN);
  }

  if (
    params.plotHouse.toLowerCase() === PLOT ||
    params.plotHouse.toLowerCase() === HOUSE
  ) {
  } else {
    redirect(SELL_PLOT);
  }

  return (
    <Stack
      sx={{
        alignItems: "center",
        mt: "6.5rem",
      }}
    >
      <AddPropertyBanner />
      <AddPropertyDetails />
    </Stack>
  );
}
