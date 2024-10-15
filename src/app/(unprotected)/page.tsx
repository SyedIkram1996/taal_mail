import Banner from "@/components/ui/Home/Banner";
import FeaturedListing from "@/components/ui/Home/FeaturedListing";
import Features from "@/components/ui/Home/Features";
import SearchByLocation from "@/components/ui/Home/SearchByLocation";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Banner text="THE MOST TRUSTED REAL ESTATE MANAGEMENT COMPANY OF GENUINE CUSTOMERS">
        <SearchByLocation />
      </Banner>
      <Features />
      <FeaturedListing />
    </Stack>
  );
}
