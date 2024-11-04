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
  title: "Buy | Taal Mail",
};

interface Params {
  params: { plotHouse: string };
  searchParams?: {
    location: string;
    minPrice: string;
    maxPrice: string;
    totalArea: string;
    areaType: string;
    classification: string;
    type: string;
    keyword: string;
    bedrooms: string;
    bathrooms: string;
    page: string;
  };
}

export default async function Buy({ params, searchParams }: Params) {
  if (
    params.plotHouse.toLowerCase() === PLOT ||
    params.plotHouse.toLowerCase() === HOUSE
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
        <BuyRentProperties searchParams={searchParams} />
      </Suspense>
    </Stack>
  );
}
