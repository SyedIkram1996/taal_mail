import TextXs from "@/components/common/Text/TextXs";
import { FEATURED_PROPERTIES } from "@/constants/api.routes";
import { IProperty } from "@/interfaces/IProperty";
import FeaturedListingSwiper from "./FeaturedListingSwiper";

const FeaturedListing = async () => {
  const response = await fetch(FEATURED_PROPERTIES, { cache: "no-store" });
  const data: { error: boolean; properties: IProperty[] } =
    await response.json();

  return (
    <>
      {data.error ? (
        <TextXs text="No featured listing" />
      ) : (
        <FeaturedListingSwiper featuredListing={data.properties} />
      )}
    </>
  );
};

export default FeaturedListing;
