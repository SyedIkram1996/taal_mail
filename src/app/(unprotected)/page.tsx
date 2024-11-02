import PropertiesSkeleton from "@/components/common/Skeletons/PropertiesSkeleton";
import Banner from "@/components/ui/Home/Banner";
import FeaturedListing from "@/components/ui/Home/FeaturedListing";
import Features from "@/components/ui/Home/Features";
import SearchByLocation from "@/components/ui/Home/SearchByLocation";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Home | Taal Mail",
};

export default function Home() {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        ".bannerImage": {
          height: "100%",
          width: { xs: "720px", md: "1440px" },
        },
      }}
    >
      <Banner text="THE MOST TRUSTED REAL ESTATE MANAGEMENT COMPANY OF GENUINE CUSTOMERS">
        <SearchByLocation />
      </Banner>
      <Features />

      <Suspense fallback={<PropertiesSkeleton />}>
        <FeaturedListing />
      </Suspense>
    </Stack>
  );
}
