import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import TextLg from "@/components/common/Text/TextLg";
import { PROPERTIES } from "@/constants/api.routes";
import { IProperty } from "@/interfaces/IProperty";
import { queryKeyValue } from "@/utils/helperFunctions";
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
    baths: string;
    beds: string;
    page: string;
  };
}

const BuyRentProperties = async ({ searchParams }: Props) => {
  let purpose = "";
  const headersList = headers();
  const pathname = headersList.get("x-pathname");
  if (pathname) {
    purpose = pathname?.includes("/buy") ? "sell" : "rent";
  }

  let url = `${PROPERTIES}?${queryKeyValue("purpose", purpose)}&${queryKeyValue("page", "1")}`;
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
