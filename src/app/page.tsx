import Banner from "@/components/ui/Home/Banner";
import FeaturedListing from "@/components/ui/Home/FeaturedListing";
import Features from "@/components/ui/Home/Features";
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
      <Banner />
      <Features />
      <FeaturedListing />
    </Stack>
  );
}
