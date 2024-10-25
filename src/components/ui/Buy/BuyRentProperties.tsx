import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import { IProperty } from "@/interfaces/IProperty";
import { Grid2 } from "@mui/material";

interface Props {
  data: IProperty[];
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
        <Grid2
          size={{ xs: 12, sm: 6, md: 4 }}
          key={index}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <PropertyCard
            id={val.id}
            title={val.title}
            bedRooms={val.bedRooms}
            bathRooms={val.bathRooms}
            area={val.area}
            type={val.type}
            location={val.location}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default BuyRentProperties;
