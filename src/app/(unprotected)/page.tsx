import PropertiesSkeleton from "@/components/common/Skeletons/PropertiesSkeleton";
import TextSm from "@/components/common/Text/TextSm";
import Banner from "@/components/ui/Home/Banner";
import FeaturedListing from "@/components/ui/Home/FeaturedListing";
import Features from "@/components/ui/Home/Features";
import SearchByLocation from "@/components/ui/Home/SearchByLocation";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Home | Taal Mail",
  description: "taal-mail.vercel.app - Buy and Rent Properties",
  keywords: ["buy property", "sell properties", "buy house", "sell house"],
  openGraph: {
    url: "https://taal-mail.vercel.app",
    type: "website",
    title: "Home | Taal Mail",
    description: "taal-mail.vercel.app - Buy and Rent Properties",
    images: [
      {
        url: "https://res.cloudinary.com/taalmail/image/upload/v1730311074/taalmaillogo_khjusc.png",
        width: 514,
        height: 170,
        alt: "taal-mail",
      },
    ],
  },
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

      <Stack
        sx={{
          pt: "11.09rem",
          width: { xs: "100%", md: "66.5625rem" },
          pb: "4.31rem",
          px: { xs: "1rem", md: "0" },
        }}
      >
        <TextSm
          text="Featured Listings"
          sx={{
            fontSize: "2rem",
            color: "var(--text-secondary)",
            textAlign: "start",
            pb: "1.91rem",
          }}
        />
        <Suspense fallback={<PropertiesSkeleton />}>
          <FeaturedListing />
        </Suspense>
      </Stack>
    </Stack>
  );
}
