import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import TextLg from "@/components/common/Text/TextLg";
import { IProperty } from "@/interfaces/IProperty";
import { getBuyRentUrl } from "@/utils/helperFunctions";
import { Grid2 } from "@mui/material";
import { headers } from "next/headers";

interface Props {
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

const BuyRentProperties = async ({ searchParams }: Props) => {
  const headersList = headers();
  const url = getBuyRentUrl({ headersList, searchParams });

  const response = await fetch(url, { cache: "no-store" });
  const data: { error: boolean; properties: IProperty[] } =
    await response.json();

  if (data.error) {
    return <></>;
  }

  return (
    <Grid2
      maxWidth={"lg"}
      container
      spacing={4}
      rowSpacing={12}
      sx={{
        padding: "2rem",
        py: "6.25rem",
        width: "100%",
        position: "relative",
      }}
    >
      {data.properties.length ? (
        data.properties.map((val, index) => (
          <Grid2
            size={{ xs: 12, sm: 6, md: 4 }}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <PropertyCard property={val} />
          </Grid2>
        ))
      ) : (
        <Grid2 size={12}>
          <TextLg
            text={`No Properties Found`}
            sx={{ textAlign: "center", mt: "3rem" }}
          />
        </Grid2>
      )}
    </Grid2>
  );
};

export default BuyRentProperties;
