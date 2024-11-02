import TextSm from "@/components/common/Text/TextSm";
import TextXs from "@/components/common/Text/TextXs";
import { FEATURED_PROPERTIES } from "@/constants/api.routes";
import { IProperty } from "@/interfaces/IProperty";
import { Stack } from "@mui/material";
import FeaturedListingSwiper from "./FeaturedListingSwiper";

const FeaturedListing = async () => {
  const response = await fetch(FEATURED_PROPERTIES, { cache: "no-store" });
  const data: { error: boolean; properties: IProperty[] } =
    await response.json();

  return (
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
      {data.error ? (
        <TextXs text="No featured listing" />
      ) : (
        <FeaturedListingSwiper featuredListing={data.properties} />
      )}
    </Stack>
  );
};

export default FeaturedListing;
