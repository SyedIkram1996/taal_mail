import { IProperty } from "@/interfaces/IProperty";
import { Grid2 } from "@mui/material";
import MyOffer from "./MyOffer";

interface Props {
  data: IProperty[];
}

const MyOffers = ({ data }: Props) => {
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
          size={{ xs: 12, sm: 6, lg: 4 }}
          sx={{ display: "flex", justifyContent: "center" }}
          key={index}
        >
          <MyOffer val={val} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default MyOffers;
