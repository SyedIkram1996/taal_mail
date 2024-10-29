import PropertiesSkeleton from "@/components/common/Skeletons/PropertiesSkeleton";
import BuyRentProperties from "@/components/ui/Buy/BuyRentProperties";
import Filters from "@/components/ui/Buy/Filters";
import { BUY_PLOT } from "@/constants/page.routes";
import { EPropertyType } from "@/enums/enums";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";
const { PLOT, HOUSE, APARTMENT } = EPropertyType;

export const metadata: Metadata = {
  title: "Rent | Taal Mail",
};

interface Params {
  params: { plotHouse: string };
  searchParams: { query?: string; page?: string };
}

export default function Buy({ params, searchParams }: Params) {
  if (
    params.plotHouse.toLowerCase() === PLOT ||
    params.plotHouse.toLowerCase() === HOUSE ||
    params.plotHouse.toLowerCase() === APARTMENT
  ) {
  } else {
    redirect(BUY_PLOT);
  }

  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Filters />
      <Suspense fallback={<PropertiesSkeleton />}>
        <BuyRentProperties />
      </Suspense>
    </Stack>
  );
}
