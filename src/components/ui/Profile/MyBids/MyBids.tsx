import { IBuyRentProperty } from "@/interfaces/IBuyRent";
import { Grid2 } from "@mui/material";
import MyBid from "./MyBid";

interface Props {
  data: IBuyRentProperty[];
}

const MyBids = ({ data }: Props) => {
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
          key={index}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <MyBid val={val} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default MyBids;
