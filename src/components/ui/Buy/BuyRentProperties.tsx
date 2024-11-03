import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import TextLg from "@/components/common/Text/TextLg";
import { PROPERTIES } from "@/constants/api.routes";
import { IProperty } from "@/interfaces/IProperty";
import { Grid2 } from "@mui/material";

const BuyRentProperties = async () => {
  const response = await fetch(PROPERTIES, { cache: "no-store" });
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
