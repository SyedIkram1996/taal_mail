import PropertiesSkeleton from "@/components/common/Skeletons/PropertiesSkeleton";
import BuyRentProperties from "@/components/ui/Buy/BuyRentProperties";
import Filters from "@/components/ui/Buy/Filters";
import { BUY_PLOT } from "@/constants/page.routes";
import { EPropertyType } from "@/enums/enums";
import { META_DATA } from "@/utils/seo";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";
const { PLOT, HOUSE, APARTMENT } = EPropertyType;

export const metadata: Metadata = {
  ...META_DATA({
    title: "Rent | Taal Mail",
    description:
      "Find residential apartments for rent. Explore various options with features and amenities to suit your lifestyle and location preferences.",
  }),
  keywords: [
    "rent apartment",
    "residential apartments for rent",
    "rental homes",
    "apartments with amenities",
    "property rentals",
    "rent a home",
    "houses for rent",
    "residential rentals",
    "family homes for rent",
    "property rental options",
  ],
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
        <BuyRentProperties searchParams={searchParams} />
      </Suspense>
    </Stack>
  );
}
