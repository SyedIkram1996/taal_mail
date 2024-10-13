import MUILink from "@/components/common/MUILink/MUILink";
import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import { PROPERTY } from "@/constants/page.routes";
import { IBuyRentProperty } from "@/interfaces/IBuyRent";
import { Grid2, Stack } from "@mui/material";

interface Props {
  data: IBuyRentProperty[];
}

const BuyRentProperties = ({ data }: Props) => {
  return (
    <Grid2
      maxWidth={"lg"}
      container
      spacing={4}
      rowSpacing={12}
      sx={{ padding: "2rem", py: "6.25rem" }}
    >
      {data.map((val, index) => (
        <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={index}>
          <Stack sx={{ alignItems: "center" }}>
            <MUILink href={`${PROPERTY}/${val.id}`}>
              <PropertyCard
                title={val.title}
                bedRooms={val.bedRooms}
                bathRooms={val.bathRooms}
                area={val.area}
                type={val.type}
                location={val.location}
              />
            </MUILink>
          </Stack>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default BuyRentProperties;
